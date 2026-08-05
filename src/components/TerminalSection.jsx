import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const fullCodeText = `// Initialize Mo Khaled Ledger & Engineering Arsenal
const engineer = {
  name: 'Mohamed Khaled',
  role: 'Full Stack Engineer & Co-Founder',
  stack: [
    'Next.js / React', 'TypeScript', 'Express.js',
    '.NET / C#', 'Supabase / PostgreSQL', 'OpenAI & Gemini APIs'
  ],
  location: 'Jeddah, Saudi Arabia',
  status: 'Ready to Deploy 🚀'
};

async function executeDeployment() {
  console.log(\`Initializing \${engineer.name}'s environment...\`);
  return await ledger.connect({ status: engineer.status });
}
`;

export default function TerminalSection({ lang }) {
  const [displayedText, setDisplayedText] = useState('');
  const [hasTyped, setHasTyped] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !hasTyped) {
          setHasTyped(true);
          let currentIndex = 0;
          const interval = setInterval(() => {
            if (currentIndex < fullCodeText.length) {
              setDisplayedText(fullCodeText.slice(0, currentIndex + 1));
              currentIndex++;
            } else {
              clearInterval(interval);
            }
          }, 24);
        }
      },
      { threshold: 0.3 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => observer.disconnect();
  }, [hasTyped]);

  // Syntax Highlighting Renderer
  const renderHighlightedCode = (text) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      if (line.startsWith('//')) {
        return (
          <div key={idx} style={{ color: '#6B7280', fontStyle: 'italic' }}>
            {line}
          </div>
        );
      }

      // Simple keyword replacements for visual styling
      return (
        <div key={idx}>
          {line.split(/('.*?'|const|async|function|return|await|engineer|stack|location|status|name|role)/g).map((part, pIdx) => {
            if (part === 'const' || part === 'async' || part === 'function' || part === 'return' || part === 'await') {
              return <span key={pIdx} style={{ color: '#F7E2C0', fontWeight: '600' }}>{part}</span>;
            }
            if (part.startsWith("'") && part.endsWith("'")) {
              return <span key={pIdx} style={{ color: '#4ADE80' }}>{part}</span>;
            }
            if (part === 'engineer' || part === 'stack' || part === 'location' || part === 'status' || part === 'name' || part === 'role') {
              return <span key={pIdx} style={{ color: '#60A5FA' }}>{part}</span>;
            }
            return <span key={pIdx}>{part}</span>;
          })}
        </div>
      );
    });
  };

  return (
    <section id="terminal" ref={terminalRef} className="section-band-alt" style={{ position: 'relative', zIndex: 10 }}>
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="eyebrow-mono" style={{ marginBottom: '12px' }}>
            LIVE TERMINAL
          </div>
          <h2
            className="headline-serif"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: '700', marginBottom: '12px' }}
          >
            {lang === 'en' ? 'Tech Stack Ledger' : 'سجل التقنيات المباشر'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '580px', margin: '0 auto' }}>
            Interactive code environment rendering clean JavaScript engineering specs in real time.
          </p>
        </div>

        {/* Laptop Mockup Container */}
        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative' }}>
          {/* Laptop Under-Glow */}
          <div
            style={{
              position: 'absolute',
              bottom: '-20px',
              left: '10%',
              right: '10%',
              height: '40px',
              background: 'radial-gradient(ellipse at center, rgba(247, 226, 192, 0.15) 0%, rgba(5,5,5,0) 70%)',
              filter: 'blur(20px)',
              pointerEvents: 'none'
            }}
          />

          {/* Screen Outer Bezel */}
          <div
            className="glass-card"
            style={{
              borderRadius: '18px 18px 0 0',
              background: '#080808',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderBottom: 'none',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
              overflow: 'hidden'
            }}
          >
            {/* Traffic Lights Header Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 18px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F56' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27C93F' }} />
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <TerminalIcon size={14} color="#F7E2C0" />
                <span>mo-khaled-stack.js</span>
              </div>
              <div style={{ width: '50px' }} />
            </div>

            {/* Code Screen Area */}
            <div
              style={{
                padding: '24px 28px',
                minHeight: '280px',
                background: '#050505',
                fontFamily: 'var(--font-mono)',
                fontSize: '13.5px',
                lineHeight: '1.7',
                color: '#E5E7EB'
              }}
            >
              {renderHighlightedCode(displayedText)}
              {/* Blinking Champagne Cursor */}
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '16px',
                  background: '#F7E2C0',
                  boxShadow: '0 0 8px #F7E2C0',
                  marginLeft: '2px',
                  animation: 'blinkCursor 1s infinite'
                }}
              />
            </div>
          </div>

          {/* Laptop Base Lip */}
          <div
            style={{
              height: '14px',
              background: 'linear-gradient(to bottom, #141414 0%, #080808 100%)',
              borderRadius: '0 0 16px 16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              position: 'relative'
            }}
          >
            {/* Center Notch */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '70px',
                height: '5px',
                background: '#050505',
                borderRadius: '0 0 6px 6px'
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
