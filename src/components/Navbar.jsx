import { useState, useEffect } from 'react';
import { Menu, X, Languages, ArrowUpRight } from 'lucide-react';

export default function Navbar({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scroll-spy active section detection
      const sections = ['hero', 'about', 'stack', 'projects', 'experience', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'ar' : 'en';
    setLang(nextLang);
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
  };

  const navItems = [
    { id: 'about', label: lang === 'en' ? 'ABOUT' : 'عن المهندس' },
    { id: 'stack', label: lang === 'en' ? 'STACK' : 'التقنيات' },
    { id: 'projects', label: lang === 'en' ? 'WORK' : 'المشاريع' },
    { id: 'experience', label: lang === 'en' ? 'JOURNEY' : 'الخبرات' },
    { id: 'contact', label: lang === 'en' ? 'CONTACT' : 'التواصل' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'rgba(5, 5, 5, 0.5)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Left: Avatar & Wordmark */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            textDecoration: 'none',
            color: 'var(--text-primary)'
          }}
          className="brand-wordmark-group"
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '1px solid rgba(247, 226, 192, 0.4)',
              background: '#0A0A0A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 10px rgba(247, 226, 192, 0.15)'
            }}
          >
            <img
              src="/mo_photo.jpg"
              alt="Mo Khaled"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%)',
                transition: 'filter 0.3s ease'
              }}
              className="avatar-img"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              className="font-mono wordmark-text"
              style={{
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '0.1em',
                color: 'var(--text-primary)',
                transition: 'color 0.2s ease'
              }}
            >
              MO KHALED
            </span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
              Full Stack
            </span>
          </div>
        </a>

        {/* Right: Desktop Links & Action CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-only">
          <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {navItems.map(item => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="font-mono"
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    letterSpacing: '0.12em',
                    color: isActive ? 'var(--accent-champagne)' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    position: 'relative',
                    transition: 'color 0.2s ease',
                    padding: '4px 0'
                  }}
                >
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: -2,
                        left: 0,
                        right: 0,
                        height: '1.5px',
                        background: 'var(--accent-champagne)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px #F7E2C0'
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Arabic / EN Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--text-primary)',
                padding: '6px 14px',
                borderRadius: '9999px',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease'
              }}
            >
              <Languages size={14} color="#F7E2C0" />
              <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            {/* Let's Talk CTA Button */}
            <a href="#contact" className="btn-champagne" style={{ padding: '8px 18px', fontSize: '12px' }}>
              <span>{lang === 'en' ? "LET'S TALK" : "تواصل معي"}</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Mobile Controls */}
        <div style={{ display: 'none', alignItems: 'center', gap: '12px' }} className="mobile-only">
          <button
            onClick={toggleLanguage}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: 'var(--text-primary)',
              padding: '6px 12px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontFamily: 'var(--font-mono)'
            }}
          >
            {lang === 'en' ? 'العربية' : 'EN'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(5, 5, 5, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono"
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '14px',
                letterSpacing: '0.1em'
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-champagne"
            style={{ marginTop: '8px', justifyContent: 'center' }}
          >
            {lang === 'en' ? "LET'S TALK" : "تواصل معي"}
          </a>
        </div>
      )}

      <style>{`
        .brand-wordmark-group:hover .avatar-img {
          filter: grayscale(0%) !important;
        }
        .brand-wordmark-group:hover .wordmark-text {
          color: var(--accent-champagne) !important;
        }
        @media (max-width: 868px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
