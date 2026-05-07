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

/* ── Framework SVG logos ── */
const IconCursor = () => (
  <svg viewBox="0 0 24 24" fill="none" className="logos__icon">
    <path d="M5 3l14 9-7 1-4 7L5 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);
const IconClaude = () => (
  <svg viewBox="0 0 24 24" fill="none" className="logos__icon">
    <line x1="12" y1="3"  x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="3"  y1="7.5" x2="21" y2="16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="3"  y1="16.5" x2="21" y2="7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconCopilot = () => (
  <svg viewBox="0 0 24 24" fill="none" className="logos__icon">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconWindsurf = () => (
  <svg viewBox="0 0 24 24" fill="none" className="logos__icon">
    <path d="M3 18 L6 7 L9.5 14 L13 7 L16.5 14 L20 7 L22 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconCline = () => (
  <svg viewBox="0 0 24 24" fill="none" className="logos__icon">
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 12h8M14 9l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconLangChain = () => (
  <svg viewBox="0 0 24 24" fill="none" className="logos__icon">
    <circle cx="7"  cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="17" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="10.5" y1="12" x2="13.5" y2="12" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);
const IconOpenAI = () => (
  <svg viewBox="0 0 24 24" fill="none" className="logos__icon">
    <path d="M12 2C9 2 6.5 4 6 7c-1.5.5-3 2-3 4s1.5 3.5 3 4c.5 3 3 5 6 5s5.5-2 6-5c1.5-.5 3-2 3-4s-1.5-3.5-3-4c-.5-3-3-5-6-5z" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);
const IconCrewAI = () => (
  <svg viewBox="0 0 24 24" fill="none" className="logos__icon">
    <circle cx="8"  cy="8"  r="3" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="16" cy="8"  r="3" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="10.6" y1="10.6" x2="12" y2="13.3" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <line x1="13.4" y1="10.6" x2="12" y2="13.3" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
  </svg>
);
const IconAutoGen = () => (
  <svg viewBox="0 0 24 24" fill="none" className="logos__icon">
    <path d="M12 4a8 8 0 0 1 7.7 5.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 20a8 8 0 0 1-7.7-5.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17.5 7.5 L19.7 9.9 L22 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.5 16.5 L4.3 14.1 L2 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LOGOS = [
  { Icon: IconCursor,    name: 'Cursor'    },
  { Icon: IconClaude,    name: 'Claude'    },
  { Icon: IconCopilot,   name: 'Copilot'   },
  { Icon: IconWindsurf,  name: 'Windsurf'  },
  { Icon: IconCline,     name: 'Cline'     },
  { Icon: IconLangChain, name: 'LangChain' },
  { Icon: IconOpenAI,    name: 'OpenAI'    },
  { Icon: IconCrewAI,    name: 'CrewAI'    },
  { Icon: IconAutoGen,   name: 'AutoGen'   },
];

/* ── Why agents fail — column art ── */
const ArtChatMemory = () => (
  <svg width="96" height="72" viewBox="0 0 96 72" fill="none">
    <rect x="10" y="10" width="52" height="30" rx="6" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.03)"/>
    <line x1="18" y1="22" x2="48" y2="22" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
    <line x1="18" y1="30" x2="40" y2="30" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
    <path d="M10 40 L18 40" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="34" y="32" width="48" height="28" rx="6" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)" strokeDasharray="4 3"/>
    <line x1="42" y1="44" x2="72" y2="44" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
    <line x1="42" y1="51" x2="64" y2="51" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
    <text x="80" y="20" textAnchor="middle" fill="rgba(239,68,68,0.6)" fontSize="14" fontFamily="monospace">✕</text>
  </svg>
);

const ArtVectors = () => (
  <svg width="96" height="72" viewBox="0 0 96 72" fill="none">
    {[[20,20],[48,14],[76,22],[14,50],[52,44],[80,52]].map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="4" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" fill="rgba(255,255,255,0.04)"/>
    ))}
    <circle cx="48" cy="36" r="10" stroke="rgba(255,231,183,0.25)" strokeWidth="1" strokeDasharray="3 2" fill="none"/>
    <circle cx="48" cy="36" r="6" fill="rgba(255,231,183,0.08)" stroke="rgba(255,231,183,0.3)" strokeWidth="1"/>
    <line x1="48" y1="14" x2="48" y2="26" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
    <line x1="20" y1="20" x2="38" y2="32" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
    <text x="80" y="20" textAnchor="middle" fill="rgba(239,68,68,0.6)" fontSize="14" fontFamily="monospace">✕</text>
  </svg>
);

