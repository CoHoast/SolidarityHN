"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "Our Company" },
    { href: "/services", label: "Services" },
    { href: "/approach", label: "Our Approach" },
    { href: "/impact", label: "Our Impact" },
    { href: "/partnerships", label: "Partnerships" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-24">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/images/shn-logo.png" 
              alt="Solidarity Health Network" 
              width={56} 
              height={56}
              className="w-12 h-12 sm:w-14 sm:h-14"
            />
            <div className="hidden sm:block">
              <span className="font-bold text-primary text-base sm:text-lg">Solidarity Health</span>
              <span className="text-muted-foreground text-sm block -mt-0.5">Network</span>
            </div>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button asChild className="hidden lg:inline-flex">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white absolute left-0 right-0 top-full shadow-lg">
            <nav className="flex flex-col p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t mt-2">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
