import React from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Factory,
  ShoppingCart,
  ListChecks,
  ArrowRight,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const services = [
  {
    href: '/capabilities',
    icon: Factory,
    eyebrow: 'CDMO',
    title: 'Contract Development & Manufacturing Operations',
    description:
      'End-to-end manufacturing execution services — from operations coordination to traceability — for cross-border mobility component projects.',
    cta: 'View CDMO Services',
  },
  {
    href: '/services/intelligent-order-procurement',
    icon: ShoppingCart,
    eyebrow: 'Digital Solutions',
    title: 'Intelligent Order & Procurement Automation',
    description:
      'Connecting order requirements, material planning, and procurement through one structured workflow — from customer demand to purchase order.',
    cta: 'Explore This Solution',
  },
  {
    href: '/services/intelligent-task-orchestration',
    icon: ListChecks,
    eyebrow: 'Digital Solutions',
    title: 'Intelligent Task Orchestration',
    description:
      'Turning operational decisions and communication into structured, accountable execution — with visibility into task ownership and progress.',
    cta: 'Explore This Solution',
  },
];

export default function ServicesIndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
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
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-6">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1]">
            Services &amp;<br />
            <span className="text-accent">Digital Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
            Balbird connects manufacturing capability with intelligent planning, procurement, coordination, and execution.
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-foreground/50 w-8 h-8" />
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeader
            eyebrow="Our Services"
            heading="Manufacturing Capability Meets Intelligent Operations"
            subheading="Three interconnected service areas — each a distinct capability, together forming a complete manufacturing execution and coordination capability."
          />
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex flex-col p-8 bg-card rounded-xl border border-border hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3">{service.eyebrow}</span>
                <h3 className="text-xl font-extrabold mb-4 leading-snug">{service.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed flex-1 mb-8">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:gap-3 transition-all"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-muted text-foreground">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Ready to discuss your requirements?
          </h2>
          <p className="text-xl mb-10 font-medium max-w-2xl mx-auto text-foreground/80">
            Talk to Balbird Industries about manufacturing execution, procurement automation, or operational coordination.
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
