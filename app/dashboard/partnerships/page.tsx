"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Handshake, TrendingUp, Target, Globe, CheckCircle, Clock, Plus, Filter, MessageCircle } from "lucide-react";

export default function PartnershipsPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Strategic Partnerships</h1>
          <p className="text-sm text-foreground/70">
            Manage strategic alliances and joint venture partnerships.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
          <Button className="shrink-0">
            <Plus className="w-4 h-4 mr-2" /> New Partnership
          </Button>
        </div>
      </div>

      {/* Partnership Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Handshake className="w-5 h-5 text-accent" />
            <span className="text-xs text-green-600 font-medium">+1</span>
          </div>
          <div className="text-2xl font-bold">12</div>
          <div className="text-xs text-foreground/70">Active Partnerships</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-xs text-green-600 font-medium">+18%</span>
          </div>
          <div className="text-2xl font-bold">₹8.5Cr</div>
          <div className="text-xs text-foreground/70">Partnership Value</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-xs text-blue-600 font-medium">On Track</span>
          </div>
          <div className="text-2xl font-bold">94%</div>
          <div className="text-xs text-foreground/70">Goal Achievement</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Globe className="w-5 h-5 text-purple-600" />
            <span className="text-xs text-purple-600 font-medium">Global</span>
          </div>
          <div className="text-2xl font-bold">5</div>
          <div className="text-xs text-foreground/70">Countries Covered</div>
        </Card>
      </div>

      {/* Active Partnerships */}
      <Card className="p-6 mb-6">
        <CardTitle>Active Strategic Partnerships</CardTitle>
        <CardDescription>Current joint ventures and strategic alliances</CardDescription>
        
        <div className="mt-6 space-y-4">
          {[
            {
              partner: "KPMG India",
              type: "Consulting Partnership",
              focus: "Manufacturing Strategy & Supply Chain",
              startDate: "Jan 15, 2026",
              value: "₹2.5Cr",
              progress: 78,
              status: "Active",
              milestones: "6/8 completed",
              nextReview: "Sep 15, 2026"
            },
            {
              partner: "Deloitte Touche Tohmatsu",
              type: "Advisory Partnership", 
              focus: "Quality Assurance & Compliance",
              startDate: "Mar 22, 2026",
              value: "₹1.8Cr",
              progress: 62,
              status: "Active",
              milestones: "5/8 completed",
              nextReview: "Oct 10, 2026"
            },
            {
              partner: "Boston Consulting Group",
              type: "Strategy Consulting",
              focus: "Market Expansion & Digital Manufacturing",
              startDate: "Apr 10, 2026",
              value: "₹3.2Cr",
              progress: 45,
              status: "Active",
              milestones: "4/9 completed",
              nextReview: "Nov 20, 2026"
            }
          ].map((partnership) => (
            <div key={partnership.partner} className="p-4 rounded-xl border border-border hover:bg-background/5/5 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-base">{partnership.partner}</span>
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                      {partnership.status}
                    </span>
                  </div>
                  <div className="text-sm text-foreground/70 mb-1">{partnership.type}</div>
                  <div className="text-sm text-foreground/70">Focus: {partnership.focus}</div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-right">
                    <div className="text-foreground/70">Started</div>
                    <div className="font-medium">{partnership.startDate}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-foreground/70">Value</div>
                    <div className="font-medium">{partnership.value}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-foreground/70">Progress</div>
                    <div className="font-medium">{partnership.progress}%</div>
                  </div>
                  <div className="text-right">
                    <div className="text-foreground/70">Milestones</div>
                    <div className="font-medium">{partnership.milestones}</div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-foreground/70">Partnership Progress</span>
                  <span className="font-medium">{partnership.progress}%</span>
                </div>
                <div className="w-full bg-background/5/10 rounded-full h-2 overflow-hidden border border-border/50">
                  <div className="bg-accent h-full rounded-full transition-all" style={{ width: `${partnership.progress}%` }} />
                </div>
              </div>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-border/50">
                <div className="text-xs text-foreground/70">
                  Next Review: {partnership.nextReview}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="h-8">
                    <MessageCircle className="w-3 h-3 mr-1.5" /> Contact
                  </Button>
                  <Button size="sm" className="h-8">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Partnership Opportunities & Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <CardTitle>Partnership Opportunities</CardTitle>
          <CardDescription>Potential strategic alliances under consideration</CardDescription>
          
          <div className="mt-6 space-y-3">
            {[
              {
                company: "Ernst & Young",
                type: "Professional Services",
                focus: "Financial Advisory & M&A Support",
                stage: "Negotiation",
                estimatedValue: "₹1.5Cr"
              },
              {
                company: "McKinsey & Company",
                type: "Strategy Consulting",
                focus: "Digital Transformation & Operations",
                stage: "Proposal Review",
                estimatedValue: "₹2.8Cr"
              },
              {
                company: "Accenture India",
                type: "Technology Partnership",
                focus: "Digital Manufacturing & AI Integration",
                stage: "Initial Discussion",
                estimatedValue: "₹3.5Cr"
              }
            ].map((opportunity) => (
              <div key={opportunity.company} className="flex items-start gap-3 p-3 rounded-lg bg-background/5/5 border border-border">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Handshake className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{opportunity.company}</div>
                  <div className="text-xs text-foreground/70">{opportunity.type}</div>
                  <div className="text-xs text-foreground/70 mt-1">{opportunity.focus}</div>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                    opportunity.stage === "Negotiation" ? "bg-orange-100 text-orange-700" :
                    opportunity.stage === "Proposal Review" ? "bg-blue-100 text-blue-700" :
                    "bg-gray-100 text-gray-700"
                  }`}>
                    {opportunity.stage}
                  </div>
                  <div className="text-xs text-foreground/70 mt-1">{opportunity.estimatedValue}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle>Partnership Performance</CardTitle>
          <CardDescription>Key metrics and partnership effectiveness</CardDescription>
          
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Partnership Success Rate</div>
                  <div className="text-xs text-foreground/70">Last 24 months</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-green-600">92%</div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Revenue Impact</div>
                  <div className="text-xs text-foreground/70">Partnership-generated revenue</div>
                </div>
              </div>
              <div className="text-2xl font-bold">₹4.2Cr</div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-medium">Strategic Goals Met</div>
                  <div className="text-xs text-foreground/70">Partnership objectives achieved</div>
                </div>
              </div>
              <div className="text-2xl font-bold">87%</div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-background/5/5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Avg Partnership Duration</div>
                  <div className="text-xs text-foreground/70">Active partnerships</div>
                </div>
              </div>
              <div className="text-2xl font-bold">18 months</div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}