'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith('/dashboard')) {
    return null;
  }

  return (
    <footer className="bg-slate-50 text-foreground/70 py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/network" className="hover:text-accent transition-colors">Network Ecosystem</Link></li>
              <li><Link href="/insights" className="hover:text-accent transition-colors">Insights & Resources</Link></li>
              <li><Link href="/join-network" className="hover:text-accent transition-colors">Join the Network</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/capabilities" className="hover:text-accent transition-colors">CDMO Operations</Link></li>
              <li><Link href="/capabilities" className="hover:text-accent transition-colors">Execution Coordination</Link></li>
              <li><Link href="/capabilities" className="hover:text-accent transition-colors">Manufacturing Traceability</Link></li>
              <li><Link href="/capabilities" className="hover:text-accent transition-colors">Consortium Coordination</Link></li>
            </ul>
          </div>

          {/* Mobility Sectors */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-6">Mobility Sectors</h4>
            <ul className="space-y-3">
              <li><Link href="/mobility-sectors" className="hover:text-accent transition-colors">Automotive Components</Link></li>
              <li><Link href="/mobility-sectors" className="hover:text-accent transition-colors">Electric Vehicles</Link></li>
              <li><Link href="/mobility-sectors" className="hover:text-accent transition-colors">Rail & Metro</Link></li>
              <li><Link href="/mobility-sectors" className="hover:text-accent transition-colors">Aerospace Mobility</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-6">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@balbirdindustries.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Mail size={16} />
                  <span>info@balbirdindustries.com</span>
                </a>
              </li>
              <li>
                <Link href="/request-strategic-discussion" className="inline-block mt-2 px-5 py-2.5 bg-accent text-white font-bold rounded hover:bg-accent/90 transition-all text-sm">
                  Request Discussion
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Balbird Industries. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/balbirdindustries/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            {/* 
            <a href="https://twitter.com/balbird" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://youtube.com/@balbird" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="YouTube">
              <Youtube size={20} />
            </a> 
            */}
          </div>
        </div>
      </div>
    </footer>
  );
}
