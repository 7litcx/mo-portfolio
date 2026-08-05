import { useState, useEffect, useRef } from 'react';
import { Globe, Smartphone, Palette, Cloud, ArrowUpRight } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDotnet,
  SiExpress
} from 'react-icons/si';

export default function BentoStackSection({ lang }) {
  const [barsAnimated, setBarsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setBarsAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const webChips = [
    { label: 'React.js', icon: <SiReact size={14} color="#61DAFB" /> },
    { label: 'Next.js', icon: <SiNextdotjs size={14} color="#E5E7EB" /> },
    { label: 'TypeScript', icon: <SiTypescript size={14} color="#3178C6" /> },
    { label: 'JavaScript', icon: <SiJavascript size={14} color="#F7DF1E" /> },
    { label: '.NET / C#', icon: <SiDotnet size={14} color="#512BD4" /> },
    { label: 'Express.js', icon: <SiExpress size={14} color="#E5E7EB" /> },
    { label: 'Tailwind CSS', icon: <SiTailwindcss size={14} color="#06B6D4" /> }
  ];

  const proficiencyBars = [
    { name: 'React Native', percent: 92, color: '#4ADE80' },
    { name: 'Flutter & Dart', percent: 85, color: '#60A5FA' },
    { name: 'Mobile Architecture', percent: 88, color: '#F7E2C0' }
  ];

  return (
    <section id="stack" ref={sectionRef} className="section-container" style={{ position: 'relative', zIndex: 10 }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="eyebrow-mono" style={{ marginBottom: '12px' }}>
          TECHNICAL ARSENAL
        </div>
        <h2
          className="headline-serif"
          style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: '700', marginBottom: '16px' }}
        >
          {lang === 'en' ? 'Core Capabilities' : 'المهارات والتقنيات'}
        </h2>
        <div
          style={{
            width: '60px',
            height: '3px',
            background: 'var(--accent-champagne)',
            margin: '0 auto',
            borderRadius: '2px',
            boxShadow: '0 0 12px #F7E2C0'
          }}
        />
      </div>

      {/* Bento Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px'
        }}
        className="bento-grid"
      >
        {/* Card 1: Wide 2-Col "Web Engineering" (Champagne Accent) */}
        <div
          className="glass-card bento-card-web"
          style={{
            gridColumn: 'span 8',
            padding: '32px',
            borderColor: 'rgba(247, 226, 192, 0.15)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(247, 226, 192, 0.08)',
                border: '1px solid rgba(247, 226, 192, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F7E2C0'
              }}
            >
              <Globe size={22} />
            </div>
            <ArrowUpRight size={18} color="rgba(255,255,255,0.3)" />
          </div>

          <h3 className="headline-serif" style={{ fontSize: '24px', fontWeight: '700', marginBottom: '10px' }}>
            Web Engineering & Full-Stack Systems
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
            Architecting modern, accessible, and ultra-fast web interfaces using React, Next.js, .NET / C#, and Express.js backends with server-side rendering, type safety, and modular design tokens.
          </p>

          {/* Tech Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {webChips.map(chip => (
              <div
                key={chip.label}
                className="font-mono bento-chip"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '12px',
                  color: 'var(--text-primary)',
                  transition: 'all 0.25s ease'
                }}
              >
                {chip.icon}
                <span>{chip.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Tall "Mobile & Native" (Circuit Green Accent) */}
        <div
          className="glass-card bento-card-mobile"
          style={{
            gridColumn: 'span 4',
            gridRow: 'span 2',
            padding: '32px',
            borderColor: 'rgba(74, 222, 128, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(74, 222, 128, 0.08)',
                  border: '1px solid rgba(74, 222, 128, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4ADE80'
                }}
              >
                <Smartphone size={22} />
              </div>
              <ArrowUpRight size={18} color="rgba(255,255,255,0.3)" />
            </div>

            <h3 className="headline-serif" style={{ fontSize: '22px', fontWeight: '700', marginBottom: '10px' }}>
              Mobile & Cross-Platform
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.6', marginBottom: '28px' }}>
              Building cross-platform mobile experiences with native performance and responsive layouts.
            </p>

            {/* Animated Proficiency Bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {proficiencyBars.map(bar => (
                <div key={bar.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }} className="font-mono">
                    <span style={{ color: 'var(--text-primary)' }}>{bar.name}</span>
                    <span style={{ color: bar.color }}>{bar.percent}%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div
                      style={{
                        height: '100%',
                        width: barsAnimated ? `${bar.percent}%` : '0%',
                        background: bar.color,
                        borderRadius: '3px',
                        transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="font-mono" style={{ fontSize: '11px', color: '#4ADE80', marginTop: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80' }} />
            <span>ACTIVE MOBILE STACK</span>
          </div>
        </div>

        {/* Card 3: "Product Design" (Slate Blue Accent) */}
        <div
          className="glass-card"
          style={{
            gridColumn: 'span 4',
            padding: '28px',
            borderColor: 'rgba(96, 165, 250, 0.15)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(96, 165, 250, 0.08)',
                border: '1px solid rgba(96, 165, 250, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#60A5FA'
              }}
            >
              <Palette size={20} />
            </div>
            <ArrowUpRight size={16} color="rgba(255,255,255,0.3)" />
          </div>

          <h3 className="headline-serif" style={{ fontSize: '19px', fontWeight: '700', marginBottom: '8px' }}>
            Product Design & UI/UX
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.5' }}>
            Designing precise design tokens, wireframes, and dark-mode glassmorphic component libraries in Figma.
          </p>
        </div>

        {/* Card 4: "DevOps & Cloud Infrastructure" (Violet Accent) */}
        <div
          className="glass-card"
          style={{
            gridColumn: 'span 4',
            padding: '28px',
            borderColor: 'rgba(192, 132, 252, 0.15)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(192, 132, 252, 0.08)',
                border: '1px solid rgba(192, 132, 252, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#C084FC'
              }}
            >
              <Cloud size={20} />
            </div>
            <ArrowUpRight size={16} color="rgba(255,255,255,0.3)" />
          </div>

          <h3 className="headline-serif" style={{ fontSize: '19px', fontWeight: '700', marginBottom: '8px' }}>
            DevOps & Cloud Storage
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.5' }}>
            Deploying with Vercel, Supabase PostgreSQL, Express.js & .NET APIs, Docker containers, and automated CI/CD pipelines.
          </p>
        </div>
      </div>

      <style>{`
        .bento-card-web:hover .bento-chip {
          border-color: rgba(247, 226, 192, 0.4) !important;
          color: var(--accent-champagne) !important;
        }
        @media (max-width: 968px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-grid > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
