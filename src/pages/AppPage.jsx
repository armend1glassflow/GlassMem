import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AppPage.css';

const Logo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 1023 977" fill="none">
    <path d="M1022.52 373.339C1021.96 372.826 1021.43 372.662 1020.91 372.849C952.332 397.256 883.755 421.662 815.182 446.069L813.942 446.119L355.892 113.329C355.715 112.988 355.715 112.988 355.892 112.639L510.772 0.108917C511.247 0.0018574 511.37 0.0434618 511.472 0.118911C529.505 13.2856 698.222 135.869 1017.62 367.869C1020.3 369.816 1021.92 371.036 1022.47 371.529C1022.89 371.896 1022.91 372.499 1022.52 373.339Z" fill="rgba(255,255,255,0.82)"/>
    <path d="M612.422 504.079L415.752 576.149C372.365 546.522 329.145 517.002 286.092 487.589C259.552 469.462 232.819 451.019 205.892 432.259C179.252 413.692 152.602 395.125 125.942 376.559L54.1621 326.559L209.062 215.459C210.556 215.275 210.812 215.459L612.422 504.079Z" fill="rgba(255,255,255,0.82)"/>
    <path d="M54.1621 326.559L125.942 376.559L294.232 916.569L273.442 976.189L189.202 976.149C188.722 975.809L0.0420414 366.449C0.111531 365.671 0.392048 365.389L54.1621 326.559Z" fill="url(#ag1)"/>
    <path d="M612.421 504.079L459.441 975.729C459.078 976.163 458.791 976.209L273.441 976.189L294.231 916.569C335.255 802.876 375.511 690.306 415.771 577.739C416.151 576.136 415.751 576.149L612.421 504.079Z" fill="#6ee7b7"/>
    <path d="M960.793 563.233L827.393 973.609C826.938 974.142 826.583 974.199H642.673L813.942 446.119H815.183C869.944 426.578 924.709 407.088 979.475 387.597L1023 372L960.793 563.233Z" fill="#6ee7b7"/>
    <defs>
      <linearGradient id="ag1" x1="147" y1="326" x2="147" y2="976" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6ee7b7"/><stop offset="1" stopColor="#34d399"/>
      </linearGradient>
    </defs>
  </svg>
);

const NAV_SECTIONS = [
  { group: 'MONITOR', items: ['Dashboard', 'Incidents', 'Behaviors', 'Compare runs', 'Security'] },
  { group: 'ACCOUNT', items: ['Settings', 'Support'] },
];

const MEMORY_TOOLS = ['Vector DB', 'Redis / custom store', 'LangSmith', 'Langfuse', 'Just console.log', 'Nothing yet', 'Other'];
const USEFUL_OPTS  = ['Yes', 'Maybe', 'No'];

export function AppPage() {
  const navigate  = useNavigate();
  const email     = localStorage.getItem('gm_email')    || '';
  const position  = localStorage.getItem('gm_position') || 273;

  const [tools,    setTools]    = useState([]);
  const [useful,   setUseful]   = useState('');
  const [notes,    setNotes]    = useState('');
  const [submitting, setSub]    = useState(false);
  const [submitted,  setDone]   = useState(false);
  const [formErr,    setFormErr] = useState('');

  useEffect(() => {
    if (!email) navigate('/signup');
  }, [email, navigate]);

  const toggleTool = (t) =>
    setTools(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);

  const handleContact = async (e) => {
    e.preventDefault();
    setFormErr('');
    if (!useful) { setFormErr('Please select one option.'); return; }
    setSub(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, memory_tools: tools, find_useful: useful, notes }),
      });
    } catch (_) { /* best effort */ }
    setSub(false);
    setDone(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('gm_email');
    localStorage.removeItem('gm_position');
    navigate('/');
  };

  return (
    <div className="app">

      {/* ── Sidebar ── */}
      <aside className="app__sidebar">
        <div className="app__sidebar-logo">
          <Logo size={20} />
          <span className="app__sidebar-wordmark">GlassMem</span>
        </div>

        {NAV_SECTIONS.map(sec => (
          <div key={sec.group} className="app__nav-group">
            <span className="app__nav-group-label">// {sec.group}</span>
            {sec.items.map(item => (
              <div key={item} className="app__nav-item">
                <span className="app__nav-item-name">{item}</span>
                <span className="app__nav-soon">SOON</span>
              </div>
            ))}
          </div>
        ))}

        <div className="app__sidebar-footer">
          <div className="app__signed-label">// SIGNED IN</div>
          <div className="app__signed-email">{email}</div>
          <button className="app__logout" onClick={handleLogout}>
            <span>↪</span> Log out
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="app__main">

        {/* Waitlist card */}
        <div className="app__card">
          <span className="app__card-label">// YOU'RE ON THE WAITLIST</span>
          <h2 className="app__card-heading">Thanks for signing up to GlassMem.</h2>
          <p className="app__card-body">
            The product is in such high demand that we onboard customers in batches. You
            are in position <strong>#{position}</strong> right now. We will inform you as
            soon as your batch comes up.
          </p>
          <p className="app__card-body" style={{ marginTop: 12 }}>
            In the meantime: if you want to move up the list, you can reach out to us via
            the form below to set up a session with our team.
          </p>
        </div>

        {/* Session / contact card */}
        <div className="app__card">
          <span className="app__card-label">// BOOK A SESSION</span>
          <h2 className="app__card-heading" style={{ fontSize: 22 }}>Tell us about your stack</h2>
          <p className="app__card-sub">
            We use this to prioritize sessions with teams whose setup we can support today.
          </p>

          {submitted ? (
            <div className="app__success">
              <span className="app__success-icon">✓</span>
              <div>
                <p className="app__success-title">We got your message.</p>
                <p className="app__success-sub">We'll be in touch at {email} soon.</p>
              </div>
            </div>
          ) : (
            <form className="app__form" onSubmit={handleContact}>

              <div className="app__form-section">
                <p className="app__form-label">WHAT ARE YOU CURRENTLY USING FOR AGENT MEMORY?</p>
                <div className="app__chips">
                  {MEMORY_TOOLS.map(t => (
                    <button
                      key={t}
                      type="button"
                      className={`app__chip${tools.includes(t) ? ' app__chip--on' : ''}`}
                      onClick={() => toggleTool(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="app__form-section">
                <p className="app__form-label">WOULD YOU FIND GLASSMEM USEFUL?</p>
                <div className="app__chips">
                  {USEFUL_OPTS.map(o => (
                    <button
                      key={o}
                      type="button"
                      className={`app__chip${useful === o ? ' app__chip--on' : ''}`}
                      onClick={() => setUseful(o)}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>

              <div className="app__form-section">
                <p className="app__form-label">ANYTHING ELSE? (OPTIONAL)</p>
                <textarea
                  className="app__textarea"
                  rows={3}
                  placeholder="Tell us more about your use case or what you're building…"
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                />
              </div>

              {formErr && <p className="app__form-err">{formErr}</p>}

              <button className="app__submit" type="submit" disabled={submitting}>
                {submitting ? 'Submitting…' : 'Submit'}
              </button>
            </form>
          )}
        </div>

      </main>
    </div>
  );
}
