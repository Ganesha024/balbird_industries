"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import {
  Factory, Building2, Globe, GraduationCap,
  Handshake, Briefcase, Store,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { signUp, type UserRole } from "@/lib/auth";
import { useRouter } from "next/navigation";

const roles = [
  { key: "manufacturer" as UserRole, icon: Factory, label: "Manufacturer", desc: "Production & capacity" },
  { key: "oem" as UserRole, icon: Building2, label: "OEM", desc: "Requirements & quality" },
  { key: "association" as UserRole, icon: Globe, label: "Association", desc: "Standards & clusters" },
  { key: "strategic_partner" as UserRole, icon: Handshake, label: "Strategic Partner", desc: "Partnerships & programs" },
  { key: "retailer" as UserRole, icon: Store, label: "Retailer", desc: "Distribution & logistics" },
  { key: "student" as UserRole, icon: GraduationCap, label: "Student", desc: "Learning & execution" },
];

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<UserRole>("manufacturer");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    const result = await signUp(email, password, fullName, selectedRole);

    if (result.success) {
      // Redirect to login after successful signup
      router.push('/login');
    } else {
      setError(result.error || "Sign up failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Sign Up Form, 2 cols */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Balbird" width={36} height={36} className="rounded-full" />
              <span className="font-bold text-lg">Balbird Industries</span>
            </div>
            <h1 className="text-2xl font-extrabold text-foreground mb-1">Create Account</h1>
            <CardDescription>
              Sign up to access your role-based dashboard
            </CardDescription>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                  {error}
                </div>
              )}
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Full Name</label>
                <input
                  type="text"
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                <input
                  type="email"
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Password</label>
                <input
                  type="password"
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="•••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Confirm Password</label>
                <input
                  type="password"
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="•••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>

              <Button type="submit" className="w-full h-11 font-bold" disabled={loading}>
                {loading ? "Creating account..." : "Sign Up"}
              </Button>
            </form>

            <p className="mt-4 text-center text-sm text-foreground/60">
              Already have an account?{" "}
              <ButtonLink href="/login" variant="ghost" className="text-accent font-medium p-0 h-auto">
                Sign In
              </ButtonLink>
            </p>
          </Card>
        </div>

        {/* Right Column, 3 cols */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          {/* Role Selection */}
          <Card className="p-5">
            <CardTitle className="text-base mb-3">Select Your Role</CardTitle>

            <div className="grid grid-cols-2 gap-3">
              {roles.map((role) => (
                <div
                  key={role.key}
                  onClick={() => setSelectedRole(role.key)}
                  className={`rounded-lg p-3 border cursor-pointer transition-all ${
                    selectedRole === role.key
                      ? "border-accent bg-accent/5"
                      : "border-border bg-card hover:border-accent/30"
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <role.icon className="w-5 h-5 text-foreground/70" />
                    <span className="font-bold text-sm text-foreground">{role.label}</span>
                  </div>
                  <p className="text-xs text-foreground/60">{role.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Platform Features */}
          <Card className="p-5">
            <CardTitle className="text-base mb-3">Platform Features</CardTitle>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                "Role-based Dashboards",
                "AI Matchmaking",
                "Manufacturing Traceability",
                "Task Management",
                "Consortium Coordination",
                "Quality Documentation",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="text-sm text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
