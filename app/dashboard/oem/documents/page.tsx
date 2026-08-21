"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { FileText, Download, Upload, Search, Filter, ShoppingCart, ClipboardList, Building2, CheckCircle, FileCheck } from "lucide-react";

export default function ClientDocuments() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Client Documents</h1>
          <p className="text-sm text-foreground/70">
            Manage requirements, contracts, orders, and supplier documentation.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            <Upload className="w-4 h-4 mr-2" /> Upload Document
          </Button>
          <Button className="shrink-0">
            <FileCheck className="w-4 h-4 mr-2" /> New Requirement
          </Button>
        </div>
      </div>

      <Card className="p-5 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 w-full flex items-center gap-2 bg-background/5/5 rounded-lg px-3 py-2 border border-border focus-within:border-accent/30 focus-within:ring-2 focus-within:ring-accent/20 transition-all">
            <Search className="h-4 w-4 text-foreground/70" />
            <input
              type="text"
              placeholder="Search by filename, order, or supplier..."
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
          <Button variant="outline" className="w-full sm:w-auto shrink-0">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
        </div>
      </Card>

      {/* Client-Specific Document Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-accent/20">
          <ClipboardList className="w-6 h-6 text-accent mb-2" />
          <div className="font-bold text-sm">Requirements</div>
          <div className="text-xs text-foreground/70">8 files</div>
        </Card>
        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <ShoppingCart className="w-6 h-6 text-blue-600 mb-2" />
          <div className="font-bold text-sm">Orders & Contracts</div>
          <div className="text-xs text-foreground/70">15 files</div>
        </Card>
        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <Building2 className="w-6 h-6 text-green-600 mb-2" />
          <div className="font-bold text-sm">Supplier Documents</div>
          <div className="text-xs text-foreground/70">23 files</div>
        </Card>
        <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <FileCheck className="w-6 h-6 text-purple-600 mb-2" />
          <div className="font-bold text-sm">Quality Reports</div>
          <div className="text-xs text-foreground/70">12 files</div>
        </Card>
      </div>

      {/* Important Client Documents */}
      <h3 className="font-bold text-lg mb-4">Critical Documents</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { title: "Master Service Agreement", desc: "Main contract with Balbird platform for manufacturing services", updated: "1 week ago", type: "Contract", status: "Active" },
          { title: "Quality Assurance Framework", desc: "Quality standards and acceptance criteria for all orders", updated: "3 days ago", type: "Quality", status: "Active" },
          { title: "Supplier Onboarding Terms", desc: "Terms and conditions for supplier relationships", updated: "2 weeks ago", type: "Legal", status: "Active" },
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
                doc.type === "Contract" ? "bg-blue-100 text-blue-700" :
                doc.type === "Quality" ? "bg-green-100 text-green-700" :
                "bg-purple-100 text-purple-700"
              }`}>{doc.type}</span>
            </div>
            <Button size="sm" variant="secondary" className="w-full">View Document</Button>
          </Card>
        ))}
      </div>

      {/* Recent Order Documents */}
      <h3 className="font-bold text-lg mb-4">Recent Order Documents</h3>
      <Card className="overflow-hidden mb-6">
        <div className="divide-y divide-border">
          {[
            { name: "Purchase_Order_ORD_452.pdf", order: "ORD-452", supplier: "Precision Auto Components", size: "1.2 MB", uploaded: "2 hours ago", status: "Signed" },
            { name: "Contract_AGREEMENT_453.pdf", order: "ORD-453", supplier: "Pune Engineering Works", size: "2.4 MB", uploaded: "5 hours ago", status: "Pending" },
            { name: "Technical_Specs_Gearbox.pdf", order: "ORD-454", supplier: "Sunrise Automotive Parts", size: "3.8 MB", uploaded: "1 day ago", status: "Approved" },
            { name: "Quality_Report_455.pdf", order: "ORD-455", supplier: "Bharat Electronics", size: "1.5 MB", uploaded: "2 days ago", status: "Review" },
            { name: "Shipping_Documents_456.pdf", order: "ORD-456", supplier: "Metro Manufacturing", size: "0.8 MB", uploaded: "3 days ago", status: "Complete" },
          ].map((doc, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 hover:bg-background/5/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <ShoppingCart className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-foreground truncate">{doc.name}</div>
                  <div className="text-xs text-foreground/70 mt-0.5 truncate">{doc.order} • {doc.supplier} • {doc.size}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <div className={`text-xs font-medium ${
                      doc.status === "Signed" || doc.status === "Approved" || doc.status === "Complete" ? "text-green-600" :
                      doc.status === "Pending" ? "text-orange-600" :
                      "text-blue-600"
                    }`}>{doc.status}</div>
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

      {/* Supplier Documents */}
      <h3 className="font-bold text-lg mb-4">Supplier Documentation</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: "Precision Auto - Quality Manual", supplier: "Precision Auto Components", type: "Quality", date: "Jul 2026" },
          { name: "Pune Engineering - Process Specs", supplier: "Pune Engineering Works", type: "Technical", date: "Jul 2026" },
          { name: "Sunrise Auto - Certifications", supplier: "Sunrise Automotive Parts", type: "Certification", date: "Jun 2026" },
          { name: "Bharat Electronics - Test Reports", supplier: "Bharat Electronics", type: "Quality", date: "Jul 2026" },
        ].map((doc) => (
          <Card key={doc.name} className="p-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-sm">{doc.name}</div>
                <div className="text-xs text-foreground/70">{doc.supplier}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-medium">{doc.type}</div>
                <div className="text-xs text-foreground/70">{doc.date}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}