import React, { useEffect, useState } from 'react';
import './GlassMemPage.css';

/* ── Pentagon logo ── */
const Logo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 1023 977" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1022.52 373.339C1021.96 372.826 1021.43 372.662 1020.91 372.849C952.332 397.256 883.755 421.662 815.182 446.069L813.942 446.119L355.892 113.329C355.715 112.988 355.715 112.988 355.892 112.639L510.772 0.108917C511.247 0.0018574 511.37 0.0434618 511.472 0.118911C529.505 13.2856 698.222 135.869 1017.62 367.869C1020.3 369.816 1021.92 371.036 1022.47 371.529C1022.89 371.896 1022.91 372.499 1022.52 373.339Z" fill="rgba(255,255,255,0.82)"/>
    <path d="M612.422 504.079L415.752 576.149C372.365 546.522 329.145 517.002 286.092 487.589C259.552 469.462 232.819 451.019 205.892 432.259C179.252 413.692 152.602 395.125 125.942 376.559L54.1621 326.559L209.062 215.459C210.556 215.275 210.812 215.459L612.422 504.079Z" fill="rgba(255,255,255,0.82)"/>
    <path d="M54.1621 326.559L125.942 376.559L294.232 916.569L273.442 976.189L189.202 976.149C188.722 975.809L0.0420414 366.449C0.111531 365.671 0.392048 365.389L54.1621 326.559Z" fill="url(#g1)"/>
    <path d="M612.421 504.079L459.441 975.729C459.078 976.163 458.791 976.209L273.441 976.189L294.231 916.569C335.255 802.876 375.511 690.306 415.771 577.739C416.151 576.136 415.751 576.149L612.421 504.079Z" fill="#6ee7b7"/>
    <path d="M960.793 563.233L827.393 973.609C826.938 974.142 826.583 974.199H642.673L813.942 446.119H815.183C869.944 426.578 924.709 407.088 979.475 387.597L1023 372L960.793 563.233Z" fill="#6ee7b7"/>
    <defs>
      <linearGradient id="g1" x1="147" y1="326" x2="147" y2="976" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6ee7b7"/><stop offset="1" stopColor="#34d399"/>
      </linearGradient>
    </defs>
  </svg>
);

/* ── Social icons ── */
const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.259 5.853 5.905-5.853zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const DiscordIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

/* ── Brand logos ── */
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

/* ── Context Flow Viz data ── */
const CTX_LEFT_AGENTS = [
  { name: 'Claude Code',   pip: '#6ee7b7' },
  { name: 'Cursor',        pip: '#a78bfa' },
  { name: 'Planner Agent', pip: '#fb923c' },
];
const CTX_RIGHT_AGENTS = [
  { name: 'Debug Agent',       pip: '#7dd3fc' },
  { name: 'External Agent',    pip: '#94a3b8' },
  { name: 'Billing Sub-Agent', pip: '#f472b6' },
];
const CTX_STORE = [
  { dot: '#6ee7b7', label: 'architecture decisions' },
  { dot: '#fb923c', label: 'active constraints'     },
  { dot: '#ef4444', label: 'failed approaches'      },
  { dot: '#a78bfa', label: 'user preferences'       },
  { dot: '#7dd3fc', label: 'task state'             },
  { dot: '#94a3b8', label: 'rationale history'      },
];
const CTX_EVENTS = [
  { actor: 'Planner Agent', action: 'writes', type: 'write',
    content: '"Do not touch billing until Stripe migration completes"',
    targets: ['Claude Code', 'Cursor', 'Debug Agent', 'Billing Sub-Agent'] },
  { actor: 'GlassMem', action: 'propagates to 4 agents', type: 'propagate',
    content: 'Constraint synchronized across all connected agents',
    targets: ['Claude Code', 'Cursor', 'Debug Agent', 'Billing Sub-Agent'] },
  { actor: 'Debug Agent', action: 'records failure', type: 'record',
    content: '"Redis cache caused stale reads in billing sync"',
    targets: [] },
  { actor: 'GlassMem', action: 'blocks repeat', type: 'block',
    content: 'Redis approach flagged — preventing External Agent from reproducing failure',
    targets: ['External Agent'] },
  { actor: 'GlassMem', action: 'auto-expires', type: 'expire',
    content: 'Billing freeze removed after migration window closed',
    targets: [] },
];

