import React, { useEffect, useState } from 'react';
import './GlassMemPage.css';

/* ── Pentagon logo ── */
const Logo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 1023 977" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1022.52 373.339C1021.96 372.826 1021.43 372.662 1020.91 372.849C952.332 397.256 883.755 421.662 815.182 446.069L813.942 446.119L355.892 113.329C355.715 112.988 355.715 112.988 355.892 112.639L510.772 0.108917C511.247 0.0018574 511.37 0.0434618 511.472 0.118911C529.505 13.2856 698.222 135.869 1017.62 367.869C1020.3 369.816 1021.92 371.036 1022.47 371.529C1022.89 371.896 1022.91 372.499 1022.52 373.339Z" fill="rgba(255,255,255,0.82)"/>
    <path d="M612.422 504.079L415.752 576.149C372.365 546.522 329.145 517.002 286.092 487.589C259.552 469.462 232.819 451.019 205.892 432.259C179.252 413.692 152.602 395.125 125.942 376.559L54.1621 326.559L209.062 215.459C210.556 215.275 210.812 215.459L612.422 504.079Z" fill="rgba(255,255,255,0.82)"/>
    <path d="M54.1621 326.559L125.942 376.559L294.232 916.569L273.442 976.189L189.202 976.149C188.722 975.809L0.0420414 366.449C0.111531 365.671 0.392048 365.389L54.1621 326.559Z" fill="url(#g1lp)"/>
    <path d="M612.421 504.079L459.441 975.729C459.078 976.163 458.791 976.209L273.441 976.189L294.231 916.569C335.255 802.876 375.511 690.306 415.771 577.739C416.151 576.136 415.751 576.149L612.421 504.079Z" fill="#6ee7b7"/>
    <path d="M960.793 563.233L827.393 973.609C826.938 974.142 826.583 974.199H642.673L813.942 446.119H815.183C869.944 426.578 924.709 407.088 979.475 387.597L1023 372L960.793 563.233Z" fill="#6ee7b7"/>
    <defs>
      <linearGradient id="g1lp" x1="147" y1="326" x2="147" y2="976" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6ee7b7"/><stop offset="1" stopColor="#34d399"/>
      </linearGradient>
    </defs>
  </svg>
);

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

/* ── Problem section SVG icons ── */
const IconContextPollution = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="rgba(239,68,68,0.08)"/>
    <rect x="13" y="16" width="10" height="9" rx="1.5" stroke="#6ee7b7" strokeWidth="1.4" fill="none"/>
    <line x1="18" y1="22" x2="18" y2="24" stroke="#6ee7b7" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M6 10 L13 17" stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round" markerEnd="url(#arr1)"/>
    <path d="M18 6 L18 16" stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M30 10 L23 17" stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round"/>
    <circle cx="18" cy="20" r="2.5" fill="#6ee7b7" opacity="0.7"/>
    <defs>
      <marker id="arr1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 Z" fill="#ef4444"/>
      </marker>
    </defs>
  </svg>
);

const IconStalePropagation = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="rgba(251,146,60,0.08)"/>
    <circle cx="13" cy="18" r="6.5" stroke="#6ee7b7" strokeWidth="1.4" fill="none"/>
    <line x1="13" y1="12.5" x2="13" y2="18" stroke="#6ee7b7" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="13" y1="18" x2="16.5" y2="20.5" stroke="#6ee7b7" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M22 16 L29 16" stroke="#fb923c" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 2"/>
    <path d="M27 14 L29 16 L27 18" stroke="#fb923c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="29" cy="16" r="2" fill="rgba(251,146,60,0.15)" stroke="#fb923c" strokeWidth="1"/>
    <text x="27.5" y="16.8" fontSize="3.5" fill="#fb923c" fontFamily="monospace">?</text>
  </svg>
);

const IconDebuggingBlackBox = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="rgba(167,139,250,0.08)"/>
    <rect x="11" y="11" width="14" height="14" rx="2" fill="rgba(167,139,250,0.15)" stroke="#a78bfa" strokeWidth="1.4"/>
    <text x="15.5" y="20" fontSize="6" fill="#a78bfa" fontFamily="monospace" fontWeight="bold">?</text>
    <line x1="4" y1="18" x2="11" y2="18" stroke="#6ee7b7" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M9 16 L11 18 L9 20" stroke="#6ee7b7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <line x1="25" y1="18" x2="32" y2="18" stroke="#6ee7b7" strokeWidth="1.3" strokeLinecap="round" strokeDasharray="2 2"/>
  </svg>
);

/* ══════════════════════════════════════════════════
   HERO CONTEXT ROUTING VISUALIZATION
════════════════════════════════════════════════════ */

const ROUTING_SCENES = [
  {
    label: 'Billing freeze',
    source: {
      agent: 'Planner Agent',
      pip: '#fb923c',
      action: 'writes constraint',
      text: '"Billing freeze until Friday. Stripe migration active"',
      scope: 'project.billing · temporary',
    },
    routes: [
      { name: 'Claude Code',            pip: '#6ee7b7', status: 'allowed',   reason: 'task touches billing',          stateLine: 'Preparing read-only billing analysis' },
      { name: 'Billing Sub-Agent',       pip: '#a78bfa', status: 'inherited', reason: 'spawned under billing task',     stateLine: 'Constraint inherited at spawn' },
      { name: 'Debug Agent',             pip: '#7dd3fc', status: 'allowed',   reason: 'investigating billing incident', stateLine: 'Restricted to read-only analysis' },
      { name: 'Customer Support Agent',  pip: '#94a3b8', status: 'blocked',   reason: 'out of scope',                  stateLine: 'Context not received' },
      { name: 'External Tool Agent',     pip: '#ef4444', status: 'blocked',   reason: 'sensitive',                     stateLine: 'Context not received' },
    ],
  },
  {
    label: 'Redis cache failure',
    source: {
      agent: 'Debug Agent',
      pip: '#7dd3fc',
      action: 'records failure',
      text: '"Redis cache caused stale billing reads. Do not retry"',
      scope: 'project.billing · permanent',
    },
    routes: [
      { name: 'Claude Code',       pip: '#6ee7b7', status: 'allowed',   reason: 'billing task relevance',    stateLine: 'Avoiding Redis in billing flows' },
      { name: 'Billing Sub-Agent', pip: '#a78bfa', status: 'inherited', reason: 'spawned under billing',     stateLine: 'Failed approach inherited' },
      { name: 'Planner Agent',     pip: '#fb923c', status: 'allowed',   reason: 'architectural impact',      stateLine: 'Redis removed from plan' },
      { name: 'Customer Support Agent', pip: '#94a3b8', status: 'blocked', reason: 'out of scope',           stateLine: 'Context not received' },
      { name: 'Marketing Agent',   pip: '#ef4444', status: 'blocked',   reason: 'out of scope',              stateLine: 'Context not received' },
    ],
  },
];

