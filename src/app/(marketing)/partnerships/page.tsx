import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Reduce Client Costs",
    description: "Help your clients reduce costs, minimize liabilities, and streamline day-to-day administrative burdens related to retiree healthcare plans.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Bespoke Solutions",
    description: "Our dedicated team of experts collaborates with you to create strategies that align with your unique objectives. No more generic approaches—only solutions as distinct as your needs.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Elevate Member Experiences",
    description: "We're committed to improving the member journey, making retiree healthcare more seamless and gratifying. When members feel valued, your client's reputation soars.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Seamless Transitions",
    description: "Change is inevitable, but disruption doesn't have to be. SHN helps you navigate benefit alterations with finesse, minimizing member impact. Transition periods become opportunities for growth.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

const challenges = [
  "Benefit strategy formulation",
  "Cost reduction initiatives",
  "OPEB liabilities management",
  "Member-centric administration",
  "Regulatory compliance",
  "Plan transitions",
];

const partnerTypes = [
  {
    title: "Benefits Brokers",
    description: "Expand your service offering with our comprehensive retiree solutions.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Consultants",
    description: "Partner with us to deliver exceptional outcomes for your clients.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Financial Advisors",
    description: "Help your clients navigate the complexities of retiree healthcare planning.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Broker & Consultant Partnerships
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Partner with SHN and revolutionize client satisfaction and business success
          </p>
        </div>
      </section>

      {/* RetireeEdge Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <span className="text-primary text-sm font-semibold">Introducing</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                RetireeEdge™
              </h2>
              <p className="text-xl text-primary font-medium mb-6">
                Revolutionize Client Satisfaction and Business Success!
              </p>
              <div className="space-y-4 text-gray-600">
                <p>
                  Are you ready to elevate your group plan sponsor services to new heights? Look no further 
                  than Solidarity Health Network's groundbreaking solution - RetireeEdge™. We're not just a 
                  partner; we're your strategic ally in conquering the intricate challenges faced by your 
                  group plan sponsor clients.
                </p>
                <p>
                  At SHN, we understand that navigating the world of retiree healthcare plans can be a 
                  labyrinth of complexities. That's where we step in. With our unparalleled expertise, 
                  tailored solutions, and top-notch services, we don't just assist you - we empower you 
                  to drive transformative change.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-4">RetireeEdge™</div>
                  <p className="text-lg text-gray-600">Your Strategic Partner in Retiree Benefits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Power of Partnership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Power of Partnership</h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">
              What We Bring to the Table
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges We Solve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Your Success Story, Tailored</h2>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                We Understand Your Challenges
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Group retiree benefits can be a maze of complexities. We understand the hurdles you face 
                and the goals you aspire to achieve. Our solutions are designed to address:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {challenges.map((challenge) => (
                  <div key={challenge} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment</h3>
              <p className="text-gray-600 mb-6">
                We don't offer one-size-fits-all solutions. Your challenges deserve tailor-made answers. 
                Our dedicated team of experts collaborates with you to create strategies that align with 
                your unique objectives.
              </p>
              <p className="text-primary font-semibold">
                No more generic approaches—only solutions as distinct as your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Who We Partner With</h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">
              Join Our Partner Network
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type) => (
              <Card key={type.title} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
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
            Ready to Partner with SHN?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Imagine a future where your clients can focus on what truly matters while we handle the intricacies. 
            Let's make it happen together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Become a Partner</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