const ArtToolCalls = () => (
  <svg width="96" height="72" viewBox="0 0 96 72" fill="none">
    <rect x="6" y="24" width="28" height="24" rx="5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.03)"/>
    <text x="20" y="39" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="monospace">fn()</text>
    <rect x="62" y="24" width="28" height="24" rx="5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.03)"/>
    <text x="76" y="39" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="monospace">ctx</text>
    <line x1="34" y1="36" x2="48" y2="36" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5" strokeDasharray="3 2"/>
    <line x1="48" y1="36" x2="62" y2="36" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5" strokeDasharray="3 2"/>
    <text x="48" y="34" textAnchor="middle" fill="rgba(239,68,68,0.7)" fontSize="14" fontFamily="monospace">✕</text>
  </svg>
);

/* ── Memory graph SVG ── */
const MemoryGraph = () => {
  const nodes = [
    { id: 'user',        x: 140, y: 130, label: 'User',        em: true  },
    { id: 'cafe',        x: 280, y: 60,  label: 'Cafe',        em: false },
    { id: 'coffee',      x: 380, y: 140, label: 'Flat White',  em: false },
    { id: 'friday',      x: 240, y: 210, label: 'Friday',      em: false },
    { id: 'time',        x: 370, y: 240, label: '10AM',        em: false },
    { id: 'work',        x: 100, y: 230, label: 'Work',        em: false },
    { id: 'productive',  x: 60,  y: 130, label: 'Productive',  em: false },
  ];
  const edges = [
    { from: 'user',    to: 'cafe',       label: 'visits'   },
    { from: 'user',    to: 'work',       label: 'works at' },
    { from: 'user',    to: 'productive', label: 'feels'    },
    { from: 'cafe',    to: 'coffee',     label: 'serves'   },
    { from: 'user',    to: 'coffee',     label: 'orders'   },
    { from: 'user',    to: 'friday',     label: 'on'       },
    { from: 'friday',  to: 'time',       label: 'at'       },
  ];
  const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]));
  return (
    <svg width="100%" viewBox="0 0 460 310" fill="none" style={{ display:'block' }}>
      {edges.map((e, i) => {
        const a = nodeMap[e.from];
        const b = nodeMap[e.to];
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2;
        return (
          <g key={i}>
            <line x1={a.x} y1={a.y} x2={b.x} y2={b.y}
              stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
            <text x={mx} y={my - 4} textAnchor="middle"
              fill="rgba(255,255,255,0.2)" fontSize="9"
              fontFamily="'Fira Code', monospace">{e.label}</text>
          </g>
        );
      })}
      {nodes.map(n => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={n.em ? 22 : 18}
            fill={n.em ? 'rgba(110,231,183,0.1)' : 'rgba(255,255,255,0.04)'}
            stroke={n.em ? '#6ee7b7' : 'rgba(255,255,255,0.16)'}
            strokeWidth={n.em ? 1.5 : 1}/>
          <text x={n.x} y={n.y + 4} textAnchor="middle"
            fill={n.em ? '#6ee7b7' : 'rgba(255,255,255,0.55)'}
            fontSize={n.em ? 11 : 10}
            fontFamily="'Inter', sans-serif"
            fontWeight={n.em ? '600' : '400'}>{n.label}</text>
        </g>
      ))}
    </svg>
  );
};

