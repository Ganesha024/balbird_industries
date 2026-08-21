"use client";

import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ClipboardList, Plus, Search, Filter, Clock, CheckCircle, AlertTriangle, Edit, Eye, Trash2 } from "lucide-react";

export default function ClientActiveRequirements() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Active Requirements</h1>
          <p className="text-sm text-foreground/70">
            Manage and track your posted manufacturing requirements.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            <Search className="w-4 h-4 mr-2" /> Search
          </Button>
          <Button className="shrink-0">
            <Plus className="w-4 h-4 mr-2" /> Add Requirement
          </Button>
        </div>
      </div>

      {/* Requirements Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <ClipboardList className="h-5 w-5 text-accent" />
            </div>
            <div>
              <div className="text-2xl font-bold">8</div>
              <div className="text-xs text-foreground/70">Total Active</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">5</div>
              <div className="text-xs text-foreground/70">Supplier Matched</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">2</div>
              <div className="text-xs text-foreground/70">In Review</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">1</div>
              <div className="text-xs text-foreground/70">Needs Attention</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Filter Section */}
      <Card className="p-4 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 w-full flex items-center gap-2 bg-background/5/5 rounded-lg px-3 py-2 border border-border">
            <Search className="h-4 w-4 text-foreground/70" />
            <input
              type="text"
              placeholder="Search requirements by part name, ID, or client..."
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
          <Button variant="outline" className="w-full sm:w-auto shrink-0">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
        </div>
      </Card>

      {/* Active Requirements List */}
      <div className="space-y-4">
        {[
          {
            id: "REQ-2024-001",
            part: "EV Motor Housing",
            quantity: "5,000 units",
            deadline: "Aug 15, 2026",
            budget: "$125,000",
            status: "Supplier Matched",
            matches: 3,
            priority: "High",
            posted: "Jul 28, 2026",
            specifications: ["CNC Machining", "Aluminum Alloy", "ISO 9001 Certified"]
          },
          {
            id: "REQ-2024-002",
            part: "Chassis Frame Components",
            quantity: "3,200 units",
            deadline: "Aug 20, 2026",
            budget: "$95,000",
            status: "In Review",
            matches: 5,
            priority: "Medium",
            posted: "Jul 30, 2026",
            specifications: ["Heavy Fabrication", "Steel Welding", "Surface Treatment"]
          },
          {
            id: "REQ-2024-003",
            part: "Precision Gearbox Parts",
            quantity: "8,500 units",
            deadline: "Aug 10, 2026",
            budget: "$180,000",
            status: "Quote Received",
            matches: 2,
            priority: "High",
            posted: "Jul 25, 2026",
            specifications: ["Precision Grinding", "Heat Treatment", "Dimensional Inspection"]
          },
          {
            id: "REQ-2024-004",
            part: "Battery Tray Assembly",
            quantity: "2,000 units",
            deadline: "Aug 25, 2026",
            budget: "$45,000",
            status: "Supplier Matched",
            matches: 4,
            priority: "Medium",
            posted: "Aug 01, 2026",
            specifications: ["Assembly", "Electrical Safety", "Packaging"]
          },
          {
            id: "REQ-2024-005",
            part: "Suspension Components",
            quantity: "4,500 units",
            deadline: "Aug 18, 2026",
            budget: "$85,000",
            status: "Needs Attention",
            matches: 1,
            priority: "Low",
            posted: "Aug 02, 2026",
            specifications: ["CNC Machining", "Surface Treatment", "Quality Inspection"]
          },
          {
            id: "REQ-2024-006",
            part: "Brake System Parts",
            quantity: "6,000 units",
            deadline: "Sep 05, 2026",
            budget: "$110,000",
            status: "In Review",
            matches: 6,
            priority: "High",
            posted: "Aug 03, 2026",
            specifications: ["Precision Machining", "Heat Treatment", "Certification Required"]
          },
          {
            id: "REQ-2024-007",
            part: "Electrical Connector Housings",
            quantity: "10,000 units",
            deadline: "Sep 10, 2026",
            budget: "$35,000",
            status: "Supplier Matched",
            matches: 3,
            priority: "Medium",
            posted: "Aug 04, 2026",
            specifications: ["Injection Molding", "Plastic Materials", "Electrical Testing"]
          },
          {
            id: "REQ-2024-008",
            part: "Dashboard Components",
            quantity: "1,500 units",
            deadline: "Sep 15, 2026",
            budget: "$75,000",
            status: "Quote Received",
            matches: 2,
            priority: "Low",
            posted: "Aug 05, 2026",
            specifications: ["Assembly", "Electronics Integration", "Quality Control"]
          }
        ].map((req) => (
          <Card key={req.id} className="p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-bold text-accent">{req.id}</span>
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                    req.priority === "High" ? "bg-red-100 text-red-700" :
                    req.priority === "Medium" ? "bg-orange-100 text-orange-700" :
                    "bg-green-100 text-green-700"
                  }`}>
                    {req.priority} Priority
                  </span>
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                    req.status === "Supplier Matched" ? "bg-green-100 text-green-700" :
                    req.status === "In Review" ? "bg-blue-100 text-blue-700" :
                    req.status === "Quote Received" ? "bg-purple-100 text-purple-700" :
                    "bg-red-100 text-red-700"
                  }`}>
                    {req.status}
                  </span>
                </div>
                
                <h3 className="font-bold text-lg mb-2">{req.part}</h3>
                <p className="text-sm text-foreground/70 mb-4">Posted: {req.posted}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-foreground/70 mb-1">Quantity</div>
                    <div className="text-sm font-medium">{req.quantity}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground/70 mb-1">Budget</div>
                    <div className="text-sm font-medium">{req.budget}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground/70 mb-1">Deadline</div>
                    <div className="text-sm font-medium">{req.deadline}</div>
                  </div>
                  <div>
                    <div className="text-xs text-foreground/70 mb-1">Supplier Matches</div>
                    <div className="text-sm font-medium text-accent">{req.matches}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs text-foreground/70 mb-2">Specifications</div>
                  <div className="flex flex-wrap gap-2">
                    {req.specifications.map((spec, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded-full bg-muted border border-border">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex lg:flex-col gap-2 lg:w-40">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-2" /> View
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-4 w-4 mr-2" /> Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1 text-red-600 border-red-200 hover:bg-red-50">
                  <Trash2 className="h-4 w-4 mr-2" /> Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State (hidden when there are requirements) */}
      {false && (
        <Card className="p-12 text-center">
          <ClipboardList className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">No Active Requirements</h3>
          <p className="text-sm text-foreground/70 mb-4">
            You haven't posted any manufacturing requirements yet.
          </p>
          <Button>
            <Plus className="h-4 w-4 mr-2" /> Post Your First Requirement
          </Button>
        </Card>
      )}
    </>
  );
}