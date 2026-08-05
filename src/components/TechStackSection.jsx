import { useMemo } from 'react';
import LogoLoop from './ReactBits/LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiSupabase,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiStripe,
  SiGoogle,
  SiGit,
  SiGithub,
  SiVercel
} from 'react-icons/si';
import { TbBrandCSharp, TbBrandOpenai } from 'react-icons/tb';

export default function TechStackSection({ t, theme }) {
  const fadeColor = theme === 'dark' ? '#000926' : '#F4F8FC';

  // Monochrome SVG Icon Logos matching React Bits demo design
  const techLogosRow1 = useMemo(
    () => [
      { node: <SiReact size={42} color="var(--text-primary)" />, title: "React", href: "https://react.dev" },
      { node: <SiNextdotjs size={42} color="var(--text-primary)" />, title: "Next.js", href: "https://nextjs.org" },
      { node: <SiTypescript size={42} color="var(--text-primary)" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
      { node: <SiJavascript size={42} color="var(--text-primary)" />, title: "JavaScript" },
      { node: <SiPython size={42} color="var(--text-primary)" />, title: "Python" },
      { node: <TbBrandCSharp size={42} color="var(--text-primary)" />, title: "C#" },
      { node: <SiTailwindcss size={42} color="var(--text-primary)" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
      { node: <SiVercel size={42} color="var(--text-primary)" />, title: "Vercel", href: "https://vercel.com" },
      { node: <SiGithub size={42} color="var(--text-primary)" />, title: "GitHub", href: "https://github.com/7litcx" }
    ],
    []
  );

  const techLogosRow2 = useMemo(
    () => [
      { node: <SiSupabase size={42} color="var(--text-primary)" />, title: "Supabase", href: "https://supabase.com" },
      { node: <SiPostgresql size={42} color="var(--text-primary)" />, title: "PostgreSQL" },
      { node: <SiFirebase size={42} color="var(--text-primary)" />, title: "Firebase" },
      { node: <SiMysql size={42} color="var(--text-primary)" />, title: "MySQL" },
      { node: <SiMongodb size={42} color="var(--text-primary)" />, title: "MongoDB" },
      { node: <TbBrandOpenai size={42} color="var(--text-primary)" />, title: "OpenAI API" },
      { node: <SiGoogle size={42} color="var(--text-primary)" />, title: "Gemini API" },
      { node: <SiStripe size={42} color="var(--text-primary)" />, title: "Stripe" },
      { node: <SiGit size={42} color="var(--text-primary)" />, title: "Git" }
    ],
    []
  );

  return (
    <section id="skills" className="section-container" style={{ position: 'relative' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2
          className="gradient-text"
          style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', marginBottom: '12px' }}
        >
          {t.techStack.title}
        </h2>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '16px',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          {t.techStack.subtitle}
        </p>
      </div>

      {/* Infinite Monochrome Logo Loops matching React Bits Screenshot */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
        {/* Row 1: Moving Left */}
        <div style={{ height: '60px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={techLogosRow1}
            speed={100}
            direction="left"
            logoHeight={42}
            gap={48}
            hoverSpeed={10}
            scaleOnHover
            fadeOut
            fadeOutColor={fadeColor}
            ariaLabel="Frontend and Language Logos"
          />
        </div>

        {/* Row 2: Moving Right */}
        <div style={{ height: '60px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={techLogosRow2}
            speed={100}
            direction="right"
            logoHeight={42}
            gap={48}
            hoverSpeed={10}
            scaleOnHover
            fadeOut
            fadeOutColor={fadeColor}
            ariaLabel="Backend and Database Logos"
          />
        </div>
      </div>
    </section>
  );
}
