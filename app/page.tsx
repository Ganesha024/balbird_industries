import React from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Globe,
  Handshake,
  ScanLine,
  Network,
  Users,
  Factory,
  Car,
  Plane,
  Train,
  Zap,
  Target,
  Shield,
  Workflow,
  ClipboardList,
  GraduationCap,
  Briefcase,
  Building2,
} from 'lucide-react';
import StatCounter from '@/components/ui/StatCounter';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION A, Hero */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-home.png')" }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-white/90" />
        
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 text-center animate-fade-in">
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-6 px-5 py-1.5 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm">
            Cross-Border Manufacturing Execution Partner
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1]">
            We Execute Manufacturing<br />
            <span className="text-accent">Projects Together</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
            Balbird helps manufacturers, clients, and strategic partners execute
            mobility component manufacturing operations, with full traceability,
            execution consistency, and consortium coordination.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request-strategic-discussion"
              className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-bold rounded hover:bg-accent/90 transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Start a Project →
            </Link>
            <Link
              href="/network"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-foreground font-bold rounded border-2 border-border hover:border-foreground transition-all text-lg hover:-translate-y-0.5"
            >
              Explore Our Ecosystem
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-foreground/50 w-8 h-8" />
        </div>
      </section>

      {/* SECTION B, Operational Snapshot */}
      <section className="bg-muted text-foreground border-y border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
            <StatCounter value={6} suffix="+" label="Network Types" />
            <StatCounter value={4} suffix="" label="Operational Verticals" />
            <StatCounter value={1} suffix="" label="Sector Focus: Mobility" />
            <StatCounter value={3} suffix="" label="Core CDMO Services" />
          </div>
        </div>
      </section>

      {/* SECTION C, Who We Are */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-2/5">
              <span className="inline-block text-accent font-bold tracking-widest uppercase text-xs mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                Not a Broker.<br />Not a Marketplace.<br />
                <span className="text-accent">An Execution Partner.</span>
              </h2>
              <div className="w-20 h-1.5 bg-accent mb-6 rounded-full" />
              <p className="text-lg text-foreground/80 leading-relaxed">
                Balbird is a cross-border manufacturing execution partner operating
                in the mobility components manufacturing sector. We work
                project-based, helping companies, manufacturers, manufacturers, and
                partners execute manufacturing operations together with structure,
                traceability, and consistency.
              </p>
            </div>
            <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Project-Based Execution',
                  desc: 'Every engagement is structured as a project with clear scope, Network, and deliverables, no open listings, no spot trades.',
                },
                {
                  title: 'Cross-Border Coordination',
                  desc: 'We align manufacturers, clients, and partners across borders for seamless mobility component production.',
                },
                {
                  title: 'Full Manufacturing Traceability',
                  desc: 'End-to-end documentation from capacity verification to final delivery, ensuring compliance at every stage.',
                },
                {
                  title: 'Consortium-Driven Model',
                  desc: 'We facilitate collaboration through structured consortiums, not intermediary transactions.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-start p-6 bg-background rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D, What We Do (Services) */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeader
            eyebrow="Our Services"
            heading="What We Do"
            subheading="Contract Development Manufacturing Operations (CDMO), structured execution across the mobility supply chain."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Factory,
                title: 'Manufacturing Operations',
                desc: 'We coordinate and execute production workflows across verified manufacturers, ensuring capacity alignment and output consistency.',
              },
              {
                icon: Workflow,
                title: 'Execution Consistency',
                desc: 'Project-level coordination across Network, from scoping through delivery, with structured task management and clear ownership.',
              },
              {
                icon: ScanLine,
                title: 'Manufacturing Traceability',
                desc: 'Full documentation trail from raw material to finished component, compliance, certifications, and quality records at every node.',
              },
              {
                icon: Network,
                title: 'Consortium Coordination',
                desc: 'We bring manufacturers, clients, associations, and partners into aligned consortiums for large-scale mobility programs.',
              },
              {
                icon: Users,
                title: 'Execution Cell Services',
                desc: 'Dedicated student workforce support for HR operations, business development, and manufacturing process documentation.',
              },
              {
                icon: Handshake,
                title: 'Matchmaking & Engineering',
                desc: 'AI-assisted capability matching to connect the right manufacturer with the right project requirements.',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-card rounded-xl border border-border hover:bg-background hover:shadow-lg hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <ArrowRight className="w-5 h-5 text-accent mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D.5, Manufacturer Onboarding */}
      <section className="py-24 md:py-32 bg-accent/5 text-foreground relative border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <span className="inline-block text-accent font-bold tracking-widest uppercase text-xs mb-4">
                For Manufacturers
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
                Stop Chasing Contracts.<br />
                <span className="text-accent">Start Executing Projects.</span>
              </h2>
              <div className="w-20 h-1.5 bg-accent mb-6 rounded-full" />
              <p className="text-lg text-foreground/80 leading-relaxed mb-8 font-medium">
                We are actively looking for high-quality manufacturers to join our capacity network. 
                Instead of competing in race-to-the-bottom bidding wars, our platform directly matches your 
                machine capabilities with verified OEM requirements.
              </p>
              <Link
                href="/join-network"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-all text-lg shadow-lg hover:-translate-y-1"
              >
                Onboard as a Manufacturer <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-card border border-border p-8 md:p-10 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-8">Why Join the Balbird Ecosystem?</h3>
                <div className="space-y-6">
                  {[
                    { title: "Direct Project Matching", desc: "No bidding. Our system matches OEM requirements directly to your available machine capacity and capabilities." },
                    { title: "Zero Administrative Burden", desc: "Our on-site Execution Cells handle the tedious process documentation and compliance logs for you." },
                    { title: "Guaranteed Consistency", desc: "Work on structured, project-based operations with clear scoping, realistic timelines, and reliable cashflow." },
                    { title: "Consortium Collaboration", desc: "Partner with other specialized manufacturers to execute massive mobility programs you couldn't handle alone." }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                        <p className="text-foreground/70 text-sm leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E, How It Works */}
      <section className="py-24 md:py-32 bg-card border-y border-border/30">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeader
            eyebrow="The Process"
            heading="How Projects Get Executed"
            subheading="Every project follows a structured execution lifecycle, no ad-hoc transactions."
          />
          <div className="relative mt-16">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-accent/50 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
              {[
                {
                  step: '01',
                  title: 'Project Scoping',
                  desc: 'Define manufacturing requirements, Network roles, and execution parameters.',
                },
                {
                  step: '02',
                  title: 'Capability Matching',
                  desc: 'Match project needs with verified manufacturer capacities and certifications.',
                },
                {
                  step: '03',
                  title: 'Execution Planning',
                  desc: 'Align timelines, coordination workflows, and quality checkpoints across partners.',
                },
                {
                  step: '04',
                  title: 'Manufacturing & Delivery',
                  desc: 'Execute production with full traceability, consistency monitoring, and final delivery.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg border-4 border-white">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-foreground/70 px-4 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F, Sector Focus: Mobility */}
      <section className="py-24 md:py-32 bg-muted text-foreground">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeader
            eyebrow="Sector Focus"
            heading="Mobility Components Manufacturing"
            subheading="We operate exclusively in the mobility manufacturing sector, depth over breadth."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
            {[
              { icon: Car, name: 'Automotive', desc: 'OEM & tier-level components' },
              { icon: Zap, name: 'Electric Vehicles', desc: 'EV drivetrain & battery systems' },
              { icon: Train, name: 'Rail & Metro', desc: 'Rolling stock components' },
              { icon: Plane, name: 'Aerospace Mobility', desc: 'Structural & precision parts' },
            ].map((sector, idx) => (
              <div
                key={idx}
                className="group p-8 border border-border rounded-xl hover:bg-background/5 transition-all cursor-pointer flex flex-col items-center text-center"
              >
                <sector.icon className="w-12 h-12 mb-4 text-accent group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-1">{sector.name}</h4>
                <p className="text-sm text-foreground/60">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION G, Network Ecosystem */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeader
            eyebrow="Who's Involved"
            heading="Our Network Ecosystem"
            subheading="Every participant has a defined role, structured access, and aligned outcomes."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Factory,
                role: 'Manufacturers',
                desc: 'Verified production facilities providing capacity, capabilities, and compliance across mobility sectors.',
              },
              {
                icon: Building2,
                role: 'Clients & OEMs',
                desc: 'Companies sourcing mobility components with specific technical requirements and volume needs.',
              },
              {
                icon: Handshake,
                role: 'Strategic Partners',
                desc: 'Legal, financial, and technical advisors supporting execution quality and compliance.',
              },
              {
                icon: Briefcase,
                role: 'Retail & Middlemen',
                desc: 'Distribution and channel partners enabling market access and delivery logistics.',
              },
              {
                icon: Globe,
                role: 'Associations & Members',
                desc: 'Industry bodies facilitating standards, cluster development, and collective capability building.',
              },
              {
                icon: GraduationCap,
                role: 'Execution Cell (Students)',
                desc: 'Student workforce contributing to HR operations, business development, and manufacturing support.',
              },
            ].map((Network, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow group"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Network.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-bold text-lg mb-2">{Network.role}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {Network.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/network"
              className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
            >
              Learn about each Network role <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION H, Operational Verticals */}
      <section className="py-20 bg-muted border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeader
            eyebrow="How We Operate"
            heading="Operational Verticals"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: ClipboardList,
                vertical: 'Communication',
                desc: 'Network interaction, chatbot systems, and structured information flow across all participants.',
              },
              {
                icon: Target,
                vertical: 'Task Management',
                desc: 'Execution tracking, milestone monitoring, and accountability workflows for every project phase.',
              },
              {
                icon: Network,
                vertical: 'Matchmaking',
                desc: 'AI-assisted matching of manufacturer capabilities with client requirements and project needs.',
              },
              {
                icon: Shield,
                vertical: 'Engineering',
                desc: 'Technical validation, DFM analysis, and quality assurance coordination across manufacturing nodes.',
              },
            ].map((v, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-background border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-bold text-lg mb-2">{v.vertical}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION I, What We Are Not */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-bold tracking-widest uppercase text-xs mb-4">
              Important Clarification
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              What We Are <span className="text-accent">Not</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                not: 'Not a Broker',
                detail: 'We don\'t take positions or trade margins. We provide structured execution workflows for direct engagement between Network.',
              },
              {
                not: 'Not a Marketplace',
                detail: 'We don\'t host open listings or facilitate spot trades. Every engagement is a defined, project-based execution.',
              },
              {
                not: 'Not a Trading Company',
                detail: 'We don\'t buy or resell. We coordinate manufacturing execution with full traceability and compliance.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-card border border-slate-200 text-center"
              >
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-400 font-bold text-lg">✕</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{item.not}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION J, CTA Banner */}
      <section className="py-24 md:py-32 bg-muted text-foreground relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[80px]" />

        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Have a Manufacturing Project?
          </h2>
          <p className="text-xl md:text-2xl mb-10 font-medium max-w-2xl mx-auto text-foreground/80">
            Let&apos;s discuss how Balbird can structure, coordinate, and execute
            it with the right partners.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request-strategic-discussion"
              className="inline-block px-10 py-5 bg-accent text-white font-bold rounded hover:bg-accent/90 transition-all text-xl shadow-xl hover:-translate-y-1"
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
