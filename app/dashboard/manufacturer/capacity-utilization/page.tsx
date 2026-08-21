"use client";

import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Factory, TrendingUp, AlertTriangle, Clock, Settings, Calendar, Zap, Activity } from "lucide-react";

export default function ManufacturerCapacityUtilization() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Capacity Utilization</h1>
          <p className="text-sm text-foreground/70">
            Current status of your manufacturing capacity and machine occupancy.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            Schedule Maintenance
          </Button>
          <Button className="shrink-0">
            Optimize Capacity
          </Button>
        </div>
      </div>

      {/* Overall Capacity Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Factory className="h-5 w-5 text-accent" />
            </div>
            <div>
              <div className="text-2xl font-bold">85%</div>
              <div className="text-xs text-foreground/70">Overall Utilization</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
              <Activity className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-foreground/70">Active Machines</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">3</div>
              <div className="text-xs text-foreground/70">Available Machines</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <Settings className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">2</div>
              <div className="text-xs text-foreground/70">Under Maintenance</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Production Lines Details */}
      <Card className="p-6 mb-6">
        <CardTitle>Production Lines Status</CardTitle>
        <CardDescription>Real-time capacity utilization across all production lines</CardDescription>
        
        <div className="mt-6 space-y-4">
          {[
            { 
              line: "CNC Machining Line A", 
              utilization: 85, 
              status: "Optimal", 
              machines: 4, 
              active: 4, 
              capacity: "95%",
              efficiency: "92%"
            },
            { 
              line: "CNC Machining Line B", 
              utilization: 92, 
              status: "High", 
              machines: 4, 
              active: 4, 
              capacity: "88%",
              efficiency: "95%"
            },
            { 
              line: "Assembly Line 1", 
              utilization: 78, 
              status: "Optimal", 
              machines: 3, 
              active: 3, 
              capacity: "90%",
              efficiency: "88%"
            },
            { 
              line: "Assembly Line 2", 
              utilization: 45, 
              status: "Available", 
              machines: 3, 
              active: 2, 
              capacity: "95%",
              efficiency: "85%"
            },
            { 
              line: "Quality Control Station", 
              utilization: 65, 
              status: "Available", 
              machines: 2, 
              active: 2, 
              capacity: "85%",
              efficiency: "90%"
            },
            { 
              line: "Heat Treatment Facility", 
              utilization: 88, 
              status: "High", 
              machines: 2, 
              active: 2, 
              capacity: "80%",
              efficiency: "92%"
            },
          ].map((line) => (
            <div key={line.line} className="p-4 rounded-xl bg-background/5 border border-border">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-base">{line.line}</h4>
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                      line.status === "Available" ? "bg-green-100 text-green-700" :
                      line.status === "Optimal" ? "bg-blue-100 text-blue-700" :
                      "bg-orange-100 text-orange-700"
                    }`}>
                      {line.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-foreground/70">
                    <span>{line.active}/{line.machines} Machines Active</span>
                    <span>Efficiency: {line.efficiency}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold">{line.utilization}%</div>
                    <div className="text-xs text-foreground/70">Utilization</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">{line.capacity}</div>
                    <div className="text-xs text-foreground/70">Available Capacity</div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all ${
                    line.utilization > 90 ? "bg-orange-500" :
                    line.utilization > 75 ? "bg-accent" :
                    "bg-green-500"
                  }`} 
                  style={{ width: `${line.utilization}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Capacity Planning */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="p-6">
          <CardTitle>Upcoming Capacity Changes</CardTitle>
          <CardDescription>Scheduled maintenance and capacity adjustments</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              { 
                line: "CNC Machining Line A", 
                type: "Maintenance", 
                date: "Aug 15, 2026", 
                duration: "4 hours", 
                impact: "Temporary capacity reduction"
              },
              { 
                line: "Assembly Line 2", 
                type: "Upgrade", 
                date: "Aug 20, 2026", 
                duration: "2 days", 
                impact: "Capacity increase by 15%"
              },
              { 
                line: "Quality Control Station", 
                type: "Maintenance", 
                date: "Aug 25, 2026", 
                duration: "6 hours", 
                impact: "Minimal impact"
              },
            ].map((item) => (
              <div key={item.line} className="flex items-center gap-4 p-3 rounded-lg bg-background/5 border border-border">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{item.line}</div>
                  <div className="text-xs text-foreground/70">{item.type} • {item.date}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{item.duration}</div>
                  <div className="text-xs text-foreground/70">{item.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle>Capacity Recommendations</CardTitle>
          <CardDescription>AI-powered suggestions to optimize your capacity</CardDescription>
          
          <div className="mt-6 space-y-4">
            {[
              { 
                priority: "High",
                recommendation: "Shift workload from CNC Line B (92%) to Assembly Line 2 (45%)",
                benefit: "Improve overall efficiency by 8%",
                action: "Rebalance Production"
              },
              { 
                priority: "Medium",
                recommendation: "Schedule preventive maintenance for Heat Treatment Facility",
                benefit: "Prevent unplanned downtime, save 12 hours/month",
                action: "Schedule Maintenance"
              },
              { 
                priority: "Low",
                recommendation: "Consider adding third shift to Assembly Line 1",
                benefit: "Increase capacity by 33%",
                action: "Evaluate Shift Addition"
              },
            ].map((item) => (
              <div key={item.recommendation} className="p-4 rounded-lg bg-background/5 border border-border">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                        item.priority === "High" ? "bg-red-100 text-red-700" :
                        item.priority === "Medium" ? "bg-orange-100 text-orange-700" :
                        "bg-green-100 text-green-700"
                      }`}>
                        {item.priority} Priority
                      </span>
                    </div>
                    <p className="text-sm">{item.recommendation}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="text-xs text-foreground/70">
                    <span className="font-medium">Benefit: </span>{item.benefit}
                  </div>
                  <Button variant="outline" size="sm" className="h-7 text-xs">
                    {item.action}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Machine-Level Details */}
      <Card className="p-6">
        <CardTitle>Individual Machine Status</CardTitle>
        <CardDescription>Detailed status of each manufacturing machine</CardDescription>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { id: "CNC-001", name: "CNC Machine 1", line: "CNC Line A", status: "Running", utilization: 88, temp: "65°C", load: "92%" },
            { id: "CNC-002", name: "CNC Machine 2", line: "CNC Line A", status: "Running", utilization: 82, temp: "68°C", load: "88%" },
            { id: "CNC-003", name: "CNC Machine 3", line: "CNC Line A", status: "Running", utilization: 85, temp: "70°C", load: "90%" },
            { id: "CNC-004", name: "CNC Machine 4", line: "CNC Line A", status: "Running", utilization: 86, temp: "67°C", load: "91%" },
            { id: "CNC-005", name: "CNC Machine 5", line: "CNC Line B", status: "Running", utilization: 94, temp: "72°C", load: "96%" },
            { id: "CNC-006", name: "CNC Machine 6", line: "CNC Line B", status: "Running", utilization: 90, temp: "71°C", load: "94%" },
            { id: "ASM-001", name: "Assembly Station 1", line: "Assembly 1", status: "Running", utilization: 78, temp: "N/A", load: "80%" },
            { id: "ASM-002", name: "Assembly Station 2", line: "Assembly 1", status: "Running", utilization: 76, temp: "N/A", load: "78%" },
            { id: "ASM-003", name: "Assembly Station 3", line: "Assembly 1", status: "Idle", utilization: 0, temp: "N/A", load: "0%" },
            { id: "QC-001", name: "QC Station 1", line: "Quality Control", status: "Running", utilization: 65, temp: "N/A", load: "68%" },
            { id: "QC-002", name: "QC Station 2", line: "Quality Control", status: "Running", utilization: 65, temp: "N/A", load: "67%" },
            { id: "HT-001", name: "Heat Treatment Oven 1", line: "Heat Treatment", status: "Running", utilization: 88, temp: "450°C", load: "90%" },
          ].map((machine) => (
            <div key={machine.id} className="p-4 rounded-xl bg-background/5 border border-border">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-bold text-sm">{machine.name}</div>
                  <div className="text-xs text-foreground/70">{machine.line}</div>
                </div>
                <div className={`h-2 w-2 rounded-full ${
                  machine.status === "Running" ? "bg-green-500" : "bg-gray-400"
                }`} />
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-foreground/70">Status</span>
                  <span className={`font-medium ${machine.status === "Running" ? "text-green-600" : "text-gray-600"}`}>
                    {machine.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Utilization</span>
                  <span className="font-medium">{machine.utilization}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Load</span>
                  <span className="font-medium">{machine.load}</span>
                </div>
                {machine.temp !== "N/A" && (
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Temperature</span>
                    <span className="font-medium">{machine.temp}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}