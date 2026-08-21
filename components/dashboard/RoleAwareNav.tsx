"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home, UserCircle, ClipboardList, FolderOpen, Target,
  Network, BarChart3, FileText, Bell, Users2, MessageCircle,
  Factory, Shield, ShoppingCart, Calendar, BookOpen, Package, Building2, Handshake, TrendingUp, Activity, Settings, Zap, type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getUserRole, type UserRole } from "@/lib/auth";

interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

const allNavItems: NavItem[] = [
  { icon: Home, label: "Overview", href: "/dashboard" }, // Dynamic based on role
  { icon: UserCircle, label: "Profile", href: "/dashboard/profile" },
  { icon: ClipboardList, label: "Requirements", href: "/dashboard/requirements" },
  { icon: FolderOpen, label: "Active Projects", href: "/dashboard/manufacturer/active-projects" },
  { icon: ShoppingCart, label: "Project Orders", href: "/dashboard/manufacturer/project-orders" },
  { icon: TrendingUp, label: "Quality Score", href: "/dashboard/manufacturer/quality-score" },
  { icon: Activity, label: "Capacity Utilization", href: "/dashboard/manufacturer/capacity-utilization" },
  { icon: FileText, label: "Documents", href: "/dashboard/documents" },
  { icon: ClipboardList, label: "Active Requirements", href: "/dashboard/oem/active-requirements" },
  { icon: Building2, label: "Supplier Matching", href: "/dashboard/oem/supplier-matching" },
  { icon: ShoppingCart, label: "Active Orders", href: "/dashboard/oem/active-orders" },
  { icon: Factory, label: "Production", href: "/dashboard/production" },
  { icon: Shield, label: "Quality", href: "/dashboard/quality" },
  { icon: Target, label: "Programs", href: "/dashboard/programs" },
  { icon: Users2, label: "Members", href: "/dashboard/members" },
  { icon: Building2, label: "Suppliers", href: "/dashboard/suppliers" },
  { icon: Calendar, label: "Events", href: "/dashboard/events" },
  { icon: Handshake, label: "Partnerships", href: "/dashboard/partnerships" },
  { icon: Network, label: "Matchmaking", href: "/dashboard/capabilities" },
  { icon: BarChart3, label: "Performance", href: "/dashboard/performance" },
  { icon: Package, label: "Inventory", href: "/dashboard/inventory" },
  { icon: Users2, label: "Tasks", href: "/dashboard/tasks" },
  { icon: BookOpen, label: "Learning", href: "/dashboard/learning" },
  { icon: Users2, label: "Requests", href: "/dashboard/requests" },
  { icon: Bell, label: "Alerts", href: "/dashboard/notifications" },
  { icon: MessageCircle, label: "Help", href: "/dashboard/chatbot" },
];

const roleNavItems: Record<UserRole, string[]> = {
  manufacturer: ["Overview", "Active Projects", "Project Orders", "Quality Score", "Capacity Utilization", "Documents", "Profile", "Alerts", "Help"],
  oem: ["Overview", "Active Requirements", "Supplier Matching", "Active Orders", "Documents", "Profile", "Alerts", "Help"],
  association: ["Overview", "Profile", "Programs", "Members", "Events", "Documents", "Alerts", "Help"],
  strategic_partner: ["Overview", "Profile", "Programs", "Partnerships", "Performance", "Documents", "Alerts", "Help"],
  retailer: ["Overview", "Profile", "Suppliers", "Orders", "Inventory", "Documents", "Alerts", "Help"],
  student: ["Overview", "Profile", "Programs", "Tasks", "Learning", "Documents", "Alerts", "Help"],
};

export default function RoleAwareNav() {
  const pathname = usePathname();
  const [role, setRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRole() {
      const userRole = await getUserRole();
      setRole(userRole);
      setLoading(false);
    }
    fetchRole();
  }, []);

  if (loading) {
    return (
      <nav className="flex items-center gap-1 min-w-max py-2">
        <div className="flex gap-1">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-9 w-20 bg-muted/50 rounded-lg animate-pulse" />
          ))}
        </div>
      </nav>
    );
  }

  const allowedLabels = role ? roleNavItems[role] : allNavItems.map(item => item.label);
  
  // Create role-specific overview and documents href
  const roleSpecificNavItems = allNavItems.map(item => {
    if (item.label === "Overview" && role) {
      const overviewRoutes: Record<UserRole, string> = {
        manufacturer: "/dashboard/manufacturer/overview",
        oem: "/dashboard/oem/overview",
        association: "/dashboard/association",
        strategic_partner: "/dashboard/strategic-partner",
        retailer: "/dashboard/retailer",
        student: "/dashboard/student",
      };
      return { ...item, href: overviewRoutes[role] };
    }
    if (item.label === "Documents" && role) {
      const documentsRoutes: Record<UserRole, string> = {
        manufacturer: "/dashboard/manufacturer/documents",
        oem: "/dashboard/oem/documents",
        association: "/dashboard/documents",
        strategic_partner: "/dashboard/documents",
        retailer: "/dashboard/documents",
        student: "/dashboard/documents",
      };
      return { ...item, href: documentsRoutes[role] };
    }
    return item;
  });

  const filteredNavItems = roleSpecificNavItems.filter(item => allowedLabels.includes(item.label));

  return (
    <nav className="flex items-center gap-1 min-w-max py-2">
      {filteredNavItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
              ${isActive
                ? "bg-accent text-white shadow-sm"
                : "text-foreground/70 hover:bg-muted hover:text-foreground"
              }
            `}
          >
            <item.icon className={`h-4 w-4 shrink-0 ${isActive ? "text-accent-foreground" : "text-foreground/70"}`} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
