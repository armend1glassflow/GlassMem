import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GlassMemPage.css';
import './ArchitecturePage.css';
import { SiteNav, SiteFooter, RoadmapModal } from './GlassMemPage';

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

/* ── Pentagon logo (local copy) ── */
const Logo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 1023 977" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1022.52 373.339C1021.96 372.826 1021.43 372.662 1020.91 372.849C952.332 397.256 883.755 421.662 815.182 446.069L813.942 446.119L355.892 113.329C355.715 112.988 355.715 112.988 355.892 112.639L510.772 0.108917C511.247 0.0018574 511.37 0.0434618 511.472 0.118911C529.505 13.2856 698.222 135.869 1017.62 367.869C1020.3 369.816 1021.92 371.036 1022.47 371.529C1022.89 371.896 1022.91 372.499 1022.52 373.339Z" fill="rgba(255,255,255,0.82)"/>
    <path d="M612.422 504.079L415.752 576.149C372.365 546.522 329.145 517.002 286.092 487.589C259.552 469.462 232.819 451.019 205.892 432.259C179.252 413.692 152.602 395.125 125.942 376.559L54.1621 326.559L209.062 215.459C210.556 215.275 210.812 215.459L612.422 504.079Z" fill="rgba(255,255,255,0.82)"/>
    <path d="M54.1621 326.559L125.942 376.559L294.232 916.569L273.442 976.189L189.202 976.149C188.722 975.809L0.0420414 366.449C0.111531 365.671 0.392048 365.389L54.1621 326.559Z" fill="url(#g1arch)"/>
    <path d="M612.421 504.079L459.441 975.729C459.078 976.163 458.791 976.209L273.441 976.189L294.231 916.569C335.255 802.876 375.511 690.306 415.771 577.739C416.151 576.136 415.751 576.149L612.421 504.079Z" fill="#6ee7b7"/>
    <path d="M960.793 563.233L827.393 973.609C826.938 974.142 826.583 974.199H642.673L813.942 446.119H815.183C869.944 426.578 924.709 407.088 979.475 387.597L1023 372L960.793 563.233Z" fill="#6ee7b7"/>
    <defs>
      <linearGradient id="g1arch" x1="147" y1="326" x2="147" y2="976" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6ee7b7"/><stop offset="1" stopColor="#34d399"/>
      </linearGradient>
    </defs>
  </svg>
);

