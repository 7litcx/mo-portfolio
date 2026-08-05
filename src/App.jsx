import { useState, useEffect } from 'react';
import CircuitCanvas from './components/CircuitCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BentoStackSection from './components/BentoStackSection';
import WorkSection from './components/WorkSection';
import TerminalSection from './components/TerminalSection';
import ExperienceSection from './components/ExperienceSection';
import PricingSection from './components/PricingSection';
import FooterSection from './components/FooterSection';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [lang, setLang] = useState('en');
  const t = portfolioData[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // IntersectionObserver scroll reveal engine
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [lang]);

  return (
    <div style={{ position: 'relative', background: 'var(--bg-void)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      {/* Global Background - Live Circuit Canvas */}
      <CircuitCanvas />

      {/* Main Content Suite */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar lang={lang} setLang={setLang} t={t} />
        <main>
          <HeroSection lang={lang} />
          <AboutSection lang={lang} />
          <BentoStackSection lang={lang} />
          <WorkSection t={t} lang={lang} />
          <TerminalSection lang={lang} />
          <ExperienceSection t={t} lang={lang} />
          <PricingSection lang={lang} />
        </main>
        <FooterSection t={t} lang={lang} />
      </div>
    </div>
  );
}
