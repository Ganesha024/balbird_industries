"use client";

import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Factory, Clock, CheckCircle, AlertTriangle, MoreVertical, Eye, Edit } from "lucide-react";

export default function ManufacturerActiveProjects() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Active Projects</h1>
          <p className="text-sm text-foreground/70">
            Current ongoing manufacturing projects and their status.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            Filter Projects
          </Button>
          <Button className="shrink-0">
            View All Projects
          </Button>
        </div>
      </div>

      {/* Active Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            id: "PRJ-2024-001",
            name: "EV Motor Housing Production",
            client: "Tata Motors",
            progress: 78,
            status: "On Track",
            deadline: "Aug 15, 2026",
            priority: "High",
            quantity: "5,000 units"
          },
          {
            id: "PRJ-2024-002",
            name: "Chassis Components Manufacturing",
            client: "Mahindra & Mahindra",
            progress: 45,
            status: "At Risk",
            deadline: "Aug 20, 2026",
            priority: "Medium",
            quantity: "3,200 units"
          },
          {
            id: "PRJ-2024-003",
            name: "Precision Gearbox Parts",
            client: "Bajaj Auto",
            progress: 92,
            status: "Nearing Completion",
            deadline: "Aug 10, 2026",
            priority: "High",
            quantity: "8,500 units"
          },
          {
            id: "PRJ-2024-004",
            name: "Battery Tray Assembly",
            client: "Ather Energy",
            progress: 30,
            status: "In Progress",
            deadline: "Aug 25, 2026",
            priority: "Medium",
            quantity: "2,000 units"
          },
          {
            id: "PRJ-2024-005",
            name: "Suspension Components",
            client: "TVS Motors",
            progress: 65,
            status: "On Track",
            deadline: "Aug 18, 2026",
            priority: "Low",
            quantity: "4,500 units"
          },
          {
            id: "PRJ-2024-006",
            name: "Brake System Parts",
            client: "Hero MotoCorp",
            progress: 15,
            status: "Just Started",
            deadline: "Sep 05, 2026",
            priority: "High",
            quantity: "6,000 units"
          }
        ].map((project) => (
          <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-accent">{project.id}</span>
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                    project.priority === "High" ? "bg-red-100 text-red-700" :
                    project.priority === "Medium" ? "bg-orange-100 text-orange-700" :
                    "bg-green-100 text-green-700"
                  }`}>
                    {project.priority} Priority
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-1">{project.name}</h3>
                <p className="text-sm text-foreground/70">{project.client}</p>
              </div>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-foreground/70">Quantity</span>
                <span className="font-medium">{project.quantity}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-foreground/70">Deadline</span>
                <span className="font-medium">{project.deadline}</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-foreground/70">Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all ${
                    project.status === "At Risk" ? "bg-red-500" :
                    project.status === "Nearing Completion" ? "bg-green-500" :
                    "bg-accent"
                  }`} 
                  style={{ width: `${project.progress}%` }} 
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {project.status === "On Track" && <CheckCircle className="h-4 w-4 text-green-600" />}
                {project.status === "At Risk" && <AlertTriangle className="h-4 w-4 text-red-600" />}
                {project.status === "In Progress" && <Clock className="h-4 w-4 text-blue-600" />}
                {project.status === "Nearing Completion" && <CheckCircle className="h-4 w-4 text-green-600" />}
                {project.status === "Just Started" && <Factory className="h-4 w-4 text-accent" />}
                <span className="text-sm font-medium">{project.status}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-8">
                  <Eye className="h-3 w-3 mr-1" /> View
                </Button>
                <Button variant="outline" size="sm" className="h-8">
                  <Edit className="h-3 w-3 mr-1" /> Update
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">4</div>
              <div className="text-xs text-foreground/70">On Track</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">1</div>
              <div className="text-xs text-foreground/70">At Risk</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">1</div>
              <div className="text-xs text-foreground/70">In Progress</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Factory className="h-5 w-5 text-accent" />
            </div>
            <div>
              <div className="text-2xl font-bold">6</div>
              <div className="text-xs text-foreground/70">Total Active</div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}