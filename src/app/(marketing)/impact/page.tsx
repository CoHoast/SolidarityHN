import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const impactStats = [
  {
    value: "20-50%",
    label: "Immediate Savings",
    description: "Immediate bottom-line savings for groups moving to Medicare Advantage for the first time.",
  },
  {
    value: "95+",
    label: "Net Promoter Score",
    description: "Industry-leading customer satisfaction and loyalty scores.",
  },
  {
    value: "100%",
    label: "Client Retention Rate",
    description: "Our clients stay with us year after year because we deliver results.",
  },
  {
    value: "Annual",
    label: "Market Analysis",
    description: "Continuous market analysis to ensure benefits and renewal rates remain competitive.",
  },
];

const outcomes = [
  {
    title: "Cost Reduction",
    description: "Up to 50% savings on healthcare costs through strategic plan design and management.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Administrative Efficiency",
    description: "Streamlined processes that free your HR team to focus on strategic initiatives.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Member Satisfaction",
    description: "Improved benefits experience leading to higher employee engagement and retention.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Compliance Assurance",
    description: "Peace of mind knowing your benefits programs meet all regulatory requirements.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: "SHN performs a full scope of services as our third-party administrator. On all fronts, SHN has exceeded expectations in terms of commitment to the matter at hand, timeliness and accuracy. We view SHN as an extension of our staff who can be relied upon with the highest level of confidence.",
    author: "Christine F. Fleps",
    role: "Director of Benefits, Cleveland Cliffs",
  },
  {
    quote: "I have the pleasure of recommending Solidarity Health Network, one of best TPAs I've worked with in this industry. They provide a wide range of services, from enrollment and communications with members, clients, and carriers, to client-specific website creation and management, a dedicated customer service call center, and Invoicing, Collection of premiums, and Reporting processing to maintain compliance for employer clients. SHN's team approach and depth of knowledge has been refreshing and invaluable to our clients.",
    author: "Jennifer Heinz",
    role: "Anthem Account Manager III",
  },
  {
    quote: "It has been a great experience working with Solidarity Health Network. Their staff is not only knowledgeable but are easily accessible. This has not only led to a great partnership but also a great friendship.",
    author: "Joseph F. Venere",
    role: "Contract Coordinator, Cleveland Cliffs / United Steel Workers",
  },
  {
    quote: "As a small business owner, I would highly recommend SHN to anyone looking to add or change health insurance. Joseph is extremely knowledgeable about the latest trends in health care and helped our company receive affordable rates while not giving up the benefits our employees need. Our employees are family, and the level funded plan is customized to their benefits, their budgets, and if problems arise, they're handled in a timely compassionate manner. SHN believes in putting small business first and it shows through their services, plans and rates.",
    author: "Anthony Rockman",
    role: "Owner, Bedford Nissan Collision Center",
  },
];

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Impact
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A Clear Path to Unrivaled Outcomes
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <Card key={stat.label} className="text-center p-8 border-2 hover:border-primary/30 transition-colors">
                <CardContent className="pt-0">
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Unmatched Outcomes</h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">
              A Promise Delivered
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome) => (
              <div key={outcome.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {outcome.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{outcome.title}</h3>
                <p className="text-gray-600">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
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
                  <p className="text-gray-700 leading-relaxed mb-6">{testimonial.quote}</p>
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
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to See Results?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join the hundreds of organizations who have transformed their benefits with SHN.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
