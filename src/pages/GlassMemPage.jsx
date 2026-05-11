import React, { useEffect, useState } from 'react';
import './GlassMemPage.css';

/* ── Pentagon logo — white + emerald for dark bg ── */
const Logo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 1023 977" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1022.52 373.339C1021.96 372.826 1021.43 372.662 1020.91 372.849C952.332 397.256 883.755 421.662 815.182 446.069L813.942 446.119L355.892 113.329C355.715 112.988 355.715 112.988 355.892 112.639L510.772 0.108917C511.247 0.0018574 511.37 0.0434618 511.472 0.118911C529.505 13.2856 698.222 135.869 1017.62 367.869C1020.3 369.816 1021.92 371.036 1022.47 371.529C1022.89 371.896 1022.91 372.499 1022.52 373.339Z" fill="rgba(255,255,255,0.82)"/>
    <path d="M612.422 504.079L415.752 576.149C372.365 546.522 329.145 517.002 286.092 487.589C259.552 469.462 232.819 451.019 205.892 432.259C179.252 413.692 152.602 395.125 125.942 376.559L54.1621 326.559L209.062 215.459C210.556 215.275 210.812 215.459L612.422 504.079Z" fill="rgba(255,255,255,0.82)"/>
    <path d="M54.1621 326.559L125.942 376.559L294.232 916.569L273.442 976.189L189.202 976.149C188.722 975.809L0.0420414 366.449C0.111531 365.671 0.392048 365.389L54.1621 326.559Z" fill="url(#g1)"/>
    <path d="M612.421 504.079L459.441 975.729C459.078 976.163 458.791 976.209L273.441 976.189L294.231 916.569C335.255 802.876 375.511 690.306 415.771 577.739C416.151 576.136 415.751 576.149L612.421 504.079Z" fill="#6ee7b7"/>
    <path d="M960.793 563.233L827.393 973.609C826.938 974.142 826.583 974.199H642.673L813.942 446.119H815.183C869.944 426.578 924.709 407.088 979.475 387.597L1023 372L960.793 563.233Z" fill="#6ee7b7"/>
    <defs>
      <linearGradient id="g1" x1="147" y1="326" x2="147" y2="976" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6ee7b7"/>
        <stop offset="1" stopColor="#34d399"/>
      </linearGradient>
    </defs>
  </svg>
);

/* ── Real brand logos — served from /public/logos/ ── */
const LOGOS = [
  { img: '/logos/cursor.png',    name: 'Cursor',    h: 22, style: { filter: 'brightness(0) invert(1)', opacity: 0.7  } },
  { img: '/logos/claude.svg',    name: 'Claude',    h: 22, style: { opacity: 0.85 } },
  { img: '/logos/copilot.png',   name: 'Copilot',   h: 24, style: { opacity: 0.75 } },
  { img: '/logos/windsurf.png',  name: 'Windsurf',  h: 22, style: { opacity: 0.75 } },
  { img: '/logos/langchain.webp',name: 'LangChain', h: 28, style: { filter: 'brightness(0) invert(1)', opacity: 0.75 } },
  { img: '/logos/openai.svg',    name: 'OpenAI',    h: 22, style: { filter: 'brightness(0) invert(1)', opacity: 0.7  } },
  { img: '/logos/crewai.png',    name: 'CrewAI',    h: 22, style: { opacity: 0.75 } },
  { img: '/logos/arcade.png',    name: 'Arcade',    h: 22, style: { opacity: 0.75 } },
];

/* ── Hero visualization — coding agent context ── */
const VIZ_AGENTS = [
  { pip: '#a78bfa', name: 'Cursor',      change: 'FastAPI backend · no Prisma in prod',       revert: '↺ synced' },
  { pip: '#6ee7b7', name: 'Claude Code', change: 'PostgreSQL for auth · REST over GraphQL',   revert: '↺ synced' },
  { pip: '#fb923c', name: 'Cline',       change: 'No billing changes until Friday',           revert: '↺ expires Fri' },
];

