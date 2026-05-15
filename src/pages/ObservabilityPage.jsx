import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GlassMemPage.css';
import './ObservabilityPage.css';
import { SiteNav, SiteFooter } from './GlassMemPage';

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

/* ── Pentagon logo (local) ── */
const Logo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 1023 977" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1022.52 373.339C1021.96 372.826 1021.43 372.662 1020.91 372.849C952.332 397.256 883.755 421.662 815.182 446.069L813.942 446.119L355.892 113.329C355.715 112.988 355.715 112.988 355.892 112.639L510.772 0.108917C511.247 0.0018574 511.37 0.0434618 511.472 0.118911C529.505 13.2856 698.222 135.869 1017.62 367.869C1020.3 369.816 1021.92 371.036 1022.47 371.529C1022.89 371.896 1022.91 372.499 1022.52 373.339Z" fill="rgba(255,255,255,0.82)"/>
    <path d="M612.422 504.079L415.752 576.149C372.365 546.522 329.145 517.002 286.092 487.589C259.552 469.462 232.819 451.019 205.892 432.259C179.252 413.692 152.602 395.125 125.942 376.559L54.1621 326.559L209.062 215.459C210.556 215.275 210.812 215.459L612.422 504.079Z" fill="rgba(255,255,255,0.82)"/>
    <path d="M54.1621 326.559L125.942 376.559L294.232 916.569L273.442 976.189L189.202 976.149C188.722 975.809L0.0420414 366.449C0.111531 365.671 0.392048 365.389L54.1621 326.559Z" fill="url(#g1obs)"/>
    <path d="M612.421 504.079L459.441 975.729C459.078 976.163 458.791 976.209L273.441 976.189L294.231 916.569C335.255 802.876 375.511 690.306 415.771 577.739C416.151 576.136 415.751 576.149L612.421 504.079Z" fill="#6ee7b7"/>
    <path d="M960.793 563.233L827.393 973.609C826.938 974.142 826.583 974.199H642.673L813.942 446.119H815.183C869.944 426.578 924.709 407.088 979.475 387.597L1023 372L960.793 563.233Z" fill="#6ee7b7"/>
    <defs>
      <linearGradient id="g1obs" x1="147" y1="326" x2="147" y2="976" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6ee7b7"/><stop offset="1" stopColor="#34d399"/>
      </linearGradient>
    </defs>
  </svg>
);

const ObsPanel = () => (
  <div className="obspanel">
    <div className="obspanel__chrome">
      <div className="obspanel__chrome-dots">
        <span className="obspanel__macdot" style={{ background: '#ff5f57' }}/>
        <span className="obspanel__macdot" style={{ background: '#febc2e' }}/>
        <span className="obspanel__macdot" style={{ background: '#28c840' }}/>
      </div>
      <span className="obspanel__chrome-title"><Logo size={11}/>glass0 · state-packet · ctx_a2f9c01b</span>
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
        {['OpenAI Debug Agent', 'Glass0', 'Claude Code', 'CrewAI Billing Sub-Agent'].map((node, i, arr) => (
          <React.Fragment key={node}>
            <span className="obspanel__trace-node">{node}</span>
            {i < arr.length - 1 && <span className="obspanel__trace-arrow">→</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

export function ObservabilityPage() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen,  setMobOpen]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div>
      <SiteNav scrolled={scrolled} mobOpen={mobOpen} setMobOpen={setMobOpen} />

      {/* HERO */}
      <section className="hero" style={{ padding: '80px 0 60px' }}>
        <div className="hero__fade"/>
        <div className="w">
          <div style={{ maxWidth: '56ch' }}>
            <span className="label enter">// observability</span>
            <h1 className="h1 enter-2" style={{ marginBottom: 20 }}>Debug state like you debug code</h1>
            <p className="body-lg enter-3">
              What state did this agent have when it acted?
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE QUESTION */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="reveal">
            <span className="label">The question</span>
            <h2 className="h2" style={{ marginBottom: 20 }}>Every unexpected decision has an answer</h2>
            <p className="body-lg" style={{ maxWidth: '56ch' }}>
              Every multi-agent system eventually produces an unexpected decision. An agent retried a failed approach. A billing agent modified production data during a freeze. A sub-agent escalated something it should have blocked. The question is always: what did it know?
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: ROUTING TRACES */}
      <section className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">State packet</span>
              <h2 className="h2">Routing traces in full detail</h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '44ch' }}>
              Every state packet records where it came from, where it went, who was blocked, and who consumed it before acting.
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

      {/* SECTION 3: WHAT YOU CAN TRACE */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="reveal">
            <span className="label">Tracing capabilities</span>
            <h2 className="h2" style={{ marginBottom: 48 }}>What you can trace</h2>
          </div>
          <div className="obs-trace__grid reveal">
            {[
              {
                title: 'Routing decisions',
                desc: 'Every allow, block, and inheritance decision is recorded with the reason it was made.',
                color: '#6ee7b7',
              },
              {
                title: 'Blocked propagation events',
                desc: 'Know exactly which agents were blocked from receiving which state, and why.',
                color: '#ef4444',
              },
              {
                title: 'Inheritance chains',
                desc: 'Follow state from parent agent to sub-agent through spawn events.',
                color: '#a78bfa',
              },
              {
                title: 'Temporal validity',
                desc: 'See what expired and when. Audit the full lifecycle of every constraint.',
                color: '#fb923c',
              },
              {
                title: 'State lineage',
                desc: 'Track who wrote each state packet, who routed it, and who received it.',
                color: '#7dd3fc',
              },
              {
                title: 'Agent consumption',
                desc: 'See which agent used which state before making a decision or taking an action.',
                color: '#6ee7b7',
              },
            ].map(item => (
              <div key={item.title} className="obs-trace__card">
                <span className="obs-trace__dot" style={{ background: item.color }}/>
                <p className="obs-trace__title">{item.title}</p>
                <p className="obs-trace__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: EXPORT INTEGRATIONS */}
      <section className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Integrations</span>
              <h2 className="h2">Export to your existing stack</h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '44ch' }}>
              Glass0 exports routing traces to your existing observability stack. No new dashboards required.
            </p>
          </div>
          <div className="obs-export__grid reveal">
            {[
              { name: 'Langfuse',       desc: 'LLM observability and trace management.' },
              { name: 'Arize',          desc: 'ML observability and model monitoring.' },
              { name: 'Helicone',       desc: 'LLM proxy and request logging.' },
              { name: 'OpenTelemetry',  desc: 'Open standard for traces and metrics.' },
            ].map(int => (
              <div key={int.name} className="obs-export__card">
                <p className="obs-export__name">{int.name}</p>
                <p className="obs-export__desc">{int.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="sec cta">
        <div className="w">
          <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto' }} className="reveal">
            <span className="label">Get started</span>
            <h2 className="cta__h2">Know what every agent knew<br/>before it acted</h2>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
              <Link to="/signup" className="btn btn--em btn--lg">Get started</Link>
              <Link to="/architecture" className="btn btn--ghost btn--lg">See the architecture</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
