import React from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  CheckCircle2,
  FileText,
  PackageSearch,
  ShoppingCart,
  Layers,
  ArrowRight,
  BarChart3,
  ClipboardList,
  Truck,
  Shield,
  Users,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const capabilities = [
  {
    icon: FileText,
    title: 'Intelligent Order Capture',
    description:
      'Extract structured information from incoming order documents and emails, converting unstructured inputs into validated, actionable records.',
  },
  {
    icon: Shield,
    title: 'Order Validation',
    description:
      'Support duplicate detection, revision tracking, and order-level validation to maintain accuracy before procurement begins.',
  },
  {
    icon: PackageSearch,
    title: 'Material Identification',
    description:
      'Match order requirements against structured catalogue information to identify the correct materials and specifications.',
  },
  {
    icon: BarChart3,
    title: 'Material Requirement Planning',
    description:
      'Connect order demand with available and incoming material information to support structured procurement decisions.',
  },
  {
    icon: Users,
    title: 'Procurement Coordination',
    description:
      'Support vendor selection, quotation comparison, purchasing requirements, and procurement planning through one structured workflow.',
  },
  {
    icon: ShoppingCart,
    title: 'Order Consolidation & PO Processing',
    description:
      'Consolidate purchasing requirements and support structured purchase order generation, reducing duplication and improving traceability.',
  },
];

const challenges = [
  'Orders and requirements can arrive through PDFs, emails, and fragmented records.',
  'Manual validation and material identification can create repetitive, error-prone work.',
  'Procurement teams need better visibility into requirements, vendors, stock, and incoming supply.',
  'Multiple purchasing requirements may need to be consolidated before procurement can proceed.',
];

const businessValue = [
  'Reduced repetitive data entry and manual handling',
  'Improved order and material visibility across the workflow',
  'Better coordination between procurement and planning teams',
  'Improved traceability from demand through to purchase order',
  'More structured and auditable purchasing workflows',
];

const ppcFlow = [
  { label: 'Customer Demand', icon: ClipboardList },
  { label: 'Order & Material Validation', icon: Shield },
  { label: 'Material Requirement Planning', icon: BarChart3 },
  { label: 'Procurement Coordination', icon: Users },
  { label: 'Production Planning Input', icon: Layers },
];

export default function OrderProcurementPage() {
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
            Order &amp;<br />
            <span className="text-accent">Procurement</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10 font-medium leading-relaxed text-center">
            Connecting order requirements, material planning, and procurement through one structured workflow.
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-foreground/50 w-8 h-8" />
        </div>
      </section>

      {/* Operational Challenge */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <SectionHeader
                eyebrow="The Challenge"
                heading="Where Procurement Workflows Break Down"
                subheading="In manufacturing environments, order intake and procurement often rely on fragmented communication, manual processes, and disconnected data."
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
            <div className="w-full lg:w-1/2 h-full min-h-[360px] p-8 rounded-2xl border border-border bg-card shadow-xl flex flex-col items-center justify-center gap-6">
              <div className="flex justify-between items-center w-full max-w-sm">
                {[
                  { icon: FileText, label: 'Capture' },
                  { icon: Shield, label: 'Validate' },
                  { icon: PackageSearch, label: 'Identify' },
                  { icon: ShoppingCart, label: 'Procure' },
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-background border-2 border-accent/50 rounded-full flex items-center justify-center shadow-lg transition-all hover:border-accent hover:scale-110">
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wide text-foreground">{step.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-foreground/50 text-center max-w-xs">
                A structured workflow from order intake through to purchase order — developed by Balbird Industries.
              </p>
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
              From Incoming Order to<br />
              <span className="text-accent">Procurement-Ready Information</span>
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Balbird&apos;s developed digital workflow converts incoming order information into structured, validated,
              procurement-ready records. By connecting order capture, material identification, and purchasing coordination
              into one traceable workflow, teams can move from demand to procurement with greater speed, accuracy, and
              visibility — without duplicating work or losing information across tools.
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
            heading="Connecting Demand to Manufacturing Readiness"
            subheading="This solution supports the demand-to-material and procurement side of the Production Planning and Control lifecycle."
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
                  <ArrowRight className="text-accent/40 w-5 h-5 shrink-0 rotate-0 md:rotate-0 hidden md:block mx-2" />
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-foreground/50 max-w-xl mx-auto">
            This solution addresses the demand, validation, and procurement coordination phases. Production scheduling,
            finite-capacity planning, and shop-floor control are separate capabilities not claimed here.
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
                By structuring the order-to-procurement workflow, organisations can reduce manual effort,
                improve visibility, and bring greater accountability to purchasing operations.
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
                { icon: FileText, label: 'Order Capture', value: 'Structured' },
                { icon: Shield, label: 'Validation', value: 'Rule-Based' },
                { icon: PackageSearch, label: 'Material Matching', value: 'Catalogue-Linked' },
                { icon: Truck, label: 'Procurement', value: 'Coordinated' },
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
            Connect your order-to-procurement workflow.
          </h2>
          <p className="text-xl mb-10 font-medium max-w-2xl mx-auto text-foreground/80">
            Talk to Balbird Industries about how this solution can be applied to your manufacturing and procurement operations.
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
