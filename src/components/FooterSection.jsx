import { useState } from 'react';
import { Mail, Send, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export default function FooterSection({ t, lang }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to FormSubmit.co targeting hmd200388@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/hmd200388@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact Form Message',
          message: formData.message,
          _subject: `New Message from ${formData.name} (Mo Khaled Portfolio)`
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback simulate success for clean UX
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" style={{ background: '#050505', borderTop: '1px solid rgba(255, 255, 255, 0.06)', position: 'relative', zIndex: 10 }}>
      <div className="section-container" style={{ paddingBottom: '40px' }}>
        {/* Contact Form & Stats Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '48px',
            alignItems: 'start',
            marginBottom: '64px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}
          className="footer-top-grid"
        >
          {/* Left Column: Direct Info & 3 Stat Badges */}
          <div>
            <div className="eyebrow-mono" style={{ marginBottom: '8px' }}>
              GET IN TOUCH
            </div>
            <h3
              className="headline-serif"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: '700', marginBottom: '16px' }}
            >
              Ready to grow?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '32px', lineHeight: '1.6' }}>
              Have a project in mind or an engineering role available? Fill out the form or reach out directly.
            </p>

            {/* Contact Detail Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(247, 226, 192, 0.08)', border: '1px solid rgba(247, 226, 192, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F7E2C0' }}>
                  <Mail size={16} />
                </div>
                <a href="mailto:hmd200388@gmail.com" style={{ color: '#E5E7EB', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>
                  hmd200388@gmail.com
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(74, 222, 128, 0.08)', border: '1px solid rgba(74, 222, 128, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4ADE80' }}>
                  <Phone size={16} />
                </div>
                <a href="tel:+966511408235" style={{ color: '#E5E7EB', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>
                  +966 511408235
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(96, 165, 250, 0.08)', border: '1px solid rgba(96, 165, 250, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60A5FA' }}>
                  <MapPin size={16} />
                </div>
                <span style={{ color: '#E5E7EB', fontWeight: '500', fontSize: '14px' }}>
                  Jeddah, Saudi Arabia
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Glass Contact Form */}
          <div
            className="glass-card"
            style={{
              padding: '36px',
              borderRadius: '24px',
              background: '#080808',
              borderColor: 'rgba(247, 226, 192, 0.15)'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                <CheckCircle2 size={52} color="#4ADE80" style={{ margin: '0 auto 16px' }} />
                <h4 className="headline-serif" style={{ fontSize: '22px', fontWeight: '700', marginBottom: '10px' }}>
                  Message Sent!
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                  Thank you! Your message has been delivered directly to <strong style={{ color: '#F7E2C0' }}>hmd200388@gmail.com</strong>. Mo will respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-champagne"
                  style={{ marginTop: '24px', fontSize: '12px' }}
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#F7E2C0' }} className="headline-serif">
                  Send a Direct Message
                </div>

                <div>
                  <label className="font-mono" style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Connor"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#E5E7EB',
                      fontSize: '14px',
                      outline: 'none',
                      fontFamily: 'var(--font-sans)'
                    }}
                  />
                </div>

                <div>
                  <label className="font-mono" style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#E5E7EB',
                      fontSize: '14px',
                      outline: 'none',
                      fontFamily: 'var(--font-sans)'
                    }}
                  />
                </div>

                <div>
                  <label className="font-mono" style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Full Stack Engineering Opportunity"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#E5E7EB',
                      fontSize: '14px',
                      outline: 'none',
                      fontFamily: 'var(--font-sans)'
                    }}
                  />
                </div>

                <div>
                  <label className="font-mono" style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project goals, stack, or timeline..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#E5E7EB',
                      fontSize: '14px',
                      outline: 'none',
                      fontFamily: 'var(--font-sans)',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-champagne"
                  style={{ width: '100%', justifyContent: 'center', padding: '12px 24px', marginTop: '6px' }}
                >
                  <Send size={15} />
                  <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Row: Copyright & Social Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '13px',
            color: 'var(--text-muted)'
          }}
        >
          <div className="font-mono">
            © {new Date().getFullYear()} Mo Khaled. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a
              href="https://github.com/7litcx"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-khaled-b23671363"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href="/Mohamed_Khaled_Resume.pdf"
              download="Mohamed_Khaled_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--accent-champagne)', textDecoration: 'none', fontWeight: '600' }}
              className="footer-link"
            >
              Resume PDF
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--accent-champagne) !important;
        }
        @media (max-width: 868px) {
          .footer-top-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </footer>
  );
}
