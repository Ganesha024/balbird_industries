"use client";

import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Shield, TrendingUp, Award, AlertTriangle, CheckCircle, Target, BarChart3, ScanLine } from "lucide-react";

export default function ManufacturerQualityScore() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Quality & Manufacturability Score</h1>
          <p className="text-sm text-foreground/70">
            Track your quality performance and manufacturability metrics based on traceability and compliance.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            Download Report
          </Button>
          <Button className="shrink-0">
            Improve Score
          </Button>
        </div>
      </div>

      {/* Main Score Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="p-6 lg:col-span-1 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent text-white mb-4">
              <Shield className="h-10 w-10" />
            </div>
            <div className="text-5xl font-bold text-accent mb-2">99.2%</div>
            <div className="text-lg font-bold mb-1">Overall Quality Score</div>
            <div className="text-sm text-foreground/70 mb-4">Top 5% of manufacturers</div>
            <div className="flex items-center justify-center gap-2 text-green-600">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">+0.5% from last month</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 lg:col-span-2">
          <CardTitle>Score Breakdown</CardTitle>
          <CardDescription>Your quality performance across key metrics</CardDescription>
          
          <div className="mt-6 space-y-4">
            {[
              { metric: "Traceability Compliance", score: 98, change: "+2%", icon: ScanLine },
              { metric: "Quality Control Pass Rate", score: 99, change: "+1%", icon: CheckCircle },
              { metric: "On-Time Delivery", score: 96, change: "+3%", icon: Target },
              { metric: "Documentation Accuracy", score: 97, change: "+1%", icon: BarChart3 },
              { metric: "Certification Compliance", score: 100, change: "0%", icon: Award },
            ].map((item) => (
              <div key={item.metric} className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{item.metric}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">{item.score}%</span>
                      <span className="text-xs text-green-600">{item.change}</span>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-accent transition-all" 
                      style={{ width: `${item.score}%` }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Manufacturability Score */}
      <Card className="p-6 mb-6">
        <CardTitle>Manufacturability Score</CardTitle>
        <CardDescription>Based on your quality maintenance and traceability records</CardDescription>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 rounded-xl bg-background/5 border border-border">
            <div className="text-3xl font-bold text-accent mb-2">A+</div>
            <div className="text-sm font-medium mb-1">Current Grade</div>
            <div className="text-xs text-foreground/70">Excellent manufacturability</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-background/5 border border-border">
            <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
            <div className="text-sm font-medium mb-1">Process Efficiency</div>
            <div className="text-xs text-foreground/70">Optimal production workflows</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-background/5 border border-border">
            <div className="text-3xl font-bold text-blue-600 mb-2">96%</div>
            <div className="text-sm font-medium mb-1">Resource Utilization</div>
            <div className="text-xs text-foreground/70">Effective capacity management</div>
          </div>
        </div>
      </Card>

      {/* Quality Metrics Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="p-6">
          <CardTitle>Recent Quality Performance</CardTitle>
          <CardDescription>Quality metrics from recent projects</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              { project: "EV Motor Housing", quality: 99.5, traceability: 98, status: "Excellent" },
              { project: "Chassis Components", quality: 97.2, traceability: 95, status: "Good" },
              { project: "Gearbox Parts", quality: 99.8, traceability: 100, status: "Excellent" },
              { project: "Battery Tray Assembly", quality: 96.5, traceability: 94, status: "Good" },
            ].map((item) => (
              <div key={item.project} className="p-3 rounded-lg bg-background/5 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-sm">{item.project}</div>
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                    item.status === "Excellent" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-foreground/70">Quality: </span>
                    <span className="font-medium">{item.quality}%</span>
                  </div>
                  <div>
                    <span className="text-foreground/70">Traceability: </span>
                    <span className="font-medium">{item.traceability}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle>Areas for Improvement</CardTitle>
          <CardDescription>Focus areas to enhance your quality score</CardDescription>
          
          <div className="mt-6 space-y-4">
            {[
              { 
                area: "Documentation Speed", 
                current: "85%", 
                target: "95%", 
                impact: "High",
                action: "Implement automated documentation system"
              },
              { 
                area: "Real-time Quality Monitoring", 
                current: "78%", 
                target: "90%", 
                impact: "Medium",
                action: "Add IoT sensors to production lines"
              },
              { 
                area: "Supplier Quality Integration", 
                current: "82%", 
                target: "92%", 
                impact: "High",
                action: "Integrate supplier quality data into traceability"
              },
            ].map((item) => (
              <div key={item.area} className="p-4 rounded-lg bg-background/5 border border-border">
                <div className="flex items-start justify-between mb-2">
                  <div className="font-medium text-sm">{item.area}</div>
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                    item.impact === "High" ? "bg-red-100 text-red-700" : "bg-orange-100 text-orange-700"
                  }`}>
                    {item.impact} Impact
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-2 text-xs">
                  <div>
                    <span className="text-foreground/70">Current: </span>
                    <span className="font-medium">{item.current}</span>
                  </div>
                  <div>
                    <span className="text-foreground/70">Target: </span>
                    <span className="font-medium text-accent">{item.target}</span>
                  </div>
                </div>
                <div className="text-xs text-foreground/70">
                  <span className="font-medium">Action: </span>{item.action}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Certifications */}
      <Card className="p-6">
        <CardTitle>Certifications & Compliance</CardTitle>
        <CardDescription>Current certifications and their impact on your quality score</CardDescription>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "ISO 9001:2015", status: "Active", expiry: "Dec 2027", impact: "+15%" },
            { name: "IATF 16949", status: "Active", expiry: "Mar 2028", impact: "+20%" },
            { name: "ISO 14001", status: "Active", expiry: "Jun 2027", impact: "+10%" },
            { name: "OHSAS 18001", status: "Pending", expiry: "N/A", impact: "+5%" },
          ].map((cert) => (
            <div key={cert.name} className="p-4 rounded-xl bg-background/5 border border-border">
              <div className="flex items-center gap-2 mb-2">
                {cert.status === "Active" ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <AlertTriangle className="h-4 w-4 text-orange-600" />
                )}
                <span className="text-sm font-medium">{cert.name}</span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-foreground/70">Status</span>
                  <span className={`font-medium ${cert.status === "Active" ? "text-green-600" : "text-orange-600"}`}>
                    {cert.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Expiry</span>
                  <span className="font-medium">{cert.expiry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Score Impact</span>
                  <span className="font-medium text-green-600">{cert.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}