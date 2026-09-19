'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, LayoutDashboard, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Primary nav links (shown in desktop bar)
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '#',
      dropdown: [
        { name: 'CDMO', href: '/capabilities' },
        { name: 'Intelligent Order & Procurement', href: '/services/intelligent-order-procurement' },
        { name: 'Intelligent Task Orchestration', href: '/services/intelligent-task-orchestration' }
      ]
    },
    { name: 'Capacity & Capabilities', href: '/capacity-ecosystem' },
    { name: 'Network', href: '/network' },
    { name: 'Insights', href: '/insights' },
    { name: 'Active Programs', href: '/active-programs' },
  ];

  // All links (shown in mobile menu)
  const allLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'CDMO', href: '/capabilities' },
    { name: 'Order & Procurement', href: '/services/intelligent-order-procurement' },
    { name: 'Task Orchestration', href: '/services/intelligent-task-orchestration' },
    { name: 'Capacity & Capabilities', href: '/capacity-ecosystem' },
    { name: 'Network', href: '/network' },
    { name: 'Insights', href: '/insights' },
    { name: 'Active Programs', href: '/active-programs' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  if (pathname?.startsWith('/dashboard')) {
    return null;
  }

  const transparentPages = ['/', '/about', '/capabilities', '/network', '/active-programs', '/capacity-ecosystem'];
  const isTransparent = transparentPages.includes(pathname || '') && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent 
            ? 'bg-transparent py-5' 
            : 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border py-3'
        }`}
      >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 z-50">
          <Image
            src="/logo.png"
            alt="Balbird Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className={`font-bold text-xl tracking-tight transition-colors text-foreground`}>
            Balbird Industries
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 shrink-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            if (link.dropdown) {
              const isDropdownActive = link.dropdown.some(item => pathname === item.href);
              return (
                <div key={link.name} className="relative group">
                  <span
                    className={`flex items-center gap-1 cursor-pointer text-[13px] font-medium whitespace-nowrap transition-colors py-2 ${
                      isDropdownActive ? 'text-accent font-bold' : 'text-foreground/80 hover:text-accent'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-3 h-3" />
                  </span>
                  <div className="absolute top-full left-0 mt-2 w-72 bg-background border border-border shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] flex flex-col py-2">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className={`px-4 py-2 text-[13px] font-medium hover:bg-muted hover:text-accent transition-colors ${
                          pathname === sublink.href ? 'text-accent bg-muted/50' : 'text-foreground/80'
                        }`}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] font-medium whitespace-nowrap transition-colors ${
                  isActive ? 'text-accent font-bold' : 'text-foreground/80 hover:text-accent'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Dashboard icon link */}
          <Link
            href="/dashboard"
            className={`relative p-2 rounded-lg transition-colors ${
              pathname?.startsWith('/dashboard')
                ? 'bg-accent/20 text-accent'
                : 'text-foreground/70 hover:text-accent hover:bg-foreground/5'
            }`}
            title="Dashboard"
          >
            <LayoutDashboard className="w-[18px] h-[18px]" />
            <span className="absolute -top-1 -right-2 bg-accent text-accent-foreground text-[8px] font-extrabold px-1 rounded-sm shadow-sm">BETA</span>
          </Link>

          {/* CTA Button */}
          <Link
            href="/request-strategic-discussion"
            className={`shrink-0 px-5 py-2 rounded-md font-medium text-sm whitespace-nowrap transition-all ${
              isTransparent
                ? 'bg-accent text-white hover:bg-accent/90'
                : 'bg-accent text-white hover:bg-accent/90 shadow-sm'
            }`}
          >
            Start a Project
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden z-50 p-2 transition-colors text-foreground`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-background z-[100] flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <button
          className="absolute top-6 right-6 p-2 text-foreground"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>
        <div className="flex flex-col items-center gap-7">
          {allLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-2xl font-bold ${
                pathname === link.href
                  ? 'text-accent'
                  : 'text-foreground'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/request-strategic-discussion"
            className="px-8 py-4 bg-foreground text-background rounded-md font-bold mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start a Project
          </Link>
        </div>
      </div>
    </>
  );
}
