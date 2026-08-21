import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import {
  Plane, Car, Train, Ship, Cog,
  ChevronDown, Shield, Clock, ScanLine, TrendingUp,
} from "lucide-react";

const sectors = [
  {
    title: "Aerospace",
    description: "Precision manufacturing for aircraft components with strict certification and traceability requirements.",
    focus: ["5 Axis Machining", "CMM Inspection", "Batch Traceability", "Certification Readiness"],
    icon: Plane,
  },
  {
    title: "Automotive & EV",
    description: "High-volume production for electric and traditional vehicles with cycle optimization and quality standards.",
    focus: ["High Volume Production", "Cycle Time Optimization", "Line Balancing", "PPAP Alignment"],
    icon: Car,
  },
  {
    title: "Railway",
    description: "Heavy-duty manufacturing for rail systems with safety documentation and long-term reliability.",
    focus: ["Heavy Machining", "Welding Certifications", "Safety Documentation", "Long Term Traceability"],
    icon: Train,
  },
  {
    title: "Marine",
    description: "Corrosion-resistant manufacturing for marine applications with specialized surface treatments.",
    focus: ["Corrosion Control", "Surface Treatment", "Marine Grade Compliance"],
    icon: Ship,
  },
  {
    title: "Heavy Mobility",
    description: "Large-scale manufacturing for heavy machinery and equipment with advanced materials processing.",
    focus: ["Forging", "Heat Treatment", "Large Structural Inspection"],
    icon: Cog,
  },
] as const;

export default function MobilitySectorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-muted">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-16 animate-fade-in">
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-6 text-center mx-auto">
            Sector Focus
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1] max-w-3xl text-center mx-auto">
            Mobility<br />
            <span className="text-accent">Sectors</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 font-medium leading-relaxed text-center">
            Structured capacity focus areas across mobility manufacturing sectors, from aerospace precision to heavy machinery production.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-foreground/50 w-8 h-8" />
        </div>
      </section>

      {/* Sector Characteristics */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-3 mb-12">
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Characteristics</span>
            <h2 className="text-3xl font-extrabold tracking-tight">What Mobility Manufacturing Demands</h2>
            <p className="max-w-3xl text-foreground/80">
              Programs are long-term. Compliance is strict. Traceability is non-negotiable. Only structured ecosystems survive this environment.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, title: "Long-Term Commitments", desc: "Programs span years, requiring stable partnerships and predictable capacity." },
              { icon: Shield, title: "Strict Compliance", desc: "Safety, environmental, and quality standards are non-negotiable across global markets." },
              { icon: ScanLine, title: "Complete Traceability", desc: "Every step must be documented and verifiable from raw materials to finished products." },
              { icon: TrendingUp, title: "High Volume Scaling", desc: "Consistent high-volume production with zero-defect quality standards." },
            ].map((item, idx) => (
              <Card key={idx} className="p-5 hover:shadow-lg transition-shadow">
                <item.icon className="w-7 h-7 text-accent mb-3" />
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Details */}
      <section className="py-24 md:py-32 bg-card border-y border-border/30">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-3 mb-12">
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Details</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Sector Details</h2>
            <p className="max-w-3xl text-foreground/80">
              Explore specific capabilities and focus areas across each mobility sector.
            </p>
          </div>
          <div className="space-y-6">
            {sectors.map((sector) => (
              <Card key={sector.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
                      <sector.icon className="h-7 w-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{sector.title}</CardTitle>
                      <CardDescription className="mb-4">{sector.description}</CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {sector.focus.map((item) => (
                          <span key={item} className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent-foreground rounded-full border border-accent/20">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-muted text-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Find Your Sector</h2>
          <p className="text-xl mb-10 font-medium max-w-2xl mx-auto text-foreground/80">
            Explore manufacturing capabilities across mobility sectors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink href="/capacity-ecosystem" variant="primary" className="px-10 py-5 text-lg">
              View Capacity Ecosystem
            </ButtonLink>
            <ButtonLink href="/join-network" variant="secondary" className="px-10 py-5 text-lg border-2 border-border text-foreground hover:border-foreground">
              Join Network
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
