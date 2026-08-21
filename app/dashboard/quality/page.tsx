"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Shield, CheckCircle, AlertTriangle, FileText, TrendingUp, Award, Calendar, Filter, Plus } from "lucide-react";

export default function QualityPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Quality Management</h1>
          <p className="text-sm text-foreground/70">
            Monitor quality metrics, certifications, and compliance status.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
          <Button className="shrink-0">
            <Plus className="w-4 h-4 mr-2" /> New Quality Check
          </Button>
        </div>
      </div>

      {/* Quality Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-xs text-green-600 font-medium">Excellent</span>
          </div>
          <div className="text-2xl font-bold">99.2%</div>
          <div className="text-xs text-foreground/70">Quality Score</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-xs text-blue-600 font-medium">Active</span>
          </div>
          <div className="text-2xl font-bold">3</div>
          <div className="text-xs text-foreground/70">Certifications</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <span className="text-xs text-orange-600 font-medium">Attention</span>
          </div>
          <div className="text-2xl font-bold">2</div>
          <div className="text-xs text-foreground/70">Open Issues</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-xs text-green-600 font-medium">+5%</span>
          </div>
          <div className="text-2xl font-bold">94.8%</div>
          <div className="text-xs text-foreground/70">First Pass Yield</div>
        </Card>
      </div>

      {/* Certifications */}
      <Card className="p-6 mb-6">
        <CardTitle>Active Certifications</CardTitle>
        <CardDescription>Your current quality and compliance certifications</CardDescription>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: "IATF 16949",
              description: "Quality Management System for Automotive",
              status: "Active",
              expiry: "Dec 15, 2026",
              icon: Award
            },
            {
              name: "ISO 9001:2015",
              description: "Quality Management Systems",
              status: "Active", 
              expiry: "Mar 22, 2027",
              icon: Shield
            },
            {
              name: "ISO 14001:2015",
              description: "Environmental Management System",
              status: "Active",
              expiry: "Jul 08, 2026",
              icon: CheckCircle
            }
          ].map((cert) => (
            <div key={cert.name} className="p-4 rounded-xl border border-border hover:bg-background/5/5 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <cert.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm">{cert.name}</h4>
                  <p className="text-xs text-foreground/70">{cert.description}</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs pt-3 border-t border-border/50">
                <span className={`font-medium px-2 py-1 rounded-full ${
                  cert.status === "Active" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                }`}>
                  {cert.status}
                </span>
                <span className="text-foreground/70">Expires: {cert.expiry}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quality Issues & Inspections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <CardTitle>Open Quality Issues</CardTitle>
          <CardDescription>Active quality concerns requiring attention</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              {
                id: "QI-2024-023",
                title: "Surface Finish Variation",
                product: "EV Motor Housing",
                severity: "Medium",
                date: "Aug 08, 2026",
                status: "Investigating"
              },
              {
                id: "QI-2024-024", 
                title: "Dimensional Tolerance Exceeded",
                product: "Chassis Frame Component",
                severity: "High",
                date: "Aug 07, 2026",
                status: "Action Required"
              }
            ].map((issue) => (
              <div key={issue.id} className="flex items-start gap-3 p-3 rounded-lg bg-background/5/5 border border-border">
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                  issue.severity === "High" ? "bg-red-100" : "bg-orange-100"
                }`}>
                  <AlertTriangle className={`w-4 h-4 ${
                    issue.severity === "High" ? "text-red-600" : "text-orange-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-foreground/70">{issue.id}</span>
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                      issue.severity === "High" ? "bg-red-100 text-red-700" : "bg-orange-100 text-orange-700"
                    }`}>
                      {issue.severity}
                    </span>
                  </div>
                  <div className="text-sm font-medium">{issue.title}</div>
                  <div className="text-xs text-foreground/70">{issue.product} • {issue.date}</div>
                </div>
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${
                  issue.status === "Action Required" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                }`}>
                  {issue.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle>Recent Quality Inspections</CardTitle>
          <CardDescription>Latest quality checks and audit results</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              {
                title: "Incoming Material Inspection",
                batch: "BATCH-2024-089",
                result: "Passed",
                inspector: "Quality Team A",
                date: "Aug 08, 2026",
                items: "150 units"
              },
              {
                title: "In-Process Quality Check",
                batch: "PR-2024-002",
                result: "Passed with Notes",
                inspector: "Quality Team B", 
                date: "Aug 07, 2026",
                items: "320 units"
              },
              {
                title: "Final Quality Inspection",
                batch: "PR-2024-001",
                result: "Passed",
                inspector: "Quality Team A",
                date: "Aug 06, 2026",
                items: "500 units"
              },
              {
                title: "Calibration Check",
                batch: "EQUIP-CNC-04",
                result: "Passed",
                inspector: "Maintenance Team",
                date: "Aug 05, 2026",
                items: "1 equipment"
              }
            ].map((inspection) => (
              <div key={inspection.title} className="flex items-center gap-3 p-3 rounded-lg bg-background/5/5 border border-border">
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                  inspection.result === "Passed" ? "bg-green-100" : "bg-yellow-100"
                }`}>
                  <CheckCircle className={`w-4 h-4 ${
                    inspection.result === "Passed" ? "text-green-600" : "text-yellow-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{inspection.title}</div>
                  <div className="text-xs text-foreground/70">{inspection.batch} • {inspection.items}</div>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                    inspection.result === "Passed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {inspection.result}
                  </div>
                  <div className="text-xs text-foreground/70 mt-1">{inspection.date}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Upcoming Audits */}
      <Card className="p-6 mt-6">
        <CardTitle>Upcoming Quality Audits</CardTitle>
        <CardDescription>Scheduled audits and compliance reviews</CardDescription>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "IATF 16949 Surveillance Audit",
              date: "Aug 22, 2026",
              auditor: "TÜV SÜD",
              scope: "Full QMS Review",
              status: "Scheduled"
            },
            {
              title: "Internal Quality Audit",
              date: "Sep 15, 2026",
              auditor: "Internal Audit Team",
              scope: "Production Lines A & B",
              status: "Planning"
            }
          ].map((audit) => (
            <div key={audit.title} className="p-4 rounded-xl border border-border hover:bg-background/5/5 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm">{audit.title}</h4>
                  <p className="text-xs text-foreground/70 mt-1">{audit.auditor}</p>
                </div>
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${
                  audit.status === "Scheduled" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                }`}>
                  {audit.status}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs pt-3 border-t border-border/50">
                <span className="text-foreground/70">Scope: {audit.scope}</span>
                <span className="font-medium">{audit.date}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}