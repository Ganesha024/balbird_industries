"use client";

import { useEffect, useState } from "react";
import { Building2, Users } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { getUserRole } from "@/lib/auth";

export default function MembersPage() {
  const [isAssociation, setIsAssociation] = useState<boolean | null>(null);

  useEffect(() => {
    getUserRole().then((role) => setIsAssociation(role === "association"));
  }, []);

  if (isAssociation === null) return <div className="h-40 rounded-2xl bg-muted/50 animate-pulse" />;

  if (!isAssociation) {
    return <Card className="p-6"><CardTitle>Member Directory</CardTitle><CardDescription>This workspace is available to association accounts.</CardDescription></Card>;
  }

  return (
    <>
      <div className="mb-6"><h1 className="text-2xl font-bold mb-1">Member Directory</h1><p className="text-sm text-foreground/70">Manage and engage organizations in your association network.</p></div>
      <Card className="p-6">
        <div className="flex items-start gap-4"><div className="p-3 rounded-xl bg-accent/10"><Users className="w-6 h-6 text-accent" /></div><div><CardTitle>Directory is ready for your member records</CardTitle><CardDescription>Connect membership data here when the association onboarding workflow is enabled.</CardDescription></div></div>
        <div className="mt-6 rounded-xl border border-dashed border-border p-6 text-center"><Building2 className="w-7 h-7 text-foreground/40 mx-auto mb-2" /><p className="text-sm font-medium">No member organizations yet</p></div>
      </Card>
    </>
  );
}
