"use client";

import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Factory, Building2, Globe, GraduationCap, Handshake, Briefcase,
  ChevronDown, CheckCircle, MessageCircle
} from "lucide-react";
import { useMemo, useState } from "react";
import { submitJoinNetwork } from "@/lib/actions";

const roles = [
  { key: "Manufacturer", icon: Factory, desc: "Core manufacturing nodes providing capacity and capabilities." },
  { key: "OEM_Tier", icon: Building2, desc: "Original equipment manufacturers driving sector requirements." },
  { key: "Industrial_Association", icon: Globe, desc: "Industry bodies facilitating standards and collaboration." },
  { key: "Student_Workforce", icon: GraduationCap, desc: "Educational institutions and workforce development programs." },
  { key: "Strategic_Advisor", icon: Handshake, desc: "Expert consultants providing strategic guidance." },
  { key: "Retail_Middlemen", icon: Briefcase, desc: "Distribution and channel partners enabling market access." },
] as const;

type RoleKey = (typeof roles)[number]["key"];

const sectors = [
  "Aerospace", "Automotive", "Electric Vehicles", "Railway", "Marine", "Heavy Mobility",
] as const;

export default function JoinNetworkPage() {
  const [role, setRole] = useState<RoleKey>("Manufacturer");

  const roleFields = useMemo(() => {
    switch (role) {
      case "Manufacturer":
        return ["Installed Machines", "Monthly Capacity", "Certifications", "Core Processes"];
      case "OEM_Tier":
        return ["Current Procurement Volume", "Key Components Required", "Compliance Standards", "Preferred Geographies"];
      case "Industrial_Association":
        return ["Number of Members", "Key Sectors Covered", "Primary Region", "Partnership Goals"];
      case "Student_Workforce":
        return ["Highest Qualification", "Core Technical Skills", "Interested Sectors", "Availability Timeline"];
      case "Strategic_Advisor":
        return ["Area of Expertise", "Years of Experience", "Key Past Projects", "Target Clientele"];
      case "Retail_Middlemen":
        return ["Distribution Networks", "Annual Logistics Volume", "Warehousing Capacity", "Regions Covered"];
      default:
        return [];
    }
  }, [role]);

  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setMessage("");
    
    const formData = new FormData(e.currentTarget);
    formData.append("selected_role", role);

    const res = await submitJoinNetwork(formData);
    if (res.success) {
      setMessage("Registration submitted successfully! We will contact you soon.");
      (e.target as HTMLFormElement).reset();
    } else {
      setMessage("Error: " + res.error);
    }
    setIsPending(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-muted">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-16 animate-fade-in">
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-6 px-5 py-1.5 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm">
            Network Registration
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1] max-w-3xl">
            Join the<br />
            <span className="text-accent">Network</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-8 font-medium leading-relaxed">
            Role-based registration for a structured mobility manufacturing capacity & capability network.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-foreground/50 w-8 h-8" />
        </div>
      </section>

      {/* Network Roles */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-3 mb-12">
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Roles</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Network Roles</h2>
            <p className="max-w-3xl text-foreground/80">
              Select your role to understand how you can contribute to and benefit from the network.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {roles.map((r) => (
              <div
                key={r.key}
                className={`p-5 rounded-xl border transition-all cursor-pointer ${
                  role === r.key
                    ? "border-accent bg-accent/5 shadow-md"
                    : "border-border bg-card hover:border-accent/30"
                }`}
                onClick={() => setRole(r.key)}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <r.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{r.key.replaceAll("_", " ")}</h4>
                    <p className="text-xs text-foreground/60 mt-1">{r.desc}</p>
                  </div>
                </div>
                {role === r.key && (
                  <CheckCircle className="w-4 h-4 text-accent mt-2 ml-auto" />
                )}
              </div>
            ))}
          </div>

          {/* Registration Form */}
          <Card className="overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-extrabold tracking-tight mb-6">Register Your Organization</h3>
              
              {message && (
                <div className={`p-4 mb-6 rounded-lg font-medium text-sm ${message.startsWith("Error") ? "bg-red-500/10 text-red-500" : "bg-green-500/10 text-green-600"}`}>
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-2">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Organization Name <span className="text-red-500">*</span></label>
                    <input
                      className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                      name="organization_name"
                      placeholder="Company / Institution"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Sector</label>
                    <select
                      className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                      name="sector"
                      defaultValue={sectors[0]}
                    >
                      {sectors.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Country <span className="text-red-500">*</span></label>
                    <input
                      className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                      name="country"
                      placeholder="Country"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Contact Person <span className="text-red-500">*</span></label>
                    <input
                      className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                      name="contact_person"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Contact Email <span className="text-red-500">*</span></label>
                    <input
                      className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                      type="email"
                      name="contact_email"
                      placeholder="email@organization.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">WhatsApp Number <span className="text-red-500">*</span></label>
                    <input
                      className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                      type="tel"
                      name="whatsapp_number"
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Role Description <span className="text-red-500">*</span></label>
                    <textarea
                      className="min-h-28 w-full rounded-xl border border-border bg-background px-3 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                      name="role_description"
                      placeholder="Describe your role and intent to participate"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Selected Role</label>
                    <div className="h-11 w-full rounded-xl border border-accent/30 bg-accent/5 px-3 flex items-center text-sm font-medium">
                      {role.replaceAll("_", " ")}
                    </div>
                  </div>

                  {roleFields.length > 0 ? (
                    <div className="rounded-2xl border border-border bg-card p-5">
                      <h4 className="font-bold text-sm mb-4">Role-specific fields</h4>
                      <div className="grid gap-3">
                        {roleFields.map((f) => (
                          <div key={f} className="grid gap-2">
                            <label className="text-sm text-foreground/70">{f}</label>
                            <input
                              className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                              name={f.toLowerCase().replaceAll(" ", "_")}
                              placeholder={f}
                            />
                          </div>
                        ))}
                        <div className="grid gap-2 pt-2 border-t border-border/50 mt-2">
                          <label className="text-sm text-foreground/70">Company Profile (PDF, PPT, DOCX)</label>
                          <input
                            type="file"
                            className="h-11 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20 cursor-pointer"
                            name="company_profile"
                            accept=".pdf,.doc,.docx,.ppt,.pptx"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-border bg-card p-5 text-sm text-foreground/70">
                      No additional role-specific fields for this role yet.
                    </div>
                  )}

                  <div className="mt-2">
                    <Button type="submit" disabled={isPending} className="h-11 w-full">
                      {isPending ? "Submitting..." : "Submit Registration"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </Card>

          {/* WhatsApp Bot Section */}
          <div className="mt-16 text-center max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-[#25D366]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Need quick assistance?</h3>
            <p className="text-foreground/70 mb-8">
              Our automated WhatsApp bot can help you with registration details, answer common questions, and guide you through the initial onboarding process instantly.
            </p>
            <a
              href="https://wa.me/919561127357"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 text-sm font-bold text-foreground transition-colors hover:bg-[#20b858]"
            >
              <MessageCircle className="w-5 h-5" /> Chat with bot here
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
