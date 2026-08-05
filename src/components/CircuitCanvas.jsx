import { useEffect, useRef } from 'react';

export default function CircuitCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Micro-fine grid cell size (18px)
    const CELL_SIZE = 18;
    const ACCENT_COLORS = ['#F7E2C0', '#E5C185', '#F5D061', '#D4AF37'];
    
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mouse Tracking
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Circuit Runner Class
    class Runner {
      constructor() {
        this.reset();
      }

      reset() {
        const cols = Math.floor(width / CELL_SIZE);
        const rows = Math.floor(height / CELL_SIZE);
        
        this.gridX = Math.floor(Math.random() * cols);
        this.gridY = Math.floor(Math.random() * rows);
        this.x = this.gridX * CELL_SIZE;
        this.y = this.gridY * CELL_SIZE;

        // Directions: 0: Right, 1: Down, 2: Left, 3: Up
        this.dir = Math.floor(Math.random() * 4);
        this.speed = 1.2 + Math.random() * 0.8;
        this.color = ACCENT_COLORS[Math.floor(Math.random() * ACCENT_COLORS.length)];
        
        this.history = [];
        this.maxHistory = 10 + Math.floor(Math.random() * 14);
        this.life = 140 + Math.floor(Math.random() * 180);
      }

      update() {
        this.life--;
        if (this.life <= 0) {
          this.reset();
          return;
        }

        // Add current position to trail
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > this.maxHistory) {
          this.history.shift();
        }

        // Move towards target grid point
        const targetX = this.gridX * CELL_SIZE;
        const targetY = this.gridY * CELL_SIZE;

        const dx = targetX - this.x;
        const dy = targetY - this.y;

        if (Math.abs(dx) <= this.speed && Math.abs(dy) <= this.speed) {
          // Reached intersection: option to turn
          this.x = targetX;
          this.y = targetY;

          // 18% chance to turn 90 deg
          if (Math.random() < 0.18) {
            const turnLeft = Math.random() < 0.5;
            if (turnLeft) {
              this.dir = (this.dir + 3) % 4;
            } else {
              this.dir = (this.dir + 1) % 4;
            }
          }

          // Advance grid coordinate in direction
          if (this.dir === 0) this.gridX++;
          else if (this.dir === 1) this.gridY++;
          else if (this.dir === 2) this.gridX--;
          else if (this.dir === 3) this.gridY--;

          // Bounce if boundary exceeded
          const maxCols = Math.floor(width / CELL_SIZE);
          const maxRows = Math.floor(height / CELL_SIZE);
          if (this.gridX < 0 || this.gridX >= maxCols || this.gridY < 0 || this.gridY >= maxRows) {
            this.reset();
          }
        } else {
          // Continue moving straight toward target point
          if (this.dir === 0) this.x += this.speed;
          else if (this.dir === 1) this.y += this.speed;
          else if (this.dir === 2) this.x -= this.speed;
          else if (this.dir === 3) this.y -= this.speed;
        }
      }

      draw(ctx) {
        if (this.history.length < 2) return;

        ctx.save();
        ctx.strokeStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 3;
        ctx.lineWidth = 0.6; // Ultra-fine hairline gold lines

        ctx.beginPath();
        ctx.moveTo(this.history[0].x, this.history[0].y);
        for (let i = 1; i < this.history.length; i++) {
          ctx.lineTo(this.history[i].x, this.history[i].y);
        }
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        // Draw micro bright head dot
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.0, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Binary Glyphs
    const numGlyphs = 90;
    const glyphs = Array.from({ length: numGlyphs }, () => ({
      x: Math.floor(Math.random() * Math.floor(width / CELL_SIZE)) * CELL_SIZE + 3,
      y: Math.floor(Math.random() * Math.floor(height / CELL_SIZE)) * CELL_SIZE + 10,
      val: Math.random() < 0.5 ? '0' : '1',
      flipTimer: Math.floor(Math.random() * 300)
    }));

    // Instantiate ~45 Runners for fine grid density
    const runners = Array.from({ length: 45 }, () => new Runner());

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      runners.forEach(r => r.reset());
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    const render = () => {
      // Semi-transparent void background fill to leave subtle trails
      ctx.fillStyle = 'rgba(5, 5, 5, 0.22)';
      ctx.fillRect(0, 0, width, height);

      // Draw ultra-faint static grid with 18px cells & hairline stroke
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.008)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let x = 0; x < width; x += CELL_SIZE) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += CELL_SIZE) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Render binary glyphs in micro 8px font
      ctx.font = '8px "JetBrains Mono", monospace';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.035)';
      glyphs.forEach(g => {
        g.flipTimer--;
        if (g.flipTimer <= 0) {
          g.val = g.val === '0' ? '1' : '0';
          g.flipTimer = 150 + Math.floor(Math.random() * 300);
          g.x = Math.floor(Math.random() * Math.floor(width / CELL_SIZE)) * CELL_SIZE + 3;
          g.y = Math.floor(Math.random() * Math.floor(height / CELL_SIZE)) * CELL_SIZE + 10;
        }
        ctx.fillText(g.val, g.x, g.y);
      });

      // Mouse Highlight Cell
      if (mouseX >= 0 && mouseY >= 0) {
        const cellX = Math.floor(mouseX / CELL_SIZE) * CELL_SIZE;
        const cellY = Math.floor(mouseY / CELL_SIZE) * CELL_SIZE;
        
        ctx.save();
        ctx.strokeStyle = 'rgba(247, 226, 192, 0.25)';
        ctx.fillStyle = 'rgba(247, 226, 192, 0.02)';
        ctx.shadowColor = '#F7E2C0';
        ctx.shadowBlur = 6;
        ctx.lineWidth = 0.8;
        ctx.fillRect(cellX, cellY, CELL_SIZE, CELL_SIZE);
        ctx.strokeRect(cellX, cellY, CELL_SIZE, CELL_SIZE);
        ctx.restore();
      }

      // Update and draw runners
      if (!prefersReducedMotion) {
        runners.forEach(runner => {
          runner.update();
          runner.draw(ctx);
        });
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
      {/* Bottom fade gradient overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '250px',
          background: 'linear-gradient(to bottom, rgba(5,5,5,0) 0%, #050505 100%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
