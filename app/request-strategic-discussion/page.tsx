"use client";

import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import {
  ChevronDown, MessageSquare, ClipboardList,
  Shield, Target, MessageCircle
} from "lucide-react";
import { useState } from "react";
import { submitStrategicDiscussion } from "@/lib/actions";

export default function RequestStrategicDiscussionPage() {
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setMessage("");
    
    const formData = new FormData(e.currentTarget);
    const res = await submitStrategicDiscussion(formData);
    
    if (res.success) {
      setMessage("Discussion request submitted successfully! We will contact you soon.");
      (e.target as HTMLFormElement).reset();
    } else {
      setMessage("Error: " + res.error);
    }
    setIsPending(false);
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-muted">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-16 animate-fade-in">
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-6 text-center mx-auto">
            Start a Conversation
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1] max-w-3xl text-center mx-auto">
            Request Strategic<br />
            <span className="text-accent">Discussion</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 font-medium leading-relaxed text-center">
            Connect with our strategic team for in-depth discussions on mobility manufacturing opportunities, capacity planning, and ecosystem participation.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {[
              { icon: ClipboardList, title: "Comprehensive Assessment", desc: "Detailed evaluation of your capabilities and strategic goals." },
              { icon: MessageSquare, title: "Expert Guidance", desc: "Direct access to industry experts and strategic advisors." },
              { icon: Target, title: "Customized Solutions", desc: "Tailored recommendations for your sector and requirements." },
              { icon: Shield, title: "Actionable Outcomes", desc: "Clear next steps and implementation strategies." },
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-card rounded-xl border border-border">
                <item.icon className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <Card className="overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-extrabold tracking-tight mb-6">Initiate Request</h3>
              
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
                    <label className="text-sm font-medium">Network Type <span className="text-red-500">*</span></label>
                    <select
                      className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                      name="Network_type"
                      required
                    >
                      <option value="">Select Network type</option>
                      <option value="manufacturer">Manufacturer</option>
                      <option value="oem_tier">OEM / Client</option>
                      <option value="association">Association</option>
                      <option value="student">Student / Execution Cell</option>
                      <option value="advisor">Strategic Advisor</option>
                      <option value="retail">Retail / Middlemen</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Sector</label>
                    <select
                      className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                      name="sector"
                    >
                      <option value="">Select sector</option>
                      <option value="aerospace">Aerospace</option>
                      <option value="automotive">Automotive</option>
                      <option value="ev">Electric Vehicles</option>
                      <option value="railway">Railway</option>
                      <option value="marine">Marine</option>
                      <option value="heavy_mobility">Heavy Mobility</option>
                      <option value="none">None of the above</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Country / Region <span className="text-red-500">*</span></label>
                    <input
                      className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                      name="country_region"
                      placeholder="Country or region"
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
                    <label className="text-sm font-medium">Contact / WhatsApp Number <span className="text-red-500">*</span></label>
                    <input
                      className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                      type="tel"
                      name="whatsapp_number"
                      placeholder="+91 00000-00000"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 content-start">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Key Discussion Topics <span className="text-red-500">*</span></label>
                    <textarea
                      className="min-h-28 w-full rounded-xl border border-border bg-background px-3 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                      name="discussion_topics"
                      placeholder="Briefly describe what you'd like to discuss (e.g., procurement needs, capacity allocation, compliance, specific projects)"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Upload RFQ / Technical Drawing (Optional)</label>
                    <input
                      type="file"
                      className="h-11 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20 cursor-pointer"
                      name="rfq_document"
                      accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png,.zip"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isPending}
                      className="h-11 w-full rounded-xl bg-accent px-4 text-sm font-medium text-accent-foreground transition-colors hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isPending ? "Submitting..." : "Submit Request"}
                    </button>
                    <a
                      href="https://wa.me/919561127357"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-sm font-medium text-foreground transition-colors hover:bg-[#20b858]"
                    >
                      <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-card border-t border-border/30">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Explore the Ecosystem</h2>
          <p className="text-foreground/80 max-w-xl mx-auto mb-8">
            Learn more about our network and strategic programs while we prepare your discussion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink href="/join-network" variant="primary">
              Join Network
            </ButtonLink>
            <ButtonLink href="/strategic-programs" variant="secondary">
              View Strategic Programs
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
