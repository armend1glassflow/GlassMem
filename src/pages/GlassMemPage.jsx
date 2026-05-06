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

/* ── Framework SVG logos (simplified, monochrome) ── */
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
  { Icon: IconCursor,   name: 'Cursor'    },
  { Icon: IconClaude,   name: 'Claude'    },
  { Icon: IconCopilot,  name: 'Copilot'   },
  { Icon: IconWindsurf, name: 'Windsurf'  },
  { Icon: IconCline,    name: 'Cline'     },
  { Icon: IconLangChain,name: 'LangChain' },
  { Icon: IconOpenAI,   name: 'OpenAI'    },
  { Icon: IconCrewAI,   name: 'CrewAI'    },
  { Icon: IconAutoGen,  name: 'AutoGen'   },
];

/* ── Bento SVG illustrations ── */
const ArtWrite = () => (
  <svg width="88" height="72" viewBox="0 0 88 72" fill="none">
    {/* Storage rectangle */}
    <rect x="14" y="28" width="60" height="36" rx="5" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
    {/* Inner lines representing data */}
    <line x1="22" y1="40" x2="66" y2="40" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
    <line x1="22" y1="48" x2="54" y2="48" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
    <line x1="22" y1="56" x2="60" y2="56" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
    {/* Arrow down (write = writing INTO storage) */}
    <line x1="44" y1="6" x2="44" y2="24" stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2"/>
    <path d="M38 19 L44 26 L50 19" stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* Dot on storage top */}
    <circle cx="44" cy="28" r="2.5" fill="#6ee7b7" opacity="0.8"/>
  </svg>
);

const ArtRead = () => (
  <svg width="88" height="72" viewBox="0 0 88 72" fill="none">
    {/* Storage rectangle */}
    <rect x="14" y="8" width="60" height="36" rx="5" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
    {/* Inner data lines */}
    <line x1="22" y1="20" x2="66" y2="20" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
    <line x1="22" y1="28" x2="54" y2="28" stroke="#6ee7b7" strokeWidth="1" opacity="0.6"/>
    <line x1="22" y1="36" x2="60" y2="36" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
    {/* Arrow up (read = pulling OUT) */}
    <line x1="44" y1="48" x2="44" y2="66" stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2"/>
    <path d="M38 53 L44 46 L50 53" stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* Speed label */}
    <text x="44" y="70" textAnchor="middle" fill="rgba(110,231,183,0.5)" fontSize="8" fontFamily="monospace">4ms</text>
  </svg>
);

const ArtSync = () => (
  <svg width="100" height="64" viewBox="0 0 100 64" fill="none">
    {/* Left node */}
    <rect x="2" y="18" width="28" height="28" rx="5" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" fill="rgba(255,255,255,0.03)"/>
    <line x1="10" y1="28" x2="22" y2="28" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
    <line x1="10" y1="34" x2="18" y2="34" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
    <line x1="10" y1="40" x2="22" y2="40" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
    {/* Right node */}
    <rect x="70" y="18" width="28" height="28" rx="5" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" fill="rgba(255,255,255,0.03)"/>
    <line x1="78" y1="28" x2="90" y2="28" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
    <line x1="78" y1="34" x2="86" y2="34" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
    <line x1="78" y1="40" x2="90" y2="40" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
    {/* Sync line */}
    <line x1="30" y1="32" x2="70" y2="32" stroke="rgba(110,231,183,0.35)" strokeWidth="1" strokeDasharray="4 3"/>
    {/* Right arrow */}
    <path d="M62 27 L70 32 L62 37" stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* Left arrow */}
    <path d="M38 27 L30 32 L38 37" stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* CRDT label */}
    <text x="50" y="58" textAnchor="middle" fill="rgba(110,231,183,0.4)" fontSize="8" fontFamily="monospace">CRDT</text>
  </svg>
);

