import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import {
  Factory, Building2, Globe, GraduationCap, BarChart3, FileText,
  ChevronDown, Download,
} from "lucide-react";

const resources = [
  {
    icon: Factory,
    group: "Manufacturers",
    description: "Essential guides and templates for manufacturing Network to onboard, comply, and scale operations.",
    items: ["Onboarding Guide", "Capacity Template", "Compliance Checklist", "Expansion Planning Outline"],
  },
  {
    icon: Building2,
    group: "OEM / Tier",
    description: "Resources for OEMs and tier suppliers to submit requirements and evaluate manufacturing partners.",
    items: ["Requirement Submission Guide", "Supplier Evaluation Framework"],
  },
  {
    icon: Globe,
    group: "Associations",
    description: "Tools for industrial associations to map cluster capabilities and drive compliance improvements.",
    items: ["Cluster Capability Mapping Guide", "Compliance Improvement Framework"],
  },
  {
    icon: GraduationCap,
    group: "Students",
    description: "Educational resources for students and workforce development programs in manufacturing.",
    items: ["Manufacturing Exposure Guide", "Structured Training Log Template"],
  },
  {
    icon: BarChart3,
    group: "Financial / Strategic",
    description: "Operational and strategic resources for financial institutions and strategic investors.",
    items: ["Operational Review Checklist", "Acquisition Readiness Indicators"],
  },
  {
    icon: FileText,
    group: "Cross Sector",
    description: "Universal resources applicable across all sectors for compliance and traceability.",
    items: ["Mobility Compliance Overview", "Traceability Guide"],
  },
] as const;

export default function ResourcesPage() {
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
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-16 animate-fade-in">
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-6 px-5 py-1.5 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm">
            Resource Library
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1] max-w-3xl">
            Guides &<br />
            <span className="text-accent">Resources</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-8 font-medium leading-relaxed">
            Comprehensive guides and templates supporting onboarding, compliance structuring, traceability, and capacity alignment across all Network.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-foreground/50 w-8 h-8" />
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-3 mb-12">
            <span className="text-accent font-bold tracking-widest uppercase text-xs">By Network</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Resource Categories</h2>
            <p className="max-w-3xl text-foreground/80">
              Browse resources tailored to your Network type and operational needs.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {resources.map((r) => (
              <Card key={r.group} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <r.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle>{r.group}</CardTitle>
                      <CardDescription>{r.description}</CardDescription>
                      <div className="mt-4 space-y-2">
                        {r.items.map((item) => (
                          <div key={item} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:bg-muted transition-colors cursor-pointer">
                            <Download className="w-4 h-4 text-accent shrink-0" />
                            <span className="text-sm font-medium text-foreground/80">{item}</span>
                          </div>
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Access Resources</h2>
          <p className="text-xl mb-10 font-medium max-w-2xl mx-auto text-foreground/80">
            Download guides, templates, and tools to support your mobility manufacturing journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink href="/join-network" variant="primary" className="px-10 py-5 text-lg">
              Join Network
            </ButtonLink>
            <ButtonLink href="/request-strategic-discussion" variant="secondary" className="px-10 py-5 text-lg border-2 border-border text-foreground hover:border-foreground">
              Request Strategic Discussion
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
