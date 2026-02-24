import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const services = [
  { icon: "📋", title: "Benefit Administration", desc: "Comprehensive management of your employee benefit programs" },
  { icon: "💰", title: "Self-Funded Plans", desc: "Custom solutions that put you in control of healthcare costs" },
  { icon: "🏥", title: "Retiree Health Care", desc: "Specialized programs for your retired workforce" },
  { icon: "📊", title: "Claims Processing", desc: "Efficient, accurate processing with rapid turnaround" },
  { icon: "💊", title: "Prescription Drug Benefits", desc: "Drug benefit management and genetic testing compatibility" },
  { icon: "📞", title: "Call Center Services", desc: "USA-based support for your members" },
  { icon: "📄", title: "Billing & Invoicing", desc: "Accurate, timely billing and invoicing services" },
  { icon: "🏛️", title: "ACA Mandates", desc: "Full compliance with Affordable Care Act requirements" },
  { icon: "👁️", title: "Dental & Vision", desc: "Complete dental and vision benefit administration" },
  { icon: "📑", title: "Fully Insured Plans", desc: "Traditional fully insured plan administration" },
  { icon: "✓", title: "Eligibility Management", desc: "Accurate eligibility tracking and verification" },
  { icon: "🔍", title: "Benefit Audits", desc: "Comprehensive audits to ensure accuracy and compliance" },
];

const additionalServices = [
  "Fringe Benefit Administration",
  "Annuity Administration", 
  "Pension Administration",
  "Genetic Testing for Prescription Drug Compatibility",
  "Retiree Drug Subsidy Administration",
  "Retiree Drug Subsidy Recovery after Reconciliation",
];

const stats = [
  { value: "35+", label: "Years of Experience" },
  { value: "500+", label: "Organizations Served" },
  { value: "100K+", label: "Members Supported" },
  { value: "99%", label: "Client Retention" },
];

const testimonials = [
  {
    quote: "Anne is a high energy professional with a 'can do' attitude who surrounds herself with like minded professionals. She has a keen insight to all the twists and turns along the way. It would be a pleasure to work with Anne in the future.",
    author: "Industry Partner",
    role: "Healthcare Executive",
  },
  {
    quote: "Outstanding. Extremely knowledgeable about medical claims and the insurance industry. She has the highest morals and is a woman of great integrity. She is awesome to work with. I have a great deal of respect for her.",
    author: "Aimee Fagan",
    role: "Head of North American A&H Claims, Swiss Re",
  },
  {
    quote: "SHN performs a full scope of services as our third party administrator. On all fronts, SHN has exceeded expectations in terms of commitment, timeliness and accuracy. We view SHN as an extension of our staff who can be relied upon with the highest level of confidence.",
    author: "Christine F. Fleps",
    role: "Director of Benefits, Cleveland Cliffs",
  },
  {
    quote: "Alexandra Szczepaniak is extremely detail oriented. I have worked with her for 3 years and have found her to be meticulous in her work. She is dedicated, knowledgeable and hard working. She has a positive attitude and speaks respectfully to all.",
    author: "Aimee Fagan",
    role: "Head of North American A&H Claims, Swiss Re",
  },
];

export default function Home() {
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
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-muted-foreground hover:text-primary">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</Link>
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
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/images/hero-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute top-20 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Badge className="mb-4 md:mb-6 bg-secondary/10 text-secondary hover:bg-secondary/20 text-xs md:text-sm">
              Trusted Partner Since 1989
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight leading-tight">
              Empowering Your{" "}
              <span className="text-primary">Workforce</span>,{" "}
              <span className="text-secondary">Enriching</span> Your Future
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              As a leading third-party administrator, benefits consultant, and full-service broker, 
              we deliver comprehensive solutions that help organizations attract and retain top talent.
            </p>
            <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="text-base px-6 md:px-8 w-full sm:w-auto" asChild>
                <Link href="/contact">
                  Schedule Consultation
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-6 md:px-8 w-full sm:w-auto" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-white shadow-sm border">
                <div className="text-2xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4">Our Services</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Real Health Solutions,{" "}
              <span className="text-secondary">Accessible For All</span>
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground">
              Comprehensive benefit administration and consulting services tailored to your organization&apos;s needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <p className="text-sm md:text-base text-muted-foreground mb-2">Plus additional services:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {additionalServices.map((service) => (
                <Badge key={service} variant="secondary" className="text-xs md:text-sm">
                  {service}
                </Badge>
              ))}
            </div>
            <Button variant="outline" className="mt-6" asChild>
              <Link href="/services">View All Services →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section id="about" className="py-16 md:py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('/images/about-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-3 md:mb-4">About SHN</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Your Trusted Partner in{" "}
                <span className="text-primary">Total Benefits Solutions</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                Since 1989, Solidarity Health Network has been delivering personalized solutions 
                that cater to the unique needs of each organization we serve.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                Through expert guidance, cutting-edge technology, and a focus on well-being, 
                we revolutionize the benefits experience—helping our clients thrive during 
                employment and beyond retirement.
              </p>
              
              <div className="space-y-3 md:space-y-4">
                {[
                  "Personalized solutions for every organization",
                  "Cutting-edge technology and processes",
                  "Expert guidance from industry veterans",
                  "Commitment to excellence and satisfaction",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button className="mt-6 md:mt-8" asChild>
                <Link href="/about">Learn More About Us →</Link>
              </Button>
            </div>
            
            <div className="relative order-first lg:order-last">
              <div className="aspect-[4/3] rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-2xl md:rounded-3xl bg-muted flex items-center justify-center">
                  <div className="text-center p-6 md:p-8">
                    <div className="text-5xl md:text-6xl font-bold text-primary">35+</div>
                    <div className="text-lg md:text-xl text-muted-foreground mt-2">Years of Excellence</div>
                    <Separator className="my-4 md:my-6 max-w-[200px] mx-auto" />
                    <p className="text-sm md:text-base text-muted-foreground">
                      Building brighter futures for employees and businesses since 1989
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <Badge className="mb-3 md:mb-4 bg-white/10 text-white hover:bg-white/20">Client Success</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              How We&apos;ve Helped Our Clients
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-white/70">
              In their own words—hear from organizations we&apos;ve partnered with.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="bg-white/10 border-white/20">
                <CardContent className="p-4 md:p-6">
                  <div className="flex gap-1 mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-sm md:text-base text-white/90 mb-4 leading-relaxed line-clamp-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white text-sm md:text-base">{testimonial.author}</div>
                    <div className="text-xs md:text-sm text-white/60">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="relative rounded-2xl md:rounded-3xl bg-gradient-to-br from-secondary to-secondary/80 p-8 md:p-12 lg:p-16 overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(to bottom right, rgba(30, 115, 115, 0.95), rgba(30, 115, 115, 0.85)), url('/images/cta-bg.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                Continue the Conversation
              </h2>
              <p className="text-base md:text-xl text-white/80 mb-6 md:mb-8">
                Partner with Solidarity Health Network and experience the difference 
                of having a dedicated ally for all your benefits needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="bg-white text-secondary hover:bg-white/90 w-full sm:w-auto" asChild>
                  <Link href="/contact">Schedule a Meeting</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto" asChild>
                  <Link href="tel:+12165551234">
                    <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Call Us
                  </Link>
                </Button>
              </div>
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
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm md:text-base text-white/60">
                <li><Link href="/services" className="hover:text-white transition-colors">Benefit Administration</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Self-Funded Plans</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Retiree Health Care</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Claims Processing</Link></li>
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
    </div>
  );
}
