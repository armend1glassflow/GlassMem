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

/* ── Problem glyphs (animated SVG) ── */
const FragmentedGlyph = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <circle cx="10" cy="10" r="5" fill="none" stroke="rgba(239,68,68,0.65)" strokeWidth="1.5">
      <animate attributeName="opacity" values="1;0.35;1" dur="2.6s" repeatCount="indefinite" begin="0s"/>
    </circle>
    <circle cx="34" cy="10" r="5" fill="none" stroke="rgba(239,68,68,0.65)" strokeWidth="1.5">
      <animate attributeName="opacity" values="1;0.35;1" dur="2.6s" repeatCount="indefinite" begin="0.65s"/>
    </circle>
    <circle cx="10" cy="34" r="5" fill="none" stroke="rgba(239,68,68,0.65)" strokeWidth="1.5">
      <animate attributeName="opacity" values="1;0.35;1" dur="2.6s" repeatCount="indefinite" begin="1.3s"/>
    </circle>
    <circle cx="34" cy="34" r="5" fill="none" stroke="rgba(239,68,68,0.65)" strokeWidth="1.5">
      <animate attributeName="opacity" values="1;0.35;1" dur="2.6s" repeatCount="indefinite" begin="1.95s"/>
    </circle>
    <line x1="15" y1="10" x2="20" y2="10" stroke="rgba(239,68,68,0.2)" strokeWidth="1" strokeDasharray="2,2"/>
    <line x1="24" y1="10" x2="29" y2="10" stroke="rgba(239,68,68,0.2)" strokeWidth="1" strokeDasharray="2,2"/>
    <line x1="10" y1="15" x2="10" y2="20" stroke="rgba(239,68,68,0.2)" strokeWidth="1" strokeDasharray="2,2"/>
    <line x1="34" y1="15" x2="34" y2="20" stroke="rgba(239,68,68,0.2)" strokeWidth="1" strokeDasharray="2,2"/>
    <circle cx="22" cy="22" r="2.5" fill="none" stroke="rgba(239,68,68,0.35)" strokeWidth="1"/>
  </svg>
);
const BrokenHandoffGlyph = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <circle cx="8" cy="22" r="5" fill="rgba(239,68,68,0.07)" stroke="rgba(239,68,68,0.6)" strokeWidth="1.5"/>
    <line x1="13" y1="22" x2="17" y2="22" stroke="rgba(239,68,68,0.55)" strokeWidth="1.5"/>
    <line x1="19" y1="18.5" x2="25" y2="25.5" stroke="rgba(239,68,68,0.8)" strokeWidth="1.5">
      <animate attributeName="opacity" values="1;0.25;1" dur="1.8s" repeatCount="indefinite"/>
    </line>
    <line x1="25" y1="18.5" x2="19" y2="25.5" stroke="rgba(239,68,68,0.8)" strokeWidth="1.5">
      <animate attributeName="opacity" values="1;0.25;1" dur="1.8s" repeatCount="indefinite"/>
    </line>
    <line x1="27" y1="22" x2="31" y2="22" stroke="rgba(239,68,68,0.2)" strokeWidth="1.5" strokeDasharray="2,2"/>
    <circle cx="36" cy="22" r="5" fill="none" stroke="rgba(239,68,68,0.2)" strokeWidth="1.5" strokeDasharray="2,2"/>
  </svg>
);
const StaleStateGlyph = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <path d="M22 9 L37 35 L7 35 Z" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.65)" strokeWidth="1.5" strokeLinejoin="round">
      <animate attributeName="opacity" values="1;0.45;1" dur="2.1s" repeatCount="indefinite"/>
    </path>
    <line x1="22" y1="18" x2="22" y2="27" stroke="rgba(239,68,68,0.85)" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="22" cy="31.5" r="1.5" fill="rgba(239,68,68,0.85)"/>
  </svg>
);
const ManualSyncGlyph = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <rect x="3" y="14" width="14" height="9" rx="2" fill="rgba(239,68,68,0.07)" stroke="rgba(239,68,68,0.55)" strokeWidth="1.5"/>
    <rect x="27" y="21" width="14" height="9" rx="2" fill="rgba(239,68,68,0.07)" stroke="rgba(239,68,68,0.55)" strokeWidth="1.5"/>
    <path d="M 17 18.5 C 22 18.5 22 26 27 26" fill="none" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5" strokeDasharray="3,2">
      <animate attributeName="strokeDashoffset" values="0;-10" dur="1.4s" repeatCount="indefinite"/>
    </path>
    <path d="M 24.5 23.5 L 27 26 L 24.5 27.5" fill="none" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="22" cy="8.5" r="2.5" fill="none" stroke="rgba(239,68,68,0.4)" strokeWidth="1.2"/>
    <path d="M 17 13 C 19 10.5 25 10.5 27 13" fill="none" stroke="rgba(239,68,68,0.4)" strokeWidth="1.2"/>
  </svg>
);

