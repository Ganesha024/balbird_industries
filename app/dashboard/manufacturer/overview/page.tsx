"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Activity, Factory, Shield, TrendingUp, Plus, ScanLine, FolderOpen, ShoppingCart, FileText } from "lucide-react";
import Link from "next/link";

export default function ManufacturerOverview() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Manufacturer Overview</h1>
          <p className="text-sm text-foreground/70">
            Manage your manufacturing operations, traceability, and capacity.
          </p>
        </div>
        <Button className="shrink-0">
          <Plus className="w-4 h-4 mr-2" /> Add Traceability Entry
        </Button>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <Link href="/dashboard/manufacturer/active-projects">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-accent/20">
            <FolderOpen className="w-6 h-6 text-accent mb-2" />
            <div className="font-bold text-sm">Active Projects</div>
            <div className="text-xs text-foreground/70">8 ongoing projects</div>
          </Card>
        </Link>
        <Link href="/dashboard/manufacturer/project-orders">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <ShoppingCart className="w-6 h-6 text-blue-600 mb-2" />
            <div className="font-bold text-sm">Project Orders</div>
            <div className="text-xs text-foreground/70">4 pending orders</div>
          </Card>
        </Link>
        <Link href="/dashboard/manufacturer/quality-score">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <TrendingUp className="w-6 h-6 text-green-600 mb-2" />
            <div className="font-bold text-sm">Quality Score</div>
            <div className="text-xs text-foreground/70">99.2% quality rating</div>
          </Card>
        </Link>
        <Link href="/dashboard/manufacturer/capacity-utilization">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <Activity className="w-6 h-6 text-orange-600 mb-2" />
            <div className="font-bold text-sm">Capacity Utilization</div>
            <div className="text-xs text-foreground/70">85% capacity used</div>
          </Card>
        </Link>
        <Link href="/dashboard/manufacturer/documents">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <FileText className="w-6 h-6 text-purple-600 mb-2" />
            <div className="font-bold text-sm">Documents</div>
            <div className="text-xs text-foreground/70">45 traceability files</div>
          </Card>
        </Link>
      </div>

      {/* Manufacturer-specific stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Factory className="w-5 h-5 text-accent" />
            <span className="text-xs text-green-600 font-medium">+8%</span>
          </div>
          <div className="text-2xl font-bold">8</div>
          <div className="text-xs text-foreground/70">Active Projects</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-blue-600" />
            <span className="text-xs text-green-600 font-medium">+3</span>
          </div>
          <div className="text-2xl font-bold">12</div>
          <div className="text-xs text-foreground/70">Project Orders</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-xs text-green-600 font-medium">+0.5%</span>
          </div>
          <div className="text-2xl font-bold">99.2%</div>
          <div className="text-xs text-foreground/70">Quality Score</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            <span className="text-xs text-green-600 font-medium">+8%</span>
          </div>
          <div className="text-2xl font-bold">85%</div>
          <div className="text-xs text-foreground/70">Capacity Utilization</div>
        </Card>
      </div>

      {/* Traceability Section */}
      <Card className="p-6 mb-6">
        <CardTitle>Manufacturing Traceability</CardTitle>
        <CardDescription>Add and update traceability entries for quality compliance</CardDescription>
        
        <div className="mt-6 space-y-4">
          {[
            {
              batch: "Batch #452",
              product: "EV Motor Housing",
              client: "Tata Motors",
              progress: 78,
              status: "In Progress",
              traceability: "98% Complete"
            },
            {
              batch: "Batch #453", 
              product: "Chassis Components",
              client: "Mahindra & Mahindra",
              progress: 45,
              status: "At Risk",
              traceability: "72% Complete"
            },
            {
              batch: "Batch #454",
              product: "Gearbox Parts",
              client: "Bajaj Auto",
              progress: 92,
              status: "Nearing Completion",
              traceability: "100% Complete"
            }
          ].map((entry) => (
            <div key={entry.batch} className="p-4 rounded-xl border border-border hover:bg-background/5/5 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm">{entry.batch}</span>
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                      entry.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                      entry.status === "At Risk" ? "bg-red-100 text-red-700" :
                      "bg-green-100 text-green-700"
                    }`}>
                      {entry.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-base">{entry.product}</h4>
                  <p className="text-sm text-foreground/70">Client: {entry.client}</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <ScanLine className="w-4 h-4 text-accent" />
                    <span className="font-medium">{entry.traceability}</span>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-foreground/70">Progress</span>
                  <span className="font-medium">{entry.progress}%</span>
                </div>
                <div className="w-full bg-background/5/10 rounded-full h-2 overflow-hidden border border-border/50">
                  <div 
                    className={`h-full rounded-full transition-all ${
                      entry.status === "At Risk" ? "bg-red-500" : "bg-accent"
                    }`} 
                    style={{ width: `${entry.progress}%` }} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Capacity Overview */}
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
          <CardTitle>Quality Score History</CardTitle>
          <CardDescription>Manufacturability score trends</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              { period: "This Week", score: 99.2, change: "+0.3%" },
              { period: "Last Week", score: 98.9, change: "+0.5%" },
              { period: "This Month", score: 98.5, change: "+1.2%" },
              { period: "Last Month", score: 97.3, change: "+0.8%" },
            ].map((item) => (
              <div key={item.period} className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
                <div>
                  <div className="text-sm font-medium">{item.period}</div>
                  <div className="text-xs text-foreground/70">Quality Performance</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-accent">{item.score}%</div>
                  <div className="text-xs text-green-600">{item.change}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}