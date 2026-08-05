import { ArrowUp, Code2 } from 'lucide-react';

export default function Footer({ t, lang }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        background: 'var(--bg-header)',
        padding: '36px 24px',
        marginTop: '60px'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #0F52BA, #A6C5D7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000926'
            }}
          >
            <Code2 size={20} />
          </div>
          <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>
            Mohamed Khaled
          </span>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} {t.footer.rights}
          </span>
        </div>

        <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          {t.footer.designedWith}
        </div>

        <button
          onClick={scrollToTop}
          style={{
            background: 'var(--surface-bg)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            padding: '8px 16px',
            borderRadius: '12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            fontWeight: '600'
          }}
        >
          <span>{t.footer.backToTop}</span>
          <ArrowUp size={16} color="#0F52BA" />
        </button>
      </div>
    </footer>
  );
}