/* ── Hero visualization data ── */
const CTX_EVENTS = [
  { actor: 'Planner Agent', action: 'writes constraint', type: 'write',
    content: '"Freeze billing changes — Stripe migration active until Friday 18:00"' },
  { actor: 'GlassMem', action: 'propagates to 5 agents', type: 'propagate',
    content: 'Constraint synchronized across all connected agents instantly' },
  { actor: 'Debug Agent', action: 'records failure', type: 'record',
    content: '"Redis cache caused stale reads in billing sync — avoid"' },
  { actor: 'GlassMem', action: 'blocks repeat', type: 'block',
    content: 'Redis approach flagged — preventing External Agent from repeating failure' },
  { actor: 'GlassMem', action: 'auto-expires', type: 'expire',
    content: 'Billing freeze removed after migration window closed' },
];
const LAGENTS = [
  { name: 'Claude Code',   pip: '#6ee7b7', cy: 62  },
  { name: 'Cursor',        pip: '#a78bfa', cy: 124 },
  { name: 'Planner Agent', pip: '#fb923c', cy: 186 },
];
const RAGENTS = [
  { name: 'Debug Agent',       pip: '#7dd3fc', cy: 62  },
  { name: 'External Agent',    pip: '#94a3b8', cy: 124 },
  { name: 'Billing Sub-Agent', pip: '#f472b6', cy: 186 },
];

