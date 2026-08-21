"use client";

import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/Button";
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
  Target,
  BarChart3,
  FileText,
  Store,
  GraduationCap,
  Globe,
  ShoppingCart,
  Building2,
  Calendar,
  Handshake,
  Package,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { getCurrentUser, getUserRole, roleLabels, type UserRole } from "@/lib/auth";

interface DashboardStats {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

interface ActivityItem {
  id: number;
  action: string;
  detail: string;
  time: string;
}

const roleStats: Record<UserRole, DashboardStats[]> = {
  manufacturer: [
    { title: "Active Projects", value: "8", change: "+2", icon: FolderOpen },
    { title: "Production Orders", value: "12", change: "+3", icon: Factory },
    { title: "Quality Score", value: "99.2%", change: "+0.5%", icon: Shield },
    { title: "Capacity Utilization", value: "85%", change: "+8%", icon: BarChart3 },
  ],
  oem: [
    { title: "Active Requirements", value: "8", change: "+2", icon: ClipboardList },
    { title: "Supplier Matches", value: "12", change: "+3", icon: Building2 },
    { title: "Active Orders", value: "15", change: "+4", icon: ShoppingCart },
    { title: "On-Time Delivery", value: "94%", change: "+2%", icon: BarChart3 },
  ],
  association: [
    { title: "Active Programs", value: "6", change: "+1", icon: Target },
    { title: "Member Organizations", value: "45", change: "+2", icon: Users },
    { title: "Upcoming Events", value: "8", change: "+1", icon: Calendar },
    { title: "Event Attendance", value: "1,245", change: "+85", icon: Users },
  ],
  strategic_partner: [
    { title: "Active Partnerships", value: "5", change: "+1", icon: Handshake },
    { title: "Partnership Value", value: "₹8.5Cr", change: "+₹1.2Cr", icon: BarChart3 },
    { title: "Program Impact", value: "12", change: "+2", icon: Target },
    { title: "Goal Achievement", value: "94%", change: "+3%", icon: BarChart3 },
  ],
  retailer: [
    { title: "Active Orders", value: "28", change: "+5", icon: ShoppingCart },
    { title: "Inventory Value", value: "₹4.2Cr", change: "+₹0.8Cr", icon: Package },
    { title: "Suppliers", value: "24", change: "+2", icon: Building2 },
    { title: "Order Fulfillment", value: "94%", change: "+2%", icon: BarChart3 },
  ],
  student: [
    { title: "Active Programs", value: "3", change: "+1", icon: Target },
    { title: "Task Assignments", value: "12", change: "+4", icon: ClipboardList },
    { title: "Learning Hours", value: "42h", change: "+8h", icon: BookOpen },
    { title: "Certifications", value: "5", change: "+1", icon: GraduationCap },
  ],
};

const roleActivities: Record<UserRole, ActivityItem[]> = {
  manufacturer: [
    { id: 1, action: "Production milestone", detail: "Batch #452 completed with 99.8% yield", time: "2 hours ago" },
    { id: 2, action: "Quality check passed", detail: "IATF 16949 compliance review completed", time: "5 hours ago" },
    { id: 3, action: "New order received", detail: "EV motor housing order from Tata Motors", time: "1 day ago" },
    { id: 4, action: "Capacity update", detail: "CNC Line A utilization at 92%", time: "2 days ago" },
  ],
  oem: [
    { id: 1, action: "Supplier matched", detail: "3 qualified manufacturers for chassis assembly", time: "2 hours ago" },
    { id: 2, action: "Requirement posted", detail: "New RFQ for battery enclosure components", time: "5 hours ago" },
    { id: 3, action: "Order confirmed", detail: "Production order #452 confirmed with supplier", time: "1 day ago" },
    { id: 4, action: "Quality audit passed", detail: "Supplier quality audit passed with 98% score", time: "2 days ago" },
  ],
  association: [
    { id: 1, action: "New member joined", detail: "TechManufacturing Corp registered as member", time: "2 hours ago" },
    { id: 2, action: "Event registration opened", detail: "Maharashtra Manufacturing Summit 2026", time: "5 hours ago" },
    { id: 3, action: "Program launched", detail: "Industry 4.0 adoption initiative started", time: "1 day ago" },
    { id: 4, action: "Policy updated", detail: "New sustainability guidelines published", time: "2 days ago" },
  ],
  strategic_partner: [
    { id: 1, action: "Partnership formed", detail: "Strategic alliance with KPMG India finalized", time: "2 hours ago" },
    { id: 2, action: "Program milestone", detail: "Digital transformation initiative 50% complete", time: "5 hours ago" },
    { id: 3, action: "Performance review", detail: "Q3 strategic targets exceeded by 12%", time: "1 day ago" },
    { id: 4, action: "Meeting scheduled", detail: "Executive partnership review next week", time: "2 days ago" },
  ],
  retailer: [
    { id: 1, action: "Inventory restocked", detail: "Automotive components shipment received", time: "2 hours ago" },
    { id: 2, action: "Supplier connected", detail: "New partnership with PrecisionParts Ltd", time: "5 hours ago" },
    { id: 3, action: "Order fulfilled", detail: "Bulk order #789 shipped to customer", time: "1 day ago" },
    { id: 4, action: "Stock alert resolved", detail: "Low stock items replenished successfully", time: "2 days ago" },
  ],
  student: [
    { id: 1, action: "Task completed", detail: "Market research for mobility sector submitted", time: "2 hours ago" },
    { id: 2, action: "Module completed", detail: "Manufacturing fundamentals certification earned", time: "5 hours ago" },
    { id: 3, action: "Mentor session scheduled", detail: "Weekly progress review with Dr. Sharma", time: "1 day ago" },
    { id: 4, action: "Course enrolled", detail: "Quality Assurance & Compliance program started", time: "2 days ago" },
  ],
};

const roleQuickActions: Record<UserRole, Array<{ icon: LucideIcon; label: string; href: string }>> = {
  manufacturer: [
    { icon: Plus, label: "New Project", href: "/dashboard/projects" },
    { icon: Factory, label: "Production", href: "/dashboard/production" },
    { icon: Shield, label: "Quality Check", href: "/dashboard/quality" },
    { icon: ShoppingCart, label: "View Orders", href: "/dashboard/orders" },
  ],
  oem: [
    { icon: Plus, label: "Post Requirement", href: "/dashboard/requirements" },
    { icon: Building2, label: "Find Suppliers", href: "/dashboard/suppliers" },
    { icon: FileText, label: "View Documents", href: "/dashboard/documents" },
    { icon: ShoppingCart, label: "Track Orders", href: "/dashboard/orders" },
  ],
  association: [
    { icon: Plus, label: "New Program", href: "/dashboard/programs" },
    { icon: Users, label: "Manage Members", href: "/dashboard/members" },
    { icon: Calendar, label: "Create Event", href: "/dashboard/events" },
    { icon: FileText, label: "View Documents", href: "/dashboard/documents" },
  ],
  strategic_partner: [
    { icon: Plus, label: "New Partnership", href: "/dashboard/partnerships" },
    { icon: Handshake, label: "View Partners", href: "/dashboard/partnerships" },
    { icon: BarChart3, label: "View Performance", href: "/dashboard/performance" },
    { icon: FileText, label: "View Documents", href: "/dashboard/documents" },
  ],
  retailer: [
    { icon: Plus, label: "New Order", href: "/dashboard/orders" },
    { icon: Building2, label: "Find Suppliers", href: "/dashboard/suppliers" },
    { icon: Package, label: "Manage Inventory", href: "/dashboard/inventory" },
    { icon: FileText, label: "View Documents", href: "/dashboard/documents" },
  ],
  student: [
    { icon: Target, label: "View Programs", href: "/dashboard/programs" },
    { icon: ClipboardList, label: "My Tasks", href: "/dashboard/tasks" },
    { icon: BookOpen, label: "Learning Center", href: "/dashboard/learning" },
    { icon: FileText, label: "View Documents", href: "/dashboard/documents" },
  ],
};

export default function RoleBasedDashboard() {
  const [role, setRole] = useState<UserRole | null>(null);
  const [userName, setUserName] = useState<string>("Loading...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      const userRole = await getUserRole();
      setRole(userRole);
      
      const profile = await getCurrentUser();
      setUserName(profile?.full_name || profile?.email?.split("@")[0] || "User");
      
      setLoading(false);
    }
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-muted/50 rounded-lg animate-pulse w-64" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 bg-muted/50 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  const stats = role ? roleStats[role] : roleStats.manufacturer;
  const activities = role ? roleActivities[role] : roleActivities.manufacturer;
  const quickActions = role ? roleQuickActions[role] : roleQuickActions.manufacturer;
  const roleLabel = role ? roleLabels[role] : "User";

  return (
    <>
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Welcome back, {userName}!</h1>
        <p className="text-sm text-foreground/70">
          {roleLabel} Dashboard, Track your activities and performance.
        </p>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
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

      {/* Activity + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="p-5">
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates and actions</CardDescription>
          <div className="mt-4 space-y-3">
            {activities.map(activity => (
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
            {quickActions.map((action, idx) => (
              <ButtonLink key={idx} href={action.href} className="h-auto p-4 flex flex-col gap-2 rounded-xl bg-background/5/10 text-foreground hover:bg-background/5/20">
                <action.icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{action.label}</span>
              </ButtonLink>
            ))}
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
