'use client';

import React, { useState } from 'react';
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import {
  BookOpen, Filter, FileText, Tag, Calendar,
  Lightbulb, ChevronDown, TrendingUp, Shield, Users, Download
} from "lucide-react";

const articleStructure = [
  "Title", "Sector Tag", "Summary", "Date",
  "Key Takeaways", "Related Resources", "Related Requirements",
] as const;

export default function InsightsPage() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

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
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[300px] bg-accent/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-16 animate-fade-in">
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-6 px-5 py-1.5 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm">
            Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1] max-w-3xl">
            Industry<br />
            <span className="text-accent">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-8 font-medium leading-relaxed">
            Structured articles tagged to sectors and programs, connected to resources and active requirements for informed decision-making.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-foreground/50 w-8 h-8" />
        </div>
      </section>

      {/* Knowledge Areas */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-3 mb-12">
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Categories</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Knowledge Areas</h2>
            <p className="max-w-3xl text-foreground/80">
              Access industry analysis, market trends, compliance updates, and strategic insights across all mobility manufacturing sectors. Click on any section below to download its detailed PDF report.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {[
              { icon: TrendingUp, title: "Sector-Specific Analysis", desc: "Deep dives into aerospace, automotive, railway, marine, and heavy mobility trends." },
              { icon: Shield, title: "Regulatory Intelligence", desc: "Compliance updates, documentation requirements, and certification guidance." },
              { icon: Users, title: "Capacity & Workforce", desc: "Market trends, workforce development, and capacity planning strategies." },
              { icon: Lightbulb, title: "Strategic Updates", desc: "Progress reports and outcomes from ecosystem development initiatives." },
            ].map((item, idx) => {
              const isExpanded = expandedSection === idx;
              return (
                <div 
                  key={idx} 
                  onClick={() => setExpandedSection(isExpanded ? null : idx)}
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isExpanded 
                      ? 'bg-accent/5 border-accent shadow-md' 
                      : 'bg-card border-border hover:shadow-md hover:border-black/10'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <item.icon className={`w-6 h-6 mb-3 ${isExpanded ? 'text-accent' : 'text-accent/80'}`} />
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-accent' : 'text-foreground/70'}`} />
                  </div>
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-foreground/60 mb-4">{item.desc}</p>
                  
                  {/* Expanded Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pt-3 border-t border-accent/20">
                      <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-accent text-white font-bold text-xs uppercase tracking-wider rounded-md hover:bg-accent/90 transition-colors">
                        <Download className="w-4 h-4" /> Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Article Structure */}
          <div className="w-full max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-accent" />
                  <CardTitle>Article Structure</CardTitle>
                </div>
                <CardDescription>Each insight follows a structured format for consistency.</CardDescription>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {articleStructure.map((item, index) => (
                    <div key={item} className="flex items-center gap-3 px-4 py-3 bg-card rounded-xl border border-border">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Articles Placeholder */}
      <section className="pb-24 md:pb-32 pt-12 md:pt-16 bg-card border-y border-border/30">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-3 mb-12">
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Latest</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Latest Articles</h2>
          </div>
          <Card className="p-8 text-center">
            <BookOpen className="w-12 h-12 text-accent/30 mx-auto mb-4" />
            <CardTitle>Coming Soon</CardTitle>
            <CardDescription>
              Curated insights and analysis from across the mobility manufacturing ecosystem will be published here. Stay tuned for sector-specific analysis and strategic updates.
            </CardDescription>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-muted text-foreground relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Stay Informed</h2>
          <p className="text-xl mb-10 font-medium max-w-2xl mx-auto text-foreground/80">
            Get the latest insights on mobility manufacturing trends and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink href="/join-network" variant="primary" className="px-10 py-5 text-lg">
              Join Network
            </ButtonLink>
            <ButtonLink href="/capacity-ecosystem" variant="outline" className="px-10 py-5 text-lg border-2 border-border text-foreground hover:text-foreground hover:bg-background hover:border-foreground">
              Capacity Ecosystem
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
