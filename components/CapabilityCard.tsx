"use client";

import { useState } from "react";
import Image from "next/image";
import { Download } from "lucide-react";

interface CapabilityItem {
  title: string;
  image: string;
  details: string[];
}

export default function CapabilityCard({ item }: { item: CapabilityItem }) {
  const [expanded, setExpanded] = useState(false);

  // Generate a dummy download link based on the title
  const pdfLink = `/downloads/${item.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-specs.pdf`;

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Media Area */}
      <div className="relative aspect-[16/9] w-full bg-muted border-b border-border/50">
        <Image 
          src={item.image} 
          alt={item.title} 
          fill 
          className="object-cover"
        />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-center mb-4 text-accent">{item.title}</h3>
        
        <ul className="space-y-2 mb-6 flex-grow">
          {item.details.map((detail, dIdx) => (
            <li key={dIdx} className="flex items-start gap-2 text-sm text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: detail.replace(/Applications:/, '<strong>Applications:</strong>') }} />
            </li>
          ))}
        </ul>

        {/* Expanded Area */}
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? "max-h-[200px] opacity-100 mb-6" : "max-h-0 opacity-0 mb-0"
          }`}
        >
          <div className="p-4 bg-muted/50 rounded-lg border border-border/50">
            <p className="text-sm text-foreground/80 mb-3 text-center">
              Detailed machine specifications, facility layouts, and compliance certificates are available.
            </p>
            <a 
              href={pdfLink}
              // This is a dummy download link for now. 
              // To make it functional, place the actual PDF in public/downloads/ and use its exact path.
              onClick={(e) => {
                // Prevent 404 navigation for the demo since the PDF doesn't actually exist
                if (pdfLink.includes("downloads")) {
                  e.preventDefault();
                  alert("This is a placeholder PDF download button. Please place your PDFs in the public/downloads directory.");
                }
              }}
              className="flex items-center justify-center gap-2 w-full bg-accent text-white font-bold py-2 px-4 rounded transition-colors hover:bg-accent/90 text-sm"
            >
              <Download className="w-4 h-4" /> Download PDF Specs
            </a>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center mt-auto">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="bg-foreground hover:bg-foreground/90 text-background font-bold py-2 px-6 rounded transition-colors inline-flex items-center gap-2 text-sm shadow-sm"
          >
            {expanded ? "Less Info" : "More Info"} 
            <span className={`text-lg leading-none transition-transform duration-300 inline-block ${expanded ? '-rotate-90' : ''}`}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
