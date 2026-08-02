"use client";

import { useEffect, useState } from "react";
import { Briefcase, Mail, User } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import {
  getCurrentUser,
  getRoleSpecificProfile,
  roleLabels,
  type UserProfile,
} from "@/lib/auth";

const fieldLabels: Record<string, string> = {
  company_name: "Company",
  production_capacity: "Production capacity",
  certifications: "Certifications",
  established_year: "Established",
  industry_sector: "Industry sector",
  annual_volume: "Annual volume",
  association_name: "Association",
  member_count: "Member count",
  focus_area: "Focus area",
  organization_name: "Organization",
  partnership_type: "Partnership type",
  service_areas: "Service areas",
  store_name: "Store",
  location_count: "Locations",
  target_market: "Target market",
  university_name: "University",
  field_of_study: "Field of study",
  graduation_year: "Graduation year",
};

function formatValue(value: unknown) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [roleProfile, setRoleProfile] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      const currentProfile = await getCurrentUser();
      setProfile(currentProfile);

      if (currentProfile) {
        setRoleProfile(await getRoleSpecificProfile(currentProfile.role, currentProfile.id));
      }
      setLoading(false);
    }

    loadProfile();
  }, []);

  if (loading) {
    return <div className="h-64 rounded-2xl bg-muted/50 animate-pulse" />;
  }

  if (!profile) {
    return (
      <Card className="p-6">
        <CardTitle>Profile unavailable</CardTitle>
        <CardDescription>Sign in to view your portal profile.</CardDescription>
      </Card>
    );
  }

  const roleFields = Object.entries(roleProfile ?? {}).filter(
    ([key, value]) => key !== "profile_id" && key !== "created_at" && key !== "updated_at" && value != null,
  );

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">My Profile</h1>
        <p className="text-sm text-foreground/70">Your {roleLabels[profile.role].toLowerCase()} portal identity and organization details.</p>
      </div>

      <Card className="mb-6 overflow-hidden border-0 shadow-md">
        <div className="bg-gradient-to-r from-slate-900 to-[#001524] text-white p-6 md:p-8 flex items-center gap-5 border-b-4 border-accent">
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center border-2 border-accent shrink-0">
            <User className="w-10 h-10 text-accent" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold">{profile.full_name || profile.email.split("@")[0]}</h2>
            <p className="text-white/80 flex items-center gap-2 mt-2"><Briefcase className="w-4 h-4" />{roleLabels[profile.role]}</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <CardTitle>Account details</CardTitle>
          <div className="mt-5 space-y-4">
            <div className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-accent" /><div><p className="text-xs text-foreground/70">Email</p><p className="text-sm font-medium">{profile.email}</p></div></div>
            <div className="flex gap-3"><Briefcase className="w-4 h-4 mt-0.5 text-accent" /><div><p className="text-xs text-foreground/70">Portal role</p><p className="text-sm font-medium">{roleLabels[profile.role]}</p></div></div>
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle>{roleLabels[profile.role]} details</CardTitle>
          {roleFields.length ? (
            <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roleFields.map(([key, value]) => (
                <div key={key}><dt className="text-xs text-foreground/70">{fieldLabels[key] || key}</dt><dd className="text-sm font-medium mt-1">{formatValue(value)}</dd></div>
              ))}
            </dl>
          ) : (
            <CardDescription>Your role-specific details have not been completed yet.</CardDescription>
          )}
        </Card>
      </div>
    </>
  );
}
