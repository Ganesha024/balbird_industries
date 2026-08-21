"use client";

import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Package, Calendar, DollarSign, Clock, Check, X, Eye, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function ManufacturerProjectOrders() {
  const [orders, setOrders] = useState([
    {
      id: "ORD-2024-007",
      client: "Tata Motors",
      project: "EV Motor Housing Production",
      quantity: "5,000 units",
      deadline: "Aug 15, 2026",
      budget: "$125,000",
      status: "pending",
      priority: "High",
      requirements: ["CNC Machining", "Quality Certification ISO 9001", "Traceability Documentation"]
    },
    {
      id: "ORD-2024-008",
      client: "Mahindra & Mahindra",
      project: "Chassis Components Manufacturing",
      quantity: "3,200 units",
      deadline: "Aug 20, 2026",
      budget: "$95,000",
      status: "pending",
      priority: "Medium",
      requirements: ["Heavy Fabrication", "Welding Certification", "Material Testing"]
    },
    {
      id: "ORD-2024-009",
      client: "Bajaj Auto",
      project: "Precision Gearbox Parts",
      quantity: "8,500 units",
      deadline: "Aug 10, 2026",
      budget: "$180,000",
      status: "pending",
      priority: "High",
      requirements: ["Precision Grinding", "Heat Treatment", "Dimensional Inspection"]
    },
    {
      id: "ORD-2024-010",
      client: "Ather Energy",
      project: "Battery Tray Assembly",
      quantity: "2,000 units",
      deadline: "Aug 25, 2026",
      budget: "$45,000",
      status: "pending",
      priority: "Medium",
      requirements: ["Assembly Line", "Electrical Safety Testing", "Packaging"]
    }
  ]);

  const handleAccept = (orderId: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: "accepted" as const } : order
    ));
  };

  const handleDecline = (orderId: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: "declined" as const } : order
    ));
  };

  const pendingOrders = orders.filter(order => order.status === "pending");
  const acceptedOrders = orders.filter(order => order.status === "accepted");
  const declinedOrders = orders.filter(order => order.status === "declined");

  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Project Orders</h1>
          <p className="text-sm text-foreground/70">
            Review and manage upcoming project orders. Accept or decline based on capacity.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            Order History
          </Button>
          <Button className="shrink-0">
            Capacity Planning
          </Button>
        </div>
      </div>

      {/* Order Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Package className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{pendingOrders.length}</div>
              <div className="text-xs text-foreground/70">Pending Review</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
              <Check className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{acceptedOrders.length}</div>
              <div className="text-xs text-foreground/70">Accepted</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center">
              <X className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{declinedOrders.length}</div>
              <div className="text-xs text-foreground/70">Declined</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-accent" />
            </div>
            <div>
              <div className="text-2xl font-bold">$445K</div>
              <div className="text-xs text-foreground/70">Total Value</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Pending Orders Section */}
      {pendingOrders.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            Pending Orders ({pendingOrders.length})
          </h2>
          <div className="space-y-4">
            {pendingOrders.map((order) => (
              <Card key={order.id} className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-accent">{order.id}</span>
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                        order.priority === "High" ? "bg-red-100 text-red-700" :
                        "bg-orange-100 text-orange-700"
                      }`}>
                        {order.priority} Priority
                      </span>
                      <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                        Awaiting Response
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2">{order.project}</h3>
                    <p className="text-sm text-foreground/70 mb-4">Client: {order.client}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-xs text-foreground/70 mb-1">Quantity</div>
                        <div className="text-sm font-medium">{order.quantity}</div>
                      </div>
                      <div>
                        <div className="text-xs text-foreground/70 mb-1">Budget</div>
                        <div className="text-sm font-medium">{order.budget}</div>
                      </div>
                      <div>
                        <div className="text-xs text-foreground/70 mb-1">Deadline</div>
                        <div className="text-sm font-medium">{order.deadline}</div>
                      </div>
                      <div>
                        <div className="text-xs text-foreground/70 mb-1">Response Due</div>
                        <div className="text-sm font-medium text-orange-600">Aug 08, 2026</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs text-foreground/70 mb-2">Requirements</div>
                      <div className="flex flex-wrap gap-2">
                        {order.requirements.map((req, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded-full bg-muted border border-border">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex lg:flex-col gap-2 lg:w-48">
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-700"
                      onClick={() => handleAccept(order.id)}
                    >
                      <Check className="h-4 w-4 mr-2" /> Accept Order
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
                      onClick={() => handleDecline(order.id)}
                    >
                      <X className="h-4 w-4 mr-2" /> Decline
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" /> View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Accepted Orders Section */}
      {acceptedOrders.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Check className="h-5 w-5 text-green-600" />
            Accepted Orders ({acceptedOrders.length})
          </h2>
          <div className="space-y-3">
            {acceptedOrders.map((order) => (
              <Card key={order.id} className="p-4 border-green-200 bg-green-50/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold">{order.project}</div>
                      <div className="text-sm text-foreground/70">{order.client} • {order.budget}</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" /> View Project
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Declined Orders Section */}
      {declinedOrders.length > 0 && (
        <div>
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <X className="h-5 w-5 text-red-600" />
            Declined Orders ({declinedOrders.length})
          </h2>
          <div className="space-y-3">
            {declinedOrders.map((order) => (
              <Card key={order.id} className="p-4 border-red-200 bg-red-50/50 opacity-75">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center">
                      <X className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <div className="font-bold">{order.project}</div>
                      <div className="text-sm text-foreground/70">{order.client} • {order.budget}</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <AlertCircle className="h-4 w-4 mr-2" /> View Reason
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {pendingOrders.length === 0 && acceptedOrders.length === 0 && declinedOrders.length === 0 && (
        <Card className="p-12 text-center">
          <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">No Project Orders</h3>
          <p className="text-sm text-foreground/70">
            You don't have any pending project orders at the moment.
          </p>
        </Card>
      )}
    </>
  );
}