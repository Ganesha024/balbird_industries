"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { Users, Briefcase, Target } from "lucide-react";

export default function MultiRolePage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-5">
          <CardTitle className="mb-4">Multi-role Access</CardTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            {[
              { icon: Users, label: "Manufacturer", desc: "Full manufacturing access", stats: [["Active Projects", "12"], ["Team Size", "45"]] },
              { icon: Briefcase, label: "Manufacturer", desc: "Supply chain management", stats: [["Active Orders", "28"], ["Partners", "8"]] },
              { icon: Target, label: "Distributor", desc: "Distribution and logistics", stats: [["Delivery Routes", "15"], ["Regions", "6"]] },
            ].map((role) => (
              <Card key={role.label} className="p-3">
                <role.icon className="w-6 h-6 text-accent mb-1" />
                <h3 className="font-semibold text-sm text-foreground mb-0.5">{role.label}</h3>
                <p className="text-xs text-foreground/70 mb-2">{role.desc}</p>
                <div className="space-y-1 mb-3">
                  {role.stats.map(([label, value]) => (
                    <div key={label} className="flex justify-between text-xs">
                      <span className="text-foreground/70">{label}</span>
                      <span className="font-semibold text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
                <Button size="sm" className="w-full">Access Portal</Button>
              </Card>
            ))}
          </div>

          <h3 className="text-sm font-semibold text-foreground mb-3">Role Management</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex justify-between text-sm">
              <span className="text-foreground/70">Total Roles</span>
              <span className="font-semibold text-foreground">8</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground/70">Active Users</span>
              <span className="font-semibold text-foreground">156</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground/70">Pending</span>
              <span className="font-semibold text-orange-600">3</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground/70">Changes</span>
              <span className="font-semibold text-accent">2 this week</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
