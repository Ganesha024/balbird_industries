"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth";

import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";

import { Factory, Building2, Globe, GraduationCap, Network, Shield } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await signIn(email, password);
    if (result.success) {
      const claims = result.claims;
      console.log("Login claims:", claims);
      const requestedPath = new URLSearchParams(window.location.search).get("next");
      const destination = requestedPath?.startsWith("/dashboard") ? requestedPath : "/dashboard";
      router.push(destination);
    } else {
      setError(result.error ?? "Login failed");
    }
    setLoading(false);
  };

  const roles = [
    {
      icon: Factory,
      label: "Manufacturer",
      desc: "Production & capacity",
      btn: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Building2,
      label: "OEM",
      desc: "Requirements & quality",
      btn: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Globe,
      label: "Association",
      desc: "Standards & clusters",
      btn: "bg-purple-600 hover:bg-purple-700",
    },
    {
      icon: GraduationCap,
      label: "Student",
      desc: "Execution cell",
      btn: "bg-orange-600 hover:bg-orange-700",
    },
  ];

  const features = [
    "Execution Coordination",
    "AI Matchmaking",
    "Manufacturing Traceability",
    "Task Management",
    "Consortium Coordination",
    "Quality Documentation",
  ];

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Login Form */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Balbird" width={36} height={36} className="rounded-full" />
              <span className="font-bold text-lg">Balbird Industries</span>
            </div>
            <h1 className="text-2xl font-extrabold text-foreground mb-1">Welcome Back</h1>
            <CardDescription>Sign in to access your execution portal</CardDescription>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                  {error}
                </div>
              )}
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                <input
                  type="email"
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
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
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-1.5 text-foreground">
                  <input type="checkbox" className="rounded border-border" disabled={loading} />
                  <span>Remember me</span>
                </label>
                <button type="button" className="text-accent hover:text-accent/80 font-medium">
                  Forgot password?
                </button>
              </div>
              <Button type="submit" className="w-full h-11 font-bold" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <p className="mt-4 text-center text-sm text-foreground/60">
              Don&apos;t have an account?{' '}
              <ButtonLink href="/signup" variant="ghost" className="text-accent font-medium p-0 h-auto">
                Sign Up
              </ButtonLink>
            </p>
          </Card>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          {/* Role-based Access */}
          <Card className="p-5">
            <CardTitle className="text-base mb-3 flex items-center gap-2">
              <Network className="w-4 h-4 text-accent" />
              Role-based Access
            </CardTitle>
            <div className="grid grid-cols-2 gap-3">
              {roles.map((role, idx) => (
                <div key={idx} className={`rounded-lg p-3 border ${role.btn}`}> 
                  <div className="flex items-center gap-1.5 mb-1">
                    <role.icon className="w-5 h-5 text-foreground/70" />
                    <span className="font-bold text-sm text-foreground">{role.label}</span>
                  </div>
                  <p className="text-xs text-foreground/60 mb-2">{role.desc}</p>
                  <ButtonLink href="/dashboard" size="sm" className={`w-full text-foreground ${role.btn}`}>Access</ButtonLink>
                </div>
              ))}
            </div>
          </Card>

          {/* Platform Features */}
          <Card className="p-5">
            <CardTitle className="text-base mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              Platform Features
            </CardTitle>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {features.map((feature, idx) => (
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
