import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/images/logo-icon.png" 
                alt="SHN" 
                width={40} 
                height={40}
                className="w-10 h-10 bg-white rounded-lg p-1"
              />
              <div>
                <span className="font-bold text-white">Solidarity Health</span>
                <span className="text-white/60 text-sm block -mt-1">Network</span>
              </div>
            </div>
            <p className="text-white/60 max-w-md text-sm md:text-base">
              Your trusted partner in total benefits solutions since 1989. 
              Together, let&apos;s build a brighter future for your employees and your business.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm md:text-base text-white/60">
              <p>Solidarity Health Network</p>
              <p>4853 Galaxy Parkway, Suite K</p>
              <p>Cleveland, OH 44128</p>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/10" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Solidarity Health Network. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
