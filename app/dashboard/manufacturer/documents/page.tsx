"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { FileText, Download, Upload, Search, Filter, Shield, Award, ClipboardCheck, ScanLine, Factory, CheckCircle } from "lucide-react";

export default function ManufacturerDocuments() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Manufacturer Documents</h1>
          <p className="text-sm text-foreground/70">
            Manage traceability records, quality certifications, and manufacturing documentation.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            <Upload className="w-4 h-4 mr-2" /> Upload Document
          </Button>
          <Button className="shrink-0">
            <ScanLine className="w-4 h-4 mr-2" /> Add Traceability
          </Button>
        </div>
      </div>

      <Card className="p-5 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 w-full flex items-center gap-2 bg-background/5/5 rounded-lg px-3 py-2 border border-border focus-within:border-accent/30 focus-within:ring-2 focus-within:ring-accent/20 transition-all">
            <Search className="h-4 w-4 text-foreground/70" />
            <input
              type="text"
              placeholder="Search by filename, project, or tag..."
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
          <Button variant="outline" className="w-full sm:w-auto shrink-0">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
        </div>
      </Card>

      {/* Manufacturer-Specific Document Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-accent/20">
          <ScanLine className="w-6 h-6 text-accent mb-2" />
          <div className="font-bold text-sm">Traceability Records</div>
          <div className="text-xs text-foreground/70">45 files</div>
        </Card>
        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <Shield className="w-6 h-6 text-blue-600 mb-2" />
          <div className="font-bold text-sm">Quality Documents</div>
          <div className="text-xs text-foreground/70">12 files</div>
        </Card>
        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <Award className="w-6 h-6 text-green-600 mb-2" />
          <div className="font-bold text-sm">Certifications</div>
          <div className="text-xs text-foreground/70">5 files</div>
        </Card>
        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <Factory className="w-6 h-6 text-orange-600 mb-2" />
          <div className="font-bold text-sm">Process Documentation</div>
          <div className="text-xs text-foreground/70">23 files</div>
        </Card>
      </div>

      {/* Important Manufacturer Documents */}
      <h3 className="font-bold text-lg mb-4">Critical Manufacturing Documents</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { title: "IATF 16949 Quality Manual", desc: "Quality management system documentation for automotive production", updated: "2 days ago", type: "Quality", status: "Active" },
          { title: "Manufacturing Process Specs", desc: "Technical specifications for all production lines and equipment", updated: "1 week ago", type: "Technical", status: "Active" },
          { title: "Traceability System SOP", desc: "Standard operating procedures for traceability documentation", updated: "3 days ago", type: "Process", status: "Active" },
        ].map((doc) => (
          <Card key={doc.title} className="p-5 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-3">
              <FileText className="w-8 h-8 text-accent/80" />
              <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
                <CheckCircle className="w-3 h-3" /> {doc.status}
              </span>
            </div>
            <h3 className="font-bold text-sm text-foreground mb-1">{doc.title}</h3>
            <p className="text-xs text-foreground/70 mb-4">{doc.desc}</p>
            <div className="flex justify-between items-center text-xs mb-4 pt-4 border-t border-border/50">
              <span className="text-foreground/70">Updated: {doc.updated}</span>
              <span className={`font-medium px-2 py-1 rounded-full ${
                doc.type === "Quality" ? "bg-blue-100 text-blue-700" :
                doc.type === "Technical" ? "bg-purple-100 text-purple-700" :
                "bg-orange-100 text-orange-700"
              }`}>{doc.type}</span>
            </div>
            <Button size="sm" variant="secondary" className="w-full">View Document</Button>
          </Card>
        ))}
      </div>

      {/* Recent Traceability Files */}
      <h3 className="font-bold text-lg mb-4">Recent Traceability Records</h3>
      <Card className="overflow-hidden mb-6">
        <div className="divide-y divide-border">
          {[
            { name: "Traceability_Report_EV_Motor_Housing.pdf", project: "EV Motor Housing Production", batch: "Batch #452", size: "2.4 MB", uploaded: "2 hours ago", completeness: "98%" },
            { name: "Batch_Records_Chassis_Frame.pdf", project: "Chassis Frame Components", batch: "Batch #453", size: "1.8 MB", uploaded: "5 hours ago", completeness: "72%" },
            { name: "Quality_Check_Gearbox_Parts.pdf", project: "Precision Gearbox Parts", batch: "Batch #454", size: "3.1 MB", uploaded: "1 day ago", completeness: "100%" },
            { name: "Process_Validation_CNC_Line_A.pdf", project: "CNC Line A Validation", batch: "N/A", size: "2.9 MB", uploaded: "5 days ago", completeness: "100%" },
            { name: "Material_Certification_Steel.pdf", project: "Raw Material Documentation", batch: "Batch #451", size: "1.2 MB", uploaded: "1 week ago", completeness: "100%" },
          ].map((doc, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 hover:bg-background/5/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <ScanLine className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-foreground truncate">{doc.name}</div>
                  <div className="text-xs text-foreground/70 mt-0.5 truncate">{doc.project} • {doc.batch} • {doc.size}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <div className="text-xs font-medium text-accent">{doc.completeness}</div>
                    <div className="text-xs text-foreground/70">Complete</div>
                  </div>
                  <div className="text-xs text-foreground/70 hidden md:block">{doc.uploaded}</div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-full hover:bg-accent/10 hover:text-accent shrink-0">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Certification Documents */}
      <h3 className="font-bold text-lg mb-4">Active Certifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: "ISO 9001:2015 Certificate", expiry: "Dec 2027", status: "Valid", authority: "TÜV SÜD" },
          { name: "IATF 16949 Certificate", expiry: "Mar 2028", status: "Valid", authority: "Bureau Veritas" },
          { name: "ISO 14001 Certificate", expiry: "Jun 2027", status: "Valid", authority: "SGS" },
        ].map((cert) => (
          <Card key={cert.name} className="p-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-sm">{cert.name}</div>
                <div className="text-xs text-foreground/70">Authority: {cert.authority}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-medium text-green-600">{cert.status}</div>
                <div className="text-xs text-foreground/70">Expires: {cert.expiry}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}