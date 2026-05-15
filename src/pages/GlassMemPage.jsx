import React, { useEffect, useState } from 'react';
import './GlassMemPage.css';

/* ── Agent framework logo components ── */
const LangGraphLogo = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect width="18" height="18" rx="4" fill="#1c7a3e"/>
    <text x="2" y="13" fill="white" fontSize="8" fontFamily="monospace" fontWeight="bold">LG</text>
  </svg>
);

const CrewAILogo = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect width="18" height="18" rx="4" fill="#f97316"/>
    <text x="1" y="13" fill="white" fontSize="8" fontFamily="monospace" fontWeight="bold">CR</text>
  </svg>
);

const SupportLogo = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="1" width="16" height="12" rx="3" stroke="#a3a3a3" strokeWidth="1.5"/>
    <path d="M5 17 L5 13 L9 13" stroke="#a3a3a3" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

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
const IconStatePollution = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="rgba(239,68,68,0.08)"/>
    <rect x="13" y="16" width="10" height="9" rx="1.5" stroke="#6ee7b7" strokeWidth="1.4" fill="none"/>
    <line x1="18" y1="22" x2="18" y2="24" stroke="#6ee7b7" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M6 10 L13 17" stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M18 6 L18 16" stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M30 10 L23 17" stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round"/>
    <circle cx="18" cy="20" r="2.5" fill="#6ee7b7" opacity="0.7"/>
  </svg>
);

const IconBrokenHandoff = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="rgba(239,68,68,0.08)"/>
    <circle cx="10" cy="18" r="4" stroke="#6ee7b7" strokeWidth="1.4" fill="none"/>
    <circle cx="26" cy="18" r="4" stroke="#6ee7b7" strokeWidth="1.4" fill="none"/>
    <line x1="14" y1="16" x2="18" y2="18" stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="18" y1="18" x2="22" y2="20" stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round" strokeDasharray="1.5 1.5"/>
    <circle cx="18" cy="18" r="2" fill="rgba(239,68,68,0.4)"/>
    <line x1="16" y1="16" x2="20" y2="20" stroke="#ef4444" strokeWidth="1" strokeLinecap="round"/>
    <line x1="20" y1="16" x2="16" y2="20" stroke="#ef4444" strokeWidth="1" strokeLinecap="round"/>
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

/* ── NOT icon (X mark) for notsec cards ── */
const NotXIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7.5" stroke="rgba(239,68,68,0.4)" strokeWidth="1"/>
    <line x1="5" y1="5" x2="11" y2="11" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="11" y1="5" x2="5" y2="11" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

/* ════════════════════════════════════════════════════
   HERO VISUALIZATION — billing migration freeze scenario
════════════════════════════════════════════════════ */

const HERO_AGENTS = [
  { name: 'LangGraph Planner',         pip: '#fb923c', status: 'source',   reason: '',                          framework: 'LangGraph',  logoType: 'langgraph' },
  { name: 'Claude Code',               pip: '#6ee7b7', status: 'allowed',  reason: 'task touches billing',      framework: 'Claude Code',logoType: 'claude' },
  { name: 'Cursor',                    pip: '#6ee7b7', status: 'allowed',  reason: 'editing billing module',    framework: 'Cursor',     logoType: 'cursor' },
  { name: 'CrewAI Billing Sub-Agent',  pip: '#a78bfa', status: 'inherited',reason: 'spawned under billing task',framework: 'CrewAI',     logoType: 'crewai' },
  { name: 'OpenAI Debug Agent',        pip: '#6ee7b7', status: 'allowed',  reason: 'debugging billing incident',framework: 'OpenAI SDK', logoType: 'openai' },
  { name: 'Customer Support Agent',    pip: '#94a3b8', status: 'blocked',  reason: 'out of scope',             framework: '',           logoType: 'support' },
  { name: 'External MCP Tool',         pip: '#ef4444', status: 'blocked',  reason: 'sensitive constraint',     framework: 'MCP',        logoType: 'support' },
];

const STATUS_COLORS = {
  allowed:   { line: '#6ee7b7', label: '#6ee7b7', bg: 'rgba(110,231,183,0.08)', border: 'rgba(110,231,183,0.22)' },
  inherited: { line: '#a78bfa', label: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.22)' },
  blocked:   { line: '#ef4444', label: '#ef4444', bg: 'rgba(239,68,68,0.06)',   border: 'rgba(239,68,68,0.18)'   },
};

const STATUS_ICONS = { allowed: '✓', inherited: '↓', blocked: '✗' };

const AgentLogo = ({ logoType }) => {
  if (logoType === 'claude')    return <img src="/logos/claude.svg"  alt="Claude"  className="cfroute__agent-logo" />;
  if (logoType === 'openai')    return <img src="/logos/openai.svg"  alt="OpenAI"  className="cfroute__agent-logo cfroute__agent-logo--invert" />;
  if (logoType === 'cursor')    return <img src="/logos/cursor.png"  alt="Cursor"  className="cfroute__agent-logo cfroute__agent-logo--invert" />;
  if (logoType === 'langgraph') return <LangGraphLogo />;
  if (logoType === 'crewai')    return <CrewAILogo />;
  if (logoType === 'support')   return <SupportLogo />;
  return null;
};

