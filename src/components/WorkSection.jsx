import { ArrowUpRight } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiSupabase,
  SiPostgresql,
  SiTailwindcss,
  SiDotnet,
  SiExpress
} from 'react-icons/si';

const projectIconMap = {
  'Next.js': <SiNextdotjs size={14} color="#E5E7EB" />,
  'React': <SiReact size={14} color="#61DAFB" />,
  'TypeScript': <SiTypescript size={14} color="#3178C6" />,
  'Supabase': <SiSupabase size={14} color="#3FCF8E" />,
  'PostgreSQL': <SiPostgresql size={14} color="#4169E1" />,
  'Tailwind CSS': <SiTailwindcss size={14} color="#06B6D4" />,
  '.NET': <SiDotnet size={14} color="#512BD4" />,
  'Express.js': <SiExpress size={14} color="#E5E7EB" />
};

export default function WorkSection({ t, lang }) {
  const projects = t.projects.items;

  return (
    <section id="projects" className="section-container" style={{ position: 'relative', zIndex: 10 }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div className="eyebrow-mono" style={{ marginBottom: '12px' }}>
          PORTFOLIO
        </div>
        <h2
          className="headline-serif"
          style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: '700', marginBottom: '12px' }}
        >
          {t.projects.title}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
          {t.projects.subtitle}
        </p>
      </div>

      {/* Vertical Stack of Device Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {projects.map((project, idx) => (
          <div key={project.id} style={{ position: 'relative' }} className="device-card-wrapper">
            {/* Blurred Accent Glow behind Card */}
            <div
              style={{
                position: 'absolute',
                inset: '-10px',
                borderRadius: '32px',
                background:
                  idx % 2 === 0
                    ? 'radial-gradient(circle, rgba(247, 226, 192, 0.1) 0%, rgba(5,5,5,0) 70%)'
                    : 'radial-gradient(circle, rgba(74, 222, 128, 0.08) 0%, rgba(5,5,5,0) 70%)',
                filter: 'blur(40px)',
                pointerEvents: 'none'
              }}
            />

            {/* Device Bezel Container */}
            <div
              className="glass-card device-card"
              style={{
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '16px',
                background: '#080808',
                boxShadow: '0 24px 48px rgba(0, 0, 0, 0.8)'
              }}
            >
              {/* Inner Screen Container */}
              <div className="project-inner-screen">
                {/* Screen Image */}
                <div className="project-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="desktop-overlay-gradient" />
                </div>

                {/* Project Details Content */}
                <div className="project-content-details">
                  {/* Mono Tags Row */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-mono"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: 'rgba(5, 5, 5, 0.85)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          fontSize: '11px',
                          color: '#E5E7EB'
                        }}
                      >
                        {projectIconMap[tag] || null}
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <h3
                    className="headline-serif"
                    style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}
                  >
                    {project.title}
                  </h3>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '650px', marginBottom: '20px', lineHeight: '1.6' }}>
                    {project.description}
                  </p>

                  {/* Live Link Button */}
                  {project.liveUrl && (
                    <div>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-champagne"
                        style={{ padding: '10px 22px', fontSize: '12px' }}
                      >
                        <span>{lang === 'en' ? 'VIEW LIVE PROJECT' : 'معاينة المشروع الحي'}</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        /* Desktop Default (Overlay over 16:9 Image) */
        .project-inner-screen {
          position: relative;
          aspect-ratio: 16 / 9;
          border-radius: 16px;
          overflow: hidden;
          background: #0A0A0A;
        }
        .project-img-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.7) contrast(1.1);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
        }
        .desktop-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(5,5,5,0.96) 0%, rgba(5,5,5,0.45) 55%, rgba(5,5,5,0.1) 100%);
        }
        .project-content-details {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justifyContent: flex-end;
          padding: 32px;
          z-index: 2;
        }

        .device-card:hover .project-image {
          transform: scale(1.05) !important;
          filter: brightness(0.9) contrast(1.1) !important;
        }
        .device-card:hover {
          border-color: rgba(247, 226, 192, 0.3) !important;
        }

        /* Mobile Responsive Layout (Screen Image on Top, Clean Text Block Below) */
        @media (max-width: 768px) {
          .project-inner-screen {
            position: static !important;
            aspect-ratio: auto !important;
            display: flex;
            flex-direction: column;
            border-radius: 16px;
            background: #0A0A0A;
          }
          .project-img-wrapper {
            position: relative !important;
            inset: auto !important;
            width: 100%;
            height: 200px !important;
          }
          .desktop-overlay-gradient {
            display: none !important;
          }
          .project-image {
            filter: brightness(0.85) contrast(1.05) !important;
          }
          .project-content-details {
            position: relative !important;
            inset: auto !important;
            padding: 24px 18px !important;
            background: #080808;
          }
          .project-content-details .btn-champagne {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