/* ── Hero visualization — SF → Stockholm travel scenario ── */
const VIZ_AGENTS = [
  { pip: '#a78bfa', label: 'CALENDAR', change: '9AM standup → 6PM Stockholm', revert: '↺ Jun 11' },
  { pip: '#6ee7b7', label: 'MEDICINE', change: 'Metformin 8AM → 5PM local',   revert: '↺ Jun 11' },
  { pip: '#fb923c', label: 'DIET',     change: 'Meal windows shifted +9h',     revert: '↺ Jun 11' },
];

const HeroViz = () => {
  const [step, setStep] = useState(0);
  // 0 — intro fills full width
  // 1 — intro slides left (narrow), right col fades in (ctx + agents)
  // 2 — verdict row appears
  // loops

  useEffect(() => {
    const delays = [3600, 3000, 4000];
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
      {/* Bar */}
      <div className="hviz__bar">
        <span className="hviz__bar-title">
          <Logo size={13} />
          GlassMem · shared temporal context
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
            <p className="hviz__intro-eyebrow">the problem with agents today</p>
            <h3 className="hviz__intro-heading">
              Imagine you're traveling<br />through <em>time zones.</em>
            </h3>
            <p className="hviz__intro-body">
              Your context changes — temporarily. Calendar, medicine, meals all shift by 9 hours. Three agents need to know. And in one week, everything reverts.
            </p>
            <div className="hviz__intro-rule" />
            <div className="hviz__intro-note">
              <span className="hviz__intro-note-dot" />
              <span className="hviz__intro-note-text">
                GlassMem shares temporal context across all agents — automatically.
              </span>
            </div>
          </div>

          {/* Narrow summary — visible in steps 1+ */}
          <div className={`hviz__intro-narrow${!narrow ? ' hviz__intro-narrow--hidden' : ''}`}>
            <p className="hviz__narrow-eyebrow">the problem</p>
            <p className="hviz__narrow-heading">Traveling through time zones.</p>
            <div className="hviz__narrow-points">
              {[
                { pip: '#a78bfa', text: 'Temporary context' },
                { pip: '#6ee7b7', text: 'Cross-agent sync'  },
                { pip: '#fb923c', text: 'Auto-reverts'      },
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
            <div className="hviz__ctx-route">SF → Stockholm</div>
            <div className="hviz__ctx-meta">
              <span className="hviz__ctx-tag hviz__ctx-tag--em">+9 hours</span>
              <span className="hviz__ctx-dot">·</span>
              <span className="hviz__ctx-tag">Jun 4 – Jun 11</span>
              <span className="hviz__ctx-dot">·</span>
              <span className="hviz__ctx-tag hviz__ctx-tag--warn">TEMPORARY</span>
            </div>
          </div>

          {/* Agent cards */}
          <div className="hviz__agents">
            {VIZ_AGENTS.map((ag, i) => (
              <div
                key={ag.label}
                className={`hviz__agent-card${!narrow ? ' hviz__agent-card--hidden' : ''}`}
                style={{ transitionDelay: narrow ? `${0.1 + i * 0.1}s` : '0s' }}
              >
                <div className="hviz__agent-pip-row">
                  <span className="hviz__agent-pip" style={{ background: ag.pip }} />
                  <span className="hviz__agent-label">{ag.label}</span>
                </div>
                <div className="hviz__agent-change">{ag.change}</div>
                <div className="hviz__agent-revert">{ag.revert}</div>
              </div>
            ))}
          </div>

          {/* Verdict */}
          <div className={`hviz__verdict${step < 2 ? ' hviz__verdict--hidden' : ''}`}>
            <div className="hviz__verdict-row">
              <span className="hviz__verdict-src">Vector DB</span>
              <span className="hviz__verdict-wrong">Each agent asks. None know it's temporary. ✕</span>
            </div>
            <div className="hviz__verdict-row">
              <span className="hviz__verdict-src">GlassMem</span>
              <span className="hviz__verdict-right">One update. All 3 adjusted. Reverts Jun 11. ✓</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

/* ── Analytics line chart ── */
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

/* ── Terminal code ── */
const CODE_LINES = [
  { n: 1,  t: [{ c:'#7dd3fc',t:'import'},{c:'#e2e8f0',t:' { GlassMem } '},{c:'#7dd3fc',t:'from'},{c:'#86efac',t:" 'glassmem'"}] },
  { n: 2,  t: [] },
  { n: 3,  t: [{ c:'#7dd3fc',t:'const'},{c:'#e2e8f0',t:' mem '},{c:'#94a3b8',t:'='},{c:'#7dd3fc',t:' new'},{c:'#fcd34d',t:' GlassMem'},{c:'#e2e8f0',t:"({ backend: '"},{c:'#86efac',t:'redis'},{c:'#e2e8f0',t:"' })"}] },
  { n: 4,  t: [] },
  { n: 5,  t: [{ c:'#64748b',t:'// Write — persists instantly to backend' }] },
  { n: 6,  t: [{ c:'#7dd3fc',t:'await'},{c:'#e2e8f0',t:' mem.'},{c:'#93c5fd',t:'write'},{c:'#e2e8f0',t:"('user_intent', intent)"}] },
  { n: 7,  t: [] },
  { n: 8,  t: [{ c:'#64748b',t:'// Read — 4ms, served from in-process cache' }] },
  { n: 9,  t: [{ c:'#7dd3fc',t:'const'},{c:'#e2e8f0',t:' ctx '},{c:'#94a3b8',t:'='},{c:'#7dd3fc',t:' await'},{c:'#e2e8f0',t:' mem.'},{c:'#93c5fd',t:'read'},{c:'#e2e8f0',t:"('user_intent')"}] },
  { n: 10, t: [] },
  { n: 11, t: [{ c:'#64748b',t:'// Subscribe — react to changes without polling' }] },
  { n: 12, t: [{ c:'#e2e8f0',t:'mem.'},{c:'#93c5fd',t:'on'},{c:'#e2e8f0',t:"('user_intent', val => agent.update(val))"}] },
];

const FEATURES = [
  { name: 'Sub-10ms reads',           desc: 'Served from an in-process cache with async write-through. Your agents never block on state.' },
  { name: 'CRDT conflict resolution', desc: 'Writes propagate across replicas using a grow-only CRDT. No manual merging, no last-write-wins surprises.' },
  { name: 'Namespaced isolation',     desc: 'Per-agent, per-session, and per-tenant namespaces built in. No configuration required to isolate workloads.' },
  { name: 'Streaming event bus',      desc: 'Every mutation emits a typed event. Build reactive pipelines without a single setTimeout or polling loop.' },
  { name: 'Pluggable backends',       desc: 'In-memory, Redis, PostgreSQL, or Supabase. Swap backends without changing a line of agent code.' },
  { name: 'OpenTelemetry native',     desc: 'Full trace context on every read and write. Debug exactly where memory adds latency — no guessing.' },
];

const PLANS = [
  { tier:'Hobby',      price:'$0',     period:'/mo', desc:'For side projects',     featured:false, feats:['1 project','100K ops / mo','1-day TTL','In-memory backend','Community support'] },
  { tier:'Pro',        price:'$49',    period:'/mo', desc:'For production agents', featured:true,  feats:['Unlimited projects','10M ops / mo','90-day TTL','Redis + Postgres backends','Streaming events','Priority support'] },
  { tier:'Enterprise', price:'Custom', period:'',    desc:'For teams at scale',    featured:false, feats:['SLA guarantee','Unlimited ops','Custom TTL','VPC deployment','SOC 2 compliant','Dedicated support'] },
];

const EVENTS = [
  { color: '#6ee7b7', method: 'memory.write()',  detail: 'user_42 · intent="book_flight"', ms: '0ms' },
  { color: '#a3a3a3', method: 'memory.read()',   detail: 'user_42 · cache hit',             ms: '4ms' },
  { color: '#6ee7b7', method: 'memory.sync()',   detail: 'pool · 3 replicas reconciled',    ms: '8ms' },
  { color: '#a3a3a3', method: 'event.emit()',    detail: 'key=last_intent · 2 subscribers', ms: '2ms' },
  { color: '#6ee7b7', method: 'memory.scope()', detail: 'tenant_99 · isolated namespace',   ms: '1ms' },
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

  const [scrolled, setScrolled] = useState(false);
  const [mobOpen,  setMobOpen]  = useState(false);
  const [copied,   copy]        = useCopy('npm install glassmem');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

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
            {['Features', 'Pricing'].map(l => (
              <a key={l} href={`#${l}`} className="nav__link">{l}</a>
            ))}
            <a href="https://docs.glassmem.ai" className="nav__link">Docs</a>
            <a href="https://github.com/glassmem" className="nav__link">GitHub</a>
          </div>
          <div className="nav__right">
            <a href="#Pricing" className="btn btn--ghost btn--sm">Log in</a>
            <a href="#Pricing" className="btn btn--em btn--sm">Get started</a>
          </div>
          <button className="nav__mob-toggle" onClick={() => setMobOpen(o => !o)} aria-label="Menu">
            {mobOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`nav__mob-menu${mobOpen ? ' open' : ''}`}>
          {['Features','Pricing','Docs','GitHub'].map(l => (
            <a key={l} href={`#${l}`} className="nav__mob-link" onClick={() => setMobOpen(false)}>{l}</a>
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
                Public beta — v0.4
              </div>
              <h1 className="h1 hero__h1 enter-2">
                Your agent<br />just knows.
              </h1>
              <p className="body-lg hero__sub enter-3">
                GlassMem gives AI agents persistent, structured memory — so they remember who users are, what they care about, and what happened last time. No Redis wrangling, no stale context.
              </p>
              <div className="hero__ctas enter-4">
                <a href="#Pricing" className="btn btn--em btn--lg">Start free</a>
                <a href="https://docs.glassmem.ai" className="btn btn--ghost btn--lg">Read the docs</a>
              </div>
              <button className="hero__install enter-5" onClick={copy}>
                <span className="hero__install-p">$</span>
                <span style={{ color: 'rgba(255,255,255,0.65)' }}>npm install glassmem</span>
                <span className="hero__install-hint">{copied ? '✓ copied' : 'copy'}</span>
              </button>
            </div>

            <HeroViz />
          </div>
        </div>
      </section>

      {/* ═══ LOGOS STRIP ════════════════════════════ */}
      <div className="logos">
        <div className="logos__inner">
          <span className="logos__label">Works with</span>
          <div className="logos__track-wrap">
            <div className="logos__track">
              {[...LOGOS, ...LOGOS].map(({ Icon, name }, i) => (
                <div key={i} className="logos__item">
                  <Icon />
                  <span className="logos__item-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ WHY AGENTS FAIL ════════════════════════ */}
      <section id="Features" className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">The problem</span>
              <h2 className="h2">Every memory solution<br />has a fatal flaw</h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '46ch' }}>
              Teams reach for chat history, vector stores, or custom tool calls. Each solves a narrow slice of the problem — and breaks under real usage patterns.
            </p>
          </div>

          <div className="fail__table reveal">
            {/* Column 1 — Chat Memory */}
            <div className="fail__col">
              <span className="fail__col-tag">Approach 01</span>
              <div className="fail__col-art"><ArtChatMemory /></div>
              <p className="fail__col-title">Chat Memory</p>
              <p className="fail__col-desc">Stuffing prior messages into the context window. Works until it doesn't.</p>
              <div className="fail__issues">
                {[
                  'Context window fills up fast',
                  'Costs grow with every token',
                  'No cross-session persistence',
                  'Breaks multi-agent setups',
                ].map(issue => (
                  <div key={issue} className="fail__issue">
                    <span className="fail__x">✕</span>
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 — RAG / Vectors */}
            <div className="fail__col">
              <span className="fail__col-tag">Approach 02</span>
              <div className="fail__col-art"><ArtVectors /></div>
              <p className="fail__col-title">RAG / Vectors</p>
              <p className="fail__col-desc">Embedding memories and retrieving by similarity. Powerful for documents, wrong tool for agent state.</p>
              <div className="fail__issues">
                {[
                  'Slow writes block agent flow',
                  'Fuzzy recall misfires on facts',
                  'No structured relationships',
                  'High infra and embedding cost',
                ].map(issue => (
                  <div key={issue} className="fail__issue">
                    <span className="fail__x">✕</span>
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 — Tool Calls */}
            <div className="fail__col">
              <span className="fail__col-tag">Approach 03</span>
              <div className="fail__col-art"><ArtToolCalls /></div>
              <p className="fail__col-title">Tool Calls</p>
              <p className="fail__col-desc">Letting the agent decide when to save and retrieve. Sounds agentic. Fails constantly.</p>
              <div className="fail__issues">
                {[
                  'LLMs forget to call the tool',
                  'Non-deterministic on edge cases',
                  'Doubles latency per turn',
                  'Invisible to other agents',
                ].map(issue => (
                  <div key={issue} className="fail__issue">
                    <span className="fail__x">✕</span>
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BIG CLAIM ══════════════════════════════ */}
      <div className="claim">
        <div className="w">
          <p className="claim__eyebrow reveal">a different approach</p>
          <h2 className="claim__text reveal">
            Bring your context.<br />
            We build <em>understanding.</em><br />
            Your agent just knows.
          </h2>
          <p className="claim__sub reveal">
            GlassMem structures agent memory as a typed knowledge graph — not a key-value store, not a vector index. Facts, relationships, and timing wired together. Retrieved in 4ms.
          </p>
          <div className="claim__ctas reveal">
            <a href="#Pricing" className="btn btn--em btn--lg">Start free</a>
            <a href="https://docs.glassmem.ai" className="btn btn--ghost btn--lg">Read the docs</a>
          </div>
        </div>
      </div>

      {/* ═══ ADD / LEARN / RETRIEVE ═════════════════ */}
      <section className="sec">
        <div className="w">
          <div className="alr__grid">
            {/* Left — steps */}
            <div>
              <div className="alr__intro reveal">
                <span className="label">How it works</span>
                <h2 className="h2">Three things your<br />agent does with memory</h2>
                <p className="body-lg" style={{ marginTop: 14, maxWidth: '46ch' }}>
                  GlassMem sits between your agent and its state. Every interaction leaves a trace. Every future call benefits from it.
                </p>
              </div>
              <div className="alr__steps">
                {[
                  {
                    num: '01',
                    title: 'Add — capture what matters',
                    desc: 'After each interaction, GlassMem extracts entities, preferences, and facts. Stored as structured nodes, not raw text.',
                  },
                  {
                    num: '02',
                    title: 'Learn — build relationships',
                    desc: 'Connections form between facts over time. The more your agent interacts, the richer the graph — without any manual curation.',
                  },
                  {
                    num: '03',
                    title: 'Retrieve — recall in 4ms',
                    desc: 'Every call gets a memory context automatically prepended. Relevant facts, ranked by recency and salience. No vector search, no prompt engineering.',
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

            {/* Right — chat mockup */}
            <div className="alr__mockup reveal">
              <div className="alr__mockup-bar">
                <span className="alr__mockup-dot alr__mockup-dot--r" />
                <span className="alr__mockup-dot alr__mockup-dot--y" />
                <span className="alr__mockup-dot alr__mockup-dot--g" />
                <span className="alr__mockup-title">agent · session_7</span>
              </div>
              <div className="alr__chat">
                <div className="alr__msg alr__msg--user">
                  Book me my usual Friday coffee spot.
                </div>
                <div className="alr__msg alr__msg--sys">
                  Sure — should I book Prufrock at 10AM again?
                </div>
                <div className="alr__msg alr__msg--user">
                  Yes, same as last week.
                </div>
              </div>
              <div className="alr__processing">
                <span className="alr__processing-dot" />
                mem.retrieve() · 4ms · 6 nodes matched
              </div>
              <div className="alr__memories">
                <p className="alr__memories-label">recalled context</p>
                {[
                  'Prefers Prufrock Cafe',
                  'Friday · 10AM routine',
                  'Orders flat white',
                  'Works nearby on Fridays',
                  'Productivity-focused mornings',
                ].map(pill => (
                  <span key={pill} className="alr__pill">
                    <span className="alr__pill-dot" />
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MEMORY GRAPH ═══════════════════════════ */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="graph__grid">
            {/* Left — graph visual */}
            <div className="graph__visual reveal">
              <div className="graph__visual-bar">
                <span className="graph__visual-title">knowledge graph · user_42</span>
                <span className="graph__visual-live">
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6ee7b7', display: 'inline-block', marginRight: 4, animation: 'pulse 2s ease-in-out infinite' }} />
                  live
                </span>
              </div>
              <MemoryGraph />
            </div>

            {/* Right — prose + layers */}
            <div className="graph__prose reveal">
              <span className="label">Memory architecture</span>
              <h2 className="h2">Not a flat store.<br />A structured graph.</h2>
              <p className="body-lg" style={{ marginTop: 14, maxWidth: '44ch' }}>
                Agents need more than facts. They need to understand how facts relate — who, what, when, and why. GlassMem models this as a typed knowledge graph with four memory layers.
              </p>
              <div className="graph__layers">
                {[
                  { name: 'Semantic',  desc: 'User preferences, identities, and stable facts. Long TTL.',     tag: 'ttl: 90d'   },
                  { name: 'Causal',    desc: 'Why things happened. Links between events and outcomes.',        tag: 'ttl: 30d'   },
                  { name: 'Temporal',  desc: 'When things happen. Routines, recurrence, and timing patterns.', tag: 'ttl: 14d'  },
                  { name: 'Entity',    desc: 'Named things — people, places, products — with typed relations.', tag: 'typed nodes' },
                ].map(layer => (
                  <div key={layer.name} className="graph__layer">
                    <div>
                      <p className="graph__layer-name">{layer.name}</p>
                      <p className="graph__layer-tag">{layer.tag}</p>
                    </div>
                    <p className="graph__layer-desc">{layer.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ANALYTICS ══════════════════════════════ */}
      <section className="sec">
        <div className="w">
          <div className="analytics__grid">
            {/* Left — prose */}
            <div className="analytics__prose reveal">
              <span className="label">Observability</span>
              <h2 className="h2">See exactly what<br />your agents remember</h2>
              <p className="body-lg" style={{ marginTop: 14, maxWidth: '44ch' }}>
                Every memory operation is logged, traced, and visible. Know which memories fire most, when context degrades, and where latency hides.
              </p>
              <div className="analytics__points">
                {[
                  { title: 'Per-agent memory graphs',    desc: 'Inspect what each agent has learned, broken down by memory layer and entity type.'    },
                  { title: 'Cache hit analytics',         desc: 'Track hit rates over time. Identify cold-start patterns before they become problems.' },
                  { title: 'OpenTelemetry traces',        desc: 'Every read and write carries full trace context. Plug into your existing stack.'      },
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

            {/* Right — dashboard */}
            <div className="analytics__dashboard reveal">
              <div className="analytics__dash-bar">
                <span className="analytics__dash-title">Memory Analytics</span>
                <span className="analytics__dash-period">last 30 days</span>
              </div>
              <div className="analytics__stats">
                <div className="analytics__stat">
                  <div className="analytics__stat-val">12,847</div>
                  <div className="analytics__stat-lbl">memories stored</div>
                </div>
                <div className="analytics__stat">
                  <div className="analytics__stat-val analytics__stat-em">94.2%</div>
                  <div className="analytics__stat-lbl">cache hit rate</div>
                </div>
                <div className="analytics__stat">
                  <div className="analytics__stat-val">4ms</div>
                  <div className="analytics__stat-lbl">avg recall</div>
                </div>
              </div>
              <div className="analytics__chart-area">
                <div className="analytics__chart-label">
                  <span>memory recalls / day</span>
                  <span style={{ color: '#6ee7b7' }}>+38% this month</span>
                </div>
                <div className="analytics__chart-wrap">
                  <AnalyticsChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES SPLIT ═════════════════════════ */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="split">
            <div className="split__sticky reveal">
              <span className="label">Under the hood</span>
              <h2 className="h2" style={{ marginBottom: 16 }}>Built for<br />production</h2>
              <p className="body-lg" style={{ maxWidth: '40ch' }}>
                GlassMem is not a key-value wrapper. It is a purpose-built memory layer with conflict resolution, streaming, and full observability.
              </p>
              <div className="term" style={{ marginTop: 32 }}>
                <div className="term__bar">
                  <div className="term__dots">
                    <span className="term__dot term__dot--r" />
                    <span className="term__dot term__dot--y" />
                    <span className="term__dot term__dot--g" />
                  </div>
                  <span className="term__file">agent.ts</span>
                  <span style={{ width: 48 }} />
                </div>
                <div className="term__body">
                  {CODE_LINES.map(line => (
                    <div key={line.n} className="term__row">
                      <span className="term__ln">{line.n}</span>
                      <span>{line.t.map((tok, j) => <span key={j} style={{ color: tok.c }}>{tok.t}</span>)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="split__features">
              {FEATURES.map((f, i) => (
                <div key={i} className="split__feat reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                  <p className="split__feat-name">{f.name}</p>
                  <p className="body split__feat-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING ════════════════════════════════ */}
      <section id="Pricing" className="sec">
        <div className="w">
          <div style={{ textAlign: 'center', marginBottom: 48 }} className="reveal">
            <span className="label">Pricing</span>
            <h2 className="h2" style={{ marginBottom: 10 }}>Simple, transparent pricing</h2>
            <p className="body-lg" style={{ maxWidth: '42ch', margin: '0 auto' }}>
              Start free. Scale when your agents do. No hidden costs.
            </p>
          </div>
          <div className="pricing__grid reveal">
            {PLANS.map((p, i) => (
              <div key={i} className={`plan${p.featured ? ' plan--feat' : ''}`}>
                <div className="plan__tier">
                  {p.tier}
                  {p.featured && <span className="plan__badge">Most popular</span>}
                </div>
                <div className="plan__price">
                  {p.price}
                  <span className="plan__period">{p.period}</span>
                </div>
                <div className="plan__desc">{p.desc}</div>
                <div className="plan__rule" />
                <ul className="plan__feats">
                  {p.feats.map(f => (
                    <li key={f} className="plan__feat">
                      <span className="plan__check">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="#" className={`btn btn--lg${p.featured ? ' btn--em' : ' btn--ghost'}`} style={{ justifyContent: 'center' }}>
                  {p.price === 'Custom' ? 'Talk to us' : 'Get started'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════ */}
      <section className="sec cta">
        <div className="w">
          <div className="cta__inner">
            <div className="reveal">
              <span className="label">Get started</span>
              <h2 className="cta__h2">Give your agents<br />memory today</h2>
              <p className="body-lg cta__sub">
                Stop rebuilding state management. Ship agents that remember context, share state, and improve over time.
              </p>
              <div className="cta__btns">
                <a href="#Pricing" className="btn btn--em btn--lg">Start free</a>
                <a href="https://docs.glassmem.ai" className="btn btn--ghost btn--lg">Read the docs</a>
              </div>
              <button className="cta__install" onClick={copy}>
                <span className="cta__install-p">$</span>
                <span style={{ color: 'rgba(255,255,255,0.65)' }}>npm install glassmem</span>
                <span className="hero__install-hint">{copied ? '✓ copied' : 'copy'}</span>
              </button>
            </div>
            <div className="cta__checklist reveal">
              {[
                'Free tier — no credit card required',
                'Production-ready in under 5 minutes',
                'Works with your existing agent framework',
                'Open-source core, MIT license',
                'Deploy to your own infrastructure',
                'Dedicated support on Pro and Enterprise',
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
            {['Docs', 'GitHub', 'Twitter', 'Discord', 'Blog'].map(l => (
              <a key={l} href="#" className="footer__link">{l}</a>
            ))}
          </div>
          <span className="footer__copy">© 2025 GlassMem · MIT License</span>
        </div>
      </footer>

    </div>
  );
}
