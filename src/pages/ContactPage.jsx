import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

/* ── Pentagon logo (same as GlassMemPage) ── */
const Logo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 1023 977" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1022.52 373.339C1021.96 372.826 1021.43 372.662 1020.91 372.849C952.332 397.256 883.755 421.662 815.182 446.069L813.942 446.119L355.892 113.329C355.715 112.988 355.715 112.988 355.892 112.639L510.772 0.108917C511.247 0.0018574 511.37 0.0434618 511.472 0.118911C529.505 13.2856 698.222 135.869 1017.62 367.869C1020.3 369.816 1021.92 371.036 1022.47 371.529C1022.89 371.896 1022.91 372.499 1022.52 373.339Z" fill="rgba(255,255,255,0.82)"/>
    <path d="M612.422 504.079L415.752 576.149C372.365 546.522 329.145 517.002 286.092 487.589C259.552 469.462 232.819 451.019 205.892 432.259C179.252 413.692 152.602 395.125 125.942 376.559L54.1621 326.559L209.062 215.459C210.556 215.275 210.812 215.459L612.422 504.079Z" fill="rgba(255,255,255,0.82)"/>
    <path d="M54.1621 326.559L125.942 376.559L294.232 916.569L273.442 976.189L189.202 976.149C188.722 975.809L0.0420414 366.449C0.111531 365.671 0.392048 365.389L54.1621 326.559Z" fill="url(#g1lp-c)"/>
    <path d="M612.421 504.079L459.441 975.729C459.078 976.163 458.791 976.209L273.441 976.189L294.231 916.569C335.255 802.876 375.511 690.306 415.771 577.739C416.151 576.136 415.751 576.149L612.421 504.079Z" fill="#6ee7b7"/>
    <path d="M960.793 563.233L827.393 973.609C826.938 974.142 826.583 974.199H642.673L813.942 446.119H815.183C869.944 426.578 924.709 407.088 979.475 387.597L1023 372L960.793 563.233Z" fill="#6ee7b7"/>
    <defs>
      <linearGradient id="g1lp-c" x1="147" y1="326" x2="147" y2="976" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6ee7b7"/><stop offset="1" stopColor="#34d399"/>
      </linearGradient>
    </defs>
  </svg>
);

/* ── SVG Icons for form fields ── */
const IconPerson = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
);

const IconEnvelope = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
);

const IconChat = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const IconCheck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

export function ContactPage() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail]         = useState('');
  const [message, setMessage]     = useState('');
  const [errors, setErrors]       = useState({});
  const [loading, setLoading]     = useState(false);
  const [sent, setSent]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [mobOpen, setMobOpen]     = useState(false);

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const validate = () => {
    const e = {};
    if (!firstName.trim()) e.firstName = 'First name is required.';
    if (!email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!message.trim()) {
      e.message = 'Message is required.';
    } else if (message.trim().length < 10) {
      e.message = 'Message must be at least 10 characters.';
    }
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, message }),
      });
    } catch (_) {
      // best-effort — show success regardless
    } finally {
      setLoading(false);
      setSent(true);
    }
  };

  return (
    <div className="contact-page">

      {/* NAV — same as landing page */}
      <nav className="nav" style={{ borderBottomColor: scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)' }}>
        <div className="nav__row">
          <Link to="/" className="nav__logo"><Logo size={24}/><span className="nav__wordmark">GlassMem</span></Link>
          <div className="nav__links">
            <a href="/#problem"       className="nav__link">Problem</a>
            <a href="/#demo"          className="nav__link">Demo</a>
            <a href="/#architecture"  className="nav__link">Architecture</a>
            <a href="/#observability" className="nav__link">Observability</a>
          </div>
          <div className="nav__right">
            <a href="/app"    className="btn btn--ghost btn--sm">Log in</a>
            <a href="/signup" className="btn btn--em btn--sm">Get started</a>
          </div>
          <button className="nav__mob-toggle" onClick={() => setMobOpen(o => !o)} aria-label="Menu">{mobOpen ? '✕' : '☰'}</button>
        </div>
        <div className={`nav__mob-menu${mobOpen ? ' open' : ''}`}>
          {['Problem','Demo','Architecture','Observability'].map(l => (
            <a key={l} href={`/#${l.toLowerCase()}`} className="nav__mob-link" onClick={() => setMobOpen(false)}>{l}</a>
          ))}
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main className="contact-main">
        <div className="contact-wrap">

          {/* Breadcrumb */}
          <p className="contact-breadcrumb">// glassmem · contact</p>

          {/* Heading */}
          <h1 className="contact-heading">Contact us</h1>
          <p className="contact-sub">
            Have questions about GlassMem, early access, or integrations? Send us a message and we'll get back to you.
          </p>

          {/* Form card */}
          <div className="contact-card">
            {sent ? (
              <div className="contact-success">
                <span className="contact-success__icon"><IconCheck/></span>
                <p className="contact-success__title">Message sent!</p>
                <p className="contact-success__sub">We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>

                {/* First Name */}
                <div className="cf-field">
                  <label className="cf-label" htmlFor="cf-firstname">First name</label>
                  <div className="cf-input-wrap">
                    <span className="cf-icon"><IconPerson/></span>
                    <input
                      id="cf-firstname"
                      className={`cf-input${errors.firstName ? ' cf-input--err' : ''}`}
                      type="text"
                      placeholder="Your first name"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      autoComplete="given-name"
                    />
                  </div>
                  {errors.firstName && <p className="cf-error">{errors.firstName}</p>}
                </div>

                {/* Email */}
                <div className="cf-field">
                  <label className="cf-label" htmlFor="cf-email">Email</label>
                  <div className="cf-input-wrap">
                    <span className="cf-icon"><IconEnvelope/></span>
                    <input
                      id="cf-email"
                      className={`cf-input${errors.email ? ' cf-input--err' : ''}`}
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      autoComplete="email"
                    />
                  </div>
                  {errors.email && <p className="cf-error">{errors.email}</p>}
                </div>

                {/* Message */}
                <div className="cf-field">
                  <label className="cf-label" htmlFor="cf-message">Message</label>
                  <div className="cf-textarea-wrap">
                    <span className="cf-icon cf-icon--textarea"><IconChat/></span>
                    <textarea
                      id="cf-message"
                      className={`cf-textarea${errors.message ? ' cf-input--err' : ''}`}
                      placeholder="Tell us what you're working on or what you'd like to know..."
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      rows={5}
                    />
                  </div>
                  {errors.message && <p className="cf-error">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="cf-submit"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send message'}
                </button>

              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
