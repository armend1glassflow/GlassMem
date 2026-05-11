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

/* ────────────────────────────────────────────────
   ANIMATED HERO VISUALIZATION
───────────────────────────────────────────────── */
const STORE_MEMORIES = [
  { pip: '#6ee7b7', text: 'Use FastAPI for backend',   tag: 'decision',   temporal: false },
  { pip: '#fb923c', text: 'No billing until Friday',   tag: 'temp',       temporal: true  },
  { pip: '#a78bfa', text: 'PostgreSQL for auth state', tag: 'decision',   temporal: false },
  { pip: '#94a3b8', text: 'Prefer small PRs + tests',  tag: 'preference', temporal: false },
];

const MF_AGENTS = [
  { name: 'Cursor',      pip: '#a78bfa', items: ['FastAPI backend', 'no Prisma in prod', 'PostgreSQL auth'] },
  { name: 'Claude Code', pip: '#6ee7b7', items: ['Small PRs + tests', 'REST over GraphQL', 'FastAPI backend'] },
  { name: 'Codex',       pip: '#fb923c', items: ['No billing Fri',   'FastAPI backend',   'PostgreSQL auth'] },
];

const MemoryFlowViz = () => {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const DURATIONS = [2500, 1500, 3800, 1500];
    let tid;
    const advance = (p) => {
      const next = (p + 1) % 4;
      tid = setTimeout(() => { setPhase(next); advance(next); }, DURATIONS[p]);
    };
    advance(0);
    return () => clearTimeout(tid);
  }, []);

  const syncing  = phase === 1;
  const loaded   = phase >= 2;
  const updating = phase === 3;

  return (
    <div className="mfviz">
      <div className="mfviz__bar">
        <span className="mfviz__bar-title"><Logo size={12} />GlassMem · project memory</span>
        <span className="mfviz__bar-live"><span className="mfviz__live-dot" />LIVE</span>
      </div>
      <div className="mfviz__store">
        <div className="mfviz__store-header">
          <span className="mfviz__store-label">shared memory store</span>
          <span className="mfviz__store-count">{STORE_MEMORIES.length} memories</span>
        </div>
        {STORE_MEMORIES.map((m, i) => (
          <div key={i} className={`mfviz__mem-row${updating && m.temporal ? ' mfviz__mem-row--updating' : ''}`}>
            <span className="mfviz__mem-pip" style={{ background: m.pip }} />
            <span className="mfviz__mem-text">{m.text}</span>
            <span className={`mfviz__mem-tag${m.temporal ? ' mfviz__mem-tag--warn' : ''}`}>
              {updating && m.temporal ? 'refreshed ↺' : m.tag}
            </span>
          </div>
        ))}
      </div>
      <div className="mfviz__sync">
        {phase === 0 && <span className="mfviz__sync-idle"><span className="mfviz__sync-idle-dot" />shared across agents via MCP</span>}
        {syncing    && <div className="mfviz__sync-flow"><span className="mfviz__sync-label">syncing context</span><div className="mfviz__sync-dots">{[0,1,2,3,4,5].map(i => <span key={i} className="mfviz__sync-dot" style={{ animationDelay:`${i*0.12}s` }}/>)}</div></div>}
        {loaded     && <span className="mfviz__sync-done">✓ context loaded in 3 agents</span>}
      </div>
      <div className="mfviz__agents">
        {MF_AGENTS.map((ag, i) => (
          <div key={ag.name} className="mfviz__agent">
            <div className="mfviz__agent-header">
              <span className="mfviz__agent-pip" style={{ background: ag.pip }} />
              <span className="mfviz__agent-name">{ag.name}</span>
              {phase === 0 && <span className="mfviz__agent-badge mfviz__agent-badge--cold">new session</span>}
              {syncing     && <span className="mfviz__agent-badge mfviz__agent-badge--sync">loading…</span>}
              {loaded      && <span className="mfviz__agent-badge mfviz__agent-badge--ok">✓ ready</span>}
            </div>
            {!loaded && (
              <div className="mfviz__agent-empty">
                {phase === 0
                  ? <><span className="mfviz__agent-empty-dot"/>Cold start — no context</>
                  : <div className="mfviz__agent-progress"><div className="mfviz__agent-bar"/></div>
                }
              </div>
            )}
            {loaded && ag.items.map((item, j) => (
              <div key={j} className="mfviz__agent-item" style={{ animationDelay:`${j*0.14}s` }}>
                <span className="mfviz__agent-item-pip" style={{ background: ag.pip }}/>
                <span className="mfviz__agent-item-text">{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Analytics chart ── */
const AnalyticsChart = () => {
  const pts = [12,28,22,45,38,62,55,80,72,94,88,100];
  const w=320,h=100,padX=8,padY=8;
  const xs = pts.map((_,i) => padX+(i/(pts.length-1))*(w-padX*2));
  const ys = pts.map(v => h-padY-(v/100)*(h-padY*2));
  const path = xs.map((x,i) => `${i===0?'M':'L'}${x},${ys[i]}`).join(' ');
  const area = `${path} L${xs[xs.length-1]},${h} L${xs[0]},${h} Z`;
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} fill="none" style={{ display:'block' }}>
      <defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.18"/><stop offset="100%" stopColor="#6ee7b7" stopOpacity="0"/></linearGradient></defs>
      {[0,25,50,75,100].map(v => { const y=h-padY-(v/100)*(h-padY*2); return <line key={v} x1={padX} y1={y} x2={w-padX} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>; })}
      <path d={area} fill="url(#cg)"/>
      <path d={path} stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx={xs[xs.length-1]} cy={ys[ys.length-1]} r="3.5" fill="#6ee7b7"/>
      <circle cx={xs[xs.length-1]} cy={ys[ys.length-1]} r="6"   fill="rgba(110,231,183,0.15)"/>
    </svg>
  );
};

/* ── How it works tabs ── */
const HIW_STEPS = [
  {
    num: '01', label: 'Initialize',
    title: 'Connect in seconds.',
    desc: 'Run three commands. GlassMem creates a local memory store and exposes it over MCP. No config. No boilerplate. Every compatible agent picks it up automatically.',
    lines: [
      { c:'#94a3b8', t:'# Install and initialize' },
      { c:'#e2e8f0', t:'' },
      { c:'#e2e8f0', t:'$ npm install glassmem' },
      { c:'#e2e8f0', t:'$ glassmem init' },
      { c:'#e2e8f0', t:'$ glassmem mcp start' },
      { c:'#e2e8f0', t:'' },
      { c:'#6ee7b7', t:'● MCP server running on :8765' },
      { c:'#6ee7b7', t:'● 3 agents connected' },
    ],
  },
  {
    num: '02', label: 'Remember',
    title: 'Write structured memories.',
    desc: 'Save project decisions, coding conventions, and temporary constraints from any agent. Attach a type, source, and optional expiry. GlassMem handles the rest.',
    lines: [
      { c:'#94a3b8', t:'// Write a memory from your agent' },
      { c:'#e2e8f0', t:'' },
      { c:'#7dd3fc', t:'await ', extra: [{ c:'#e2e8f0', t:'memory.' },{ c:'#93c5fd', t:'remember' },{ c:'#e2e8f0', t:'(' }] },
      { c:'#86efac', t:'  "Use PostgreSQL for auth state",' },
      { c:'#e2e8f0', t:'  {' },
      { c:'#e2e8f0', t:'    type:    ', extra: [{ c:'#86efac', t:'"architecture_decision",' }] },
      { c:'#e2e8f0', t:'    source:  ', extra: [{ c:'#86efac', t:'"Claude Code",' }] },
      { c:'#e2e8f0', t:'    expires: ', extra: [{ c:'#fcd34d', t:'null' }] },
      { c:'#e2e8f0', t:'  }' },
      { c:'#e2e8f0', t:')' },
    ],
  },
  {
    num: '03', label: 'Recall',
    title: 'Retrieve before every inference.',
    desc: 'Before the agent edits code, call recall(). Get back the most relevant project context — ranked by recency and validity, returned in milliseconds.',
    lines: [
      { c:'#94a3b8', t:'// Recall before inference' },
      { c:'#e2e8f0', t:'' },
      { c:'#7dd3fc', t:'const ', extra: [{ c:'#e2e8f0', t:'ctx = ' },{ c:'#7dd3fc', t:'await ' },{ c:'#e2e8f0', t:'memory.' },{ c:'#93c5fd', t:'recall' },{ c:'#86efac', t:'("auth")' }] },
      { c:'#e2e8f0', t:'' },
      { c:'#94a3b8', t:'// Returns ranked memories:' },
      { c:'#6ee7b7', t:'// → "Use PostgreSQL for auth"' },
      { c:'#6ee7b7', t:'//   architecture_decision · 2d ago' },
      { c:'#fb923c', t:'// → "No billing until Friday"' },
      { c:'#fb923c', t:'//   temp · expires Fri 18:00' },
    ],
  },
];

/* ── Pricing plans (mem0.ai prices) ── */
const PLANS = [
  {
    tier: 'Free',
    price: '$0',
    period: '/mo',
    desc: 'For side projects',
    featured: false,
    feats: ['10,000 add requests / mo', '1,000 retrieval requests / mo', '1 project', 'Community support', 'Starter analytics'],
  },
  {
    tier: 'Starter',
    price: '$19',
    period: '/mo',
    desc: 'For early products',
    featured: false,
    feats: ['50,000 add requests / mo', '5,000 retrieval requests / mo', '1 project', 'Community support', 'Growth analytics'],
  },
  {
    tier: 'Growth',
    price: '$79',
    period: '/mo',
    desc: 'For growing teams',
    featured: false,
    feats: ['200,000 add requests / mo', '20,000 retrieval requests / mo', '3 projects', 'Email support', 'Basic analytics'],
  },
  {
    tier: 'Pro',
    price: '$249',
    period: '/mo',
    desc: 'For production agents',
    featured: true,
    feats: ['500,000 add requests / mo', '50,000 retrieval requests / mo', 'Unlimited projects', 'Private Slack', 'Advanced analytics'],
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Usage-based pricing',
    featured: false,
    feats: ['Unlimited requests', 'Unlimited projects', 'On-prem deployment', 'Private Slack + SLA', 'Advanced analytics'],
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
  const [scrolled,   setScrolled]   = useState(false);
  const [mobOpen,    setMobOpen]    = useState(false);
  const [copied,     copy]          = useCopy('glassmem init');
  const [ctaEmail,   setCtaEmail]   = useState('');
  const [ctaSent,    setCtaSent]    = useState(false);
  const [activeHiw,  setActiveHiw]  = useState(0);
  const [activeComp, setActiveComp] = useState(0); // 0 = CLAUDE.md, 1 = Vector DB

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleCtaSubmit = (e) => {
    e.preventDefault();
    if (ctaEmail) setCtaSent(true);
  };

  /* comparison data */
  const COMP_TABLES = [
    {
      label: 'vs CLAUDE.md / AGENTS.md',
      note: 'Keep your CLAUDE.md. GlassMem keeps it from becoming a 400-line dumping ground.',
      rows: [
        ['Format',      'Static markdown file',                 'Structured, queryable memories'         ],
        ['Maintenance', 'Manually updated by you',              'Written by agents, updated automatically'],
        ['Freshness',   'Grows messy over time',                'Stale context can be invalidated'        ],
        ['Expiration',  'No expiration',                        'Temporary memories expire on schedule'   ],
        ['Source',      'No history of who wrote what or when', 'Timestamp + source on every memory'      ],
        ['Cross-tool',  'Copy-paste across tools',              'Shared through MCP — one source of truth'],
        ['Inspectable', 'Hard to know what is current',         'Local UI — see exactly what agents know' ],
      ],
    },
    {
      label: 'vs Vector databases',
      note: 'Your problem is not storing more text. Your problem is knowing what your agent should believe right now.',
      rows: [
        ['Stores',       'Text chunks',                           'Structured project memory'              ],
        ['Retrieves by', 'Semantic similarity',                   'Relevance, recency, and validity'        ],
        ['Expiration',   'No built-in expiration',                'Temporary memories expire automatically' ],
        ['Decisions',    'Treats all chunks equally',             'Tracks decisions and their rationale'    ],
        ['Temp context', 'Cannot distinguish stale from current', 'Marks and reverts temporary constraints' ],
        ['Conflict',     'Weak at handling contradictions',       'Understands what supersedes what'        ],
        ['Designed for', 'Document retrieval',                    'Coding-agent workflows'                  ],
      ],
    },
  ];

  const activeTable = COMP_TABLES[activeComp];

  return (
    <div>

      {/* ═══ NAV ════════════════════════════════════ */}
      <nav className="nav" style={{ borderBottomColor: scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)' }}>
        <div className="nav__row">
          <a href="/" className="nav__logo"><Logo size={24}/><span className="nav__wordmark">GlassMem</span></a>
          <div className="nav__links">
            <a href="#how-it-works" className="nav__link">How it works</a>
            <a href="#compare"      className="nav__link">Compare</a>
            <a href="#pricing"      className="nav__link">Pricing</a>
            <a href="https://docs.glassmem.ai" className="nav__link">Docs</a>
          </div>
          <div className="nav__right">
            <a href="/app"    className="btn btn--ghost btn--sm">Log in</a>
            <a href="/signup" className="btn btn--em btn--sm">Join waitlist</a>
          </div>
          <button className="nav__mob-toggle" onClick={() => setMobOpen(o => !o)} aria-label="Menu">{mobOpen ? '✕' : '☰'}</button>
        </div>
        <div className={`nav__mob-menu${mobOpen ? ' open' : ''}`}>
          {['How it works','Compare','Pricing','Docs'].map(l => (
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
                Local-first · MCP-native · Built for coding agents
              </div>
              <h1 className="h1 hero__h1 enter-2">
                Stop explaining<br/>your project to<br/>every new agent<br/>session.
              </h1>
              <p className="body-lg hero__sub enter-3">
                The next gen context layer that manages temporal updates (e.g. no billing until Friday) and shares context across agents.
              </p>
              <div className="hero__ctas enter-4">
                <a href="/signup" className="btn btn--em btn--lg">Join waitlist</a>
                <a href="https://github.com/glassmem" className="btn btn--ghost btn--lg">View GitHub</a>
              </div>
              <p className="body-sm enter-5" style={{ color:'var(--tx-3)', marginTop:8 }}>
                Local-first. MCP-native. Built for coding agents.
              </p>
            </div>
            <div className="hero__viz-col">
              <p className="hero__viz-label">Live: agent loads context on session start, syncs across tools, updates temporal memory.</p>
              <MemoryFlowViz/>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LOGOS STRIP — no names ═════════════════ */}
      <div className="logos">
        <div className="logos__inner">
          <span className="logos__label">Works with your tools</span>
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
      <section className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">The problem</span>
              <h2 className="h2">Your agent is rebuilding<br/>the same context over and over.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              Every new session starts cold. Your agent has no memory of what you built, what you decided, or what constraints are still active.
            </p>
          </div>
          <div className="fail__table reveal">
            {[
              { tag:'01', title:'Project amnesia',  desc:'Every new session starts cold. Your agent has to rediscover architecture, conventions, file structure, and open decisions.', issues:['Re-reads the entire repo','Asks questions you already answered','Misses context buried in old chats'] },
              { tag:'02', title:'Stale context',    desc:'Old instructions and outdated assumptions stick around forever. Your agent may follow decisions that are no longer true.',    issues:['No concept of expiration','Follows revoked constraints','Treats old and new context equally'] },
              { tag:'03', title:'Tool silos',       desc:'Claude Code, Cursor, Codex, and other agents each maintain fragmented memory. Nothing stays in sync across sessions or tools.',issues:['Each tool starts fresh','No shared project state','Repeated decisions per agent'] },
            ].map(col => (
              <div key={col.tag} className="fail__col">
                <div className="fail__col-tag">{col.tag}</div>
                <div className="fail__col-title">{col.title}</div>
                <p className="fail__col-desc">{col.desc}</p>
                <div className="fail__issues">
                  {col.issues.map(iss => (
                    <div key={iss} className="fail__issue"><span className="fail__x">✕</span><span>{iss}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="body-lg reveal" style={{ marginTop:40, textAlign:'center', color:'var(--tx-3)' }}>
            This is not a model problem. It is a memory problem.
          </p>
        </div>
      </section>

      {/* ═══ WHAT GLASSMEM DOES — bento grid ════════ */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="feat__intro reveal">
            <span className="label">What it does</span>
            <h2 className="h2">Shared memory<br/>for coding agents</h2>
            <p className="body-lg" style={{ maxWidth:'48ch', marginTop:14 }}>
              GlassMem stores the context your agent should not have to rediscover.
            </p>
          </div>
          <div className="feat__grid reveal">

            {/* Card 1 — large, spans 2 cols, shows memory UI */}
            <div className="feat__card feat__card--wide">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-store">
                  {[
                    { pip:'#6ee7b7', text:'Use FastAPI for backend', tag:'decision' },
                    { pip:'#fb923c', text:'No billing until Friday', tag:'temp ↺' },
                    { pip:'#a78bfa', text:'PostgreSQL for auth',     tag:'decision' },
                  ].map((m,i) => (
                    <div key={i} className="feat__mock-row">
                      <span className="feat__mock-pip" style={{ background:m.pip }}/>
                      <span className="feat__mock-text">{m.text}</span>
                      <span className="feat__mock-tag">{m.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="feat__card-title">Project decisions</p>
              <p className="feat__card-desc">Remember why you chose Postgres over Mongo, REST over GraphQL, or one package over another. Decisions stay attached to their rationale.</p>
            </div>

            {/* Card 2 — coding conventions */}
            <div className="feat__card">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-code">
                  {['// ✓ src/handlers/{name}.handler.ts','// ✓ camelCase variables','// ✓ Jest for all tests','// ✓ no direct DB calls in routes'].map((l,i) => (
                    <div key={i} className="feat__mock-code-line">{l}</div>
                  ))}
                </div>
              </div>
              <p className="feat__card-title">Coding conventions</p>
              <p className="feat__card-desc">Store naming patterns, folder structure, testing rules, and style preferences. Every agent follows the same conventions.</p>
            </div>

            {/* Card 3 — temporary constraints */}
            <div className="feat__card">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-temp">
                  <div className="feat__mock-temp-badge">TEMPORARY</div>
                  <div className="feat__mock-temp-text">No billing until Friday</div>
                  <div className="feat__mock-temp-meta">Expires Fri 18:00 · 3 days remaining</div>
                  <div className="feat__mock-temp-bar"><div className="feat__mock-temp-fill"/></div>
                </div>
              </div>
              <p className="feat__card-title">Temporary constraints</p>
              <p className="feat__card-desc">Short-lived context like "do not touch billing this week." Set an expiry and GlassMem removes it automatically.</p>
            </div>

            {/* Card 4 — bug history */}
            <div className="feat__card">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-bug">
                  <div className="feat__mock-bug-row">
                    <span className="feat__mock-bug-x">✕</span>
                    <div>
                      <div className="feat__mock-bug-title">Redis cache approach</div>
                      <div className="feat__mock-bug-note">"stale reads in parallel sessions"</div>
                    </div>
                  </div>
                  <div className="feat__mock-bug-meta">Failed attempt · Logged by Cursor</div>
                </div>
              </div>
              <p className="feat__card-title">Bug history</p>
              <p className="feat__card-desc">Remember failed approaches so the agent does not repeat them. Keeps a record of what did not work and why.</p>
            </div>

            {/* Card 5 — cross-agent */}
            <div className="feat__card">
              <div className="feat__card-art feat__card-art--tall">
                <svg viewBox="0 0 120 80" fill="none" style={{ width:'100%', maxWidth:160 }}>
                  <circle cx="60" cy="40" r="10" stroke="#6ee7b7" strokeWidth="1.2" fill="rgba(110,231,183,0.08)"/>
                  <text x="60" y="44" textAnchor="middle" fontSize="7" fill="#6ee7b7" fontFamily="monospace">MEM</text>
                  {[{ x:18, y:15, c:'#a78bfa', n:'Cursor' },{ x:102, y:15, c:'#6ee7b7', n:'Claude' },{ x:60, y:70, c:'#fb923c', n:'Codex' }].map(ag => (
                    <g key={ag.n}>
                      <line x1={ag.x} y1={ag.y} x2="60" y2="40" stroke={ag.c} strokeWidth="0.8" strokeDasharray="3,3" opacity="0.6"/>
                      <circle cx={ag.x} cy={ag.y} r="7" stroke={ag.c} strokeWidth="1" fill="rgba(0,0,0,0.6)"/>
                      <text x={ag.x} y={ag.y+3} textAnchor="middle" fontSize="5" fill={ag.c} fontFamily="monospace">{ag.n.slice(0,3)}</text>
                    </g>
                  ))}
                </svg>
              </div>
              <p className="feat__card-title">Cross-agent context</p>
              <p className="feat__card-desc">Share memory across Claude Code, Cursor, Codex, Windsurf, and any MCP-compatible agent. One store — all agents in sync.</p>
            </div>

            {/* Card 6 — MCP-native */}
            <div className="feat__card">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-term">
                  <div className="feat__mock-term-line"><span style={{ color:'var(--em)' }}>$</span> glassmem mcp start</div>
                  <div className="feat__mock-term-line feat__mock-term-ok">● MCP server on :8765</div>
                  <div className="feat__mock-term-line feat__mock-term-ok">● 3 agents connected</div>
                </div>
              </div>
              <p className="feat__card-title">MCP-native</p>
              <p className="feat__card-desc">One command exposes memory over MCP. Claude Code, Cursor, Codex — all pick it up automatically. No per-tool config needed.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS (mem0 style) ══════════════ */}
      <section id="how-it-works" className="sec">
        <div className="w">
          <div className="hiw__header reveal">
            <span className="label">How it works</span>
            <h2 className="h2">Three steps.<br/>Persistent context.</h2>
          </div>
          <div className="hiw__grid">
            {/* Left: step list */}
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

            {/* Right: code panel */}
            <div className="hiw__panel reveal">
              <div className="alr__mockup-bar">
                <span className="alr__mockup-dot alr__mockup-dot--r"/>
                <span className="alr__mockup-dot alr__mockup-dot--y"/>
                <span className="alr__mockup-dot alr__mockup-dot--g"/>
                <span className="alr__mockup-title">glassmem · {HIW_STEPS[activeHiw].label.toLowerCase()}</span>
              </div>
              <div className="term__body" style={{ background:'#0c0d11', minHeight:260, transition:'opacity 0.2s' }}>
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
                <p className="eco__label">Works with</p>
                <div className="eco__row">
                  {['Claude Code','Cursor','Codex','Cline','Windsurf','MCP','TypeScript','Python'].map(b => (
                    <span key={b} className="eco__badge">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPARE — tabbed ═══════════════════════ */}
      <section id="compare" className="sec sec--alt">
        <div className="w">
          <div className="comp__header reveal">
            <div>
              <span className="label">Honest comparisons</span>
              <h2 className="h2">Why not use<br/>what you already have?</h2>
            </div>
            <div className="comp__tabs">
              {COMP_TABLES.map((t,i) => (
                <button
                  key={i}
                  className={`comp__tab${activeComp === i ? ' comp__tab--active' : ''}`}
                  onClick={() => setActiveComp(i)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <p className="body-lg reveal" style={{ maxWidth:'52ch', marginBottom:32, color:'var(--tx-2)' }}>
            {activeTable.note}
          </p>

          <div className="compare__table reveal">
            <div className="compare__head">
              <div className="compare__head-blank"/>
              <div className="compare__head-col">
                {activeComp === 0 ? 'CLAUDE.md / AGENTS.md' : 'Vector DB'}
              </div>
              <div className="compare__head-col compare__head-col--em">GlassMem</div>
            </div>
            {activeTable.rows.map(([feat, neg, pos]) => (
              <div key={feat} className="compare__row">
                <div className="compare__cell compare__cell--feat">{feat}</div>
                <div className="compare__cell compare__cell--neg">{neg}</div>
                <div className="compare__cell compare__cell--pos">{pos}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ USE CASES ══════════════════════════════ */}
      <section className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Use cases</span>
              <h2 className="h2">Built for the work<br/>agents actually do.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>From solo vibecoders to small AI-native teams.</p>
          </div>
          <div className="fail__table reveal">
            {[
              { tag:'Refactors',  title:'Long-running refactors', desc:'Multi-day refactors need persistent context. GlassMem keeps architecture decisions and open TODOs alive across every session.', issues:['Multi-session continuity','Decision trail preserved','No re-explaining on day 3'] },
              { tag:'Vibecoding', title:'Vibecoded apps',         desc:'When building fast with agents, GlassMem keeps stack decisions, naming conventions, and rough edges in memory — not in your head.', issues:['Fast iteration with context','No repeated conventions','Constraints survive reloads'] },
              { tag:'Teams',      title:'AI-native teams',        desc:'When multiple developers use different coding agents on the same project, shared memory means everyone works from the same project truth.', issues:['Shared project memory','Consistent conventions','One source of agent context'] },
            ].map(col => (
              <div key={col.tag} className="fail__col">
                <div className="fail__col-tag">{col.tag}</div>
                <div className="fail__col-title">{col.title}</div>
                <p className="fail__col-desc">{col.desc}</p>
                <div className="fail__issues">
                  {col.issues.map(iss => (
                    <div key={iss} className="fail__issue"><span style={{ color:'var(--em)', flexShrink:0, marginTop:1 }}>✓</span><span>{iss}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ════════════════════════════════ */}
      <section id="pricing" className="sec sec--alt">
        <div className="w">
          <div style={{ textAlign:'center', marginBottom:48 }} className="reveal">
            <span className="label">Pricing</span>
            <h2 className="h2" style={{ marginBottom:10 }}>Simple, transparent pricing</h2>
            <p className="body-lg" style={{ maxWidth:'42ch', margin:'0 auto' }}>
              Start free. Scale when your agents do.
            </p>
          </div>
          <div className="pricing__grid pricing__grid--5 reveal">
            {PLANS.map((p,i) => (
              <div key={i} className={`plan${p.featured ? ' plan--feat' : ''}`}>
                <div className="plan__tier">{p.tier}{p.featured && <span className="plan__badge">Most popular</span>}</div>
                <div className="plan__price">{p.price}<span className="plan__period">{p.period}</span></div>
                <div className="plan__desc">{p.desc}</div>
                <div className="plan__rule"/>
                <ul className="plan__feats">
                  {p.feats.map(f => <li key={f} className="plan__feat"><span className="plan__check">✓</span>{f}</li>)}
                </ul>
                <a href="/signup" className={`btn btn--lg${p.featured ? ' btn--em' : ' btn--ghost'}`} style={{ justifyContent:'center' }}>
                  {p.price === 'Custom' ? 'Talk to us' : 'Get started'}
                </a>
              </div>
            ))}
          </div>
          <p className="body-sm reveal" style={{ textAlign:'center', marginTop:28, color:'var(--tx-3)' }}>
            Companies under $5M in funding can apply for 3 months of free Pro access.{' '}
            <a href="mailto:hello@glassmem.ai" style={{ color:'var(--em)' }}>Apply here →</a>
          </p>
        </div>
      </section>

      {/* ═══ FINAL CTA ══════════════════════════════ */}
      <section className="sec cta">
        <div className="w">
          <div className="cta__inner">
            <div className="reveal">
              <span className="label">Get started</span>
              <h2 className="cta__h2">Give your coding agent<br/>a memory it can trust.</h2>
              <p className="body-lg cta__sub">
                Join the waitlist for shared project memory across Claude Code, Cursor, Codex, Windsurf, and every MCP agent.
              </p>
              {ctaSent ? (
                <div style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'12px 20px', borderRadius:'var(--r)', background:'rgba(110,231,183,0.08)', border:'1px solid rgba(110,231,183,0.2)', color:'var(--em)', fontFamily:'var(--f-code)', fontSize:13, marginBottom:20 }}>
                  <span style={{ width:7, height:7, borderRadius:'50%', background:'var(--em)', display:'inline-block' }}/>
                  You're on the list — we'll be in touch.
                </div>
              ) : (
                <form className="cta__email-form" onSubmit={handleCtaSubmit}>
                  <input className="cta__email-input" type="email" placeholder="you@company.com" value={ctaEmail} onChange={e => setCtaEmail(e.target.value)} required/>
                  <button type="submit" className="btn btn--em btn--lg">Request access</button>
                </form>
              )}
              <button className="cta__install" onClick={copy}>
                <span className="cta__install-p">$</span>
                <span style={{ color:'rgba(255,255,255,0.65)' }}>glassmem init</span>
                <span className="hero__install-hint">{copied ? '✓ copied' : 'copy'}</span>
              </button>
            </div>
            <div className="cta__checklist reveal">
              {[
                'Works with Claude Code, Cursor, Codex, Windsurf, Cline',
                'Local-first — no cloud required to start',
                'MCP-native — agents pick it up automatically',
                "memory.remember() and memory.recall() — that's the API",
                'Temporary context expires automatically',
                'Context shared across all your agents instantly',
              ].map(item => (
                <div key={item} className="cta__check-item"><span className="cta__check-dot"/>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRE-FOOTER ═════════════════════════════ */}
      <div className="prefooter"/>

      {/* ═══ FOOTER2 ════════════════════════════════ */}
      <footer className="footer2">
        <div className="footer2__inner">
          <div className="footer2__top">
            <div className="footer2__left">
              <a href="/" className="footer2__brand"><Logo size={18}/><span className="footer2__wordmark">GlassMem</span></a>
              <div className="footer2__divider"/>
              <div className="footer2__socials">
                <a href="https://discord.gg/glassmem"  className="footer2__social" aria-label="Discord"><DiscordIcon/></a>
                <a href="https://github.com/glassmem" className="footer2__social" aria-label="GitHub"><GitHubIcon/></a>
                <a href="https://twitter.com/glassmem" className="footer2__social" aria-label="X"><XIcon/></a>
              </div>
            </div>
            <nav className="footer2__nav">
              {[{l:'Docs',h:'https://docs.glassmem.ai'},{l:'GitHub',h:'https://github.com/glassmem'},{l:'Blog',h:'#'},{l:'Pricing',h:'#pricing'},{l:'Contact',h:'mailto:hello@glassmem.ai'}].map(({ l,h }) => (
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
