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
  ShieldCheck,
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
        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 text-center animate-fade-in">
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-6 px-5 py-1.5 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm">
            Our Services
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1]">
            Contract Development<br />
            <span className="text-accent">Manufacturing Operations</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
            We provide end-to-end manufacturing execution services, from operations
            coordination to traceability, for cross-border mobility component projects.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-foreground/50 w-8 h-8" />
        </div>
      </section>

      {/* CDMO Core Services, Detailed Breakdown */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeader
            eyebrow="CDMO Services"
            heading="What We Help Execute"
            subheading="Our core services enable structured manufacturing execution across every phase of a mobility component project."
          />

          {/* Service 1: Manufacturing Operations */}
          <div className="mt-16 mb-20">
            <div className="flex flex-col lg:flex-row gap-12 items-stretch">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Factory className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-extrabold">Manufacturing Operations</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  We coordinate production workflows across verified manufacturers, ensuring
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
              <div className="w-full lg:w-1/2 h-full min-h-[400px] p-8 rounded-2xl border border-border bg-card shadow-xl flex flex-col items-center justify-center relative overflow-hidden">
                 <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-border -translate-y-1/2 z-0" />
                 <div className="absolute top-1/2 left-[10%] w-[30%] h-0.5 bg-accent -translate-y-1/2 z-0 animate-[pulse_2s_ease-in-out_infinite]" />
                 
                 <div className="flex justify-between items-center w-full max-w-sm relative z-10">
                    {[
                      { icon: ClipboardList, label: "Scope" },
                      { icon: Network, label: "Match" },
                      { icon: Factory, label: "Produce" },
                      { icon: ShieldCheck, label: "Verify" },
                    ].map((step, i) => (
                      <div key={i} className="flex flex-col items-center gap-3">
                         <div className="w-12 h-12 bg-background border-2 border-accent/50 rounded-full flex items-center justify-center shadow-lg relative group transition-all hover:border-accent hover:scale-110">
                            <step.icon className="w-5 h-5 text-accent" />
                         </div>
                         <span className="text-[10px] font-bold uppercase tracking-wide text-foreground">{step.label}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>

          {/* Service 2: Execution Consistency */}
          <div className="mb-20 pt-12 border-t border-border/50">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-stretch">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Workflow className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-extrabold">Execution Consistency</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Project-level coordination across all Network, from initial scoping
                  through final delivery, with structured task management and clear ownership
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
              <div className="w-full lg:w-1/2 h-full min-h-[400px] p-8 rounded-2xl border border-border bg-card shadow-xl flex items-center justify-center relative overflow-hidden">
                <div className="relative w-[280px] h-[280px]">
                   {/* Connections */}
                   <div className="absolute inset-0 m-auto w-48 h-48 border border-accent/20 rotate-45 z-0" />
                   
                   {/* Nodes */}
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                      <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center shadow-md mb-2 relative group">
                         <ClipboardList className="w-5 h-5 text-foreground/80 relative z-10 group-hover:text-accent transition-colors" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider">Plan</span>
                   </div>
                   
                   <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col items-center z-10">
                      <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center shadow-md mb-2 relative group">
                         <Target className="w-5 h-5 text-foreground/80 relative z-10 group-hover:text-accent transition-colors" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider">Execute</span>
                   </div>
                   
                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                      <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center shadow-md mb-2 relative group">
                         <CheckCircle2 className="w-5 h-5 text-foreground/80 relative z-10 group-hover:text-accent transition-colors" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider">Close</span>
                   </div>
                   
                   <div className="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col items-center z-10">
                      <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center shadow-md mb-2 relative group">
                         <Network className="w-5 h-5 text-foreground/80 relative z-10 group-hover:text-accent transition-colors" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider">Review</span>
                   </div>
                   
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center animate-[pulse_3s_ease-in-out_infinite]">
                         <Workflow className="w-6 h-6 text-accent" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: Manufacturing Traceability */}
          <div className="mb-20 pt-12 border-t border-border/50">
            <div className="flex flex-col lg:flex-row gap-12 items-stretch">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <ScanLine className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-extrabold">Manufacturing Traceability</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Full documentation trail from raw material sourcing to finished component delivery, ensuring compliance, certifications, and quality records are maintained at every node
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
              <div className="w-full lg:w-1/2 h-full min-h-[400px] p-8 rounded-2xl border border-border bg-card shadow-xl flex items-center justify-center relative overflow-hidden">
                <div className="relative w-full max-w-sm h-[300px] flex items-center justify-center">
                   {/* Central scan item */}
                   <div className="relative z-20 w-24 h-24 bg-background border border-border rounded-lg flex items-center justify-center shadow-xl overflow-hidden">
                      <ScanLine className="w-10 h-10 text-foreground/30" />
                      {/* Scanning laser effect */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-accent/80 shadow-[0_0_10px_rgba(var(--accent-rgb),1)] animate-[bounce_3s_infinite]" />
                   </div>
                   
                   {/* Glowing lines connecting to standards */}
                   <div className="absolute top-1/2 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2 z-0" />
                   <div className="absolute top-12 bottom-12 left-1/2 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent -translate-x-1/2 z-0" />
                   
                   {/* Standard Nodes */}
                   {[
                     { label: 'IATF 16949', pos: 'top-2 left-2' },
                     { label: 'AS9100', pos: 'top-2 right-2' },
                     { label: 'EN 15085', pos: 'bottom-2 left-2' },
                     { label: 'EV Trace', pos: 'bottom-2 right-2' },
                   ].map((std, i) => (
                     <div key={i} className={`absolute ${std.pos} z-10 flex items-center gap-2 px-3 py-1.5 bg-background border border-border rounded-md shadow-sm`}>
                        <Shield className="w-3.5 h-3.5 text-accent" />
                        <span className="text-[10px] font-bold tracking-widest uppercase">{std.label}</span>
                     </div>
                   ))}
                   
                   {/* Data pulses */}
                   <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 rounded-full bg-accent animate-pulse -translate-y-1/2" />
                   <div className="absolute top-1/4 left-1/2 w-1.5 h-1.5 rounded-full bg-accent animate-pulse -translate-x-1/2 delay-150" />
                   <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-accent animate-pulse -translate-y-1/2 delay-300" />
                   <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 rounded-full bg-accent animate-pulse -translate-x-1/2 delay-[450ms]" />
                </div>
              </div>
            </div>
          </div>

          {/* Service 4: Consortium Coordination */}
          <div className="pt-12 border-t border-border/50">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-stretch">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Network className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-extrabold">Consortium Coordination</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  We bring manufacturers, clients, associations, and partners into aligned
                  consortiums for large-scale mobility programs, enabling structured collaboration
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
              <div className="w-full lg:w-1/2 h-full min-h-[400px] p-8 rounded-2xl border border-border bg-card shadow-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-70" />
                
                <div className="relative w-full max-w-sm h-[300px] flex flex-col items-center justify-center">
                  {/* Lines */}
                  <svg className="absolute inset-0 w-full h-full z-0 opacity-20" style={{ stroke: 'currentColor', strokeWidth: 1.5, strokeDasharray: '4 4' }}>
                     <line x1="50%" y1="50%" x2="20%" y2="20%" />
                     <line x1="50%" y1="50%" x2="80%" y2="20%" />
                     <line x1="50%" y1="50%" x2="20%" y2="80%" />
                     <line x1="50%" y1="50%" x2="80%" y2="80%" />
                  </svg>
                  
                  {/* Center Node */}
                  <div className="relative z-20 w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(var(--accent-rgb),0.5)]">
                     <Network className="w-7 h-7" />
                  </div>
                  
                  {/* Participant Nodes */}
                  <div className="absolute top-[5%] left-[5%] z-10 flex flex-col items-center">
                     <div className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center mb-1 shadow-md group hover:border-accent transition-colors">
                        <Factory className="w-4 h-4 text-foreground/70 group-hover:text-accent transition-colors" />
                     </div>
                     <span className="text-[10px] font-semibold bg-card px-2 py-0.5 rounded shadow-sm border border-border">Manufacturers</span>
                  </div>
                  
                  <div className="absolute top-[5%] right-[5%] z-10 flex flex-col items-center">
                     <div className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center mb-1 shadow-md group hover:border-accent transition-colors">
                        <Briefcase className="w-4 h-4 text-foreground/70 group-hover:text-accent transition-colors" />
                     </div>
                     <span className="text-[10px] font-semibold bg-card px-2 py-0.5 rounded shadow-sm border border-border">Clients/OEMs</span>
                  </div>
                  
                  <div className="absolute bottom-[5%] left-[5%] z-10 flex flex-col items-center">
                     <div className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center mb-1 shadow-md group hover:border-accent transition-colors">
                        <Users className="w-4 h-4 text-foreground/70 group-hover:text-accent transition-colors" />
                     </div>
                     <span className="text-[10px] font-semibold bg-card px-2 py-0.5 rounded shadow-sm border border-border">Associations</span>
                  </div>
                  
                  <div className="absolute bottom-[5%] right-[5%] z-10 flex flex-col items-center">
                     <div className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center mb-1 shadow-md group hover:border-accent transition-colors">
                        <Handshake className="w-4 h-4 text-foreground/70 group-hover:text-accent transition-colors" />
                     </div>
                     <span className="text-[10px] font-semibold bg-card px-2 py-0.5 rounded shadow-sm border border-border">Advisors</span>
                  </div>
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
                requirements, analyzing capacity, certifications, technical fit, and
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
