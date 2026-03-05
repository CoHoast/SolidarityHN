import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/images/shn-logo.png" 
                alt="SHN" 
                width={40} 
                height={40}
                className="w-10 h-10 brightness-0 invert"
              />
              <div>
                <span className="font-bold text-white text-base">Solidarity Health</span>
                <span className="text-gray-400 text-sm block -mt-1">Network</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Your trusted partner in total benefits solutions since 1989. 
              Empowering your workforce, enriching your future.
            </p>
            <div className="text-sm text-gray-400">
              <p>4853 Galaxy Parkway, Suite K</p>
              <p>Cleveland, OH 44128</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">Our Company</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link href="/approach" className="text-gray-400 hover:text-white transition-colors text-sm">Our Approach</Link></li>
              <li><Link href="/impact" className="text-gray-400 hover:text-white transition-colors text-sm">Our Impact</Link></li>
              <li><Link href="/partnerships" className="text-gray-400 hover:text-white transition-colors text-sm">Partnerships</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Solutions</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-400 text-sm">BenefitsConnect™</span></li>
              <li><span className="text-gray-400 text-sm">BenefitsFlex™</span></li>
              <li><span className="text-gray-400 text-sm">BenefitsSupport™</span></li>
              <li><span className="text-gray-400 text-sm">BenefitsBrief™</span></li>
              <li><Link href="/partnerships" className="text-gray-400 hover:text-white transition-colors text-sm">RetireeEdge™</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@shninc.org" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@shninc.org
                </a>
              </li>
              <li>
                <span className="text-gray-400 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mon - Fri: 8:00 AM - 5:00 PM EST
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Schedule a Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Solidarity Health Network. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
