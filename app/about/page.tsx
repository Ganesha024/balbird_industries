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
        <div className="w-full relative h-[300px] sm:h-[400px] md:h-[500px] mt-12 rounded-2xl overflow-hidden border border-border shadow-xl">
          <Image
            src="/images/about-infographic-ecosystem.png"
            alt="Manufacturing Execution Ecosystem"
            fill
            className="object-cover"
          />
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
        <div className="w-full relative h-[300px] sm:h-[400px] md:h-[500px] mt-12 rounded-2xl overflow-hidden border border-border shadow-xl">
          <Image
            src="/images/about-infographic-verticals.png"
            alt="Operational Verticals Structure"
            fill
            className="object-cover"
          />
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
        <div className="w-full relative h-[300px] sm:h-[400px] md:h-[500px] mt-12 rounded-2xl overflow-hidden border border-border shadow-xl">
          <Image
            src="/images/about-infographic-network.png"
            alt="Resources and Network Connections"
            fill
            className="object-cover"
          />
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