export function ArchitecturePage() {
  useReveal();
  const [scrolled,    setScrolled]    = useState(false);
  const [mobOpen,     setMobOpen]     = useState(false);
  const [roadmapOpen, setRoadmapOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div>
      <SiteNav scrolled={scrolled} mobOpen={mobOpen} setMobOpen={setMobOpen} onRoadmap={() => setRoadmapOpen(true)} />

      {/* HERO */}
      <section className="hero" style={{ padding: '80px 0 60px' }}>
        <div className="hero__fade"/>
        <div className="w">
          <div style={{ maxWidth: '56ch' }}>
            <span className="label enter">// architecture</span>
            <h1 className="h1 enter-2" style={{ marginBottom: 20 }}>How Glass0 coordinates state</h1>
            <p className="body-lg enter-3">See how it works</p>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE PROBLEM */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">The problem</span>
              <h2 className="h2">State drift across runtimes</h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '48ch' }}>
              Your agents span LangGraph, CrewAI, Claude Code, MCP, and custom tools. Each framework has its own memory model. None of them talk to each other. State drifts.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: ROUTING ENGINE */}
      <section className="sec">
        <div className="w">
          <div className="reveal">
            <span className="label">Routing engine</span>
            <h2 className="h2" style={{ marginBottom: 16 }}>How routing works</h2>
            <p className="body-lg" style={{ maxWidth: '48ch', marginBottom: 48 }}>
              Every state event passes through Glass0's routing layer before reaching any agent. Routing is not probabilistic. It is deterministic.
            </p>
          </div>
          <div className="arch-routing reveal">
            <div className="arch-routing__input">
              <span className="arch-routing__badge arch-routing__badge--input">input</span>
              <span className="arch-routing__text">State event</span>
            </div>
            <div className="arch-routing__arrow">↓</div>
            <div className="arch-routing__engine">
              <div className="arch-routing__engine-header">
                <Logo size={16}/>
                <span className="arch-routing__engine-name">Glass0 evaluates</span>
              </div>
              <div className="arch-routing__dims">
                {[
                  { dim: 'scope',        desc: 'Does this agent operate in the same scope as the state?' },
                  { dim: 'task',         desc: 'Is the agent\'s current task relevant to this state?' },
                  { dim: 'framework',    desc: 'What framework is the agent using, and is it compatible?' },
                  { dim: 'sensitivity',  desc: 'Does the agent have clearance for this sensitivity level?' },
                  { dim: 'freshness',    desc: 'Is this state still temporally valid, or has it expired?' },
                  { dim: 'permissions',  desc: 'Does the routing policy allow this agent to receive this state?' },
                  { dim: 'lineage',      desc: 'Is this state derived from a parent that already received it?' },
                ].map(({ dim, desc }) => (
                  <div key={dim} className="arch-routing__dim-row">
                    <span className="arch-routing__dim-name">{dim}</span>
                    <span className="arch-routing__dim-desc">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="arch-routing__arrow">↓</div>
            <div className="arch-states">
              <div className="arch-state">
                <span className="arch-state__badge arch-state__badge--allowed">allowed</span>
                <span className="arch-state__label">Routed to agent</span>
              </div>
              <div className="arch-state">
                <span className="arch-state__badge arch-state__badge--inherited">inherited</span>
                <span className="arch-state__label">Propagated to sub-agent</span>
              </div>
              <div className="arch-state">
                <span className="arch-state__badge arch-state__badge--blocked">blocked</span>
                <span className="arch-state__label">Filtered from agent</span>
              </div>
              <div className="arch-state">
                <span className="arch-state__badge arch-state__badge--expired">expired</span>
                <span className="arch-state__label">Temporal validity passed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHERE STATE LIVES */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="reveal">
            <span className="label">Deployment</span>
            <h2 className="h2" style={{ marginBottom: 16 }}>Where state lives</h2>
            <p className="body-lg" style={{ maxWidth: '48ch', marginBottom: 48 }}>
              Glass0 supports local, self-hosted, or managed deployment. You choose where operational state lives.
            </p>
          </div>
          <div className="arch-deploy__grid reveal">
            {[
              {
                title: 'Local dev',
                desc: 'Run Glass0 locally during development. State lives in-process. No external dependencies.',
                badge: 'local',
                color: '#6ee7b7',
              },
              {
                title: 'Self-hosted',
                desc: 'Deploy Glass0 on your own infrastructure. Full control over data residency and routing logic.',
                badge: 'self-hosted',
                color: '#a78bfa',
              },
              {
                title: 'Managed',
                desc: 'Use the Glass0 cloud service. Routing, storage, and observability managed for you.',
                badge: 'managed',
                color: '#fb923c',
              },
            ].map(opt => (
              <div key={opt.title} className="arch-deploy__card">
                <span className="arch-deploy__badge" style={{ color: opt.color, borderColor: `${opt.color}44` }}>{opt.badge}</span>
                <p className="arch-deploy__title">{opt.title}</p>
                <p className="arch-deploy__desc">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SUB-AGENT INHERITANCE */}
      <section className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Sub-agents</span>
              <h2 className="h2">Sub-agent inheritance</h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '48ch' }}>
              When a sub-agent is spawned, Glass0 attaches the relevant parent-task state slice automatically. Sub-agents receive selected state, not the full parent history.
            </p>
          </div>
          <div className="arch-inherit reveal">
            <div className="arch-inherit__parent">
              <span className="arch-inherit__role">Parent agent</span>
              <div className="arch-inherit__bubble">
                <span className="arch-inherit__name">LangGraph Planner</span>
                <div className="arch-inherit__state-list">
                  {['billing freeze until Friday', 'Redis cache failure', 'lock strategy: Postgres row-level'].map(s => (
                    <span key={s} className="arch-inherit__state-item">{s}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="arch-inherit__connector">
              <div className="arch-inherit__line"/>
              <span className="arch-inherit__connector-label">Glass0 selects relevant slice</span>
              <div className="arch-inherit__arrow">↓</div>
            </div>
            <div className="arch-inherit__child">
              <span className="arch-inherit__role">Sub-agent receives</span>
              <div className="arch-inherit__bubble arch-inherit__bubble--child">
                <span className="arch-inherit__name">CrewAI Billing Sub-Agent</span>
                <div className="arch-inherit__received">
                  <div className="arch-inherit__section">
                    <span className="arch-inherit__section-label arch-inherit__section-label--yes">inherits</span>
                    {['billing freeze until Friday', 'Redis cache failure'].map(s => (
                      <span key={s} className="arch-inherit__state-item arch-inherit__state-item--yes">{s}</span>
                    ))}
                  </div>
                  <div className="arch-inherit__section">
                    <span className="arch-inherit__section-label arch-inherit__section-label--no">not inherited</span>
                    {['customer PII', 'auth state'].map(s => (
                      <span key={s} className="arch-inherit__state-item arch-inherit__state-item--no">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TEMPORAL STATE */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Temporal validity</span>
              <h2 className="h2">Temporary state expires</h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '48ch' }}>
              Constraints expire. Superseded decisions stop routing. Invalid state can be reviewed and blocked. No garbage state in production.
            </p>
          </div>
          <div className="arch-temporal__grid reveal">
            {[
              { label: 'Expires automatically', desc: 'State with expiresAt stops routing once the timestamp passes.', color: '#6ee7b7' },
              { label: 'Supersedes previous', desc: 'A new decision can mark older state as superseded. Routing updates immediately.', color: '#fb923c' },
              { label: 'Block invalid state', desc: 'Review and block state that should never have been written.', color: '#ef4444' },
              { label: 'Immutable history', desc: 'All state changes are logged. You can audit what each agent received and when.', color: '#a78bfa' },
            ].map(item => (
              <div key={item.label} className="arch-temporal__card">
                <span className="arch-temporal__dot" style={{ background: item.color }}/>
                <p className="arch-temporal__title">{item.label}</p>
                <p className="arch-temporal__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CROSS-FRAMEWORK */}
      <section className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Integration</span>
              <h2 className="h2">Framework-agnostic by design</h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '48ch' }}>
              Connect via MCP, SDK, or API. LangGraph, CrewAI, Claude Code, OpenAI Agents SDK, and custom agents all speak the same routing language.
            </p>
          </div>
          <div className="arch-fw__grid reveal">
            {['LangGraph', 'CrewAI', 'Claude Code', 'OpenAI Agents SDK', 'MCP tools', 'Custom agents'].map(fw => (
              <div key={fw} className="arch-fw__chip">{fw}</div>
            ))}
          </div>
          <div className="arch-fw__connections reveal">
            {[
              { label: 'MCP',  desc: 'Connect via the Model Context Protocol. Works natively with Claude Code and MCP-compatible tools.' },
              { label: 'SDK',  desc: 'TypeScript and Python SDKs for direct integration in any agent framework.' },
              { label: 'API',  desc: 'REST API for custom agents and frameworks not covered by official integrations.' },
            ].map(c => (
              <div key={c.label} className="arch-fw__connection">
                <span className="arch-fw__connection-label">{c.label}</span>
                <span className="arch-fw__connection-desc">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: LATENCY PHILOSOPHY */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="reveal">
            <span className="label">Performance</span>
            <h2 className="h2" style={{ marginBottom: 16 }}>Designed for hot-path agent loops</h2>
            <p className="body-lg" style={{ maxWidth: '52ch' }}>
              Routing stays lightweight, scoped, and cacheable. No fake numbers. We are building this to be fast, not to claim benchmarks. The architecture is designed so that every routing decision is scoped to the relevant state slice, not the full history.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: OBSERVABILITY */}
      <section className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Observability</span>
              <h2 className="h2">Every routing decision is traceable</h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '48ch' }}>
              Export routing traces to Langfuse, Arize, Helicone, or OpenTelemetry-compatible systems. Every state packet records what was routed, what was blocked, and what expired.
            </p>
          </div>
          <div className="arch-obs reveal">
            {['Langfuse', 'Arize', 'Helicone', 'OpenTelemetry'].map(name => (
              <div key={name} className="arch-obs__chip">{name}</div>
            ))}
          </div>
          <div style={{ marginTop: 32 }} className="reveal">
            <Link to="/observability" className="btn btn--ghost btn--sm">See the observability page →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec cta">
        <div className="w">
          <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto' }} className="reveal">
            <span className="label">Get started</span>
            <h2 className="cta__h2">Build with a control plane<br/>for agent state</h2>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 28 }}>
              <button className="btn btn--em btn--lg" onClick={() => { setRoadmapOpen(true); window.fathom?.trackEvent('shape_roadmap_architecture'); }}>Talk Roadmap with us</button>
              <Link to="/dx" className="btn btn--ghost btn--lg">See the DX</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      <RoadmapModal open={roadmapOpen} onClose={() => setRoadmapOpen(false)} />
    </div>
  );
}
