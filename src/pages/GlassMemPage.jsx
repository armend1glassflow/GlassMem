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

/* ── Hero vertical flow visualization (source → GlassMem → agents) ── */
const FLOW_SCENES = [
  {
    source: {
      agent: 'Planner Agent', pip: '#fb923c', action: 'writes constraint',
      text: '"Freeze billing changes — Stripe migration active"',
      scope: 'project.billing · temporary',
    },
    agents: [
      { name: 'Claude Code',       pip: '#6ee7b7', state: 'billing refactor paused'   },
      { name: 'Cursor',            pip: '#a78bfa', state: 'billing PRs suspended'      },
      { name: 'Debug Agent',       pip: '#7dd3fc', state: 'read-only mode active'      },
      { name: 'CI Agent',          pip: '#34d399', state: 'blocking billing merges'    },
      { name: 'Billing Sub-Agent', pip: '#f472b6', state: 'constraint inherited'       },
    ],
  },
  {
    source: {
      agent: 'Debug Agent', pip: '#7dd3fc', action: 'records failure',
      text: '"Redis cache caused stale reads — do not retry"',
      scope: 'project.billing · permanent',
    },
    agents: [
      { name: 'Claude Code',   pip: '#6ee7b7', state: 'avoiding Redis in billing'  },
      { name: 'Planner Agent', pip: '#fb923c', state: 'Redis removed from plan'    },
      { name: 'Backend Agent', pip: '#94a3b8', state: 'switching to Postgres'      },
      { name: 'Review Agent',  pip: '#a78bfa', state: 'flagging Redis in PRs'      },
      { name: 'CI Agent',      pip: '#34d399', state: 'blocking Redis cache usage' },
    ],
  },
  {
    source: {
      agent: 'Architect Agent', pip: '#a78bfa', action: 'writes decision',
      text: '"Migrate to GraphQL — no new REST endpoints"',
      scope: 'global · permanent',
    },
    agents: [
      { name: 'Claude Code',  pip: '#6ee7b7', state: 'building GraphQL resolver'   },
      { name: 'Cursor',       pip: '#a78bfa', state: 'REST work paused'            },
      { name: 'API Agent',    pip: '#fb923c', state: 'schema generation mode'      },
      { name: 'Review Agent', pip: '#7dd3fc', state: 'blocking new REST endpoints' },
      { name: 'Docs Agent',   pip: '#94a3b8', state: 'updating API docs'           },
    ],
  },
];

const ContextFlowViz = () => {
  const [scIdx,      setScIdx]      = useState(0);
  const [phase,      setPhase]      = useState('write');
  const [agentsDone, setAgentsDone] = useState(0);

  const sc = FLOW_SCENES[scIdx];

  useEffect(() => { setPhase('write'); setAgentsDone(0); }, [scIdx]);

  useEffect(() => {
    let t;
    if      (phase === 'write')      t = setTimeout(() => setPhase('flow-in'),    1000);
    else if (phase === 'flow-in')    t = setTimeout(() => setPhase('distribute'),  650);
    else if (phase === 'distribute') {
      if (agentsDone < sc.agents.length)
        t = setTimeout(() => setAgentsDone(n => n + 1), 360);
      else
        t = setTimeout(() => setPhase('done'), 80);
    }
    else if (phase === 'done')       t = setTimeout(() => setScIdx(i => (i + 1) % FLOW_SCENES.length), 2400);
    return () => clearTimeout(t);
  }, [phase, agentsDone, sc.agents.length]);

  const flowing      = phase !== 'write';
  const distributing = phase === 'distribute' || phase === 'done';
  const done         = phase === 'done';

  return (
    <div className="hflow">
      {/* Chrome */}
      <div className="hflow__chrome">
        <div className="hflow__chrome-dots">
          <span className="hflow__macdot" style={{ background: '#ff5f57' }}/>
          <span className="hflow__macdot" style={{ background: '#febc2e' }}/>
          <span className="hflow__macdot" style={{ background: '#28c840' }}/>
        </div>
        <span className="hflow__chrome-title">glassmem · context-flow</span>
        <span className="hflow__chrome-live">
          <span className="hflow__live-dot"/>LIVE
        </span>
      </div>

      {/* Vertical body */}
      <div className="hflow__body">

        {/* ── Source card (top) ── */}
        <div className="hflow__source">
          <p className="hflow__col-label">Context update</p>
          <div className="hflow__source-card">
            <div className="hflow__source-from">
              <span className="hflow__pip" style={{ background: sc.source.pip }}/>
              <strong className="hflow__source-agent">{sc.source.agent}</strong>
              <span className="hflow__source-verb">{sc.source.action}</span>
            </div>
            <p className="hflow__source-text">{sc.source.text}</p>
            <span className="hflow__source-scope">{sc.source.scope}</span>
          </div>
        </div>

        {/* ── Connector: source → GlassMem ── */}
        <div className="hflow__vconn">
          <div className="hflow__vconn-track">
            <div className="hflow__vconn-line"/>
            {flowing && <span className="hflow__vconn-ball hflow__vconn-ball--in"/>}
          </div>
          <span className="hflow__vconn-tip">↓</span>
        </div>

        {/* ── GlassMem hub (middle) ── */}
        <div className="hflow__hub-row">
          <div className={`hflow__hub${distributing ? ' hflow__hub--active' : ''}`}>
            <Logo size={16}/>
            <span className="hflow__hub-name">GlassMem</span>
            {distributing && (
              <span className="hflow__hub-count">{agentsDone} / {sc.agents.length} agents</span>
            )}
          </div>
        </div>

        {/* ── Connector: GlassMem → agents ── */}
        <div className="hflow__vconn">
          <div className="hflow__vconn-track">
            <div className="hflow__vconn-line"/>
            {distributing && <span className="hflow__vconn-ball hflow__vconn-ball--out"/>}
          </div>
          <span className="hflow__vconn-tip">↓</span>
        </div>

        {/* ── Agent rows (bottom) ── */}
        <div className="hflow__agents">
          <p className="hflow__col-label">Receiving agents</p>
          {sc.agents.map((ag, i) => {
            const on = i < agentsDone;
            return (
              <div key={ag.name} className={`hflow__agent${on ? ' hflow__agent--on' : ''}`}>
                <span className="hflow__pip" style={{ background: on ? ag.pip : 'rgba(255,255,255,0.08)', transition: 'background 0.28s' }}/>
                <span className="hflow__agent-name">{ag.name}</span>
                {on
                  ? <span className="hflow__agent-state">↳ {ag.state}</span>
                  : <span className="hflow__agent-waiting">—</span>
                }
              </div>
            );
          })}
        </div>

      </div>

      {/* Footer */}
      <div className={`hflow__footer${done ? ' hflow__footer--done' : ''}`}>
        {done
          ? <><span className="hflow__footer-check">✓</span>{sc.agents.length} agents updated · 0 manual steps</>
          : phase === 'write'    ? 'waiting for context update…'
          : phase === 'flow-in' ? 'routing to GlassMem…'
          : `distributing to ${sc.agents.length} agents…`
        }
      </div>
    </div>
  );
};

