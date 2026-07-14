"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import {
  Factory, Building2, Globe, GraduationCap,
  Handshake, Briefcase, Network, Shield,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store user data and redirect
    localStorage.setItem('userData', JSON.stringify({ name: email.split('@')[0], email }));
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Login Form — 2 cols */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Balbird" width={36} height={36} className="rounded-full" />
              <span className="font-bold text-lg">Balbird Industries</span>
            </div>
            <h1 className="text-2xl font-extrabold text-foreground mb-1">Welcome Back</h1>
            <CardDescription>
              Sign in to access your execution portal
            </CardDescription>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                <input
                  type="email"
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-1.5 text-foreground">
                  <input type="checkbox" className="rounded border-border" />
                  <span>Remember me</span>
                </label>
                <button type="button" className="text-accent hover:text-accent/80 font-medium">
                  Forgot password?
                </button>
              </div>

              <Button type="submit" className="w-full h-11 font-bold">
                Sign In
              </Button>
            </form>

            <p className="mt-4 text-center text-sm text-foreground/60">
              Don&apos;t have an account?{" "}
              <ButtonLink href="/join-network" variant="ghost" className="text-accent font-medium p-0 h-auto">
                Join the Network
              </ButtonLink>
            </p>
          </Card>
        </div>

        {/* Right Column — 3 cols */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          {/* Role-based Access */}
          <Card className="p-5">
            <CardTitle className="text-base mb-3 flex items-center gap-2">
              <Network className="w-4 h-4 text-accent" />
              Role-based Access
            </CardTitle>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Factory, label: "Manufacturer", desc: "Production & capacity", color: "bg-blue-50 border-blue-200", btn: "bg-blue-600 hover:bg-blue-700" },
                { icon: Building2, label: "Client / OEM", desc: "Requirements & quality", color: "bg-green-50 border-green-200", btn: "bg-green-600 hover:bg-green-700" },
                { icon: Globe, label: "Association", desc: "Standards & clusters", color: "bg-purple-50 border-purple-200", btn: "bg-purple-600 hover:bg-purple-700" },
                { icon: GraduationCap, label: "Execution Cell", desc: "Student operations", color: "bg-orange-50 border-orange-200", btn: "bg-orange-600 hover:bg-orange-700" },
              ].map((role, idx) => (
                <div key={idx} className={`rounded-lg p-3 border ${role.color}`}>
                  <div className="flex items-center gap-1.5 mb-1">
                    <role.icon className="w-5 h-5 text-foreground/70" />
                    <span className="font-bold text-sm text-foreground">{role.label}</span>
                  </div>
                  <p className="text-xs text-foreground/60 mb-2">{role.desc}</p>
                  <ButtonLink href="/dashboard" size="sm" className={`w-full text-foreground ${role.btn}`}>
                    Access
                  </ButtonLink>
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
              {[
                "Execution Coordination",
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
