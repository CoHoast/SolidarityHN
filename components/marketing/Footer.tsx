"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export default function MarketingFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/solidarity-logo-white.png" alt="Solidarity Health Network" className="h-12 w-auto" />
            </div>
            <p className="text-slate-400 mb-6">
              Your trusted partner in total benefits solutions since 1989. Empowering your workforce, enriching your future.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Benefit Administration",
                "PPO Network Services",
                "AI Bill Negotiation",
                "Claims Repricing",
                "Retiree Health Care",
                "Self-Funded Plans",
              ].map((service) => (
                <li key={service}>
                  <Link href="/how-it-works" className="text-slate-400 hover:text-blue-400 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Team", href: "/team" },
                { name: "Our Approach", href: "/approach" },
                { name: "Our Impact", href: "/impact" },
                { name: "Partnerships", href: "/partnerships" },
                { name: "Blog", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Solidarity Health Network</p>
                  <p className="text-slate-400">4853 Galaxy Parkway, Suite K</p>
                  <p className="text-slate-400">Cleveland, OH 44128</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">(216) 763-2484</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">info@shninc.org</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 Solidarity Health Network. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Proudly serving organizations since 1989
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