/* ── Customer quotes ── */
const CUSTOMERS = [
  {
    company: 'GlassFlow',
    quote: "Before GlassMem, every sub-agent handoff meant manually syncing context. Now constraints propagate automatically — we don't think about it anymore.",
    name: 'Armend Avdijaj',
    role: 'CEO, GlassFlow',
    initials: 'AA',
    color: '#6ee7b7',
  },
  {
    company: 'Restack',
    quote: "GlassMem gives us the coordination layer that distributed agent systems need but no one built before. It's the missing infrastructure.",
    name: 'Andres Tapia',
    role: 'CEO, Restack',
    initials: 'AT',
    color: '#a78bfa',
  },
  {
    company: 'NuBrain',
    quote: "We integrated GlassMem in a day. Our agents now share a consistent operational picture across sessions — debugging went from painful to trivial.",
    name: 'Ingo Marquardt',
    role: 'CTO, NuBrain',
    initials: 'IM',
    color: '#7dd3fc',
  },
];

/* ── Demo scenarios ── */
const DEMO_SCENARIOS = [
  {
    id: 'billing', label: 'Billing freeze', color: '#fb923c',
    trigger: {
      agent: 'Planner Agent', pip: '#fb923c', action: 'writes constraint',
      content: '"Freeze all billing changes — Stripe migration active until Friday 18:00"',
    },
    agents: [
      { name: 'Claude Code',       pip: '#6ee7b7', before: 'Implementing billing module refactor',   after: 'Billing refactor paused — freeze constraint received', status: 'adapted'   },
      { name: 'Cursor',            pip: '#a78bfa', before: 'Editing billing controller',             after: 'Billing edits suspended until freeze expires',         status: 'adapted'   },
      { name: 'Debug Agent',       pip: '#7dd3fc', before: 'Debugging billing sync',                 after: 'Restricted to read-only billing analysis',             status: 'adapted'   },
      { name: 'CI Agent',          pip: '#34d399', before: 'Running standard checks',                after: 'Auto-blocking billing PRs from merging',               status: 'blocked'   },
      { name: 'Billing Sub-Agent', pip: '#f472b6', before: 'Spawning: billing task',                 after: 'Inherited freeze — executing read-only path only',     status: 'inherited' },
    ],
    steps: [
      'Planner Agent writes billing freeze to context store',
      'GlassMem identifies 5 agents in billing scope',
      'Claude Code and Cursor adapt to constraint',
      'CI Agent automatically blocks billing PRs',
      'New Billing Sub-Agent spawns with freeze inherited',
    ],
  },
  {
    id: 'redis', label: 'Cache failure', color: '#ef4444',
    trigger: {
      agent: 'Debug Agent', pip: '#7dd3fc', action: 'records failure',
      content: '"Redis cache caused stale reads in billing sync — do not retry this approach"',
    },
    agents: [
      { name: 'Claude Code',   pip: '#6ee7b7', before: 'Considering Redis for caching layer',  after: 'Avoiding Redis — failure flagged in billing scope',  status: 'adapted' },
      { name: 'Planner Agent', pip: '#fb923c', before: 'Planning distributed cache strategy',  after: 'Redis removed from plan — switching to Postgres',    status: 'adapted' },
      { name: 'Backend Agent', pip: '#94a3b8', before: 'Writing cache layer for billing sync', after: 'Switching to Postgres row-level locking pattern',    status: 'adapted' },
      { name: 'Review Agent',  pip: '#a78bfa', before: 'Reviewing cache implementation PRs',  after: 'Will reject any Redis usage in billing scope PRs',   status: 'blocked' },
    ],
    steps: [
      'Debug Agent records Redis failure to context store',
      'GlassMem marks Redis as failed approach in billing scope',
      'Claude Code and Backend Agent receive failure context',
      'Planner updates strategy — Redis removed',
      'Review Agent will auto-flag Redis in billing PRs',
    ],
  },
  {
    id: 'security', label: 'Security incident', color: '#ef4444',
    trigger: {
      agent: 'Security Agent', pip: '#ef4444', action: 'raises alert',
      content: '"SQL injection vulnerability in user input handling — patch before next deploy"',
    },
    agents: [
      { name: 'Claude Code',   pip: '#6ee7b7', before: 'Writing new user input handler',  after: 'Switching to parameterized queries immediately',  status: 'adapted' },
      { name: 'Review Agent',  pip: '#a78bfa', before: 'Reviewing backend PRs normally',  after: 'Flagging raw SQL usage in all open reviews',      status: 'adapted' },
      { name: 'Testing Agent', pip: '#7dd3fc', before: 'Running standard test suite',     after: 'Adding SQL injection tests to all active suites', status: 'adapted' },
      { name: 'Deploy Agent',  pip: '#fb923c', before: 'Preparing next deployment',       after: 'Blocking deploy — security constraint active',    status: 'blocked' },
    ],
    steps: [
      'Security Agent writes vulnerability context',
      'GlassMem propagates to all agents in affected scope',
      'Claude Code switches to parameterized queries',
      'Review Agent flags raw SQL in all pending PRs',
      'Deploy Agent blocks deployment until patch is merged',
    ],
  },
  {
    id: 'escalation', label: 'Customer escalation', color: '#7dd3fc',
    trigger: {
      agent: 'Support Agent', pip: '#7dd3fc', action: 'writes escalation',
      content: '"Enterprise customer reporting data export timeouts above 30s — P1 priority"',
    },
    agents: [
      { name: 'Claude Code',       pip: '#6ee7b7', before: 'Working on unrelated feature task', after: 'Prioritizing export performance optimization', status: 'adapted' },
      { name: 'Performance Agent', pip: '#a78bfa', before: 'Running scheduled benchmarks',      after: 'Profiling export queries — P1 active',         status: 'adapted' },
      { name: 'Database Agent',    pip: '#94a3b8', before: 'Routine index maintenance',         after: 'Optimizing export query indexes immediately',  status: 'adapted' },
      { name: 'API Agent',         pip: '#fb923c', before: 'Building new API endpoints',        after: 'Adding export timeout config endpoint',       status: 'adapted' },
    ],
    steps: [
      'Support Agent writes P1 escalation to context store',
      'GlassMem routes to all performance-relevant agents',
      'Performance Agent shifts to export query profiling',
      'Database Agent reprioritizes index optimization',
      'All agents coordinate under shared P1 context',
    ],
  },
  {
    id: 'architecture', label: 'Architecture migration', color: '#a78bfa',
    trigger: {
      agent: 'Architect Agent', pip: '#a78bfa', action: 'writes decision',
      content: '"Migrating from REST to GraphQL — no new REST endpoints after 2026-06-15"',
    },
    agents: [
      { name: 'Claude Code',  pip: '#6ee7b7', before: 'Building a new REST endpoint',      after: 'Switching to GraphQL resolver instead',            status: 'adapted' },
      { name: 'Cursor',       pip: '#a78bfa', before: 'Writing REST API handler',          after: 'Pausing REST work — GraphQL migration active',     status: 'adapted' },
      { name: 'API Agent',    pip: '#fb923c', before: 'Generating REST API docs',          after: 'GraphQL schema generation instead',                status: 'adapted' },
      { name: 'Review Agent', pip: '#7dd3fc', before: 'Reviewing API change PRs',         after: 'Rejecting new REST endpoints in all open reviews', status: 'blocked' },
      { name: 'Docs Agent',   pip: '#94a3b8', before: 'Writing REST API documentation',   after: 'Updating documentation for GraphQL migration',     status: 'adapted' },
    ],
    steps: [
      'Architect writes migration decision to context store',
      'GlassMem routes to all API-scope agents',
      'Claude Code and Cursor receive migration constraint',
      'Review Agent will reject new REST endpoint PRs',
      'Docs Agent automatically begins GraphQL documentation',
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
            {step >= 0 ? `${Math.min(step + 1, sc.agents.length)} / ${sc.agents.length} updated` : 'propagating…'}
          </p>
        </div>
        <div className="demo__right">
          <p className="demo__col-label">Agents adapting</p>
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

/* ── Comparison accordion ── */
const ACCORD_ITEMS = [
  {
    name: 'context.md files',
    tagline: 'Manual synchronization',
    icon: '✎',
    color: 'rgba(255,255,255,0.25)',
    desc: "Teams write context into markdown files and paste them into each agent at the start of a session. It works for solo development but breaks immediately at any real scale.",
    issues: [
      'No propagation — changes must be manually copied to every agent',
      'No sub-agent support — every spawn starts from zero',
      'No lifecycle — stale context accumulates silently',
      'No routing — every agent gets everything, relevant or not',
    ],
  },
  {
    name: 'Vector DB memory',
    tagline: 'Passive retrieval',
    icon: '◎',
    color: 'rgba(255,255,255,0.25)',
    desc: "Memory tools embed past interactions and retrieve semantically similar chunks. Good for long-term recall, but passive — agents pull what they can find, not what they need right now.",
    issues: [
      'No active propagation — agents only get context they explicitly query for',
      'No coordination — one agent cannot notify another of a constraint',
      'No invalidation — old and new context treated identically',
      'No sub-agent handoffs — inherited context is not scoped or filtered',
    ],
  },
  {
    name: 'GlassMem',
    tagline: 'Active context orchestration',
    icon: '◉',
    color: '#6ee7b7',
    desc: "GlassMem is an active coordination layer. When context changes, it propagates to every relevant agent automatically — scoped, routed, and with temporal validity built in.",
    capabilities: [
      'Real-time propagation to all connected agents',
      'Sub-agent inheritance — relevant context travels with spawned tasks',
      'Scoped routing — agents only receive what applies to their work',
      'Temporal validity — temporary constraints auto-expire',
      'Context roll back — restore any previous operational state',
      'Full lineage — every decision traceable to its source',
    ],
  },
];

const ComparisonAccord = () => {
  const [open, setOpen] = useState(2);
  return (
    <div className="accord">
      {ACCORD_ITEMS.map((item, i) => (
        <div key={item.name} className={`accord__item${open === i ? ' accord__item--open' : ''}`}>
          <button className="accord__header" onClick={() => setOpen(open === i ? -1 : i)}>
            <div className="accord__header-left">
              <span className="accord__header-icon" style={{ color: item.color }}>{item.icon}</span>
              <div>
                <span className="accord__header-name">{item.name}</span>
                <span className="accord__header-tagline" style={{ color: item.color }}>{item.tagline}</span>
              </div>
            </div>
            <span className={`accord__chevron${open === i ? ' accord__chevron--up' : ''}`}>›</span>
          </button>
          {open === i && (
            <div className="accord__body">
              <p className="accord__body-desc">{item.desc}</p>
              <ul className="accord__body-list">
                {(item.issues || item.capabilities).map(it => (
                  <li key={it} className={`accord__body-item${item.capabilities ? ' accord__body-item--pos' : ' accord__body-item--neg'}`}>
                    {item.capabilities ? '✓' : '✕'} {it}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

/* ── Architecture feature accordion ── */
const ARCH_FEATURES = [
  {
    title: 'Context propagation',
    desc: 'Write operational context once — constraints, decisions, failures, preferences. GlassMem propagates the update to every connected agent that needs it, scoped to their task.',
    detail: 'Agents receive push updates, not just pull-based retrieval. No polling. No manual notify.',
  },
  {
    title: 'Sub-agent inheritance',
    desc: 'When a parent agent spawns a sub-agent, GlassMem automatically selects the relevant context slice from the parent task and passes it down.',
    detail: 'Sub-agents start with full situational awareness. They inherit constraints, failed approaches, and active decisions — without a single manual handoff.',
  },
  {
    title: 'Scoped routing',
    desc: 'Every context entry is tagged with scope (global, project, task, temporary, agent-local). Agents only receive context within their allowed scope.',
    detail: 'Sensitive context never leaks across scope boundaries. Billing decisions stay in the billing scope. Security incidents go to every agent that needs to know.',
  },
  {
    title: 'Context invalidation',
    desc: 'Mark old decisions as superseded. GlassMem immediately excludes them from routing so stale assumptions stop spreading through your agent system.',
    detail: 'Every new context entry can explicitly replace an older one. Agents that already received the stale entry get notified of the supersession.',
  },
  {
    title: 'Temporal expiry',
    desc: 'Attach an expiry timestamp to any context entry. Temporary constraints, migration windows, escalation periods — they self-remove when the time comes.',
    detail: 'No manual cleanup. Agents act on the constraint while it\'s valid, then resume normal operation automatically when it expires.',
  },
  {
    title: 'Context roll back',
    desc: 'Restore your agent system to any previous operational state. Undo a bad context write, revert after a false alarm, or replay a workflow from a known-good state.',
    detail: 'Every state in the context store is versioned. Roll back creates a new state entry — the history is preserved for audit purposes.',
  },
  {
    title: 'Lineage tracing',
    desc: 'Every context packet records its source agent, propagation path, and downstream consumers. Trace any decision back to where it was written.',
    detail: '"Why did Claude Code skip the billing PR?" is always answerable. Export lineage traces to Langfuse, Arize, or OpenTelemetry.',
  },
];

const ArchSection = () => {
  const [openFeat, setOpenFeat] = useState(0);
  return (
    <div className="archsec">
      {/* Left: architecture diagram */}
      <div className="archsec__left">
        <div className="archd">
          <div className="archd__layer">
            <span className="archd__layer-label">Your agents</span>
            <div className="archd__node-row">
              {['Claude Code', 'Cursor', 'Custom Agent', 'Sub-Agent'].map(n => (
                <span key={n} className="archd__chip">{n}</span>
              ))}
            </div>
          </div>

          <div className="archd__gap">
            <div className="archd__gap-col">
              <div className="archd__gap-line"/>
              <span className="archd__gap-dot"/>
            </div>
            <div className="archd__gap-col">
              <div className="archd__gap-line"/>
              <span className="archd__gap-dot"/>
            </div>
            <div className="archd__gap-col">
              <div className="archd__gap-line"/>
              <span className="archd__gap-dot"/>
            </div>
            <span className="archd__gap-label">MCP · SDK · REST</span>
          </div>

          <div className="archd__core">
            <div className="archd__core-header">
              <Logo size={14}/>
              <span className="archd__core-title">GlassMem context layer</span>
            </div>
            <div className="archd__core-grid">
              {[
                { name: 'Context Store',    desc: 'single source of truth' },
                { name: 'Routing Engine',   desc: 'scope-aware delivery'   },
                { name: 'Expiry Engine',    desc: 'temporal validity'       },
                { name: 'Lineage Tracker',  desc: 'full audit trail'        },
                { name: 'Roll Back',        desc: 'state versioning'        },
                { name: 'Scope Filter',     desc: 'access boundaries'       },
              ].map(c => (
                <div key={c.name} className="archd__component">
                  <span className="archd__component-name">{c.name}</span>
                  <span className="archd__component-desc">{c.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="archd__legend">
            <span className="archd__legend-item"><span className="archd__legend-dot archd__legend-dot--em"/>active context entry</span>
            <span className="archd__legend-item"><span className="archd__legend-dot archd__legend-dot--temp"/>temporary constraint</span>
            <span className="archd__legend-item"><span className="archd__legend-dot archd__legend-dot--dead"/>superseded / expired</span>
          </div>
        </div>
      </div>

      {/* Right: feature accordion */}
      <div className="archsec__right">
        <p className="archsec__right-label">Features</p>
        <div className="archfeat">
          {ARCH_FEATURES.map((f, i) => (
            <div key={f.title} className={`archfeat__item${openFeat === i ? ' archfeat__item--open' : ''}`}>
              <button className="archfeat__header" onClick={() => setOpenFeat(openFeat === i ? -1 : i)}>
                <span className="archfeat__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="archfeat__title">{f.title}</span>
                <span className={`archfeat__chevron${openFeat === i ? ' archfeat__chevron--up' : ''}`}>›</span>
              </button>
              {openFeat === i && (
                <div className="archfeat__body">
                  <p className="archfeat__body-main">{f.desc}</p>
                  <p className="archfeat__body-detail">{f.detail}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Observability timeline data ── */
const OBS_EVENTS = [
  { id: 'e5', time: 'now',     agent: 'GlassMem',      scope: 'project.billing', action: 'auto-expired billing freeze',                  status: 'expired',    color: '#94a3b8' },
  { id: 'e4', time: '2h ago',  agent: 'CI Agent',       scope: 'project.billing', action: 'blocked billing PR #482 — freeze constraint',   status: 'blocked',    color: '#ef4444' },
  { id: 'e3', time: '4h ago',  agent: 'Claude Code',    scope: 'project.billing', action: 'paused billing refactor — freeze inherited',     status: 'adapted',    color: '#6ee7b7' },
  { id: 'e2', time: '4h ago',  agent: 'GlassMem',       scope: 'project.billing', action: 'propagated billing freeze to 5 agents',         status: 'propagated', color: '#a78bfa' },
  { id: 'e1', time: '4h ago',  agent: 'Planner Agent',  scope: 'project.billing', action: 'wrote billing freeze — Stripe migration window', status: 'write',      color: '#fb923c' },
  { id: 'e0', time: '2d ago',  agent: 'Debug Agent',    scope: 'project.billing', action: 'recorded Redis approach as failed',              status: 'recorded',   color: '#7dd3fc' },
];

const ObsTimeline = () => {
  const [rolledBack, setRolledBack] = useState(null);
  return (
    <div className="obstl">
      <div className="obstl__header">
        <span className="obstl__header-title"><Logo size={11}/>context history · project.billing</span>
        <span className="obstl__header-live"><span className="obstl__live-dot"/>live</span>
      </div>
      <div className="obstl__body">
        {OBS_EVENTS.map((ev, i) => (
          <div key={ev.id} className={`obstl__item${rolledBack === i ? ' obstl__item--restored' : ''}`}>
            <div className="obstl__item-left">
              <span className="obstl__item-dot" style={{ background: ev.color }}/>
              <div className="obstl__item-line"/>
            </div>
            <div className="obstl__item-body">
              <div className="obstl__item-meta">
                <span className="obstl__item-time">{ev.time}</span>
                <span className="obstl__item-agent" style={{ color: ev.color }}>{ev.agent}</span>
                <span className="obstl__item-scope">{ev.scope}</span>
                <span className={`obstl__item-badge obstl__item-badge--${ev.status}`}>{ev.status}</span>
              </div>
              <p className="obstl__item-action">{ev.action}</p>
            </div>
            {i > 0 && (
              <button
                className={`obstl__rollback${rolledBack === i ? ' obstl__rollback--active' : ''}`}
                onClick={() => setRolledBack(rolledBack === i ? null : i)}
              >
                {rolledBack === i ? '✓ restored' : '↩ restore'}
              </button>
            )}
          </div>
        ))}
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
function useCopy(text) {
  const [ok, set] = useState(false);
  const copy = () => navigator.clipboard.writeText(text).then(() => { set(true); setTimeout(() => set(false), 1800); });
  return [ok, copy];
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

      {/* ═══ NAV ════════════════════════════════════ */}
      <nav className="nav" style={{ borderBottomColor: scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)' }}>
        <div className="nav__row">
          <a href="/" className="nav__logo"><Logo size={24}/><span className="nav__wordmark">GlassMem</span></a>
          <div className="nav__links">
            <a href="#problem"       className="nav__link">Problem</a>
            <a href="#demo"          className="nav__link">Demo</a>
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
          {['Problem','Demo','Observability','Docs'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav__mob-link" onClick={() => setMobOpen(false)}>{l}</a>
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
                Context orchestration infrastructure
              </div>
              <h1 className="h1 hero__h1 enter-2">
                Context orchestration<br/>for all your agents.
              </h1>
              <p className="body-lg hero__sub enter-3">
                GlassMem keeps agents, sub-agents, tools, and sessions aligned with shared operational context. Easy to integrate and with temporal updates.
              </p>
              <div className="hero__ctas enter-4">
                <a href="/signup"  className="btn btn--em btn--lg">Get started</a>
                <a href="#demo"    className="btn btn--ghost btn--lg">See live demo</a>
              </div>
            </div>
            <div className="hero__viz-col enter-4">
              <ContextFlowViz/>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CUSTOMERS ══════════════════════════════ */}
      <section className="cust-sec">
        <div className="w">
          <div className="cust-sec__intro reveal">
            <span className="label">// customers</span>
            <h2 className="cust-sec__heading">Trusted by teams building<br/>production AI systems.</h2>
          </div>
          <div className="cust-sec__logos reveal">
            {[
              { name: 'GlassFlow', style: { fontWeight: 700, fontSize: 18 } },
              { name: 'restack',   style: { fontWeight: 900, fontSize: 22, textTransform: 'lowercase' } },
              { name: 'NuBrain',   style: { fontWeight: 800, fontSize: 20 } },
            ].map(c => (
              <div key={c.name} className="cust-sec__logo">
                <span style={{ fontFamily: 'var(--f-disp)', color: 'rgba(255,255,255,0.55)', letterSpacing: '-0.03em', ...c.style }}>{c.name}</span>
              </div>
            ))}
          </div>
          <div className="cust-sec__cards reveal">
            {CUSTOMERS.map(c => (
              <div key={c.name} className="cust-sec__card">
                <p className="cust-sec__card-quote-mark">"</p>
                <p className="cust-sec__card-quote">{c.quote}</p>
                <div className="cust-sec__card-sep"/>
                <div className="cust-sec__card-footer">
                  <div className="cust-sec__avatar" style={{ background: c.color + '1a', borderColor: c.color + '40' }}>
                    <span style={{ color: c.color, fontSize: 11, fontWeight: 700, fontFamily: 'var(--f-disp)' }}>{c.initials}</span>
                  </div>
                  <div>
                    <p className="cust-sec__card-name">{c.name}</p>
                    <p className="cust-sec__card-role">{c.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM ════════════════════════════════ */}
      <section id="problem" className="sec sec--alt">
        <div className="w">
          <div className="prob-ed__intro reveal">
            <span className="label">The problem</span>
            <h2 className="h2">Why multi-agent systems<br/>lose operational context.</h2>
            <p className="body-lg" style={{ maxWidth:'44ch', marginTop:14 }}>
              Agents don't share context by default. Coordination has to be built — and most teams build it manually.
            </p>
          </div>

          <div className="prob-ed reveal">
            {[
              {
                n: '01',
                title: 'Fragmented context',
                desc: 'Claude Code, Cursor, planners, debuggers, and external agents all hold different operational context. No shared state. Each agent acts on its own partial picture.',
                examples: ['billing freeze not propagated to executor', 'sub-agent missing architecture decisions already made'],
              },
              {
                n: '02',
                title: 'Broken handoffs',
                desc: 'Sub-agents inherit partial or stale context when work moves between systems. Every spawn starts from near-zero.',
                examples: ['context.md manually copied between tool sessions', 'sub-agent re-derives decisions the parent already made'],
              },
              {
                n: '03',
                title: 'Stale operational state',
                desc: "Old constraints and failed approaches silently continue spreading. No expiry. No invalidation. No one knows what's still valid.",
                examples: ['rejected Redis approach proposed again 3 days later', 'expired migration freeze still applied by CI Agent'],
              },
              {
                n: '04',
                title: 'Manual synchronization',
                desc: 'Teams copy context.md files and summaries manually between agents. Fragile, slow, and breaks completely at any real scale.',
                examples: ['same architecture decision reached 4× separately', 'human manually updating every agent context after each change'],
              },
            ].map(({ n, title, desc, examples }) => (
              <div key={n} className="prob-ed__item">
                <span className="prob-ed__num">{n}</span>
                <div className="prob-ed__body">
                  <h3 className="prob-ed__title">{title}</h3>
                  <p className="prob-ed__desc">{desc}</p>
                  <div className="prob-ed__examples">
                    {examples.map(ex => (
                      <span key={ex} className="prob-ed__ex">✕ {ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison accordion */}
          <div className="reveal" style={{ marginTop: 64 }}>
            <p className="prob-ed__compare-label">How existing approaches compare</p>
            <ComparisonAccord/>
          </div>
        </div>
      </section>

      {/* ═══ LIVE COORDINATION DEMO ══════════════════ */}
      <section id="demo" className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Live coordination demo</span>
              <h2 className="h2">One update.<br/>Every agent adapts.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              Select a scenario to see GlassMem propagate operational context across distributed agents in real time.
            </p>
          </div>
          <div className="reveal"><LiveDemo/></div>
        </div>
      </section>

      {/* ═══ WHAT GLASSMEM DOES ═════════════════════ */}
      <section id="memory" className="sec sec--alt">
        <div className="w">
          <div className="feat__intro reveal">
            <span className="label">Capabilities</span>
            <h2 className="h2">Six primitives that keep<br/>your agents aligned.</h2>
            <p className="body-lg" style={{ maxWidth:'48ch', marginTop:14 }}>
              Each primitive solves a real coordination failure in distributed agent systems.
            </p>
          </div>
          <div className="feat__grid feat__grid--3 reveal">

            <div className="feat__card">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-store">
                  {[
                    { pip:'#6ee7b7', text:'Architecture decisions propagated to all agents', tag:'active'   },
                    { pip:'#fb923c', text:'Billing freeze active until Fri 18:00',           tag:'temp ↺'  },
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
              <p className="feat__card-desc">Write context once. Every connected agent receives the update without manual sync or duplicated config files.</p>
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
              <p className="feat__card-desc">Spawn a sub-agent and the relevant context slice travels with the work. Sub-agents never start from zero.</p>
            </div>

            <div className="feat__card">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-temp">
                  <div className="feat__mock-temp-badge">SCOPED</div>
                  <div className="feat__mock-temp-text">Global → Project → Task → Temporary</div>
                  <div className="feat__mock-temp-meta">each scope routed independently per agent</div>
                  <div className="feat__mock-temp-bar"><div className="feat__mock-temp-fill" style={{ width:'62%' }}/></div>
                </div>
              </div>
              <p className="feat__card-title">Scoped context</p>
              <p className="feat__card-desc">Context is separated by global, project, task, and temporary scope. Each agent receives only the scope relevant to its work.</p>
            </div>

            <div className="feat__card">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-code">
                  {['// supersede an old decision','await context.supersede(oldId, {','  replacedBy: newDecisionId','})','','// ✓ stale context excluded'].map((l,i) => (
                    <div key={i} className="feat__mock-code-line" style={{ color: i >= 4 ? '#6ee7b7' : undefined }}>{l}</div>
                  ))}
                </div>
              </div>
              <p className="feat__card-title">Context invalidation</p>
              <p className="feat__card-desc">Supersede old decisions and block stale context from spreading. New context explicitly replaces old — no silent accumulation.</p>
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
              <p className="feat__card-title">Context lineage</p>
              <p className="feat__card-desc">See which agent wrote, received, used, or filtered each piece of context. Full lineage on every context packet.</p>
            </div>

            <div className="feat__card">
              <div className="feat__card-art feat__card-art--tall">
                <div className="feat__mock-timer">
                  <div className="feat__mock-timer-badge">TEMPORARY ↺</div>
                  <div className="feat__mock-timer-text">Billing freeze active</div>
                  <div className="feat__mock-timer-expires">expires in 18:23:41</div>
                  <div className="feat__mock-timer-bar"><div className="feat__mock-timer-fill"/></div>
                  <div className="feat__mock-timer-note">auto-removed on expiry · no manual cleanup</div>
                </div>
              </div>
              <p className="feat__card-title">Temporal updates</p>
              <p className="feat__card-desc">Attach expiry to any context entry. Temporary constraints self-remove — agents always see only what is currently valid.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ TECHNICAL ARCHITECTURE ══════════════════ */}
      <section className="sec">
        <div className="w">
          <div className="fail__intro reveal" style={{ marginBottom: 48 }}>
            <div>
              <span className="label">Architecture</span>
              <h2 className="h2">How GlassMem coordinates<br/>context technically.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              A shared coordination layer, not a memory store. Click a feature to understand how it works.
            </p>
          </div>
          <div className="reveal">
            <ArchSection/>
          </div>
        </div>
      </section>

      {/* ═══ CONTEXT OBSERVABILITY ══════════════════ */}
      <section id="observability" className="sec sec--alt">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Observability</span>
              <h2 className="h2">Trace context states.<br/>Roll back to any point.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              Every context change is versioned. Inspect the full history, see who changed what and when — and restore any previous state with one click.
            </p>
          </div>
          <div className="obs2 reveal">
            <div className="obs2__left">
              <ObsTimeline/>
            </div>
            <div className="obs2__right">
              <div className="observe__packet">
                <div className="observe__packet-bar">
                  <span className="observe__packet-bar-title"><Logo size={11}/>context packet · ctx_7f3a9b12</span>
                  <span className="observe__packet-id">v4 · active</span>
                </div>
                <div className="observe__packet-body">
                  <div className="observe__packet-content">"Do not modify billing until Stripe migration completes"</div>
                  <div className="observe__packet-grid">
                    {[
                      { key:'source',        val:'Planner Agent',                              color:'#fb923c'     },
                      { key:'written',       val:'4h ago · 09:14:22 UTC',                      color:'var(--tx-2)' },
                      { key:'scope',         val:'project.billing',                            color:'#a78bfa'     },
                      { key:'status',        val:'active',                                     color:'#6ee7b7'     },
                      { key:'propagated to', val:'Claude Code, Debug Agent, Billing Sub-Agent',color:'#7dd3fc'     },
                      { key:'recalled',      val:'billing-debugger × 3, claude-code × 1',      color:'#7dd3fc'     },
                      { key:'expires',       val:'2026-06-14T18:00:00Z',                       color:'#fb923c'     },
                      { key:'version',       val:'v4 (3 prior versions)',                      color:'var(--tx-2)' },
                    ].map(({ key, val, color }) => (
                      <div key={key} className="observe__packet-row">
                        <span className="observe__packet-key">{key}</span>
                        <span className="observe__packet-val" style={{ color }}>{val}</span>
                      </div>
                    ))}
                  </div>
                  <div className="obs2__packet-actions">
                    <button className="obs2__action-btn obs2__action-btn--primary">↩ Restore previous version</button>
                    <button className="obs2__action-btn">View lineage graph</button>
                    <button className="obs2__action-btn">Force expire</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ══════════════════════════════ */}
      <section className="sec cta">
        <div className="w">
          <div className="cta__inner" style={{ gridTemplateColumns:'1fr' }}>
            <div className="reveal" style={{ textAlign:'center', maxWidth:560, margin:'0 auto' }}>
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
                <form className="cta__email-form" onSubmit={handleCtaSubmit} style={{ justifyContent:'center' }}>
                  <input className="cta__email-input" type="email" placeholder="you@company.com" value={ctaEmail} onChange={e => setCtaEmail(e.target.value)} required/>
                  <button type="submit" className="btn btn--em btn--lg">Get started</button>
                </form>
              )}
              <div style={{ marginTop:14 }}>
                <a href="mailto:hello@glassmem.ai" className="btn btn--ghost btn--sm">Book a demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INTEGRATIONS (bottom) ══════════════════ */}
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
            <span className="footer2__copy">© 2026 GlassMem</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
