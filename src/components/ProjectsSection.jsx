import { ExternalLink } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiSupabase,
  SiPostgresql,
  SiTailwindcss,
  SiPython,
  SiNodedotjs,
  SiFirebase,
  SiMysql,
  SiMongodb
} from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';
import StarBorder from './ReactBits/StarBorder';

const techIconMap = {
  'React': <SiReact size={22} color="#61DAFB" title="React" />,
  'Next.js': <SiNextdotjs size={22} color="var(--text-primary)" title="Next.js" />,
  'TypeScript': <SiTypescript size={22} color="#3178C6" title="TypeScript" />,
  'JavaScript': <SiJavascript size={22} color="#F7DF1E" title="JavaScript" />,
  'Supabase': <SiSupabase size={22} color="#3FCF8E" title="Supabase" />,
  'PostgreSQL': <SiPostgresql size={22} color="#4169E1" title="PostgreSQL" />,
  'Tailwind CSS': <SiTailwindcss size={22} color="#06B6D4" title="Tailwind CSS" />,
  'Python': <SiPython size={22} color="#3776AB" title="Python" />,
  'Node.js': <SiNodedotjs size={22} color="#339933" title="Node.js" />,
  'Firebase': <SiFirebase size={22} color="#FFCA28" title="Firebase" />,
  'MySQL': <SiMysql size={22} color="#4479A1" title="MySQL" />,
  'MongoDB': <SiMongodb size={22} color="#47A248" title="MongoDB" />,
  'OpenAI': <TbBrandOpenai size={22} color="#10A37F" title="OpenAI" />
};

export default function ProjectsSection({ t }) {
  const projects = t.projects.items;

  return (
    <section id="projects" className="section-container">
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2
          className="gradient-text"
          style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', marginBottom: '12px' }}
        >
          {t.projects.title}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '640px', margin: '0 auto' }}>
          {t.projects.subtitle}
        </p>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}
      >
        {projects.map(project => (
          <div
            key={project.id}
            className="glass-panel"
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            {/* Card Image Banner without category badge */}
            <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={e => (e.target.style.transform = 'scale(1.08)')}
                onMouseLeave={e => (e.target.style.transform = 'scale(1)')}
              />
            </div>

            {/* Content Body */}
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '20px', flex: 1 }}>
                {project.description}
              </p>

              {/* Tech Stack Icons Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginBottom: '24px',
                  padding: '10px 14px',
                  background: 'var(--surface-bg)',
                  borderRadius: '12px',
                  width: 'fit-content'
                }}
              >
                {project.tags.map(tag => (
                  <div key={tag} title={tag} style={{ display: 'flex', alignItems: 'center' }}>
                    {techIconMap[tag] || <span style={{ fontSize: '12px' }}>{tag}</span>}
                  </div>
                ))}
              </div>

              {/* Live Demo Action Button - Only rendered if liveUrl exists */}
              {project.liveUrl && (
                <div style={{ width: '100%', marginTop: 'auto' }}>
                  <StarBorder
                    as="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    color="#0F52BA"
                    speed="5s"
                    thickness={1.5}
                    style={{ width: '100%', textDecoration: 'none' }}
                  >
                    <ExternalLink size={16} />
                    <span style={{ fontSize: '14px' }}>{t.projects.viewLive}</span>
                  </StarBorder>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
