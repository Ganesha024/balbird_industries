'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { ChevronDown, BookOpen, Presentation, FileText, ArrowRight, HelpCircle, Plus, Minus } from "lucide-react";
import { blogs } from '@/lib/data/blogs';
import { casestudies } from '@/lib/data/casestudies';

type TabType = 'blogs' | 'casestudy' | 'guidelines' | 'faq';

const faqs = [
  {
    question: "What is Balbird Industries?",
    answer: "Balbird Industries is a Cross-Border Manufacturing Execution Partner specializing in mobility components. We go beyond traditional sourcing by directly orchestrating and managing production across a verified network of specialized manufacturers."
  },
  {
    question: "What industries do you serve?",
    answer: "We specialize in safety-critical mobility sectors, including aerospace, electric vehicles (EV), automotive, commercial railway, marine, and heavy equipment manufacturing."
  },
  {
    question: "How is Balbird different from a manufacturing marketplace?",
    answer: "Unlike a marketplace that simply connects clients with manufacturers and steps away, Balbird actively manages the execution. We integrate process telemetry, conduct on-site compliance audits using our Execution Cells, and take responsibility for final part quality and delivery timelines."
  },
  {
    question: "What is the Consortium Manufacturing Model?",
    answer: "Instead of relying on a single facility, we pool the capabilities of specialized mid-sized factories into structured consortiums. This distributes risk, aggregates capacity, and allows OEMs to scale production dynamically without single points of failure."
  },
  {
    question: "How do you ensure quality and compliance across borders?",
    answer: "We enforce standardized quality gates, unbroken traceability trails (including heat numbers and melt logs), and deploy trained Execution Cells to monitor shop floors directly. We align with global standards like IATF 16949 and AS9100."
  },
  {
    question: "What are Execution Cells?",
    answer: "Execution Cells are trained cohorts of engineering students deployed directly to manufacturing nodes. They handle real-time process documentation, quality logging, and digital tracking, acting as an active telemetry layer that ensures compliance without adding overhead to the factory."
  },
  {
    question: "Do you handle Design-for-Manufacturing (DFM) reviews?",
    answer: "Yes. Before production begins, we conduct automated and manual DFM screening to validate CAD designs against the specific machine capabilities of the matched facility, minimizing scrap and rework."
  },
  {
    question: "What capabilities exist within the Balbird ecosystem?",
    answer: "Our network covers a vast range of industrial processes including high-precision CNC turning, VMC machining (up to 1200mm envelopes), heavy fabrication, precision welding, plastic injection molding, and specialized surface treatments."
  },
  {
    question: "How do manufacturers join the manufacturing network?",
    answer: "Manufacturers must pass our rigorous pre-qualification audits, which verify machine specifications, operator certifications, and quality management systems. You can apply through the 'Join Network' page."
  },
  {
    question: "Can I track my project's progress in real-time?",
    answer: "Yes. We utilize centralized milestone tracking and low-code automated workflows to provide OEMs with total visibility into work-in-progress metrics, QA sign-offs, and shipping schedules."
  }
];

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('blogs');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1] max-w-3xl text-center mx-auto">
            Industry<br />
            <span className="text-accent">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 font-medium leading-relaxed text-center">
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
            <button
              onClick={() => setActiveTab('faq')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === 'faq' 
                  ? 'bg-accent text-white shadow-md' 
                  : 'bg-muted text-foreground/70 hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              <HelpCircle className="w-4 h-4" /> FAQs
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
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {casestudies.map((casestudy) => (
                  <Link href={`/insights/casestudy/${casestudy.slug}`} key={casestudy.id} className="group">
                    <Card className="h-full flex flex-col p-6 border-border hover:border-accent hover:shadow-lg transition-all duration-300 bg-card">
                      <div className="mb-4">
                        <span className="inline-block text-[10px] font-black uppercase tracking-widest text-accent mb-3 px-2 py-1 bg-accent/10 rounded">
                          Case Study
                        </span>
                        <CardTitle className="text-lg leading-tight group-hover:text-accent transition-colors">
                          {casestudy.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-sm flex-grow line-clamp-3 mb-6">
                        {casestudy.excerpt}
                      </CardDescription>
                      <div className="flex items-center text-sm font-bold text-accent mt-auto group-hover:translate-x-1 transition-transform">
                        Read full case study <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            )}

            {/* USER GUIDELINES */}
            {activeTab === 'guidelines' && (
              <div className="w-full animate-fade-in">
                {/* Article-style Header */}
                <div className="mb-12 border-b border-border/40 pb-10">
                  <div className="flex items-center gap-3 text-sm font-semibold text-accent mb-6">
                    <span className="uppercase tracking-widest">Guidelines</span>
                    <span className="text-foreground/30">•</span>
                    <span className="text-foreground/60">Updated Recently</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-8 max-w-4xl">
                    Platform User Guidelines: Maintaining the Integrity of the Network
                  </h1>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
                      <FileText className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">By Balbird Operations</p>
                      <p className="text-xs text-foreground/60">Execution Team</p>
                    </div>
                  </div>
                </div>

                {/* Article-style Body */}
                <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-4xl text-foreground/80 space-y-8
                  prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
                  prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
                  prose-p:leading-relaxed
                  prose-strong:text-foreground"
                >
                  <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
                    Balbird operates as a closed-loop execution network. To maintain the integrity and reliability of our manufacturing ecosystem, all network participants must adhere to strict operational guidelines.
                  </p>
                  
                  <h3>1. Commitment to Execution</h3>
                  <p>
                    We are not a marketplace for casual browsing. Manufacturers joining the network must be prepared to execute projects under strict quality control, timeline compliance, and active telemetry monitoring. Every node in the network is expected to perform with industrial-grade reliability.
                  </p>

                  <h3>2. Communication Protocols</h3>
                  <p>
                    All project-related communication, engineering changes, and DFM updates must be logged within the designated operational verticals. Avoiding the structured communication loops jeopardizes the safety and traceability of mobility components. Ad-hoc emails or undocumented calls are strictly prohibited when handling safety-critical dimensions.
                  </p>

                  <h3>3. Traceability & Transparency</h3>
                  <p>
                    From raw material origin to final batch inspection, participants are required to maintain unbroken documentation trails. Our Execution Cells are deployed to assist, but ultimate responsibility for compliance remains with the facility operators. Heat numbers, melt logs, and coordinate measurement reports must be permanently archived and accessible.
                  </p>

                  <div className="p-6 bg-accent/5 border-l-4 border-l-accent mt-12 rounded-r-xl">
                    <p className="text-sm m-0 font-medium">
                      <strong className="text-accent">Note:</strong> Detailed user onboarding manuals and compliance checklists are provided directly to qualified manufacturers upon successful admission into the network.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* FAQs */}
            {activeTab === 'faq' && (
              <div className="w-full max-w-5xl mx-auto animate-fade-in">
                <div className="mb-12 border-b border-border/40 pb-10 text-center">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-6">
                    Frequently Asked Questions
                  </h1>
                  <p className="text-lg text-foreground/70 font-medium">
                    Everything you need to know about the Balbird manufacturing execution network.
                  </p>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div 
                        key={index} 
                        className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                          isOpen ? 'border-accent bg-accent/5' : 'border-border bg-card hover:border-accent/50'
                        }`}
                      >
                        <button 
                          onClick={() => setOpenFaq(isOpen ? null : index)}
                          className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        >
                          <span className={`font-bold text-lg md:text-xl pr-8 ${isOpen ? 'text-accent' : 'text-foreground'}`}>
                            {faq.question}
                          </span>
                          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                            isOpen ? 'bg-accent text-white' : 'bg-muted text-foreground/60'
                          }`}>
                            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </div>
                        </button>
                        
                        <div 
                          className={`transition-all duration-300 ease-in-out ${
                            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 pt-0 text-foreground/80 leading-relaxed text-sm md:text-base border-t border-border/50 mx-6">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-muted text-foreground relative overflow-hidden">

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