const ContextFlowViz = () => {
  const [evIdx, setEvIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setEvIdx(i => (i + 1) % CTX_EVENTS.length); setVisible(true); }, 280);
    }, 3200);
    return () => clearInterval(id);
  }, []);
  const ev = CTX_EVENTS[evIdx];
  const CX = 280, CY = 124;
  const RO = 46, RM = 36, RI = 28;
  const LS = 0.026;
  const LW = 1023 * LS, LH = 977 * LS;
  return (
    <div className="cfviz">
      <div className="cfviz__bar">
        <span className="cfviz__bar-title"><Logo size={12}/>GlassMem · context layer</span>
        <span className="cfviz__bar-live"><span className="mfviz__live-dot"/>LIVE</span>
      </div>
      <div className="cfviz__stage">
        <svg viewBox="0 0 560 252" className="cfviz__svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="cfHG" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#6ee7b7" stopOpacity="0.22"/>
              <stop offset="55%"  stopColor="#6ee7b7" stopOpacity="0.07"/>
              <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0"/>
            </radialGradient>
            <filter id="cfDF" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="1.2" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            {LAGENTS.map((ag, i) => (
              <path key={`pl${i}`} id={`cfpl${i}`}
                d={`M 132,${ag.cy} L ${CX - RI - 2},${CY}`} stroke="none" fill="none"/>
            ))}
            {RAGENTS.map((ag, i) => (
              <path key={`pr${i}`} id={`cfpr${i}`}
                d={`M ${CX + RI + 2},${CY} L 428,${ag.cy}`} stroke="none" fill="none"/>
            ))}
            <path id="cfpd" d={`M ${CX},${CY + RI + 2} L ${CX},256`} stroke="none" fill="none"/>
          </defs>

          <ellipse cx={CX} cy={CY} rx="90" ry="90" fill="url(#cfHG)"/>

          {LAGENTS.map((ag, i) => (
            <line key={`ll${i}`} x1="132" y1={ag.cy} x2={CX - RI - 2} y2={CY}
              stroke="rgba(110,231,183,0.22)" strokeWidth="1" strokeDasharray="3,5"/>
          ))}
          {RAGENTS.map((ag, i) => (
            <line key={`lr${i}`} x1={CX + RI + 2} y1={CY} x2="428" y2={ag.cy}
              stroke="rgba(110,231,183,0.22)" strokeWidth="1" strokeDasharray="3,5"/>
          ))}
          <line x1={CX} y1={CY + RI + 2} x2={CX} y2="252"
            stroke="rgba(110,231,183,0.22)" strokeWidth="1" strokeDasharray="3,5"/>

          {LAGENTS.map((_, i) =>
            [{r:3.2, op:0.9, b:i*0.52}, {r:2.4, op:0.58, b:i*0.52+1.0}, {r:1.7, op:0.3, b:i*0.52+1.82}]
            .map(({r, op, b}, j) => (
              <circle key={`dl${i}${j}`} r={r} fill="#6ee7b7" opacity={op} filter="url(#cfDF)">
                <animateMotion dur={`${2.1 + i*0.26}s`} repeatCount="indefinite" begin={`${b}s`}>
                  <mpath href={`#cfpl${i}`}/>
                </animateMotion>
              </circle>
            ))
          )}
          {RAGENTS.map((_, i) =>
            [{r:3.2, op:0.9, b:i*0.58+0.28}, {r:2.4, op:0.58, b:i*0.58+1.18}, {r:1.7, op:0.3, b:i*0.58+2.02}]
            .map(({r, op, b}, j) => (
              <circle key={`dr${i}${j}`} r={r} fill="#6ee7b7" opacity={op} filter="url(#cfDF)">
                <animateMotion dur={`${1.95 + i*0.29}s`} repeatCount="indefinite" begin={`${b}s`}>
                  <mpath href={`#cfpr${i}`}/>
                </animateMotion>
              </circle>
            ))
          )}
          {[0, 0.68, 1.36, 2.04, 2.72].map((b, j) => (
            <circle key={`dd${j}`} r={j%2===0 ? 2.8 : 2.2} fill="#6ee7b7"
              opacity={j%2===0 ? 0.78 : 0.48} filter="url(#cfDF)">
              <animateMotion dur="2.1s" repeatCount="indefinite" begin={`${b}s`}>
                <mpath href="#cfpd"/>
              </animateMotion>
            </circle>
          ))}

          <circle cx={CX} cy={CY} r={RO}
            fill="none" stroke="rgba(110,231,183,0.14)" strokeWidth="1" strokeDasharray="5,7">
            <animateTransform attributeName="transform" type="rotate"
              from={`0 ${CX} ${CY}`} to={`360 ${CX} ${CY}`} dur="24s" repeatCount="indefinite"/>
          </circle>
          <circle cx={CX} cy={CY} r={RM}
            fill="rgba(110,231,183,0.04)" stroke="rgba(110,231,183,0.32)" strokeWidth="1.2"/>
          <circle cx={CX} cy={CY} r={RI}
            fill="#0b0b0e" stroke="rgba(110,231,183,0.78)" strokeWidth="1.5"/>

          <g transform={`translate(${CX - LW/2},${CY - LH/2}) scale(${LS})`}>
            <path d="M1022.52 373.339C1021.96 372.826 1021.43 372.662 1020.91 372.849C952.332 397.256 883.755 421.662 815.182 446.069L813.942 446.119L355.892 113.329C355.715 112.988 355.715 112.988 355.892 112.639L510.772 0.108917C511.247 0.0018574 511.37 0.0434618 511.472 0.118911C529.505 13.2856 698.222 135.869 1017.62 367.869C1020.3 369.816 1021.92 371.036 1022.47 371.529C1022.89 371.896 1022.91 372.499 1022.52 373.339Z" fill="rgba(255,255,255,0.82)"/>
            <path d="M612.422 504.079L415.752 576.149C372.365 546.522 329.145 517.002 286.092 487.589C259.552 469.462 232.819 451.019 205.892 432.259C179.252 413.692 152.602 395.125 125.942 376.559L54.1621 326.559L209.062 215.459C210.556 215.275 210.812 215.459L612.422 504.079Z" fill="rgba(255,255,255,0.82)"/>
            <path d="M54.1621 326.559L125.942 376.559L294.232 916.569L273.442 976.189L189.202 976.149C188.722 975.809L0.0420414 366.449C0.111531 365.671 0.392048 365.389L54.1621 326.559Z" fill="#6ee7b7"/>
            <path d="M612.421 504.079L459.441 975.729C459.078 976.163 458.791 976.209L273.441 976.189L294.231 916.569C335.255 802.876 375.511 690.306 415.771 577.739C416.151 576.136 415.751 576.149L612.421 504.079Z" fill="#6ee7b7"/>
            <path d="M960.793 563.233L827.393 973.609C826.938 974.142 826.583 974.199H642.673L813.942 446.119H815.183C869.944 426.578 924.709 407.088 979.475 387.597L1023 372L960.793 563.233Z" fill="#6ee7b7"/>
          </g>

          <text x={CX} y={CY - RO - 9} textAnchor="middle"
            fontFamily="Manrope,-apple-system,sans-serif"
            fontSize="12" fontWeight="600"
            fill="rgba(255,255,255,0.75)" letterSpacing="0.05em">
            GlassMem
          </text>

          {LAGENTS.map(ag => (
            <g key={ag.name}>
              <rect x="0" y={ag.cy - 19} width="132" height="38" rx="6"
                fill="rgba(15,15,18,0.97)" stroke="rgba(255,255,255,0.14)"
                strokeWidth="1" strokeDasharray="4,3"/>
              <circle cx="14" cy={ag.cy} r="4" fill={ag.pip}/>
              <text x="25" y={ag.cy + 5}
                fontFamily="'Fira Code','SF Mono',monospace"
                fontSize="12" fill="rgba(205,205,205,0.92)">{ag.name}</text>
            </g>
          ))}
          {RAGENTS.map(ag => (
            <g key={ag.name}>
              <rect x="428" y={ag.cy - 19} width="132" height="38" rx="6"
                fill="rgba(15,15,18,0.97)" stroke="rgba(255,255,255,0.14)"
                strokeWidth="1" strokeDasharray="4,3"/>
              <circle cx="442" cy={ag.cy} r="4" fill={ag.pip}/>
              <text x="453" y={ag.cy + 5}
                fontFamily="'Fira Code','SF Mono',monospace"
                fontSize="12" fill="rgba(205,205,205,0.92)">{ag.name}</text>
            </g>
          ))}
        </svg>
      </div>

      <div className="cfviz__caps">
        {[['⇝','propagation'],['↳','inheritance'],['◈','scoped'],['⊘','invalidation'],['◉','lineage']].map(([icon, label]) => (
          <div key={label} className="cfviz__cap">
            <span className="cfviz__cap-icon">{icon}</span>
            <span className="cfviz__cap-label">{label}</span>
          </div>
        ))}
      </div>

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

/* ── Live coordination demo ── */
const DEMO_SCENARIOS = [
  {
    id: 'billing',
    label: 'Billing freeze',
    color: '#fb923c',
    trigger: {
      agent: 'Planner Agent',
      pip: '#fb923c',
      action: 'writes constraint',
      content: '"Freeze all billing changes — Stripe migration active until Friday 18:00"',
    },
    agents: [
      { name: 'Claude Code',       pip: '#6ee7b7', before: 'Implementing billing module refactor', after: 'Billing refactor paused — freeze constraint received', status: 'adapted' },
      { name: 'Cursor',            pip: '#a78bfa', before: 'Editing billing controller',           after: 'Billing edits suspended until freeze expires',        status: 'adapted' },
      { name: 'Debug Agent',       pip: '#7dd3fc', before: 'Debugging billing sync',               after: 'Restricted to read-only billing analysis',            status: 'adapted' },
      { name: 'CI Agent',          pip: '#34d399', before: 'Running standard checks',              after: 'Auto-blocking billing PRs from merging',              status: 'blocked' },
      { name: 'Billing Sub-Agent', pip: '#f472b6', before: 'Spawning: billing task',               after: 'Inherited freeze — executing read-only path only',    status: 'inherited' },
    ],
    steps: [
      'Planner Agent writes billing freeze to context store',
      'GlassMem identifies 5 agents in billing scope',
      'Claude Code and Cursor adapt to constraint',
      'CI Agent automatically blocks billing-related PRs',
      'New Billing Sub-Agent spawns with freeze inherited',
    ],
  },
  {
    id: 'redis',
    label: 'Cache failure',
    color: '#ef4444',
    trigger: {
      agent: 'Debug Agent',
      pip: '#7dd3fc',
      action: 'records failure',
      content: '"Redis cache caused stale reads in billing sync — do not retry this approach"',
    },
    agents: [
      { name: 'Claude Code',   pip: '#6ee7b7', before: 'Considering Redis for caching layer',  after: 'Avoiding Redis — failure flagged in billing scope',       status: 'adapted' },
      { name: 'Planner Agent', pip: '#fb923c', before: 'Planning distributed cache strategy',  after: 'Redis removed from plan — switching to Postgres',         status: 'adapted' },
      { name: 'Backend Agent', pip: '#94a3b8', before: 'Writing cache layer for billing sync', after: 'Switching to Postgres row-level locking pattern',         status: 'adapted' },
      { name: 'Review Agent',  pip: '#a78bfa', before: 'Reviewing cache implementation PRs',  after: 'Will reject any Redis usage in billing scope PRs',        status: 'blocked' },
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
    id: 'security',
    label: 'Security incident',
    color: '#ef4444',
    trigger: {
      agent: 'Security Agent',
      pip: '#ef4444',
      action: 'raises alert',
      content: '"SQL injection vulnerability in user input handling — patch before next deploy"',
    },
    agents: [
      { name: 'Claude Code',   pip: '#6ee7b7', before: 'Writing new user input handler',       after: 'Switching to parameterized queries immediately',       status: 'adapted' },
      { name: 'Review Agent',  pip: '#a78bfa', before: 'Reviewing backend PRs normally',       after: 'Flagging raw SQL usage in all open reviews',           status: 'adapted' },
      { name: 'Testing Agent', pip: '#7dd3fc', before: 'Running standard test suite',          after: 'Adding SQL injection tests to all active suites',      status: 'adapted' },
      { name: 'Deploy Agent',  pip: '#fb923c', before: 'Preparing next deployment',            after: 'Blocking deploy — security constraint active',         status: 'blocked' },
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
    id: 'escalation',
    label: 'Customer escalation',
    color: '#7dd3fc',
    trigger: {
      agent: 'Support Agent',
      pip: '#7dd3fc',
      action: 'writes escalation',
      content: '"Enterprise customer reporting data export timeouts above 30s — P1 priority"',
    },
    agents: [
      { name: 'Claude Code',       pip: '#6ee7b7', before: 'Working on unrelated feature task',    after: 'Prioritizing export performance optimization',    status: 'adapted' },
      { name: 'Performance Agent', pip: '#a78bfa', before: 'Running scheduled benchmarks',         after: 'Profiling export queries — P1 active',            status: 'adapted' },
      { name: 'Database Agent',    pip: '#94a3b8', before: 'Routine index maintenance',            after: 'Optimizing export query indexes immediately',     status: 'adapted' },
      { name: 'API Agent',         pip: '#fb923c', before: 'Building new API endpoints',           after: 'Adding export timeout config endpoint',          status: 'adapted' },
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
    id: 'architecture',
    label: 'Architecture migration',
    color: '#a78bfa',
    trigger: {
      agent: 'Architect Agent',
      pip: '#a78bfa',
      action: 'writes decision',
      content: '"Migrating from REST to GraphQL — no new REST endpoints after 2026-06-15"',
    },
    agents: [
      { name: 'Claude Code',   pip: '#6ee7b7', before: 'Building a new REST endpoint',      after: 'Switching to GraphQL resolver instead',             status: 'adapted' },
      { name: 'Cursor',        pip: '#a78bfa', before: 'Writing REST API handler',          after: 'Pausing REST work — GraphQL migration active',      status: 'adapted' },
      { name: 'API Agent',     pip: '#fb923c', before: 'Generating REST API docs',          after: 'GraphQL schema generation instead',                 status: 'adapted' },
      { name: 'Review Agent',  pip: '#7dd3fc', before: 'Reviewing API change PRs',         after: 'Rejecting new REST endpoints in all open reviews',  status: 'blocked' },
      { name: 'Docs Agent',    pip: '#94a3b8', before: 'Writing REST API documentation',   after: 'Updating documentation for GraphQL migration',      status: 'adapted' },
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
    if (step === -1) {
      t = setTimeout(() => setStep(0), 1100);
    } else if (step < sc.steps.length - 1) {
      t = setTimeout(() => setStep(s => s + 1), 740);
    } else {
      t = setTimeout(() => setStep(-1), 2800);
    }
    return () => clearTimeout(t);
  }, [step, sc.steps.length]);

  return (
    <div className="demo">
      <div className="demo__tabs">
        {DEMO_SCENARIOS.map((s, i) => (
          <button
            key={s.id}
            className={`demo__tab${i === scIdx ? ' demo__tab--on' : ''}`}
            onClick={() => setScIdx(i)}
          >
            <span className="demo__tab-dot" style={{ background: s.color }}/>
            {s.label}
          </button>
        ))}
      </div>

      <div className="demo__main">
        {/* Left: trigger + log */}
        <div className="demo__left">
          <p className="demo__col-label">Context update</p>
          <div className="demo__trigger">
            <div className="demo__trigger-header">
              <span className="demo__pip" style={{ background: sc.trigger.pip }}/>
              <span className="demo__trigger-agent">{sc.trigger.agent}</span>
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

        {/* Center: GlassMem hub */}
        <div className="demo__hub">
          <div className="demo__hub-line"/>
          <div className="demo__hub-node">
            <Logo size={14}/>
            <span>GlassMem</span>
          </div>
          <div className="demo__hub-line"/>
          <p className="demo__hub-count">
            {step >= 0
              ? `${Math.min(step + 1, sc.agents.length)} / ${sc.agents.length} updated`
              : 'propagating…'
            }
          </p>
        </div>

        {/* Right: agents */}
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
                    {updated && (
                      <span className={`demo__badge demo__badge--${ag.status}`}>{ag.status}</span>
                    )}
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

/* ── Customer proof ── */
const PROOF_CARDS = [
  {
    role: 'AI Platform Engineer · Fintech startup',
    quote: "Before GlassMem, our sub-agents constantly lost deployment constraints during handoffs. We were manually syncing context between systems every single day.",
    metric: '12 hours/week saved on manual context sync',
    stack: ['Claude Code', 'LangGraph', 'custom agents'],
    initials: 'SA',
    pip: '#6ee7b7',
  },
  {
    role: 'Multi-agent infrastructure team · Enterprise',
    quote: "GlassMem became the operational context layer between our planner agents and execution agents. It's the coordination infrastructure we didn't know we needed.",
    metric: 'Zero context.md files in production',
    stack: ['CrewAI', 'Cursor', 'custom orchestrator'],
    initials: 'MK',
    pip: '#a78bfa',
  },
  {
    role: 'Staff AI Engineer · SaaS platform',
    quote: "We stopped duplicating architecture decisions across Cursor, Claude Code, and internal agents. One write, every agent aligned automatically.",
    metric: '3× fewer coordination bugs in production',
    stack: ['Cursor', 'Claude Code', 'Codex'],
    initials: 'RP',
    pip: '#7dd3fc',
  },
  {
    role: 'Agent orchestration engineer · Startup',
    quote: "We realized memory wasn't the problem — coordination was. GlassMem solved the coordination problem we couldn't even articulate before.",
    metric: '4 tools sharing context natively',
    stack: ['Windsurf', 'LangChain', 'custom MCP'],
    initials: 'TL',
    pip: '#fb923c',
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

/* ════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════ */
export function GlassMemPage() {
  useReveal();
  const [scrolled,  setScrolled]  = useState(false);
  const [mobOpen,   setMobOpen]   = useState(false);
  const [copied,    copy]         = useCopy('glassmem context start');
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
            <div className="hero__viz-col">
              <p className="hero__viz-label">Live: context coordinating across 6 agents in real time.</p>
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
              <h2 className="h2">Why multi-agent systems<br/>lose operational context.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              Agents don't share context by default. Coordination has to be built — and most teams build it manually.
            </p>
          </div>

          <div className="prob__grid reveal">
            {[
              {
                glyph: <FragmentedGlyph/>,
                title: 'Fragmented context',
                desc: 'Claude Code, Cursor, planners, debuggers, and external agents all hold different operational context. No shared state. No synchronization.',
                examples: ['billing freeze not propagated to executor', 'sub-agent missing project architecture decisions'],
              },
              {
                glyph: <BrokenHandoffGlyph/>,
                title: 'Broken handoffs',
                desc: 'Sub-agents inherit partial or stale context when work moves between systems. Every spawn starts from near-zero.',
                examples: ['context.md manually copied between tools', 'sub-agent re-derives decisions already made'],
              },
              {
                glyph: <StaleStateGlyph/>,
                title: 'Stale operational state',
                desc: "Old constraints and failed approaches silently continue spreading. No expiry. No invalidation. No one knows what's still valid.",
                examples: ['rejected Redis approach proposed again', 'expired migration freeze still applied'],
              },
              {
                glyph: <ManualSyncGlyph/>,
                title: 'Manual synchronization',
                desc: 'Teams copy context.md files and summaries manually between agents. This is fragile, slow, and breaks at any real scale.',
                examples: ['same architecture decision reached 4× separately', 'human manually updating every agent context'],
              },
            ].map(({ glyph, title, desc, examples }) => (
              <div key={title} className="prob__card">
                <div className="prob__glyph">{glyph}</div>
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

          {/* Comparison strip */}
          <div className="prob__compare reveal">
            {[
              { name: 'context.md',       eq: '=', label: 'manual synchronization', em: false },
              { name: 'Vector DB memory', eq: '=', label: 'passive retrieval',      em: false },
              { name: 'GlassMem',         eq: '=', label: 'active context orchestration', em: true },
            ].map(({ name, eq, label, em }) => (
              <div key={name} className={`prob__compare-cell${em ? ' prob__compare-cell--em' : ''}`}>
                <p className={`prob__compare-type${em ? ' prob__compare-type--em' : ''}`}>{name}</p>
                <p className="prob__compare-eq">{eq}</p>
                <p className={`prob__compare-label${em ? ' prob__compare-label--em' : ''}`}>{label}</p>
              </div>
            ))}
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
          <div className="reveal">
            <LiveDemo/>
          </div>
        </div>
      </section>

      {/* ═══ CUSTOMER PROOF ══════════════════════════ */}
      <section className="sec sec--alt">
        <div className="w">
          <div style={{ textAlign:'center', marginBottom:56 }} className="reveal">
            <span className="label">From the engineers</span>
            <h2 className="h2">Built for teams who've<br/>felt the coordination pain.</h2>
          </div>
          <div className="proof__grid reveal">
            {PROOF_CARDS.map((c) => (
              <div key={c.role} className="proof__card">
                <div className="proof__quote-mark">"</div>
                <p className="proof__quote">{c.quote}</p>
                <div className="proof__divider"/>
                <div className="proof__footer">
                  <div className="proof__avatar" style={{ background: c.pip + '22', border: `1px solid ${c.pip}44` }}>
                    <span style={{ color: c.pip, fontFamily:'var(--f-disp)', fontSize:12, fontWeight:700 }}>{c.initials}</span>
                  </div>
                  <div>
                    <p className="proof__role">{c.role}</p>
                    <p className="proof__metric">{c.metric}</p>
                  </div>
                </div>
                <div className="proof__stack">
                  {c.stack.map(t => <span key={t} className="proof__tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT GLASSMEM DOES ═════════════════════ */}
      <section id="memory" className="sec">
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
              <p className="feat__card-desc">Attach expiry to any context entry. Temporary constraints self-remove automatically — agents always see only what is currently valid.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ TECHNICAL ARCHITECTURE ══════════════════ */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Architecture</span>
              <h2 className="h2">How GlassMem coordinates<br/>context technically.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              A shared coordination layer, not a memory store.
            </p>
          </div>

          <div className="arch__grid reveal">
            {[
              {
                n: '01', title: 'Shared context store',
                desc: 'All operational context lives in a shared coordination layer — not scattered across agent contexts or prompt files. One source of truth for every agent.',
                tag: 'context.store',
              },
              {
                n: '02', title: 'Agent connections',
                desc: 'Agents connect via MCP or the GlassMem SDK. No per-tool configuration — agents authenticate and discover the context layer automatically.',
                tag: 'MCP · SDK',
              },
              {
                n: '03', title: 'Scoped propagation',
                desc: 'Every update is tagged with scope, type, and target agents. GlassMem routes updates in real time — no polling, no manual synchronization.',
                tag: 'real-time routing',
              },
              {
                n: '04', title: 'Sub-agent inheritance',
                desc: 'When a sub-agent spawns, GlassMem automatically selects the relevant context slice from the parent task and passes it down — no manual handoff.',
                tag: 'automatic inheritance',
              },
              {
                n: '05', title: 'Sensitive context filtering',
                desc: 'Agents only receive context within their allowed scopes. Sensitive scopes are excluded at the routing layer — agents never see what they shouldn\'t.',
                tag: 'scope-level filtering',
              },
              {
                n: '06', title: 'Automatic partitioning',
                desc: 'GlassMem partitions context by task, scope, agent, and temporal validity automatically — so agents never receive stale or irrelevant context.',
                tag: 'task · scope · time',
              },
              {
                n: '07', title: 'Stale context prevention',
                desc: 'Expired, superseded, and failed context is excluded from routing automatically. Agents always see only what is currently valid in the system.',
                tag: 'expiry · supersession',
              },
              {
                n: '08', title: 'Context traceability',
                desc: 'Every context packet records source agent, propagation path, downstream consumption, timestamp, and validity. Every decision is traceable.',
                tag: 'full lineage',
              },
              {
                n: '09', title: 'Observability integrations',
                desc: 'Context lineage and retrieval traces export directly to Langfuse, Arize, Helicone, and OpenTelemetry. Debug context like you debug code.',
                tag: 'Langfuse · Arize · OTel',
              },
            ].map(({ n, title, desc, tag }) => (
              <div key={n} className="arch__card">
                <p className="arch__num">{n}</p>
                <p className="arch__title">{title}</p>
                <p className="arch__desc">{desc}</p>
                <span className="arch__tag">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTEXT OBSERVABILITY ══════════════════ */}
      <section id="observability" className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Observability</span>
              <h2 className="h2">Debug context<br/>like you debug code.</h2>
            </div>
            <p className="body-lg" style={{ maxWidth:'44ch' }}>
              Every context packet has full lineage. See who created it, where it propagated, which agents used it, and when it became stale.
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
                    { key:'source agent',  val:'Planner Agent',                               color:'#fb923c' },
                    { key:'timestamp',     val:'2026-06-11 09:14:22 UTC',                      color:'var(--tx-2)' },
                    { key:'scope',         val:'project.billing',                              color:'#a78bfa' },
                    { key:'status',        val:'active',                                       color:'#6ee7b7' },
                    { key:'inherited by',  val:'Claude Code, Debug Agent, Billing Sub-Agent',  color:'#7dd3fc' },
                    { key:'recalled by',   val:'billing-debugger × 3, claude-code × 1',        color:'#7dd3fc' },
                    { key:'expires at',    val:'2026-06-14T18:00:00Z',                         color:'#fb923c' },
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
                { icon:'◉', head:'Context lineage',    desc:'Source, propagation path, and downstream consumption recorded on every context packet.' },
                { icon:'◷', head:'Retrieval tracing',  desc:'"Why did this agent receive this context?" is always answerable — no black boxes.'       },
                { icon:'◎', head:'Scope hierarchy',    desc:'Global, project, task, and temporary scopes tracked and routed separately.'              },
                { icon:'✎', head:'Direct editing',     desc:'Override scope, force-expire, or edit any context packet directly from the inspector.'   },
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
              <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, marginTop:14 }}>
                <a href="mailto:hello@glassmem.ai" className="btn btn--ghost btn--sm">Book a demo</a>
              </div>
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
            <span className="footer2__copy">© 2026 GlassMem</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
