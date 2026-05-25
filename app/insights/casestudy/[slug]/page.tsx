import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Presentation, User } from 'lucide-react';
import { getCaseStudyBySlug, casestudies } from '@/lib/data/casestudies';

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return casestudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const casestudy = getCaseStudyBySlug(slug);

  if (!casestudy) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Article Navigation */}
      <div className="pt-32 pb-8 md:pt-40 md:pb-12 bg-background">
        <div className="w-full max-w-5xl px-4 md:px-12 lg:px-24">
          <Link 
            href="/insights?tab=casestudy" 
            className="inline-flex items-center text-sm font-bold text-accent hover:text-accent/80 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <section className="pb-24">
        <div className="w-full max-w-5xl px-4 md:px-12 lg:px-24">
          <div className="w-full animate-fade-in">
            {/* Article-style Header */}
            <div className="mb-12 border-b border-border/40 pb-10">
              <div className="flex items-center gap-3 text-sm font-semibold text-accent mb-6">
                <span className="uppercase tracking-widest">Case Study</span>
                <span className="text-foreground/30">•</span>
                <span className="text-foreground/60">Execution Network</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-8 max-w-5xl">
                {casestudy.title}
              </h1>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
                  <Presentation className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">By Balbird Case Studies</p>
                  <p className="text-xs text-foreground/60">Manufacturing Solutions</p>
                </div>
              </div>
            </div>

            {/* Article-style Body */}
            <div 
              className="prose prose-sm md:prose-lg dark:prose-invert max-w-none w-full text-foreground/80 space-y-8
              prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
              prose-p:leading-relaxed
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-ul:list-disc prose-ul:pl-6"
              dangerouslySetInnerHTML={{ __html: casestudy.content }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
