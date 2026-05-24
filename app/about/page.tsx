import React from 'react';
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import {
  Factory,
  CheckCircle,
  Shield,
  Users,
  Target,
  ClipboardList,
  Network,
  Workflow,
  GraduationCap,
  Palette,
  BarChart3,
  Code,
  Globe,
  Building2,
  ServerCog,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-about.png')" }}
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

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 text-center animate-fade-in mt-16">
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-6 px-5 py-1.5 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm">
            About Balbird
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1]">
            Cross-Border Manufacturing<br />
            <span className="text-accent">Execution Partner</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
            Balbird is an execution partner operating in the mobility components manufacturing sector. We help Network execute operations together — with structure, traceability, and consistency.
          </p>
        </div>
      </section>

      <div className="flex flex-col gap-12 py-12 md:py-20">
        {/* What We Are / What We Are Not */}
        <section className="container mx-auto px-4 md:px-8 lg:px-16 space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Our Identity</h2>
          <p className="max-w-3xl text-foreground/80">
            Understanding what Balbird is — and what it is not — is critical to how we work with every Network.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 border-l-4 border-l-accent">
            <CardTitle>What We Are</CardTitle>
            <div className="text-sm text-foreground/70">
              <ul className="mt-3 space-y-3">
                {[
                  'A cross-border manufacturing execution partner',
                  'Project-based — every engagement is a defined project',
                  'Focused exclusively on mobility components manufacturing',
                  'A facilitator of structured collaboration between Network',
                  'Commission-based on production work + fees from execution cell',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
          <Card className="p-6 border-l-4 border-l-red-300">
            <CardTitle>What We Are Not</CardTitle>
            <div className="text-sm text-foreground/70">
              <ul className="mt-3 space-y-3">
                {[
                  'Not a broker — we don\'t take positions or trade margins',
                  'Not a marketplace — no open listings or spot trades',
                  'Not a trading company — we don\'t buy or resell',
                  'Not a listing platform — we maintain qualified, validated nodes',
                  'Not ad-hoc — every engagement follows structured execution',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">✕</span>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          <div className="flex-1 w-full space-y-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-extrabold tracking-tight">Cross-Border Execution Ecosystem</h2>
              <p className="max-w-xl text-foreground/80">
                Contract Development Manufacturing Operations (CDMO) — structured execution across the mobility supply chain.
              </p>
            </div>
            <Card className="overflow-hidden">
              <div className="p-6">
                <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                  {[
                    { icon: Factory, title: 'Manufacturing Operations' },
                    { icon: Workflow, title: 'Execution Coordination' },
                    { icon: Shield, title: 'Manufacturing Traceability' },
                    { icon: Network, title: 'Consortium Coordination' },
                    { icon: Users, title: 'Execution Cell (HR)' },
                    { icon: BarChart3, title: 'Execution Cell (BD)' },
                  ].map((service, idx) => (
                    <div key={idx} className="rounded-xl bg-foreground/[0.03] px-4 py-3 flex items-center gap-3">
                      <service.icon className="h-5 w-5 text-accent shrink-0" />
                      <h4 className="font-bold text-sm">{service.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          
          <div className="flex-1 w-full">
            <div className="w-full h-full min-h-[400px] p-6 rounded-2xl border border-border bg-card shadow-xl flex flex-col items-center justify-center gap-4 relative overflow-hidden">
              <div className="absolute top-[15%] bottom-[15%] left-1/2 w-0.5 bg-accent/20 -translate-x-1/2 z-0" />
              
              <div className="flex flex-col items-center text-center w-full z-10 bg-card py-2">
                <div className="w-16 h-16 bg-muted border border-border rounded-full flex items-center justify-center mb-2 shadow-sm">
                  <Building2 className="w-6 h-6 text-foreground/70" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">OEMs</h4>
                <p className="text-[10px] text-foreground/60 leading-tight">Demand, Specs, Forecasting</p>
              </div>
              
              <div className="flex flex-col items-center z-10 bg-card p-2 rounded-full">
                <div className="w-20 h-20 bg-background border-2 border-accent rounded-full flex flex-col items-center justify-center shadow-[0_0_30px_-5px_rgba(var(--accent-rgb),0.3)]">
                  <ServerCog className="w-6 h-6 text-accent mb-1" />
                  <h4 className="font-semibold text-foreground text-xs">Balbird Hub</h4>
                  <p className="text-[9px] text-foreground/60 mt-0.5">Execution & Matchmaking</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center w-full z-10 bg-card py-2">
                <div className="w-16 h-16 bg-muted border border-border rounded-2xl flex items-center justify-center mb-2 shadow-sm">
                  <Factory className="w-6 h-6 text-foreground/70" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">Network</h4>
                <p className="text-[10px] text-foreground/60 leading-tight">Factories, Assembly, Logistics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Verticals */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row-reverse items-stretch gap-12">
          <div className="flex-1 w-full space-y-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-extrabold tracking-tight">Operational Verticals</h2>
              <p className="max-w-xl text-foreground/80">
                Four operational verticals structure everything we build and execute.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: ClipboardList, title: 'Communication' },
                { icon: Target, title: 'Task Management' },
                { icon: Network, title: 'Matchmaking' },
                { icon: Shield, title: 'Engineering' },
              ].map((vertical, idx) => (
                <Card key={idx} className="p-4 flex items-center gap-3">
                  <vertical.icon className="h-6 w-6 text-accent shrink-0" />
                  <CardTitle className="text-sm m-0 leading-tight">{vertical.title}</CardTitle>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="w-full h-full min-h-[400px] p-8 rounded-2xl border border-border bg-card shadow-xl flex flex-col justify-center">
              <div className="flex flex-col items-center gap-2 py-4">
                {[
                  { icon: ClipboardList, title: "1. Intake", sub: "Structured Requirements" },
                  { icon: Network, title: "2. Match", sub: "AI Capability Routing" },
                  { icon: Target, title: "3. Execute", sub: "Milestone Tracking" },
                  { icon: Shield, title: "4. Deliver", sub: "QA & Logistics" }
                ].map((step, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center text-center relative group w-full">
                      <div className="w-12 h-12 bg-background border border-accent/30 rounded-xl flex items-center justify-center mb-1 shadow-sm group-hover:border-accent group-hover:shadow-accent/20 transition-all z-10">
                        <step.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h4 className="font-semibold text-xs text-foreground">{step.title}</h4>
                      <p className="text-[10px] text-foreground/60">{step.sub}</p>
                    </div>
                    {i < 3 && (
                      <div className="w-0.5 h-4 bg-gradient-to-b from-accent/40 to-accent/10 relative z-0 mt-1 mb-1" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 space-y-12">
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-xs w-fit mx-auto px-3 py-1 bg-accent/10 rounded-full">
            Leadership
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight">Executive Team</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            A lean, highly focused leadership team structured entirely around execution — blending technical innovation with global manufacturing expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Balraj Waghmare",
              role: "Founder & CEO",
              image: "/images/portrait-ceo.png",
              desc: "Responsible for the overall execution system, ecosystem planning, and connecting operational verticals into a cohesive global strategy.",
            },
            {
              name: "David Chen",
              role: "Chief Technology Officer",
              image: "/images/portrait-cto.png",
              desc: "Drives workflow automation, AI matchmaking architecture, and full-stack integration across our digital execution tools.",
            },
            {
              name: "Sarah Jenkins",
              role: "Chief Marketing Officer",
              image: "/images/portrait-cmo.png",
              desc: "Leads brand identity, Network communications, and market positioning across global manufacturing corridors.",
            },
            {
              name: "Michael Thorne",
              role: "Chief Operating Officer",
              image: "/images/portrait-coo.png",
              desc: "Oversees business development, ecosystem outreach, and cross-border project management pipelines.",
            },
          ].map((member, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center">
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden rounded-2xl bg-muted shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-accent font-semibold text-sm mb-4 uppercase tracking-wide">{member.role}</p>
              <p className="text-sm text-foreground/70 leading-relaxed px-2">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources We Have */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          <div className="flex-1 w-full space-y-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-extrabold tracking-tight">Resources & Network</h2>
              <p className="max-w-xl text-foreground/80">
                We leverage a strong network of advisors, associations, and industry connections.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'Legal Advisor',
                'Financial Advisor',
                'Tech Advisor',
                'Supplier Associations',
                'Student Workforce',
                'Non-Tech Advisors',
                'Industrial HR Networks',
                'Sales Networks',
                'Quality Networks',
                'Manufacturer Networks',
                'Financial Stability',
                'LinkedIn Premium',
              ].map((resource, idx) => (
                <div key={idx} className="px-4 py-2 bg-muted rounded-full border border-border text-xs font-medium text-foreground/80 shadow-sm">
                  {resource}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="w-full h-full min-h-[400px] py-12 px-2 rounded-2xl border border-border bg-card shadow-xl relative overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50" />
              
              <div className="relative w-full max-w-sm mx-auto flex items-center justify-center min-h-[250px]">
                {/* Center Node */}
                <div className="relative z-20 w-20 h-20 bg-background border-2 border-accent rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_-10px_rgba(var(--accent-rgb),0.4)]">
                  <Globe className="w-6 h-6 text-accent mb-1" />
                  <span className="text-xs font-bold text-foreground">Balbird</span>
                </div>

                {/* Orbiting Nodes */}
                {[
                  { label: "Legal & Finance", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-2" },
                  { label: "Universities", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-2" },
                  { label: "Logistics", pos: "top-1/2 left-0 -translate-y-1/2" },
                  { label: "Associations", pos: "top-1/2 right-0 -translate-y-1/2" },
                  { label: "Auditors", pos: "top-[15%] left-[10%] -translate-x-1/2 -translate-y-1/2" },
                  { label: "Advisors", pos: "bottom-[15%] right-[10%] translate-x-1/2 translate-y-1/2" },
                ].map((node, i) => (
                  <React.Fragment key={i}>
                    <div className={`absolute z-10 ${node.pos}`}>
                      <div className="px-2 py-1.5 bg-muted/90 backdrop-blur-md border border-border rounded-full text-[10px] font-semibold text-foreground/80 shadow-lg whitespace-nowrap">
                        {node.label}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                
                {/* Simple decorative rings */}
                <div className="absolute inset-0 m-auto w-[150px] h-[150px] border border-accent/10 rounded-full z-0" />
                <div className="absolute inset-0 m-auto w-[260px] h-[260px] border border-border/50 rounded-full z-0 border-dashed" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Design Expectations */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight">What We Build Towards</h2>
          <p className="max-w-3xl text-foreground/80">
            Our standards for everything we build and deploy.
          </p>
        </div>
        <Card className="p-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Operationally seamless for Network',
              'Flexible and not rigid',
              'Space for continuous evolution',
              'Externally deployable/configurable',
              'Designed properly from ground level',
              'Precise and structured',
              'Testable with dummy data',
              'Managed through task management',
              'Quantifiable with proper justification',
              'Continuously evolvable',
              'Multi-Network capable',
              'AI and automation wherever possible',
            ].map((expectation, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{expectation}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="rounded-2xl border border-border bg-muted px-8 py-10 text-center">
          <h3 className="text-2xl font-extrabold tracking-tight">Ready to Work Together?</h3>
          <p className="mt-2 text-foreground/80">
            Join a structured ecosystem built for mobility manufacturing execution.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <ButtonLink href="/join-network" variant="primary" className="w-full sm:w-auto">
              Join the Network
            </ButtonLink>
            <ButtonLink href="/request-strategic-discussion" variant="secondary" className="w-full sm:w-auto">
              Request Strategic Discussion
            </ButtonLink>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
