"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { FileText, Download, Upload, Search, Filter, Shield, Award, ClipboardCheck } from "lucide-react";

export default function DocumentsPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Manufacturing Documents</h1>
          <p className="text-sm text-foreground/70">
            Access, upload, and manage traceability and compliance documents.
          </p>
        </div>
        <Button className="shrink-0">
          <Upload className="w-4 h-4 mr-2" /> Upload Document
        </Button>
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

      {/* Document Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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
          <ClipboardCheck className="w-6 h-6 text-purple-600 mb-2" />
          <div className="font-bold text-sm">Compliance</div>
          <div className="text-xs text-foreground/70">8 files</div>
        </Card>
        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <FileText className="w-6 h-6 text-accent mb-2" />
          <div className="font-bold text-sm">Technical Specs</div>
          <div className="text-xs text-foreground/70">23 files</div>
        </Card>
      </div>

      <h3 className="font-bold text-lg mb-4">Important Manufacturing Documents</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { title: "IATF 16949 Quality Manual", desc: "Quality management system documentation", updated: "2 days ago", type: "Quality" },
          { title: "Manufacturing Process Specs", desc: "Technical specifications for production lines", updated: "1 week ago", type: "Technical" },
          { title: "ISO 14001 Environmental Plan", desc: "Environmental management procedures", updated: "3 days ago", type: "Compliance" },
        ].map((doc) => (
          <Card key={doc.title} className="p-5 hover:shadow-md transition-all">
            <FileText className="w-8 h-8 text-accent/80 mb-3" />
            <h3 className="font-bold text-sm text-foreground mb-1">{doc.title}</h3>
            <p className="text-xs text-foreground/70 mb-4">{doc.desc}</p>
            <div className="flex justify-between items-center text-xs mb-4 pt-4 border-t border-border/50">
              <span className="text-foreground/70">Updated: {doc.updated}</span>
              <span className={`font-medium px-2 py-1 rounded-full ${
                doc.type === "Quality" ? "bg-blue-100 text-blue-700" :
                doc.type === "Technical" ? "bg-purple-100 text-purple-700" :
                "bg-green-100 text-green-700"
              }`}>{doc.type}</span>
            </div>
            <Button size="sm" variant="secondary" className="w-full">View Document</Button>
          </Card>
        ))}
      </div>

      <h3 className="font-bold text-lg mb-4">Recent Traceability Files</h3>
      <Card className="overflow-hidden">
        <div className="divide-y divide-border">
          {[
            { name: "Traceability_Report_EV_Motor_Housing.pdf", project: "EV Motor Housing Production", size: "2.4 MB", uploaded: "2 hours ago", uploader: "Quality Team" },
            { name: "Batch_Records_Chassis_Frame.pdf", project: "Chassis Frame Components", size: "1.8 MB", uploaded: "5 hours ago", uploader: "Production Team" },
            { name: "Quality_Check_Gearbox_Parts.pdf", project: "Precision Gearbox Parts", size: "3.1 MB", uploaded: "1 day ago", uploader: "Quality Team" },
            { name: "Certification_IATF_16949.pdf", project: "Company Certification", size: "4.2 MB", uploaded: "3 days ago", uploader: "Compliance Officer" },
            { name: "Process_Validation_CNC_Line_A.pdf", project: "CNC Line A Validation", size: "2.9 MB", uploaded: "5 days ago", uploader: "Engineering Team" },
          ].map((doc, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 hover:bg-background/5/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-foreground truncate">{doc.name}</div>
                  <div className="text-xs text-foreground/70 mt-0.5 truncate">{doc.project} • {doc.size} • {doc.uploaded}</div>
                </div>
                <div className="text-xs text-foreground/70 hidden sm:block">By {doc.uploader}</div>
              </div>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-full hover:bg-accent/10 hover:text-accent shrink-0">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
