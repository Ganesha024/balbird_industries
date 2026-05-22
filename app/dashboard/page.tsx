"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { useEffect, useState } from "react";
import {
  Activity,
  FolderOpen,
  ClipboardList,
  Bell,
  Plus,
  HelpCircle,
  Network,
  MessageCircle,
  Shield,
  Workflow,
  Factory,
  Users,
} from "lucide-react";

export default function DashboardPage() {
  const [userName, setUserName] = useState<string>("Loading...");

  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      setUserName(JSON.parse(storedUser).name);
    } else {
      setUserName("Ganesh");
    }
  }, []);

  const quickStats = [
    { title: "Active Projects", value: "4", change: "+1", icon: FolderOpen },
    { title: "Pending Matches", value: "7", change: "+3", icon: Network },
    { title: "Execution Tasks", value: "12", change: "-2", icon: ClipboardList },
    { title: "Notifications", value: "3", change: "0", icon: Bell },
  ];

  const recentActivities = [
    { id: 1, action: "Project scoped", detail: "EV motor housing — cross-border consortium", time: "2 hours ago" },
    { id: 2, action: "Capability matched", detail: "CNC manufacturer verified for rail components", time: "5 hours ago" },
    { id: 3, action: "Traceability updated", detail: "Quality documentation submitted for review", time: "1 day ago" },
    { id: 4, action: "Execution cell assigned", detail: "Student team onboarded for BD outreach", time: "2 days ago" },
  ];

  const operationalVerticals = [
    { icon: MessageCircle, name: "Communication", desc: "Network interaction & chatbot", status: "Active" },
    { icon: ClipboardList, name: "Task Management", desc: "Execution tracking & milestones", status: "Active" },
    { icon: Network, name: "Matchmaking", desc: "AI-assisted capability matching", status: "Active" },
    { icon: Shield, name: "Engineering", desc: "Technical validation & QA", status: "Active" },
  ];

  return (
    <>
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Welcome back, {userName}!</h1>
        <p className="text-sm text-foreground/70">
          Here&apos;s your execution overview — projects, matches, and operational status.
        </p>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {quickStats.map((stat, index) => (
          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <stat.icon className="h-4 w-4 text-accent" />
              </div>
              <span className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-600' : stat.change.startsWith('-') ? 'text-red-600' : 'text-foreground/70'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-xl font-bold">{stat.value}</div>
            <div className="text-xs text-foreground/70">{stat.title}</div>
          </Card>
        ))}
      </div>

      {/* Operational Verticals Status */}
      <Card className="p-5 mb-6">
        <CardTitle>Operational Verticals</CardTitle>
        <CardDescription>Status of core operational systems</CardDescription>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {operationalVerticals.map((v, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-background/5/5 border border-border">
              <div className="h-10 w-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                <v.icon className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">{v.name}</p>
                <p className="text-xs text-foreground/70 truncate">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Activity + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="p-5">
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest execution updates</CardDescription>
          <div className="mt-4 space-y-3">
            {recentActivities.map(activity => (
              <div key={activity.id} className="flex items-start gap-3 p-3 rounded-xl bg-background/5/5 border border-border">
                <Activity className="h-4 w-4 text-accent mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate">{activity.action}</p>
                  <p className="text-xs text-foreground/70 truncate">{activity.detail}</p>
                  <p className="text-xs text-foreground/70 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Frequently used workflows</CardDescription>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button className="h-auto p-4 flex flex-col gap-2 rounded-xl">
              <Plus className="h-5 w-5" />
              <span className="text-sm font-medium">New Project</span>
            </Button>
            <Button className="h-auto p-4 flex flex-col gap-2 rounded-xl bg-background/5/10 text-foreground hover:bg-background/5/20">
              <Network className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Find Partner</span>
            </Button>
            <Button className="h-auto p-4 flex flex-col gap-2 rounded-xl bg-background/5/10 text-foreground hover:bg-background/5/20">
              <Workflow className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Track Tasks</span>
            </Button>
            <Button className="h-auto p-4 flex flex-col gap-2 rounded-xl bg-background/5/10 text-foreground hover:bg-background/5/20">
              <HelpCircle className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Get Support</span>
            </Button>
          </div>
        </Card>
      </div>

      {/* System Updates */}
      <Card className="p-5">
        <CardTitle>Platform Updates</CardTitle>
        <CardDescription>Latest ecosystem updates and announcements</CardDescription>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
            <div className="flex items-center gap-2 mb-2">
              <Factory className="h-4 w-4 text-accent" />
              <span className="font-bold text-sm">Matchmaking Engine Updated</span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">AI-assisted capability matching now considers certification compatibility and geographic proximity.</p>
            <p className="text-xs text-foreground/70 mt-3 font-medium">2 days ago</p>
          </div>
          <div className="p-4 rounded-xl bg-background/5/5 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-foreground/70" />
              <span className="font-bold text-sm">Traceability Module v2</span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">End-to-end documentation flow now supports IATF 16949 and AS9100 compliance templates.</p>
            <p className="text-xs text-foreground/70 mt-3 font-medium">5 days ago</p>
          </div>
        </div>
      </Card>

      {/* Floating Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button className="rounded-full h-14 w-14 shadow-lg shadow-accent/20 flex items-center justify-center p-0">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </>
  );
}
