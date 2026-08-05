import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export default function AboutSection({ lang }) {
  return (
    <section id="about" className="section-band-alt" style={{ position: 'relative', zIndex: 10 }}>
      <div className="section-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '64px',
            alignItems: 'center'
          }}
          className="about-grid"
        >
          {/* Left Column: Rotated 4:5 Portrait Card */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {/* Halo Glow */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '400px',
                borderRadius: '24px',
                background: 'radial-gradient(circle, rgba(247, 226, 192, 0.12) 0%, rgba(5, 5, 5, 0) 70%)',
                filter: 'blur(30px)',
                pointerEvents: 'none'
              }}
            />

            <div
              className="portrait-card-container"
              style={{
                width: '100%',
                maxWidth: '340px',
                aspectRatio: '4 / 5',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                background: '#0A0A0A',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transform: 'rotate(2deg)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
              }}
            >
              <img
                src="/mo_photo.jpg"
                alt="Mo Khaled Portrait"
                className="portrait-image"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  filter: 'grayscale(100%) opacity(0.9)',
                  transition: 'all 0.5s ease'
                }}
              />

              {/* Floating Glass Name-Card */}
              <div
                className="floating-namecard"
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  padding: '14px 18px',
                  borderRadius: '14px',
                  background: 'rgba(5, 5, 5, 0.85)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(247, 226, 192, 0.3)',
                  transform: 'translateY(10px)',
                  opacity: 0.9,
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#E5E7EB' }}>
                  Mo Khaled
                </div>
                <div className="font-mono" style={{ fontSize: '11px', color: '#F7E2C0' }}>
                  Full Stack Engineer • Soul Media Co-Founder
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div>
            <div className="eyebrow-mono" style={{ marginBottom: '16px', fontSize: '15px', letterSpacing: '0.18em' }}>
              ABOUT ME
            </div>

            <h2
              className="headline-serif"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                fontWeight: '700',
                lineHeight: '1.15',
                marginBottom: '28px'
              }}
            >
              Engineering with <br />
              <span className="italic-subclause">curiosity & care.</span>
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                color: 'var(--text-secondary)',
                fontSize: '16px',
                lineHeight: '1.75',
                marginBottom: '36px'
              }}
            >
              <p>
                {lang === 'en' ? (
                  <>
                    I am a <strong style={{ color: '#E5E7EB' }}>Full Stack Engineer</strong> and Co-Founder at Soul Media based in Jeddah. My work focuses on building clean, high-performance web systems by combining <strong style={{ color: '#E5E7EB' }}>Next.js, React, TypeScript</strong>, and <strong style={{ color: '#E5E7EB' }}>Supabase / PostgreSQL</strong> architectures with seamless user experiences.
                  </>
                ) : (
                  <>
                    أنا <strong style={{ color: '#E5E7EB' }}>مهندس برمجيات Full Stack</strong> ومؤسس مشارك في Soul Media بمدينة جدة. ينصب تركيزي على بناء منصات ويب متكاملة، آمنة وسريعة باستخدام تقنيات <strong style={{ color: '#E5E7EB' }}>Next.js و React و TypeScript</strong> و <strong style={{ color: '#E5E7EB' }}>Supabase / PostgreSQL</strong>.
                  </>
                )}
              </p>

              <p>
                {lang === 'en' ? (
                  <>
                    Whether architecting full-stack booking platforms, integrating <strong style={{ color: '#E5E7EB' }}>OpenAI & Gemini APIs</strong>, or refining modern responsive design systems, I prioritize <strong style={{ color: '#E5E7EB' }}>maintainable code, clean architecture, and continuous learning</strong>.
                  </>
                ) : (
                  <>
                    سواءً كنت تقوم بتطوير أنظمة حجز متكاملة، أو دمج <strong style={{ color: '#E5E7EB' }}>نماذج الذكاء الاصطناعي</strong>، أو بناء واجهات تفاعلية متجاوبة، فإن أسلوبي يعتمد على الكود النظيف والمستدام.
                  </>
                )}
              </p>
            </div>

            {/* Signature & Social Links */}
            <div
              style={{
                paddingTop: '24px',
                borderTop: '1px solid var(--border-hairline)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              {/* Italic Serif Wordmark */}
              <div
                className="headline-serif"
                style={{
                  fontStyle: 'italic',
                  fontSize: '24px',
                  color: 'var(--accent-champagne)'
                }}
              >
                Mo Khaled
              </div>

              {/* Social Buttons */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href="https://github.com/7litcx"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E5E7EB',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  className="social-circle-btn"
                >
                  <SiGithub size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/mohamed-khaled-b23671363"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#60A5FA',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  className="social-circle-btn"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .portrait-card-container:hover {
          transform: rotate(0deg) scale(1.03) !important;
          border-color: rgba(247, 226, 192, 0.4) !important;
          box-shadow: 0 0 45px rgba(247, 226, 192, 0.2) !important;
        }
        .portrait-card-container:hover .portrait-image {
          filter: grayscale(0%) opacity(1) !important;
        }
        .portrait-card-container:hover .floating-namecard {
          transform: translateY(0) !important;
        }
        .social-circle-btn:hover {
          border-color: var(--accent-champagne) !important;
          color: var(--accent-champagne) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 868px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
