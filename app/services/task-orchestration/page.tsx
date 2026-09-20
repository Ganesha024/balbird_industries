import React from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  CheckCircle2,
  Mic,
  ListChecks,
  UserCheck,
  CalendarDays,
  BarChart3,
  Bell,
  ArrowRight,
  ClipboardList,
  Target,
  Users,
  Workflow,
  CheckSquare,
  Eye,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const capabilities = [
  {
    icon: Mic,
    title: 'Communication Capture',
    description:
      'Process meeting transcripts and submitted work updates to surface relevant action items and decisions.',
  },
  {
    icon: ListChecks,
    title: 'Intelligent Task Extraction',
    description:
      'Identify action items, responsible individuals, and deadlines from captured communication — structured and ready for review.',
  },
  {
    icon: UserCheck,
    title: 'Task Routing & Validation',
    description:
      'Route structured tasks through defined workflows with human validation before assignment, ensuring accuracy and accountability.',
  },
  {
    icon: CalendarDays,
    title: 'Departmental Goal Coordination',
    description:
      'Support weekly and monthly goals, assignments, and departmental activities through a coordinated task structure.',
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    description:
      'Provide structured visibility into task status and execution progress across departments and individuals.',
  },
  {
    icon: Bell,
    title: 'Automated Updates',
    description:
      'Support configured notifications and operational updates to keep relevant stakeholders informed without manual follow-up.',
  },
];

const challenges = [
  'Important action items can remain buried in meetings and informal conversations.',
  'Responsibilities and deadlines may not always be formally recorded or communicated.',
  'Managers need structured visibility into departmental progress without chasing updates.',
  'Operational decisions need to translate into accountable, trackable execution.',
];

const businessValue = [
  'Clearer task ownership across departments and individuals',
  'Improved execution visibility without manual status chasing',
  'Better coordination between departments on shared priorities',
  'Structured follow-up and deadline accountability',
  'Improved operational accountability and traceability',
];

const ppcFlow = [
  { label: 'Planning Decisions', icon: ClipboardList },
  { label: 'Structured Tasks', icon: ListChecks },
  { label: 'Ownership & Deadlines', icon: UserCheck },
  { label: 'Departmental Execution', icon: Users },
  { label: 'Progress Visibility', icon: Eye },
];

export default function TaskOrchestrationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-services.png')" }}
      >
        <div className="absolute inset-0 bg-white/90" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 text-center animate-fade-in">
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-6 text-center mx-auto">
            Digital Solutions
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1] text-center mx-auto">
            Task<br />
            <span className="text-accent">Orchestration</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10 font-medium leading-relaxed text-center">
            Turning operational decisions and communication into structured, accountable execution.
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-foreground/50 w-8 h-8" />
        </div>
      </section>

      {/* Operational Challenge */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <SectionHeader
                eyebrow="The Challenge"
                heading="Where Operational Decisions Get Lost"
                subheading="In manufacturing and project environments, critical decisions made in meetings often fail to translate into structured, accountable action."
              />
              <ul className="mt-10 space-y-4">
                {challenges.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2 h-full min-h-[400px] p-8 rounded-2xl border border-border bg-card shadow-xl flex items-center justify-center relative overflow-hidden">
              <div className="relative w-[280px] h-[280px]">
                {/* Diamond connector */}
                <div className="absolute inset-0 m-auto w-48 h-48 border border-accent/20 rotate-45 z-0" />

                {/* Top node */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                  <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center shadow-md mb-2 group">
                    <Mic className="w-5 h-5 text-foreground/80 group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Capture</span>
                </div>

                {/* Right node */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col items-center z-10">
                  <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center shadow-md mb-2 group">
                    <UserCheck className="w-5 h-5 text-foreground/80 group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Assign</span>
                </div>

                {/* Bottom node */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                  <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center shadow-md mb-2 group">
                    <CheckSquare className="w-5 h-5 text-foreground/80 group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Track</span>
                </div>

                {/* Left node */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col items-center z-10">
                  <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center shadow-md mb-2 group">
                    <ListChecks className="w-5 h-5 text-foreground/80 group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Structure</span>
                </div>

                {/* Center pulse */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center animate-[pulse_3s_ease-in-out_infinite]">
                    <Workflow className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-24 md:py-32 bg-card border-y border-border/30">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-accent font-bold tracking-widest uppercase text-xs mb-4">
              Our Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              From Communication to<br />
              <span className="text-accent">Coordinated Execution</span>
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Balbird&apos;s developed task orchestration system captures relevant communication, identifies tasks and
              responsibilities, routes structured tasks through human validation, and provides visibility into progress
              and execution status. It bridges the gap between what was decided and what gets done — giving managers
              structured oversight without replacing human judgement.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 bg-background rounded-xl border border-border hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <cap.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-bold mb-3">{cap.title}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PPC Integration Flow */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeader
            eyebrow="PPC Integration"
            heading="From Planning Decisions to Coordinated Execution"
            subheading="This solution serves as an execution and coordination layer supporting Production Planning and Control — translating decisions into structured, trackable actions."
          />
          <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {ppcFlow.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center text-center max-w-[140px]">
                  <div className="w-14 h-14 bg-background border-2 border-accent/40 rounded-full flex items-center justify-center mb-3 shadow-md">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide text-foreground leading-tight">{step.label}</span>
                </div>
                {idx < ppcFlow.length - 1 && (
                  <ArrowRight className="text-accent/40 w-5 h-5 shrink-0 hidden md:block mx-2" />
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-foreground/50 max-w-xl mx-auto">
            This solution addresses execution coordination and progress visibility. It does not independently create
            production schedules or optimise manufacturing capacity.
          </p>
        </div>
      </section>

      {/* Business Value */}
      <section className="py-24 md:py-32 bg-card border-y border-border/30">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <span className="inline-block text-accent font-bold tracking-widest uppercase text-xs mb-4">
                Business Value
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                Operational Impact
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-8">
                By structuring the path from operational decisions to execution, organisations can reduce information
                loss, improve team coordination, and maintain clearer accountability across departments.
              </p>
              <ul className="space-y-4">
                {businessValue.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              {[
                { icon: Mic, label: 'Communication', value: 'Captured' },
                { icon: ListChecks, label: 'Task Extraction', value: 'Structured' },
                { icon: Target, label: 'Ownership', value: 'Assigned' },
                { icon: Eye, label: 'Progress', value: 'Visible' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-background rounded-xl border border-border text-center">
                  <item.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="font-bold text-sm mb-1">{item.label}</p>
                  <p className="text-accent text-xs font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-muted text-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Turn operational decisions into action.
          </h2>
          <p className="text-xl mb-10 font-medium max-w-2xl mx-auto text-foreground/80">
            Talk to Balbird Industries about applying structured task orchestration to your manufacturing and operational workflows.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request-strategic-discussion"
              className="inline-block px-10 py-5 bg-accent text-white font-bold rounded hover:bg-accent/90 transition-all text-lg shadow-xl hover:-translate-y-1"
            >
              Talk to Balbird Industries
            </Link>
            <Link
              href="/capabilities"
              className="inline-block px-10 py-5 bg-transparent text-foreground font-bold rounded border-2 border-border hover:border-foreground transition-all text-lg hover:-translate-y-0.5"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
