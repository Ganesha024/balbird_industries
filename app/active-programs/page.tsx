import React from 'react';
import Link from 'next/link';
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { 
  ArrowRight, 
  Activity, 
  Clock, 
  CheckCircle2, 
  PlayCircle,
  BarChart3,
  Globe,
  Settings,
  MessageCircle
} from 'lucide-react';

export default function ActiveProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-active-programs.png')" }}
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
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-6 px-5 py-1.5 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm flex items-center justify-center gap-2 w-max mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Live Execution Status
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1]">
            Active <span className="text-accent">Programs</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
            A real-time overview of the strategic manufacturing operations, capability matching pipelines, and cross-border integrations we are executing right now.
          </p>
        </div>
      </section>

      <div className="flex flex-col gap-12 py-12 md:py-20 bg-card">
        
        {/* Active Tasks Overview */}
        <section className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Current Active Tasks</h2>
            <p className="text-lg text-foreground/80 max-w-3xl">
              Balbird is currently driving execution across multiple strategic mobility corridors. Here is a transparent look at the core initiatives active this quarter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Program 1 */}
            <Card className="p-8 border-t-4 border-t-accent hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 bg-green-100 text-green-700 rounded-full uppercase tracking-wider">
                  <PlayCircle className="w-3.5 h-3.5" /> In Progress
                </span>
              </div>
              <CardTitle className="text-2xl mb-3">Cross-Border OEM Capability Matching</CardTitle>
              <CardDescription className="text-base text-foreground/80 mb-6 leading-relaxed">
                We are actively matching Tier-1 and Tier-2 automotive component manufacturers in emerging hubs with direct OEM procurement pipelines in Europe. This involves auditing production capacities and aligning ISO compliance standards.
              </CardDescription>
              <div className="space-y-3 pt-6 border-t border-border">
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/50 mb-2">Active Milestones</h4>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <p className="text-sm">Identify 50+ specialized machining facilities</p>
                </div>
                <div className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-accent shrink-0" />
                  <p className="text-sm font-medium">Conducting virtual compliance audits (Ongoing)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                  <p className="text-sm text-foreground/60">Finalizing OEM RFQ integration (Next 30 Days)</p>
                </div>
              </div>
            </Card>

            {/* Program 2 */}
            <Card className="p-8 border-t-4 border-t-accent hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-accent" />
                </div>
                <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 bg-green-100 text-green-700 rounded-full uppercase tracking-wider">
                  <PlayCircle className="w-3.5 h-3.5" /> In Progress
                </span>
              </div>
              <CardTitle className="text-2xl mb-3">Mobility Components Traceability Rollout</CardTitle>
              <CardDescription className="text-base text-foreground/80 mb-6 leading-relaxed">
                Implementing a standardized, end-to-end traceability protocol across our existing consortium of EV component suppliers. We are deploying our structured execution software to track material provenance and production batches.
              </CardDescription>
              <div className="space-y-3 pt-6 border-t border-border">
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/50 mb-2">Active Milestones</h4>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <p className="text-sm">Define baseline traceability data requirements</p>
                </div>
                <div className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-accent shrink-0" />
                  <p className="text-sm font-medium">Software deployment across 12 node facilities (Ongoing)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                  <p className="text-sm text-foreground/60">System integration testing with buyers (Next 45 Days)</p>
                </div>
              </div>
            </Card>

            {/* Program 3 */}
            <Card className="p-8 border-t-4 border-t-accent hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 bg-green-100 text-green-700 rounded-full uppercase tracking-wider">
                  <PlayCircle className="w-3.5 h-3.5" /> In Progress
                </span>
              </div>
              <CardTitle className="text-2xl mb-3">Execution Cell Deployment (Phase 1)</CardTitle>
              <CardDescription className="text-base text-foreground/80 mb-6 leading-relaxed">
                Activating our student workforce model to assist manufacturers with operational tasks. We are currently integrating engineering and management students into live project environments to handle process documentation and vendor outreach.
              </CardDescription>
              <div className="space-y-3 pt-6 border-t border-border">
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/50 mb-2">Active Milestones</h4>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <p className="text-sm">Onboard first cohort of 20 Execution Cell members</p>
                </div>
                <div className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-accent shrink-0" />
                  <p className="text-sm font-medium">Assigning cells to active manufacturing nodes (Ongoing)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                  <p className="text-sm text-foreground/60">First cycle performance review (Next 60 Days)</p>
                </div>
              </div>
            </Card>

            {/* CTA Card */}
            <Card className="p-8 bg-muted text-foreground flex flex-col justify-center border-none">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Activity className="w-8 h-8 text-accent animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Want to participate in an active program?</h3>
                <p className="text-foreground/70 mb-8 max-w-sm mx-auto">
                  Whether you are a manufacturer, buyer, or strategic partner, there is a role for you in our execution ecosystem.
                </p>
                <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto">
                  <Link
                    href="/request-strategic-discussion"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-md hover:bg-accent/90 transition-all w-full"
                  >
                    Join a Program <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/919561127357"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-md hover:bg-[#20b858] transition-all w-full"
                  >
                    <MessageCircle className="w-5 h-5" /> Chat on WhatsApp for details
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
