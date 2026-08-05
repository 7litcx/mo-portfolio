import { ArrowDown, Terminal } from 'lucide-react';

export default function HeroSection({ lang }) {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        paddingTop: '160px',
        paddingBottom: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div
        style={{
          maxWidth: '896px',
          width: '100%',
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Mono Git Badge */}
        <div
          className="reveal active"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '32px'
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#4ADE80',
              boxShadow: '0 0 8px #4ADE80'
            }}
          />
          <span
            className="font-mono"
            style={{
              fontSize: '12px',
              color: 'var(--text-secondary)',
              letterSpacing: '0.05em'
            }}
          >
            git commit -m "mo_khaled"
          </span>
        </div>

        {/* Playfair Headline with Italic Subclause */}
        <h1
          className="headline-serif reveal active"
          style={{
            fontSize: 'clamp(40px, 6.5vw, 76px)',
            fontWeight: '700',
            lineHeight: '1.08',
            marginBottom: '28px',
            letterSpacing: '-0.02em'
          }}
        >
          “Transforming ideas into <br />
          <span
            className="gradient-text-gray"
            style={{
              fontStyle: 'italic',
              fontWeight: '400'
            }}
          >
            intelligent code”
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="reveal active"
          style={{
            fontSize: 'clamp(16px, 2vw, 19px)',
            color: 'var(--text-secondary)',
            maxWidth: '680px',
            lineHeight: '1.7',
            marginBottom: '42px',
            fontWeight: '300'
          }}
        >
          {lang === 'en'
            ? 'Mo Khaled is a Full Stack Engineer dedicated to designing, developing, and deploying resilient web applications through disciplined engineering & warm editorial craftsmanship.'
            : 'محمد خالد - مهندس برمجيات Full Stack متخصص في تصميم وتطوير المنصات الرقمية الحديثة بمعمارية برمجية متطورة وأداء عالي.'}
        </p>

        {/* Action Buttons */}
        <div
          className="reveal active"
          style={{
            display: 'flex',
            gap: '18px',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '80px'
          }}
        >
          <a href="#projects" className="btn-champagne">
            <span>VIEW MY WORK</span>
          </a>

          <a
            href="/Mohamed_Khaled_Resume.pdf"
            download="Mohamed_Khaled_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-hairline"
          >
            <Terminal size={15} color="#F7E2C0" />
            <span>DOWNLOAD RESUME</span>
          </a>
        </div>

        {/* Slow Bouncing Scroll Cue */}
        <a
          href="#about"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'var(--text-muted)',
            transition: 'color 0.2s ease',
            animation: 'bounceCue 2.5s infinite'
          }}
        >
          <span className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.15em' }}>
            SCROLL TO DISCOVER
          </span>
          <ArrowDown size={14} color="#F7E2C0" />
        </a>
      </div>

      <style>{`
        @keyframes bounceCue {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(8px); }
          60% { transform: translateY(4px); }
        }
      `}</style>
    </section>
  );
}