const ArtEvents = () => (
  <svg width="100" height="64" viewBox="0 0 100 64" fill="none">
    {/* Timeline axis */}
    <line x1="8" y1="40" x2="92" y2="40" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
    {/* Event blips */}
    {[16, 30, 46, 60, 76].map((x, i) => (
      <g key={i}>
        <line x1={x} y1="40" x2={x} y2={i % 2 === 0 ? 16 : 24} stroke={i % 2 === 0 ? "rgba(110,231,183,0.5)" : "rgba(255,255,255,0.15)"} strokeWidth="1" strokeDasharray="2 2"/>
        <circle cx={x} cy="40" r={i % 2 === 0 ? 3.5 : 2.5} fill={i % 2 === 0 ? "#6ee7b7" : "rgba(255,255,255,0.2)"}/>
        {i % 2 === 0 && (
          <circle cx={x} cy={16} r="4" stroke="rgba(110,231,183,0.4)" strokeWidth="1" fill="rgba(110,231,183,0.08)"/>
        )}
      </g>
    ))}
    {/* Arrow on timeline */}
    <path d="M88 37 L93 40 L88 43" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <text x="50" y="58" textAnchor="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="monospace">event stream</text>
  </svg>
);

const ArtScopes = () => (
  <svg width="80" height="72" viewBox="0 0 80 72" fill="none">
    {/* Outer namespace */}
    <rect x="4" y="6" width="72" height="60" rx="6" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
    <text x="10" y="17" fill="rgba(255,255,255,0.2)" fontSize="8" fontFamily="monospace">tenant</text>
    {/* Mid namespace */}
    <rect x="14" y="22" width="52" height="36" rx="5" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2"/>
    <text x="20" y="33" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace">session</text>
    {/* Inner namespace */}
    <rect x="24" y="38" width="32" height="14" rx="3" fill="rgba(110,231,183,0.08)" stroke="#6ee7b7" strokeWidth="1.2" opacity="0.8"/>
    <text x="40" y="47" textAnchor="middle" fill="rgba(110,231,183,0.7)" fontSize="8" fontFamily="monospace">agent</text>
  </svg>
);

const ArtBackends = () => (
  <svg width="80" height="72" viewBox="0 0 80 72" fill="none">
    {/* Top cylinder */}
    <ellipse cx="40" cy="14" rx="26" ry="7" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" fill="rgba(255,255,255,0.03)"/>
    <line x1="14" y1="14" x2="14" y2="28" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
    <line x1="66" y1="14" x2="66" y2="28" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
    <ellipse cx="40" cy="28" rx="26" ry="7" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)"/>
    {/* Connector */}
    <line x1="40" y1="35" x2="40" y2="41" stroke="rgba(110,231,183,0.4)" strokeWidth="1.5" strokeDasharray="3 2" strokeLinecap="round"/>
    {/* Bottom cylinder */}
    <ellipse cx="40" cy="48" rx="26" ry="7" stroke="rgba(110,231,183,0.5)" strokeWidth="1.5" fill="rgba(110,231,183,0.05)"/>
    <line x1="14" y1="48" x2="14" y2="62" stroke="rgba(110,231,183,0.5)" strokeWidth="1.5"/>
    <line x1="66" y1="48" x2="66" y2="62" stroke="rgba(110,231,183,0.5)" strokeWidth="1.5"/>
    <ellipse cx="40" cy="62" rx="26" ry="7" stroke="rgba(110,231,183,0.5)" strokeWidth="1.5" fill="rgba(110,231,183,0.04)"/>
    <text x="40" y="66" textAnchor="middle" fill="rgba(110,231,183,0.45)" fontSize="8" fontFamily="monospace">redis · pg</text>
  </svg>
);

/* ── Memory table for wide bento cell ── */
const MemTable = () => {
  const rows = [
    { key: 'user_intent',    val: '"book_flight"',    ttl: '90d' },
    { key: 'last_context',   val: '{id: "9dk21…"}',  ttl: '90d' },
    { key: 'search_results', val: '["JFK", "LAX"]',  ttl: '1h'  },
    { key: 'preferences',    val: '{theme: "dark"}',  ttl: '90d' },
    { key: 'session_state',  val: '"authenticated"',  ttl: '24h' },
  ];
  return (
    <div className="mem-table">
      <div className="mem-table__bar">
        <span className="mem-table__ns">
          <span className="mem-table__ns-dot" />
          namespace: user_42
        </span>
        <span className="mem-table__live-tag">LIVE</span>
      </div>
      <div className="mem-table__head">
        <span>key</span>
        <span>value</span>
        <span>ttl</span>
        <span>state</span>
      </div>
      {rows.map(r => (
        <div key={r.key} className="mem-table__row">
          <span className="mem-table__key">{r.key}</span>
          <span className="mem-table__val">{r.val}</span>
          <span className="mem-table__ttl">{r.ttl}</span>
          <span className="mem-table__live">
            <span className="mem-table__dot" />
            live
          </span>
        </div>
      ))}
    </div>
  );
};

