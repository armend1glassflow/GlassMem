import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GlassMemPage.css';
import './ManifestoPage.css';
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

export function ManifestoPage() {
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
      <SiteNav scrolled={scrolled} mobOpen={mobOpen} setMobOpen={setMobOpen} />

      {/* HERO */}
      <section className="hero" style={{ padding: '80px 0 60px' }}>
        <div className="hero__fade"/>
        <div className="w">
          <div style={{ maxWidth: '60ch' }}>
            <span className="label enter">// thesis</span>
            <h1 className="h1 enter-2" style={{ marginBottom: 20 }}>Why shared memory breaks<br/>in real agent systems</h1>
            <p className="body-lg enter-3" style={{ maxWidth: '48ch' }}>Storage is solved. Coordination is not.</p>
          </div>
        </div>
      </section>

      {/* MANIFESTO BODY */}
      <section className="sec sec--alt">
        <div className="w">
          <div className="manifesto reveal">

            <div className="manifesto__section">
              <h2 className="manifesto__h2">The illusion of shared memory</h2>
              <p className="manifesto__p">
                The first instinct when building multi-agent systems is to give every agent access to all memory. It feels right. Agents should know everything. But it breaks quickly.
              </p>
              <p className="manifesto__p">
                When every agent inherits everything, irrelevant state becomes instruction noise. Agents receive decisions meant for other agents. Temporary constraints outlive their usefulness. The billing freeze that should have expired on Friday is still present three weeks later.
              </p>
            </div>

            <div className="manifesto__section">
              <h2 className="manifesto__h2">State pollution is a systems problem</h2>
              <p className="manifesto__p">
                State pollution is not a prompt engineering problem. It is a systems design problem.
              </p>
              <p className="manifesto__p">
                When operational state flows without routing logic, agents contaminate each other. A debugging agent inherits a customer escalation it has no business knowing about. A customer support agent inherits a Redis failure from the infrastructure team. The signal-to-noise ratio collapses.
              </p>
            </div>

            <div className="manifesto__section">
              <h2 className="manifesto__h2">Sub-agent drift</h2>
              <p className="manifesto__p">
                Sub-agents were supposed to solve context window limits. They did. And they created a new problem: handoff failures.
              </p>
              <p className="manifesto__p">
                When a sub-agent is spawned from a parent task, what state does it inherit? In most systems today: whatever the developer manually passed in. This means stale state, incomplete state, or wrong state. Sub-agents retry approaches their parent agents already rejected. They duplicate reasoning. They diverge.
              </p>
            </div>

            <div className="manifesto__section">
              <h2 className="manifesto__h2">Framework silos</h2>
              <p className="manifesto__p">
                Every major agent framework has its own memory model. LangGraph has its own state. CrewAI has its own. Claude Code has CLAUDE.md. MCP tools have their own context. None of them talk to each other.
              </p>
              <p className="manifesto__p">
                Teams working across frameworks end up manually copying context.md files, writing ad-hoc synchronization scripts, or accepting that state will drift. This is not a workflow. This is infrastructure debt.
              </p>
            </div>

            <div className="manifesto__section">
              <h2 className="manifesto__h2">The context.md trap</h2>
              <p className="manifesto__p">
                context.md is a great idea that breaks at scale.
              </p>
              <p className="manifesto__p">
                One file, manually maintained, shared between agents via copy-paste or injection. Inspectable. Simple. Completely unsustainable once you have more than two agents, more than one framework, or more than one session running concurrently.
              </p>
            </div>

            <div className="manifesto__section">
              <h2 className="manifesto__h2">Why memory is not coordination</h2>
              <p className="manifesto__p">
                Memory answers: what do I know?
              </p>
              <p className="manifesto__p">
                Coordination answers: what should this agent know right now, given its task, role, and the current state of the system?
              </p>
              <p className="manifesto__p">
                Vector databases solve retrieval. They do not solve routing. Storing more state does not fix the problem of uncontrolled state propagation.
              </p>
            </div>

            <div className="manifesto__section">
              <h2 className="manifesto__h2">Why selective inheritance matters</h2>
              <p className="manifesto__p">
                Not every agent should see every decision. The billing freeze is relevant to billing agents. It is noise for customer support agents.
              </p>
              <p className="manifesto__p">
                Selective inheritance is not a nice-to-have. It is the foundation of reliable multi-agent systems. Without it, every agent is operating on a superset of state that includes irrelevant, stale, and potentially sensitive information.
              </p>
            </div>

            <div className="manifesto__section">
              <h2 className="manifesto__h2">Why observability matters</h2>
              <p className="manifesto__p">
                When an agent makes an unexpected decision, the first question is: what state did it have when it acted?
              </p>
              <p className="manifesto__p">
                In most systems today, this question is unanswerable. There is no trace. There is no lineage. There is no record of what was routed, what was blocked, and what expired.
              </p>
              <p className="manifesto__p">
                Observability for agent state is not a debugging tool. It is a requirement for production multi-agent systems.
              </p>
            </div>

            {/* Key line */}
            <div className="manifesto__keyline reveal">
              Storage is solved. Coordination is not.
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec cta">
        <div className="w">
          <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto' }} className="reveal">
            <span className="label">See how it works</span>
            <h2 className="cta__h2">Glass0 is the coordination layer<br/>your agent systems need</h2>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
              <Link to="/architecture" className="btn btn--ghost btn--lg">See how Glass0 works</Link>
              <button className="btn btn--em btn--lg" onClick={() => { setRoadmapOpen(true); window.fathom?.trackEvent('shape_roadmap_thesis'); }}>Talk Roadmap with us</button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      <RoadmapModal open={roadmapOpen} onClose={() => setRoadmapOpen(false)} />
    </div>
  );
}
