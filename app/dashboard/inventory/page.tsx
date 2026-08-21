"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Package, TrendingUp, AlertTriangle, Search, Filter, Plus, Truck, Warehouse } from "lucide-react";

export default function InventoryPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Inventory Management</h1>
          <p className="text-sm text-foreground/70">
            Track stock levels, manage warehouse operations, and optimize inventory.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
          <Button className="shrink-0">
            <Plus className="w-4 h-4 mr-2" /> Add Stock
          </Button>
        </div>
      </div>

      {/* Inventory Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Package className="w-5 h-5 text-accent" />
            <span className="text-xs text-green-600 font-medium">+12%</span>
          </div>
          <div className="text-2xl font-bold">2,450</div>
          <div className="text-xs text-foreground/70">Total SKUs</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Warehouse className="w-5 h-5 text-blue-600" />
            <span className="text-xs text-blue-600 font-medium">Optimal</span>
          </div>
          <div className="text-2xl font-bold">85%</div>
          <div className="text-xs text-foreground/70">Stock Accuracy</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-xs text-green-600 font-medium">+8%</span>
          </div>
          <div className="text-2xl font-bold">₹4.2Cr</div>
          <div className="text-xs text-foreground/70">Inventory Value</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <span className="text-xs text-orange-600 font-medium">Action Needed</span>
          </div>
          <div className="text-2xl font-bold">23</div>
          <div className="text-xs text-foreground/70">Low Stock Items</div>
        </Card>
      </div>

      {/* Stock Categories */}
      <Card className="p-6 mb-6">
        <CardTitle>Stock by Category</CardTitle>
        <CardDescription>Inventory breakdown by product category</CardDescription>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { category: "Automotive Components", items: 850, value: "₹1.8Cr", status: "Healthy", trend: "+5%" },
            { category: "Two-Wheeler Parts", items: 620, value: "₹95L", status: "Healthy", trend: "+8%" },
            { category: "Electrical Components", items: 480, value: "₹72L", status: "Low Stock", trend: "-3%" },
            { category: "Industrial Supplies", items: 320, value: "₹45L", status: "Healthy", trend: "+2%" },
            { category: "Safety Equipment", items: 180, value: "₹18L", status: "Critical", trend: "-12%" }
          ].map((cat) => (
            <div key={cat.category} className="p-4 rounded-xl border border-border hover:bg-background/5/5 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm">{cat.category}</span>
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                  cat.status === "Healthy" ? "bg-green-100 text-green-700" :
                  cat.status === "Low Stock" ? "bg-orange-100 text-orange-700" :
                  "bg-red-100 text-red-700"
                }`}>
                  {cat.status}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-foreground/70">Items: {cat.items}</span>
                <span className={`font-medium ${cat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {cat.trend}
                </span>
              </div>
              <div className="text-sm font-bold">{cat.value}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Low Stock Alerts & Warehouse Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <CardTitle>Low Stock Alerts</CardTitle>
          <CardDescription>Items requiring immediate replenishment</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              {
                item: "Safety Helmets - Industrial Grade",
                sku: "SH-IND-001",
                currentStock: 15,
                reorderLevel: 50,
                supplier: "Safety First Supplies",
                urgency: "Critical"
              },
              {
                item: "Electrical Connectors - Type A",
                sku: "EC-TYP-A-023",
                currentStock: 28,
                reorderLevel: 100,
                supplier: "ElectroParts India",
                urgency: "High"
              },
              {
                item: "Brake Pads - Standard",
                sku: "BP-STD-045",
                currentStock: 45,
                reorderLevel: 150,
                supplier: "AutoBrake Components",
                urgency: "Medium"
              }
            ].map((alert) => (
              <div key={alert.sku} className="flex items-start gap-3 p-3 rounded-lg bg-background/5/5 border border-border">
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                  alert.urgency === "Critical" ? "bg-red-100" :
                  alert.urgency === "High" ? "bg-orange-100" :
                  "bg-yellow-100"
                }`}>
                  <AlertTriangle className={`w-4 h-4 ${
                    alert.urgency === "Critical" ? "text-red-600" :
                    alert.urgency === "High" ? "text-orange-600" :
                    "text-yellow-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{alert.item}</div>
                  <div className="text-xs text-foreground/70">SKU: {alert.sku} • Supplier: {alert.supplier}</div>
                  <div className="text-xs text-foreground/70 mt-1">
                    Stock: {alert.currentStock} / Reorder at: {alert.reorderLevel}
                  </div>
                </div>
                <Button size="sm" variant="outline" className="h-8 text-xs">
                  Reorder
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle>Warehouse Performance</CardTitle>
          <CardDescription>Key metrics for warehouse operations</CardDescription>
          
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Package className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Order Fulfillment Rate</div>
                  <div className="text-xs text-foreground/70">Same-day shipping</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-green-600">94%</div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Truck className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Average Delivery Time</div>
                  <div className="text-xs text-foreground/70">Order to customer</div>
                </div>
              </div>
              <div className="text-2xl font-bold">2.3 days</div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Warehouse className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-medium">Warehouse Utilization</div>
                  <div className="text-xs text-foreground/70">Space efficiency</div>
                </div>
              </div>
              <div className="text-2xl font-bold">78%</div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Inventory Turnover</div>
                  <div className="text-xs text-foreground/70">Annual rate</div>
                </div>
              </div>
              <div className="text-2xl font-bold">6.2x</div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}