const ContextFlowViz = () => {
  const [evIdx, setEvIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setEvIdx(i => (i + 1) % CTX_EVENTS.length);
        setVisible(true);
      }, 280);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const ev = CTX_EVENTS[evIdx];

  return (
    <div className="cfviz">
      <div className="cfviz__bar">
        <span className="cfviz__bar-title"><Logo size={11}/>GlassMem · context layer</span>
        <span className="cfviz__bar-live"><span className="mfviz__live-dot"/>LIVE</span>
      </div>
      <div className="cfviz__body">
        {/* Left agents */}
        <div className="cfviz__agents">
          {CTX_LEFT_AGENTS.map(ag => (
            <div key={ag.name} className={`cfviz__node${ev.targets.includes(ag.name) ? ' cfviz__node--lit' : ''}`}>
              <span className="cfviz__node-pip" style={{ background: ag.pip }}/>
              <span className="cfviz__node-name">{ag.name}</span>
            </div>
          ))}
        </div>
        {/* Center hub */}
        <div className="cfviz__hub">
          <div className="cfviz__hub-name">GlassMem<br/>Context Layer</div>
          <div className="cfviz__hub-store">
            <div className="cfviz__hub-store-label">Shared operational context</div>
            {CTX_STORE.map(item => (
              <div key={item.label} className="cfviz__hub-row">
                <span className="cfviz__hub-dot" style={{ background: item.dot }}/>
                <span className="cfviz__hub-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right agents */}
        <div className="cfviz__agents cfviz__agents--r">
          {CTX_RIGHT_AGENTS.map(ag => (
            <div key={ag.name} className={`cfviz__node cfviz__node--r${ev.targets.includes(ag.name) ? ' cfviz__node--lit' : ''}`}>
              <span className="cfviz__node-pip" style={{ background: ag.pip }}/>
              <span className="cfviz__node-name">{ag.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Event log */}
      <div className={`cfviz__event${visible ? '' : ' cfviz__event--hidden'}`}>
        <span className={`cfviz__event-actor cfviz__event-actor--${ev.type}`}>{ev.actor}</span>
        <span className="cfviz__event-sep">{ev.action}:</span>
        <span className="cfviz__event-content">{ev.content}</span>
      </div>
      <div className="cfviz__progress">
        {CTX_EVENTS.map((_, i) => (
          <span key={i} className={`cfviz__progress-dot${i === evIdx ? ' cfviz__progress-dot--on' : ''}`}/>
        ))}
      </div>
    </div>
  );
};

/* ── How it works steps ── */
const HIW_STEPS = [
  {
    num: '01', label: 'Connect',
    title: 'Attach your agents in minutes.',
    desc: 'Connect Claude Code, Cursor, Codex, and custom MCP-compatible agents or orchestration frameworks. No per-tool config. Agents discover and authenticate automatically.',
    lines: [
      { c:'#94a3b8', t:'# Install and initialize GlassMem' },
      { c:'#e2e8f0', t:'' },
      { c:'#e2e8f0', t:'$ npm install -g glassmem' },
      { c:'#e2e8f0', t:'$ glassmem init' },
      { c:'#e2e8f0', t:'$ glassmem context start' },
      { c:'#e2e8f0', t:'' },
      { c:'#6ee7b7', t:'● Context layer on :8765' },
      { c:'#6ee7b7', t:'● Claude Code connected automatically' },
      { c:'#a78bfa', t:'● Cursor connected automatically' },
      { c:'#fb923c', t:'● Planner agent registered' },
    ],
  },
  {
    num: '02', label: 'Write',
    title: 'Write context with scope and expiry.',
    desc: 'Store operational context — constraints, decisions, failures, preferences — with scope, type, and expiry attached. GlassMem routes the right context to the right agents automatically.',
    lines: [
      { c:'#94a3b8', t:'// Write a scoped temporary constraint' },
      { c:'#e2e8f0', t:'' },
      { c:'#e2e8f0', t:'await glassmem.context.write({' },
      { c:'#86efac', t:'  scope:     "project.billing",' },
      { c:'#86efac', t:'  type:      "temporary_constraint",' },
      { c:'#86efac', t:'  content:   "No billing changes — Stripe migration active",' },
      { c:'#fcd34d', t:'  expiresAt: "2026-06-14T18:00:00Z",' },
      { c:'#e2e8f0', t:'})' },
      { c:'#e2e8f0', t:'' },
      { c:'#6ee7b7', t:'✓ Propagated to 4 connected agents' },
    ],
  },
  {
    num: '03', label: 'Route',
    title: 'Route the right context to each agent.',
    desc: 'Before each agent acts, GlassMem injects the relevant context slice — scoped by task, agent type, and project. Stale, superseded, and expired context is excluded automatically.',
    lines: [
      { c:'#94a3b8', t:'// Agent requests its context slice' },
      { c:'#e2e8f0', t:'' },
      { c:'#e2e8f0', t:'const ctx = await glassmem.context.forAgent({' },
      { c:'#86efac', t:'  agent: "billing-debugger",' },
      { c:'#86efac', t:'  task:  "investigate stale reads"' },
      { c:'#e2e8f0', t:'})' },
      { c:'#e2e8f0', t:'' },
      { c:'#94a3b8', t:'// ctx contains:' },
      { c:'#ef4444', t:'// ⚠ billing freeze · active until Fri 18:00' },
      { c:'#ef4444', t:'// ⚠ Redis approach · failed_approach' },
      { c:'#6ee7b7', t:'// ✓ Use Postgres row-level locking' },
    ],
  },
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
  const copy = () => navigator.clipboard.writeText(text).then(() => { set(true); setTimeout(() => set(false), 1800); });
  return [ok, copy];
}

/* ══════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════ */
export function GlassMemPage() {
  useReveal();
  const [scrolled,  setScrolled]  = useState(false);
  const [mobOpen,   setMobOpen]   = useState(false);
  const [copied,    copy]         = useCopy('glassmem context start');
  const [ctaEmail,  setCtaEmail]  = useState('');
  const [ctaSent,   setCtaSent]   = useState(false);
  const [activeHiw, setActiveHiw] = useState(0);

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
          <a href="/" className="nav__logo"><Logo size={24}/><span className="nav__wordmark">GlassMem</span></a>
          <div className="nav__links">
            <a href="#problem"       className="nav__link">Problem</a>
            <a href="#how-it-works"  className="nav__link">How it works</a>
            <a href="#observability" className="nav__link">Observability</a>
            <a href="https://docs.glassmem.ai" className="nav__link">Docs</a>
          </div>
          <div className="nav__right">
            <a href="/app"    className="btn btn--ghost btn--sm">Log in</a>
            <a href="/signup" className="btn btn--em btn--sm">Join waitlist</a>
          </div>
          <button className="nav__mob-toggle" onClick={() => setMobOpen(o => !o)} aria-label="Menu">{mobOpen ? '✕' : '☰'}</button>
        </div>
        <div className={`nav__mob-menu${mobOpen ? ' open' : ''}`}>
          {['Problem','How it works','Observability','Docs'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`} className="nav__mob-link" onClick={() => setMobOpen(false)}>{l}</a>
          ))}
        </div>
      </nav>

      {/* ═══ HERO ═══════════════════════════════════ */}
      <section className="hero">
        <div className="hero__fade"/>
        <div className="w">
          <div className="hero__inner">
            <div>
              <div className="hero__badge enter">
                <span className="hero__badge-dot"/>
                Context coordination infrastructure
              </div>
              <h1 className="h1 hero__h1 enter-2">
                Context coordination<br/>for distributed<br/>AI agents.
              </h1>
              <p className="body-lg hero__sub enter-3">
                GlassMem keeps agents, sub-agents, tools, and sessions aligned with shared operational context.
              </p>
              <ul className="hero__bullets enter-3">
                <li className="hero__bullet"><span className="hero__bullet-check">✓</span>propagate context across agents</li>
                <li className="hero__bullet"><span className="hero__bullet-check">✓</span>pass state into sub-agents automatically</li>
                <li className="hero__bullet"><span className="hero__bullet-check">✓</span>keep temporary constraints synchronized</li>
                <li className="hero__bullet"><span className="hero__bullet-check">✓</span>prevent stale context from spreading</li>
              </ul>
              <div className="hero__ctas enter-4">
                <a href="/signup" className="btn btn--em btn--lg">Join waitlist</a>
                <a href="#how-it-works" className="btn btn--ghost btn--lg">See how it works</a>
              </div>
              <button className="cta__install enter-5" onClick={copy} style={{ marginTop:14 }}>
                <span className="cta__install-p">$</span>
                <span style={{ color:'rgba(255,255,255,0.65)' }}>glassmem context start</span>
                <span className="hero__install-hint">{copied ? '✓ copied' : 'copy'}</span>
              </button>
            </div>
            <div className="hero__viz-col">
              <p className="hero__viz-label">Live: context coordination across 6 agents in real time.</p>
              <ContextFlowViz/>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LOGOS ══════════════════════════════════ */}
      <div className="logos">
        <div className="logos__inner">
          <span className="logos__label">Works with your agents and tools</span>
          <div className="logos__track-wrap">
            <div className="logos__track">
              {[...LOGOS, ...LOGOS].map(({ img, name, h, style }, i) => (
                <div key={i} className="logos__item">
                  <img src={img} alt={name} className="logos__img" height={h} style={style}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ PROBLEM ════════════════════════════════ */}
      <section id="problem" className="sec sec--alt">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">The problem</span>
              <h2 className="h2">Your agents do not share<br/>the same reality.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              Modern agent systems are distributed. Context is not.
            </p>
          </div>
          <div className="prob__grid reveal">
            {[
              {
                icon: '⟡',
                title: 'Fragmented context',
                desc: 'Claude Code knows one decision. Cursor knows another. The planner has a constraint the executor never sees.',
                examples: ['billing freeze not propagated to executor', 'sub-agent missing project architecture decisions'],
              },
              {
                icon: '⇌',
                title: 'Broken handoffs',
                desc: 'Agents spawn sub-agents, but the important context does not always follow the work.',
                examples: ['context.md copied manually between tools', 'sub-agent starts from zero on every spawn'],
              },
              {
                icon: '⟳',
                title: 'Stale operational state',
                desc: 'Temporary constraints, failed approaches, and old decisions leak into future runs.',
                examples: ['rejected Redis approach proposed again', 'expired migration freeze still applied'],
              },
              {
                icon: '⊘',
                title: 'Duplicated reasoning',
                desc: 'Every agent re-derives context instead of inheriting the current system state.',
                examples: ['same architecture decision reached 4 times', 'failed approach repeated across sessions'],
              },
            ].map(({ icon, title, desc, examples }) => (
              <div key={title} className="prob__card">
                <span className="prob__card-icon">{icon}</span>
                <div className="prob__card-title">{title}</div>
                <p className="prob__card-desc">{desc}</p>
                <div className="prob__card-examples">
                  {examples.map(ex => (
                    <div key={ex} className="prob__example">
                      <span className="fail__x">✕</span>
                      <span>{ex}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COORDINATION DEMO ══════════════════════ */}
      <section className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Live coordination demo</span>
              <h2 className="h2">One context update.<br/>Every agent stays aligned.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              GlassMem does not just store context. It routes the right context to the right agent at the right time.
            </p>
          </div>
          <div className="coord__grid reveal">
            <div className="coord__col coord__col--bad">
              <div className="coord__col-head">
                <span className="diy__dot diy__dot--bad"/>
                Without GlassMem
              </div>
              {[
                { text:'Planner sets billing freeze',                  bad: false },
                { text:'Cursor does not know',                        bad: true  },
                { text:'Claude Code proposes billing refactor',        bad: true  },
                { text:'Sub-agent starts without constraint',          bad: true  },
                { text:'Debug agent repeats Redis approach',           bad: true  },
                { text:'Human manually updates context.md',            bad: true  },
              ].map(({ text, bad }, i) => (
                <div key={i} className={`coord__step${bad ? ' coord__step--bad' : ''}`}>
                  <span className="coord__step-n">{String(i+1).padStart(2,'0')}</span>
                  <span className="coord__step-text">{text}</span>
                  {bad && <span className="coord__step-marker coord__step-marker--x">✕</span>}
                </div>
              ))}
            </div>
            <div className="coord__col coord__col--good">
              <div className="coord__col-head">
                <span className="diy__dot diy__dot--good"/>
                With GlassMem
              </div>
              {[
                'Planner writes billing freeze once',
                'GlassMem propagates constraint automatically',
                'Sub-agent inherits relevant state on spawn',
                'Debug agent sees failed Redis approach',
                'Claude Code receives current architecture decisions',
                'Temporary context expires automatically',
              ].map((text, i) => (
                <div key={i} className="coord__step coord__step--good">
                  <span className="coord__step-n">{String(i+1).padStart(2,'0')}</span>
                  <span className="coord__step-text">{text}</span>
                  <span className="coord__step-marker coord__step-marker--check">✓</span>
                </div>
              ))}
            </div>
          </div>
          <div className="coord__callout reveal">
            <div className="diy__quote-line"/>
            <p className="diy__quote-text">"GlassMem does not just store context. It routes the right context to the right agent at the right time."</p>
          </div>
        </div>
      </section>

      {/* ═══ WHAT GLASSMEM DOES ═════════════════════ */}
      <section id="memory" className="sec sec--alt">
        <div className="w">
          <div className="feat__intro reveal">
            <span className="label">What GlassMem does</span>
            <h2 className="h2">Operational context layer<br/>for agent systems.</h2>
            <p className="body-lg" style={{ maxWidth:'48ch', marginTop:14 }}>
              GlassMem tracks, scopes, routes, and invalidates operational context across agents and tools.
            </p>
          </div>
          <div className="feat__grid reveal">

            <div className="feat__card feat__card--wide">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-store">
                  {[
                    { pip:'#6ee7b7', text:'Architecture decisions propagated to all agents', tag:'active'  },
                    { pip:'#fb923c', text:'Billing freeze active until Fri 18:00',           tag:'temp ↺' },
                    { pip:'#ef4444', text:'Redis cache caused stale reads — blocked',        tag:'blocked' },
                  ].map((m,i) => (
                    <div key={i} className="feat__mock-row">
                      <span className="feat__mock-pip" style={{ background:m.pip }}/>
                      <span className="feat__mock-text">{m.text}</span>
                      <span className="feat__mock-tag">{m.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="feat__card-title">Context propagation</p>
              <p className="feat__card-desc">Update context once. Every connected agent receives the current state without manual synchronization or duplicate configuration files.</p>
            </div>

            <div className="feat__card">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-bug">
                  <div className="feat__mock-bug-row">
                    <span className="feat__mock-bug-x" style={{ color:'#7dd3fc' }}>↳</span>
                    <div>
                      <div className="feat__mock-bug-title">Billing Sub-Agent inherits</div>
                      <div className="feat__mock-bug-note">billing freeze · Redis failure · Postgres pattern</div>
                    </div>
                  </div>
                  <div className="feat__mock-bug-meta">from parent task · 3 context items passed automatically</div>
                </div>
              </div>
              <p className="feat__card-title">Sub-agent inheritance</p>
              <p className="feat__card-desc">Spawn a sub-agent with the relevant context slice automatically attached. Sub-agents never start from zero.</p>
            </div>

            <div className="feat__card">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-temp">
                  <div className="feat__mock-temp-badge">SCOPED</div>
                  <div className="feat__mock-temp-text">Global → Project → Task → Temporary</div>
                  <div className="feat__mock-temp-meta">each scope routed independently per agent</div>
                  <div className="feat__mock-temp-bar"><div className="feat__mock-temp-fill" style={{ width:'68%' }}/></div>
                </div>
              </div>
              <p className="feat__card-title">Scoped context</p>
              <p className="feat__card-desc">Separate global, project, task, user, and temporary context. Each agent receives only the scope relevant to its work.</p>
            </div>

            <div className="feat__card">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-code">
                  {['// mark old decision superseded','await context.supersede(oldId, {','  replacedBy: newDecisionId','})'].map((l,i) => (
                    <div key={i} className="feat__mock-code-line">{l}</div>
                  ))}
                </div>
              </div>
              <p className="feat__card-title">Context invalidation</p>
              <p className="feat__card-desc">Supersede old decisions and prevent stale context from spreading. New context explicitly replaces old — no silent accumulation across agents.</p>
            </div>

            <div className="feat__card">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-term">
                  <div className="feat__mock-term-line"><span style={{ color:'#6ee7b7' }}>written by</span>   Planner Agent</div>
                  <div className="feat__mock-term-line"><span style={{ color:'#a78bfa' }}>propagated to</span> 4 agents</div>
                  <div className="feat__mock-term-line"><span style={{ color:'#7dd3fc' }}>recalled by</span>  Debug Agent × 3</div>
                  <div className="feat__mock-term-line"><span style={{ color:'#fb923c' }}>out of scope</span> Cursor (different task)</div>
                </div>
              </div>
              <p className="feat__card-title">Context audit</p>
              <p className="feat__card-desc">See which agent wrote, received, used, or ignored each piece of context. Full lineage on every context packet.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ WHY EXISTING APPROACHES BREAK ════════ */}
      <section className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Why existing approaches break</span>
              <h2 className="h2">context.md does not scale<br/>to distributed agents.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              Storage is not the hard part. Coordination is.
            </p>
          </div>
          <div className="compare3 reveal">
            <div className="compare3__head">
              <div className="compare3__h-cell compare3__h-cell--feat"/>
              <div className="compare3__h-cell">context.md</div>
              <div className="compare3__h-cell">Vector DB / memory tools</div>
              <div className="compare3__h-cell compare3__h-cell--em">GlassMem</div>
            </div>
            {[
              ['Routing',       'no routing',            'passive storage',         'routes by agent, task, and scope'    ],
              ['Propagation',   'manual copy-paste',     'none',                    'propagates updates automatically'    ],
              ['Inheritance',   'no sub-agent support',  'no sub-agent handoff',    'sub-agents inherit parent context'   ],
              ['Lifecycle',     'no lifecycle model',    'no built-in expiration',  'temporary state auto-expires'        ],
              ['Coordination',  'breaks at scale',       'no agent coordination',   'active coordination layer'           ],
              ['Lineage',       'no lineage',            'no context topology',     'records lineage per context packet'  ],
              ['Stale context', 'spreads silently',      'treats all chunks equal', 'prevents stale context spreading'    ],
            ].map(([feat, bad1, bad2, good]) => (
              <div key={feat} className="compare3__row">
                <div className="compare3__cell compare3__cell--feat">{feat}</div>
                <div className="compare3__cell compare3__cell--neg">{bad1}</div>
                <div className="compare3__cell compare3__cell--neg">{bad2}</div>
                <div className="compare3__cell compare3__cell--pos">{good}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTEXT TOPOLOGY ═══════════════════════ */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Context topology</span>
              <h2 className="h2">Context needs structure,<br/>not a bigger prompt.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              GlassMem keeps scopes separate, routes them intentionally, and prevents one agent's stale assumptions from polluting the rest of the system.
            </p>
          </div>
          <div className="topo reveal">
            {[
              { scope:'Global context',        color:'#6ee7b7', items:['user preferences','organization rules','coding standards']         },
              { scope:'Project context',        color:'#a78bfa', items:['architecture decisions','dependencies','established conventions']   },
              { scope:'Task context',           color:'#7dd3fc', items:['current plan','accepted constraints','active files']               },
              { scope:'Temporary context',      color:'#fb923c', items:['billing freezes','migration windows','time-limited instructions']  },
              { scope:'Agent-local context',    color:'#94a3b8', items:['scratchpad','observations','partial reasoning']                    },
              { scope:'Sub-agent inherited',    color:'#f472b6', items:['relevant subset from parent task','scoped on spawn automatically'] },
            ].map(({ scope, color, items }) => (
              <div key={scope} className="topo__scope">
                <div className="topo__scope-bar" style={{ background: color }}/>
                <div className="topo__scope-inner">
                  <div className="topo__scope-name" style={{ color }}>{scope}</div>
                  <div className="topo__scope-items">
                    {items.map(item => (
                      <span key={item} className="topo__scope-item">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AGENT HANDOFFS ═════════════════════════ */}
      <section className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Agent handoffs</span>
              <h2 className="h2">Sub-agents should inherit context,<br/>not start from zero.</h2>
            </div>
          </div>
          <div className="handoff reveal">
            <div className="handoff__col">
              <div className="handoff__col-label">Parent Agent</div>
              <div className="handoff__bubble">
                <span className="handoff__bubble-agent">
                  <span className="inject__agent-pip" style={{ background:'#fb923c' }}/>
                  Planner Agent
                </span>
                <span className="handoff__bubble-task">"Refactor billing sync"</span>
              </div>
            </div>
            <div className="handoff__connector">
              <div className="handoff__connector-line"/>
              <div className="handoff__connector-label">GlassMem selects context</div>
              <div className="handoff__connector-arrow">▶</div>
            </div>
            <div className="handoff__col">
              <div className="handoff__col-label">Context passed to sub-agent</div>
              <div className="handoff__ctx-list">
                {[
                  { color:'#fb923c', text:'billing freeze active until Friday' },
                  { color:'#ef4444', text:'Redis approach failed — use Postgres' },
                  { color:'#6ee7b7', text:'Postgres row-level locking required' },
                  { color:'#a78bfa', text:'repository pattern required' },
                  { color:'#94a3b8', text:'user prefers small focused PRs' },
                ].map(({ color, text }) => (
                  <div key={text} className="handoff__ctx-item">
                    <span className="handoff__ctx-dot" style={{ background: color }}/>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="handoff__connector">
              <div className="handoff__connector-line"/>
              <div className="handoff__connector-arrow">▶</div>
            </div>
            <div className="handoff__col">
              <div className="handoff__col-label">Billing Sub-Agent</div>
              <div className="handoff__bubble handoff__bubble--result">
                <span className="handoff__bubble-agent">
                  <span className="inject__agent-pip" style={{ background:'#f472b6' }}/>
                  Billing Sub-Agent
                </span>
                <span className="handoff__bubble-task">"I'll avoid billing writes until the freeze ends and prepare a read-only analysis first."</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTEXT OBSERVABILITY ══════════════════ */}
      <section id="observability" className="sec sec--alt">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Context observability</span>
              <h2 className="h2">Debug context<br/>like you debug code.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              Every context packet has lineage. You can see who created it, where it propagated, which agent used it, and when it became stale.
            </p>
          </div>
          <div className="observe reveal">
            <div className="observe__packet">
              <div className="observe__packet-bar">
                <span className="observe__packet-bar-title"><Logo size={11}/>GlassMem · context packet</span>
                <span className="observe__packet-id">ctx_7f3a9b12</span>
              </div>
              <div className="observe__packet-body">
                <div className="observe__packet-content">"Do not modify billing until Stripe migration completes"</div>
                <div className="observe__packet-grid">
                  {[
                    { key:'source agent',  val:'Planner Agent',                                   color:'#fb923c' },
                    { key:'timestamp',     val:'2026-06-11 09:14:22 UTC',                          color:'var(--tx-2)' },
                    { key:'scope',         val:'project.billing',                                  color:'#a78bfa' },
                    { key:'status',        val:'active',                                           color:'#6ee7b7' },
                    { key:'inherited by',  val:'Claude Code, Debug Agent, Billing Sub-Agent',      color:'#7dd3fc' },
                    { key:'recalled by',   val:'billing-debugger × 3, claude-code × 1',            color:'#7dd3fc' },
                    { key:'superseded by', val:'—',                                                color:'var(--tx-3)' },
                    { key:'expires at',    val:'2026-06-14T18:00:00Z',                             color:'#fb923c' },
                  ].map(({ key, val, color }) => (
                    <div key={key} className="observe__packet-row">
                      <span className="observe__packet-key">{key}</span>
                      <span className="observe__packet-val" style={{ color }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="inspect__props" style={{ marginTop:28 }}>
              {[
                { icon:'◉', head:'Context lineage',   desc:'Every context packet records source, propagation path, and downstream consumption by agents.' },
                { icon:'◷', head:'Scope hierarchy',   desc:'Global, project, task, temporary, and agent-local scopes tracked and routed separately.'     },
                { icon:'◎', head:'Retrieval trace',   desc:'"Why did this agent receive this context?" is always answerable — no black boxes.'            },
                { icon:'✎', head:'Direct editing',    desc:'Edit any context packet, override scope, or force-expire directly from the inspector.'        },
              ].map(({ icon, head, desc }) => (
                <div key={head} className="inspect__prop">
                  <span className="inspect__prop-icon">{icon}</span>
                  <div>
                    <div className="inspect__prop-head">{head}</div>
                    <div className="inspect__prop-desc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══════════════════════════ */}
      <section id="how-it-works" className="sec">
        <div className="w">
          <div className="hiw__header reveal">
            <span className="label">How it works</span>
            <h2 className="h2">Connect your agents.<br/>Coordinate context.</h2>
          </div>
          <div className="hiw__grid">
            <div className="hiw__steps">
              {HIW_STEPS.map((step, i) => (
                <button
                  key={i}
                  className={`hiw__step${activeHiw === i ? ' hiw__step--active' : ''}`}
                  onClick={() => setActiveHiw(i)}
                >
                  <span className="hiw__step-num">{step.num}</span>
                  <div className="hiw__step-body">
                    <p className="hiw__step-label">{step.label}</p>
                    <p className="hiw__step-title">{step.title}</p>
                    <p className={`hiw__step-desc${activeHiw === i ? ' hiw__step-desc--visible' : ''}`}>{step.desc}</p>
                  </div>
                </button>
              ))}
            </div>
            <div className="hiw__panel reveal">
              <div className="alr__mockup-bar">
                <span className="alr__mockup-dot alr__mockup-dot--r"/>
                <span className="alr__mockup-dot alr__mockup-dot--y"/>
                <span className="alr__mockup-dot alr__mockup-dot--g"/>
                <span className="alr__mockup-title">glassmem · {HIW_STEPS[activeHiw].label.toLowerCase()}</span>
              </div>
              <div className="term__body" style={{ background:'#0c0d11', minHeight:280 }}>
                {HIW_STEPS[activeHiw].lines.map((line, i) => (
                  <div key={i} className="term__row">
                    <span className="term__ln">{i + 1}</span>
                    <span style={{ color: line.c }}>
                      {line.t}
                      {line.extra && line.extra.map((e, j) => <span key={j} style={{ color: e.c }}>{e.t}</span>)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="eco__badges">
                <p className="eco__label">Compatible with</p>
                <div className="eco__row">
                  {['Claude Code','Cursor','Codex','Cline','Windsurf','LangChain','CrewAI','MCP'].map(b => (
                    <span key={b} className="eco__badge">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ══════════════════════════════ */}
      <section className="sec cta">
        <div className="w">
          <div className="cta__inner">
            <div className="reveal">
              <span className="label">Get started</span>
              <h2 className="cta__h2">Keep every agent<br/>on the same page.</h2>
              <p className="body-lg cta__sub">
                GlassMem coordinates operational context across agents, sub-agents, tools, and sessions.
              </p>
              {ctaSent ? (
                <div style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'12px 20px', borderRadius:'var(--r)', background:'rgba(110,231,183,0.08)', border:'1px solid rgba(110,231,183,0.2)', color:'var(--em)', fontFamily:'var(--f-code)', fontSize:13, marginBottom:20 }}>
                  <span style={{ width:7, height:7, borderRadius:'50%', background:'var(--em)', display:'inline-block' }}/>
                  You're on the list — we'll be in touch.
                </div>
              ) : (
                <form className="cta__email-form" onSubmit={handleCtaSubmit}>
                  <input className="cta__email-input" type="email" placeholder="you@company.com" value={ctaEmail} onChange={e => setCtaEmail(e.target.value)} required/>
                  <button type="submit" className="btn btn--em btn--lg">Join waitlist</button>
                </form>
              )}
              <button className="cta__install" onClick={copy} style={{ marginTop:14 }}>
                <span className="cta__install-p">$</span>
                <span style={{ color:'rgba(255,255,255,0.65)' }}>glassmem context start</span>
                <span className="hero__install-hint">{copied ? '✓ copied' : 'copy'}</span>
              </button>
            </div>
            <div className="cta__checklist reveal">
              {[
                'context propagation across all connected agents',
                'sub-agent inheritance — relevant context follows the work',
                'temporary state synchronization with auto-expiry',
                'context lineage — full audit per context packet',
                'works with Claude Code, Cursor, Codex, Windsurf, Cline',
                'MCP-native — agents connect automatically',
                'observability — debug context like you debug code',
                'local-first — nothing leaves your machine by default',
              ].map(item => (
                <div key={item} className="cta__check-item"><span className="cta__check-dot"/>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRE-FOOTER ═════════════════════════════ */}
      <div className="prefooter"/>

      {/* ═══ FOOTER ═════════════════════════════════ */}
      <footer className="footer2">
        <div className="footer2__inner">
          <div className="footer2__top">
            <div className="footer2__left">
              <a href="/" className="footer2__brand"><Logo size={18}/><span className="footer2__wordmark">GlassMem</span></a>
              <div className="footer2__divider"/>
              <div className="footer2__socials">
                <a href="https://discord.gg/glassmem"   className="footer2__social" aria-label="Discord"><DiscordIcon/></a>
                <a href="https://github.com/glassmem"   className="footer2__social" aria-label="GitHub"><GitHubIcon/></a>
                <a href="https://twitter.com/glassmem" className="footer2__social" aria-label="X"><XIcon/></a>
              </div>
            </div>
            <nav className="footer2__nav">
              {[{l:'Docs',h:'https://docs.glassmem.ai'},{l:'GitHub',h:'https://github.com/glassmem'},{l:'Blog',h:'#'},{l:'Contact',h:'mailto:hello@glassmem.ai'}].map(({ l,h }) => (
                <a key={l} href={h} className="footer2__nav-link">{l}</a>
              ))}
            </nav>
          </div>
          <div className="footer2__bottom">
            <div className="footer2__status"><span className="footer2__status-dot"/>All systems operational</div>
            <span className="footer2__copy">© 2025 GlassMem</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
