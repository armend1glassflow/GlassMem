import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GlassMemPage.css';
import './DXPage.css';
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

const FRAMEWORK_SNIPPETS = [
  {
    id: 'langgraph',
    label: 'LangGraph',
    color: '#1c7a3e',
    code: [
      { type: 'kw', t: 'from' }, { type: 'tx', t: ' glassmem.integrations.langgraph ' }, { type: 'kw', t: 'import' }, { type: 'tx', t: ' GlassMemState' },
      { type: 'br' },
      { type: 'kw', t: 'from' }, { type: 'tx', t: ' langgraph.graph ' }, { type: 'kw', t: 'import' }, { type: 'tx', t: ' StateGraph' },
      { type: 'br' },
      { type: 'br' },
      { type: 'tx', t: 'graph = StateGraph(GlassMemState)' },
      { type: 'br' },
      { type: 'cm', t: '# State is automatically scoped and routed' },
      { type: 'br' },
      { type: 'tx', t: 'graph.add_node(' }, { type: 'str', t: '"billing_agent"' }, { type: 'tx', t: ', billing_node)' },
    ]
  },
  {
    id: 'crewai',
    label: 'CrewAI',
    color: '#f97316',
    code: [
      { type: 'kw', t: 'from' }, { type: 'tx', t: ' glassmem.integrations.crewai ' }, { type: 'kw', t: 'import' }, { type: 'tx', t: ' GlassMemCrew' },
      { type: 'br' },
      { type: 'br' },
      { type: 'tx', t: 'crew = GlassMemCrew(' },
      { type: 'br' },
      { type: 'tx', t: '  agents=[billing_agent, debug_agent],' },
      { type: 'br' },
      { type: 'tx', t: '  scope=' }, { type: 'str', t: '"project.billing"' },
      { type: 'br' },
      { type: 'tx', t: ')' },
      { type: 'br' },
      { type: 'cm', t: '# Sub-agents inherit parent scope automatically' },
    ]
  },
  {
    id: 'mcp',
    label: 'Claude Code / MCP',
    color: '#6ee7b7',
    code: [
      { type: 'cm', t: '# In CLAUDE.md or MCP tool config' },
      { type: 'br' },
      { type: 'tx', t: 'glassmem_mcp:' },
      { type: 'br' },
      { type: 'tx', t: '  endpoint: ' }, { type: 'str', t: '"https://api.glassmem.ai/mcp"' },
      { type: 'br' },
      { type: 'tx', t: '  scope: ' }, { type: 'str', t: '"project.billing"' },
      { type: 'br' },
      { type: 'tx', t: '  sensitivity: ' }, { type: 'str', t: '"internal"' },
      { type: 'br' },
      { type: 'cm', t: '# Claude Code reads scoped state before each task' },
    ]
  },
  {
    id: 'openai',
    label: 'OpenAI Agents SDK',
    color: '#7dd3fc',
    code: [
      { type: 'kw', t: 'from' }, { type: 'tx', t: ' glassmem.integrations.openai ' }, { type: 'kw', t: 'import' }, { type: 'tx', t: ' GlassMemAgentContext' },
      { type: 'br' },
      { type: 'br' },
      { type: 'tx', t: 'agent = Agent(' },
      { type: 'br' },
      { type: 'tx', t: '  context=GlassMemAgentContext(' },
      { type: 'br' },
      { type: 'tx', t: '    scope=' }, { type: 'str', t: '"project.billing"' }, { type: 'tx', t: ',' },
      { type: 'br' },
      { type: 'tx', t: '    task=' }, { type: 'str', t: '"debug billing sync"' },
      { type: 'br' },
      { type: 'tx', t: '  )' },
      { type: 'br' },
      { type: 'tx', t: ')' },
    ]
  },
  {
    id: 'custom',
    label: 'Custom agents',
    color: '#a78bfa',
    code: [
      { type: 'kw', t: 'import' }, { type: 'tx', t: ' glassmem' },
      { type: 'br' },
      { type: 'br' },
      { type: 'cm', t: '# REST API — framework-agnostic' },
      { type: 'br' },
      { type: 'tx', t: 'state = glassmem.state.for_agent({' },
      { type: 'br' },
      { type: 'tx', t: '  "agent": ' }, { type: 'str', t: '"my-custom-agent"' }, { type: 'tx', t: ',' },
      { type: 'br' },
      { type: 'tx', t: '  "task": ' }, { type: 'str', t: '"billing audit"' }, { type: 'tx', t: ',' },
      { type: 'br' },
      { type: 'tx', t: '  "scope": ' }, { type: 'str', t: '"project.billing"' },
      { type: 'br' },
      { type: 'tx', t: '})' },
    ]
  },
];

