import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

/* ════════════════════════════════════════════════════
   HERO VISUALIZATION
════════════════════════════════════════════════════ */

const HERO_AGENTS = [
  { name: 'LangGraph Planner',         pip: '#fb923c', status: 'source',   reason: '',                          framework: 'LangGraph',  logoType: 'langgraph' },
  { name: 'Claude Code',               pip: '#6ee7b7', status: 'allowed',  reason: 'task touches billing',      framework: 'Claude Code',logoType: 'claude' },
  { name: 'CrewAI Billing Sub-Agent',  pip: '#a78bfa', status: 'inherited',reason: 'spawned under billing task',framework: 'CrewAI',     logoType: 'crewai' },
  { name: 'Customer Support Agent',    pip: '#94a3b8', status: 'blocked',  reason: 'out of scope',              framework: '',           logoType: 'support' },
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
        <div className="cfroute__source-card">
          <div className="cfroute__source-header">
            <span className="cfroute__pip" style={{ background: '#fb923c' }}/>
            <strong className="cfroute__source-agent">LangGraph Planner</strong>
            <span className="cfroute__source-verb">writes constraint</span>
          </div>
          <p className="cfroute__source-text">"Billing freeze until Friday. Stripe migration active."</p>
          <span className="cfroute__source-scope">scope: project.billing · temporary constraint</span>
        </div>

        <div className="cfroute__connector">
          <div className={`cfroute__conn-line${flowing ? ' cfroute__conn-line--active' : ''}`}/>
          <div className={`cfroute__conn-hub${distributing ? ' cfroute__conn-hub--active' : ''}`}>
            <Logo size={14}/>
            <span className="cfroute__hub-name">GlassMem</span>
            <span className="cfroute__hub-sub">Context Orchestrator</span>
          </div>
          <div className={`cfroute__conn-line${distributing ? ' cfroute__conn-line--active' : ''}`}/>
        </div>

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

        <div className="cfroute__hotpath-chip">
          Designed for hot-path agent loops
        </div>

        <div className={`cfroute__footer${showBehavior ? ' cfroute__footer--done' : ''}`}>
          {showBehavior
            ? <><span className="cfroute__footer-check">✓</span>1 allowed · 1 inherited · 1 blocked · 0 manual steps</>
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
   INTERACTIVE LIVE DEMO
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

/* ── Logos ── */
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

/* ── Shared Nav component ── */
export function SiteNav({ scrolled, mobOpen, setMobOpen }) {
  return (
    <nav className="nav" style={{ borderBottomColor: scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)' }}>
      <div className="nav__row">
        <a href="/" className="nav__logo"><Logo size={24}/><span className="nav__wordmark">GlassMem</span></a>
        <div className="nav__links">
          <a href="/#problem"       className="nav__link">Problem</a>
          <a href="/#demo"          className="nav__link">Demo</a>
          <Link to="/dx"            className="nav__link">DX</Link>
          <Link to="/architecture"  className="nav__link">Architecture</Link>
          <Link to="/thesis"        className="nav__link">Thesis</Link>
          <Link to="/observability" className="nav__link">Observability</Link>
        </div>
        <div className="nav__right">
          <Link to="/signup" className="btn btn--em btn--sm">Get started</Link>
        </div>
        <button className="nav__mob-toggle" onClick={() => setMobOpen(o => !o)} aria-label="Menu">{mobOpen ? '✕' : '☰'}</button>
      </div>
      <div className={`nav__mob-menu${mobOpen ? ' open' : ''}`}>
        <a href="/#problem" className="nav__mob-link" onClick={() => setMobOpen(false)}>Problem</a>
        <a href="/#demo"    className="nav__mob-link" onClick={() => setMobOpen(false)}>Demo</a>
        <Link to="/dx"            className="nav__mob-link" onClick={() => setMobOpen(false)}>DX</Link>
        <Link to="/architecture"  className="nav__mob-link" onClick={() => setMobOpen(false)}>Architecture</Link>
        <Link to="/thesis"        className="nav__mob-link" onClick={() => setMobOpen(false)}>Thesis</Link>
        <Link to="/observability" className="nav__mob-link" onClick={() => setMobOpen(false)}>Observability</Link>
      </div>
    </nav>
  );
}

/* ── Shared Footer ── */
export function SiteFooter() {
  return (
    <>
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

      <div className="prefooter"/>

      <footer className="footer2">
        <div className="footer2__inner">
          <div className="footer2__top">
            <div className="footer2__left">
              <a href="/" className="footer2__brand"><Logo size={18}/><span className="footer2__wordmark">GlassMem</span></a>
            </div>
            <nav className="footer2__nav">
              <Link to="/dx"            className="footer2__nav-link">DX</Link>
              <Link to="/architecture"  className="footer2__nav-link">Architecture</Link>
              <Link to="/thesis"        className="footer2__nav-link">Thesis</Link>
              <Link to="/observability" className="footer2__nav-link">Observability</Link>
              <Link to="/contact"       className="footer2__nav-link">Contact</Link>
            </nav>
          </div>
          <div className="footer2__bottom">
            <div className="footer2__status"><span className="footer2__status-dot"/>All systems operational</div>
            <span className="footer2__copy">2026 GlassMem</span>
          </div>
        </div>
      </footer>
    </>
  );
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
  const [roadmapOpen, setRoadmapOpen] = useState(false);
  const [roadmapSent, setRoadmapSent] = useState(false);
  const [roadmapData, setRoadmapData] = useState({ email: '', stack: '', pain: '', deepdive: false });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    if (!roadmapOpen) return;
    const handler = (e) => { if (e.key === 'Escape') setRoadmapOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [roadmapOpen]);

  const handleCtaSubmit = (e) => {
    e.preventDefault();
    if (ctaEmail) setCtaSent(true);
  };

  return (
    <div>

      <SiteNav scrolled={scrolled} mobOpen={mobOpen} setMobOpen={setMobOpen} />

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
              <div className="hero__ctas enter-4">
                <button className="btn btn--em btn--lg" onClick={() => setRoadmapOpen(true)}>Shape Roadmap</button>
                <Link to="/thesis" className="btn btn--ghost btn--lg">Read the Thesis</Link>
              </div>
            </div>
            <div className="hero__viz-col enter-4">
              <ContextFlowViz/>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PROBLEM */}
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
              <div style={{ marginTop: 24 }}>
                <Link to="/thesis" className="btn btn--ghost btn--sm">Read why shared memory breaks →</Link>
              </div>
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

      {/* SECTION: LIVE DEMO */}
      <section id="demo" className="sec sec--alt">
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
          <div style={{ marginTop: 32 }} className="reveal">
            <Link to="/architecture" className="btn btn--ghost btn--sm">See how routing works →</Link>
          </div>
        </div>
      </section>

      {/* SECTION: CORE PRIMITIVES */}
      <section className="sec">
        <div className="w">
          <div className="feat__intro reveal">
            <span className="label">Core primitives</span>
            <h2 className="h2">Controlled state propagation<br/>for agent systems</h2>
            <p className="body-lg" style={{ maxWidth:'48ch', marginTop:14 }}>
              Four primitives that solve the most common coordination failures in distributed agent systems.
            </p>
          </div>
          <div className="prim-bento reveal">
            {/* Card 1: Scoped routing — featured/large */}
            <div className="prim-bento__card prim-bento__card--featured">
              <div className="prim-bento__visual">
                <div className="prim-bento__route-source">
                  <span className="prim-bento__route-badge" style={{ borderColor:'rgba(251,146,60,0.4)', color:'#fb923c', background:'rgba(251,146,60,0.08)' }}>billing constraint</span>
                  <span className="prim-bento__route-scope">scope: project.billing</span>
                </div>
                <div className="prim-bento__route-arrow">
                  <span className="prim-bento__route-line"/>
                </div>
                <div className="prim-bento__route-hub">
                  <span className="prim-bento__route-hub-label">GlassMem</span>
                </div>
                <div className="prim-bento__route-arrow">
                  <span className="prim-bento__route-line"/>
                </div>
                <div className="prim-bento__route-outputs">
                  <div className="prim-bento__route-row" style={{ color:'#6ee7b7', borderColor:'rgba(110,231,183,0.2)', background:'rgba(110,231,183,0.06)' }}>
                    <span className="prim-bento__route-icon">✓</span>
                    <span>Claude Code</span>
                    <span className="prim-bento__route-status">allowed</span>
                  </div>
                  <div className="prim-bento__route-row" style={{ color:'#a78bfa', borderColor:'rgba(167,139,250,0.2)', background:'rgba(167,139,250,0.06)' }}>
                    <span className="prim-bento__route-icon">↓</span>
                    <span>CrewAI Billing Sub-Agent</span>
                    <span className="prim-bento__route-status">inherited</span>
                  </div>
                  <div className="prim-bento__route-row" style={{ color:'#94a3b8', borderColor:'rgba(148,163,184,0.15)', background:'rgba(148,163,184,0.04)' }}>
                    <span className="prim-bento__route-icon">✗</span>
                    <span>Customer Support</span>
                    <span className="prim-bento__route-status">blocked</span>
                  </div>
                </div>
              </div>
              <p className="prim-bento__title">Scoped routing</p>
              <p className="prim-bento__copy">Only the agents that need state receive it.</p>
            </div>
            {/* Card 2: Cross-framework */}
            <div className="prim-bento__card">
              <div className="prim-bento__visual prim-bento__visual--hub">
                <div className="prim-bento__hub-center">GlassMem</div>
                <div className="prim-bento__hub-pills">
                  {['LangGraph','CrewAI','Claude Code','MCP'].map(fw => (
                    <span key={fw} className="prim-bento__hub-pill">{fw}</span>
                  ))}
                </div>
              </div>
              <p className="prim-bento__title">Cross-framework</p>
              <p className="prim-bento__copy">State flows across runtimes through one layer.</p>
            </div>
            {/* Card 3: Sub-agent inheritance */}
            <div className="prim-bento__card">
              <div className="prim-bento__visual prim-bento__visual--tree">
                <div className="prim-bento__tree-parent">
                  <span className="prim-bento__tree-dot" style={{ background:'#fb923c' }}/>
                  <span className="prim-bento__tree-name">Planner Agent</span>
                </div>
                <div className="prim-bento__tree-connector"/>
                <div className="prim-bento__tree-child">
                  <span className="prim-bento__tree-dot" style={{ background:'#a78bfa' }}/>
                  <div>
                    <span className="prim-bento__tree-name">Billing Sub-Agent</span>
                    <span className="prim-bento__tree-badge">inherits: billing freeze</span>
                  </div>
                </div>
              </div>
              <p className="prim-bento__title">Sub-agent inheritance</p>
              <p className="prim-bento__copy">Spawn agents with selected parent-task state.</p>
            </div>
            {/* Card 4: State lineage */}
            <div className="prim-bento__card">
              <div className="prim-bento__visual prim-bento__visual--trace">
                {['Debug Agent','GlassMem','Claude Code'].map((node, i, arr) => (
                  <React.Fragment key={node}>
                    <span className="prim-bento__trace-node">{node}</span>
                    {i < arr.length - 1 && <span className="prim-bento__trace-arrow">→</span>}
                  </React.Fragment>
                ))}
                <div className="prim-bento__trace-ts">ctx_7f3a · 2 min ago</div>
              </div>
              <p className="prim-bento__title">State lineage</p>
              <p className="prim-bento__copy">Every propagation event is traceable.</p>
            </div>
          </div>
          <div style={{ marginTop: 32 }} className="reveal">
            <Link to="/architecture" className="btn btn--ghost btn--sm">See the architecture →</Link>
          </div>
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
              You do not need to replace your stack.
            </p>
          </div>
          <div className="workflow-bento reveal">
            {/* Card 1: Billing freezes — wide/featured */}
            <div className="workflow-bento__card workflow-bento__card--featured">
              <div className="workflow-bento__visual">
                <div className="workflow-bento__constraint">
                  <div className="workflow-bento__constraint-row">
                    <span className="workflow-bento__constraint-key">constraint:</span>
                    <span className="workflow-bento__constraint-val" style={{ color:'#fb923c' }}>billing freeze</span>
                  </div>
                  <div className="workflow-bento__constraint-row">
                    <span className="workflow-bento__constraint-key">scope:</span>
                    <span className="workflow-bento__constraint-val" style={{ color:'#a78bfa' }}>project.billing</span>
                  </div>
                  <div className="workflow-bento__constraint-row">
                    <span className="workflow-bento__constraint-key">expires:</span>
                    <span className="workflow-bento__constraint-val">Friday 18:00</span>
                  </div>
                  <div className="workflow-bento__constraint-row">
                    <span className="workflow-bento__constraint-key">status:</span>
                    <span className="workflow-bento__constraint-val" style={{ color:'#6ee7b7' }}>active</span>
                  </div>
                </div>
              </div>
              <p className="workflow-bento__title">Billing freezes</p>
              <p className="workflow-bento__copy">Keep migration constraints in sync across planners, coders, and sub-agents.</p>
            </div>
            {/* Card 2: Failed approach tracking */}
            <div className="workflow-bento__card">
              <div className="workflow-bento__visual">
                <div className="workflow-bento__blocked-list">
                  {[
                    { label: 'Redis cache retry', age: 'blocked 2h ago' },
                    { label: 'GraphQL migration', age: 'blocked 1d ago' },
                    { label: 'Stripe direct write', age: 'blocked 3d ago' },
                  ].map(item => (
                    <div key={item.label} className="workflow-bento__blocked-row">
                      <span className="workflow-bento__blocked-x">✗</span>
                      <span className="workflow-bento__blocked-label">{item.label}</span>
                      <span className="workflow-bento__blocked-age">{item.age}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="workflow-bento__title">Failed approach tracking</p>
              <p className="workflow-bento__copy">Prevent agents from retrying what already failed.</p>
            </div>
            {/* Card 3: Incident coordination */}
            <div className="workflow-bento__card">
              <div className="workflow-bento__visual">
                <div className="workflow-bento__incident-source">
                  <span className="workflow-bento__incident-dot"/>
                  <span className="workflow-bento__incident-label">incident alert</span>
                </div>
                <div className="workflow-bento__incident-routes">
                  <div className="workflow-bento__incident-row" style={{ color:'#6ee7b7', borderColor:'rgba(110,231,183,0.2)' }}>
                    <span>✓</span><span>Security Agent</span>
                  </div>
                  <div className="workflow-bento__incident-row" style={{ color:'#6ee7b7', borderColor:'rgba(110,231,183,0.2)' }}>
                    <span>✓</span><span>Data Agent</span>
                  </div>
                  <div className="workflow-bento__incident-row" style={{ color:'#94a3b8', borderColor:'rgba(148,163,184,0.12)' }}>
                    <span>✗</span><span>Feature Agent</span>
                  </div>
                  <div className="workflow-bento__incident-row" style={{ color:'#94a3b8', borderColor:'rgba(148,163,184,0.12)' }}>
                    <span>✗</span><span>Claude Code</span>
                  </div>
                </div>
              </div>
              <p className="workflow-bento__title">Incident coordination</p>
              <p className="workflow-bento__copy">Route incident learnings without leaking unrelated state.</p>
            </div>
            {/* Card 4: Sub-agent handoffs */}
            <div className="workflow-bento__card">
              <div className="workflow-bento__visual">
                <div className="workflow-bento__handoff-tree">
                  <div className="workflow-bento__handoff-parent">
                    <span className="workflow-bento__handoff-dot" style={{ background:'#fb923c' }}/>
                    <span>Planner Agent</span>
                  </div>
                  <div className="workflow-bento__handoff-branch"/>
                  <div className="workflow-bento__handoff-child">
                    <span className="workflow-bento__handoff-dot" style={{ background:'#a78bfa' }}/>
                    <div>
                      <div>Debug Sub-Agent</div>
                      <div className="workflow-bento__handoff-inherits">inherits: billing freeze, Redis failure</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="workflow-bento__title">Sub-agent handoffs</p>
              <p className="workflow-bento__copy">Pass selected state into spawned agents automatically.</p>
            </div>
          </div>
          <div style={{ marginTop: 32 }} className="reveal">
            <Link to="/dx" className="btn btn--ghost btn--sm">See the developer experience →</Link>
          </div>
        </div>
      </section>

      {/* SECTION: TESTIMONIALS */}
      <section className="sec">
        <div className="w">
          <div className="field__intro reveal">
            <span className="label">// from the field</span>
            <h2 className="h2">What we heard from agent engineers</h2>
            <p className="body-lg" style={{ maxWidth: '52ch', marginTop: 14 }}>
              Patterns from teams already coordinating state manually across context.md, sub-agents, frameworks, and tools.
            </p>
          </div>
          <div className="editorial reveal">
            {[
              {
                quote: "We already had memory. The problem was keeping temporary constraints synchronized across agents.",
                name: "Armend Avdijaj",
                role: "vibe coder, founder at GlassFlow",
                photo: "/customer-photos/armend.jpg",
                logo: "/customer-logos/glassflow.svg",
              },
              {
                quote: "Our sub-agents solved the context window problem and created a handoff problem.",
                name: "Andres Almansa",
                role: "Founder at Restack",
                photo: "/customer-photos/andres.jpg",
                logo: "/customer-logos/restack.svg",
              },
              {
                quote: "We were copying context.md between LangGraph, Claude Code, and MCP tools.",
                name: "Ingo Marquardt",
                role: "CTO and founder at NuBrain",
                photo: "/customer-photos/ingo.jpg",
                logo: "/customer-logos/nubrain.svg",
              },
            ].map((q, i, arr) => (
              <React.Fragment key={q.name}>
                <div className="editorial__item">
                  <p className="editorial__quote">{q.quote}</p>
                  <div className="editorial__author">
                    {q.photo ? (
                      <img src={q.photo} alt={q.name} className="editorial__photo" onError={e => e.currentTarget.style.display='none'} />
                    ) : (
                      <div className="editorial__initials">
                        {q.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                    <div className="editorial__author-info">
                      <span className="editorial__name">{q.name}</span>
                      <span className="editorial__role">{q.role}</span>
                    </div>
                    {q.logo && (
                      <img src={q.logo} alt="" className="editorial__logo" onError={e => e.currentTarget.style.display='none'} />
                    )}
                  </div>
                </div>
                {i < arr.length - 1 && <div className="editorial__divider"/>}
              </React.Fragment>
            ))}
          </div>
          <div style={{ marginTop: 32 }} className="reveal">
            <Link to="/thesis" className="btn btn--ghost btn--sm">Read the thesis →</Link>
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
                GlassMem gives distributed agents scoped, traceable, temporal operational state across frameworks, tools, and sessions. Start with one workflow. No full rewrite needed.
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

      <SiteFooter />

      {roadmapOpen && (
        <div className="rm-overlay" onClick={e => { if (e.target === e.currentTarget) setRoadmapOpen(false); }}>
          <div className="rm-modal">
            <button className="rm-close" onClick={() => setRoadmapOpen(false)} aria-label="Close">&#x2715;</button>
            {roadmapSent ? (
              <div className="rm-success">
                <span className="rm-success__icon">&#x2713;</span>
                <h3 className="rm-success__title">You're on the list.</h3>
                <p className="rm-success__sub">We'll reach out with early access details.</p>
              </div>
            ) : (
              <>
                <div className="rm-modal__header">
                  <span className="label">// shape the roadmap</span>
                  <h2 className="rm-modal__title">Help us build what you actually need</h2>
                  <p className="rm-modal__sub">Two minutes. No pitch. Just the real problem.</p>
                </div>
                <form className="rm-form" onSubmit={async e => {
                  e.preventDefault();
                  try {
                    await fetch('/api/roadmap', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(roadmapData),
                    });
                  } catch(_) {}
                  setRoadmapSent(true);
                }}>
                  <div className="rm-field">
                    <label className="rm-label">Work Email <span className="rm-req">*</span></label>
                    <input
                      className="rm-input"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={roadmapData.email}
                      onChange={e => setRoadmapData(d => ({ ...d, email: e.target.value }))}
                    />
                  </div>
                  <div className="rm-field">
                    <label className="rm-label">Current Stack</label>
                    <input
                      className="rm-input"
                      type="text"
                      placeholder='e.g. "LangGraph + Groq", "Custom Autogen"'
                      value={roadmapData.stack}
                      onChange={e => setRoadmapData(d => ({ ...d, stack: e.target.value }))}
                    />
                  </div>
                  <div className="rm-field">
                    <label className="rm-label">The Pain Point</label>
                    <textarea
                      className="rm-input rm-input--ta"
                      rows={3}
                      placeholder="What's the biggest memory leak in your current agent loop?"
                      value={roadmapData.pain}
                      onChange={e => setRoadmapData(d => ({ ...d, pain: e.target.value }))}
                    />
                  </div>
                  <label className="rm-check">
                    <input
                      type="checkbox"
                      className="rm-check__box"
                      checked={roadmapData.deepdive}
                      onChange={e => setRoadmapData(d => ({ ...d, deepdive: e.target.checked }))}
                    />
                    <span className="rm-check__label">I'm open to a 15-minute technical deep-dive in exchange for lifetime free access.</span>
                  </label>
                  <button type="submit" className="rm-submit">Send &#x2192;</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
