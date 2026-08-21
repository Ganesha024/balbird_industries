"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ClipboardList, Building2, ShoppingCart, Search, Plus, FileText } from "lucide-react";
import Link from "next/link";

export default function OEMOverview() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Client Overview</h1>
          <p className="text-sm text-foreground/70">
            Manage requirements, find suppliers, and track orders.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            <Search className="w-4 h-4 mr-2" /> Find Supplier
          </Button>
          <Button className="shrink-0">
            <Plus className="w-4 h-4 mr-2" /> Add Requirement
          </Button>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Link href="/dashboard/oem/active-requirements">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-accent/20">
            <ClipboardList className="w-6 h-6 text-accent mb-2" />
            <div className="font-bold text-sm">Active Requirements</div>
            <div className="text-xs text-foreground/70">8 posted requirements</div>
          </Card>
        </Link>
        <Link href="/dashboard/oem/supplier-matching">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <Building2 className="w-6 h-6 text-blue-600 mb-2" />
            <div className="font-bold text-sm">Supplier Matching</div>
            <div className="text-xs text-foreground/70">12 matched suppliers</div>
          </Card>
        </Link>
        <Link href="/dashboard/oem/active-orders">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <ShoppingCart className="w-6 h-6 text-green-600 mb-2" />
            <div className="font-bold text-sm">Active Orders</div>
            <div className="text-xs text-foreground/70">15 running projects</div>
          </Card>
        </Link>
        <Link href="/dashboard/oem/documents">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <FileText className="w-6 h-6 text-purple-600 mb-2" />
            <div className="font-bold text-sm">Documents</div>
            <div className="text-xs text-foreground/70">48 order documents</div>
          </Card>
        </Link>
      </div>

      {/* Client-specific stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <ClipboardList className="w-5 h-5 text-accent" />
            <span className="text-xs text-green-600 font-medium">+2</span>
          </div>
          <div className="text-2xl font-bold">8</div>
          <div className="text-xs text-foreground/70">Active Requirements</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Building2 className="w-5 h-5 text-blue-600" />
            <span className="text-xs text-green-600 font-medium">+3</span>
          </div>
          <div className="text-2xl font-bold">12</div>
          <div className="text-xs text-foreground/70">Supplier Matches</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <ShoppingCart className="w-5 h-5 text-green-600" />
            <span className="text-xs text-green-600 font-medium">+4</span>
          </div>
          <div className="text-2xl font-bold">15</div>
          <div className="text-xs text-foreground/70">Active Orders</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <FileText className="w-5 h-5 text-accent" />
            <span className="text-xs text-green-600 font-medium">+2%</span>
          </div>
          <div className="text-2xl font-bold">94%</div>
          <div className="text-xs text-foreground/70">On-Time Delivery</div>
        </Card>
      </div>

      {/* Active Requirements Section */}
      <Card className="p-6 mb-6">
        <CardTitle>Active Requirements</CardTitle>
        <CardDescription>Current requirements posted and their status</CardDescription>
        
        <div className="mt-6 space-y-4">
          {[
            {
              id: "REQ-2024-001",
              part: "EV Motor Housing",
              quantity: "5,000 units",
              status: "Supplier Matched",
              matches: 3,
              deadline: "Aug 15, 2026"
            },
            {
              id: "REQ-2024-002",
              part: "Chassis Frame Components", 
              quantity: "3,200 units",
              status: "In Review",
              matches: 5,
              deadline: "Aug 20, 2026"
            },
            {
              id: "REQ-2024-003",
              part: "Precision Gearbox Parts",
              quantity: "8,500 units",
              status: "Quote Received",
              matches: 2,
              deadline: "Aug 10, 2026"
            }
          ].map((req) => (
            <div key={req.id} className="p-4 rounded-xl border border-border hover:bg-background/5/5 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm">{req.id}</span>
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                      req.status === "Supplier Matched" ? "bg-green-100 text-green-700" :
                      req.status === "In Review" ? "bg-blue-100 text-blue-700" :
                      "bg-orange-100 text-orange-700"
                    }`}>
                      {req.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-base">{req.part}</h4>
                  <p className="text-sm text-foreground/70">Quantity: {req.quantity}</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="text-right">
                    <div className="text-foreground/70">Supplier Matches</div>
                    <div className="font-medium">{req.matches}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-foreground/70">Deadline</div>
                    <div className="font-medium">{req.deadline}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Supplier Matching & Active Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <CardTitle>Supplier Matching</CardTitle>
          <CardDescription>Current list of suitable manufacturers</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              { company: "Precision Auto Components Ltd", capability: "CNC Machining, Sheet Metal", match: "95%" },
              { company: "Bharat Electronics Manufacturing", capability: "PCB Assembly, Testing", match: "92%" },
              { company: "Pune Engineering Works", capability: "Heavy Fabrication, Welding", match: "88%" },
              { company: "Sunrise Automotive Parts", capability: "Die Casting, Surface Treatment", match: "85%" },
            ].map((supplier) => (
              <div key={supplier.company} className="flex items-center gap-3 p-3 rounded-lg bg-background/5/5 border border-border">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{supplier.company}</div>
                  <div className="text-xs text-foreground/70">{supplier.capability}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-accent">{supplier.match}</div>
                  <div className="text-xs text-foreground/70">Match</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle>Active Orders</CardTitle>
          <CardDescription>Running projects and their status</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              { order: "ORD-452", item: "EV Motor Housing", supplier: "Precision Auto", progress: 78, status: "On Track" },
              { order: "ORD-453", item: "Chassis Components", supplier: "Pune Engineering", progress: 45, status: "At Risk" },
              { order: "ORD-454", item: "Gearbox Parts", supplier: "Sunrise Auto", progress: 92, status: "Nearing Complete" },
            ].map((order) => (
              <div key={order.order} className="p-3 rounded-lg bg-background/5/5 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="text-sm font-bold">{order.order}</div>
                    <div className="text-xs text-foreground/70">{order.item}</div>
                  </div>
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${
                    order.status === "On Track" ? "bg-green-100 text-green-700" :
                    order.status === "At Risk" ? "bg-red-100 text-red-700" :
                    "bg-blue-100 text-blue-700"
                  }`}>
                    {order.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-foreground/70">{order.supplier}</span>
                  <span className="font-medium">{order.progress}%</span>
                </div>
                <div className="w-full bg-background/5/10 rounded-full h-1.5 mt-2 overflow-hidden border border-border/50">
                  <div 
                    className={`h-full rounded-full transition-all ${
                      order.status === "At Risk" ? "bg-red-500" : "bg-accent"
                    }`} 
                    style={{ width: `${order.progress}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}