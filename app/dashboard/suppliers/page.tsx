"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Building2, Star, TrendingUp, AlertTriangle, Search, Filter, MessageCircle, CheckCircle } from "lucide-react";

export default function SuppliersPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Supplier Management</h1>
          <p className="text-sm text-foreground/70">
            Manage your supplier relationships and performance metrics.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
          <Button className="shrink-0">
            <Search className="w-4 h-4 mr-2" /> Find Suppliers
          </Button>
        </div>
      </div>

      {/* Supplier Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Building2 className="w-5 h-5 text-accent" />
            <span className="text-xs text-green-600 font-medium">+2</span>
          </div>
          <div className="text-2xl font-bold">24</div>
          <div className="text-xs text-foreground/70">Active Suppliers</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Star className="w-5 h-5 text-yellow-600" />
            <span className="text-xs text-green-600 font-medium">Excellent</span>
          </div>
          <div className="text-2xl font-bold">4.6</div>
          <div className="text-xs text-foreground/70">Avg Rating</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-xs text-green-600 font-medium">+12%</span>
          </div>
          <div className="text-2xl font-bold">94%</div>
          <div className="text-xs text-foreground/70">On-Time Delivery</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <span className="text-xs text-orange-600 font-medium">Attention</span>
          </div>
          <div className="text-2xl font-bold">3</div>
          <div className="text-xs text-foreground/70">Performance Issues</div>
        </Card>
      </div>

      {/* Top Suppliers */}
      <Card className="p-6 mb-6">
        <CardTitle>Top Performing Suppliers</CardTitle>
        <CardDescription>Your highest-rated suppliers based on quality and delivery</CardDescription>
        
        <div className="mt-6 space-y-4">
          {[
            {
              name: "Precision Auto Components Ltd",
              location: "Pune, Maharashtra",
              rating: 4.8,
              onTimeDelivery: "98%",
              qualityScore: "99.2%",
              activeOrders: 3,
              totalValue: "₹45.2L",
              capabilities: "CNC Machining, Assembly",
              status: "Preferred"
            },
            {
              name: "Bharat Electronics Manufacturing",
              location: "Pune, Maharashtra", 
              rating: 4.7,
              onTimeDelivery: "96%",
              qualityScore: "98.5%",
              activeOrders: 2,
              totalValue: "₹32.8L",
              capabilities: "PCB Assembly, Testing",
              status: "Preferred"
            },
            {
              name: "Sunrise Automotive Parts",
              location: "Nashik, Maharashtra",
              rating: 4.5,
              onTimeDelivery: "94%",
              qualityScore: "97.8%",
              activeOrders: 4,
              totalValue: "₹28.5L",
              capabilities: "Die Casting, Machining",
              status: "Active"
            }
          ].map((supplier) => (
            <div key={supplier.name} className="p-4 rounded-xl border border-border hover:bg-background/5/5 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-base">{supplier.name}</span>
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                      supplier.status === "Preferred" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                    }`}>
                      {supplier.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70 mb-2">
                    <Building2 className="w-3 h-3" />
                    <span>{supplier.location}</span>
                  </div>
                  <div className="text-sm text-foreground/70">Capabilities: {supplier.capabilities}</div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold">{supplier.rating}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-foreground/70">On-Time</div>
                    <div className="font-medium">{supplier.onTimeDelivery}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-foreground/70">Quality</div>
                    <div className="font-medium">{supplier.qualityScore}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-foreground/70">Orders</div>
                    <div className="font-medium">{supplier.activeOrders}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-foreground/70">Value</div>
                    <div className="font-medium">{supplier.totalValue}</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-border/50">
                <div className="text-xs text-foreground/70">
                  Last delivery: 2 days ago • Response time: 4 hours
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="h-8">
                    <MessageCircle className="w-3 h-3 mr-1.5" /> Contact
                  </Button>
                  <Button size="sm" className="h-8">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Supplier Categories & Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <CardTitle>Supplier Categories</CardTitle>
          <CardDescription>Breakdown by component type and specialization</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              { category: "CNC Machining", count: 8, avgRating: 4.6 },
              { category: "Assembly & Integration", count: 6, avgRating: 4.5 },
              { category: "Die Casting", count: 4, avgRating: 4.4 },
              { category: "Electronics Components", count: 3, avgRating: 4.7 },
              { category: "Heavy Fabrication", count: 3, avgRating: 4.3 }
            ].map((item) => (
              <div key={item.category} className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{item.category}</div>
                    <div className="text-xs text-foreground/70">{item.count} suppliers</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-medium">{item.avgRating}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle>Performance Alerts</CardTitle>
          <CardDescription>Suppliers requiring attention or intervention</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              {
                supplier: "Pune Engineering Works",
                issue: "Delivery delay - 5 days overdue",
                severity: "High",
                action: "Contact Supplier"
              },
              {
                supplier: "Regional Fabricators Ltd",
                issue: "Quality score dropped below 90%",
                severity: "Medium",
                action: "Review Quality"
              },
              {
                supplier: "Quick Assembly Solutions",
                issue: "Response time increased to 48 hours",
                severity: "Low",
                action: "Monitor"
              }
            ].map((alert) => (
              <div key={alert.supplier} className="flex items-start gap-3 p-3 rounded-lg bg-background/5/5 border border-border">
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                  alert.severity === "High" ? "bg-red-100" :
                  alert.severity === "Medium" ? "bg-orange-100" :
                  "bg-yellow-100"
                }`}>
                  <AlertTriangle className={`w-4 h-4 ${
                    alert.severity === "High" ? "text-red-600" :
                    alert.severity === "Medium" ? "text-orange-600" :
                    "text-yellow-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{alert.supplier}</div>
                  <div className="text-xs text-foreground/70">{alert.issue}</div>
                </div>
                <Button size="sm" variant="outline" className="h-8 text-xs">
                  {alert.action}
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}