const STATUS_COLORS = {
  allowed:   { line: '#6ee7b7', label: '#6ee7b7', bg: 'rgba(110,231,183,0.08)', border: 'rgba(110,231,183,0.22)' },
  inherited: { line: '#a78bfa', label: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.22)' },
  blocked:   { line: '#ef4444', label: '#ef4444', bg: 'rgba(239,68,68,0.06)',   border: 'rgba(239,68,68,0.18)'   },
};

const STATUS_ICONS = { allowed: '✓', inherited: '↓', blocked: '✗' };

const ContextFlowViz = () => {
  const [scIdx,      setScIdx]      = useState(0);
  const [phase,      setPhase]      = useState('write');
  const [agentsDone, setAgentsDone] = useState(0);

  const sc = ROUTING_SCENES[scIdx];

  useEffect(() => { setPhase('write'); setAgentsDone(0); }, [scIdx]);

  useEffect(() => {
    let t;
    if      (phase === 'write')      t = setTimeout(() => setPhase('flow-in'),    1000);
    else if (phase === 'flow-in')    t = setTimeout(() => setPhase('distribute'),  700);
    else if (phase === 'distribute') {
      if (agentsDone < sc.routes.length)
        t = setTimeout(() => setAgentsDone(n => n + 1), 380);
      else
        t = setTimeout(() => setPhase('done'), 100);
    }
    else if (phase === 'done')       t = setTimeout(() => setScIdx(i => (i + 1) % ROUTING_SCENES.length), 2800);
    return () => clearTimeout(t);
  }, [phase, agentsDone, sc.routes.length]);

  const flowing      = phase !== 'write';
  const distributing = phase === 'distribute' || phase === 'done';
  const done         = phase === 'done';

  return (
    <div className="cfroute">
      {/* Chrome bar */}
      <div className="cfroute__chrome">
        <div className="cfroute__chrome-dots">
          <span className="cfroute__macdot" style={{ background: '#ff5f57' }}/>
          <span className="cfroute__macdot" style={{ background: '#febc2e' }}/>
          <span className="cfroute__macdot" style={{ background: '#28c840' }}/>
        </div>
        <span className="cfroute__chrome-title">glassmem · context-routing</span>
        <span className="cfroute__chrome-live">
          <span className="cfroute__live-dot"/>LIVE
        </span>
      </div>

      {/* Scenario tabs */}
      <div className="cfroute__tabs">
        {ROUTING_SCENES.map((s, i) => (
          <button
            key={s.label}
            className={`cfroute__tab${i === scIdx ? ' cfroute__tab--on' : ''}`}
            onClick={() => { setScIdx(i); }}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="cfroute__body">
        {/* Source card */}
        <div className="cfroute__source-card">
          <div className="cfroute__source-header">
            <span className="cfroute__pip" style={{ background: sc.source.pip }}/>
            <strong className="cfroute__source-agent">{sc.source.agent}</strong>
            <span className="cfroute__source-verb">{sc.source.action}</span>
          </div>
          <p className="cfroute__source-text">{sc.source.text}</p>
          <span className="cfroute__source-scope">{sc.source.scope}</span>
        </div>

        {/* Connector arrow */}
        <div className="cfroute__connector">
          <div className={`cfroute__conn-line${flowing ? ' cfroute__conn-line--active' : ''}`}/>
          <div className={`cfroute__conn-hub${distributing ? ' cfroute__conn-hub--active' : ''}`}>
            <Logo size={14}/>
            <span className="cfroute__hub-name">GlassMem</span>
            <span className="cfroute__hub-sub">routing engine</span>
          </div>
          <div className={`cfroute__conn-line${distributing ? ' cfroute__conn-line--active' : ''}`}/>
        </div>

        {/* Agent routing rows */}
        <div className="cfroute__agents">
          {sc.routes.map((r, i) => {
            const revealed = i < agentsDone;
            const col = STATUS_COLORS[r.status];
            return (
              <div
                key={r.name}
                className={`cfroute__agent${revealed ? ' cfroute__agent--on' : ''}`}
                style={revealed ? { background: col.bg, borderColor: col.border } : {}}
              >
                <div className="cfroute__agent-left">
                  <span className="cfroute__pip" style={{ background: revealed ? r.pip : 'rgba(255,255,255,0.12)' }}/>
                  <span className="cfroute__agent-name">{r.name}</span>
                </div>
                {revealed ? (
                  <div className="cfroute__agent-right">
                    <span className="cfroute__route-badge" style={{ color: col.label, borderColor: col.border, background: col.bg }}>
                      {STATUS_ICONS[r.status]} {r.status}
                    </span>
                    <span className="cfroute__reason">{r.reason}</span>
                  </div>
                ) : (
                  <span className="cfroute__waiting">...</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer status */}
        <div className={`cfroute__footer${done ? ' cfroute__footer--done' : ''}`}>
          {done
            ? <><span className="cfroute__footer-check">✓</span>{sc.routes.filter(r => r.status !== 'blocked').length} routed · {sc.routes.filter(r => r.status === 'blocked').length} blocked · 0 manual steps</>
            : phase === 'write'    ? 'waiting for context update...'
            : phase === 'flow-in' ? 'routing to GlassMem engine...'
            : `evaluating ${sc.routes.length} agents...`
          }
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════
   INTERACTIVE LIVE DEMO — Section 3
════════════════════════════════════════════════════ */

const DEMO_SCENARIOS = [
  {
    id: 'billing', label: 'Billing migration freeze', color: '#fb923c',
    trigger: {
      agent: 'Planner Agent', pip: '#fb923c', action: 'writes constraint',
      content: '"Do not modify billing until Stripe migration completes Friday 18:00."',
    },
    agents: [
      { name: 'Claude Code',             pip: '#6ee7b7', before: 'Implementing billing module refactor',   after: 'Preparing read-only analysis. Defer writes until freeze ends', status: 'allowed'   },
      { name: 'Billing Sub-Agent',        pip: '#a78bfa', before: 'Spawning: billing task',               after: 'Inherited freeze. Executing read-only path only',             status: 'inherited' },
      { name: 'Debug Agent',              pip: '#7dd3fc', before: 'Debugging billing sync',               after: 'Restricted to read-only billing analysis',                     status: 'allowed'   },
      { name: 'Customer Support Agent',   pip: '#94a3b8', before: 'Handling customer queries',           after: 'Context not received. Irrelevant scope',                      status: 'blocked'   },
      { name: 'External Vendor Agent',    pip: '#ef4444', before: 'Fetching vendor data',                after: 'Context not received. Sensitive constraint',                  status: 'blocked'   },
      { name: 'Marketing Agent',          pip: '#f59e0b', before: 'Writing release copy',               after: 'Context not received. Out of scope',                          status: 'blocked'   },
    ],
    steps: [
      'Planner Agent writes billing freeze to context store',
      'GlassMem evaluates scope for all 6 agents',
      'Claude Code and Debug Agent receive constraint',
      'Billing Sub-Agent inherits freeze at spawn',
      'Customer Support, Vendor, Marketing agents blocked',
    ],
  },
  {
    id: 'redis', label: 'Redis cache failure', color: '#ef4444',
    trigger: {
      agent: 'Debug Agent', pip: '#7dd3fc', action: 'records failure',
      content: '"Redis cache caused stale billing reads. Do not retry this approach."',
    },
    agents: [
      { name: 'Claude Code',      pip: '#6ee7b7', before: 'Considering Redis for billing caching', after: 'Avoiding Redis. Failure propagated from Debug Agent', status: 'allowed' },
      { name: 'Billing Sub-Agent',pip: '#a78bfa', before: 'Planning cache layer for billing',     after: 'Failed approach inherited. Switching to Postgres',    status: 'inherited' },
      { name: 'Planner Agent',    pip: '#fb923c', before: 'Designing distributed cache strategy', after: 'Redis removed from plan. Postgres row-level locking', status: 'allowed' },
      { name: 'Customer Support Agent', pip: '#94a3b8', before: 'Handling customer queries', after: 'Context not received. Out of scope',                      status: 'blocked' },
      { name: 'Marketing Agent',  pip: '#f59e0b', before: 'Writing release copy',             after: 'Context not received. Out of scope',                    status: 'blocked' },
    ],
    steps: [
      'Debug Agent records Redis failure to context store',
      'GlassMem marks Redis as failed approach in billing scope',
      'Claude Code and Planner Agent receive failure context',
      'Billing Sub-Agent inherits failed approach at spawn',
      'Customer Support and Marketing agents not routed',
    ],
  },
  {
    id: 'security', label: 'Security incident', color: '#ef4444',
    trigger: {
      agent: 'Security Agent', pip: '#ef4444', action: 'raises alert',
      content: '"SQL injection vulnerability in user input handling. Patch before next deploy."',
    },
    agents: [
      { name: 'Claude Code',   pip: '#6ee7b7', before: 'Writing new user input handler',  after: 'Switching to parameterized queries immediately',  status: 'allowed' },
      { name: 'Review Agent',  pip: '#a78bfa', before: 'Reviewing backend PRs normally',  after: 'Flagging raw SQL in all open reviews',            status: 'allowed' },
      { name: 'Testing Agent', pip: '#7dd3fc', before: 'Running standard test suite',     after: 'Adding SQL injection tests to all suites',        status: 'allowed' },
      { name: 'Deploy Agent',  pip: '#fb923c', before: 'Preparing next deployment',       after: 'Blocking deploy. Security constraint active',    status: 'blocked' },
    ],
    steps: [
      'Security Agent writes vulnerability alert to context store',
      'GlassMem propagates to all agents in affected scope',
      'Claude Code switches to parameterized queries',
      'Review Agent flags raw SQL in all pending PRs',
      'Deploy Agent blocked. Constraint prevents deployment',
    ],
  },
  {
    id: 'architecture', label: 'Architecture migration', color: '#a78bfa',
    trigger: {
      agent: 'Architect Agent', pip: '#a78bfa', action: 'writes decision',
      content: '"Migrating from REST to GraphQL. No new REST endpoints after 2026-06-15."',
    },
    agents: [
      { name: 'Claude Code',  pip: '#6ee7b7', before: 'Building a new REST endpoint',    after: 'Switching to GraphQL resolver instead',            status: 'allowed' },
      { name: 'API Agent',    pip: '#fb923c', before: 'Generating REST API docs',        after: 'GraphQL schema generation. Migration active',     status: 'allowed' },
      { name: 'Review Agent', pip: '#7dd3fc', before: 'Reviewing API change PRs',       after: 'Rejecting new REST endpoints in open reviews',     status: 'allowed' },
      { name: 'Docs Agent',   pip: '#94a3b8', before: 'Writing REST API documentation', after: 'Updating docs for GraphQL migration',              status: 'allowed' },
    ],
    steps: [
      'Architect writes migration decision to context store',
      'GlassMem routes to all API-scope agents',
      'Claude Code and API Agent receive migration constraint',
      'Review Agent will reject new REST endpoint PRs',
      'Docs Agent automatically updates for GraphQL migration',
    ],
  },
];

const LiveDemo = () => {
  const [scIdx, setScIdx] = useState(0);
  const [step,  setStep]  = useState(-1);
  const sc = DEMO_SCENARIOS[scIdx];
  useEffect(() => { setStep(-1); }, [scIdx]);
  useEffect(() => {
    let t;
    if (step === -1)                      t = setTimeout(() => setStep(0), 1100);
    else if (step < sc.steps.length - 1)  t = setTimeout(() => setStep(s => s + 1), 740);
    else                                  t = setTimeout(() => setStep(-1), 2800);
    return () => clearTimeout(t);
  }, [step, sc.steps.length]);

  return (
    <div className="demo">
      <div className="demo__tabs">
        {DEMO_SCENARIOS.map((s, i) => (
          <button key={s.id} className={`demo__tab${i === scIdx ? ' demo__tab--on' : ''}`} onClick={() => setScIdx(i)}>
            <span className="demo__tab-dot" style={{ background: s.color }}/>
            {s.label}
          </button>
        ))}
      </div>
      <div className="demo__main">
        <div className="demo__left">
          <p className="demo__col-label">Context update</p>
          <div className="demo__trigger">
            <div className="demo__trigger-header">
              <span className="demo__pip" style={{ background: sc.trigger.pip }}/>
              <strong className="demo__trigger-agent">{sc.trigger.agent}</strong>
              <span className="demo__trigger-action">{sc.trigger.action}</span>
            </div>
            <p className="demo__trigger-content">{sc.trigger.content}</p>
          </div>
          <div className="demo__log">
            {sc.steps.map((s, i) => (
              <div key={i} className={`demo__log-row${step >= i - 1 ? ' demo__log-row--on' : ''}`}>
                <span className={`demo__log-dot${step >= i - 1 ? ' demo__log-dot--on' : ''}`}/>
                <span className="demo__log-text">{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="demo__hub">
          <div className="demo__hub-line"/>
          <div className="demo__hub-node"><Logo size={14}/><span>GlassMem</span></div>
          <div className="demo__hub-line"/>
          <p className="demo__hub-count">
            {step >= 0 ? `${Math.min(step + 1, sc.agents.length)} / ${sc.agents.length} evaluated` : 'propagating...'}
          </p>
        </div>
        <div className="demo__right">
          <p className="demo__col-label">Agent routing results</p>
          <div className="demo__agent-grid">
            {sc.agents.map((ag, i) => {
              const updated = step >= 0 && step >= i;
              return (
                <div key={ag.name} className={`demo__agent${updated ? ' demo__agent--on' : ''}`}>
                  <div className="demo__agent-head">
                    <span className="demo__pip" style={{ background: ag.pip }}/>
                    <span className="demo__agent-name">{ag.name}</span>
                    {updated && <span className={`demo__badge demo__badge--${ag.status}`}>{ag.status}</span>}
                  </div>
                  <p className="demo__agent-state">{updated ? ag.after : ag.before}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════
   COMPARISON TABLE — Section 2
════════════════════════════════════════════════════ */

const COMPARE_ROWS = [
  {
    approach: 'context.md',
    inspectable: '✓',
    routing: '✗ manual',
    handoff: '✗ copied',
    temporal: '✗ stale instantly',
    lineage: '✗',
    isGlass: false,
  },
  {
    approach: 'Vector DB / memory',
    inspectable: '✓',
    routing: '✗ passive',
    handoff: '✗ none',
    temporal: '✗ weak validity',
    lineage: '✗',
    isGlass: false,
  },
  {
    approach: 'Ad-hoc sub-agents',
    inspectable: '~',
    routing: '✗ handoff problem',
    handoff: '✗ loses parent state',
    temporal: '~',
    lineage: '✗',
    isGlass: false,
  },
  {
    approach: 'GlassMem',
    inspectable: '✓',
    routing: '✓ scoped routing',
    handoff: '✓ selected inheritance',
    temporal: '✓ temporal validity',
    lineage: '✓',
    isGlass: true,
  },
];

const ComparisonTable = () => (
  <div className="ctable">
    <div className="ctable__head">
      <div className="ctable__hcell ctable__hcell--feat">Approach</div>
      <div className="ctable__hcell">Inspectable</div>
      <div className="ctable__hcell">Routing</div>
      <div className="ctable__hcell">Sub-agent handoff</div>
      <div className="ctable__hcell">Temporal</div>
      <div className="ctable__hcell">Lineage</div>
    </div>
    {COMPARE_ROWS.map((row) => (
      <div key={row.approach} className={`ctable__row${row.isGlass ? ' ctable__row--em' : ''}`}>
        <div className={`ctable__cell ctable__cell--name${row.isGlass ? ' ctable__cell--glass' : ''}`}>{row.approach}</div>
        <div className={`ctable__cell ${row.inspectable.startsWith('✓') ? 'ctable__cell--pos' : row.inspectable === '~' ? 'ctable__cell--neu' : 'ctable__cell--neg'}`}>{row.inspectable}</div>
        <div className={`ctable__cell ${row.routing.startsWith('✓') ? 'ctable__cell--pos' : row.routing === '~' ? 'ctable__cell--neu' : 'ctable__cell--neg'}`}>{row.routing}</div>
        <div className={`ctable__cell ${row.handoff.startsWith('✓') ? 'ctable__cell--pos' : row.handoff === '~' ? 'ctable__cell--neu' : 'ctable__cell--neg'}`}>{row.handoff}</div>
        <div className={`ctable__cell ${row.temporal.startsWith('✓') ? 'ctable__cell--pos' : row.temporal === '~' ? 'ctable__cell--neu' : 'ctable__cell--neg'}`}>{row.temporal}</div>
        <div className={`ctable__cell ${row.lineage.startsWith('✓') ? 'ctable__cell--pos' : row.lineage === '~' ? 'ctable__cell--neu' : 'ctable__cell--neg'}`}>{row.lineage}</div>
      </div>
    ))}
  </div>
);

/* ══════════════════════════════════════════════════
   OBSERVABILITY PANEL — Section 6
════════════════════════════════════════════════════ */

const ObsPanel = () => (
  <div className="obspanel">
    <div className="obspanel__chrome">
      <div className="obspanel__chrome-dots">
        <span className="obspanel__macdot" style={{ background: '#ff5f57' }}/>
        <span className="obspanel__macdot" style={{ background: '#febc2e' }}/>
        <span className="obspanel__macdot" style={{ background: '#28c840' }}/>
      </div>
      <span className="obspanel__chrome-title"><Logo size={11}/>glassmem · context-packet · ctx_a2f9c01b</span>
      <span className="obspanel__status">active</span>
    </div>

    <div className="obspanel__content-line">
      "Redis cache caused stale billing reads. Do not retry"
    </div>

    <div className="obspanel__fields">
      {[
        { k: 'source',       v: 'Debug Agent',                               color: '#7dd3fc' },
        { k: 'scope',        v: 'project.billing',                           color: '#a78bfa' },
        { k: 'status',       v: 'failed_approach',                           color: '#fb923c' },
        { k: 'created',      v: '3 days ago',                                color: 'var(--tx-2)' },
        { k: 'routed to',    v: 'Claude Code, Billing Sub-Agent',            color: '#6ee7b7' },
        { k: 'blocked from', v: 'Customer Support Agent, External Vendor Agent', color: '#ef4444' },
        { k: 'reason',       v: 'billing task relevance',                    color: 'var(--tx-2)' },
        { k: 'used by',      v: 'Claude Code (before implementation plan)',  color: '#6ee7b7' },
        { k: 'expires',      v: 'never',                                     color: 'var(--tx-2)' },
        { k: 'supersedes',   v: 'none',                                      color: 'var(--tx-2)' },
        { k: 'incident ref', v: 'INC-1042',                                  color: '#fb923c' },
      ].map(({ k, v, color }) => (
        <div key={k} className="obspanel__field-row">
          <span className="obspanel__field-key">{k}</span>
          <span className="obspanel__field-val" style={{ color }}>{v}</span>
        </div>
      ))}
    </div>

    <div className="obspanel__trace">
      <span className="obspanel__trace-label">Lineage trace</span>
      <div className="obspanel__trace-line">
        {['Planner', 'GlassMem', 'Claude Code', 'Billing Sub-Agent'].map((node, i, arr) => (
          <React.Fragment key={node}>
            <span className="obspanel__trace-node">{node}</span>
            {i < arr.length - 1 && <span className="obspanel__trace-arrow">→</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════
   CAPABILITY MOCKUPS
════════════════════════════════════════════════════ */

const MockScopedRouting = () => (
  <div className="cap-mock cap-mock--routing">
    <div className="cap-mock__header">
      <span className="cap-mock__label-key">context:</span>
      <span className="cap-mock__label-val">billing freeze</span>
      <span className="cap-mock__scope-tag">scope: project.billing</span>
    </div>
    <div className="cap-mock__rows">
      {[
        { name: 'Claude Code',       status: 'allowed',   color: '#6ee7b7' },
        { name: 'Billing Sub-Agent', status: 'inherited', color: '#a78bfa' },
        { name: 'Debug Agent',       status: 'allowed',   color: '#6ee7b7' },
        { name: 'Customer Support',  status: 'blocked',   color: '#f87171' },
      ].map(r => (
        <div key={r.name} className="cap-mock__row">
          <span className="cap-mock__tree-prefix">├─</span>
          <span className="cap-mock__agent-name">{r.name}</span>
          <span className="cap-mock__status" style={{ color: r.color }}>
            {r.status === 'allowed' ? '✓' : r.status === 'inherited' ? '↓' : '✗'} {r.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const MockSubAgentInheritance = () => (
  <div className="cap-mock cap-mock--inherit">
    <div className="cap-mock__row cap-mock__row--parent">
      <span className="cap-mock__pip" style={{ background: '#fb923c' }}/>
      <span className="cap-mock__agent-name cap-mock__agent-name--bold">Planner Agent</span>
    </div>
    <div className="cap-mock__row cap-mock__row--child">
      <span className="cap-mock__tree-prefix" style={{ color: '#a78bfa' }}>└─</span>
      <span className="cap-mock__pip" style={{ background: '#a78bfa' }}/>
      <span className="cap-mock__agent-name">Billing Debugger (sub-agent)</span>
    </div>
    <div className="cap-mock__inherit-block cap-mock__inherit-block--yes">
      <span className="cap-mock__inherit-label" style={{ color: '#6ee7b7' }}>inherits:</span>
      <span className="cap-mock__inherit-items">billing freeze · Redis failure · lock strategy</span>
    </div>
    <div className="cap-mock__inherit-block cap-mock__inherit-block--no">
      <span className="cap-mock__inherit-label" style={{ color: '#f87171' }}>not inherited:</span>
      <span className="cap-mock__inherit-items">customer data · auth context</span>
    </div>
  </div>
);

const MockTemporalUpdates = () => (
  <div className="cap-mock cap-mock--temporal">
    <div className="cap-mock__header">
      <span className="cap-mock__label-key">context:</span>
      <span className="cap-mock__label-val">migration freeze</span>
    </div>
    <div className="cap-mock__rows">
      <div className="cap-mock__row"><span className="cap-mock__tree-prefix">├─</span><span className="cap-mock__field-k">created:</span><span className="cap-mock__field-v">Mon 09:00</span></div>
      <div className="cap-mock__row">
        <span className="cap-mock__tree-prefix">├─</span>
        <span className="cap-mock__field-k">expires:</span>
        <span className="cap-mock__field-v">Fri 18:00</span>
        <span className="cap-mock__countdown">3d 7h left</span>
      </div>
      <div className="cap-mock__row"><span className="cap-mock__tree-prefix">└─</span><span className="cap-mock__field-k">status:</span><span className="cap-mock__field-v" style={{ color: '#6ee7b7' }}>active, will auto-expire</span></div>
    </div>
    <div className="cap-mock__bar-wrap">
      <div className="cap-mock__bar-fill" style={{ width: '55%', background: '#fb923c' }}/>
    </div>
  </div>
);

const MockContextFiltering = () => (
  <div className="cap-mock cap-mock--filter">
    <div className="cap-mock__header">
      <span className="cap-mock__label-key">context:</span>
      <span className="cap-mock__label-val">customer PII data</span>
      <span className="cap-mock__scope-tag" style={{ color: '#f87171', borderColor: 'rgba(248,113,113,0.25)' }}>sensitivity: high</span>
    </div>
    <div className="cap-mock__rows">
      {[
        { name: 'Internal agents',  status: 'allowed', color: '#6ee7b7' },
        { name: 'External vendors', status: 'blocked', color: '#f87171' },
        { name: 'Support tools',    status: 'blocked', color: '#f87171' },
      ].map(r => (
        <div key={r.name} className="cap-mock__row">
          <span className="cap-mock__tree-prefix">├─</span>
          <span className="cap-mock__agent-name">{r.name}</span>
          <span className="cap-mock__status" style={{ color: r.color }}>
            {r.status === 'allowed' ? '✓' : '✗'} {r.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const MockContextInvalidation = () => (
  <div className="cap-mock cap-mock--invalidate">
    <div className="cap-mock__inval-row cap-mock__inval-row--old">
      <span className="cap-mock__inval-badge cap-mock__inval-badge--superseded">superseded</span>
      <span className="cap-mock__inval-text cap-mock__inval-text--struck">REST endpoints allowed</span>
    </div>
    <div className="cap-mock__inval-arrow">
      <span className="cap-mock__inval-arrow-line"/>
      <span className="cap-mock__inval-arrow-label">replaced</span>
    </div>
    <div className="cap-mock__inval-row cap-mock__inval-row--new">
      <span className="cap-mock__inval-badge cap-mock__inval-badge--active">active</span>
      <span className="cap-mock__inval-text">GraphQL only · Fri 14:22</span>
    </div>
  </div>
);

const MockContextLineage = () => (
  <div className="cap-mock cap-mock--lineage">
    {[
      { agent: 'Debug Agent',   action: 'wrote',  detail: '"Redis stale reads"',              color: '#7dd3fc' },
      { agent: 'GlassMem',      action: 'routed', detail: 'Claude Code, Billing Agent',        color: '#6ee7b7' },
      { agent: 'Claude Code',   action: 'used',   detail: 'before implementation plan',        color: '#6ee7b7' },
    ].map((item, i) => (
      <div key={i} className="cap-mock__lineage-row">
        <span className="cap-mock__lineage-agent" style={{ color: item.color }}>{item.agent}</span>
        <span className="cap-mock__lineage-arrow">→</span>
        <span className="cap-mock__lineage-action">{item.action}</span>
        <span className="cap-mock__lineage-arrow">→</span>
        <span className="cap-mock__lineage-detail">{item.detail}</span>
      </div>
    ))}
  </div>
);

/* ══════════════════════════════════════════════════
   BENTO CAPABILITIES GRID — Section 4
════════════════════════════════════════════════════ */
const CAPABILITIES = [
  {
    title: 'Scoped routing',
    desc: 'Route context by agent, task, project, sensitivity, and validity.',
    example: 'Billing constraints go to billing agents, not customer support agents.',
    mockup: <MockScopedRouting />,
    color: '#6ee7b7',
  },
  {
    title: 'Sub-agent inheritance',
    desc: 'Spawn sub-agents with the relevant slice of parent context.',
    example: 'A billing debugger inherits failed Redis approach, billing freeze, and locking strategy.',
    mockup: <MockSubAgentInheritance />,
    color: '#a78bfa',
  },
  {
    title: 'Temporal updates',
    desc: 'Temporary context expires or updates automatically.',
    example: 'Migration freeze expires Friday at 18:00 and stops being injected.',
    mockup: <MockTemporalUpdates />,
    color: '#fb923c',
  },
  {
    title: 'Context filtering',
    desc: 'Block sensitive or irrelevant context from agents that should not see it.',
    example: 'Customer data never reaches external vendor agents.',
    mockup: <MockContextFiltering />,
    color: '#ef4444',
  },
  {
    title: 'Context invalidation',
    desc: 'Supersede old assumptions before they spread.',
    example: 'GraphQL decision replaced by server actions; old decision no longer routes.',
    mockup: <MockContextInvalidation />,
    color: '#f59e0b',
  },
  {
    title: 'Context lineage',
    desc: 'Track who wrote context, where it propagated, and which agent used it.',
    example: 'See exactly what the agent knew before it made a decision.',
    mockup: <MockContextLineage />,
    color: '#7dd3fc',
  },
];

/* ══════════════════════════════════════════════════
   HOW IT WORKS SECTION — replaces Architecture
════════════════════════════════════════════════════ */

const HowItWorksSection = () => (
  <section id="architecture" className="sec sec--alt">
    <div className="w">
      <div className="fail__intro reveal" style={{ marginBottom: 64 }}>
        <div>
          <span className="label">How it works</span>
          <h2 className="h2">How it works</h2>
        </div>
        <p className="body-lg" style={{ maxWidth: '44ch' }}>
          GlassMem sits between your agents and their context. Every read and write passes through a routing layer that decides what each agent sees.
        </p>
      </div>

      {/* Step 1 */}
      <div className="hiw__step-row reveal">
        <div className="hiw__step-visual">
          <div className="hiw__code-block">
            <div className="hiw__code-bar">
              <div className="hiw__code-dots">
                <span style={{ background: '#ff5f57' }}/>
                <span style={{ background: '#febc2e' }}/>
                <span style={{ background: '#28c840' }}/>
              </div>
              <span className="hiw__code-filename">agent.ts</span>
            </div>
            <pre className="hiw__code-body"><code>{`// Connect via MCP, SDK, or API
const mem = new GlassMem({
  project: "billing-v2"
});

// In your agent
const context = await mem.getContext({
  agent: "claude-code",
  task: "billing-refactor",
  scope: "project"
});`}</code></pre>
          </div>
        </div>
        <div className="hiw__step-prose">
          <div className="hiw__step-num">01</div>
          <h3 className="hiw__step-title">Connect your agents</h3>
          <p className="hiw__step-desc">
            Connect any agent in minutes via MCP server, TypeScript/Python SDK, or REST API. GlassMem plugs into your existing agent architecture without rewiring anything.
          </p>
          <div className="hiw__step-tags">
            <span className="hiw__step-tag">MCP server</span>
            <span className="hiw__step-tag">TypeScript SDK</span>
            <span className="hiw__step-tag">Python SDK</span>
            <span className="hiw__step-tag">REST API</span>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="hiw__step-row hiw__step-row--rev reveal">
        <div className="hiw__step-prose">
          <div className="hiw__step-num">02</div>
          <h3 className="hiw__step-title">Write context with scope</h3>
          <p className="hiw__step-desc">
            Agents write context with explicit scope, type, and expiry. The routing layer stores each event and evaluates which downstream agents should receive it.
          </p>
          <div className="hiw__step-tags">
            <span className="hiw__step-tag">scoped</span>
            <span className="hiw__step-tag">typed</span>
            <span className="hiw__step-tag">temporal</span>
          </div>
        </div>
        <div className="hiw__step-visual">
          <div className="hiw__ui-card">
            <div className="hiw__ui-card-header">
              <span className="hiw__ui-card-title">New Context Event</span>
              <span className="hiw__ui-card-id">ctx_new</span>
            </div>
            <div className="hiw__ui-fields">
              <div className="hiw__ui-field">
                <span className="hiw__ui-field-k">source agent</span>
                <span className="hiw__ui-field-v"><span className="hiw__ui-badge" style={{ background: 'rgba(251,146,60,0.12)', color: '#fb923c', borderColor: 'rgba(251,146,60,0.3)' }}>Planner Agent</span></span>
              </div>
              <div className="hiw__ui-field">
                <span className="hiw__ui-field-k">message</span>
                <span className="hiw__ui-field-v hiw__ui-message">"Billing freeze until Friday. Stripe migration active"</span>
              </div>
              <div className="hiw__ui-field">
                <span className="hiw__ui-field-k">scope</span>
                <span className="hiw__ui-field-v"><span className="hiw__ui-badge" style={{ background: 'rgba(110,231,183,0.08)', color: '#6ee7b7', borderColor: 'rgba(110,231,183,0.25)' }}>project.billing</span></span>
              </div>
              <div className="hiw__ui-field">
                <span className="hiw__ui-field-k">type</span>
                <span className="hiw__ui-field-v"><span className="hiw__ui-badge">temporary constraint</span></span>
              </div>
              <div className="hiw__ui-field">
                <span className="hiw__ui-field-k">expires</span>
                <span className="hiw__ui-field-v"><span className="hiw__ui-badge" style={{ background: 'rgba(251,146,60,0.08)', color: '#fb923c', borderColor: 'rgba(251,146,60,0.2)' }}>Friday 18:00</span></span>
              </div>
            </div>
            <div className="hiw__ui-routing">
              <span className="hiw__ui-routing-label">Routing preview</span>
              <div className="hiw__ui-routing-rows">
                <div className="hiw__ui-route-row"><span style={{ color: '#6ee7b7' }}>✓</span><span>Claude Code · allowed</span></div>
                <div className="hiw__ui-route-row"><span style={{ color: '#a78bfa' }}>↓</span><span>Billing Sub-Agent · inherited</span></div>
                <div className="hiw__ui-route-row"><span style={{ color: '#f87171' }}>✗</span><span>Customer Support · blocked</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="hiw__step-row reveal">
        <div className="hiw__step-visual">
          <div className="hiw__routing-diagram">
            <div className="hiw__rd-source">
              <span className="hiw__rd-box hiw__rd-box--source">Context event</span>
            </div>
            <div className="hiw__rd-arrow-down"/>
            <div className="hiw__rd-hub">
              <Logo size={14}/>
              <span>GlassMem</span>
              <span className="hiw__rd-hub-sub">filter + route</span>
            </div>
            <div className="hiw__rd-arrow-down"/>
            <div className="hiw__rd-agents">
              <div className="hiw__rd-agent hiw__rd-agent--green">
                <span className="hiw__rd-agent-pip" style={{ background: '#6ee7b7' }}/>
                <span>Claude Code</span>
                <span className="hiw__rd-badge hiw__rd-badge--green">received</span>
              </div>
              <div className="hiw__rd-agent hiw__rd-agent--green">
                <span className="hiw__rd-agent-pip" style={{ background: '#a78bfa' }}/>
                <span>Billing Sub-Agent</span>
                <span className="hiw__rd-badge hiw__rd-badge--purple">inherited</span>
              </div>
              <div className="hiw__rd-agent hiw__rd-agent--red">
                <span className="hiw__rd-agent-pip" style={{ background: '#f87171' }}/>
                <span>Customer Support</span>
                <span className="hiw__rd-badge hiw__rd-badge--red">blocked</span>
              </div>
            </div>
            <div className="hiw__rd-labels">
              <span>scoped</span>
              <span>filtered</span>
              <span>traceable</span>
            </div>
          </div>
        </div>
        <div className="hiw__step-prose">
          <div className="hiw__step-num">03</div>
          <h3 className="hiw__step-title">Agents receive only what they need</h3>
          <p className="hiw__step-desc">
            Before any agent acts, GlassMem injects only the context slices relevant to its task, scope, and permissions. Irrelevant, sensitive, or expired context never reaches agents that should not see it.
          </p>
          <div className="hiw__step-tags">
            <span className="hiw__step-tag">zero manual steps</span>
            <span className="hiw__step-tag">fully auditable</span>
          </div>
        </div>
      </div>

      {/* Trace diagram */}
      <div className="hiw__trace reveal">
        <span className="hiw__trace-label">Lineage trace</span>
        <div className="hiw__trace-body">
          <pre className="hiw__trace-pre">{`Planner Agent  →  GlassMem  →  Claude Code            ✓ received
                           →  Billing Sub-Agent    ↓ inherited
                           →  Customer Support     ✗ blocked
                           →  External Vendor      ✗ sensitive`}</pre>
        </div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════
   CUSTOMER PROOF — Section 7
════════════════════════════════════════════════════ */

const REAL_CUSTOMERS = [
  {
    quote: "Before GlassMem, every sub-agent handoff meant manually syncing context. Constraints now propagate automatically across the whole system.",
    name: 'Armend Avdijaj',
    role: 'CEO at GlassFlow',
    photo: '/customer-photos/armend.jpg',
    logo: '/customer-logos/glassflow.svg',
    color: '#6ee7b7',
  },
  {
    quote: "GlassMem is the coordination layer distributed agent systems need but no one built before. It replaced all our manual context.md workflows.",
    name: 'Andres Tapia',
    role: 'CEO at Restack',
    photo: '/customer-photos/andres.jpg',
    logo: '/customer-logos/restack.svg',
    color: '#a78bfa',
  },
  {
    quote: "We integrated GlassMem in a day. Our agents now share a consistent operational picture across sessions. Debugging went from painful to trivial.",
    name: 'Ingo Marquardt',
    role: 'CTO at NuBrain',
    photo: '/customer-photos/ingo.jpg',
    logo: '/customer-logos/nubrain.svg',
    color: '#7dd3fc',
  },
];

/* ══════════════════════════════════════════════════
   LOGOS
════════════════════════════════════════════════════ */
const LOGOS = [
  { img: '/logos/cursor.png',    name: 'Cursor',    h: 22, style: { filter: 'brightness(0) invert(1)', opacity: 0.65 } },
  { img: '/logos/claude.svg',    name: 'Claude',    h: 22, style: { opacity: 0.8  } },
  { img: '/logos/copilot.png',   name: 'Copilot',   h: 24, style: { opacity: 0.65 } },
  { img: '/logos/windsurf.png',  name: 'Windsurf',  h: 22, style: { opacity: 0.65 } },
  { img: '/logos/langchain.webp',name: 'LangChain', h: 28, style: { filter: 'brightness(0) invert(1)', opacity: 0.65 } },
  { img: '/logos/openai.svg',    name: 'OpenAI',    h: 22, style: { filter: 'brightness(0) invert(1)', opacity: 0.6  } },
  { img: '/logos/crewai.png',    name: 'CrewAI',    h: 22, style: { opacity: 0.65 } },
  { img: '/logos/arcade.png',    name: 'Arcade',    h: 22, style: { opacity: 0.65 } },
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

/* ════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════ */
export function GlassMemPage() {
  useReveal();
  const [scrolled,  setScrolled]  = useState(false);
  const [mobOpen,   setMobOpen]   = useState(false);
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

      {/* NAV */}
      <nav className="nav" style={{ borderBottomColor: scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)' }}>
        <div className="nav__row">
          <a href="/" className="nav__logo"><Logo size={24}/><span className="nav__wordmark">GlassMem</span></a>
          <div className="nav__links">
            <a href="#problem"       className="nav__link">Problem</a>
            <a href="#demo"          className="nav__link">Demo</a>
            <a href="#architecture"  className="nav__link">How it works</a>
            <a href="#observability" className="nav__link">Observability</a>
            <a href="https://docs.glassmem.ai" className="nav__link">Docs</a>
          </div>
          <div className="nav__right">
            <a href="/app"    className="btn btn--ghost btn--sm">Log in</a>
            <a href="/signup" className="btn btn--em btn--sm">Get started</a>
          </div>
          <button className="nav__mob-toggle" onClick={() => setMobOpen(o => !o)} aria-label="Menu">{mobOpen ? '✕' : '☰'}</button>
        </div>
        <div className={`nav__mob-menu${mobOpen ? ' open' : ''}`}>
          {['Problem','Demo','Architecture','Observability','Docs'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav__mob-link" onClick={() => setMobOpen(false)}>{l}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero__fade"/>
        <div className="w">
          <div className="hero__inner">
            <div>
              <div className="hero__badge enter">
                <span className="hero__badge-dot"/>
                Context orchestration infrastructure
              </div>
              <h1 className="h1 hero__h1 enter-2">
                Fully controllable context sharing for your agents.
              </h1>
              <p className="body-lg hero__sub enter-3">
                GlassMem keeps agents, sub-agents, tools, and sessions aligned with scoped operational context without dumping every memory into every agent.
              </p>
              <div className="hero__ctas enter-4">
                <a href="/signup" className="btn btn--em btn--lg">Get started</a>
                <a href="#demo"   className="btn btn--ghost btn--lg">See live demo</a>
              </div>
              <div className="hero__trust enter-4">
                Scoped. Traceable. Temporal. Built for distributed agents.
              </div>
              <ul className="hero__pills enter-4">
                {[
                  'route only relevant context',
                  'prevent context pollution',
                  'pass state into sub-agents',
                  'trace what every agent knew',
                ].map(pill => (
                  <li key={pill} className="hero__pill">
                    <span className="hero__pill-check">✓</span>{pill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hero__viz-col enter-4">
              <ContextFlowViz/>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: ANTI-MEMORY POSITIONING */}
      <section id="problem" className="sec sec--alt">
        <div className="w">
          <div className="antimem reveal">
            <div className="antimem__left">
              <span className="label">The problem</span>
              <h2 className="h2">Sharing all memory between agents is a trap.</h2>
              <p className="body-lg" style={{ marginTop: 16, maxWidth: '44ch' }}>
                Agent engineers already know the problem is not storing more context. It is controlling where context flows.
              </p>
              <p className="antimem__keyline">
                GlassMem is not a bigger memory bucket.<br/>It is a context control plane.
              </p>
            </div>
            <div className="antimem__cards">
              {[
                {
                  title: 'Context pollution',
                  desc: 'When every agent sees everything, irrelevant context becomes instruction noise.',
                  Icon: IconContextPollution,
                },
                {
                  title: 'Stale propagation',
                  desc: 'Old decisions and expired constraints leak into new runs unless context has validity and lifecycle.',
                  Icon: IconStalePropagation,
                },
                {
                  title: 'Debugging black boxes',
                  desc: 'When an agent acts on hidden memory, you cannot explain why it made a decision.',
                  Icon: IconDebuggingBlackBox,
                },
              ].map(c => (
                <div key={c.title} className="antimem__card">
                  <span className="antimem__card-icon"><c.Icon /></span>
                  <div>
                    <p className="antimem__card-title">{c.title}</p>
                    <p className="antimem__card-desc">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY CONTEXT BREAKS */}
      <section className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Why context breaks</span>
              <h2 className="h2">Why context breaks<br/>in real agent systems.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              Storage is solved. Context coordination is not.
            </p>
          </div>
          <div className="reveal">
            <ComparisonTable/>
          </div>
        </div>
      </section>

      {/* SECTION 3: LIVE DEMO */}
      <section id="demo" className="sec sec--alt">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Live coordination demo</span>
              <h2 className="h2">One update.<br/>Only the right agents adapt.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              Select a scenario to see GlassMem route operational context across distributed agents in real time.
            </p>
          </div>
          <div className="reveal"><LiveDemo/></div>
        </div>
      </section>

      {/* SECTION 4: CAPABILITIES */}
      <section id="capabilities" className="sec">
        <div className="w">
          <div className="feat__intro reveal">
            <span className="label">Capabilities</span>
            <h2 className="h2">Controlled context propagation<br/>for agent systems.</h2>
            <p className="body-lg" style={{ maxWidth:'48ch', marginTop:14 }}>
              Six primitives that solve real coordination failures in distributed agent systems.
            </p>
          </div>
          <div className="bento reveal">
            {CAPABILITIES.map(cap => (
              <div key={cap.title} className="bento__card">
                <div className="bento__mockup">{cap.mockup}</div>
                <p className="bento__title">{cap.title}</p>
                <p className="bento__desc">{cap.desc}</p>
                <div className="bento__example">
                  <span className="bento__example-label">Example</span>
                  <p className="bento__example-text">{cap.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <HowItWorksSection />

      {/* SECTION 6: OBSERVABILITY */}
      <section id="observability" className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Observability</span>
              <h2 className="h2">Debug context<br/>like you debug code.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              GlassMem lets you answer the question every agent engineer eventually asks: what context did this agent have when it made that decision?
            </p>
          </div>
          <div className="obssec reveal">
            <div className="obssec__panel">
              <ObsPanel/>
            </div>
            <div className="obssec__prose">
              <p className="body-lg" style={{ marginBottom: 20 }}>
                Every context packet records source, propagation path, blocked agents, expiry, and the agent that consumed it.
              </p>
              <div className="obssec__items">
                {[
                  { label: 'Who wrote it', val: 'source agent + timestamp' },
                  { label: 'Where it went', val: 'routed to + blocked from' },
                  { label: 'Why it routed', val: 'scope + task relevance reason' },
                  { label: 'When it expires', val: 'temporal validity window' },
                  { label: 'Who consumed it', val: 'used by agent + context in decision' },
                ].map(i => (
                  <div key={i.label} className="obssec__item">
                    <span className="obssec__item-check">✓</span>
                    <div>
                      <span className="obssec__item-label">{i.label}</span>
                      <span className="obssec__item-val">{i.val}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="obssec__integrations">
                Export traces to Langfuse, Arize, Helicone, or OpenTelemetry-compatible pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CUSTOMER PROOF */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="cust-sec__intro reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="label">// trusted by teams</span>
            <h2 className="cust-sec__heading">Trusted by teams building production agent systems</h2>
          </div>

          {/* Featured large quote */}
          <div className="proof2 reveal">
            <div className="proof2__featured">
              <div className="proof2__qmark">"</div>
              <blockquote className="proof2__featured-quote">
                {REAL_CUSTOMERS[0].quote}
              </blockquote>
              <div className="proof2__featured-author">
                <img
                  src={REAL_CUSTOMERS[0].photo}
                  alt={REAL_CUSTOMERS[0].name}
                  className="proof2__photo"
                  onError={e => { e.target.style.display = 'none'; }}
                />
                <div className="proof2__author-info">
                  <span className="proof2__author-name">{REAL_CUSTOMERS[0].name}</span>
                  <span className="proof2__author-role">{REAL_CUSTOMERS[0].role}</span>
                </div>
                <img
                  src={REAL_CUSTOMERS[0].logo}
                  alt="GlassFlow"
                  className="proof2__logo"
                  onError={e => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>

            <div className="proof2__divider"/>

            <div className="proof2__secondary">
              {REAL_CUSTOMERS.slice(1).map(c => (
                <div key={c.name} className="proof2__secondary-item">
                  <div className="proof2__secondary-qmark">"</div>
                  <p className="proof2__secondary-quote">{c.quote}</p>
                  <div className="proof2__secondary-author">
                    <img
                      src={c.photo}
                      alt={c.name}
                      className="proof2__photo proof2__photo--sm"
                      onError={e => { e.target.style.display = 'none'; }}
                    />
                    <div>
                      <span className="proof2__author-name">{c.name}</span>
                      <span className="proof2__author-role">{c.role}</span>
                    </div>
                    <img
                      src={c.logo}
                      alt={c.role}
                      className="proof2__logo proof2__logo--sm"
                      onError={e => { e.target.style.display = 'none'; }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sec cta">
        <div className="w">
          <div className="cta__inner" style={{ gridTemplateColumns:'1fr' }}>
            <div className="reveal" style={{ textAlign:'center', maxWidth:560, margin:'0 auto' }}>
              <span className="label">Get started</span>
              <h2 className="cta__h2">Coordinate context before<br/>it becomes chaos.</h2>
              <p className="body-lg cta__sub">
                GlassMem gives distributed agents scoped, traceable, temporal context without dumping every memory into every agent.
              </p>
              {ctaSent ? (
                <div style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'12px 20px', borderRadius:'var(--r)', background:'rgba(110,231,183,0.08)', border:'1px solid rgba(110,231,183,0.2)', color:'var(--em)', fontFamily:'var(--f-code)', fontSize:13, marginBottom:20 }}>
                  <span style={{ width:7, height:7, borderRadius:'50%', background:'var(--em)', display:'inline-block' }}/>
                  You are on the list. We will be in touch.
                </div>
              ) : (
                <form className="cta__email-form" onSubmit={handleCtaSubmit} style={{ justifyContent:'center' }}>
                  <input className="cta__email-input" type="email" placeholder="you@company.com" value={ctaEmail} onChange={e => setCtaEmail(e.target.value)} required/>
                  <button type="submit" className="btn btn--em btn--lg">Get started</button>
                </form>
              )}
              <div style={{ marginTop:14 }}>
                <a href="mailto:hello@glassmem.ai" className="btn btn--ghost btn--sm">Book demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <div className="integ">
        <div className="integ__inner">
          <span className="integ__label">Integrations</span>
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

      {/* PRE-FOOTER */}
      <div className="prefooter"/>

      {/* FOOTER */}
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
              {[
                {l:'Docs',         h:'https://docs.glassmem.ai'},
                {l:'How it works', h:'#architecture'},
                {l:'Contact',      h:'mailto:hello@glassmem.ai'},
                {l:'Blog',         h:'#'},
              ].map(({ l,h }) => (
                <a key={l} href={h} className="footer2__nav-link">{l}</a>
              ))}
            </nav>
          </div>
          <div className="footer2__bottom">
            <div className="footer2__status"><span className="footer2__status-dot"/>All systems operational</div>
            <span className="footer2__copy">© 2026 GlassMem</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
