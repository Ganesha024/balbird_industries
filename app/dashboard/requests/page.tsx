"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FileText, Send, Clock, CheckCircle, Factory, Users, AlertTriangle } from "lucide-react";

export default function RequestsPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Manufacturing Requests</h1>
          <p className="text-sm text-foreground/70">
            Manage production requests, capacity inquiries, and approvals.
          </p>
        </div>
        <Button className="shrink-0">
          <Send className="w-4 h-4 mr-2" /> Create Request
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-5 border-t-4 border-t-accent">
          <FileText className="w-6 h-6 text-accent mb-3" />
          <h3 className="font-bold text-base text-foreground mb-1">Pending Proposals</h3>
          <p className="text-sm text-foreground/70 mb-4">3 capacity requests awaiting response</p>
          <Button size="sm" className="w-full font-medium">Review Requests</Button>
        </Card>

        <Card className="p-5 border-t-4 border-t-blue-500">
          <Clock className="w-6 h-6 text-blue-600 mb-3" />
          <h3 className="font-bold text-base text-foreground mb-1">In Negotiation</h3>
          <p className="text-sm text-foreground/70 mb-4">5 projects currently being negotiated</p>
          <Button variant="outline" size="sm" className="w-full font-medium">View Status</Button>
        </Card>

        <Card className="p-5 border-t-4 border-t-green-500">
          <CheckCircle className="w-6 h-6 text-green-600 mb-3" />
          <h3 className="font-bold text-base text-foreground mb-1">Confirmed Orders</h3>
          <p className="text-sm text-foreground/70 mb-4">12 orders confirmed this week</p>
          <Button variant="ghost" size="sm" className="w-full border border-border font-medium">View Orders</Button>
        </Card>
      </div>

      <Card className="p-6 mb-6">
        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border/50 pb-2">Recent Capacity Requests</h3>
        <div className="space-y-3">
          {[
            {
              company: "Tata Motors Ltd",
              project: "EV Motor Housing Production",
              capacity: "5,000 units/month",
              timeline: "Aug - Dec 2026",
              status: "Pending Response",
              priority: "High"
            },
            {
              company: "Mahindra & Mahindra",
              project: "Chassis Frame Components",
              capacity: "3,200 units/month",
              timeline: "Sep 2026 - Jan 2027",
              status: "Under Review",
              priority: "Medium"
            },
            {
              company: "Bajaj Auto Ltd",
              project: "Gearbox Components",
              capacity: "8,500 units/month",
              timeline: "Oct 2026 - Mar 2027",
              status: "Negotiation",
              priority: "Medium"
            }
          ].map((request, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-background/5/5 border border-border hover:bg-background/5/10 transition-colors">
              <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Factory className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm">{request.company}</span>
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                    request.priority === "High" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                  }`}>
                    {request.priority}
                  </span>
                </div>
                <div className="text-sm text-foreground/70">{request.project}</div>
                <div className="text-xs text-foreground/70 mt-1">{request.capacity} • {request.timeline}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  request.status === "Pending Response" ? "bg-orange-100 text-orange-700" :
                  request.status === "Under Review" ? "bg-blue-100 text-blue-700" :
                  "bg-purple-100 text-purple-700"
                }`}>
                  {request.status}
                </span>
                <Button size="sm" variant="outline" className="h-8">Respond</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border/50 pb-2">Request Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-background/5/5 rounded-xl border border-border">
            <span className="text-xs text-foreground/70 uppercase tracking-wider font-semibold block mb-1">Total Requests</span>
            <span className="text-2xl font-bold text-foreground">47</span>
          </div>
          <div className="p-4 bg-background/5/5 rounded-xl border border-border">
            <span className="text-xs text-foreground/70 uppercase tracking-wider font-semibold block mb-1">This Week</span>
            <span className="text-2xl font-bold text-accent">+8</span>
          </div>
          <div className="p-4 bg-red-50 rounded-xl border border-red-100">
            <span className="text-xs text-red-600 uppercase tracking-wider font-semibold block mb-1">Urgent Response</span>
            <span className="text-2xl font-bold text-red-600">2</span>
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-100">
            <span className="text-xs text-green-600 uppercase tracking-wider font-semibold block mb-1">Conversion Rate</span>
            <span className="text-2xl font-bold text-green-600">68%</span>
          </div>
        </div>
      </Card>
    </>
  );
}
