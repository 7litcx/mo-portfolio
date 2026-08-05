import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function PricingSection({ lang }) {
  const deliverables = [
    'Full website design & development',
    'Mobile-responsive, accessible layouts',
    'Performance & SEO optimization',
    '3 months of post-launch support'
  ];

  return (
    <section id="pricing" className="section-band-alt" style={{ position: 'relative', zIndex: 10 }}>
      <div className="section-container">
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Corner Bloom Glow */}
          <div
            className="pricing-glow"
            style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(247, 226, 192, 0.12) 0%, rgba(5,5,5,0) 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
              transition: 'opacity 0.5s ease'
            }}
          />

          {/* Single Large Glass Card */}
          <div
            className="glass-card pricing-card"
            style={{
              padding: '48px 40px',
              borderRadius: '28px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderColor: 'rgba(247, 226, 192, 0.15)'
            }}
          >
            {/* Pulsing Availability Pill */}
            <div style={{ marginBottom: '24px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  background: 'rgba(74, 222, 128, 0.1)',
                  border: '1px solid rgba(74, 222, 128, 0.3)',
                  color: '#4ADE80'
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#4ADE80',
                    boxShadow: '0 0 10px #4ADE80',
                    animation: 'pulseGreen 2s infinite'
                  }}
                />
                <span className="font-mono" style={{ fontSize: '12px', fontWeight: '600' }}>
                  AVAILABLE FOR FREELANCE & FULL-TIME
                </span>
              </div>
            </div>

            {/* Headline & Subtitle */}
            <h2
              className="headline-serif"
              style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: '700',
                lineHeight: '1.2',
                marginBottom: '12px'
              }}
            >
              Project Pricing
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
              Simple, transparent pricing for your next big idea.
            </p>

            {/* 4 Deliverables Rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              {deliverables.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '14px 18px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <CheckCircle2 size={18} color="#4ADE80" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '15px', color: '#E5E7EB', fontWeight: '500' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Full-width Champagne Button */}
            <a
              href="#contact"
              className="btn-champagne"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '14px 28px',
                fontSize: '14px'
              }}
            >
              <span>START A PROJECT</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulseGreen {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }
        .pricing-card:hover {
          border-color: rgba(247, 226, 192, 0.4) !important;
          box-shadow: 0 0 40px rgba(247, 226, 192, 0.15) !important;
        }
      `}</style>
    </section>
  );
}
