import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Menu, X, Check, Zap, Database, GitBranch, Activity, Bell, Users, TrendingUp, MessageSquare, AlertCircle, ChevronRight } from 'lucide-react';

/* ─── Color tokens ─── */
const C = {
  bg: '#F5F5F3',
  bgWhite: '#FFFFFF',
  navBg: 'rgba(255,255,255,0.9)',
  dark: '#0B1220',
  mid: '#2E3A4E',
  muted: '#526173',
  border: '#E2E8F0',
  blue: '#2563EB',
  blueDark: '#1D4ED8',
  blueLight: '#EFF6FF',
  heroBg: '#0B1220',
};

/* ─── Monospace label ─── */
const Eyebrow = ({ children, light }) => (
  <p
    className="font-mono text-[11px] font-semibold tracking-[0.22em] uppercase mb-4"
    style={{ color: light ? 'rgba(255,255,255,0.45)' : C.blue }}
  >
    {children}
  </p>
);

/* ─── Section wrapper ─── */
const Section = ({ id, children, className = '', style = {} }) => (
  <section id={id} className={`py-24 ${className}`} style={style}>
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">{children}</div>
  </section>
);

/* ═══════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════ */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scroll = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { label: 'How it works', id: 'how-it-works' },
    { label: 'Use cases', id: 'workflows' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        background: C.navBg,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${scrolled ? C.border : 'transparent'}`,
        boxShadow: scrolled ? '0 1px 12px rgba(11,18,32,0.06)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-[5px] flex items-center justify-center text-white font-bold text-[12px] font-mono"
              style={{ backgroundColor: C.blue }}
            >
              OM
            </div>
            <span className="font-bold text-[15px] tracking-[-0.02em]" style={{ color: C.dark }}>
              Operational Memory
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scroll(l.id)}
                className="text-[13px] font-medium px-3 py-1.5 rounded-md transition-colors"
                style={{ color: C.muted }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.dark)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scroll('final-cta')}
              className="ml-4 inline-flex items-center gap-1.5 font-semibold px-4 py-2 rounded-md text-[13px] text-white transition-colors"
              style={{ backgroundColor: C.blue }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.blueDark)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.blue)}
            >
              Get started
              <span className="font-mono text-[10px] opacity-70">→</span>
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            style={{ color: C.muted }}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-3 border-t" style={{ borderColor: C.border }}>
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scroll(l.id)}
                className="block w-full text-left px-3 py-2.5 text-[14px]"
                style={{ color: C.muted }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scroll('final-cta')}
              className="block w-full text-left px-3 py-2.5 mt-2 rounded-md text-white font-semibold text-[14px]"
              style={{ backgroundColor: C.blue }}
            >
              Get started →
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

/* ═══════════════════════════════════════════════
   HERO DASHBOARD (right panel)
═══════════════════════════════════════════════ */
const EVENTS = [
  { id: 1, sev: 'high', icon: '🔴', label: 'Enterprise customer mentioned pricing issue', source: 'Slack #sales', time: '0:23', ai: 'AI flagged churn risk' },
  { id: 2, sev: 'med', icon: '🟡', label: 'Deal stalled for 9 days — Acme Corp', source: 'HubSpot', time: '1:47', ai: 'Suggest follow-up sequence' },
  { id: 3, sev: 'info', icon: '🔵', label: 'Feature request repeated by 3 accounts', source: 'Intercom', time: '2:05', ai: 'Cluster added to roadmap tracker' },
  { id: 4, sev: 'high', icon: '🔴', label: 'Support sentiment dropped — Q3 cohort', source: 'Zendesk', time: '3:11', ai: 'Escalation recommended' },
  { id: 5, sev: 'med', icon: '🟡', label: 'Champion left target account', source: 'LinkedIn + HubSpot', time: '4:02', ai: 'New stakeholder mapping triggered' },
  { id: 6, sev: 'info', icon: '🔵', label: 'Onboarding stuck at step 3 — TechFlow Inc', source: 'Product', time: '5:30', ai: 'CS playbook dispatched' },
];

const HeroDashboard = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % EVENTS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="rounded-xl overflow-hidden border"
      style={{
        backgroundColor: '#111827',
        borderColor: 'rgba(255,255,255,0.08)',
        boxShadow: '0 40px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
      }}
    >
      {/* Panel header */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{ backgroundColor: '#0d1117', borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
          <span className="font-mono text-[11px] tracking-[0.18em] text-white/50 uppercase">
            // Live Operational Memory
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-white/30">6 signals</span>
          <span
            className="font-mono text-[10px] px-1.5 py-0.5 rounded-sm border"
            style={{
              color: 'rgba(52,211,153,0.9)',
              borderColor: 'rgba(52,211,153,0.3)',
              backgroundColor: 'rgba(52,211,153,0.08)',
            }}
          >
            LIVE
          </span>
        </div>
      </div>

      {/* Tab strip */}
      <div
        className="flex items-center gap-0 border-b px-4"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        {['Events', 'Memory', 'Actions'].map((t, i) => (
          <button
            key={t}
            className="py-2.5 px-3 font-mono text-[11px] border-b-2 transition-colors"
            style={{
              color: i === 0 ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.35)',
              borderBottomColor: i === 0 ? C.blue : 'transparent',
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Event list */}
      <div className="divide-y" style={{ divideColor: 'rgba(255,255,255,0.04)' }}>
        {EVENTS.map((ev, i) => (
          <div
            key={ev.id}
            className="px-4 py-3 transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: i === active ? 'rgba(37,99,235,0.08)' : 'transparent',
              borderLeft: i === active ? `2px solid ${C.blue}` : '2px solid transparent',
            }}
          >
            <div className="flex items-start gap-2.5">
              <span className="text-[11px] mt-0.5 flex-shrink-0">{ev.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] text-white/80 leading-snug truncate">{ev.label}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono text-[10px] text-white/35">{ev.source}</span>
                  <span className="text-white/20 text-[10px]">·</span>
                  <span className="font-mono text-[10px] text-white/30">{ev.time}s ago</span>
                </div>
              </div>
            </div>
            {i === active && (
              <div
                className="mt-2 ml-5 pl-2.5 py-1.5 rounded-r-sm text-[11px] font-mono"
                style={{
                  borderLeft: `2px solid rgba(52,211,153,0.5)`,
                  backgroundColor: 'rgba(52,211,153,0.06)',
                  color: 'rgba(52,211,153,0.85)',
                }}
              >
                ⚡ {ev.ai}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom status bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-t"
        style={{ backgroundColor: '#0d1117', borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <span className="font-mono text-[10px] text-white/30">Slack · HubSpot · Notion · Gmail · Linear · Intercom</span>
        <span className="font-mono text-[10px]" style={{ color: 'rgba(52,211,153,0.7)' }}>● syncing</span>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════════════ */
const Hero = () => (
  <section
    className="relative pt-28 pb-20 overflow-hidden"
    style={{ backgroundColor: C.heroBg }}
  >
    {/* Subtle grid */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />

    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT */}
        <div className="lg:col-span-5 flex flex-col justify-start lg:pt-4">
          <Eyebrow light>// AI OPERATIONS FOR STARTUPS</Eyebrow>

          <h1
            className="font-bold tracking-[-0.04em] leading-[0.95] text-[42px] sm:text-[54px] lg:text-[62px] text-white"
          >
            Your AI operating system for a 10-person company.
          </h1>

          <p className="mt-6 text-[16px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Connect Slack, HubSpot, Notion, Gmail, Linear, and customer conversations into one real-time operational memory layer for AI.
          </p>

          <div className="mt-5 pl-4 border-l" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Stop losing context across tools. Give your startup an AI layer that watches operations, remembers customer history, prioritizes work, and automates execution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button
              onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-md text-[14px] text-white transition-all"
              style={{ backgroundColor: C.blue }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.blueDark)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.blue)}
            >
              Get started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={2.25} />
            </button>
            <button
              onClick={() => document.getElementById('workflows')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 font-medium px-6 py-3.5 rounded-md text-[14px] transition-all"
              style={{
                color: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(255,255,255,0.12)',
                backgroundColor: 'rgba(255,255,255,0.03)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
              }}
            >
              See live workflows
              <span className="font-mono text-[11px] opacity-60">→</span>
            </button>
          </div>

          <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <p className="font-mono text-[10px] tracking-[0.2em] mb-3" style={{ color: 'rgba(255,255,255,0.25)' }}>
              // INTEGRATES WITH
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {['Slack', 'HubSpot', 'Notion', 'Gmail', 'Linear', 'Intercom'].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] font-medium"
                  style={{ color: 'rgba(255,255,255,0.38)' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-7 lg:mt-2">
          <div className="mb-3 flex items-center gap-2 pl-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 6px rgba(52,211,153,0.8)' }} />
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
              // Live company operational memory
            </span>
          </div>
          <HeroDashboard />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   TRUST / SOCIAL PROOF
═══════════════════════════════════════════════ */
const LOGOS = ['DevFlow', 'SyncLayer', 'Orbital', 'Stackloop', 'GlassFlow'];

const TESTIMONIALS = [
  {
    quote: "We replaced three weekly ops reviews with one Operational Memory summary. Our team makes better decisions in less time.",
    name: 'Sarah Chen',
    role: 'CEO, DevFlow',
  },
  {
    quote: "It's like having a chief of staff that never sleeps and reads every Slack message, CRM update, and support ticket.",
    name: 'Marcus Webb',
    role: 'Co-founder, SyncLayer',
  },
  {
    quote: "We caught a churn risk 3 weeks before renewal because Operational Memory connected signals we would have missed completely.",
    name: 'Priya Nair',
    role: 'Head of Revenue, Orbital',
  },
];

const Trust = () => (
  <Section id="trust" style={{ backgroundColor: C.bgWhite }}>
    <div className="text-center mb-14">
      <h2
        className="font-bold tracking-[-0.03em] text-[32px] sm:text-[40px]"
        style={{ color: C.dark }}
      >
        Trusted by lean, high-execution teams
      </h2>
    </div>

    {/* Logo strip */}
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-16 pb-16 border-b" style={{ borderColor: C.border }}>
      {LOGOS.map((name) => (
        <div
          key={name}
          className="font-mono text-[13px] font-semibold tracking-[0.05em] px-4 py-2 rounded-md border"
          style={{ color: C.muted, borderColor: C.border, backgroundColor: C.bg }}
        >
          {name}
        </div>
      ))}
    </div>

    {/* Testimonials */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {TESTIMONIALS.map((t) => (
        <div
          key={t.name}
          className="rounded-xl p-6 border"
          style={{ borderColor: C.border, backgroundColor: C.bg }}
        >
          <p className="text-[15px] leading-relaxed mb-6" style={{ color: C.mid }}>
            "{t.quote}"
          </p>
          <div>
            <p className="font-semibold text-[13px]" style={{ color: C.dark }}>{t.name}</p>
            <p className="font-mono text-[11px] mt-0.5" style={{ color: C.muted }}>{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

/* ═══════════════════════════════════════════════
   PROBLEM
═══════════════════════════════════════════════ */
const PROBLEMS = [
  {
    icon: <Database className="w-5 h-5" strokeWidth={1.75} />,
    title: 'Customer context scattered',
    body: 'Every customer interaction lives in a different tool. Support in Zendesk, deals in HubSpot, conversations in Slack, feedback in Notion. Nobody has the full picture.',
  },
  {
    icon: <MessageSquare className="w-5 h-5" strokeWidth={1.75} />,
    title: 'Operations happen in Slack',
    body: 'Your most critical decisions, escalations, and context live in ephemeral Slack threads that disappear from memory the moment the conversation ends.',
  },
  {
    icon: <Activity className="w-5 h-5" strokeWidth={1.75} />,
    title: 'Decisions depend on memory',
    body: 'Only the founder knows which accounts are at risk, which features are being requested, and which deals are about to close. That knowledge never scales.',
  },
];

const Problem = () => (
  <Section id="problem" style={{ backgroundColor: C.bg }}>
    <div className="max-w-2xl mb-14">
      <Eyebrow>// CONTEXT FRAGMENTATION</Eyebrow>
      <h2
        className="font-bold tracking-[-0.03em] text-[32px] sm:text-[44px] leading-[1.1]"
        style={{ color: C.dark }}
      >
        Your startup already has the data. But only founders understand how it connects.
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {PROBLEMS.map((p) => (
        <div
          key={p.title}
          className="rounded-xl p-6 border"
          style={{ borderColor: C.border, backgroundColor: C.bgWhite }}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center mb-5"
            style={{ backgroundColor: C.blueLight, color: C.blue }}
          >
            {p.icon}
          </div>
          <h3 className="font-bold text-[17px] mb-3 tracking-[-0.02em]" style={{ color: C.dark }}>
            {p.title}
          </h3>
          <p className="text-[14px] leading-relaxed" style={{ color: C.muted }}>
            {p.body}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

/* ═══════════════════════════════════════════════
   HOW IT WORKS
═══════════════════════════════════════════════ */
const STEPS = [
  {
    n: '01',
    icon: <GitBranch className="w-5 h-5" strokeWidth={1.75} />,
    title: 'Connect your tools',
    body: 'Authorize integrations with Slack, HubSpot, Notion, Gmail, Linear, and Intercom in minutes. No engineering required. Read-only access by default.',
  },
  {
    n: '02',
    icon: <Database className="w-5 h-5" strokeWidth={1.75} />,
    title: 'Build live operational memory',
    body: 'Operational Memory continuously ingests signals, links related context across tools, and builds a structured, queryable model of your entire business.',
  },
  {
    n: '03',
    icon: <Zap className="w-5 h-5" strokeWidth={1.75} />,
    title: 'Let AI work across the business',
    body: 'AI teammates monitor your operational memory in real-time, surface risks, draft recommendations, and execute actions — without you needing to prompt them.',
  },
];

const HowItWorks = () => (
  <Section id="how-it-works" style={{ backgroundColor: C.bgWhite }}>
    <div className="max-w-xl mb-16">
      <Eyebrow>// OPERATIONAL MEMORY</Eyebrow>
      <h2
        className="font-bold tracking-[-0.03em] text-[32px] sm:text-[44px] leading-[1.1]"
        style={{ color: C.dark }}
      >
        One shared context layer for your company.
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      {/* Connector line desktop */}
      <div
        className="hidden md:block absolute top-10 left-[calc(33.33%+20px)] right-[calc(33.33%+20px)] h-px"
        style={{ backgroundColor: C.border }}
        aria-hidden
      />

      {STEPS.map((s) => (
        <div key={s.n} className="relative">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border relative z-10"
            style={{ backgroundColor: C.bgWhite, borderColor: C.border, color: C.blue }}
          >
            {s.icon}
          </div>
          <p className="font-mono text-[10px] tracking-[0.2em] mb-2" style={{ color: C.blue }}>
            {s.n}
          </p>
          <h3 className="font-bold text-[18px] mb-3 tracking-[-0.02em]" style={{ color: C.dark }}>
            {s.title}
          </h3>
          <p className="text-[14px] leading-relaxed" style={{ color: C.muted }}>
            {s.body}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

/* ═══════════════════════════════════════════════
   LIVE WORKFLOWS / AI TEAMMATES
═══════════════════════════════════════════════ */
const AGENTS = [
  {
    tag: 'Revenue',
    title: 'AI Revenue Operator',
    signals: ['Deal velocity changes', 'Champion departures', 'Competitor mentions', 'Pricing objections'],
    actions: ['Draft outreach sequences', 'Update CRM stages', 'Flag stalled deals', 'Prep QBR briefs'],
    insight: 'Acme Corp deal at 78% churn risk — last contact 9 days ago',
  },
  {
    tag: 'Customer Success',
    title: 'AI Customer Success Agent',
    signals: ['Support sentiment drops', 'Feature adoption gaps', 'NPS trend changes', 'Renewal timeline proximity'],
    actions: ['Trigger success playbooks', 'Draft check-in emails', 'Escalate to human', 'Create health scores'],
    insight: 'TechFlow onboarding stuck at step 3 — intervention triggered',
  },
  {
    tag: 'Product',
    title: 'AI Product Ops Agent',
    signals: ['Repeated feature requests', 'Bug cluster patterns', 'Roadmap vs customer signals', 'Competitive gaps'],
    actions: ['Cluster feedback themes', 'Update Linear tickets', 'Draft roadmap memo', 'Notify PM team'],
    insight: '"API rate limits" requested by 7 accounts this week',
  },
  {
    tag: 'Operations',
    title: 'AI Chief of Staff',
    signals: ['Cross-functional blockers', 'Meeting action items', 'Team capacity gaps', 'Founder attention needed'],
    actions: ['Generate weekly brief', 'Surface unresolved items', 'Flag decision points', 'Draft status updates'],
    insight: '3 unresolved cross-team decisions from last sprint',
  },
];

const Workflows = () => (
  <section
    id="workflows"
    className="py-24"
    style={{ backgroundColor: '#0B1220' }}
  >
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="max-w-xl mb-16">
        <Eyebrow light>// AI TEAMMATES</Eyebrow>
        <h2
          className="font-bold tracking-[-0.03em] text-[32px] sm:text-[44px] leading-[1.1] text-white"
        >
          AI teammates that understand your business.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {AGENTS.map((a) => (
          <div
            key={a.title}
            className="rounded-xl p-6 border transition-colors"
            style={{ backgroundColor: '#111827', borderColor: 'rgba(255,255,255,0.08)' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="font-mono text-[10px] tracking-[0.18em] px-2 py-1 rounded-sm border"
                style={{ color: 'rgba(37,99,235,0.9)', borderColor: 'rgba(37,99,235,0.3)', backgroundColor: 'rgba(37,99,235,0.08)' }}
              >
                {a.tag}
              </span>
              <h3 className="font-bold text-[16px] tracking-[-0.02em] text-white">
                {a.title}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-5">
              <div>
                <p className="font-mono text-[10px] tracking-[0.15em] mb-2.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  MONITORED SIGNALS
                </p>
                <ul className="space-y-1.5">
                  {a.signals.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: C.blue }} />
                      <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.55)' }}>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.15em] mb-2.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  AUTOMATED ACTIONS
                </p>
                <ul className="space-y-1.5">
                  {a.actions.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: 'rgba(52,211,153,0.7)' }} />
                      <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.55)' }}>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Live insight */}
            <div
              className="mt-4 px-3 py-2.5 rounded-lg font-mono text-[11px]"
              style={{
                backgroundColor: 'rgba(52,211,153,0.06)',
                borderLeft: '2px solid rgba(52,211,153,0.4)',
                color: 'rgba(52,211,153,0.8)',
              }}
            >
              ⚡ {a.insight}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   EVENT STREAM
═══════════════════════════════════════════════ */
const STREAM_EVENTS = [
  { ts: '14:03:22', sev: 'high', label: 'Enterprise customer mentioned pricing issue in #sales-general', ai: 'Churn risk flagged — revenue impact $48k ARR' },
  { ts: '14:01:47', sev: 'med', label: 'Deal stalled for 9 days — Acme Corp (Stage: Negotiation)', ai: 'Follow-up sequence drafted and queued' },
  { ts: '13:58:05', sev: 'info', label: '"API rate limits" feature request logged — 7th account this week', ai: 'Clustered into roadmap theme: API Scalability' },
  { ts: '13:55:11', sev: 'high', label: 'Support CSAT dropped from 4.2 → 3.1 for Q3 cohort', ai: 'CS playbook triggered for 12 affected accounts' },
  { ts: '13:51:33', sev: 'med', label: 'Champion contact left TechFlow Inc — LinkedIn update detected', ai: 'New stakeholder mapping initiated' },
  { ts: '13:49:02', sev: 'info', label: 'Onboarding completion rate dropped — Step 3 (API setup) blocking 4 accounts', ai: 'In-app guide and CS check-in dispatched' },
  { ts: '13:44:18', sev: 'high', label: 'Competitor mention in customer Slack channel: "looked at Acme"', ai: 'Competitive response brief prepared' },
  { ts: '13:41:55', sev: 'info', label: 'Q4 roadmap feedback consolidated across 23 conversations', ai: '6 themes extracted — top: Reporting Enhancements' },
];

const SEV_COLORS = {
  high: { dot: '#EF4444', bg: 'rgba(239,68,68,0.08)', text: '#FCA5A5', label: 'HIGH' },
  med: { dot: '#F59E0B', bg: 'rgba(245,158,11,0.08)', text: '#FCD34D', label: 'MED' },
  info: { dot: '#3B82F6', bg: 'rgba(59,130,246,0.08)', text: '#93C5FD', label: 'INFO' },
};

const EventStream = () => (
  <Section id="event-stream" style={{ backgroundColor: C.bg }}>
    <div className="max-w-xl mb-12">
      <Eyebrow>// LIVE COMPANY SIGNALS</Eyebrow>
      <h2
        className="font-bold tracking-[-0.03em] text-[32px] sm:text-[44px] leading-[1.1]"
        style={{ color: C.dark }}
      >
        Your company, in real-time.
      </h2>
      <p className="mt-4 text-[16px]" style={{ color: C.muted }}>
        Every signal from every tool, connected and interpreted by AI. No dashboards. No manual tracking.
      </p>
    </div>

    <div
      className="rounded-xl overflow-hidden border"
      style={{ borderColor: C.border, backgroundColor: C.bgWhite }}
    >
      {/* Console header */}
      <div
        className="flex items-center justify-between px-5 py-3 border-b"
        style={{ backgroundColor: C.dark, borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="font-mono text-[11px] ml-3 tracking-[0.15em]" style={{ color: 'rgba(255,255,255,0.35)' }}>
            operational-memory — live event console
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 5px rgba(52,211,153,0.8)' }} />
          <span className="font-mono text-[10px]" style={{ color: 'rgba(52,211,153,0.7)' }}>live</span>
        </div>
      </div>

      {/* Events */}
      <div>
        {STREAM_EVENTS.map((ev, i) => {
          const s = SEV_COLORS[ev.sev];
          return (
            <div
              key={i}
              className="px-5 py-4 border-b transition-colors"
              style={{ borderColor: C.border }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.bg)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <div className="flex items-start gap-4">
                {/* Timestamp */}
                <span className="font-mono text-[11px] text-gray-400 flex-shrink-0 pt-0.5 w-[68px]">{ev.ts}</span>

                {/* Severity badge */}
                <span
                  className="font-mono text-[10px] px-1.5 py-0.5 rounded-sm flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: s.bg, color: s.text }}
                >
                  {s.label}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] leading-snug" style={{ color: C.dark }}>{ev.label}</p>
                  <p className="mt-1.5 text-[12px] font-mono" style={{ color: C.blue }}>
                    ⚡ {ev.ai}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ backgroundColor: C.bg }}
      >
        <span className="font-mono text-[11px]" style={{ color: C.muted }}>
          {STREAM_EVENTS.length} signals in last 30 min
        </span>
        <button
          className="font-mono text-[11px] flex items-center gap-1 transition-colors"
          style={{ color: C.blue }}
        >
          View all signals <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  </Section>
);

/* ═══════════════════════════════════════════════
   COMPARISON
═══════════════════════════════════════════════ */
const ROWS = [
  { label: 'Interface', left: 'Chat-based chatbots', right: 'Operational AI teammates', check: true },
  { label: 'Knowledge', left: 'Static, stale knowledge base', right: 'Live operational memory', check: true },
  { label: 'Activation', left: 'Manual prompts, every time', right: 'Continuous autonomous monitoring', check: true },
  { label: 'Context', left: 'Disconnected, per-tool answers', right: 'Unified cross-tool company context', check: true },
  { label: 'Actions', left: 'Text suggestions only', right: 'Executes across integrations', check: true },
  { label: 'Memory', left: 'Forgets after each session', right: 'Persistent, structured memory layer', check: true },
];

const Comparison = () => (
  <Section id="comparison" style={{ backgroundColor: C.bgWhite }}>
    <div className="max-w-xl mb-14">
      <Eyebrow>// WHY THIS IS DIFFERENT</Eyebrow>
      <h2
        className="font-bold tracking-[-0.03em] text-[32px] sm:text-[44px] leading-[1.1]"
        style={{ color: C.dark }}
      >
        Not another AI chatbot.
      </h2>
    </div>

    <div
      className="rounded-xl overflow-hidden border"
      style={{ borderColor: C.border }}
    >
      {/* Table header */}
      <div
        className="grid grid-cols-3 px-6 py-4 border-b"
        style={{ backgroundColor: C.bg, borderColor: C.border }}
      >
        <p className="font-mono text-[11px] tracking-[0.18em]" style={{ color: C.muted }}></p>
        <p className="font-mono text-[11px] tracking-[0.18em] text-center" style={{ color: C.muted }}>TRADITIONAL AI TOOLS</p>
        <p className="font-mono text-[11px] tracking-[0.18em] text-center" style={{ color: C.blue }}>OPERATIONAL MEMORY</p>
      </div>

      {ROWS.map((r, i) => (
        <div
          key={r.label}
          className="grid grid-cols-3 px-6 py-4 border-b items-center"
          style={{ borderColor: C.border, backgroundColor: i % 2 === 0 ? C.bgWhite : C.bg }}
        >
          <p className="font-semibold text-[13px]" style={{ color: C.dark }}>{r.label}</p>
          <p className="text-[13px] text-center flex items-center justify-center gap-2" style={{ color: C.muted }}>
            <span className="w-4 h-4 rounded-full bg-gray-100 text-gray-400 text-[10px] flex items-center justify-center flex-shrink-0">✕</span>
            {r.left}
          </p>
          <p className="text-[13px] text-center flex items-center justify-center gap-2" style={{ color: C.dark }}>
            <span
              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: C.blueLight, color: C.blue }}
            >
              <Check className="w-2.5 h-2.5" strokeWidth={3} />
            </span>
            {r.right}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

/* ═══════════════════════════════════════════════
   PRICING
═══════════════════════════════════════════════ */
const PLANS = [
  {
    name: 'Starter',
    price: '$149',
    period: '/month',
    desc: 'For early-stage teams starting to connect their operations.',
    features: ['Up to 3 integrations', '1 AI teammate', '30-day memory window', 'Slack & email alerts', 'Standard support'],
    cta: 'Start free trial',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$399',
    period: '/month',
    desc: 'For scaling teams that need full operational intelligence.',
    features: ['Unlimited integrations', '4 AI teammates', '1-year memory window', 'Real-time event console', 'Automated playbooks', 'Priority support'],
    cta: 'Get started',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For companies that need custom AI workflows and compliance.',
    features: ['Everything in Growth', 'Custom AI teammate training', 'SOC2 compliant', 'SSO & SCIM', 'Dedicated CSM', 'SLA guarantee'],
    cta: 'Talk to sales',
    highlighted: false,
  },
];

const Pricing = () => (
  <Section id="pricing" style={{ backgroundColor: C.bg }}>
    <div className="text-center max-w-xl mx-auto mb-14">
      <Eyebrow>// PRICING</Eyebrow>
      <h2
        className="font-bold tracking-[-0.03em] text-[32px] sm:text-[44px] leading-[1.1]"
        style={{ color: C.dark }}
      >
        Simple, transparent pricing.
      </h2>
      <p className="mt-4 text-[16px]" style={{ color: C.muted }}>
        All plans include a 14-day free trial. No credit card required.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {PLANS.map((p) => (
        <div
          key={p.name}
          className="rounded-xl p-7 border transition-all"
          style={{
            backgroundColor: p.highlighted ? C.dark : C.bgWhite,
            borderColor: p.highlighted ? C.blue : C.border,
            boxShadow: p.highlighted ? `0 0 0 1px ${C.blue}, 0 24px 48px -12px rgba(37,99,235,0.2)` : '0 1px 4px rgba(0,0,0,0.04)',
          }}
        >
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <p
                className="font-mono text-[11px] tracking-[0.18em] font-semibold"
                style={{ color: p.highlighted ? 'rgba(255,255,255,0.5)' : C.muted }}
              >
                {p.name.toUpperCase()}
              </p>
              {p.highlighted && (
                <span
                  className="font-mono text-[10px] px-2 py-0.5 rounded-sm"
                  style={{ backgroundColor: C.blue, color: 'white' }}
                >
                  POPULAR
                </span>
              )}
            </div>
            <div className="flex items-baseline gap-1">
              <span
                className="font-bold text-[40px] tracking-[-0.04em]"
                style={{ color: p.highlighted ? '#fff' : C.dark }}
              >
                {p.price}
              </span>
              {p.period && (
                <span className="text-[14px]" style={{ color: p.highlighted ? 'rgba(255,255,255,0.45)' : C.muted }}>
                  {p.period}
                </span>
              )}
            </div>
            <p className="mt-2 text-[14px]" style={{ color: p.highlighted ? 'rgba(255,255,255,0.55)' : C.muted }}>
              {p.desc}
            </p>
          </div>

          <ul className="space-y-3 mb-8">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: p.highlighted ? 'rgba(37,99,235,0.3)' : C.blueLight,
                    color: p.highlighted ? '#93C5FD' : C.blue,
                  }}
                >
                  <Check className="w-2.5 h-2.5" strokeWidth={3} />
                </div>
                <span className="text-[13px]" style={{ color: p.highlighted ? 'rgba(255,255,255,0.75)' : C.mid }}>
                  {f}
                </span>
              </li>
            ))}
          </ul>

          <button
            className="w-full py-3 rounded-md font-semibold text-[14px] transition-all"
            style={{
              backgroundColor: p.highlighted ? C.blue : C.bgWhite,
              color: p.highlighted ? '#fff' : C.dark,
              border: p.highlighted ? 'none' : `1px solid ${C.border}`,
            }}
            onMouseEnter={(e) => {
              if (p.highlighted) {
                e.currentTarget.style.backgroundColor = C.blueDark;
              } else {
                e.currentTarget.style.backgroundColor = C.bg;
              }
            }}
            onMouseLeave={(e) => {
              if (p.highlighted) {
                e.currentTarget.style.backgroundColor = C.blue;
              } else {
                e.currentTarget.style.backgroundColor = C.bgWhite;
              }
            }}
          >
            {p.cta}
          </button>
        </div>
      ))}
    </div>
  </Section>
);

/* ═══════════════════════════════════════════════
   FAQ
═══════════════════════════════════════════════ */
const FAQS = [
  {
    q: 'How long does setup take?',
    a: 'Most teams are connected and seeing their first operational signals within 20 minutes. Each integration takes under 3 minutes to authorize.',
  },
  {
    q: 'Is my data used to train AI models?',
    a: 'No. Your operational data is never used to train any AI model — ours or any third-party provider. We use your data only to generate operational memory for your company.',
  },
  {
    q: 'What tools do you integrate with?',
    a: 'We currently support Slack, HubSpot, Notion, Gmail, Linear, Intercom, Zendesk, and Salesforce. We add new integrations based on customer demand.',
  },
  {
    q: 'How is this different from a RAG chatbot or AI assistant?',
    a: 'Traditional AI assistants answer questions when prompted. Operational Memory runs continuously, builds structured context from all your tools, and proactively surfaces risks and opportunities — without you needing to ask.',
  },
  {
    q: 'Is it SOC2 compliant?',
    a: 'We are SOC2 Type II certified. All data is encrypted in transit and at rest. We support SSO and granular access controls on the Enterprise plan.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <Section id="faq" style={{ backgroundColor: C.bgWhite }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Eyebrow>// FAQ</Eyebrow>
          <h2
            className="font-bold tracking-[-0.03em] text-[32px] sm:text-[40px]"
            style={{ color: C.dark }}
          >
            Common questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: open === i ? C.blue : C.border }}
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                style={{ backgroundColor: open === i ? C.blueLight : C.bgWhite }}
              >
                <span className="font-semibold text-[14px]" style={{ color: C.dark }}>{f.q}</span>
                <span
                  className="text-[18px] font-light ml-4 flex-shrink-0 transition-transform"
                  style={{
                    color: C.blue,
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 border-t" style={{ borderColor: C.border }}>
                  <p className="text-[14px] leading-relaxed pt-3" style={{ color: C.muted }}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

/* ═══════════════════════════════════════════════
   FINAL CTA
═══════════════════════════════════════════════ */
const FinalCTA = () => (
  <section
    id="final-cta"
    className="py-28 sm:py-36 relative overflow-hidden"
    style={{ backgroundColor: C.bgWhite }}
  >
    {/* Soft accent glows */}
    <div
      aria-hidden
      className="pointer-events-none absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full"
      style={{ background: 'radial-gradient(closest-side, rgba(37,99,235,0.07), transparent 70%)', filter: 'blur(20px)' }}
    />
    <div
      aria-hidden
      className="pointer-events-none absolute -bottom-24 right-0 w-[520px] h-[520px] rounded-full"
      style={{ background: 'radial-gradient(closest-side, rgba(37,99,235,0.05), transparent 70%)', filter: 'blur(30px)' }}
    />

    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      <div className="grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <Eyebrow>// Get started</Eyebrow>
          <h2
            className="font-bold tracking-[-0.04em] leading-[0.97] text-[52px] sm:text-[68px] md:text-[84px]"
            style={{ color: C.dark }}
          >
            Stop operating from memory.
          </h2>
          <p className="mt-7 text-[18px] max-w-xl leading-relaxed" style={{ color: C.muted }}>
            Give your startup a real-time AI operating layer.
          </p>
        </div>

        <div className="md:col-span-4 md:text-right">
          <button
            className="group inline-flex items-center gap-3 font-semibold px-7 py-4 rounded-md text-[15px] text-white transition-all"
            style={{
              backgroundColor: C.blue,
              boxShadow: '0 12px 28px -10px rgba(37,99,235,0.45), 0 4px 12px -4px rgba(37,99,235,0.25)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.blueDark)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.blue)}
          >
            Get started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={2.25} />
          </button>
        </div>
      </div>

      {/* Security badges */}
      <div className="mt-14 pt-10 border-t flex flex-wrap gap-6 items-center" style={{ borderColor: C.border }}>
        {[
          { icon: '🔒', label: 'SOC2-ready' },
          { icon: '🔐', label: 'Encrypted integrations' },
          { icon: '🚫', label: 'No model training on customer data' },
        ].map((b) => (
          <div key={b.label} className="flex items-center gap-2">
            <span className="text-[13px]">{b.icon}</span>
            <span className="font-mono text-[11px]" style={{ color: C.muted }}>{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════ */
const Footer = () => (
  <footer className="border-t py-10" style={{ borderColor: C.border, backgroundColor: C.bg }}>
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-[4px] flex items-center justify-center text-white font-bold text-[10px] font-mono"
            style={{ backgroundColor: C.blue }}
          >
            OM
          </div>
          <span className="font-bold text-[14px] tracking-[-0.02em]" style={{ color: C.dark }}>
            Operational Memory
          </span>
        </div>

        <div className="flex items-center gap-6">
          {['Privacy', 'Terms', 'Security', 'Contact'].map((l) => (
            <a
              key={l}
              href="#"
              className="text-[13px] transition-colors"
              style={{ color: C.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.dark)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {l}
            </a>
          ))}
        </div>

        <p className="font-mono text-[11px]" style={{ color: 'rgba(82,97,115,0.5)' }}>
          © 2025 Operational Memory, Inc.
        </p>
      </div>
    </div>
  </footer>
);

/* ═══════════════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════════════ */
export const OperationalMemoryPage = () => (
  <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif' }}>
    <Navbar />
    <main>
      <Hero />
      <Trust />
      <Problem />
      <HowItWorks />
      <Workflows />
      <EventStream />
      <Comparison />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

export default OperationalMemoryPage;
