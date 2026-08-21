"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Factory, Package, TrendingUp, AlertTriangle, CheckCircle, Clock, Plus, Filter } from "lucide-react";

export default function ProductionPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Production Management</h1>
          <p className="text-sm text-foreground/70">
            Monitor and manage your manufacturing operations and capacity.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
          <Button className="shrink-0">
            <Plus className="w-4 h-4 mr-2" /> New Production Run
          </Button>
        </div>
      </div>

      {/* Production Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Factory className="w-5 h-5 text-accent" />
            <span className="text-xs text-green-600 font-medium">+12%</span>
          </div>
          <div className="text-2xl font-bold">8</div>
          <div className="text-xs text-foreground/70">Active Production Lines</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Package className="w-5 h-5 text-blue-600" />
            <span className="text-xs text-green-600 font-medium">+8%</span>
          </div>
          <div className="text-2xl font-bold">2,450</div>
          <div className="text-xs text-foreground/70">Units Produced Today</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-xs text-green-600 font-medium">98.5%</span>
          </div>
          <div className="text-2xl font-bold">94.2%</div>
          <div className="text-xs text-foreground/70">Overall Efficiency</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <span className="text-xs text-orange-600 font-medium">Attention</span>
          </div>
          <div className="text-2xl font-bold">3</div>
          <div className="text-xs text-foreground/70">Quality Alerts</div>
        </Card>
      </div>

      {/* Active Production Runs */}
      <Card className="p-6 mb-6">
        <CardTitle>Active Production Runs</CardTitle>
        <CardDescription>Current manufacturing operations and their status</CardDescription>
        
        <div className="mt-6 space-y-4">
          {[
            {
              id: "PR-2024-001",
              product: "EV Motor Housing Assembly",
              client: "Tata Motors Ltd",
              progress: 78,
              status: "On Track",
              priority: "High",
              dueDate: "Aug 15, 2026",
              quantity: "5,000 units"
            },
            {
              id: "PR-2024-002", 
              product: "Chassis Frame Components",
              client: "Mahindra & Mahindra",
              progress: 45,
              status: "At Risk",
              priority: "Critical",
              dueDate: "Aug 20, 2026",
              quantity: "3,200 units"
            },
            {
              id: "PR-2024-003",
              product: "Precision Gearbox Parts",
              client: "Bajaj Auto Ltd",
              progress: 92,
              status: "Nearing Completion",
              priority: "Medium",
              dueDate: "Aug 10, 2026",
              quantity: "8,500 units"
            }
          ].map((run) => (
            <div key={run.id} className="p-4 rounded-xl border border-border hover:bg-background/5/5 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm">{run.id}</span>
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                      run.priority === "Critical" ? "bg-red-100 text-red-700" :
                      run.priority === "High" ? "bg-orange-100 text-orange-700" :
                      "bg-blue-100 text-blue-700"
                    }`}>
                      {run.priority}
                    </span>
                  </div>
                  <h4 className="font-bold text-base">{run.product}</h4>
                  <p className="text-sm text-foreground/70">Client: {run.client}</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="text-right">
                    <div className="text-foreground/70">Target</div>
                    <div className="font-medium">{run.quantity}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-foreground/70">Due Date</div>
                    <div className="font-medium">{run.dueDate}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      run.status === "On Track" ? "bg-green-100 text-green-700" :
                      run.status === "At Risk" ? "bg-red-100 text-red-700" :
                      "bg-blue-100 text-blue-700"
                    }`}>
                      {run.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-foreground/70">Progress</span>
                  <span className="font-medium">{run.progress}%</span>
                </div>
                <div className="w-full bg-background/5/10 rounded-full h-2 overflow-hidden border border-border/50">
                  <div 
                    className={`h-full rounded-full transition-all ${
                      run.status === "At Risk" ? "bg-red-500" : "bg-accent"
                    }`} 
                    style={{ width: `${run.progress}%` }} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Capacity Utilization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <CardTitle>Capacity Utilization</CardTitle>
          <CardDescription>Current capacity across production lines</CardDescription>
          
          <div className="mt-6 space-y-4">
            {[
              { line: "CNC Machining Line A", utilization: 85, status: "Optimal" },
              { line: "CNC Machining Line B", utilization: 92, status: "High" },
              { line: "Assembly Line 1", utilization: 78, status: "Optimal" },
              { line: "Quality Control Station", utilization: 65, status: "Available" },
              { line: "Packaging & Shipping", utilization: 45, status: "Available" }
            ].map((item) => (
              <div key={item.line} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{item.line}</span>
                    <span className="text-sm font-bold">{item.utilization}%</span>
                  </div>
                  <div className="w-full bg-background/5/10 rounded-full h-2 overflow-hidden border border-border/50">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        item.utilization > 90 ? "bg-red-500" :
                        item.utilization > 75 ? "bg-accent" :
                        "bg-green-500"
                      }`} 
                      style={{ width: `${item.utilization}%` }} 
                    />
                  </div>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  item.status === "Available" ? "bg-green-100 text-green-700" :
                  item.status === "Optimal" ? "bg-blue-100 text-blue-700" :
                  "bg-orange-100 text-orange-700"
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle>Upcoming Schedule</CardTitle>
          <CardDescription>Planned production runs and maintenance</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              { title: "Line B Maintenance", date: "Aug 12, 2026", type: "Maintenance", icon: AlertTriangle },
              { title: "New Project Setup: Gearbox Components", date: "Aug 18, 2026", type: "Setup", icon: Factory },
              { title: "Quality Audit Preparation", date: "Aug 22, 2026", type: "Quality", icon: CheckCircle },
              { title: "Equipment Calibration", date: "Aug 25, 2026", type: "Maintenance", icon: Clock },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3 p-3 rounded-lg bg-background/5/5 border border-border">
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                  item.type === "Maintenance" ? "bg-orange-100" :
                  item.type === "Setup" ? "bg-blue-100" :
                  item.type === "Quality" ? "bg-green-100" :
                  "bg-gray-100"
                }`}>
                  <item.icon className={`w-4 h-4 ${
                    item.type === "Maintenance" ? "text-orange-600" :
                    item.type === "Setup" ? "text-blue-600" :
                    item.type === "Quality" ? "text-green-600" :
                    "text-gray-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{item.title}</div>
                  <div className="text-xs text-foreground/70">{item.date}</div>
                </div>
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${
                  item.type === "Maintenance" ? "bg-orange-100 text-orange-700" :
                  item.type === "Setup" ? "bg-blue-100 text-blue-700" :
                  item.type === "Quality" ? "bg-green-100 text-green-700" :
                  "bg-gray-100 text-gray-700"
                }`}>
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}