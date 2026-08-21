import Image from 'next/image';
import CapabilityCard from '@/components/CapabilityCard';
import { ButtonLink } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

const detailedCapabilities = [
  {
    category: "PRECISION MACHINING ECOSYSTEM",
    items: [
      {
        title: "CNC Turning",
        image: "/images/cnc_machining.png",
        details: [
          "Batch Range: 1 → 1,000 units",
          "Capability: 5 mm → 500 mm diameter",
          "Length up to 700 mm",
          "2 CNC turning centres",
          "Applications: Precision industrial components, Medical support assemblies, Mechanical fittings, Stainless steel components, Rotational parts"
        ]
      },
      {
        title: "VMC Infrastructure",
        image: "/images/vmc_infrastructure.png",
        details: [
          "Machines: BFW BMV 50 TC24, BFW Chakra BMV 60+, BFW VMC with 4th axis",
          "Capability: Standard machining envelope: 1200 × 600 × 600 mm",
          "Extended capability: up to 9000 × 3500 × 1700 mm",
          "Applications: Precision plates, Structural systems, Industrial support components, Medical framework parts, Fixtures & tooling"
        ]
      }
    ]
  },
  {
    category: "FABRICATION & SHEET METAL ECOSYSTEM",
    items: [
      {
        title: "Laser Cutting",
        image: "/images/laser_cutting_real.png",
        details: [
          "1500 × 3000 mm in-house",
          "Larger systems through cluster support",
        ]
      },
      {
        title: "Plasma Cutting & CNC Bending",
        image: "/images/plasma_bending_real.png",
        details: [
          "Plasma Cutting: Up to 2000 × 6000 mm",
          "CNC Bending: Up to 6000 mm length",
        ]
      },
      {
        title: "Welding Infrastructure",
        image: "/images/welding_real.png",
        details: [
          "MIG / CO2 welding, TIG welding",
          "ARC welding, Projection welding",
          "Laser welding",
          "Applications: Stainless steel medical systems, Equipment enclosures, Functional support structures, Industrial healthcare systems, Cabinets & support assemblies"
        ]
      }
    ]
  },
  {
    category: "PLASTIC MOULDING SUPPORT",
    items: [
      {
        title: "Milacron Nova Servo - 150 Ton",
        image: "/images/plastic_moulding.png",
        details: [
          "Injection pressure: 1731 Bar",
          "Shot weight: 336 grams"
        ]
      },
      {
        title: "Toshiba TS Servo - 150 Ton",
        image: "/images/toshiba_servo.png",
        details: [
          "Injection pressure: 2022 Bar",
          "Shot weight: 402 grams",
        ]
      },
      {
        title: "Additional Ecosystem Support",
        image: "/images/ecosystem_support.png",
        details: [
          "100T → 850T injection moulding",
          "Vacuum casting",
          "RIM processing",
          "Applications: Engineering plastic components, Medical support housings, Hybrid assemblies"
        ]
      }
    ]
  }
];

export default function CapacityEcosystemPage() {
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
            Ecosystem
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1] max-w-3xl">
            Capacity<br />
            <span className="text-accent">Ecosystem</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-8 font-medium leading-relaxed">
            A structured network model connecting manufacturing units, OEM programs, workforce, associations, and strategic finance using standardized data.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-foreground/50 w-8 h-8" />
        </div>
      </section>


      {/* Detailed Capabilities (GIFs / Media Structure) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-3 mb-16 text-center">
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Infrastructure</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Capacities & Capabilities</h2>
            <p className="max-w-2xl mx-auto text-foreground/80">
              State-of-the-art machinery and verified ecosystem capacities designed to handle end-to-end mobility manufacturing requirements.
            </p>
          </div>

          <div className="space-y-20">
            {detailedCapabilities.map((category, idx) => (
              <div key={idx}>
                <div className="mb-8">
                  <div className="inline-block bg-accent text-white px-8 py-3 rounded-r-3xl font-extrabold text-xl tracking-tight shadow-md">
                    {category.category}
                  </div>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, itemIdx) => (
                    <CapabilityCard key={itemIdx} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-muted text-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Join the Ecosystem
          </h2>
          <p className="text-xl mb-10 font-medium max-w-2xl mx-auto text-foreground/80">
            Connect your manufacturing capabilities to OEM programs and strategic partners.
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
