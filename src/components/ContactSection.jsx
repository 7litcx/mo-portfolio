import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import StarBorder from './ReactBits/StarBorder';

export default function ContactSection({ t }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="section-container">
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2
          className="gradient-text"
          style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', marginBottom: '12px' }}
        >
          {t.contact.title}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '640px', margin: '0 auto' }}>
          {t.contact.subtitle}
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '48px',
          alignItems: 'start'
        }}
        className="contact-grid"
      >
        {/* Left Column: Direct Info & Socials */}
        <div>
          <div className="glass-panel" style={{ padding: '32px', borderRadius: '24px', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '24px', color: '#0F52BA' }}>
              {t.contact.infoTitle}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '14px',
                    background: 'var(--surface-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0F52BA',
                    boxShadow: '0 4px 14px rgba(15, 82, 186, 0.2)'
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Email</div>
                  <a
                    href={`mailto:${t.contact.email}`}
                    style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none' }}
                  >
                    {t.contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '14px',
                    background: 'var(--surface-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0F52BA',
                    boxShadow: '0 4px 14px rgba(15, 82, 186, 0.2)'
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Phone / WhatsApp</div>
                  <a
                    href={`tel:${t.contact.phone}`}
                    style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none' }}
                  >
                    {t.contact.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '14px',
                    background: 'var(--surface-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0F52BA',
                    boxShadow: '0 4px 14px rgba(15, 82, 186, 0.2)'
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Location</div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                    {t.contact.location}
                  </div>
                </div>
              </div>

              {/* Website */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '14px',
                    background: 'var(--surface-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0F52BA',
                    boxShadow: '0 4px 14px rgba(15, 82, 186, 0.2)'
                  }}
                >
                  <Globe size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Portfolio Website</div>
                  <a
                    href="https://mo-portfoilio.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none' }}
                  >
                    mo-portfoilio.vercel.app
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links with Authentic Icons */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <a
              href="https://github.com/7litcx"
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1,
                padding: '16px',
                borderRadius: '18px',
                background: 'var(--surface-bg)',
                border: 'none',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                fontWeight: '700',
                fontSize: '15px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <SiGithub size={20} color="var(--text-primary)" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1,
                padding: '16px',
                borderRadius: '18px',
                background: 'var(--surface-bg)',
                border: 'none',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                fontWeight: '700',
                fontSize: '15px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <FaLinkedin size={20} color="#0A66C2" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="glass-panel" style={{ padding: '36px', borderRadius: '24px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <CheckCircle2 size={54} color="#27C93F" style={{ margin: '0 auto 20px' }} />
              <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '10px' }}>
                Message Received!
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
                {t.contact.successMsg}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.contact.namePlaceholder}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'var(--surface-bg)',
                    border: 'none',
                    color: 'var(--text-primary)',
                    fontSize: '15px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.contact.emailPlaceholder}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'var(--surface-bg)',
                    border: 'none',
                    color: 'var(--text-primary)',
                    fontSize: '15px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                  {t.contact.subjectLabel}
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t.contact.subjectPlaceholder}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'var(--surface-bg)',
                    border: 'none',
                    color: 'var(--text-primary)',
                    fontSize: '15px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                  {t.contact.messageLabel}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'var(--surface-bg)',
                    border: 'none',
                    color: 'var(--text-primary)',
                    fontSize: '15px',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Submit Trigger using StarBorder */}
              <div style={{ marginTop: '10px' }}>
                <StarBorder
                  as="button"
                  type="submit"
                  color="#0F52BA"
                  speed="4s"
                  thickness={2}
                  disabled={isSubmitting}
                  style={{ width: '100%' }}
                >
                  <Send size={18} />
                  <span>{isSubmitting ? t.contact.submitting : t.contact.submitBtn}</span>
                </StarBorder>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 868px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
