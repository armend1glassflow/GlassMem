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

/* ── Hero visualization data ── */
const STORE_MEMORIES = [
  { pip: '#6ee7b7', text: 'Use repository pattern for DB access',    tag: 'decision',   temporal: false },
  { pip: '#fb923c', text: 'No billing until Stripe migration done',  tag: 'temp ↺',     temporal: true  },
  { pip: '#ef4444', text: 'Redis cache caused stale billing reads',  tag: 'failed',     temporal: false },
  { pip: '#94a3b8', text: 'Frontend uses server actions, not REST',  tag: 'decision',   temporal: false },
];

const MF_AGENTS = [
  { name: 'Cursor',      pip: '#a78bfa', items: ['repo pattern · DB', 'no Prisma in prod', 'no billing touch'] },
  { name: 'Claude Code', pip: '#6ee7b7', items: ['server actions', 'Jest for all tests', 'repo pattern · DB'] },
  { name: 'Codex',       pip: '#fb923c', items: ['no billing touch', 'repo pattern · DB', 'PostgreSQL auth'] },
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
        <span className="mfviz__bar-title"><Logo size={12}/>GlassMem · project memory</span>
        <span className="mfviz__bar-live"><span className="mfviz__live-dot"/>LIVE</span>
      </div>
      <div className="mfviz__store">
        <div className="mfviz__store-header">
          <span className="mfviz__store-label">shared memory store</span>
          <span className="mfviz__store-count">{STORE_MEMORIES.length} memories</span>
        </div>
        {STORE_MEMORIES.map((m, i) => (
          <div key={i} className={`mfviz__mem-row${updating && m.temporal ? ' mfviz__mem-row--updating' : ''}`}>
            <span className="mfviz__mem-pip" style={{ background: m.pip }}/>
            <span className="mfviz__mem-text">{m.text}</span>
            <span className={`mfviz__mem-tag${m.temporal ? ' mfviz__mem-tag--warn' : ''}`}>
              {updating && m.temporal ? 'refreshed ↺' : m.tag}
            </span>
          </div>
        ))}
      </div>
      <div className="mfviz__sync">
        {phase === 0 && <span className="mfviz__sync-idle"><span className="mfviz__sync-idle-dot"/>shared across agents via MCP</span>}
        {syncing    && <div className="mfviz__sync-flow"><span className="mfviz__sync-label">syncing context</span><div className="mfviz__sync-dots">{[0,1,2,3,4,5].map(i => <span key={i} className="mfviz__sync-dot" style={{ animationDelay:`${i*0.12}s` }}/>)}</div></div>}
        {loaded     && <span className="mfviz__sync-done">✓ context loaded in 3 agents</span>}
      </div>
      <div className="mfviz__agents">
        {MF_AGENTS.map((ag) => (
          <div key={ag.name} className="mfviz__agent">
            <div className="mfviz__agent-header">
              <span className="mfviz__agent-pip" style={{ background: ag.pip }}/>
              <span className="mfviz__agent-name">{ag.name}</span>
              {phase === 0 && <span className="mfviz__agent-badge mfviz__agent-badge--cold">cold start</span>}
              {syncing     && <span className="mfviz__agent-badge mfviz__agent-badge--sync">loading…</span>}
              {loaded      && <span className="mfviz__agent-badge mfviz__agent-badge--ok">✓ ready</span>}
            </div>
            {!loaded && (
              <div className="mfviz__agent-empty">
                {phase === 0
                  ? <><span className="mfviz__agent-empty-dot"/>no context — rebuilding from scratch</>
                  : <div className="mfviz__agent-progress"><div className="mfviz__agent-bar"/></div>}
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

/* ── How it works steps ── */
const HIW_STEPS = [
  {
    num: '01', label: 'Initialize',
    title: 'Start the MCP server in one command.',
    desc: 'Run three commands. GlassMem creates a local SQLite memory store in your project and exposes it over MCP. No cloud signup. No config files. Claude Code and Cursor discover it automatically.',
    lines: [
      { c:'#94a3b8', t:'# Install and start the MCP server' },
      { c:'#e2e8f0', t:'' },
      { c:'#e2e8f0', t:'$ npm install -g glassmem' },
      { c:'#e2e8f0', t:'$ glassmem init' },
      { c:'#e2e8f0', t:'$ glassmem mcp start' },
      { c:'#e2e8f0', t:'' },
      { c:'#6ee7b7', t:'● Memory server on :8765 (local-only)' },
      { c:'#6ee7b7', t:'● Claude Code connected automatically' },
      { c:'#6ee7b7', t:'● Cursor connected automatically' },
    ],
  },
  {
    num: '02', label: 'Remember',
    title: 'Write decisions with rationale attached.',
    desc: 'Save architecture decisions, failed approaches, and active constraints from any agent. The reason behind each entry is stored alongside it — not just what was decided, but why.',
    lines: [
      { c:'#94a3b8', t:'// Write a failed approach + rationale' },
      { c:'#e2e8f0', t:'' },
      { c:'#7dd3fc', t:'await ', extra: [{ c:'#e2e8f0', t:'memory.' },{ c:'#93c5fd', t:'remember' },{ c:'#e2e8f0', t:'({' }] },
      { c:'#86efac', t:'  content: "Do not use Redis for billing sync",' },
      { c:'#e2e8f0', t:'  type:    ', extra: [{ c:'#86efac', t:'"failed_approach",' }] },
      { c:'#e2e8f0', t:'  rationale:', extra: [{ c:'#86efac', t:'"stale reads in parallel sync jobs",' }] },
      { c:'#e2e8f0', t:'  source:  ', extra: [{ c:'#86efac', t:'"Cursor · session #14",' }] },
      { c:'#fcd34d', t:'  expires: null,' },
      { c:'#e2e8f0', t:'})' },
    ],
  },
  {
    num: '03', label: 'Recall',
    title: 'Inject context before every inference.',
    desc: 'Before each agent touches code, GlassMem injects the most relevant memories — ranked by recency, validity, and semantic match. Superseded and invalidated entries are excluded automatically.',
    lines: [
      { c:'#94a3b8', t:'// Auto-injected before each session' },
      { c:'#e2e8f0', t:'' },
      { c:'#7dd3fc', t:'const ', extra: [{ c:'#e2e8f0', t:'ctx = ' },{ c:'#7dd3fc', t:'await ' },{ c:'#e2e8f0', t:'memory.' },{ c:'#93c5fd', t:'recall' },{ c:'#86efac', t:'("billing cache")' }] },
      { c:'#e2e8f0', t:'' },
      { c:'#94a3b8', t:'// Returns ranked memories:' },
      { c:'#ef4444', t:'// ⚠ "Do not use Redis for billing sync"' },
      { c:'#94a3b8', t:'//   failed_approach · Cursor · 3d ago' },
      { c:'#94a3b8', t:'//   rationale: "stale reads in parallel jobs"' },
      { c:'#6ee7b7', t:'// ✓ "Use Postgres row-level locking instead"' },
      { c:'#6ee7b7', t:'//   architecture_decision · active' },
    ],
  },
];

/* ── Four injection examples (holy shit moments) ── */
const INJECTIONS = [
  {
    label: 'Redis / billing cache',
    agent: 'Claude Code',
    agentPip: '#6ee7b7',
    proposes: '"I\'ll implement Redis caching for the billing sync to improve read performance..."',
    memTag: 'failed_approach',
    memTagColor: '#ef4444',
    memTagBg: 'rgba(239,68,68,0.08)',
    memSource: 'Cursor · 3 days ago',
    memText: 'Redis cache caused stale reads in billing sync',
    memWhy: 'rationale: "parallel sync jobs read before invalidation completes"',
    result: '"Based on prior experience with this repo, I\'ll use Postgres with row-level locking instead. Redis caused stale reads in the billing sync."',
  },
  {
    label: 'Billing freeze',
    agent: 'Cursor',
    agentPip: '#a78bfa',
    proposes: '"Let\'s refactor the billing service this sprint — the code structure is messy..."',
    memTag: 'temporary_constraint',
    memTagColor: '#fb923c',
    memTagBg: 'rgba(251,146,60,0.08)',
    memSource: 'Cursor · 1 day ago',
    memText: 'Do not touch billing until Stripe migration completes Friday 18:00',
    memWhy: 'expires: Fri 18:00 · 2 days remaining',
    result: '"Billing service is under a temporary freeze. I\'ll scope this to payment utilities outside the migration path."',
  },
  {
    label: 'GraphQL rejected',
    agent: 'Claude Code',
    agentPip: '#6ee7b7',
    proposes: '"A GraphQL API would be cleaner here — let me set up the schema and resolvers..."',
    memTag: 'architecture_decision',
    memTagColor: '#6ee7b7',
    memTagBg: 'rgba(110,231,183,0.08)',
    memSource: 'Claude Code · 6 days ago',
    memText: 'Server actions replaced GraphQL due to cache invalidation complexity',
    memWhy: 'rationale: "GraphQL caching with Next.js App Router caused stale UI after mutations"',
    result: '"Server actions are the established pattern for this project. I\'ll implement this as a server action instead."',
  },
  {
    label: 'Prisma in prod',
    agent: 'Codex',
    agentPip: '#fb923c',
    proposes: '"I\'ll use Prisma migrations to push the schema change directly to production..."',
    memTag: 'failed_approach',
    memTagColor: '#ef4444',
    memTagBg: 'rgba(239,68,68,0.08)',
    memSource: 'Cursor · 8 days ago',
    memText: 'Prisma migrations caused table locks in multi-region deployment',
    memWhy: 'rationale: "Lock propagation delay caused 4-minute downtime during peak traffic"',
    result: '"I\'ll write a raw SQL migration with explicit locking strategy — Prisma migrations caused a production outage in this codebase."',
  },
];

/* ── Comparison tables ── */
const COMP_TABLES = [
  {
    label: 'vs CLAUDE.md',
    note: 'Keep your CLAUDE.md. GlassMem keeps it from becoming a 400-line dump that nobody reads or trusts.',
    rows: [
      ['Format',      'Static markdown file',                    'Structured, queryable memories'          ],
      ['Writes',      'You maintain it manually',                'Agents write and update automatically'   ],
      ['Freshness',   'Grows messy — stale context stays forever','Outdated memories are invalidated'      ],
      ['Rationale',   'Instructions with no reasoning history',  'Every memory stores why it was written'  ],
      ['Expiry',      'No concept of temporary constraints',     'Temp memories expire on schedule'        ],
      ['Source',      'No record of who wrote what or when',     'Timestamp + agent source on every entry' ],
      ['Cross-tool',  'Copy-paste it across tools manually',     'Shared via MCP — one source of truth'    ],
    ],
  },
  {
    label: 'vs Vector DB',
    note: 'Your problem is not storing more text. Your problem is knowing what your agent should believe right now.',
    rows: [
      ['Stores',       'Text chunks',                             'Structured project memories'             ],
      ['Retrieves by', 'Semantic similarity',                     'Recency + validity + semantic match'     ],
      ['Rationale',    'No concept of why',                       'Reason attached to every decision'       ],
      ['Expiration',   'No built-in expiration',                  'Temporary constraints expire on schedule'],
      ['Conflicts',    'Cannot resolve contradictions',           'Supersession model — new replaces old'   ],
      ['Failed work',  'Treats all chunks equally',               'Tracks failed attempts and why they failed'],
      ['Designed for', 'Document retrieval',                      'Coding-agent workflows specifically'     ],
    ],
  },
  {
    label: 'vs DIY memory',
    note: 'Building memory takes a weekend. Making it reliable — with conflict resolution, expiry, and inspectable retrieval — takes months.',
    rows: [
      ['Validity',     'No validity model',                        'Source, type, and expiry per memory'      ],
      ['Conflicts',    'No conflict resolution',                   'Invalidates superseded memories'          ],
      ['Rationale',    'Stores what, not why',                     'Reason and context on every entry'        ],
      ['Lifecycle',    'Memories accumulate forever',              'Temporal lifecycle with auto-expiry'      ],
      ['Retrieval',    'Embedding similarity only',                'Recency + validity + semantic ranking'    ],
      ['Inspectable',  'No visibility into what was recalled',     'Full retrieval audit — "why this memory?" '],
      ['Integration',  'Manual wiring per agent',                  'MCP-native — drop-in for all agents'      ],
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
  const [scrolled,     setScrolled]     = useState(false);
  const [mobOpen,      setMobOpen]      = useState(false);
  const [copied,       copy]            = useCopy('glassmem mcp start');
  const [ctaEmail,     setCtaEmail]     = useState('');
  const [ctaSent,      setCtaSent]      = useState(false);
  const [activeHiw,    setActiveHiw]    = useState(0);
  const [activeComp,   setActiveComp]   = useState(0);
  const [activeInject, setActiveInject] = useState(0);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleCtaSubmit = (e) => {
    e.preventDefault();
    if (ctaEmail) setCtaSent(true);
  };

  const inj = INJECTIONS[activeInject];
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
            <a href="#open-core"    className="nav__link">Open core</a>
            <a href="https://docs.glassmem.ai" className="nav__link">Docs</a>
          </div>
          <div className="nav__right">
            <a href="/app"    className="btn btn--ghost btn--sm">Log in</a>
            <a href="/signup" className="btn btn--em btn--sm">Join waitlist</a>
          </div>
          <button className="nav__mob-toggle" onClick={() => setMobOpen(o => !o)} aria-label="Menu">{mobOpen ? '✕' : '☰'}</button>
        </div>
        <div className={`nav__mob-menu${mobOpen ? ' open' : ''}`}>
          {['How it works','Compare','Open core','Docs'].map(l => (
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
                Persistent project memory for coding agents
              </div>
              <h1 className="h1 hero__h1 enter-2">
                Stop explaining<br/>your project to<br/>every new agent<br/>session.
              </h1>
              <p className="body-lg hero__sub enter-3">
                Persistent reasoning state for Claude Code, Cursor, and MCP agents.
              </p>
              <ul className="hero__bullets enter-3">
                <li className="hero__bullet"><span className="hero__bullet-check">✓</span>remembers architecture decisions and why they were made</li>
                <li className="hero__bullet"><span className="hero__bullet-check">✓</span>prevents repeated mistakes — flags failed approaches before they happen</li>
                <li className="hero__bullet"><span className="hero__bullet-check">✓</span>shares context across sessions, tools, and team members</li>
              </ul>
              <div className="hero__ctas enter-4">
                <a href="/signup" className="btn btn--em btn--lg">Join waitlist</a>
                <a href="https://github.com/glassmem" className="btn btn--ghost btn--lg">Star on GitHub</a>
              </div>
              <button className="cta__install enter-5" onClick={copy} style={{ marginTop:14 }}>
                <span className="cta__install-p">$</span>
                <span style={{ color:'rgba(255,255,255,0.65)' }}>glassmem mcp start</span>
                <span className="hero__install-hint">{copied ? '✓ copied' : 'copy'}</span>
              </button>
            </div>
            <div className="hero__viz-col">
              <p className="hero__viz-label">Live: session starts cold → memories sync → temporal constraint updates.</p>
              <MemoryFlowViz/>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT IS GLASSMEM + ARCHITECTURE ════════ */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="what-is reveal">
            <div className="what-is__left">
              <span className="label">What is GlassMem?</span>
              <h2 className="h2 what-is__h2">A local memory server<br/>your agents plug into.</h2>
              <p className="body-lg what-is__desc">
                GlassMem is a local MCP memory server you run next to your coding agent. It stores architecture decisions, failed approaches, coding conventions, and temporary constraints in a SQLite file on your machine.
              </p>
              <p className="body-lg what-is__desc" style={{ marginTop:12 }}>
                Agents connect through MCP automatically. No per-tool config. No cloud. Nothing leaves your machine by default.
              </p>
              <div className="what-is__trust">
                {['SQLite-backed · inspectable','Works offline','Open core · exportable','MCP-native'].map(t => (
                  <span key={t} className="what-is__trust-pill">{t}</span>
                ))}
              </div>
            </div>
            <div className="what-is__right">
              <div className="arch">
                <div className="arch__agents">
                  {['Claude Code','Cursor','Codex','Windsurf','Cline'].map(n => (
                    <span key={n} className="arch__chip">{n}</span>
                  ))}
                </div>
                <div className="arch__connector">
                  <div className="arch__conn-lines">
                    {[0,1,2,3,4].map(i => <div key={i} className="arch__conn-line"/>)}
                  </div>
                  <span className="arch__conn-label">MCP protocol</span>
                </div>
                <div className="arch__server">
                  <span className="arch__server-dot"/>
                  <div>
                    <div className="arch__server-name">GlassMem MCP Server</div>
                    <div className="arch__server-addr">localhost:8765 · always local</div>
                  </div>
                </div>
                <div className="arch__connector arch__connector--short">
                  <div className="arch__conn-lines">
                    <div className="arch__conn-line arch__conn-line--single"/>
                  </div>
                </div>
                <div className="arch__store">
                  <span className="arch__store-icon">◈</span>
                  <div>
                    <div className="arch__store-name">.glassmem/memory.db</div>
                    <div className="arch__store-sub">Local SQLite · decisions · failures · constraints · conventions</div>
                  </div>
                </div>
                <div className="arch__note">Nothing leaves your machine by default.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MEMORY TIMELINE — MOVED UP ════════════ */}
      <section className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Inspectability</span>
              <h2 className="h2">Memory should not<br/>be a black box.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              Most AI memory systems hide what was recalled, why, whether it is stale, who created it, and what replaced it. GlassMem makes every memory inspectable, editable, and debuggable. Think of it as Git for agent context.
            </p>
          </div>

          <div className="inspect reveal">
            <div className="inspect__bar">
              <span className="inspect__bar-title"><Logo size={11}/>GlassMem · project memory timeline</span>
              <span className="inspect__bar-sub">4 memories · 1 temp · 1 superseded · 1 invalidated</span>
            </div>
            {[
              {
                status: 'active', statusLabel: 'active',
                content: 'Use repository pattern for all database access',
                type: 'architecture_decision', source: 'Claude Code', age: '4 days ago',
                rationale: '"Keeps domain logic out of route handlers and makes DB layer testable"',
                recalled: 'Recalled 8× this week',
              },
              {
                status: 'superseded', statusLabel: 'superseded',
                content: 'Use ActiveRecord for all database queries',
                type: 'architecture_decision', source: 'Cursor', age: '5 days ago',
                rationale: 'Replaced by: repository pattern decision · Claude Code',
                recalled: null,
              },
              {
                status: 'temp', statusLabel: 'temp ↺',
                content: 'Do not touch billing until Stripe migration completes Friday 18:00',
                type: 'temporary_constraint', source: 'Cursor', age: '1 day ago',
                rationale: 'Expires: Fri 18:00 · 2 days remaining',
                recalled: 'Injected on every billing-related session',
              },
              {
                status: 'invalid', statusLabel: 'invalidated',
                content: 'Redis cache for billing sync reads',
                type: 'failed_approach', source: 'Cursor', age: '3 days ago',
                rationale: '"stale reads in parallel sync jobs — use Postgres row-level locking instead"',
                recalled: 'Recalled when query matches "cache" or "billing"',
              },
            ].map((mem, i) => (
              <div key={i} className={`inspect__row inspect__row--${mem.status}`}>
                <div className="inspect__row-left">
                  <span className={`inspect__badge inspect__badge--${mem.status}`}>{mem.statusLabel}</span>
                </div>
                <div className="inspect__row-main">
                  <div className="inspect__row-content">{mem.content}</div>
                  <div className="inspect__row-meta">
                    <span className="inspect__meta-type">{mem.type}</span>
                    <span className="inspect__meta-sep">·</span>
                    <span>{mem.source}</span>
                    <span className="inspect__meta-sep">·</span>
                    <span>{mem.age}</span>
                  </div>
                  <div className="inspect__row-rationale">{mem.rationale}</div>
                </div>
                {mem.recalled && (
                  <div className="inspect__row-right">
                    <span className="inspect__row-recall">{mem.recalled}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="inspect__props reveal" style={{ marginTop:28 }}>
            {[
              { icon:'◉', head:'Source attribution', desc:'Every memory records which agent wrote it, which session, and when.' },
              { icon:'◷', head:'Four memory states', desc:'Active, superseded, temporary, or invalidated. Every entry has a lifecycle.' },
              { icon:'◎', head:'Retrieval audit', desc:'"Why was this recalled?" is always answerable. Query-to-memory trace on every inject.' },
              { icon:'✎', head:'Fully editable', desc:'Export to Markdown. Edit in any editor. Import back. Your memory, always.' },
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
      </section>

      {/* ═══ LOGOS ══════════════════════════════════ */}
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
      <section className="sec sec--alt">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">The problem</span>
              <h2 className="h2">Your agent rebuilds context<br/>from scratch. Every session.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              It is not a model problem. It is a memory problem. And every session you pay for it in wasted tokens, repeated questions, and mistakes you have already fixed once.
            </p>
          </div>
          <div className="fail__table reveal">
            {[
              {
                tag:'01', title:'Project amnesia',
                desc:'Every session starts cold. Your agent re-reads the repo, asks questions you answered last week, and proposes approaches you already rejected.',
                issues:['Re-discovers the same file structure','Asks "should I use REST or server actions?"','Proposes the Kafka approach that caused duplicate events','Forgets the repo uses server actions, not GraphQL'],
              },
              {
                tag:'02', title:'No reasoning history',
                desc:'Your agent knows what the code does. It does not know why. It cannot see that Prisma was deliberately excluded from the auth service, or that the billing freeze is still active.',
                issues:['Introduces Prisma in auth service','Removes the workaround that is still needed','Repeats the Redis approach that caused stale reads','Touches billing code during active Stripe migration'],
              },
              {
                tag:'03', title:'Tool silos',
                desc:'Claude Code, Cursor, Codex — each starts fresh. A decision made in one session is invisible to the next tool. There is no shared project truth.',
                issues:['Cursor forgets what Claude Code decided','Codex re-proposes the rejected approach','Constraints disappear between tools','No shared project state — ever'],
              },
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
        </div>
      </section>

      {/* ═══ WHY NOW ════════════════════════════════ */}
      <section className="sec">
        <div className="w">
          <div className="why-now reveal">
            <div className="why-now__left">
              <span className="label">Why now</span>
              <h2 className="h2">Coding agents are writing<br/>production code today.</h2>
              <p className="body-lg" style={{ marginTop:16 }}>
                Claude Code, Cursor, Codex, and MCP agents are no longer assistants. They are the primary interface to software development for a growing number of engineers.
              </p>
              <p className="body-lg" style={{ marginTop:12, color:'var(--tx-2)' }}>
                But every session still starts from zero. Project context disappears between sessions, between tools, and between contributors.
              </p>
              <p className="body-lg" style={{ marginTop:12, color:'var(--em)' }}>
                GlassMem turns stateless coding agents into systems that retain project reasoning over time.
              </p>
            </div>
            <div className="why-now__right">
              <div className="why-now__stat-group">
                {[
                  { val:'Every session', sub:'starts cold without GlassMem' },
                  { val:'3 agents',      sub:'Cursor, Claude Code, Codex — zero shared context' },
                  { val:'0 memory',      sub:'of why the last session\'s decisions were made' },
                ].map(({ val, sub }) => (
                  <div key={val} className="why-now__stat">
                    <div className="why-now__stat-val">{val}</div>
                    <div className="why-now__stat-sub">{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOLY SHIT MOMENTS — 4 injection examples ═ */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Memory in action</span>
              <h2 className="h2">The moment that<br/>changes everything.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              GlassMem intercepts proposed approaches and injects relevant memories before the agent acts. This is not about storage. It is about preventing the same mistake twice.
            </p>
          </div>

          <div className="reveal">
            <div className="inject-tabs">
              {INJECTIONS.map((inj2, i) => (
                <button
                  key={i}
                  className={`inject-tab${activeInject === i ? ' inject-tab--active' : ''}`}
                  onClick={() => setActiveInject(i)}
                >
                  {inj2.label}
                </button>
              ))}
            </div>
            <div className="inject">
              <div className="inject__scene">
                <div className="inject__bubble inject__bubble--agent">
                  <span className="inject__bubble-from">
                    <span className="inject__agent-pip" style={{ background: inj.agentPip }}/>
                    {inj.agent} proposes
                  </span>
                  <span className="inject__bubble-text">{inj.proposes}</span>
                </div>
                <div className="inject__arrow">
                  <div className="inject__arrow-line"/>
                  <div className="inject__arrow-head">
                    <span className="inject__mem-badge">GlassMem injects memory</span>
                  </div>
                </div>
                <div className="inject__memory" style={{ borderColor: inj.memTagColor + '40', background: inj.memTagBg }}>
                  <div className="inject__memory-header">
                    <span className="inject__memory-icon" style={{ color: inj.memTagColor }}>⚠</span>
                    <span className="inject__memory-tag" style={{ color: inj.memTagColor, borderColor: inj.memTagColor + '50' }}>{inj.memTag}</span>
                    <span className="inject__memory-source">{inj.memSource}</span>
                  </div>
                  <div className="inject__memory-text">"{inj.memText}"</div>
                  <div className="inject__memory-why">{inj.memWhy}</div>
                </div>
                <div className="inject__arrow">
                  <div className="inject__arrow-line"/>
                </div>
                <div className="inject__bubble inject__bubble--result">
                  <span className="inject__bubble-from">
                    <span className="inject__agent-pip" style={{ background: inj.agentPip }}/>
                    {inj.agent} — updated
                  </span>
                  <span className="inject__bubble-text">{inj.result}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT IT STORES — bento grid ════════════ */}
      <section className="sec">
        <div className="w">
          <div className="feat__intro reveal">
            <span className="label">What it stores</span>
            <h2 className="h2">Not just facts.<br/>Reasoning.</h2>
            <p className="body-lg" style={{ maxWidth:'48ch', marginTop:14 }}>
              GlassMem stores the context your agent needs to make good decisions — not just what exists, but why it exists.
            </p>
          </div>
          <div className="feat__grid reveal">

            <div className="feat__card feat__card--wide">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-store">
                  {[
                    { pip:'#6ee7b7', text:'Use repository pattern for DB access', tag:'decision' },
                    { pip:'#a78bfa', text:'Frontend uses server actions, not REST', tag:'decision' },
                    { pip:'#94a3b8', text:'Do not introduce Prisma in auth service', tag:'constraint' },
                  ].map((m,i) => (
                    <div key={i} className="feat__mock-row">
                      <span className="feat__mock-pip" style={{ background:m.pip }}/>
                      <span className="feat__mock-text">{m.text}</span>
                      <span className="feat__mock-tag">{m.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="feat__card-title">Architecture decisions</p>
              <p className="feat__card-desc">Remember why you chose Postgres over Mongo, server actions over REST, or repository pattern over ActiveRecord. Decisions stay attached to their rationale — not just the outcome.</p>
            </div>

            <div className="feat__card">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-bug">
                  <div className="feat__mock-bug-row">
                    <span className="feat__mock-bug-x">✕</span>
                    <div>
                      <div className="feat__mock-bug-title">Redis cache for billing sync</div>
                      <div className="feat__mock-bug-note">"stale reads in parallel sync jobs"</div>
                    </div>
                  </div>
                  <div className="feat__mock-bug-meta">failed_approach · Cursor · 3 days ago</div>
                </div>
              </div>
              <p className="feat__card-title">Failed approaches</p>
              <p className="feat__card-desc">The most valuable memories are the mistakes. GlassMem stores what was tried, why it failed, and what replaced it — so agents never repeat the same mistake.</p>
            </div>

            <div className="feat__card">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-temp">
                  <div className="feat__mock-temp-badge">TEMPORARY</div>
                  <div className="feat__mock-temp-text">No billing until Stripe migration done</div>
                  <div className="feat__mock-temp-meta">Expires: Fri 18:00 · 2 days remaining</div>
                  <div className="feat__mock-temp-bar"><div className="feat__mock-temp-fill"/></div>
                </div>
              </div>
              <p className="feat__card-title">Temporary constraints</p>
              <p className="feat__card-desc">Project states with a hard expiry — billing freezes, migration windows, active refactors. Set an expiry and GlassMem removes the constraint automatically when the time passes.</p>
            </div>

            <div className="feat__card">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-code">
                  {['// ✓ src/handlers/{name}.handler.ts','// ✓ repository pattern for DB access','// ✓ Jest — no Vitest in this repo','// ✕ no direct DB calls in route handlers'].map((l,i) => (
                    <div key={i} className="feat__mock-code-line">{l}</div>
                  ))}
                </div>
              </div>
              <p className="feat__card-title">Coding conventions</p>
              <p className="feat__card-desc">File naming, testing rules, folder structure, linting conventions. Every agent follows the same project-specific rules — not just generic best practices.</p>
            </div>

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
              <p className="feat__card-title">Shared across agents</p>
              <p className="feat__card-desc">One memory store. Claude Code, Cursor, Codex, Windsurf, and Cline all read from the same source. A decision made in Cursor is available to Claude Code on the next session.</p>
            </div>

            <div className="feat__card">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-term">
                  <div className="feat__mock-term-line"><span style={{ color:'#a78bfa' }}>active</span>    repo pattern · DB</div>
                  <div className="feat__mock-term-line"><span style={{ color:'#ef4444' }}>failed</span>    Redis billing cache</div>
                  <div className="feat__mock-term-line"><span style={{ color:'#fb923c' }}>temp ↺</span>   billing · expires Fri</div>
                  <div className="feat__mock-term-line"><span style={{ color:'var(--tx-3)' }}>superseded</span> ActiveRecord</div>
                </div>
              </div>
              <p className="feat__card-title">Fully inspectable</p>
              <p className="feat__card-desc">See every memory, its state, its source, and why it was recalled. Edit directly in the local UI or export to Markdown. Your memory is never a black box.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══════════════════════════ */}
      <section id="how-it-works" className="sec sec--alt">
        <div className="w">
          <div className="hiw__header reveal">
            <span className="label">How it works</span>
            <h2 className="h2">Three commands.<br/>Persistent reasoning state.</h2>
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
                  {['Claude Code','Cursor','Codex','Cline','Windsurf','MCP','TypeScript','Python'].map(b => (
                    <span key={b} className="eco__badge">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW MEMORIES STAY USEFUL ═══════════════ */}
      <section className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Memory quality</span>
              <h2 className="h2">How memories stay useful<br/>instead of becoming garbage.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              Good memory systems are not about storing everything. They are about keeping what is stored trustworthy.
            </p>
          </div>

          <div className="mem-create reveal">
            <div className="mem-create__modes">
              {[
                {
                  num:'①', head:'Manual memories',
                  sub:'Always available. You explicitly store what matters.',
                  lines:['memory.remember({ content, type, rationale })','source, expiry, and context attached','immediately available to all agents'],
                  tag:'always available',
                },
                {
                  num:'②', head:'Suggested memories',
                  sub:'GlassMem detects repeated patterns and proposes them.',
                  lines:['"You\'ve asked about the DB pattern 3× this week. Save it?"','you review and confirm before it is stored','keeps memory intentional — not automatic noise'],
                  tag:'you approve',
                },
                {
                  num:'③', head:'Automatic extraction',
                  sub:'Optional. Agent sessions analyzed for constraints and failures.',
                  lines:['opt-in per project','you review every suggestion before it saves','never stored without explicit confirmation'],
                  tag:'opt-in',
                },
              ].map(({ num, head, sub, lines, tag }) => (
                <div key={head} className="mem-create__mode">
                  <div className="mem-create__mode-head">
                    <span className="mem-create__mode-num">{num}</span>
                    <div>
                      <div className="mem-create__mode-title">{head}</div>
                      <div className="mem-create__mode-sub">{sub}</div>
                    </div>
                    <span className="mem-create__mode-tag">{tag}</span>
                  </div>
                  <ul className="mem-create__lines">
                    {lines.map(l => (
                      <li key={l} className="mem-create__line">
                        <span className="mem-create__line-dot"/>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mem-create__lifecycle">
              <div className="mem-create__lifecycle-title">Memory lifecycle</div>
              <div className="mem-create__lifecycle-grid">
                {[
                  { head:'Supersession', desc:'New decision? Mark the old one superseded. Both stay for audit. Only the active one is injected.', color:'#6ee7b7' },
                  { head:'Expiration',   desc:'Temporary constraints expire at a set time. Billing freeze on Friday at 18:00? GlassMem removes it automatically.', color:'#fb923c' },
                  { head:'Invalidation', desc:'Proven wrong? Mark as invalid with a reason. The failure stays on record — agents see it but do not follow it.', color:'#ef4444' },
                  { head:'Editing',      desc:'Edit any memory directly in the local UI, in your terminal, or in an exported Markdown file. Import back.', color:'#a78bfa' },
                ].map(({ head, desc, color }) => (
                  <div key={head} className="mem-create__lifecycle-item">
                    <div className="mem-create__lifecycle-dot" style={{ background: color }}/>
                    <div>
                      <div className="mem-create__lifecycle-head">{head}</div>
                      <div className="mem-create__lifecycle-desc">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY NOT DIY ════════════════════════════ */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Why this is hard</span>
              <h2 className="h2">Why not just use<br/>SQLite + embeddings?</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'46ch' }}>
              Most engineers think they can build this in a weekend. The storage is trivial. What breaks you is everything around it.
            </p>
          </div>

          <div className="diy__grid reveal">
            <div className="diy__col diy__col--bad">
              <div className="diy__col-head"><span className="diy__dot diy__dot--bad"/>DIY memory stack</div>
              {[
                { item:'No validity model', sub:'You store it. It stays. Forever. Even when it is wrong or superseded.' },
                { item:'No conflict resolution', sub:'Two contradicting memories about the same service. Agent picks randomly.' },
                { item:'Stores what, not why', sub:'No rationale attached. Agent cannot understand trade-offs or context.' },
                { item:'Memory grows forever', sub:'Retrieval quality degrades as noise accumulates. Silently.' },
                { item:'Embedding similarity only', sub:'Recent, valid decisions can be outranked by old stale chunks.' },
                { item:'No inspectability', sub:'Zero visibility into what was recalled or why. Black box.' },
                { item:'Manual wiring per agent', sub:'Separate integration needed for Claude Code, Cursor, Codex.' },
              ].map(({ item, sub }) => (
                <div key={item} className="diy__item diy__item--bad">
                  <span className="diy__item-icon">✕</span>
                  <div>
                    <div className="diy__item-title">{item}</div>
                    <div className="diy__item-sub">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="diy__col diy__col--good">
              <div className="diy__col-head"><span className="diy__dot diy__dot--good"/>GlassMem</div>
              {[
                { item:'Source + type + expiry per memory', sub:'Every entry knows where it came from, what kind it is, and when it expires.' },
                { item:'Supersession model', sub:'New decisions explicitly replace old ones. Conflict resolved.' },
                { item:'Rationale tracking', sub:'Why stored alongside what. Agents understand the trade-off, not just the outcome.' },
                { item:'Temporal lifecycle', sub:'Memories expire, are invalidated, or get superseded. No silent accumulation.' },
                { item:'Recency + validity + semantic rank', sub:'Valid, recent decisions surface above old stale chunks.' },
                { item:'Full retrieval audit', sub:'"Why was this recalled?" is answerable. Query-to-memory trace on every inject.' },
                { item:'MCP-native drop-in', sub:'One server. All compatible agents connect automatically. No per-tool config.' },
              ].map(({ item, sub }) => (
                <div key={item} className="diy__item diy__item--good">
                  <span className="diy__item-icon">✓</span>
                  <div>
                    <div className="diy__item-title">{item}</div>
                    <div className="diy__item-sub">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="no-research reveal">
            <div className="no-research__left">
              <span className="label">Not another research project</span>
              <p className="no-research__copy">No vector tuning. No prompt engineering. No custom retrieval pipelines. No giant memory graphs to maintain.<br/><br/>Install it. Start coding. Your agents remember.</p>
            </div>
            <div className="no-research__right">
              <div className="diy__quote">
                <div className="diy__quote-line"/>
                <p className="diy__quote-text">"Your problem is not storing more context. Your problem is knowing what your agent should believe right now."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPARE — tabbed ═══════════════════════ */}
      <section id="compare" className="sec">
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
                >{t.label}</button>
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
                {activeComp === 0 ? 'CLAUDE.md / AGENTS.md' : activeComp === 1 ? 'Vector Database' : 'DIY (SQLite + embeddings)'}
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

      {/* ═══ YOUR MEMORY BELONGS TO YOU ════════════ */}
      <section id="open-core" className="sec sec--alt">
        <div className="w">
          <div className="ownership reveal">
            <div className="ownership__left">
              <span className="label">Open core</span>
              <h2 className="h2 ownership__h2">Your project memory<br/>belongs to you.</h2>
              <p className="body-lg ownership__desc">
                Not in a cloud. Not in a service. In a SQLite file on your machine that you can open in any editor, export to Markdown, or check into version control.
              </p>
              <p className="body-lg ownership__desc" style={{ marginTop:12 }}>
                The local version of GlassMem will be open source. Hosted sync for teams is coming later — entirely optional.
              </p>
            </div>
            <div className="ownership__right">
              <div className="ownership__bullets">
                {[
                  'SQLite-backed — inspectable with any DB tool',
                  'Export to Markdown anytime',
                  'Works fully offline',
                  'Edit in any text editor',
                  'Open-core architecture',
                  'No cloud required to start',
                  'Self-hostable',
                  'No vendor lock-in',
                ].map(b => (
                  <div key={b} className="ownership__bullet">
                    <span className="ownership__check">✓</span>
                    <span>{b}</span>
                  </div>
                ))}
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
              <h2 className="cta__h2">Your coding agent should remember why your codebase works the way it does.</h2>
              <p className="body-lg cta__sub">
                GlassMem gives Claude Code, Cursor, and MCP agents persistent reasoning state across sessions, tools, and contributors.
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
              <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginTop:4 }}>
                <button className="cta__install" onClick={copy}>
                  <span className="cta__install-p">$</span>
                  <span style={{ color:'rgba(255,255,255,0.65)' }}>glassmem mcp start</span>
                  <span className="hero__install-hint">{copied ? '✓ copied' : 'copy'}</span>
                </button>
                <a href="https://github.com/glassmem" className="btn btn--ghost btn--sm">Star on GitHub</a>
              </div>
            </div>
            <div className="cta__checklist reveal">
              {[
                'Works with Claude Code, Cursor, Codex, Windsurf, Cline',
                'Local-first — project memory stays on your machine',
                'MCP-native — agents connect automatically',
                'memory.remember() and memory.recall() — that\'s the API',
                'Rationale tracked alongside every decision',
                'Temporary constraints expire automatically',
                'Fully inspectable — complete retrieval audit trail',
                'Open core — export to Markdown anytime',
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
              {[{l:'Docs',h:'https://docs.glassmem.ai'},{l:'GitHub',h:'https://github.com/glassmem'},{l:'Blog',h:'#'},{l:'Open core',h:'#open-core'},{l:'Contact',h:'mailto:hello@glassmem.ai'}].map(({ l,h }) => (
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
