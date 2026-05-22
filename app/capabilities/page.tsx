import React from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ArrowRight,
  Factory,
  Workflow,
  ScanLine,
  Network,
  Users,
  Handshake,
  CheckCircle2,
  Target,
  ClipboardList,
  Shield,
  GraduationCap,
  Briefcase,
  BarChart3,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-services.png')" }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-white/90" />

        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/20 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 text-center animate-fade-in">
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-6 px-5 py-1.5 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm">
            Our Services
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1]">
            Contract Development<br />
            <span className="text-accent">Manufacturing Operations</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
            We provide end-to-end manufacturing execution services — from operations
            coordination to traceability — for cross-border mobility component projects.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-foreground/50 w-8 h-8" />
        </div>
      </section>

      {/* CDMO Core Services — Detailed Breakdown */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeader
            eyebrow="CDMO Services"
            heading="What We Help Execute"
            subheading="Our core services enable structured manufacturing execution across every phase of a mobility component project."
          />

          {/* Service 1: Manufacturing Operations */}
          <div className="mt-16 mb-20">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Factory className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-extrabold">Manufacturing Operations</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  We coordinate production workflows across verified manufacturers — ensuring
                  capacity alignment, output consistency, and compliance adherence throughout
                  the production lifecycle.
                </p>
                <ul className="space-y-3">
                  {[
                    'Production workflow coordination across multiple manufacturers',
                    'Capacity verification and utilization alignment',
                    'Output quality and consistency monitoring',
                    'Cross-border production logistics coordination',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-1/2 bg-card rounded-2xl p-8 border border-border">
                <h4 className="font-bold text-lg mb-4">How it works in practice</h4>
                <div className="space-y-4">
                  {[
                    { step: '1', text: 'Project requirements are scoped with the buyer/OEM' },
                    { step: '2', text: 'Verified manufacturers are matched based on capability and capacity' },
                    { step: '3', text: 'Production is coordinated with milestone-based tracking' },
                    { step: '4', text: 'Quality checkpoints and compliance documentation are maintained' },
                  ].map((s, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                        {s.step}
                      </span>
                      <p className="text-foreground/70 text-sm pt-1.5">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Execution Consistency */}
          <div className="mb-20 pt-12 border-t border-border/50">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Workflow className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-extrabold">Execution Consistency</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Project-level coordination across all Network — from initial scoping
                  through final delivery — with structured task management and clear ownership
                  at every phase.
                </p>
                <ul className="space-y-3">
                  {[
                    'Network role assignment and responsibility mapping',
                    'Timeline and milestone management across partners',
                    'Task delegation with accountability tracking',
                    'Escalation protocols and decision workflows',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-1/2 bg-card rounded-2xl p-8 border border-border">
                <h4 className="font-bold text-lg mb-4">Execution model</h4>
                <p className="text-foreground/70 text-sm mb-4">
                  Every project has a defined execution structure with clear phases, ownership, and deliverables:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Scoping', desc: 'Define requirements & Network' },
                    { label: 'Planning', desc: 'Align timelines & resources' },
                    { label: 'Execution', desc: 'Coordinate production & quality' },
                    { label: 'Closure', desc: 'Delivery, documentation & review' },
                  ].map((phase, idx) => (
                    <div key={idx} className="p-4 bg-background rounded-xl border border-border">
                      <h5 className="font-bold text-sm mb-1">{phase.label}</h5>
                      <p className="text-foreground/60 text-xs">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: Manufacturing Traceability */}
          <div className="mb-20 pt-12 border-t border-border/50">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <ScanLine className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-extrabold">Manufacturing Traceability</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Full documentation trail from raw material sourcing to finished component delivery —
                  ensuring compliance, certifications, and quality records are maintained at every node
                  in the supply chain.
                </p>
                <ul className="space-y-3">
                  {[
                    'End-to-end material and process documentation',
                    'Certification tracking and compliance verification',
                    'Quality inspection records at each production stage',
                    'Audit-ready documentation for regulatory requirements',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-1/2 bg-muted text-foreground rounded-2xl p-8">
                <h4 className="font-bold text-lg mb-4">Why traceability matters in mobility</h4>
                <p className="text-foreground/70 text-sm mb-6">
                  In mobility manufacturing, components go into safety-critical systems. Traceability
                  is not optional — it&apos;s a regulatory and business requirement.
                </p>
                <div className="space-y-3">
                  {[
                    'Automotive: IATF 16949 compliance',
                    'Aerospace: AS9100 documentation',
                    'Rail: EN 15085 welding standards',
                    'EV: Battery component tracing',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 px-4 py-2 bg-background/5 rounded-lg">
                      <Shield className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service 4: Consortium Coordination */}
          <div className="pt-12 border-t border-border/50">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Network className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-extrabold">Consortium Coordination</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  We bring manufacturers, buyers, associations, and partners into aligned
                  consortiums for large-scale mobility programs — enabling structured collaboration
                  without intermediary trading.
                </p>
                <ul className="space-y-3">
                  {[
                    'Multi-Network program alignment',
                    'Association and member coordination',
                    'Cross-border consortium structuring',
                    'Shared compliance and quality frameworks',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-1/2 bg-card rounded-2xl p-8 border border-border">
                <h4 className="font-bold text-lg mb-4">Consortium participants</h4>
                <div className="space-y-3">
                  {[
                    { icon: Factory, label: 'Manufacturers', desc: 'Provide verified capacity and capability' },
                    { icon: Briefcase, label: 'Buyers & OEMs', desc: 'Define requirements and volume needs' },
                    { icon: Users, label: 'Associations', desc: 'Enable standards and cluster development' },
                    { icon: Handshake, label: 'Advisors', desc: 'Legal, financial, and technical guidance' },
                  ].map((p, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 bg-background rounded-xl border border-border">
                      <p.icon className="w-5 h-5 text-accent shrink-0" />
                      <div>
                        <h5 className="font-bold text-sm">{p.label}</h5>
                        <p className="text-foreground/60 text-xs">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Cell Services */}
      <section className="py-24 md:py-32 bg-card border-y border-border/30">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeader
            eyebrow="Execution Cell"
            heading="Student Workforce Services"
            subheading="Our execution cell deploys trained student members to support key operational functions across projects."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: GraduationCap,
                title: 'HR Support',
                desc: 'Workforce sourcing, onboarding coordination, and team alignment for manufacturing operations across project partners.',
              },
              {
                icon: BarChart3,
                title: 'Business Development',
                desc: 'Network research, outreach activities, demand generation, and strategic content preparation for visibility.',
              },
              {
                icon: Factory,
                title: 'Manufacturing Support',
                desc: 'Process documentation, quality monitoring, production tracking, and operational support at manufacturing nodes.',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-8 bg-background rounded-xl border border-border hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Matchmaking */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <span className="inline-block text-accent font-bold tracking-widest uppercase text-xs mb-4">
                AI & Automation
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                Intelligent Matchmaking<br />
                <span className="text-accent">& Engineering</span>
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                We use AI and automation to match manufacturer capabilities with project
                requirements — analyzing capacity, certifications, technical fit, and
                geographic factors to find the right execution partners.
              </p>
              <ul className="space-y-3">
                {[
                  'AI-assisted manufacturer-project matching',
                  'Automated capability and capacity analysis',
                  'Engineering feasibility screening',
                  'Data mining for Network insights',
                  'Workflow automation across operational verticals',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Target, label: 'Requirement Matching', value: 'AI-Driven' },
                  { icon: ClipboardList, label: 'Workflow Automation', value: 'n8n Powered' },
                  { icon: Shield, label: 'Quality Verification', value: 'Structured' },
                  { icon: Network, label: 'Network Insights', value: 'Data-Backed' },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-card rounded-xl border border-border text-center">
                    <item.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="font-bold text-sm mb-1">{item.label}</p>
                    <p className="text-accent text-xs font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-muted text-foreground relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Ready to Execute a Project?
          </h2>
          <p className="text-xl mb-10 font-medium max-w-2xl mx-auto text-foreground/80">
            Tell us about your manufacturing requirements. We&apos;ll structure the right
            execution approach with the right partners.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request-strategic-discussion"
              className="inline-block px-10 py-5 bg-accent text-white font-bold rounded hover:bg-accent/90 transition-all text-lg shadow-xl hover:-translate-y-1"
            >
              Request a Strategic Discussion
            </Link>
            <Link
              href="/join-network"
              className="inline-block px-10 py-5 bg-transparent text-foreground font-bold rounded border-2 border-border hover:border-foreground transition-all text-lg hover:-translate-y-0.5"
            >
              Join Our Network
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
