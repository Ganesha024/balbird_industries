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

      {/* What We Provide (Services Overview) */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight">What We Provide</h2>
          <p className="max-w-3xl text-foreground/80">
            Contract Development Manufacturing Operations (CDMO) — structured execution across the mobility supply chain.
          </p>
        </div>
        <Card className="overflow-hidden">
          <div className="p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Factory, title: 'Manufacturing Operations', desc: 'Coordinated production workflows across verified manufacturers.' },
                { icon: Workflow, title: 'Execution Coordination', desc: 'Project-level coordination from scoping through delivery.' },
                { icon: Shield, title: 'Manufacturing Traceability', desc: 'End-to-end documentation and compliance at every node.' },
                { icon: Network, title: 'Consortium Coordination', desc: 'Multi-Network consortium alignment for large programs.' },
                { icon: Users, title: 'Execution Cell (HR)', desc: 'Student workforce support for HR and operational functions.' },
                { icon: BarChart3, title: 'Execution Cell (BD)', desc: 'Business development, outreach, and Network research.' },
              ].map((service, idx) => (
                <div key={idx} className="rounded-xl bg-foreground/[0.03] px-5 py-4">
                  <div className="flex items-center gap-3 mb-2">
                    <service.icon className="h-5 w-5 text-accent" />
                    <h4 className="font-bold text-sm">{service.title}</h4>
                  </div>
                  <p className="text-sm text-foreground/70">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
        <div className="w-full mt-12 p-8 md:p-16 rounded-2xl border border-border bg-card shadow-xl flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-accent/20 -translate-y-1/2 z-0" />
          <div className="block md:hidden absolute left-1/2 top-[15%] bottom-[15%] w-0.5 bg-accent/20 -translate-x-1/2 z-0" />
          
          <div className="flex flex-col items-center text-center w-40 z-10 bg-card">
            <div className="w-24 h-24 bg-muted border border-border rounded-full flex items-center justify-center mb-4 shadow-sm">
              <Building2 className="w-10 h-10 text-foreground/70" />
            </div>
            <h4 className="font-bold text-foreground text-lg mb-1">OEMs</h4>
            <p className="text-xs text-foreground/60 leading-tight">Requirement & Demand Origination</p>
          </div>
          
          <div className="flex flex-col items-center z-10 bg-card p-4 rounded-full">
            <div className="w-32 h-32 bg-background border-2 border-accent rounded-full flex flex-col items-center justify-center shadow-[0_0_30px_-5px_rgba(var(--accent-rgb),0.3)]">
              <ServerCog className="w-10 h-10 text-accent mb-2" />
              <h4 className="font-bold text-foreground text-sm">Balbird Hub</h4>
            </div>
          </div>

          <div className="flex flex-col items-center text-center w-40 z-10 bg-card">
            <div className="w-24 h-24 bg-muted border border-border rounded-2xl flex items-center justify-center mb-4 shadow-sm">
              <Factory className="w-10 h-10 text-foreground/70" />
            </div>
            <h4 className="font-bold text-foreground text-lg mb-1">Network</h4>
            <p className="text-xs text-foreground/60 leading-tight">Distributed Execution Nodes</p>
          </div>
        </div>
      </section>

      {/* Operational Verticals */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Operational Verticals</h2>
          <p className="max-w-3xl text-foreground/80">
            Four operational verticals structure everything we build and execute.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { icon: ClipboardList, title: 'Communication', desc: 'Network interaction systems, chatbot, and structured information flow.' },
            { icon: Target, title: 'Task Management', desc: 'Execution tracking, milestone monitoring, and accountability workflows.' },
            { icon: Network, title: 'Matchmaking', desc: 'AI-assisted matching of capabilities with requirements.' },
            { icon: Shield, title: 'Engineering', desc: 'Technical validation, quality assurance, and DFM analysis.' },
          ].map((vertical, idx) => (
            <Card key={idx} className="p-5 text-center">
              <vertical.icon className="h-8 w-8 text-accent mx-auto mb-3" />
              <CardTitle>{vertical.title}</CardTitle>
              <CardDescription>{vertical.desc}</CardDescription>
            </Card>
          ))}
        </div>
        <div className="w-full mt-12 p-8 rounded-2xl border border-border bg-card shadow-xl overflow-x-auto">
          <div className="flex items-center justify-between min-w-[700px] max-w-4xl mx-auto gap-4 py-4">
            {[
              { icon: ClipboardList, title: "1. Intake" },
              { icon: Network, title: "2. Match" },
              { icon: Target, title: "3. Execute" },
              { icon: Shield, title: "4. Deliver" }
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center w-32 relative group">
                  <div className="w-16 h-16 bg-background border border-accent/30 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:border-accent group-hover:shadow-accent/20 transition-all">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-bold text-sm text-foreground uppercase tracking-wider">{step.title}</h4>
                </div>
                {i < 3 && (
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-accent/40 to-accent/10 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 border-y-[6px] border-y-transparent border-l-[8px] border-l-accent/40" />
                  </div>
                )}
              </React.Fragment>
            ))}
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
      <section className="container mx-auto px-4 md:px-8 lg:px-16 space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Resources & Network</h2>
          <p className="max-w-3xl text-foreground/80">
            We leverage a strong network of advisors, associations, and industry connections.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
            <div key={idx} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" />
              <span className="text-sm font-medium text-foreground/80">{resource}</span>
            </div>
          ))}
        </div>
        <div className="w-full mt-12 py-20 px-4 rounded-2xl border border-border bg-card shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50" />
          
          <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center min-h-[300px]">
            {/* Center Node */}
            <div className="relative z-20 w-32 h-32 bg-background border-2 border-accent rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_-10px_rgba(var(--accent-rgb),0.4)]">
              <Globe className="w-10 h-10 text-accent mb-2" />
              <span className="text-xs font-black tracking-widest uppercase">Balbird</span>
            </div>

            {/* Orbiting Nodes */}
            {[
              { label: "Legal & Finance", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-4" },
              { label: "Universities", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-4" },
              { label: "Global Logistics", pos: "top-1/2 left-0 -translate-x-4 -translate-y-1/2" },
              { label: "Associations", pos: "top-1/2 right-0 translate-x-4 -translate-y-1/2" },
              { label: "Quality Auditors", pos: "top-[15%] left-[15%] -translate-x-1/2 -translate-y-1/2" },
              { label: "Advisors", pos: "bottom-[15%] right-[15%] translate-x-1/2 translate-y-1/2" },
            ].map((node, i) => (
              <React.Fragment key={i}>
                <div className={`absolute z-10 ${node.pos}`}>
                  <div className="px-5 py-2.5 bg-muted/90 backdrop-blur-md border border-border rounded-full text-xs font-bold text-foreground/80 shadow-lg whitespace-nowrap">
                    {node.label}
                  </div>
                </div>
              </React.Fragment>
            ))}
            
            {/* Simple decorative rings */}
            <div className="absolute inset-0 m-auto w-[250px] h-[250px] border border-accent/10 rounded-full z-0" />
            <div className="absolute inset-0 m-auto w-[450px] h-[450px] border border-border/50 rounded-full z-0 border-dashed" />
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
