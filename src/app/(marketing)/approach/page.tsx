import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const approaches = [
  {
    title: "Expert Guidance",
    description: "Navigating the ever-changing landscape of employee benefits can be overwhelming. That's why our team of experienced benefits consultants is here to guide you through every step of the process. From plan design and implementation to ongoing support and strategic planning, we are your trusted advisors, providing valuable insights to help you make informed decisions.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Personalized Solutions",
    description: "No two organizations are the same, and we recognize the importance of tailoring our solutions to fit your specific requirements. Our team takes the time to understand your company's culture, workforce demographics, and budget constraints, allowing us to craft personalized benefit plans that resonate with your employees and align with your business objectives.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Technology-Driven Efficiency",
    description: "We leverage cutting-edge technology and streamlined processes to enhance the efficiency of benefits administration. Our user-friendly online platforms make it easy for employees to access and manage their benefits, simplifying enrollment and claims processing for HR teams.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Focus on Employee Well-Being",
    description: "Employee well-being is at the heart of what we do. We strive to provide benefit packages that go beyond traditional healthcare coverage, encompassing wellness programs and resources to promote a healthy and active workforce and engaged retirees.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const differentiators = [
  {
    title: "Client-Centric Philosophy",
    description: "We place your organization's unique needs and goals at the forefront of everything we do.",
  },
  {
    title: "Decades of Experience",
    description: "35+ years of industry knowledge working for you and your employees.",
  },
  {
    title: "Proactive Communication",
    description: "We keep you informed and ahead of regulatory changes and industry trends.",
  },
  {
    title: "Continuous Improvement",
    description: "We constantly evolve our services to deliver better outcomes.",
  },
];

export default function ApproachPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Approach
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A client-centric approach that places your organization's unique needs and goals 
            at the forefront of everything we do.
          </p>
        </div>
      </section>

      {/* Approach Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">How We Work</h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Commitment to Your Success
            </p>
          </div>
          
          <div className="space-y-16">
            {approaches.map((approach, index) => (
              <div key={approach.title} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-6">
                    {approach.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{approach.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{approach.description}</p>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                    <div className="text-primary/20 transform scale-[3]">
                      {approach.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">What Sets Us Apart</h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">
              The SHN Difference
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <Card key={item.title} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Experience the SHN Approach
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Let us show you how our client-centric methodology can transform your benefits experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
