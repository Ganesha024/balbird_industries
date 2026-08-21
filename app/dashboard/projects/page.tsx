"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Briefcase, FolderPlus, ArrowRight, Factory, Building2, Calendar } from "lucide-react";

export default function ProjectsPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Manufacturing Projects</h1>
          <p className="text-sm text-foreground/70">
            Track and manage your ongoing manufacturing execution projects.
          </p>
        </div>
        <Button className="shrink-0">
          <FolderPlus className="w-4 h-4 mr-2" /> Create Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {[
          { 
            name: "EV Motor Housing Production", 
            client: "Tata Motors Ltd",
            desc: "CNC machining and assembly of electric motor housings",
            progress: 75, 
            status: "On Track",
            timeline: "Jul 15 - Aug 20, 2026"
          },
          { 
            name: "Chassis Frame Components", 
            client: "Mahindra & Mahindra",
            desc: "Heavy fabrication and welding of structural components",
            progress: 92, 
            status: "Nearing Completion",
            timeline: "Jul 20 - Aug 10, 2026"
          },
          { 
            name: "Precision Gearbox Parts", 
            client: "Bajaj Auto Ltd",
            desc: "High-precision machining of gearbox components",
            progress: 45, 
            status: "At Risk",
            timeline: "Aug 01 - Aug 25, 2026"
          },
        ].map((project) => (
          <Card key={project.name} className="p-5 flex flex-col hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${
                project.status === "On Track" ? "bg-green-100 text-green-700" :
                project.status === "At Risk" ? "bg-red-100 text-red-700" :
                "bg-blue-100 text-blue-700"
              }`}>
                {project.status}
              </span>
            </div>
            <h3 className="font-bold text-base text-foreground mb-1">{project.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-3 h-3 text-foreground/50" />
              <p className="text-xs text-foreground/70">{project.client}</p>
            </div>
            <p className="text-sm text-foreground/70 mb-4 flex-1">{project.desc}</p>
            
            <div className="mt-auto space-y-3">
              <div className="flex items-center gap-2 text-xs text-foreground/70">
                <Calendar className="w-3 h-3" />
                <span>{project.timeline}</span>
              </div>
              <div className="flex justify-between items-center text-xs mb-2 font-medium">
                <span>Progress</span>
                <span className="text-accent">{project.progress}%</span>
              </div>
              <div className="w-full bg-background/5/10 rounded-full h-2 mb-4 overflow-hidden border border-border/50">
                <div className={`h-full rounded-full transition-all ${
                  project.status === "At Risk" ? "bg-red-500" : "bg-accent"
                }`} style={{ width: `${project.progress}%` }} />
              </div>
              <Button size="sm" variant="outline" className="w-full">
                View Project Details <ArrowRight className="w-3 h-3 ml-1.5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border/50 pb-2">Portfolio Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-background/5/5 rounded-xl border border-border">
            <span className="text-xs text-foreground/70 uppercase tracking-wider font-semibold block mb-1">Active Projects</span>
            <span className="text-2xl font-bold text-foreground">8</span>
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-100">
            <span className="text-xs text-green-700 uppercase tracking-wider font-semibold block mb-1">Completed This Quarter</span>
            <span className="text-2xl font-bold text-green-700">3</span>
          </div>
          <div className="p-4 bg-background/5/5 rounded-xl border border-border">
            <span className="text-xs text-foreground/70 uppercase tracking-wider font-semibold block mb-1">Revenue Pipeline</span>
            <span className="text-2xl font-bold text-foreground">₹2.4Cr</span>
          </div>
          <div className="p-4 bg-background/5/5 rounded-xl border border-border">
            <span className="text-xs text-foreground/70 uppercase tracking-wider font-semibold block mb-1">Production Lines</span>
            <span className="text-2xl font-bold text-foreground">5</span>
          </div>
        </div>
      </Card>
    </>
  );
}
