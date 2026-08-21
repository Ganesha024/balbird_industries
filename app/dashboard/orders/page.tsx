"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ShoppingCart, Package, Truck, CheckCircle, Clock, AlertTriangle, Search, Filter, Eye } from "lucide-react";

export default function OrdersPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Production Orders</h1>
          <p className="text-sm text-foreground/70">
            Manage incoming production orders and delivery schedules.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
          <Button className="shrink-0">
            <Search className="w-4 h-4 mr-2" /> Search Orders
          </Button>
        </div>
      </div>

      {/* Order Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <ShoppingCart className="w-5 h-5 text-accent" />
            <span className="text-xs text-green-600 font-medium">+3</span>
          </div>
          <div className="text-2xl font-bold">12</div>
          <div className="text-xs text-foreground/70">Active Orders</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Package className="w-5 h-5 text-blue-600" />
            <span className="text-xs text-blue-600 font-medium">This Week</span>
          </div>
          <div className="text-2xl font-bold">4</div>
          <div className="text-xs text-foreground/70">New Orders</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Truck className="w-5 h-5 text-green-600" />
            <span className="text-xs text-green-600 font-medium">On Time</span>
          </div>
          <div className="text-2xl font-bold">8</div>
          <div className="text-xs text-foreground/70">Ready for Delivery</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <span className="text-xs text-orange-600 font-medium">Attention</span>
          </div>
          <div className="text-2xl font-bold">2</div>
          <div className="text-xs text-foreground/70">Delayed Orders</div>
        </Card>
      </div>

      {/* Active Orders */}
      <Card className="p-6 mb-6">
        <CardTitle>Active Production Orders</CardTitle>
        <CardDescription>Current orders in production and their status</CardDescription>
        
        <div className="mt-6 space-y-4">
          {[
            {
              orderNumber: "ORD-2024-0892",
              client: "Tata Motors Ltd",
              product: "EV Motor Housing Assembly",
              quantity: "5,000 units",
              orderDate: "Jul 28, 2026",
              deliveryDate: "Aug 15, 2026",
              status: "In Production",
              progress: 78,
              priority: "High",
              value: "₹12,50,000"
            },
            {
              orderNumber: "ORD-2024-0895",
              client: "Mahindra & Mahindra",
              product: "Chassis Frame Components",
              quantity: "3,200 units",
              orderDate: "Aug 02, 2026",
              deliveryDate: "Aug 20, 2026",
              status: "In Production",
              progress: 45,
              priority: "Critical",
              value: "₹8,96,000"
            },
            {
              orderNumber: "ORD-2024-0898",
              client: "Bajaj Auto Ltd",
              product: "Precision Gearbox Parts",
              quantity: "8,500 units",
              orderDate: "Jul 25, 2026",
              deliveryDate: "Aug 10, 2026",
              status: "Quality Check",
              progress: 92,
              priority: "Medium",
              value: "₹15,30,000"
            },
            {
              orderNumber: "ORD-2024-0901",
              client: "Kirloskar Electric",
              product: "Motor Components",
              quantity: "2,000 units",
              orderDate: "Aug 05, 2026",
              deliveryDate: "Aug 25, 2026",
              status: "Pending",
              progress: 10,
              priority: "Medium",
              value: "₹6,75,000"
            }
          ].map((order) => (
            <div key={order.orderNumber} className="p-4 rounded-xl border border-border hover:bg-background/5/5 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm">{order.orderNumber}</span>
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                      order.priority === "Critical" ? "bg-red-100 text-red-700" :
                      order.priority === "High" ? "bg-orange-100 text-orange-700" :
                      "bg-blue-100 text-blue-700"
                    }`}>
                      {order.priority}
                    </span>
                  </div>
                  <h4 className="font-bold text-base">{order.product}</h4>
                  <p className="text-sm text-foreground/70">Client: {order.client}</p>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-right">
                    <div className="text-foreground/70">Quantity</div>
                    <div className="font-medium">{order.quantity}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-foreground/70">Order Value</div>
                    <div className="font-medium">{order.value}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-foreground/70">Delivery</div>
                    <div className="font-medium">{order.deliveryDate}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      order.status === "In Production" ? "bg-blue-100 text-blue-700" :
                      order.status === "Quality Check" ? "bg-purple-100 text-purple-700" :
                      order.status === "Pending" ? "bg-gray-100 text-gray-700" :
                      "bg-green-100 text-green-700"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-foreground/70">Production Progress</span>
                  <span className="font-medium">{order.progress}%</span>
                </div>
                <div className="w-full bg-background/5/10 rounded-full h-2 overflow-hidden border border-border/50">
                  <div 
                    className={`h-full rounded-full transition-all ${
                      order.status === "Pending" ? "bg-gray-400" :
                      order.status === "Quality Check" ? "bg-purple-500" : "bg-accent"
                    }`} 
                    style={{ width: `${order.progress}%` }} 
                  />
                </div>
              </div>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-border/50">
                <div className="text-xs text-foreground/70">
                  Ordered: {order.orderDate}
                </div>
                <Button size="sm" variant="outline" className="h-8">
                  <Eye className="w-3 h-3 mr-1.5" /> View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Order Analytics & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <CardTitle>Order Analytics</CardTitle>
          <CardDescription>Performance metrics and trends</CardDescription>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">On-Time Delivery Rate</div>
                  <div className="text-xs text-foreground/70">Last 30 days</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-green-600">94.5%</div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Average Lead Time</div>
                  <div className="text-xs text-foreground/70">Order to delivery</div>
                </div>
              </div>
              <div className="text-2xl font-bold">18 days</div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Package className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-medium">Total Orders This Month</div>
                  <div className="text-xs text-foreground/70">Aug 2026</div>
                </div>
              </div>
              <div className="text-2xl font-bold">24</div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Monthly Revenue</div>
                  <div className="text-xs text-foreground/70">Aug 2026</div>
                </div>
              </div>
              <div className="text-2xl font-bold">₹43.5L</div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle>Recent Order Activity</CardTitle>
          <CardDescription>Latest order updates and changes</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              {
                action: "Order confirmed",
                order: "ORD-2024-0902",
                client: "Tata Motors Ltd",
                time: "2 hours ago",
                icon: CheckCircle
              },
              {
                action: "Delivery scheduled",
                order: "ORD-2024-0898",
                client: "Bajaj Auto Ltd",
                time: "5 hours ago",
                icon: Truck
              },
              {
                action: "Quality check passed",
                order: "ORD-2024-0890",
                client: "Mahindra & Mahindra",
                time: "1 day ago",
                icon: CheckCircle
              },
              {
                action: "Production started",
                order: "ORD-2024-0901",
                client: "Kirloskar Electric",
                time: "2 days ago",
                icon: Package
              },
              {
                action: "Order received",
                order: "ORD-2024-0903",
                client: "New Client Request",
                time: "3 days ago",
                icon: ShoppingCart
              }
            ].map((activity) => (
              <div key={activity.order} className="flex items-center gap-3 p-3 rounded-lg bg-background/5/5 border border-border">
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                  activity.action === "Quality check passed" || activity.action === "Order confirmed" ? "bg-green-100" :
                  activity.action === "Delivery scheduled" ? "bg-blue-100" :
                  activity.action === "Production started" ? "bg-purple-100" :
                  "bg-gray-100"
                }`}>
                  <activity.icon className={`w-4 h-4 ${
                    activity.action === "Quality check passed" || activity.action === "Order confirmed" ? "text-green-600" :
                    activity.action === "Delivery scheduled" ? "text-blue-600" :
                    activity.action === "Production started" ? "text-purple-600" :
                    "text-gray-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{activity.action}</div>
                  <div className="text-xs text-foreground/70">{activity.order} • {activity.client}</div>
                </div>
                <div className="text-xs text-foreground/70">{activity.time}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}