const ContextFlowViz = () => {
  const [phase,      setPhase]      = useState('write');
  const [agentsDone, setAgentsDone] = useState(0);

  const ROUTE_AGENTS = HERO_AGENTS.filter(a => a.status !== 'source');

  useEffect(() => {
    let t;
    if      (phase === 'write')      t = setTimeout(() => setPhase('route'),    1720);
    else if (phase === 'route')      t = setTimeout(() => { setPhase('distribute'); setAgentsDone(0); }, 1000);
    else if (phase === 'distribute') {
      if (agentsDone < ROUTE_AGENTS.length)
        t = setTimeout(() => setAgentsDone(n => n + 1), 540);
      else
        t = setTimeout(() => setPhase('behavior'), 290);
    }
    else if (phase === 'behavior')   t = setTimeout(() => setPhase('pause'), 4000);
    else if (phase === 'pause')      t = setTimeout(() => { setPhase('write'); setAgentsDone(0); }, 1720);
    return () => clearTimeout(t);
  }, [phase, agentsDone, ROUTE_AGENTS.length]);

  const flowing      = phase !== 'write';
  const distributing = phase === 'distribute' || phase === 'behavior' || phase === 'pause';
  const showBehavior = phase === 'behavior' || phase === 'pause';

  return (
    <div className="cfroute">
      <div className="cfroute__chrome">
        <div className="cfroute__chrome-dots">
          <span className="cfroute__macdot" style={{ background: '#ff5f57' }}/>
          <span className="cfroute__macdot" style={{ background: '#febc2e' }}/>
          <span className="cfroute__macdot" style={{ background: '#28c840' }}/>
        </div>
        <span className="cfroute__chrome-title">glassmem · context-routing · billing-migration-freeze</span>
        <span className="cfroute__chrome-live">
          <span className="cfroute__live-dot"/>LIVE
        </span>
      </div>

      <div className="cfroute__body">
        {/* Source card */}
        <div className="cfroute__source-card">
          <div className="cfroute__source-header">
            <span className="cfroute__pip" style={{ background: '#fb923c' }}/>
            <strong className="cfroute__source-agent">LangGraph Planner</strong>
            <span className="cfroute__source-verb">writes constraint</span>
          </div>
          <p className="cfroute__source-text">"Billing freeze until Friday. Stripe migration active."</p>
          <span className="cfroute__source-scope">scope: project.billing · temporary constraint</span>
        </div>

        {/* Connector arrow */}
        <div className="cfroute__connector">
          <div className={`cfroute__conn-line${flowing ? ' cfroute__conn-line--active' : ''}`}/>
          <div className={`cfroute__conn-hub${distributing ? ' cfroute__conn-hub--active' : ''}`}>
            <Logo size={14}/>
            <span className="cfroute__hub-name">GlassMem</span>
            <span className="cfroute__hub-sub">Context Orchestrator</span>
          </div>
          <div className={`cfroute__conn-line${distributing ? ' cfroute__conn-line--active' : ''}`}/>
        </div>

        {/* Agent routing rows */}
        <div className="cfroute__agents">
          {ROUTE_AGENTS.map((r, i) => {
            const revealed = i < agentsDone;
            const col = STATUS_COLORS[r.status];
            return (
              <div
                key={r.name}
                className={`cfroute__agent${revealed ? ' cfroute__agent--on' : ''}`}
                style={revealed ? { background: col.bg, borderColor: col.border } : {}}
              >
                <div className="cfroute__agent-left">
                  <AgentLogo logoType={r.logoType} />
                  <div>
                    <span className="cfroute__agent-name">{r.name}</span>
                    {r.framework && <span className="cfroute__agent-fw">{r.framework}</span>}
                  </div>
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

        {/* Behavior change */}
        <div className={`cfroute__behavior${showBehavior ? ' cfroute__behavior--on' : ''}`}>
          <div className="cfroute__behavior-row cfroute__behavior-row--before">
            <span className="cfroute__behavior-label cfroute__behavior-label--before">Before</span>
            <span className="cfroute__behavior-text">"I'll refactor billing writes."</span>
          </div>
          <div className="cfroute__behavior-arrow">→</div>
          <div className="cfroute__behavior-row cfroute__behavior-row--after">
            <span className="cfroute__behavior-label cfroute__behavior-label--after">After</span>
            <span className="cfroute__behavior-text cfroute__behavior-text--after">"I'll prepare a read-only analysis until the freeze ends."</span>
          </div>
        </div>

        {/* Hot-path chip */}
        <div className="cfroute__hotpath-chip">
          Designed for hot-path agent loops
        </div>

        {/* Footer */}
        <div className={`cfroute__footer${showBehavior ? ' cfroute__footer--done' : ''}`}>
          {showBehavior
            ? <><span className="cfroute__footer-check">✓</span>3 routed · 2 inherited · 2 blocked · 0 manual steps</>
            : phase === 'write'    ? 'waiting for state update...'
            : phase === 'route'   ? 'routing to GlassMem engine...'
            : `evaluating ${ROUTE_AGENTS.length} agents...`
          }
        </div>
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════════════
   INTERACTIVE LIVE DEMO — Section 3
════════════════════════════════════════════════════ */

const DEMO_SCENARIOS = [
  {
    id: 'billing', label: 'Billing migration freeze', color: '#fb923c',
    trigger: {
      agent: 'LangGraph Planner', pip: '#fb923c', framework: 'LangGraph', action: 'writes constraint',
      content: '"Do not modify billing until Stripe migration completes Friday 18:00."',
    },
    agents: [
      { name: 'Claude Code',             pip: '#6ee7b7', framework: 'Claude Code', before: 'Proposing billing writes',                after: 'Preparing read-only analysis. Deferring writes until freeze ends', status: 'allowed'   },
      { name: 'Cursor',                  pip: '#6ee7b7', framework: 'Cursor',      before: 'Editing billing module',                  after: 'Pausing write edits. Read-only mode until Friday',              status: 'allowed'   },
      { name: 'CrewAI Billing Sub-Agent',pip: '#a78bfa', framework: 'CrewAI',      before: 'Spawning: billing task',                  after: 'Inherited freeze at spawn. Executing read-only path only',      status: 'inherited' },
      { name: 'OpenAI Debug Agent',      pip: '#7dd3fc', framework: 'OpenAI SDK',  before: 'Debugging billing sync',                  after: 'Restricted to read-only billing analysis',                     status: 'allowed'   },
      { name: 'Customer Support Agent',  pip: '#94a3b8', framework: '',            before: 'Handling customer queries',               after: 'Operational state not received. Irrelevant scope',             status: 'blocked'   },
      { name: 'External MCP Tool',       pip: '#ef4444', framework: 'MCP',         before: 'Fetching vendor data',                    after: 'Blocked. Sensitive constraint',                                status: 'blocked'   },
    ],
    steps: [
      'LangGraph Planner writes billing freeze to state store',
      'GlassMem evaluates routing for all 6 agents',
      'Claude Code, Cursor, and Debug Agent receive constraint',
      'CrewAI Billing Sub-Agent inherits freeze at spawn',
      'Customer Support and External MCP Tool blocked',
    ],
    behaviorBefore: 'Claude Code proposes billing writes.',
    behaviorAfter:  'Claude Code prepares read-only analysis and defers writes until freeze ends.',
  },
  {
    id: 'redis', label: 'Redis cache failure', color: '#ef4444',
    trigger: {
      agent: 'OpenAI Debug Agent', pip: '#7dd3fc', framework: 'OpenAI SDK', action: 'records failure',
      content: '"Redis cache caused stale billing reads. Do not retry."',
    },
    agents: [
      { name: 'Claude Code',             pip: '#6ee7b7', framework: 'Claude Code', before: 'Considering Redis for billing caching', after: 'Avoiding Redis. Failure propagated. Switching to Postgres',      status: 'allowed'   },
      { name: 'CrewAI Billing Sub-Agent',pip: '#a78bfa', framework: 'CrewAI',      before: 'Planning cache layer for billing',     after: 'Failed approach inherited. Switching to Postgres',              status: 'inherited' },
      { name: 'LangGraph Planner',       pip: '#fb923c', framework: 'LangGraph',   before: 'Designing distributed cache strategy', after: 'Redis removed from plan. Row-level locking instead',            status: 'allowed'   },
      { name: 'Cursor',                  pip: '#6ee7b7', framework: 'Cursor',      before: 'Editing billing module cache layer',   after: 'Removed Redis import. Using Postgres cache fallback',           status: 'allowed'   },
      { name: 'Customer Support Agent',  pip: '#94a3b8', framework: '',            before: 'Handling customer queries',            after: 'Operational state not received. Out of scope',                  status: 'blocked'   },
      { name: 'Marketing Agent',         pip: '#f59e0b', framework: '',            before: 'Writing release copy',                 after: 'Operational state not received. Out of scope',                  status: 'blocked'   },
    ],
    steps: [
      'OpenAI Debug Agent records Redis failure to state store',
      'GlassMem marks Redis as failed approach in billing scope',
      'Claude Code, Cursor, and Planner receive failure state',
      'CrewAI Billing Sub-Agent inherits failed approach at spawn',
      'Customer Support and Marketing agents not routed',
    ],
    behaviorBefore: 'Agents plan Redis-based billing cache.',
    behaviorAfter:  'All billing agents avoid Redis. Postgres row-level locking adopted.',
  },
  {
    id: 'security', label: 'Security incident', color: '#ef4444',
    trigger: {
      agent: 'Security Agent', pip: '#ef4444', framework: 'Custom', action: 'raises alert',
      content: '"PII data exposure detected in export service."',
    },
    agents: [
      { name: 'Security Team Agent', pip: '#6ee7b7', framework: 'Custom',      before: 'Monitoring alerts',                  after: 'Incident response mode activated',                   status: 'allowed'   },
      { name: 'Data Agent',          pip: '#6ee7b7', framework: 'LangGraph',   before: 'Processing export requests',         after: 'Export service suspended. Remediation in progress',   status: 'allowed'   },
      { name: 'Audit Logger',        pip: '#a78bfa', framework: 'MCP',         before: 'Standard logging',                   after: 'Inherited incident state. Full audit trail active',   status: 'inherited' },
      { name: 'Claude Code',         pip: '#94a3b8', framework: 'Claude Code', before: 'Working on feature tasks',           after: 'Blocked. No security clearance for incident scope',  status: 'blocked'   },
      { name: 'External MCP Tool',   pip: '#ef4444', framework: 'MCP',         before: 'Fetching external data',             after: 'Blocked. Sensitive incident state',                  status: 'blocked'   },
      { name: 'Customer Support',    pip: '#94a3b8', framework: '',            before: 'Handling customer queries',          after: 'Blocked. Need-to-know basis only',                   status: 'blocked'   },
    ],
    steps: [
      'Security Agent writes PII exposure alert to state store',
      'GlassMem propagates to security-cleared agents only',
      'Security Team and Data Agent receive incident state',
      'Audit Logger inherits incident state as sub-process',
      'Claude Code, External Tool, Customer Support blocked',
    ],
    behaviorBefore: 'Export service continues processing.',
    behaviorAfter:  'Export suspended. Security and Data agents coordinate remediation.',
  },
  {
    id: 'escalation', label: 'Customer escalation', color: '#fb923c',
    trigger: {
      agent: 'Support Agent', pip: '#94a3b8', framework: 'Custom', action: 'writes escalation',
      content: '"Enterprise customer Acme Corp escalated P1 incident. Block non-essential changes."',
    },
    agents: [
      { name: 'Incident Manager Agent', pip: '#6ee7b7', framework: 'LangGraph', before: 'Managing normal workload',           after: 'P1 incident response activated for Acme Corp',       status: 'allowed'   },
      { name: 'On-call Debug Agent',    pip: '#6ee7b7', framework: 'OpenAI SDK',before: 'Monitoring system health',           after: 'Escalated to Acme Corp incident investigation',      status: 'allowed'   },
      { name: 'Deployment Agent',       pip: '#ef4444', framework: 'Custom',    before: 'Preparing deployment pipeline',     after: 'Blocked. All changes frozen during P1 incident',     status: 'blocked'   },
      { name: 'Feature Agent',          pip: '#ef4444', framework: 'CrewAI',    before: 'Building new features',             after: 'Blocked. Not relevant to P1 incident',               status: 'blocked'   },
      { name: 'Billing Agent',          pip: '#a78bfa', framework: 'Custom',    before: 'Processing billing tasks',          after: 'Partial: read-only mode during escalation window',   status: 'inherited' },
    ],
    steps: [
      'Support Agent writes P1 escalation to state store',
      'GlassMem evaluates all agents for Acme Corp scope',
      'Incident Manager and On-call Debug Agent receive state',
      'Deployment and Feature agents blocked immediately',
      'Billing Agent enters read-only mode for escalation window',
    ],
    behaviorBefore: 'All agents operate normally.',
    behaviorAfter:  'Non-essential work paused. Incident response agents coordinated.',
  },
  {
    id: 'architecture', label: 'Architecture migration', color: '#a78bfa',
    trigger: {
      agent: 'Architect Agent', pip: '#a78bfa', framework: 'LangGraph', action: 'writes decision',
      content: '"Migrate from REST to GraphQL. No new REST endpoints after 2026-06-15."',
    },
    agents: [
      { name: 'Claude Code',         pip: '#6ee7b7', framework: 'Claude Code', before: 'Building a new REST endpoint',     after: 'Switching to GraphQL resolver instead',               status: 'allowed'   },
      { name: 'Cursor',              pip: '#6ee7b7', framework: 'Cursor',      before: 'Editing REST API layer',           after: 'Updating API layer for GraphQL migration',            status: 'allowed'   },
      { name: 'API Agent',           pip: '#fb923c', framework: 'OpenAI SDK',  before: 'Generating REST API docs',         after: 'GraphQL schema generation. Migration active',         status: 'allowed'   },
      { name: 'Review Agent',        pip: '#a78bfa', framework: 'CrewAI',      before: 'Reviewing API change PRs',         after: 'Inherited: flagging new REST endpoints in reviews',   status: 'inherited' },
      { name: 'Docs Agent',          pip: '#6ee7b7', framework: 'Custom',      before: 'Writing REST API documentation',   after: 'Updating docs for GraphQL migration',                status: 'allowed'   },
      { name: 'Legacy Service Agent',pip: '#94a3b8', framework: 'Custom',      before: 'Running legacy REST service',      after: 'Blocked. REST-only agent. Irrelevant to migration',  status: 'blocked'   },
    ],
    steps: [
      'Architect writes REST-to-GraphQL migration decision',
      'GlassMem routes to all API-scope agents',
      'Claude Code, Cursor, API Agent, Docs Agent receive decision',
      'Review Agent inherits: flags new REST endpoint PRs',
      'Legacy Service Agent blocked. REST-only scope.',
    ],
    behaviorBefore: 'Claude Code creates new REST endpoint.',
    behaviorAfter:  'Claude Code builds GraphQL resolver instead. REST endpoint rejected.',
  },
];

const LiveDemo = () => {
  const [scIdx, setScIdx] = useState(0);
  const [step,  setStep]  = useState(-1);
  const sc = DEMO_SCENARIOS[scIdx];
  useEffect(() => { setStep(-1); }, [scIdx]);
  useEffect(() => {
    let t;
    if (step === -1)                      t = setTimeout(() => setStep(0), 1570);
    else if (step < sc.steps.length - 1)  t = setTimeout(() => setStep(s => s + 1), 1060);
    else                                  t = setTimeout(() => setStep(-1), 4000);
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
          <p className="demo__col-label">State update</p>
          <div className="demo__trigger">
            <div className="demo__trigger-header">
              <span className="demo__pip" style={{ background: sc.trigger.pip }}/>
              <strong className="demo__trigger-agent">{sc.trigger.agent}</strong>
              {sc.trigger.framework && <span className="demo__trigger-fw">{sc.trigger.framework}</span>}
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
          {sc.behaviorBefore && (
            <div className="demo__behavior">
              <div className="demo__behavior-before">
                <span className="demo__behavior-label">Before</span>
                <span className="demo__behavior-text">{sc.behaviorBefore}</span>
              </div>
              <div className="demo__behavior-after">
                <span className="demo__behavior-label demo__behavior-label--after">After</span>
                <span className="demo__behavior-text demo__behavior-text--after">{sc.behaviorAfter}</span>
              </div>
            </div>
          )}
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
                    {ag.framework && <span className="demo__agent-fw-badge">{ag.framework}</span>}
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

/* ════════════════════════════════════════════════════
   COMPARISON TABLE
════════════════════════════════════════════════════ */

const COMPARE_ROWS = [
  {
    approach: 'context.md',
    inspectable: '✓', routing: '✗', handoff: '✗', temporal: '✗', crossfw: '✗', lineage: '✗',
    isGlass: false,
  },
  {
    approach: 'Vector DB / memory',
    inspectable: '✓', routing: '✗', handoff: '✗', temporal: '✗', crossfw: '✗', lineage: '✗',
    isGlass: false,
  },
  {
    approach: 'Framework-native memory',
    inspectable: '✓', routing: '~', handoff: '~', temporal: '~', crossfw: '✗', lineage: '✗',
    isGlass: false,
  },
  {
    approach: 'Ad-hoc sub-agents',
    inspectable: '~', routing: '✗', handoff: '✗', temporal: '~', crossfw: '~', lineage: '✗',
    isGlass: false,
  },
  {
    approach: 'GlassMem',
    inspectable: '✓', routing: '✓', handoff: '✓', temporal: '✓', crossfw: '✓', lineage: '✓',
    isGlass: true,
  },
];

const cellClass = (v) => {
  if (v === '✓') return 'ctable__cell ctable__cell--pos';
  if (v === '✗') return 'ctable__cell ctable__cell--neg';
  return 'ctable__cell ctable__cell--neu';
};

const ComparisonTable = () => (
  <div className="ctable">
    <div className="ctable__head">
      <div className="ctable__hcell ctable__hcell--feat">Approach</div>
      <div className="ctable__hcell">Inspectable</div>
      <div className="ctable__hcell">Routing</div>
      <div className="ctable__hcell">Sub-agent handoff</div>
      <div className="ctable__hcell">Temporal</div>
      <div className="ctable__hcell">Cross-framework</div>
      <div className="ctable__hcell">Lineage</div>
    </div>
    {COMPARE_ROWS.map((row) => (
      <div key={row.approach} className={`ctable__row${row.isGlass ? ' ctable__row--em' : ''}`}>
        <div className={`ctable__cell ctable__cell--name${row.isGlass ? ' ctable__cell--glass' : ''}`}>{row.approach}</div>
        <div className={cellClass(row.inspectable)}>{row.inspectable}</div>
        <div className={cellClass(row.routing)}>{row.routing}</div>
        <div className={cellClass(row.handoff)}>{row.handoff}</div>
        <div className={cellClass(row.temporal)}>{row.temporal}</div>
        <div className={cellClass(row.crossfw)}>{row.crossfw}</div>
        <div className={cellClass(row.lineage)}>{row.lineage}</div>
      </div>
    ))}
  </div>
);

/* ════════════════════════════════════════════════════
   OBSERVABILITY PANEL
════════════════════════════════════════════════════ */

const ObsPanel = () => (
  <div className="obspanel">
    <div className="obspanel__chrome">
      <div className="obspanel__chrome-dots">
        <span className="obspanel__macdot" style={{ background: '#ff5f57' }}/>
        <span className="obspanel__macdot" style={{ background: '#febc2e' }}/>
        <span className="obspanel__macdot" style={{ background: '#28c840' }}/>
      </div>
      <span className="obspanel__chrome-title"><Logo size={11}/>glassmem · state-packet · ctx_a2f9c01b</span>
      <span className="obspanel__status">active</span>
    </div>

    <div className="obspanel__content-line">
      "Redis cache caused stale billing reads. Do not retry."
    </div>

    <div className="obspanel__fields">
      {[
        { k: 'source',            v: 'OpenAI Debug Agent',                            color: '#7dd3fc' },
        { k: 'source framework',  v: 'OpenAI Agents SDK',                             color: '#7dd3fc' },
        { k: 'scope',             v: 'project.billing',                               color: '#a78bfa' },
        { k: 'status',            v: 'failed_approach',                               color: '#fb923c' },
        { k: 'created',           v: '3 days ago',                                    color: 'var(--tx-2)' },
        { k: 'routed to',         v: 'Claude Code, CrewAI Billing Sub-Agent',         color: '#6ee7b7' },
        { k: 'blocked from',      v: 'Customer Support Agent, External MCP Tool',     color: '#ef4444' },
        { k: 'reason',            v: 'billing task relevance',                        color: 'var(--tx-2)' },
        { k: 'used by',           v: 'Claude Code (before implementation plan)',      color: '#6ee7b7' },
        { k: 'expires',           v: 'never',                                         color: 'var(--tx-2)' },
        { k: 'supersedes',        v: 'none',                                          color: 'var(--tx-2)' },
        { k: 'related incident',  v: 'INC-1042',                                      color: '#fb923c' },
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
        {['OpenAI Debug Agent', 'GlassMem', 'Claude Code', 'CrewAI Billing Sub-Agent'].map((node, i, arr) => (
          <React.Fragment key={node}>
            <span className="obspanel__trace-node">{node}</span>
            {i < arr.length - 1 && <span className="obspanel__trace-arrow">→</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

/* ════════════════════════════════════════════════════
   CAPABILITY MOCKUPS
════════════════════════════════════════════════════ */

const MockScopedRouting = () => (
  <div className="cap-mock cap-mock--routing">
    <div className="cap-mock__header">
      <span className="cap-mock__label-key">state:</span>
      <span className="cap-mock__label-val">billing freeze</span>
      <span className="cap-mock__scope-tag">scope: project.billing</span>
    </div>
    <div className="cap-mock__rows">
      {[
        { name: 'Claude Code',       status: 'allowed',   color: '#6ee7b7' },
        { name: 'CrewAI Billing Sub',status: 'inherited', color: '#a78bfa' },
        { name: 'OpenAI Debug Agent',status: 'allowed',   color: '#6ee7b7' },
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

const MockCrossFramework = () => (
  <div className="cap-mock cap-mock--crossfw">
    <div className="cap-mock__header">
      <span className="cap-mock__label-key">routing layer</span>
    </div>
    <div className="cap-mock__rows">
      {[
        { name: 'LangGraph', color: '#fb923c' },
        { name: 'CrewAI',    color: '#a78bfa' },
        { name: 'Claude Code', color: '#6ee7b7' },
        { name: 'MCP tools', color: '#7dd3fc' },
      ].map(r => (
        <div key={r.name} className="cap-mock__row">
          <span className="cap-mock__pip" style={{ background: r.color }}/>
          <span className="cap-mock__agent-name">{r.name}</span>
          <span className="cap-mock__status" style={{ color: '#6ee7b7' }}>✓ connected</span>
        </div>
      ))}
    </div>
    <div className="cap-mock__inherit-block cap-mock__inherit-block--yes">
      <span className="cap-mock__inherit-label" style={{ color: '#6ee7b7' }}>one routing layer:</span>
      <span className="cap-mock__inherit-items">all frameworks share operational state</span>
    </div>
  </div>
);

const MockSubAgentInheritance = () => (
  <div className="cap-mock cap-mock--inherit">
    <div className="cap-mock__row cap-mock__row--parent">
      <span className="cap-mock__pip" style={{ background: '#fb923c' }}/>
      <span className="cap-mock__agent-name cap-mock__agent-name--bold">LangGraph Planner</span>
    </div>
    <div className="cap-mock__row cap-mock__row--child">
      <span className="cap-mock__tree-prefix" style={{ color: '#a78bfa' }}>└─</span>
      <span className="cap-mock__pip" style={{ background: '#a78bfa' }}/>
      <span className="cap-mock__agent-name">CrewAI Billing Sub-Agent</span>
    </div>
    <div className="cap-mock__inherit-block cap-mock__inherit-block--yes">
      <span className="cap-mock__inherit-label" style={{ color: '#6ee7b7' }}>inherits:</span>
      <span className="cap-mock__inherit-items">billing freeze · Redis failure · lock strategy</span>
    </div>
    <div className="cap-mock__inherit-block cap-mock__inherit-block--no">
      <span className="cap-mock__inherit-label" style={{ color: '#f87171' }}>not inherited:</span>
      <span className="cap-mock__inherit-items">customer data · auth state</span>
    </div>
  </div>
);

const MockTemporalUpdates = () => (
  <div className="cap-mock cap-mock--temporal">
    <div className="cap-mock__header">
      <span className="cap-mock__label-key">state:</span>
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

const MockSensitiveFiltering = () => (
  <div className="cap-mock cap-mock--filter">
    <div className="cap-mock__header">
      <span className="cap-mock__label-key">state:</span>
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

const MockContextLineage = () => (
  <div className="cap-mock cap-mock--lineage">
    {[
      { agent: 'OpenAI Debug Agent', action: 'wrote',  detail: '"Redis stale reads"',         color: '#7dd3fc' },
      { agent: 'GlassMem',          action: 'routed',  detail: 'Claude Code, Billing Agent',   color: '#6ee7b7' },
      { agent: 'Claude Code',        action: 'used',   detail: 'before implementation plan',   color: '#6ee7b7' },
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

/* ════════════════════════════════════════════════════
   BENTO CAPABILITIES GRID
════════════════════════════════════════════════════ */
const CAPABILITIES = [
  {
    title: 'Scoped routing',
    before: 'Every agent receives the same giant state blob.',
    after:  'Billing state only reaches billing-related agents.',
    mockup: <MockScopedRouting />,
    color: '#6ee7b7',
  },
  {
    title: 'Cross-framework coordination',
    before: 'LangGraph, CrewAI, Claude Code, and MCP tools maintain separate state.',
    after:  'Operational state moves across frameworks through one routing layer.',
    mockup: <MockCrossFramework />,
    color: '#a78bfa',
  },
  {
    title: 'Sub-agent inheritance',
    before: 'Sub-agents start with partial summaries or stale parent state.',
    after:  'Sub-agents inherit the selected slice of task state automatically.',
    mockup: <MockSubAgentInheritance />,
    color: '#fb923c',
  },
  {
    title: 'Temporal updates',
    before: 'Temporary constraints become permanent prompt junk.',
    after:  'State expires or updates automatically.',
    mockup: <MockTemporalUpdates />,
    color: '#fb923c',
  },
  {
    title: 'Sensitive state filtering',
    before: 'Private customer data can leak into external tools.',
    after:  'Policies block sensitive state from the wrong agents.',
    mockup: <MockSensitiveFiltering />,
    color: '#ef4444',
  },
  {
    title: 'State lineage',
    before: 'No one knows what an agent knew when it acted.',
    after:  'Every state packet records source, route, recipient, and consumption.',
    mockup: <MockContextLineage />,
    color: '#7dd3fc',
  },
];

/* ════════════════════════════════════════════════════
   ARCHITECTURE FLOW DIAGRAM
════════════════════════════════════════════════════ */

const ArchitectureFlow = () => (
  <div className="archflow">
    {/* Row 1: Agents */}
    <div className="archflow__layer">
      <span className="archflow__layer-label">Agents and runtimes</span>
      <div className="archflow__chips">
        {['Claude Code', 'Cursor', 'LangGraph', 'CrewAI', 'OpenAI Agents SDK', 'MCP tools', 'Custom agents'].map(n => (
          <span key={n} className="archflow__chip">{n}</span>
        ))}
      </div>
      <span className="archflow__connect-label">connect via MCP / SDK / API</span>
    </div>

    <div className="archflow__arrow">↓</div>

    {/* Row 2: Routing layer */}
    <div className="archflow__layer archflow__layer--core">
      <div className="archflow__core-header">
        <Logo size={16}/>
        <span className="archflow__core-title">GlassMem Routing Layer</span>
      </div>
      <div className="archflow__dims">
        {['scope', 'task', 'agent role', 'framework', 'sensitivity', 'freshness', 'permissions', 'lineage'].map(d => (
          <span key={d} className="archflow__dim">{d}</span>
        ))}
      </div>
    </div>

    <div className="archflow__arrow">↓</div>

    {/* Row 3: Outputs */}
    <div className="archflow__outputs">
      <div className="archflow__output archflow__output--green">
        <span className="archflow__output-label">Allowed state</span>
        <span className="archflow__output-sub">routed to relevant agents</span>
      </div>
      <div className="archflow__output archflow__output--purple">
        <span className="archflow__output-label">Inherited state</span>
        <span className="archflow__output-sub">propagated to sub-agents</span>
      </div>
      <div className="archflow__output archflow__output--red">
        <span className="archflow__output-label">Blocked state</span>
        <span className="archflow__output-sub">filtered from wrong agents</span>
      </div>
    </div>

    <div className="archflow__arrow">↓</div>

    {/* Row 4: Store */}
    <div className="archflow__layer archflow__layer--store">
      <span className="archflow__layer-label">Scoped Operational State Store</span>
      <span className="archflow__store-sub">typed events, temporal validity, immutable history</span>
    </div>

    <div className="archflow__arrow">↓</div>

    {/* Row 5: Observability */}
    <div className="archflow__layer archflow__layer--obs">
      <span className="archflow__layer-label">Observability, Traces, Lineage events</span>
      <div className="archflow__chips">
        {['Langfuse', 'Arize', 'Helicone', 'OpenTelemetry'].map(n => (
          <span key={n} className="archflow__chip archflow__chip--obs">{n}</span>
        ))}
      </div>
    </div>

    {/* Architecture notes */}
    <div className="archflow__notes">
      {[
        { title: 'Where state lives', text: 'GlassMem supports local, self-hosted, or managed deployment models. You choose where operational state lives.' },
        { title: 'How agents connect', text: 'MCP, SDK, API. Framework-agnostic by design.' },
        { title: 'How routing works', text: 'GlassMem evaluates scope, task, framework, sensitivity, freshness, and policy before injecting state.' },
        { title: 'Latency philosophy', text: 'Designed for hot-path agent loops. Routing stays lightweight, scoped, and cacheable. No latency numbers promised — architecture is designed for low-overhead injection.' },
        { title: 'Preventing garbage state', text: 'Temporary state expires. Superseded state stops routing. Invalid state can be reviewed and blocked.' },
        { title: 'Observability', text: 'Every routing decision emits traceable events exportable into Langfuse, Arize, Helicone, or OpenTelemetry-compatible systems.' },
      ].map((note, i) => (
        <div key={i} className="archflow__note">
          <span className="archflow__note-num">0{i + 1}</span>
          <div>
            <span className="archflow__note-title">{note.title}</span>
            <span className="archflow__note-text">{note.text}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ════════════════════════════════════════════════════
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
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen,  setMobOpen]  = useState(false);
  const [ctaEmail, setCtaEmail] = useState('');
  const [ctaSent,  setCtaSent]  = useState(false);

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
            <a href="#dx"            className="nav__link">DX</a>
            <a href="#demo"          className="nav__link">Demo</a>
            <a href="#architecture"  className="nav__link">Architecture</a>
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
          {['Problem','DX','Demo','Architecture','Observability','Docs'].map(l => (
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
                Context orchestration for agent systems
              </div>
              <h1 className="h1 hero__h1 enter-2">
                Context orchestration<br/>for all your agents
              </h1>
              <p className="body-lg hero__sub enter-3">
                GlassMem coordinates scoped operational state across agents, sub-agents, frameworks, and tools. No blindly shared memory.
              </p>
              <p className="hero__differentiator enter-3">
                Not a vector DB wrapper. Not another memory bucket. A control plane for agent state.
              </p>
              <p className="hero__pain enter-3">
                Sub-agents, Claude Code, and internal agents silently drift out of sync every day.
              </p>
              <div className="hero__trust enter-4">
                Scoped. Traceable. Temporal. Cross-framework.
              </div>
              <ul className="hero__pills enter-4">
                {[
                  'route only relevant state',
                  'prevent stale propagation',
                  'inherit state into sub-agents',
                  'coordinate across frameworks',
                  'trace what every agent knew',
                ].map(pill => (
                  <li key={pill} className="hero__pill">
                    <span className="hero__pill-check">✓</span>{pill}
                  </li>
                ))}
              </ul>
              <div className="hero__ctas enter-4">
                <a href="/signup" className="btn btn--em btn--lg">Get started</a>
                <a href="#dx"   className="btn btn--ghost btn--lg">See the DX</a>
              </div>
            </div>
            <div className="hero__viz-col enter-4">
              <ContextFlowViz/>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT GLASSMEM IS NOT */}
      <section id="not-memory" className="sec">
        <div className="w">
          <div className="notsec reveal">
            <div className="notsec__header">
              <span className="label">// positioning</span>
              <h2 className="h2">What GlassMem is NOT</h2>
            </div>
            <div className="notsec__grid">
              {[
                {
                  title: 'Not a vector DB wrapper',
                  body: 'GlassMem is not trying to retrieve the most similar chunk. It decides which operational state each agent is allowed to see.',
                },
                {
                  title: 'Not shared memory',
                  body: 'Not every agent should inherit every decision. Uncontrolled memory creates state pollution.',
                },
                {
                  title: 'Not framework-specific memory',
                  body: 'Framework-native memory works inside one runtime. GlassMem coordinates state across frameworks and tools.',
                },
                {
                  title: 'Not another giant prompt',
                  body: 'Agents receive selected state slices, not the full history of the system.',
                },
              ].map(card => (
                <div key={card.title} className="notsec__card">
                  <div className="notsec__card-icon"><NotXIcon /></div>
                  <p className="notsec__card-title">{card.title}</p>
                  <p className="notsec__card-body">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: SHOW ME THE DX */}
      <section id="dx" className="sec sec--alt">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Developer experience</span>
              <h2 className="h2">Show me the DX</h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '44ch' }}>
              Start with one workflow. Write scoped state. Let GlassMem decide what each agent receives.
            </p>
          </div>
          <div className="dxsec reveal">
            <div className="dxsec__block">
              <div className="dxsec__block-label">Write state</div>
              <div className="dxsec__code">
                <span className="dxsec__kw">await</span> glassmem.state.<span className="dxsec__fn">write</span>({'({'}<br/>
                {'  '}<span className="dxsec__key">scope</span>: <span className="dxsec__str">"project.billing"</span>,<br/>
                {'  '}<span className="dxsec__key">type</span>: <span className="dxsec__str">"temporary_constraint"</span>,<br/>
                {'  '}<span className="dxsec__key">content</span>: <span className="dxsec__str">"Do not modify billing until Stripe migration completes"</span>,<br/>
                {'  '}<span className="dxsec__key">expiresAt</span>: <span className="dxsec__str">"2026-06-14T18:00:00Z"</span>,<br/>
                {'  '}<span className="dxsec__key">sensitivity</span>: <span className="dxsec__str">"internal"</span><br/>
                {'})'}<br/>
                <br/>
                <span className="dxsec__kw">const</span> <span className="dxsec__key">state</span> = <span className="dxsec__kw">await</span> glassmem.state.<span className="dxsec__fn">forAgent</span>({'({'}<br/>
                {'  '}<span className="dxsec__key">agent</span>: <span className="dxsec__str">"claude-code"</span>,<br/>
                {'  '}<span className="dxsec__key">framework</span>: <span className="dxsec__str">"mcp"</span>,<br/>
                {'  '}<span className="dxsec__key">task</span>: <span className="dxsec__str">"refactor billing sync"</span><br/>
                {'})'}
              </div>
            </div>
            <div className="dxsec__block">
              <div className="dxsec__block-label">Receive scoped state</div>
              <div className="dxsec__code">
                {'{'}<br/>
                {'  '}<span className="dxsec__key">allowed</span>: [<br/>
                {'    '}<span className="dxsec__str">"billing freeze until Friday"</span>,<br/>
                {'    '}<span className="dxsec__str">"Redis cache caused stale billing reads"</span>,<br/>
                {'    '}<span className="dxsec__str">"Use Postgres row-level locking"</span><br/>
                {'  '}],<br/>
                {'  '}<span className="dxsec__key">blocked</span>: [<br/>
                {'    '}<span className="dxsec__str">"customer PII"</span>,<br/>
                {'    '}<span className="dxsec__str">"support-only escalation notes"</span><br/>
                {'  '}],<br/>
                {'  '}<span className="dxsec__key">traceId</span>: <span className="dxsec__str">"ctx_trace_7f3a"</span><br/>
                {'}'}
              </div>
            </div>
          </div>
          <p className="dxsec__tagline reveal">MCP · SDK · REST API — framework-agnostic by design.</p>
        </div>
      </section>

      {/* SECTION: ANTI-MEMORY POSITIONING */}
      <section id="problem" className="sec">
        <div className="w">
          <div className="antimem reveal">
            <div className="antimem__left">
              <span className="label">The problem</span>
              <h2 className="h2">Sharing all memory between agents is a trap</h2>
              <p className="body-lg" style={{ marginTop: 16, maxWidth: '44ch' }}>
                Agent engineers already know the problem is not storing more state. It is controlling where operational state flows.
              </p>
              <p className="antimem__keyline">
                GlassMem is not a shared memory bucket.<br/>It is a control plane for agent state.
              </p>
            </div>
            <div className="antimem__cards">
              {[
                {
                  title: 'State pollution',
                  desc: 'When every agent inherits everything, irrelevant state becomes instruction noise.',
                  Icon: IconStatePollution,
                },
                {
                  title: 'Broken handoffs',
                  desc: 'Sub-agents and tools lose critical constraints when work moves between runtimes.',
                  Icon: IconBrokenHandoff,
                },
                {
                  title: 'Stale propagation',
                  desc: 'Expired decisions and temporary constraints silently spread.',
                  Icon: IconStalePropagation,
                },
                {
                  title: 'Debugging black boxes',
                  desc: 'When an agent acts on hidden state, you cannot explain why it made a decision.',
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

      {/* SECTION: WHY STATE BREAKS */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Why state coordination breaks</span>
              <h2 className="h2">Why state breaks<br/>in real agent systems</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              Your agents already span frameworks. Their operational state does not.
            </p>
          </div>
          <div className="reveal">
            <ComparisonTable/>
          </div>
          <p className="ctable__keyline reveal">Storage is solved. Coordination is not.</p>
        </div>
      </section>

      {/* SECTION: LIVE DEMO */}
      <section id="demo" className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Live coordination demo</span>
              <h2 className="h2">One update.<br/>Only the right agents adapt.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              Select a scenario to see GlassMem route operational state across distributed agents in real time.
            </p>
          </div>
          <div className="reveal"><LiveDemo/></div>
        </div>
      </section>

      {/* SECTION: START WITH ONE PAINFUL WORKFLOW */}
      <section id="workflows" className="sec sec--alt">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Use cases</span>
              <h2 className="h2">Start with one painful workflow</h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '44ch' }}>
              You do not need to migrate your whole agent stack. Start with the workflow where state drift already hurts.
            </p>
          </div>
          <div className="workflows__grid reveal">
            {[
              {
                title: 'Billing freezes',
                body: 'Keep migration constraints synchronized across planners, coders, debuggers, and sub-agents.',
              },
              {
                title: 'Failed approach tracking',
                body: 'Prevent agents from retrying Redis, Prisma, GraphQL, or migration strategies that already failed.',
              },
              {
                title: 'Incident coordination',
                body: 'Route incident learnings to debugging agents without exposing unrelated customer state.',
              },
              {
                title: 'Sub-agent handoffs',
                body: 'Pass selected parent-task state into spawned agents without copying context.md.',
              },
            ].map(card => (
              <div key={card.title} className="workflows__card">
                <span className="workflows__card-dot"/>
                <p className="workflows__card-title">{card.title}</p>
                <p className="workflows__card-body">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: CAPABILITIES */}
      <section id="capabilities" className="sec">
        <div className="w">
          <div className="feat__intro reveal">
            <span className="label">Core primitives</span>
            <h2 className="h2">Controlled state propagation<br/>for agent systems</h2>
            <p className="body-lg" style={{ maxWidth:'48ch', marginTop:14 }}>
              Six primitives that solve real coordination failures in distributed agent systems.
            </p>
          </div>
          <div className="bento reveal">
            {CAPABILITIES.map(cap => (
              <div key={cap.title} className="bento__card">
                <div className="bento__mockup">{cap.mockup}</div>
                <p className="bento__title">{cap.title}</p>
                <div className="bento__ba">
                  <div className="bento__ba-row bento__ba-row--before">
                    <span className="bento__ba-label">Before GlassMem:</span>
                    <span className="bento__ba-text">{cap.before}</span>
                  </div>
                  <div className="bento__ba-row bento__ba-row--after">
                    <span className="bento__ba-label bento__ba-label--after">With GlassMem:</span>
                    <span className="bento__ba-text bento__ba-text--after">{cap.after}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: ARCHITECTURE */}
      <section id="architecture" className="sec sec--alt">
        <div className="w">
          <div className="fail__intro reveal" style={{ marginBottom: 56 }}>
            <div>
              <span className="label">Architecture</span>
              <h2 className="h2">How GlassMem coordinates<br/>state across frameworks</h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '44ch' }}>
              GlassMem sits between your agents and their state. Every read and write passes through a routing layer that decides what each agent sees.
            </p>
          </div>
          <div className="reveal">
            <ArchitectureFlow/>
          </div>
        </div>
      </section>

      {/* SECTION: OBSERVABILITY */}
      <section id="observability" className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Observability</span>
              <h2 className="h2">Debug state<br/>like you debug code</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              GlassMem shows what operational state each agent had when it acted.
            </p>
          </div>
          <div className="obssec reveal">
            <div className="obssec__panel">
              <ObsPanel/>
            </div>
            <div className="obssec__prose">
              <p className="body-lg" style={{ marginBottom: 20 }}>
                Every state packet records source, propagation path, blocked agents, expiry, and the agent that consumed it.
              </p>
              <div className="obssec__items">
                {[
                  { label: 'Who wrote it',    val: 'source agent + framework + timestamp' },
                  { label: 'Where it went',   val: 'routed to + blocked from' },
                  { label: 'Why it routed',   val: 'scope + task relevance reason' },
                  { label: 'When it expires', val: 'temporal validity window' },
                  { label: 'Who consumed it', val: 'used by agent + decision context' },
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
              <p className="obssec__copy">
                What state did this agent have when it made that decision?
              </p>
              <p className="obssec__integrations">
                Export traces to Langfuse, Arize, Helicone, or OpenTelemetry-compatible pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FIELD QUOTES */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="field__intro reveal">
            <span className="label">// from the field</span>
            <h2 className="h2">What we heard from agent engineers</h2>
            <p className="body-lg" style={{ maxWidth: '52ch', marginTop: 14 }}>
              Patterns from teams already coordinating state manually across context.md, sub-agents, frameworks, and tools.
            </p>
          </div>
          <div className="field__grid reveal">
            {[
              {
                quote: "We already had memory. The problem was keeping temporary constraints synchronized across agents.",
                role: "Founding Engineer building agents",
              },
              {
                quote: "Our sub-agents solved the context window problem and created a handoff problem.",
                role: "Multi-agent Systems Engineer",
              },
              {
                quote: "We were copying context.md between LangGraph, Claude Code, and MCP tools.",
                role: "AI Platform Engineer",
              },
              {
                quote: "Shared memory made agents noisier. We needed scoped propagation.",
                role: "Agent Infrastructure Lead",
              },
              {
                quote: "The hard part was not storage. It was deciding what each agent should inherit.",
                role: "Staff Engineer",
              },
            ].map((q, i) => (
              <div key={i} className="field__card">
                <div className="field__quote-icon">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                    <path d="M0 16V9.6C0 4.267 2.933 1.067 8.8 0L9.6 1.6C7.2 2.267 5.6 3.467 4.8 5.2C4 6.933 3.733 8.667 4 10.4H8V16H0ZM12 16V9.6C12 4.267 14.933 1.067 20.8 0L21.6 1.6C19.2 2.267 17.6 3.467 16.8 5.2C16 6.933 15.733 8.667 16 10.4H20V16H12Z" fill="#6ee7b7" fillOpacity="0.4"/>
                  </svg>
                </div>
                <p className="field__card-quote">{q.quote}</p>
                <p className="field__card-role">{q.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: BUILT FOR EARLY TEAMS */}
      <section className="sec">
        <div className="w">
          <div className="earlyteam reveal">
            <span className="label">Adoption</span>
            <h2 className="h2 earlyteam__h2">Built for early teams, not massive migrations</h2>
            <p className="body-lg earlyteam__body">
              GlassMem is designed to be adopted incrementally. Start with one source of operational state, one workflow, and one agent handoff. Expand when coordination becomes painful.
            </p>
            <ul className="earlyteam__list">
              {[
                'no full rewrite',
                'no framework lock-in',
                'works alongside existing memory',
                'compatible with context.md workflows',
                'built for multi-agent systems already emerging',
              ].map(item => (
                <li key={item} className="earlyteam__item">
                  <span className="earlyteam__check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="/signup" className="btn btn--em btn--lg earlyteam__cta">Get started</a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sec cta">
        <div className="w">
          <div className="cta__inner" style={{ gridTemplateColumns:'1fr' }}>
            <div className="reveal" style={{ textAlign:'center', maxWidth:560, margin:'0 auto' }}>
              <span className="label">Get started</span>
              <h2 className="cta__h2">Coordinate state before<br/>your agents drift apart</h2>
              <p className="body-lg cta__sub">
                GlassMem gives distributed agents scoped, traceable, temporal operational state across frameworks, tools, and sessions.
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
                {l:'Docs',          h:'https://docs.glassmem.ai'},
                {l:'Architecture',  h:'#architecture'},
                {l:'Observability', h:'#observability'},
                {l:'Contact',       h:'/contact'},
                {l:'Blog',          h:'#'},
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