const HeroViz = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const delays = [4500, 3750, 5000];
    let tid;
    const tick = (s) => {
      const next = (s + 1) % 3;
      tid = setTimeout(() => { setStep(next); tick(next); }, delays[s]);
    };
    tick(0);
    return () => clearTimeout(tid);
  }, []);

  const narrow = step >= 1;

  return (
    <div className="hviz">
      <div className="hviz__bar">
        <span className="hviz__bar-title">
          <Logo size={13} />
          GlassMem · project memory
        </span>
        <span className="hviz__bar-live">
          <span className="hero__panel-dot" style={{ marginRight: 4 }} />
          LIVE
        </span>
      </div>

      <div className="hviz__body">

        {/* ── Left column ── */}
        <div className={`hviz__left${narrow ? ' hviz__left--narrow' : ''}`}>

          {/* Wide intro — visible in step 0 */}
          <div className={`hviz__intro-wide${narrow ? ' hviz__intro-wide--out' : ''}`}>
            <p className="hviz__intro-eyebrow">example scenario</p>
            <h3 className="hviz__intro-heading">
              New session.<br />Zero cold start.<br /><em>Context already loaded.</em>
            </h3>
            <p className="hviz__intro-body">
              A developer opens a new Cursor, Claude Code, or Cline session. GlassMem loads project decisions, coding conventions, and active constraints before the first line of code is written.
            </p>
            <div className="hviz__intro-rule" />
            <div className="hviz__intro-note">
              <span className="hviz__intro-note-dot" />
              <span className="hviz__intro-note-text">
                memory.recall() — context loaded in &lt;5ms before inference.
              </span>
            </div>
          </div>

          {/* Narrow summary — visible in steps 1+ */}
          <div className={`hviz__intro-narrow${!narrow ? ' hviz__intro-narrow--hidden' : ''}`}>
            <p className="hviz__narrow-eyebrow">Example</p>
            <p className="hviz__narrow-heading">New session.</p>
            <div className="hviz__narrow-points">
              {[
                { pip: '#a78bfa', text: 'Decisions loaded' },
                { pip: '#6ee7b7', text: 'Style respected'  },
                { pip: '#fb923c', text: 'Constraints active' },
              ].map(pt => (
                <div key={pt.text} className="hviz__narrow-point">
                  <span className="hviz__narrow-point-pip" style={{ background: pt.pip }} />
                  <span className="hviz__narrow-point-text">{pt.text}</span>
                </div>
              ))}
            </div>
            <div className="hviz__narrow-rule" />
            <span className="hviz__narrow-brand">GlassMem does<br />this for you.</span>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className={`hviz__right${!narrow ? ' hviz__right--hidden' : ''}`}>

          {/* Context strip */}
          <div className="hviz__ctx">
            <div className="hviz__ctx-route">Project context loaded</div>
            <div className="hviz__ctx-meta">
              <span className="hviz__ctx-tag hviz__ctx-tag--em">3 agents</span>
              <span className="hviz__ctx-dot">·</span>
              <span className="hviz__ctx-tag">2 decisions · 1 constraint</span>
              <span className="hviz__ctx-dot">·</span>
              <span className="hviz__ctx-tag hviz__ctx-tag--warn">1 TEMPORARY</span>
            </div>
          </div>

          {/* Agent cards */}
          <div className="hviz__agents">
            {VIZ_AGENTS.map((ag, i) => (
              <div
                key={ag.name}
                className={`hviz__agent-card${!narrow ? ' hviz__agent-card--hidden' : ''}`}
                style={{ transitionDelay: narrow ? `${0.1 + i * 0.1}s` : '0s' }}
              >
                <div className="hviz__agent-header">
                  <span className="hviz__agent-pip" style={{ background: ag.pip }} />
                  <span className="hviz__agent-name" style={{ color: ag.pip }}>{ag.name}</span>
                </div>
                <div className="hviz__agent-change">{ag.change}</div>
                <div className="hviz__agent-revert">{ag.revert}</div>
              </div>
            ))}
          </div>

          {/* Verdict */}
          <div className={`hviz__verdict${step < 2 ? ' hviz__verdict--hidden' : ''}`}>
            <div className="hviz__verdict-row">
              <span className="hviz__verdict-src">Without</span>
              <span className="hviz__verdict-wrong">Cold start. Re-reads repo. Forgets prior decisions. ✕</span>
            </div>
            <div className="hviz__verdict-row">
              <span className="hviz__verdict-src">GlassMem</span>
              <span className="hviz__verdict-right">Context loaded. Decisions intact. Constraints respected. ✓</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

/* ── Analytics chart ── */
const AnalyticsChart = () => {
  const pts = [12, 28, 22, 45, 38, 62, 55, 80, 72, 94, 88, 100];
  const w = 320, h = 100;
  const padX = 8, padY = 8;
  const xs = pts.map((_, i) => padX + (i / (pts.length - 1)) * (w - padX * 2));
  const ys = pts.map(v => h - padY - (v / 100) * (h - padY * 2));
  const path = xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${x},${ys[i]}`).join(' ');
  const area = `${path} L${xs[xs.length-1]},${h} L${xs[0]},${h} Z`;
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} fill="none" style={{ display:'block' }}>
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {[0,25,50,75,100].map(v => {
        const y = h - padY - (v / 100) * (h - padY * 2);
        return <line key={v} x1={padX} y1={y} x2={w - padX} y2={y}
          stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>;
      })}
      <path d={area} fill="url(#chartGrad)"/>
      <path d={path} stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx={xs[xs.length-1]} cy={ys[ys.length-1]} r="3.5" fill="#6ee7b7"/>
      <circle cx={xs[xs.length-1]} cy={ys[ys.length-1]} r="6" fill="rgba(110,231,183,0.15)"/>
    </svg>
  );
};

/* ── Code lines — remember / recall API ── */
const CODE_LINES = [
  { n: 1,  t: [{ c:'#7dd3fc',t:'import'},{c:'#e2e8f0',t:' { GlassMem } '},{c:'#7dd3fc',t:'from'},{c:'#86efac',t:" 'glassmem'"}] },
  { n: 2,  t: [] },
  { n: 3,  t: [{ c:'#7dd3fc',t:'const'},{c:'#e2e8f0',t:' memory '},{c:'#94a3b8',t:'='},{c:'#7dd3fc',t:' new'},{c:'#fcd34d',t:' GlassMem'},{c:'#e2e8f0',t:'()'}] },
  { n: 4,  t: [] },
  { n: 5,  t: [{ c:'#64748b',t:'// Remember an architecture decision' }] },
  { n: 6,  t: [{ c:'#7dd3fc',t:'await'},{c:'#e2e8f0',t:' memory.'},{c:'#93c5fd',t:'remember'},{c:'#e2e8f0',t:'('}] },
  { n: 7,  t: [{ c:'#86efac',t:'  "Use PostgreSQL for auth state"'},{c:'#e2e8f0',t:', {'}] },
  { n: 8,  t: [{ c:'#e2e8f0',t:'  type:    '},{c:'#86efac',t:'"architecture_decision"'},{c:'#e2e8f0',t:','}] },
  { n: 9,  t: [{ c:'#e2e8f0',t:'  source:  '},{c:'#86efac',t:'"Claude Code"'},{c:'#e2e8f0',t:','}] },
  { n: 10, t: [{ c:'#e2e8f0',t:'  expires: '},{c:'#fcd34d',t:'null'}] },
  { n: 11, t: [{ c:'#e2e8f0',t:'})'}] },
  { n: 12, t: [] },
  { n: 13, t: [{ c:'#64748b',t:'// Recall before the agent edits code' }] },
  { n: 14, t: [{ c:'#7dd3fc',t:'const'},{c:'#e2e8f0',t:' context '},{c:'#94a3b8',t:'='},{c:'#7dd3fc',t:' await'},{c:'#e2e8f0',t:' memory.'},{c:'#93c5fd',t:'recall'},{c:'#e2e8f0',t:'('},{c:'#86efac',t:'"auth refactor"'},{c:'#e2e8f0',t:')'}] },
];

/* ── Memory items for local-first mockup ── */
const MEMORY_ITEMS = [
  { dot: '#6ee7b7', label: '"Use FastAPI for backend endpoints"',               type: 'Architecture decision', meta: 'Claude Code session · 2 days ago',  status: 'Active'   },
  { dot: '#fb923c', label: '"Do not modify Stripe billing until migration"',    type: 'Temporary constraint',  meta: 'Expires Fri 18:00',                  status: 'Temporary'},
  { dot: '#f87171', label: '"Previous Redis cache approach caused stale reads"',type: 'Failed attempt',        meta: 'Bugfix session · 1 week ago',         status: 'Active'   },
  { dot: '#a78bfa', label: '"Prefer small PRs with tests"',                     type: 'User preference',       meta: 'Persistent',                          status: 'Active'   },
];

/* ── Hooks ── */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.07 }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCopy(text) {
  const [ok, set] = useState(false);
  const copy = () => navigator.clipboard.writeText(text).then(() => {
    set(true); setTimeout(() => set(false), 1800);
  });
  return [ok, copy];
}

/* ══════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════ */
export function GlassMemPage() {
  useReveal();

  const [scrolled,  setScrolled]  = useState(false);
  const [mobOpen,   setMobOpen]   = useState(false);
  const [copied,    copy]         = useCopy('glassmem init');
  const [ctaEmail,  setCtaEmail]  = useState('');
  const [ctaSent,   setCtaSent]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleCtaSubmit = (e) => {
    e.preventDefault();
    if (ctaEmail) setCtaSent(true);
  };

  return (
    <div>

      {/* ═══ NAV ════════════════════════════════════ */}
      <nav className="nav" style={{ borderBottomColor: scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)' }}>
        <div className="nav__row">
          <a href="/" className="nav__logo">
            <Logo size={24} />
            <span className="nav__wordmark">GlassMem</span>
          </a>
          <div className="nav__links">
            <a href="#how-it-works" className="nav__link">How it works</a>
            <a href="#compare"      className="nav__link">Compare</a>
            <a href="https://docs.glassmem.ai" className="nav__link">Docs</a>
            <a href="https://github.com/glassmem" className="nav__link">GitHub</a>
          </div>
          <div className="nav__right">
            <a href="/app"    className="btn btn--ghost btn--sm">Log in</a>
            <a href="/signup" className="btn btn--em btn--sm">Join waitlist</a>
          </div>
          <button className="nav__mob-toggle" onClick={() => setMobOpen(o => !o)} aria-label="Menu">
            {mobOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`nav__mob-menu${mobOpen ? ' open' : ''}`}>
          {['How it works','Compare','Docs','GitHub'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`} className="nav__mob-link" onClick={() => setMobOpen(false)}>{l}</a>
          ))}
        </div>
      </nav>

      {/* ═══ HERO ═══════════════════════════════════ */}
      <section className="hero">
        <div className="hero__fade" />
        <div className="w">
          <div className="hero__inner">
            <div>
              <div className="hero__badge enter">
                <span className="hero__badge-dot" />
                Local-first · MCP-native · Built for coding agents
              </div>
              <h1 className="h1 hero__h1 enter-2">
                Stop explaining<br />your project to<br />every new agent<br />session.
              </h1>
              <p className="body-lg hero__sub enter-3">
                GlassMem gives Claude Code, Cursor, Cline, Windsurf, Codex, and MCP agents shared project memory that stays local, inspectable, and fresh.
              </p>
              <div className="hero__ctas enter-4">
                <a href="/signup" className="btn btn--em btn--lg">Join waitlist</a>
                <a href="https://github.com/glassmem" className="btn btn--ghost btn--lg">View GitHub</a>
              </div>
              <p className="body-sm enter-5" style={{ color: 'var(--tx-3)', marginTop: 8 }}>
                Local-first. MCP-native. Built for coding agents.
              </p>
            </div>

            <div className="hero__viz-col">
              <p className="hero__viz-label">Live example: agent loads project context on session start.</p>
              <HeroViz />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LOGOS STRIP ════════════════════════════ */}
      <div className="logos">
        <div className="logos__inner">
          <span className="logos__label">Works with your tools</span>
          <div className="logos__track-wrap">
            <div className="logos__track">
              {[...LOGOS, ...LOGOS].map(({ img, name, h, style }, i) => (
                <div key={i} className="logos__item">
                  <img src={img} alt={name} className="logos__img" height={h} style={style} />
                  <span className="logos__item-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ PROBLEM ════════════════════════════════ */}
      <section className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">The problem</span>
              <h2 className="h2">Your agent is rebuilding<br />the same context over and over.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '44ch' }}>
              Every new session starts cold. Your agent has no memory of what you built, what you decided, or what constraints are still active.
            </p>
          </div>

          <div className="fail__table reveal">
            {[
              {
                tag: '01',
                title: 'Project amnesia',
                desc:  'Every new session starts cold. Your agent has to rediscover architecture, conventions, file structure, and open decisions.',
                issues: ['Re-reads the entire repo', 'Asks questions you already answered', 'Misses context buried in old chats'],
              },
              {
                tag: '02',
                title: 'Stale context',
                desc:  'Old instructions and outdated assumptions stick around forever. Your agent may follow decisions that are no longer true.',
                issues: ['No concept of expiration', 'Follows revoked constraints', 'Treats old and new context equally'],
              },
              {
                tag: '03',
                title: 'Tool silos',
                desc:  'Claude Code, Cursor, Cline, and other agents each maintain fragmented memory. Nothing stays in sync across sessions or tools.',
                issues: ['Each tool starts fresh', 'No shared project state', 'Repeated decisions per agent'],
              },
            ].map((col) => (
              <div key={col.tag} className="fail__col">
                <div className="fail__col-tag">{col.tag}</div>
                <div className="fail__col-title">{col.title}</div>
                <p className="fail__col-desc">{col.desc}</p>
                <div className="fail__issues">
                  {col.issues.map(iss => (
                    <div key={iss} className="fail__issue">
                      <span className="fail__x">✕</span>
                      <span>{iss}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="body-lg reveal" style={{ marginTop: 40, textAlign: 'center', maxWidth: '56ch', margin: '40px auto 0', color: 'var(--tx-3)' }}>
            This is not a model problem. It is a memory problem.
          </p>
        </div>
      </section>

      {/* ═══ WHAT GLASSMEM DOES ═════════════════════ */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="does__intro reveal">
            <span className="label">What it does</span>
            <h2 className="h2">Shared memory<br />for coding agents</h2>
            <p className="body-lg" style={{ maxWidth: '48ch', marginTop: 14 }}>
              GlassMem stores the context your agent should not have to rediscover.
            </p>
          </div>
          <div className="does__grid reveal">
            <div className="does__col">
              {[
                { title: 'Project decisions',   desc: 'Remember why you chose Postgres over Mongo, REST over GraphQL, or one package over another.' },
                { title: 'Coding conventions',  desc: 'Store naming patterns, folder structure, testing rules, linting expectations, and style preferences.' },
                { title: 'Temporary constraints', desc: 'Remember short-lived context like "do not touch billing this week" or "use mock data until Friday."' },
              ].map(f => (
                <div key={f.title} className="does__item" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '16px 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <span className="does__item-check">✓</span>
                    <span style={{ fontFamily: 'var(--f-disp)', fontSize: 15, fontWeight: 600, color: 'var(--tx)' }}>{f.title}</span>
                  </div>
                  <span style={{ fontSize: 14, color: 'var(--tx-2)', lineHeight: 1.6 }}>{f.desc}</span>
                </div>
              ))}
            </div>
            <div className="does__col">
              {[
                { title: 'Bug history',         desc: 'Remember failed approaches and edge cases so the agent does not repeat them.' },
                { title: 'User preferences',    desc: 'Remember how the developer likes code, explanations, diffs, and commits.' },
                { title: 'Cross-agent context', desc: 'Share memory across Claude Code, Cursor, Cline, Windsurf, Codex, and any MCP-compatible agent.' },
              ].map(f => (
                <div key={f.title} className="does__item" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '16px 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <span className="does__item-check">✓</span>
                    <span style={{ fontFamily: 'var(--f-disp)', fontSize: 15, fontWeight: 600, color: 'var(--tx)' }}>{f.title}</span>
                  </div>
                  <span style={{ fontSize: 14, color: 'var(--tx-2)', lineHeight: 1.6 }}>{f.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══════════════════════════ */}
      <section id="how-it-works" className="sec">
        <div className="w">
          <div className="alr__grid">
            {/* Left — steps */}
            <div>
              <div className="alr__intro reveal">
                <span className="label">How it works</span>
                <h2 className="h2">Three commands.<br />Persistent context.</h2>
                <p className="body-lg" style={{ marginTop: 14, maxWidth: '46ch' }}>
                  Your agent gets the right project context before it edits code — without re-reading your whole repo or stuffing giant summaries into prompts.
                </p>
              </div>
              <div className="alr__steps">
                {[
                  {
                    num: '01',
                    title: 'Initialize memory',
                    desc: 'Run glassmem init in your project. Creates a local memory store. No cloud required.',
                    code: 'glassmem init',
                  },
                  {
                    num: '02',
                    title: 'Connect your agent',
                    desc: 'Run glassmem mcp start to expose memory over MCP. Every MCP-compatible agent picks it up automatically.',
                    code: 'glassmem mcp start',
                  },
                  {
                    num: '03',
                    title: 'Remember and recall',
                    desc: 'Call memory.remember() to save project context. Call memory.recall() before inference. Done.',
                    code: 'memory.recall("auth refactor")',
                  },
                ].map((step, i) => (
                  <div key={i} className="alr__step reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                    <span className="alr__step-num">{step.num}</span>
                    <div>
                      <p className="alr__step-title">{step.title}</p>
                      <p className="alr__step-desc">{step.desc}</p>
                      <code style={{
                        display: 'inline-block', marginTop: 10,
                        fontFamily: 'var(--f-code)', fontSize: 12,
                        color: 'var(--em)', background: 'rgba(110,231,183,0.07)',
                        border: '1px solid rgba(110,231,183,0.15)',
                        padding: '3px 10px', borderRadius: 5,
                      }}>$ {step.code}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — code block */}
            <div className="alr__mockup reveal">
              <div className="alr__mockup-bar">
                <span className="alr__mockup-dot alr__mockup-dot--r" />
                <span className="alr__mockup-dot alr__mockup-dot--y" />
                <span className="alr__mockup-dot alr__mockup-dot--g" />
                <span className="alr__mockup-title">agent.ts</span>
              </div>

              {/* Terminal install block */}
              <div style={{ padding: '16px 22px 0', background: '#0c0d11', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {[
                  ['$', 'npm install glassmem'],
                  ['$', 'glassmem init'],
                  ['$', 'glassmem mcp start'],
                ].map(([p, cmd], i) => (
                  <div key={i} className="term__row" style={{ marginBottom: 6 }}>
                    <span style={{ color: 'var(--em)', fontFamily: 'var(--f-code)', fontSize: 13, minWidth: 16 }}>{p}</span>
                    <span style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--f-code)', fontSize: 13 }}>{cmd}</span>
                  </div>
                ))}
                <div style={{ height: 16 }} />
              </div>

              <div className="term__body" style={{ padding: '20px 22px', background: '#0c0d11' }}>
                {CODE_LINES.map(line => (
                  <div key={line.n} className="term__row">
                    <span className="term__ln">{line.n}</span>
                    <span>{line.t.map((tok, j) => <span key={j} style={{ color: tok.c }}>{tok.t}</span>)}</span>
                  </div>
                ))}
              </div>

              <div className="eco__badges">
                <p className="eco__label">Works with</p>
                <div className="eco__row">
                  {['Claude Code', 'Cursor', 'Cline', 'Windsurf', 'Codex', 'MCP', 'TypeScript', 'Python'].map(b => (
                    <span key={b} className="eco__badge">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY NOT CLAUDE.MD ══════════════════════ */}
      <section id="compare" className="sec sec--alt">
        <div className="w">
          <div className="compare__intro reveal">
            <div>
              <span className="label">vs CLAUDE.md</span>
              <h2 className="h2">CLAUDE.md is a good start.<br />GlassMem is the memory system.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '44ch' }}>
              Keep your CLAUDE.md. GlassMem keeps it from becoming a 400-line dumping ground.
            </p>
          </div>

          <div className="compare__table reveal">
            <div className="compare__head">
              <div className="compare__head-blank" />
              <div className="compare__head-col">CLAUDE.md / AGENTS.md</div>
              <div className="compare__head-col compare__head-col--em">GlassMem</div>
            </div>
            {[
              ['Format',       'Static markdown file',                  'Structured memories'                    ],
              ['Maintenance',  'Manually updated by you',               'Written by agents, updated automatically'],
              ['Freshness',    'Grows messy over time',                 'Stale context can be invalidated'       ],
              ['Expiration',   'No expiration',                         'Temporary memories expire on schedule'  ],
              ['Source',       'No history of who wrote what or when',  'Source and timestamp on every memory'   ],
              ['Cross-tool',   'Copy-paste across tools',               'Shared through MCP — one source of truth'],
              ['Inspectable',  'Hard to know what is still current',    'Local memory UI — see exactly what agents know'],
            ].map(([feature, neg, pos]) => (
              <div key={feature} className="compare__row">
                <div className="compare__cell compare__cell--feat">{feature}</div>
                <div className="compare__cell compare__cell--neg">{neg}</div>
                <div className="compare__cell compare__cell--pos">{pos}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY NOT A VECTOR DB ════════════════════ */}
      <section className="sec">
        <div className="w">
          <div className="compare__intro reveal">
            <div>
              <span className="label">vs vector databases</span>
              <h2 className="h2">Vector databases retrieve<br />similar text. GlassMem manages<br />project memory.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '44ch' }}>
              Your problem is not storing more text. Your problem is knowing what your agent should believe right now.
            </p>
          </div>

          <div className="compare__table reveal">
            <div className="compare__head">
              <div className="compare__head-blank" />
              <div className="compare__head-col">Vector DB</div>
              <div className="compare__head-col compare__head-col--em">GlassMem</div>
            </div>
            {[
              ['Stores',        'Text chunks',                              'Structured project memory'               ],
              ['Retrieves by',  'Semantic similarity',                      'Relevance, recency, and validity'         ],
              ['Expiration',    'No built-in expiration',                   'Temporary memories expire automatically'  ],
              ['Decisions',     'Treats all chunks equally',                'Tracks decisions and their rationale'     ],
              ['Temp context',  'Cannot distinguish stale from current',    'Marks and reverts temporary constraints'  ],
              ['Conflict',      'Weak at handling contradictions',          'Understands what supersedes what'         ],
              ['Designed for',  'Document retrieval',                       'Coding-agent workflows'                   ],
            ].map(([feature, vdb, gm]) => (
              <div key={feature} className="compare__row">
                <div className="compare__cell compare__cell--feat">{feature}</div>
                <div className="compare__cell compare__cell--neg">{vdb}</div>
                <div className="compare__cell compare__cell--pos">{gm}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOCAL-FIRST ════════════════════════════ */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="analytics__grid">
            {/* Left — prose */}
            <div className="analytics__prose reveal">
              <span className="label">Local-first</span>
              <h2 className="h2">Your project context<br />should not start in<br />someone else's cloud.</h2>
              <p className="body-lg" style={{ marginTop: 14, maxWidth: '44ch' }}>
                GlassMem starts local. Your memory is inspectable, editable, and portable.
              </p>
              <div className="analytics__points">
                {[
                  { title: 'SQLite-backed local memory',    desc: 'Your project memory lives on disk in a human-readable format. No account required to get started.' },
                  { title: 'Inspectable memory timeline',   desc: 'See every memory your agents have written — what it is, where it came from, and when it expires.' },
                  { title: 'Import, export, and own it',    desc: 'Your memories are yours. Export anytime, move between machines, or back up with your repo.' },
                ].map(pt => (
                  <div key={pt.title} className="analytics__point">
                    <span className="analytics__point-dot" />
                    <div>
                      <p className="analytics__point-title">{pt.title}</p>
                      <p className="analytics__point-desc">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — memory UI mockup */}
            <div className="analytics__dashboard reveal">
              <div className="analytics__dash-bar">
                <span className="analytics__dash-title">Project Memory</span>
                <span className="analytics__dash-period">my-saas-project</span>
              </div>
              <div className="analytics__stats">
                <div className="analytics__stat">
                  <div className="analytics__stat-val">14</div>
                  <div className="analytics__stat-lbl">memories</div>
                </div>
                <div className="analytics__stat">
                  <div className="analytics__stat-val analytics__stat-em">1</div>
                  <div className="analytics__stat-lbl">expiring soon</div>
                </div>
                <div className="analytics__stat">
                  <div className="analytics__stat-val">3</div>
                  <div className="analytics__stat-lbl">agents synced</div>
                </div>
              </div>

              {/* Memory items */}
              {MEMORY_ITEMS.map((item, i) => (
                <div key={i} className="hero__event">
                  <span className="hero__event-dot" style={{ background: item.dot }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="hero__event-method" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--f-code)', fontSize: 12 }}>{item.label}</div>
                    <div className="hero__event-detail">{item.type} · {item.meta}</div>
                  </div>
                  <span className="hero__event-time" style={{
                    color: item.status === 'Temporary' ? '#fb923c' : 'var(--tx-3)',
                    border: item.status === 'Temporary' ? '1px solid rgba(251,146,60,0.3)' : '1px solid var(--bd)',
                    padding: '2px 7px', borderRadius: 4, fontSize: 10,
                    fontFamily: 'var(--f-code)',
                  }}>{item.status}</span>
                </div>
              ))}

              <div className="analytics__chart-area">
                <div className="analytics__chart-label">
                  <span>memory recalls / day</span>
                  <span style={{ color: '#6ee7b7' }}>+3 agents active</span>
                </div>
                <div className="analytics__chart-wrap">
                  <AnalyticsChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ USE CASES ══════════════════════════════ */}
      <section className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Use cases</span>
              <h2 className="h2">Built for the work<br />agents actually do.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '44ch' }}>
              From solo vibecoders to small AI-native teams.
            </p>
          </div>
          <div className="fail__table reveal">
            {[
              {
                tag: 'Refactors',
                title: 'Long-running refactors',
                desc:  'A refactor that spans days or weeks needs persistent context. GlassMem keeps architecture decisions and open TODOs alive across every session.',
                issues: ['Multi-session continuity', 'Decision trail preserved', 'No re-explaining on day 3'],
              },
              {
                tag: 'Vibecoding',
                title: 'Vibecoded apps',
                desc:  'When you are moving fast and building with agents, GlassMem keeps your stack decisions, naming conventions, and rough edges in memory — not in your head.',
                issues: ['Fast iteration with context', 'No repeated conventions talk', 'Constraints survive reloads'],
              },
              {
                tag: 'Teams',
                title: 'AI-native teams',
                desc:  'When multiple developers use different coding agents on the same project, shared memory means everyone is working from the same project truth.',
                issues: ['Shared project memory', 'Consistent conventions', 'One source of agent context'],
              },
            ].map((col) => (
              <div key={col.tag} className="fail__col">
                <div className="fail__col-tag">{col.tag}</div>
                <div className="fail__col-title">{col.title}</div>
                <p className="fail__col-desc">{col.desc}</p>
                <div className="fail__issues">
                  {col.issues.map(iss => (
                    <div key={iss} className="fail__issue">
                      <span style={{ color: 'var(--em)', flexShrink: 0, marginTop: 1 }}>✓</span>
                      <span>{iss}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DEVELOPER EXPERIENCE ═══════════════════ */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="alr__grid">
            {/* Left */}
            <div>
              <div className="alr__intro reveal">
                <span className="label">Developer experience</span>
                <h2 className="h2">Made for developers<br />who just want it to work.</h2>
                <p className="body-lg" style={{ marginTop: 14, maxWidth: '46ch' }}>
                  No RAG pipeline. No Redis wrangling. No vector tuning. No memory research project.
                </p>
              </div>
              <div className="alr__steps">
                {[
                  {
                    num: '01',
                    title: 'Install in 30 seconds',
                    desc:  'npm install glassmem and glassmem init. Works locally with zero cloud config.',
                  },
                  {
                    num: '02',
                    title: 'MCP-native out of the box',
                    desc:  'glassmem mcp start exposes memory to every MCP-compatible agent automatically. Claude Code, Cursor, Cline, Windsurf — they all pick it up.',
                  },
                  {
                    num: '03',
                    title: 'TypeScript and Python SDKs',
                    desc:  'memory.remember() and memory.recall(). That is the core API. Both TypeScript and Python SDKs available.',
                  },
                ].map((step, i) => (
                  <div key={i} className="alr__step reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                    <span className="alr__step-num">{step.num}</span>
                    <div>
                      <p className="alr__step-title">{step.title}</p>
                      <p className="alr__step-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — badges */}
            <div className="alr__mockup reveal">
              <div className="alr__mockup-bar">
                <span className="alr__mockup-dot alr__mockup-dot--r" />
                <span className="alr__mockup-dot alr__mockup-dot--y" />
                <span className="alr__mockup-dot alr__mockup-dot--g" />
                <span className="alr__mockup-title">glassmem.config.ts</span>
              </div>
              <div className="term__body" style={{ padding: '20px 22px', background: '#0c0d11', minHeight: 200 }}>
                {[
                  { n: 1,  t: [{ c:'#7dd3fc',t:'import'},{c:'#e2e8f0',t:' { defineConfig } '},{c:'#7dd3fc',t:'from'},{c:'#86efac',t:" 'glassmem'"}] },
                  { n: 2,  t: [] },
                  { n: 3,  t: [{ c:'#7dd3fc',t:'export default'},{c:'#fcd34d',t:' defineConfig'},{c:'#e2e8f0',t:'({'}] },
                  { n: 4,  t: [{ c:'#e2e8f0',t:'  storage:  '},{c:'#86efac',t:'"local"'},{c:'#e2e8f0',t:', // sqlite on disk'}] },
                  { n: 5,  t: [{ c:'#e2e8f0',t:'  mcp:      '},{c:'#fcd34d',t:'true'},{c:'#e2e8f0',t:",   // expose via MCP"}] },
                  { n: 6,  t: [{ c:'#e2e8f0',t:'  agents:   '},{c:'#86efac',t:'["cursor","claude-code","cline"]'}] },
                  { n: 7,  t: [{ c:'#e2e8f0',t:'})'}] },
                ].map(line => (
                  <div key={line.n} className="term__row">
                    <span className="term__ln">{line.n}</span>
                    <span>{line.t.map((tok, j) => <span key={j} style={{ color: tok.c }}>{tok.t}</span>)}</span>
                  </div>
                ))}
              </div>
              <div className="eco__badges">
                <p className="eco__label">Compatible with</p>
                <div className="eco__row">
                  {['MCP-native','Claude Code','Cursor','Cline','Windsurf','Codex','TypeScript SDK','Python SDK','Local-first','Open core'].map(b => (
                    <span key={b} className="eco__badge">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OPEN-CORE ══════════════════════════════ */}
      <div className="claim">
        <div className="w">
          <p className="claim__eyebrow reveal">open core</p>
          <h2 className="claim__text reveal">
            Open where trust matters.<br />
            Hosted where teams<br />
            need <em>scale.</em>
          </h2>
          <p className="claim__sub reveal">
            GlassMem should be usable locally by every developer. The core memory engine, MCP server, and SDKs are designed to be open source. Paid hosted features — team sync, org memory, cloud backups, and an enterprise dashboard — come later.
          </p>
          <div className="claim__ctas reveal">
            <a href="/signup"                       className="btn btn--em btn--lg">Join waitlist</a>
            <a href="https://github.com/glassmem"  className="btn btn--ghost btn--lg">Star on GitHub</a>
          </div>
        </div>
      </div>

      {/* ═══ FINAL CTA ══════════════════════════════ */}
      <section className="sec cta">
        <div className="w">
          <div className="cta__inner">
            <div className="reveal">
              <span className="label">Get early access</span>
              <h2 className="cta__h2">Give your coding agent<br />a memory it can trust.</h2>
              <p className="body-lg cta__sub">
                Join the waitlist for local-first shared memory across Claude Code, Cursor, Cline, Windsurf, Codex, and MCP agents.
              </p>

              {ctaSent ? (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '12px 20px', borderRadius: 'var(--r)',
                  background: 'rgba(110,231,183,0.08)', border: '1px solid rgba(110,231,183,0.2)',
                  color: 'var(--em)', fontFamily: 'var(--f-code)', fontSize: 13,
                  marginBottom: 20,
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--em)', display: 'inline-block' }} />
                  You're on the list — we'll be in touch.
                </div>
              ) : (
                <form className="cta__email-form" onSubmit={handleCtaSubmit}>
                  <input
                    className="cta__email-input"
                    type="email"
                    placeholder="you@company.com"
                    value={ctaEmail}
                    onChange={e => setCtaEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn--em btn--lg">Request access</button>
                </form>
              )}

              <button className="cta__install" onClick={copy}>
                <span className="cta__install-p">$</span>
                <span style={{ color: 'rgba(255,255,255,0.65)' }}>glassmem init</span>
                <span className="hero__install-hint">{copied ? '✓ copied' : 'copy'}</span>
              </button>
            </div>

            <div className="cta__checklist reveal">
              {[
                'Works with Claude Code, Cursor, Cline, Windsurf, Codex',
                'Local-first — no cloud required to start',
                'MCP-native — agents pick it up automatically',
                'memory.remember() and memory.recall() — that\'s the API',
                'Temporary context expires automatically',
                'Open core — core engine will be open source',
              ].map(item => (
                <div key={item} className="cta__check-item">
                  <span className="cta__check-dot" />{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═════════════════════════════════ */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <Logo size={18} />
            <span className="footer__word">GlassMem</span>
          </div>
          <div className="footer__links">
            {[
              { l: 'Docs',    h: 'https://docs.glassmem.ai'     },
              { l: 'GitHub',  h: 'https://github.com/glassmem' },
              { l: 'Twitter', h: '#'                             },
              { l: 'Discord', h: '#'                             },
            ].map(({ l, h }) => (
              <a key={l} href={h} className="footer__link">{l}</a>
            ))}
          </div>
          <span className="footer__copy">© 2025 GlassMem · Open core</span>
        </div>
      </footer>

    </div>
  );
}