/* ── Scroll reveal ── */
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

/* ── Data ── */
const EVENTS = [
  { color: '#6ee7b7', method: 'memory.write()',  detail: 'user_42 · intent="book_flight"',  ms: '0ms' },
  { color: '#a3a3a3', method: 'memory.read()',   detail: 'user_42 · cache hit',              ms: '4ms' },
  { color: '#6ee7b7', method: 'memory.sync()',   detail: 'pool · 3 replicas reconciled',     ms: '8ms' },
  { color: '#a3a3a3', method: 'event.emit()',    detail: 'key=last_intent · 2 subscribers',  ms: '2ms' },
  { color: '#6ee7b7', method: 'memory.scope()', detail: 'tenant_99 · isolated namespace',    ms: '1ms' },
];

const PROBLEMS = [
  { num: '01', title: 'State evaporates between calls', text: 'Every invocation starts cold. Your agent re-fetches facts, re-derives context, and burns tokens on reasoning it already completed — every single time.' },
  { num: '02', title: 'Redundant compute compounds at scale', text: 'Without shared memory, every agent in your pool duplicates work independently. At 1,000 RPM, you pay for the same inference 1,000 times.' },
  { num: '03', title: 'Multi-agent coordination is fragile', text: 'Multi-agent pipelines need a shared source of truth. Bolting Redis on top gives you race conditions and stale reads. GlassMem solves this at the primitive level.' },
];

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
  { name: 'Sub-10ms reads',       desc: 'Served from an in-process cache with async write-through. Your agents never block on state.' },
  { name: 'CRDT conflict resolution', desc: 'Writes propagate across replicas using a grow-only CRDT. No manual merging, no last-write-wins surprises.' },
  { name: 'Namespaced isolation', desc: 'Per-agent, per-session, and per-tenant namespaces built in. No configuration required to isolate workloads.' },
  { name: 'Streaming event bus',  desc: 'Every mutation emits a typed event. Build reactive pipelines without a single setTimeout or polling loop.' },
  { name: 'Pluggable backends',   desc: 'In-memory, Redis, PostgreSQL, or Supabase. Swap backends without changing a line of agent code.' },
  { name: 'OpenTelemetry native', desc: 'Full trace context on every read and write. Debug exactly where memory adds latency — no guessing.' },
];

const PLANS = [
  { tier:'Hobby',      price:'$0',     period:'/mo', desc:'For side projects',      featured:false, feats:['1 project','100K ops / mo','1-day TTL','In-memory backend','Community support'] },
  { tier:'Pro',        price:'$49',    period:'/mo', desc:'For production agents',  featured:true,  feats:['Unlimited projects','10M ops / mo','90-day TTL','Redis + Postgres backends','Streaming events','Priority support'] },
  { tier:'Enterprise', price:'Custom', period:'',    desc:'For teams at scale',     featured:false, feats:['SLA guarantee','Unlimited ops','Custom TTL','VPC deployment','SOC 2 compliant','Dedicated support'] },
];

