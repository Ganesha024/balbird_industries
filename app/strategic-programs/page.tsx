import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import {
  ChevronDown, TrendingUp, Shield, GraduationCap,
  Building2, Globe, BarChart3, Handshake,
} from "lucide-react";

const programs = [
  {
    icon: TrendingUp,
    title: "Capacity Enhancement",
    description: "Programs focused on expanding manufacturing capacity through infrastructure development and technology upgrades.",
    objectives: ["Infrastructure expansion", "Technology modernization", "Process optimization", "Scalability planning"],
  },
  {
    icon: Shield,
    title: "Capability Compliance Strengthening",
    description: "Initiatives to enhance technical capabilities and ensure compliance with international standards.",
    objectives: ["Standards alignment", "Certification programs", "Quality systems", "Regulatory compliance"],
  },
  {
    icon: GraduationCap,
    title: "Workforce Integration",
    description: "Programs to develop skilled workforce and integrate educational institutions with industry needs.",
    objectives: ["Skills development", "Industry-academia partnerships", "Training programs", "Career pathways"],
  },
  {
    icon: Building2,
    title: "OEM Alignment",
    description: "Strategic programs to align manufacturing capabilities with OEM requirements and specifications.",
    objectives: ["Requirements mapping", "Manufacturer development", "Quality partnerships", "Technology transfer"],
  },
  {
    icon: Globe,
    title: "Cluster Development",
    description: "Regional manufacturing cluster initiatives to create competitive ecosystems and shared resources.",
    objectives: ["Regional collaboration", "Shared infrastructure", "Knowledge sharing", "Market access"],
  },
  {
    icon: BarChart3,
    title: "Strategic Expansion Capital Alignment",
    description: "Programs to align capital investments with strategic manufacturing expansion goals.",
    objectives: ["Investment facilitation", "Project financing", "Risk mitigation", "Return optimization"],
  },
  {
    icon: Handshake,
    title: "Cross Country Bilateral Programs",
    description: "International bilateral programs for cross-border manufacturing collaboration and capacity sharing.",
    objectives: ["International partnerships", "Trade facilitation", "Technology exchange", "Joint ventures"],
  },
] as const;

export default function StrategicProgramsPage() {
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
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-6 px-5 py-1.5 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm">
            Programs
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1] max-w-3xl">
            Strategic<br />
            <span className="text-accent">Programs</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-8 font-medium leading-relaxed">
            Comprehensive programs designed to strengthen capacity, compliance maturity, workforce integration, and cross-border alignment.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-foreground/50 w-8 h-8" />
        </div>
      </section>

      {/* Program Initiatives */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-3 mb-12">
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Initiatives</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Program Initiatives</h2>
            <p className="max-w-3xl text-foreground/80">
              Detailed programs addressing key areas of mobility manufacturing development and collaboration.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <program.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle>{program.title}</CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                      <div className="mt-4 space-y-1">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-foreground/50 mb-2">Key Objectives</h5>
                        {program.objectives.map((obj) => (
                          <div key={obj} className="flex items-center gap-2 text-sm text-foreground/70">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                            {obj}
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
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Participate in Programs</h2>
          <p className="text-xl mb-10 font-medium max-w-2xl mx-auto text-foreground/80">
            Join strategic initiatives that drive mobility manufacturing excellence.
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