function CodeLine({ tokens }) {
  if (tokens === 'br') return <br />;
  return (
    <span>
      {tokens.map((tok, i) => {
        if (tok.type === 'kw')  return <span key={i} style={{ color: '#c792ea' }}>{tok.t}</span>;
        if (tok.type === 'str') return <span key={i} style={{ color: '#c3e88d' }}>{tok.t}</span>;
        if (tok.type === 'cm')  return <span key={i} style={{ color: '#546e7a', fontStyle: 'italic' }}>{tok.t}</span>;
        if (tok.type === 'fn')  return <span key={i} style={{ color: '#82aaff' }}>{tok.t}</span>;
        if (tok.type === 'key') return <span key={i} style={{ color: '#f78c6c' }}>{tok.t}</span>;
        return <span key={i} style={{ color: '#cdd3de' }}>{tok.t}</span>;
      })}
    </span>
  );
}

function CodeBlock({ children, label }) {
  return (
    <div className="dx-code">
      {label && <div className="dx-code__label">{label}</div>}
      <div className="dx-code__body">
        <pre className="dx-code__pre">{children}</pre>
      </div>
    </div>
  );
}

export function DXPage() {
  useReveal();
  const [scrolled,  setScrolled]  = useState(false);
  const [mobOpen,   setMobOpen]   = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const active = FRAMEWORK_SNIPPETS[activeTab];

  return (
    <div>
      <SiteNav scrolled={scrolled} mobOpen={mobOpen} setMobOpen={setMobOpen} />

      {/* HERO */}
      <section className="hero" style={{ padding: '80px 0 60px' }}>
        <div className="hero__fade"/>
        <div className="w">
          <div style={{ maxWidth: '56ch' }}>
            <span className="label enter">// developer experience</span>
            <h1 className="h1 enter-2" style={{ marginBottom: 20 }}>Show me the DX</h1>
            <p className="body-lg enter-3">
              How would I actually use this? Start with one workflow. Write scoped state. Let GlassMem decide what each agent receives.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: INSTALL */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="reveal">
            <span className="label">Step 1</span>
            <h2 className="h2" style={{ marginBottom: 28 }}>Install</h2>
            <CodeBlock>
              <span style={{ color: '#546e7a' }}>$</span> <span style={{ color: '#c3e88d' }}>npm install glassmem</span>
            </CodeBlock>
            <p className="body-sm" style={{ marginTop: 16, color: 'var(--tx-3)' }}>
              Also available via pip, or connect directly via MCP or REST API.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: WRITE STATE */}
      <section className="sec">
        <div className="w">
          <div className="reveal">
            <span className="label">Step 2</span>
            <h2 className="h2" style={{ marginBottom: 16 }}>Write state</h2>
            <p className="body-lg" style={{ maxWidth: '48ch', marginBottom: 32 }}>
              Write operational state with a scope, type, and optional expiry. GlassMem handles routing to the right agents.
            </p>
            <CodeBlock label="TypeScript">
              <span style={{ color: '#c792ea' }}>await</span>
              {' glassmem.state.'}
              <span style={{ color: '#82aaff' }}>write</span>
              {'({'}
              {'\n  '}
              <span style={{ color: '#f78c6c' }}>scope</span>
              {': '}
              <span style={{ color: '#c3e88d' }}>"project.billing"</span>
              {',\n  '}
              <span style={{ color: '#f78c6c' }}>type</span>
              {': '}
              <span style={{ color: '#c3e88d' }}>"temporary_constraint"</span>
              {',\n  '}
              <span style={{ color: '#f78c6c' }}>content</span>
              {': '}
              <span style={{ color: '#c3e88d' }}>"Do not modify billing until Stripe migration completes"</span>
              {',\n  '}
              <span style={{ color: '#f78c6c' }}>expiresAt</span>
              {': '}
              <span style={{ color: '#c3e88d' }}>"2026-06-14T18:00:00Z"</span>
              {',\n  '}
              <span style={{ color: '#f78c6c' }}>sensitivity</span>
              {': '}
              <span style={{ color: '#c3e88d' }}>"internal"</span>
              {'\n})'}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* SECTION: RETRIEVE STATE */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="reveal">
            <span className="label">Step 3</span>
            <h2 className="h2" style={{ marginBottom: 16 }}>Retrieve state for an agent</h2>
            <p className="body-lg" style={{ maxWidth: '48ch', marginBottom: 32 }}>
              Each agent receives only the state relevant to its task, framework, and scope. Sensitive state is blocked automatically.
            </p>
            <CodeBlock label="TypeScript">
              <span style={{ color: '#c792ea' }}>const</span>
              {' '}
              <span style={{ color: '#f78c6c' }}>state</span>
              {' = '}
              <span style={{ color: '#c792ea' }}>await</span>
              {' glassmem.state.'}
              <span style={{ color: '#82aaff' }}>forAgent</span>
              {'({'}
              {'\n  '}
              <span style={{ color: '#f78c6c' }}>agent</span>
              {': '}
              <span style={{ color: '#c3e88d' }}>"claude-code"</span>
              {',\n  '}
              <span style={{ color: '#f78c6c' }}>framework</span>
              {': '}
              <span style={{ color: '#c3e88d' }}>"mcp"</span>
              {',\n  '}
              <span style={{ color: '#f78c6c' }}>task</span>
              {': '}
              <span style={{ color: '#c3e88d' }}>"refactor billing sync"</span>
              {'\n})'}
              {'\n'}
              <span style={{ color: '#546e7a', fontStyle: 'italic' }}>{'// Returns:'}</span>
              {'\n'}
              <span style={{ color: '#546e7a', fontStyle: 'italic' }}>{'// {'}</span>
              {'\n'}
              <span style={{ color: '#546e7a', fontStyle: 'italic' }}>{'//   allowed: ["billing freeze until Friday", "Redis cache caused stale reads", ...],'}</span>
              {'\n'}
              <span style={{ color: '#546e7a', fontStyle: 'italic' }}>{'//   blocked: ["customer PII", "support-only escalation notes"],'}</span>
              {'\n'}
              <span style={{ color: '#546e7a', fontStyle: 'italic' }}>{'//   traceId: "ctx_trace_7f3a"'}</span>
              {'\n'}
              <span style={{ color: '#546e7a', fontStyle: 'italic' }}>{'// }'}</span>
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* SECTION: SPAWN SUB-AGENT */}
      <section className="sec">
        <div className="w">
          <div className="reveal">
            <span className="label">Step 4</span>
            <h2 className="h2" style={{ marginBottom: 16 }}>Spawn a sub-agent with inherited state</h2>
            <p className="body-lg" style={{ maxWidth: '48ch', marginBottom: 32 }}>
              Sub-agents receive the relevant parent-task state slice at spawn time. No manual context passing.
            </p>
            <CodeBlock label="TypeScript">
              <span style={{ color: '#c792ea' }}>const</span>
              {' '}
              <span style={{ color: '#f78c6c' }}>subAgent</span>
              {' = '}
              <span style={{ color: '#c792ea' }}>await</span>
              {' glassmem.'}
              <span style={{ color: '#82aaff' }}>spawn</span>
              {'({'}
              {'\n  '}
              <span style={{ color: '#f78c6c' }}>parent</span>
              {': '}
              <span style={{ color: '#c3e88d' }}>"planner-agent"</span>
              {',\n  '}
              <span style={{ color: '#f78c6c' }}>task</span>
              {': '}
              <span style={{ color: '#c3e88d' }}>"debug billing sync"</span>
              {',\n  '}
              <span style={{ color: '#f78c6c' }}>inherits</span>
              {': ['}
              <span style={{ color: '#c3e88d' }}>"billing freeze"</span>
              {', '}
              <span style={{ color: '#c3e88d' }}>"failed redis approach"</span>
              {'],\n  '}
              <span style={{ color: '#f78c6c' }}>blocks</span>
              {': ['}
              <span style={{ color: '#c3e88d' }}>"customer PII"</span>
              {', '}
              <span style={{ color: '#c3e88d' }}>"payment credentials"</span>
              {']'}
              {'\n})'}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* SECTION: FRAMEWORK EXAMPLES */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Step 5</span>
              <h2 className="h2">Framework examples</h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '44ch' }}>
              GlassMem integrates with every major agent framework via SDK, MCP, or REST API.
            </p>
          </div>
          <div className="reveal">
            <div className="dx-tabs">
              {FRAMEWORK_SNIPPETS.map((fw, i) => (
                <button
                  key={fw.id}
                  className={`dx-tab${activeTab === i ? ' dx-tab--on' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  <span className="dx-tab__dot" style={{ background: fw.color }}/>
                  {fw.label}
                </button>
              ))}
            </div>
            <div className="dx-code" style={{ marginTop: 0, borderTopLeftRadius: 0, borderTop: 'none' }}>
              <div className="dx-code__label" style={{ color: active.color }}>{active.label}</div>
              <div className="dx-code__body">
                <pre className="dx-code__pre">
                  {active.code.map((tok, i) => {
                    if (tok === 'br' || tok.type === 'br') return <br key={i}/>;
                    return (
                      <span key={i} style={{
                        color: tok.type === 'kw' ? '#c792ea'
                             : tok.type === 'str' ? '#c3e88d'
                             : tok.type === 'cm' ? '#546e7a'
                             : tok.type === 'fn' ? '#82aaff'
                             : '#cdd3de'
                      }}>{tok.t}</span>
                    );
                  })}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: START WITH A WORKFLOW */}
      <section className="sec">
        <div className="w">
          <div className="fail__intro reveal">
            <div>
              <span className="label">Use cases</span>
              <h2 className="h2">Start with one workflow</h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '44ch' }}>
              Pick the workflow where state drift already hurts. Add GlassMem incrementally.
            </p>
          </div>
          <div className="workflows__grid reveal">
            {[
              {
                title: 'Billing freeze',
                body: 'Write a temporary constraint. Billing agents receive it. Customer support agents do not.',
              },
              {
                title: 'Failed approach tracking',
                body: 'Record what failed. Sub-agents inherit the failure state. No more retrying the same broken approach.',
              },
              {
                title: 'Incident coordination',
                body: 'Route incident state only to the agents cleared for it. Keep support and feature agents unaffected.',
              },
              {
                title: 'Sub-agent handoffs',
                body: 'Spawn sub-agents with the exact slice of parent-task state they need. Nothing more, nothing less.',
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

      {/* CTA */}
      <section className="sec cta">
        <div className="w">
          <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto' }} className="reveal">
            <span className="label">Ready to start</span>
            <h2 className="cta__h2">One workflow.<br/>Start today.</h2>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 28 }}>
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