/* ══════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════ */
export function GlassMemPage() {
  useReveal();

  const [scrolled, setScrolled] = useState(false);
  const [mobOpen,  setMobOpen]  = useState(false);
  const [activeEv, setActiveEv] = useState(0);
  const [copied,   copy]        = useCopy('npm install glassmem');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveEv(i => (i + 1) % EVENTS.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div>

      {/* ═══ NAV ═══════════════════════════════════ */}
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

      {/* ═══ HERO ══════════════════════════════════ */}
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
                Persistent memory<br />for AI agents
              </h1>
              <p className="body-lg hero__sub enter-3">
                Your agents forget everything between calls. GlassMem gives them sub-10ms read/write memory with automatic sync across replicas — without managing any infrastructure.
              </p>
              <div className="hero__ctas enter-4">
                <a href="#Pricing" className="btn btn--em btn--lg">Start free</a>
                <a href="https://docs.glassmem.ai" className="btn btn--ghost btn--lg">Read the docs</a>
              </div>
              <button className="hero__install enter-5" onClick={copy}>
                <span className="hero__install-p">$</span>
                <span style={{ color:'rgba(255,255,255,0.65)' }}>npm install glassmem</span>
                <span className="hero__install-hint">{copied ? '✓ copied' : 'copy'}</span>
              </button>
            </div>

            <div className="hero__panel">
              <div className="hero__panel-bar">
                <span className="hero__panel-title"><Logo size={14} />GlassMem · live stream</span>
                <span className="hero__panel-live"><span className="hero__panel-dot" />LIVE</span>
              </div>
              <div className="hero__stats">
                {[{val:'4ms',lbl:'avg read latency'},{val:'100%',lbl:'cache hit rate'},{val:'3',lbl:'active agents'}].map(s => (
                  <div key={s.lbl} className="hero__stat">
                    <div className="hero__stat-val">{s.val}</div>
                    <div className="hero__stat-lbl">{s.lbl}</div>
                  </div>
                ))}
              </div>
              {EVENTS.map((ev, i) => (
                <div key={i} className="hero__event" style={{ opacity: i === activeEv ? 1 : 0.3, transition:'opacity 0.4s' }}>
                  <span className="hero__event-dot" style={{ background: ev.color }} />
                  <div style={{ flex:1, minWidth:0 }}>
                    <div className="hero__event-method" style={{ color: ev.color }}>{ev.method}</div>
                    <div className="hero__event-detail">{ev.detail}</div>
                  </div>
                  <span className="hero__event-time">{ev.ms}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LOGOS STRIP ═══════════════════════════ */}
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

      {/* ═══ PROBLEM ═══════════════════════════════ */}
      <section id="Features" className="sec">
        <div className="w">
          <div className="problem__top reveal">
            <div>
              <span className="label">The problem</span>
              <h2 className="h2">Stateless agents<br />are broken by design</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'48ch' }}>
              AI frameworks give you routing, tool use, and streaming — but no memory. You bolt on Redis, hand-write sync logic, debug race conditions, and start again every time requirements change.
            </p>
          </div>
          {PROBLEMS.map((p, i) => (
            <div key={i} className="problem__item reveal" style={{ transitionDelay:`${i*0.06}s` }}>
              <span className="problem__num mono">{p.num}</span>
              <div>
                <p className="problem__title">{p.title}</p>
                <p className="body problem__text">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ HOW IT WORKS — BENTO GRID ══════════════ */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="bento-head reveal">
            <div>
              <span className="label">How it works</span>
              <h2 className="h2">One import.<br />Infinite memory.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'46ch' }}>
              GlassMem sits between your agent and its state. Reads hit an in-process cache in under 10ms. Writes propagate to all replicas via a conflict-free CRDT.
            </p>
          </div>

          <div className="bento-grid reveal">
            {/* Row 1 */}
            <div className="bento-cell">
              <div className="bento-cell__art"><ArtWrite /></div>
              <p className="bento-cell__title">Write memory</p>
              <p className="bento-cell__desc">mem.write() persists a key instantly to your configured backend — in-memory, Redis, or Postgres.</p>
            </div>

            <div className="bento-cell bento-cell--wide">
              <div className="mem-table-wrap" style={{ padding:'4px 0 16px' }}>
                <MemTable />
              </div>
              <p className="bento-cell__title">Live memory namespace</p>
              <p className="bento-cell__desc">Every key, value, and TTL is visible in real time. Scoped per agent, session, or tenant.</p>
            </div>

            <div className="bento-cell">
              <div className="bento-cell__art"><ArtRead /></div>
              <p className="bento-cell__title">Read anywhere</p>
              <p className="bento-cell__desc">mem.read() returns in 4ms from any agent instance, any region — served from the local cache.</p>
            </div>

            {/* Row 2 */}
            <div className="bento-cell">
              <div className="bento-cell__art"><ArtSync /></div>
              <p className="bento-cell__title">CRDT sync</p>
              <p className="bento-cell__desc">Writes converge automatically across all replicas. No manual merging, no race conditions.</p>
            </div>

            <div className="bento-cell">
              <div className="bento-cell__art"><ArtEvents /></div>
              <p className="bento-cell__title">Event stream</p>
              <p className="bento-cell__desc">Every mutation emits a typed event. Build reactive agent pipelines without polling.</p>
            </div>

            <div className="bento-cell">
              <div className="bento-cell__art"><ArtScopes /></div>
              <p className="bento-cell__title">Namespaces</p>
              <p className="bento-cell__desc">Per-agent, per-session, per-tenant isolation out of the box. No configuration required.</p>
            </div>

            <div className="bento-cell">
              <div className="bento-cell__art"><ArtBackends /></div>
              <p className="bento-cell__title">Pluggable backends</p>
              <p className="bento-cell__desc">Swap in-memory for Redis or Postgres without changing a line of agent code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES SPLIT ════════════════════════ */}
      <section className="sec">
        <div className="w">
          <div className="split">
            <div className="split__sticky reveal">
              <span className="label">Under the hood</span>
              <h2 className="h2" style={{ marginBottom:16 }}>Built for<br />production</h2>
              <p className="body-lg" style={{ maxWidth:'40ch' }}>
                GlassMem is not a key-value wrapper. It is a purpose-built memory layer with conflict resolution, streaming, and full observability.
              </p>

              <div className="term" style={{ marginTop:32 }}>
                <div className="term__bar">
                  <div className="term__dots">
                    <span className="term__dot term__dot--r"/><span className="term__dot term__dot--y"/><span className="term__dot term__dot--g"/>
                  </div>
                  <span className="term__file">agent.ts</span>
                  <span style={{width:48}}/>
                </div>
                <div className="term__body">
                  {CODE_LINES.map(line => (
                    <div key={line.n} className="term__row">
                      <span className="term__ln">{line.n}</span>
                      <span>{line.t.map((tok,j) => <span key={j} style={{color:tok.c}}>{tok.t}</span>)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="split__features">
              {FEATURES.map((f,i) => (
                <div key={i} className="split__feat reveal" style={{transitionDelay:`${i*0.05}s`}}>
                  <p className="split__feat-name">{f.name}</p>
                  <p className="body split__feat-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══════════════════════════════ */}
      <section id="Pricing" className="sec sec--alt">
        <div className="w">
          <div style={{textAlign:'center',marginBottom:48}} className="reveal">
            <span className="label">Pricing</span>
            <h2 className="h2" style={{marginBottom:10}}>Simple, transparent pricing</h2>
            <p className="body-lg" style={{maxWidth:'42ch',margin:'0 auto'}}>Start free. Scale when your agents do. No hidden costs.</p>
          </div>
          <div className="pricing__grid reveal">
            {PLANS.map((p,i) => (
              <div key={i} className={`plan${p.featured?' plan--feat':''}`}>
                <div className="plan__tier">{p.tier}{p.featured&&<span className="plan__badge">Most popular</span>}</div>
                <div className="plan__price">{p.price}<span className="plan__period">{p.period}</span></div>
                <div className="plan__desc">{p.desc}</div>
                <div className="plan__rule"/>
                <ul className="plan__feats">
                  {p.feats.map(f=><li key={f} className="plan__feat"><span className="plan__check">✓</span>{f}</li>)}
                </ul>
                <a href="#" className={`btn btn--lg${p.featured?' btn--em':' btn--ghost'}`} style={{justifyContent:'center'}}>
                  {p.price==='Custom'?'Talk to us':'Get started'}
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
              <p className="body-lg cta__sub">Stop rebuilding state management. Ship agents that remember context, share state, and improve over time.</p>
              <div className="cta__btns">
                <a href="#Pricing" className="btn btn--em btn--lg">Start free</a>
                <a href="https://docs.glassmem.ai" className="btn btn--ghost btn--lg">Read the docs</a>
              </div>
              <button className="cta__install" onClick={copy}>
                <span className="cta__install-p">$</span>
                <span style={{color:'rgba(255,255,255,0.65)'}}>npm install glassmem</span>
                <span className="hero__install-hint">{copied?'✓ copied':'copy'}</span>
              </button>
            </div>
            <div className="cta__checklist reveal">
              {['Free tier — no credit card required','Production-ready in under 5 minutes','Works with your existing agent framework','Open-source core, MIT license','Deploy to your own infrastructure','Dedicated support on Pro and Enterprise'].map(item=>(
                <div key={item} className="cta__check-item">
                  <span className="cta__check-dot"/>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ════════════════════════════════ */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand"><Logo size={18}/><span className="footer__word">GlassMem</span></div>
          <div className="footer__links">
            {['Docs','GitHub','Twitter','Discord','Blog'].map(l=><a key={l} href="#" className="footer__link">{l}</a>)}
          </div>
          <span className="footer__copy">© 2025 GlassMem · MIT License</span>
        </div>
      </footer>

    </div>
  );
}
