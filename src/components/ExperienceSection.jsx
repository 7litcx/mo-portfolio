import { CheckCircle2 } from 'lucide-react';

export default function ExperienceSection({ t, lang }) {
  const timeline = t.experience.timeline;

  const getPillStyle = (idx) => {
    if (idx === 0) return { bg: 'rgba(74, 222, 128, 0.12)', border: 'rgba(74, 222, 128, 0.3)', color: '#4ADE80' };
    if (idx === 1) return { bg: 'rgba(247, 226, 192, 0.12)', border: 'rgba(247, 226, 192, 0.3)', color: '#F7E2C0' };
    return { bg: 'rgba(96, 165, 250, 0.12)', border: 'rgba(96, 165, 250, 0.3)', color: '#60A5FA' };
  };

  return (
    <section id="experience" className="section-container" style={{ position: 'relative', zIndex: 10 }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div className="eyebrow-mono" style={{ marginBottom: '12px' }}>
          CAREER LEDGER
        </div>
        <h2
          className="headline-serif"
          style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: '700', marginBottom: '12px' }}
        >
          {t.experience.title}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
          {t.experience.subtitle}
        </p>
      </div>

      {/* Timeline Container */}
      <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative' }}>
        {/* Continuous Hairline Spine Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: lang === 'ar' ? 'auto' : '28px',
            right: lang === 'ar' ? '28px' : 'auto',
            width: '2px',
            background: 'linear-gradient(to bottom, #4ADE80 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.02) 100%)'
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '42px' }}>
          {timeline.map((item, idx) => {
            const pillStyle = getPillStyle(idx);
            const isPresent = idx === 0;

            return (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  paddingLeft: lang === 'ar' ? 0 : '72px',
                  paddingRight: lang === 'ar' ? '72px' : 0
                }}
                className="timeline-entry"
              >
                {/* Timeline Connector Node */}
                <div
                  style={{
                    position: 'absolute',
                    top: '24px',
                    left: lang === 'ar' ? 'auto' : '21px',
                    right: lang === 'ar' ? '21px' : 'auto',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: isPresent ? '#4ADE80' : '#0A0A0A',
                    border: isPresent ? '3px solid #050505' : '2px solid rgba(255,255,255,0.3)',
                    boxShadow: isPresent ? '0 0 12px #4ADE80' : 'none',
                    zIndex: 2,
                    transition: 'all 0.3s ease'
                  }}
                  className="timeline-node"
                />

                {/* Glass Card Entry */}
                <div
                  className="glass-card timeline-card"
                  style={{
                    padding: '28px 32px',
                    borderRadius: '20px'
                  }}
                >
                  {/* Top Row: Year Pill + Period */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '12px',
                      marginBottom: '16px'
                    }}
                  >
                    <div
                      className="font-mono"
                      style={{
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        background: pillStyle.bg,
                        border: `1px solid ${pillStyle.border}`,
                        color: pillStyle.color,
                        fontSize: '12px',
                        fontWeight: '600'
                      }}
                    >
                      {item.period}
                    </div>

                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                      {item.location}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <h3
                    className="headline-serif"
                    style={{ fontSize: '22px', fontWeight: '700', color: '#E5E7EB', marginBottom: '4px' }}
                  >
                    {item.role}
                  </h3>
                  <div
                    className="font-mono"
                    style={{ fontSize: '14px', color: 'var(--accent-champagne)', marginBottom: '20px' }}
                  >
                    {item.company}
                  </div>

                  {/* Achievements List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle2 size={16} color={pillStyle.color} style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                          {ach}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .timeline-entry:hover .timeline-card {
          transform: translateX(${lang === 'ar' ? '-8px' : '8px'});
          border-color: rgba(247, 226, 192, 0.3) !important;
        }
        .timeline-entry:hover .timeline-node {
          border-color: var(--accent-champagne) !important;
          background: var(--accent-champagne) !important;
          box-shadow: 0 0 12px #F7E2C0 !important;
        }
        @media (max-width: 768px) {
          .timeline-entry {
            padding-left: 48px !important;
            padding-right: 0 !important;
          }
          .timeline-node {
            left: 9px !important;
            right: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
