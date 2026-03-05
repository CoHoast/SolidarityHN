import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Four Core Solutions
const coreSolutions = [
  {
    name: "BenefitsConnect™",
    tagline: "Streamlined Benefit Management",
    description: "From meticulous benefit planning to seamless implementation, smooth transitions, and a successful benefit launch. Our Eligibility Services ensure accuracy and efficiency, while our Benefits Consulting brings strategic insights.",
    features: ["Benefit Planning", "Implementation", "Eligibility Services", "Benefits Consulting"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    name: "BenefitsFlex™",
    tagline: "Tailored Flexibility at Its Best",
    description: "As your trusted Third-Party Administrator, we deliver solutions that cater to your unique needs. Say goodbye to 'We can't do that' because with BenefitsFlex™, customization knows no bounds.",
    features: ["Custom TPA Solutions", "Compliance Expertise", "Carrier Relationships", "Scalable Plans"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    name: "BenefitsSupport™",
    tagline: "Advocacy and Exceptional Service",
    description: "We are your partner in advocating for retirees, employees, trustees, plan sponsors, and carriers alike. With a dedicated account advocate at your service, you can count on unwavering support.",
    features: ["Dedicated Advocates", "US-Based Call Center", "Audit Support", "Renewal Assistance"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: "BenefitsBrief™",
    tagline: "Education and Compliance Excellence",
    description: "We're committed to a steadfast approach to compliance and education. Retirees are never overlooked, and our solutions are designed to withstand scrutiny with comprehensive compliance resources.",
    features: ["Compliance Resources", "Educational Materials", "Regulatory Updates", "Best Practices"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

// Who We Serve
const sectors = [
  {
    name: "Labor Unions",
    description: "Comprehensive benefit solutions for union members and their families.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: "Commercial Sector",
    description: "Tailored corporate benefit packages for businesses of all sizes.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: "Public Sector",
    description: "Specialized solutions for government and municipal employees.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
];

// Services List
const services = [
  { title: "Benefit Administration", desc: "Comprehensive management of your employee benefit programs" },
  { title: "Self-Funded Plans", desc: "Custom solutions that put you in control of healthcare costs" },
  { title: "Retiree Health Care", desc: "Specialized programs for your retired workforce" },
  { title: "Claims Processing", desc: "Efficient, accurate processing with rapid turnaround" },
  { title: "Prescription Drug Benefits", desc: "Drug benefit management and genetic testing compatibility" },
  { title: "Call Center Services", desc: "USA-based support for your members" },
  { title: "Billing & Invoicing", desc: "Accurate, timely billing and invoicing services" },
  { title: "ACA Mandates", desc: "Full compliance with Affordable Care Act requirements" },
  { title: "Dental & Vision", desc: "Complete dental and vision benefit administration" },
  { title: "Fully Insured Plans", desc: "Traditional fully insured plan administration" },
  { title: "Eligibility Management", desc: "Accurate eligibility tracking and verification" },
  { title: "Benefit Audits", desc: "Comprehensive audits to ensure accuracy and compliance" },
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

const impactStats = [
  { value: "20-50%", label: "Immediate Savings", desc: "For groups moving to Medicare Advantage" },
  { value: "95+", label: "Net Promoter Score", desc: "Industry-leading customer satisfaction" },
  { value: "100%", label: "Client Retention", desc: "Our clients stay with us year after year" },
  { value: "Annual", label: "Market Analysis", desc: "Ensuring competitive benefits and rates" },
];

const testimonials = [
  {
    quote: "SHN performs a full scope of services as our third party administrator. On all fronts, SHN has exceeded expectations in terms of commitment, timeliness and accuracy. We view SHN as an extension of our staff who can be relied upon with the highest level of confidence.",
    author: "Christine F. Fleps",
    role: "Director of Benefits, Cleveland Cliffs",
  },
  {
    quote: "Outstanding. Extremely knowledgeable about medical claims and the insurance industry. She has the highest morals and is a woman of great integrity. She is awesome to work with. I have a great deal of respect for her.",
    author: "Aimee Fagan",
    role: "Head of North American A&H Claims, Swiss Re",
  },
  {
    quote: "I have the pleasure of recommending Solidarity Health Network, one of best TPAs I've worked with in this industry. Their team approach and depth of knowledge has been refreshing and invaluable to our clients.",
    author: "Jennifer Heinz",
    role: "Anthem Account Manager III",
  },
  {
    quote: "It has been a great experience working with Solidarity Health Network. Their staff is not only knowledgeable but are easily accessible. This has not only led to a great partnership but also a great friendship.",
    author: "Joseph F. Venere",
    role: "Contract Coordinator, Cleveland Cliffs / United Steel Workers",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary to-primary-dark">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/backgrounds/hero-bg.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="text-white/90 text-sm font-medium">Trusted Partner Since 1989</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Your Workforce,
            <br />
            <span className="text-white/90">Enriching Your Future</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10">
            As a leading third-party administrator, benefits consultant, and full-service broker, 
            we deliver comprehensive solutions that help organizations attract and retain top talent.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Who We Serve</h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">
              From Labor Unions to the Public Sector
            </p>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our expertise spans diverse sectors, united by dedication to impactful solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <Card key={sector.name} className="text-center p-8 hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
                    {sector.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{sector.name}</h3>
                  <p className="text-gray-600">{sector.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Four Core Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Four Core Solutions</h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">
              For All Your Benefit Needs
            </p>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our four cornerstones of excellence form the foundation of our business model, 
              setting us apart as your trusted partner.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {coreSolutions.map((solution) => (
              <Card key={solution.name} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{solution.name}</h3>
                      <p className="text-primary font-medium text-sm mb-3">{solution.tagline}</p>
                      <p className="text-gray-600 mb-4">{solution.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {solution.features.map((feature) => (
                          <span key={feature} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/5 text-primary">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Our Services</h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">
              Real Health Solutions, Accessible For All
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className="group p-6 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Additional Services */}
          <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
            <h4 className="font-semibold text-gray-900 mb-4">Plus Additional Services:</h4>
            <div className="flex flex-wrap gap-3">
              {additionalServices.map((service) => (
                <span key={service} className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-white border border-gray-200 text-gray-700">
                  {service}
                </span>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/services">View All Services →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-3">Our Impact</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white">
              A Clear Path to Unrivaled Outcomes
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-white/70">{stat.desc}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="secondary" asChild size="lg">
              <Link href="/impact">See Our Full Impact →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Client Success</h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">
              In Their Own Words
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <CardContent className="pt-0">
                  <svg className="w-10 h-10 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{testimonial.quote}</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Together, Let's Build a Brighter Future
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            For your employees and your business. Partner with Solidarity Health Network 
            and experience the difference of having a dedicated ally for all your benefits needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link href="/partnerships">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
