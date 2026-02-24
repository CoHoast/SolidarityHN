import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const serviceCategories = [
  {
    title: "Benefit Administration",
    description: "Comprehensive management of your employee benefit programs with precision and care.",
    icon: "📋",
    services: [
      { name: "Benefit Administration", desc: "Full-service management of all employee benefit programs" },
      { name: "Billing & Invoicing", desc: "Accurate, timely billing and payment processing" },
      { name: "Eligibility Management", desc: "Real-time eligibility tracking and verification" },
      { name: "Benefit Audits", desc: "Comprehensive audits to ensure accuracy and compliance" },
      { name: "Fringe Benefit Administration", desc: "Management of supplemental employee benefits" },
    ]
  },
  {
    title: "Health Plans",
    description: "Flexible health plan solutions designed to meet your organization's unique needs.",
    icon: "🏥",
    services: [
      { name: "Self-Funded Plans", desc: "Custom solutions that put you in control of healthcare costs" },
      { name: "Fully Insured Plans", desc: "Traditional fully insured plan administration and support" },
      { name: "Retiree Health Care", desc: "Specialized programs for your retired workforce" },
      { name: "Dental & Vision", desc: "Complete dental and vision benefit administration" },
      { name: "ACA Mandates", desc: "Full compliance with Affordable Care Act requirements" },
    ]
  },
  {
    title: "Claims & Processing",
    description: "Efficient, accurate claims processing with industry-leading turnaround times.",
    icon: "📊",
    services: [
      { name: "Claims Processing", desc: "Efficient, accurate processing with rapid turnaround" },
      { name: "Prescription Drug Benefits", desc: "Comprehensive drug benefit management" },
      { name: "Genetic Testing Compatibility", desc: "Testing for prescription drug compatibility" },
      { name: "Retiree Drug Subsidy Administration", desc: "RDS program management and compliance" },
      { name: "Retiree Drug Subsidy Recovery", desc: "Post-reconciliation subsidy recovery services" },
    ]
  },
  {
    title: "Retirement Services",
    description: "Complete retirement benefit administration for your workforce.",
    icon: "🎯",
    services: [
      { name: "Annuity Administration", desc: "Full-service annuity program management" },
      { name: "Pension Administration", desc: "Comprehensive pension plan administration" },
      { name: "Retiree Benefits", desc: "Continued benefit support for retired employees" },
    ]
  },
  {
    title: "Support Services",
    description: "USA-based support ensuring your members always have help when they need it.",
    icon: "📞",
    services: [
      { name: "Call Center Services", desc: "USA-based support for your members" },
      { name: "Member Services", desc: "Dedicated support for plan participants" },
      { name: "Employer Support", desc: "Expert guidance for HR teams and administrators" },
    ]
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <Image 
                src="/images/logo-icon.png" 
                alt="SHN" 
                width={40} 
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <div className="hidden xs:block">
                <span className="font-bold text-primary text-sm sm:text-base">Solidarity Health</span>
                <span className="text-muted-foreground text-xs sm:text-sm block -mt-1">Network</span>
              </div>
            </Link>
            
            <button className="md:hidden p-2 text-muted-foreground hover:text-primary">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link href="/services" className="text-sm font-medium text-primary">Services</Link>
              <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Testimonials</Link>
              <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
            <Button asChild className="hidden md:inline-flex">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-muted/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
            Real Health Solutions,{" "}
            <span className="text-secondary">Accessible For All</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive benefit administration and consulting services tailored to your 
            organization&apos;s unique needs. We handle the complexity so you can focus on your people.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-20">
            {serviceCategories.map((category, idx) => (
              <div key={category.title} className={idx % 2 === 1 ? "" : ""}>
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <span className="text-4xl md:text-5xl">{category.icon}</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{category.title}</h2>
                    <p className="text-sm md:text-base text-muted-foreground mt-1">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {category.services.map((service) => (
                    <Card key={service.name} className="group hover:shadow-lg transition-all hover:border-primary/50">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">{service.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {idx < serviceCategories.length - 1 && (
                  <Separator className="mt-12 md:mt-20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <Badge variant="outline" className="mb-4">Why SHN</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              The SHN Difference
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: "🎯", title: "Precision", desc: "Meticulous attention to detail in every claim and process" },
              { icon: "⚡", title: "Speed", desc: "Industry-leading turnaround times on claims and inquiries" },
              { icon: "🤝", title: "Partnership", desc: "We become an extension of your team, not just a vendor" },
              { icon: "🇺🇸", title: "USA-Based", desc: "All our support staff are located right here in the USA" },
            ].map((item) => (
              <Card key={item.title} className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Benefits?
            </h2>
            <p className="text-base md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our comprehensive services can help your organization 
              attract and retain top talent while controlling costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
          
          <p className="text-center text-white/40 text-sm">
            © {new Date().getFullYear()} Solidarity Health Network. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
