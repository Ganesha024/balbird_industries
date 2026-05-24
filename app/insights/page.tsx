'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { ChevronDown, BookOpen, Presentation, FileText, ArrowRight } from "lucide-react";
import { blogs } from '@/lib/data/blogs';

type TabType = 'blogs' | 'casestudy' | 'guidelines';

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('blogs');

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

      {/* Main Content Area */}
      <section className="pt-16 pb-24 md:pb-32 bg-background min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          
          {/* Tabs UI */}
          <div className="flex flex-wrap gap-2 md:gap-4 mb-12 border-b border-border/50 pb-4">
            <button
              onClick={() => setActiveTab('blogs')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === 'blogs' 
                  ? 'bg-accent text-white shadow-md' 
                  : 'bg-muted text-foreground/70 hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              <BookOpen className="w-4 h-4" /> Blogs
            </button>
            <button
              onClick={() => setActiveTab('casestudy')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === 'casestudy' 
                  ? 'bg-accent text-white shadow-md' 
                  : 'bg-muted text-foreground/70 hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              <Presentation className="w-4 h-4" /> Case Studies
            </button>
            <button
              onClick={() => setActiveTab('guidelines')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === 'guidelines' 
                  ? 'bg-accent text-white shadow-md' 
                  : 'bg-muted text-foreground/70 hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              <FileText className="w-4 h-4" /> User Guidelines
            </button>
          </div>

          {/* Content Render */}
          <div className="animate-fade-in">
            {/* BLOGS */}
            {activeTab === 'blogs' && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                  <Link href={`/insights/blog/${blog.slug}`} key={blog.id} className="group">
                    <Card className="h-full flex flex-col p-6 border-border hover:border-accent hover:shadow-lg transition-all duration-300 bg-card">
                      <div className="mb-4">
                        <span className="inline-block text-[10px] font-black uppercase tracking-widest text-accent mb-3 px-2 py-1 bg-accent/10 rounded">
                          Article
                        </span>
                        <CardTitle className="text-lg leading-tight group-hover:text-accent transition-colors">
                          {blog.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-sm flex-grow line-clamp-3 mb-6">
                        {blog.excerpt}
                      </CardDescription>
                      <div className="flex items-center text-sm font-bold text-accent mt-auto group-hover:translate-x-1 transition-transform">
                        Read full article <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            )}

            {/* CASE STUDIES */}
            {activeTab === 'casestudy' && (
              <div className="grid gap-6 md:grid-cols-2">
                {[1, 2].map((item) => (
                  <Card key={item} className="p-8 border-border flex flex-col items-center justify-center text-center bg-card min-h-[300px]">
                    <Presentation className="w-12 h-12 text-accent/30 mb-4" />
                    <CardTitle className="mb-2">Automotive Sub-Assembly Localization</CardTitle>
                    <CardDescription>
                      Coming soon. A detailed case study demonstrating cross-border execution and vendor consolidation in the automotive tier-2 sector.
                    </CardDescription>
                  </Card>
                ))}
              </div>
            )}

            {/* USER GUIDELINES */}
            {activeTab === 'guidelines' && (
              <Card className="p-8 md:p-12 border-border bg-card max-w-4xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <FileText className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-2xl font-extrabold tracking-tight">Platform User Guidelines</h2>
                </div>
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-foreground/80 space-y-6">
                  <p>
                    Balbird operates as a closed-loop execution network. To maintain the integrity and reliability of our manufacturing ecosystem, all network participants must adhere to strict operational guidelines.
                  </p>
                  
                  <h3 className="text-lg font-bold text-foreground">1. Commitment to Execution</h3>
                  <p>
                    We are not a marketplace for casual browsing. Suppliers joining the network must be prepared to execute projects under strict quality control, timeline compliance, and active telemetry monitoring.
                  </p>

                  <h3 className="text-lg font-bold text-foreground">2. Communication Protocols</h3>
                  <p>
                    All project-related communication, engineering changes, and DFM updates must be logged within the designated operational verticals. Avoiding the structured communication loops jeopardizes the safety and traceability of mobility components.
                  </p>

                  <h3 className="text-lg font-bold text-foreground">3. Traceability & Transparency</h3>
                  <p>
                    From raw material origin to final batch inspection, participants are required to maintain unbroken documentation trails. Our Execution Cells are deployed to assist, but ultimate responsibility for compliance remains with the facility operators.
                  </p>

                  <div className="p-4 bg-muted border border-border/50 rounded-xl mt-8">
                    <p className="text-sm m-0">
                      <strong>Note:</strong> Detailed user onboarding manuals and compliance checklists are provided directly to qualified suppliers upon successful admission into the network.
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </div>
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
