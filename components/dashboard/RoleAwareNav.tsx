"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home, UserCircle, ClipboardList, FolderOpen, Target,
  Network, BarChart3, FileText, Bell, Users2, MessageCircle, type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getUserRole, type UserRole } from "@/lib/auth";

interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

const allNavItems: NavItem[] = [
  { icon: Home, label: "Overview", href: "/dashboard" },
  { icon: UserCircle, label: "Profile", href: "/dashboard/profile" },
  { icon: ClipboardList, label: "Requirements", href: "/dashboard/requirements" },
  { icon: FolderOpen, label: "Projects", href: "/dashboard/projects" },
  { icon: Target, label: "Programs", href: "/dashboard/programs" },
  { icon: Users2, label: "Member Directory", href: "/dashboard/members" },
  { icon: Network, label: "Matchmaking", href: "/dashboard/capabilities" },
  { icon: BarChart3, label: "Performance", href: "/dashboard/performance" },
  { icon: FileText, label: "Documents", href: "/dashboard/documents" },
  { icon: Users2, label: "Requests", href: "/dashboard/requests" },
  { icon: Bell, label: "Alerts", href: "/dashboard/notifications" },
  { icon: MessageCircle, label: "Help", href: "/dashboard/chatbot" },
];

const roleNavItems: Record<UserRole, string[]> = {
  manufacturer: ["Overview", "Profile", "Projects", "Matchmaking", "Performance", "Documents", "Requests", "Alerts", "Help"],
  oem: ["Overview", "Profile", "Requirements", "Matchmaking", "Documents", "Requests", "Alerts", "Help"],
  association: ["Overview", "Profile", "Programs", "Member Directory", "Documents", "Requests", "Alerts", "Help"],
  strategic_partner: ["Overview", "Profile", "Programs", "Matchmaking", "Performance", "Documents", "Alerts", "Help"],
  retailer: ["Overview", "Profile", "Requirements", "Matchmaking", "Documents", "Requests", "Alerts", "Help"],
  student: ["Overview", "Profile", "Programs", "Requests", "Alerts", "Help"],
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
  const filteredNavItems = allNavItems.filter(item => allowedLabels.includes(item.label));

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
