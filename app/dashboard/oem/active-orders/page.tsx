"use client";

import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ShoppingCart, Eye, MessageCircle, FileText, Calendar, DollarSign, Factory, TrendingUp, AlertTriangle, CheckCircle, Clock, MapPin } from "lucide-react";

export default function ClientActiveOrders() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Active Orders</h1>
          <p className="text-sm text-foreground/70">
            Track your running manufacturing projects and their status.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            Order History
          </Button>
          <Button className="shrink-0">
            Track Shipments
          </Button>
        </div>
      </div>

      {/* Orders Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 text-accent" />
            </div>
            <div>
              <div className="text-2xl font-bold">15</div>
              <div className="text-xs text-foreground/70">Active Orders</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-foreground/70">On Track</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">2</div>
              <div className="text-xs text-foreground/70">At Risk</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">$890K</div>
              <div className="text-xs text-foreground/70">Total Value</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Active Orders */}
      <div className="space-y-4">
        {[
          {
            order: "ORD-452",
            item: "EV Motor Housing",
            supplier: "Precision Auto Components Ltd",
            quantity: "5,000 units",
            value: "$125,000",
            progress: 78,
            status: "On Track",
            deadline: "Aug 15, 2026",
            started: "Jul 15, 2026",
            location: "Pune, Maharashtra",
            lastUpdate: "Production phase - CNC machining complete"
          },
          {
            order: "ORD-453",
            item: "Chassis Components",
            supplier: "Pune Engineering Works",
            quantity: "3,200 units",
            value: "$95,000",
            progress: 45,
            status: "At Risk",
            deadline: "Aug 20, 2026",
            started: "Jul 20, 2026",
            location: "Pune, Maharashtra",
            lastUpdate: "Delay in raw material supply"
          },
          {
            order: "ORD-454",
            item: "Gearbox Parts",
            supplier: "Sunrise Automotive Parts",
            quantity: "8,500 units",
            value: "$180,000",
            progress: 92,
            status: "Nearing Complete",
            deadline: "Aug 10, 2026",
            started: "Jul 10, 2026",
            location: "Chennai, Tamil Nadu",
            lastUpdate: "Final quality inspection in progress"
          },
          {
            order: "ORD-455",
            item: "Battery Tray Assembly",
            supplier: "Bharat Electronics Manufacturing",
            quantity: "2,000 units",
            value: "$45,000",
            progress: 30,
            status: "On Track",
            deadline: "Aug 25, 2026",
            started: "Jul 25, 2026",
            location: "Bangalore, Karnataka",
            lastUpdate: "Assembly line setup complete"
          },
          {
            order: "ORD-456",
            item: "Suspension Components",
            supplier: "Metro Manufacturing Solutions",
            quantity: "4,500 units",
            value: "$85,000",
            progress: 65,
            status: "On Track",
            deadline: "Aug 18, 2026",
            started: "Jul 18, 2026",
            location: "Gurgaon, Haryana",
            lastUpdate: "Surface treatment in progress"
          },
          {
            order: "ORD-457",
            item: "Brake System Parts",
            supplier: "Elite Precision Engineering",
            quantity: "6,000 units",
            value: "$110,000",
            progress: 15,
            status: "Just Started",
            deadline: "Sep 05, 2026",
            started: "Aug 05, 2026",
            location: "Coimbatore, Tamil Nadu",
            lastUpdate: "Raw material procurement initiated"
          },
          {
            order: "ORD-458",
            item: "Electrical Connector Housings",
            supplier: "Precision Auto Components Ltd",
            quantity: "10,000 units",
            value: "$35,000",
            progress: 50,
            status: "At Risk",
            deadline: "Sep 10, 2026",
            started: "Jul 30, 2026",
            location: "Pune, Maharashtra",
            lastUpdate: "Tooling modification required"
          },
          {
            order: "ORD-459",
            item: "Dashboard Components",
            supplier: "Sunrise Automotive Parts",
            quantity: "1,500 units",
            value: "$75,000",
            progress: 85,
            status: "Nearing Complete",
            deadline: "Sep 15, 2026",
            started: "Jul 08, 2026",
            location: "Chennai, Tamil Nadu",
            lastUpdate: "Final assembly and testing"
          }
        ].map((order) => (
          <Card key={order.order} className="p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-bold text-accent">{order.order}</span>
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                    order.status === "On Track" ? "bg-green-100 text-green-700" :
                    order.status === "At Risk" ? "bg-red-100 text-red-700" :
                    order.status === "Nearing Complete" ? "bg-blue-100 text-blue-700" :
                    "bg-purple-100 text-purple-700"
                  }`}>
                    {order.status}
                  </span>
                </div>
                
                <h3 className="font-bold text-lg mb-2">{order.item}</h3>
                <div className="flex items-center gap-2 text-sm text-foreground/70 mb-4">
                  <Factory className="h-4 w-4" />
                  {order.supplier}
                  <span>•</span>
                  <MapPin className="h-4 w-4" />
                  {order.location}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-foreground/70 mb-1">Quantity</div>
                    <div className="text-sm font-medium">{order.quantity}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground/70 mb-1">Order Value</div>
                    <div className="text-sm font-medium">{order.value}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground/70 mb-1">Deadline</div>
                    <div className="text-sm font-medium">{order.deadline}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground/70 mb-1">Started</div>
                    <div className="text-sm font-medium">{order.started}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="text-foreground/70">Progress</span>
                    <span className="font-medium">{order.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        order.status === "At Risk" ? "bg-red-500" :
                        order.status === "Nearing Complete" ? "bg-blue-500" :
                        "bg-accent"
                      }`} 
                      style={{ width: `${order.progress}%` }} 
                    />
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-background/5 border border-border">
                  <div className="flex items-center gap-2 text-xs">
                    <Clock className="h-3 w-3 text-foreground/70" />
                    <span className="text-foreground/70">Last Update:</span>
                    <span className="font-medium">{order.lastUpdate}</span>
                  </div>
                </div>
              </div>

              <div className="flex lg:flex-col gap-2 lg:w-48">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-2" /> View Details
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <MessageCircle className="h-4 w-4 mr-2" /> Contact
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <FileText className="h-4 w-4 mr-2" /> Documents
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <TrendingUp className="h-4 w-4 mr-2" /> Track
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State (hidden when there are orders) */}
      {false && (
        <Card className="p-12 text-center">
          <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">No Active Orders</h3>
          <p className="text-sm text-foreground/70 mb-4">
            You don't have any active manufacturing orders at the moment.
          </p>
          <Button>
            Find Suppliers
          </Button>
        </Card>
      )}
    </>
  );
}