import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import {
  Settings, Cog, Wrench, Hammer, Flame, Zap, Scissors, Printer, Router,
  CheckCircle, ChevronDown,
} from "lucide-react";

const capabilities = [
  {
    title: "Engineering / Design Capabilities",
    icon: Settings,
    features: [
      "AutoCAD, CATIA, SolidWorks",
      "Process planning & manufacturability analysis (DFM)",
      "Reverse engineering & design interpretation",
      "Engineering calculations & tolerance validation",
      "Production documentation & execution support",
      "Seamless integration between design and manufacturing",
    ],
  },
  {
    title: "Precision Machining",
    icon: Cog,
    features: [
      "CNC Turning, VMC (3, 4 & 5 Axis), VTL, Boring",
      "Materials: Carbon Steel, Alloy Steel, Stainless Steel, Aluminum",
      "High precision machining with tight tolerances",
      "Component range up to ~500 mm dia & 500–700 mm length",
      "Suitable for critical and performance-driven components",
      "Consistent output across low to medium batch production",
    ],
  },
  {
    title: "CNC Machining",
    icon: Cog,
    features: [
      "Multi-axis machining capability across distributed network",
      "Materials: MS, Aluminum, Stainless Steel, Alloy Steel",
      "Batch production range: 1 to 1000 units",
      "High repeatability and dimensional consistency",
      "Flexible capacity allocation for parallel production",
      "Optimized for precision, speed, and scalability",
    ],
  },
  {
    title: "Drop Forging",
    icon: Hammer,
    features: [
      "Closed-die forging for high-strength components",
      "Materials: Carbon Steel, Alloy Steel, Stainless Steel",
      "Component range: ~0.2 kg to 5 kg",
      "Superior grain structure and mechanical properties",
      "Suitable for automotive and load-bearing applications",
      "Designed for medium to high-volume production",
    ],
  },
  {
    title: "Welding & Fabrication",
    icon: Wrench,
    features: [
      "MIG, TIG, ARC & Laser welding capabilities",
      "Materials: MS, Stainless Steel, Aluminum",
      "Structural fabrication and multi-stage assemblies",
      "Certified welding processes and skilled execution",
      "Suitable for both precision and heavy fabrication",
      "Integrated with cutting, bending, and finishing",
    ],
  },
  {
    title: "Hydraulic Press Operations",
    icon: Zap,
    features: [
      "Press capacity up to ~300 Tons",
      "Suitable for forming, deep drawing, and shaping",
      "Materials: Carbon Steel, Aluminum, Alloy Steel, SS",
      "Controlled force application for precision forming",
      "Consistent performance for repeat production",
      "Ideal for medium to high-volume operations",
    ],
  },
  {
    title: "Stamping Shop",
    icon: Hammer,
    features: [
      "Mechanical presses up to ~250 Tons",
      "Pneumatic presses up to ~400 Tons",
      "Progressive die stamping capability",
      "De-coilers and continuous production setup",
      "Suitable for high-volume sheet metal production",
      "Wide range of shapes: rounds, splines, tangs, complex profiles",
    ],
  },
  {
    title: "Laser Cutting",
    icon: Scissors,
    features: [
      "High-precision fiber laser cutting",
      "Bed size up to ~6000 mm",
      "Thickness up to ~20 mm (MS, SS, Aluminum)",
      "Complex profile cutting with high repeatability",
      "Ideal for sheet metal and structural parts",
      "Clean edges with minimal post-processing",
    ],
  },
  {
    title: "CNC Bending",
    icon: Settings,
    features: [
      "CNC bending up to ~3000 mm length",
      "Thickness up to ~10 mm",
      "High accuracy angle control",
      "Suitable for enclosures, frames, brackets",
      "Consistent forming across batch production",
      "Integrated with cutting and fabrication",
    ],
  },
  {
    title: "Laser Welding",
    icon: Flame,
    features: [
      "High precision, low distortion welding",
      "Suitable for thin and complex components",
      "Clean and controlled weld joints",
      "Ideal for precision assemblies",
      "Enhanced surface finish and strength",
    ],
  },
  {
    title: "UV Printing",
    icon: Printer,
    features: [
      "Direct surface printing on multiple materials",
      "High-resolution marking and branding",
      "Suitable for finished components",
      "Durable and scratch-resistant output",
      "Supports batch customization",
    ],
  },
  {
    title: "CNC Routing",
    icon: Router,
    features: [
      "High-speed routing for panels and non-metal materials",
      "Suitable for plastics, composites, and sheets",
      "Precision contour cutting and shaping",
      "Ideal for prototypes and batch production",
      "Smooth surface finish and accuracy",
    ],
  },
] as const;

export default function ExecutionReadyFacilitiesPage() {
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
            Network Capabilities
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1] max-w-3xl text-center mx-auto">
            Execution-Ready<br />
            <span className="text-accent">Manufacturing Facilities</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 font-medium leading-relaxed text-center">
            Explore the manufacturing infrastructure across our verified network, from precision machining to advanced fabrication, scaled for mobility component production.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-foreground/50 w-8 h-8" />
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-3 mb-12">
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Manufacturing Processes</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Network Capabilities</h2>
            <p className="max-w-3xl text-foreground/80">
              Our distributed network spans comprehensive manufacturing processes. Each capability is verified, standardized, and scaled for flexible capacity allocation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((cap) => (
              <Card key={cap.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <cap.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{cap.title}</CardTitle>
                      <ul className="mt-3 space-y-1.5">
                        {cap.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="py-24 md:py-32 bg-card border-y border-border/30">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-1/2">
              <span className="text-accent font-bold tracking-widest uppercase text-xs">Capacity</span>
              <h2 className="text-3xl font-extrabold tracking-tight mt-2 mb-6">Production Capacity</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Precision machining & advanced processes</p>
                    <p className="text-sm text-foreground/70">1 – 1,000 units per batch</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Forming, stamping & casting</p>
                    <p className="text-sm text-foreground/70">1,000 – 100,000 units per batch</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-foreground/80 leading-relaxed">
                Capacity is dynamically aligned across multiple facilities and manufacturers, enabling scalable, flexible, and reliable execution for mobility component projects.
              </p>
            </div>
            <div className="w-full lg:w-1/2 bg-muted text-foreground rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-4">Materials Processed</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Carbon Steel', 'Alloy Steel', 'Stainless Steel', 'Aluminum',
                  'MS (Mild Steel)', 'Composites', 'Plastics', 'Specialty Alloys',
                ].map((m, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-background/5 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-muted text-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Connect With Our Network
          </h2>
          <p className="text-xl mb-10 font-medium max-w-2xl mx-auto text-foreground/80">
            Access execution-ready manufacturing capabilities tailored to your production needs.
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
