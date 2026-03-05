import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Four Core Solutions
const coreSolutions = [
  {
    name: "BenefitsConnect™",
    tagline: "Streamlined Benefit Management",
    description: "At SHN, we revolutionize your benefit management journey. From meticulous benefit planning to seamless implementation, smooth transitions, and a successful benefit launch, we've got you covered. Our Eligibility Services ensure accuracy and efficiency, while our Benefits Consulting brings strategic insights to the table.",
    features: ["Benefit Planning & Design", "Implementation Support", "Eligibility Services", "Benefits Consulting", "Transition Management", "Launch Support"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    name: "BenefitsFlex™",
    tagline: "Tailored Flexibility at Its Best",
    description: "As your trusted Third-Party Administrator (TPA), we are committed to delivering solutions that cater to your unique needs. Say goodbye to hearing \"We can't do that\" because with BenefitsFlex™, customization knows no bounds. Whether you're a large corporation or a growing business, you'll receive a tailored experience.",
    features: ["Custom TPA Solutions", "Compliance Expertise", "Strong Carrier Relationships", "Scalable Plans", "Flexible Administration", "Personalized Service"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    name: "BenefitsSupport™",
    tagline: "Advocacy and Exceptional Service",
    description: "We are your partner in advocating for retirees, employees, trustees, plan sponsors, and carriers alike. With a dedicated account advocate at your service, you can count on us to provide unwavering support. Our US-based customer care line is available Monday through Friday.",
    features: ["Dedicated Account Advocate", "US-Based Call Center", "Audit Support", "Renewal Assistance", "Member Advocacy", "Carrier Relations"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: "BenefitsBrief™",
    tagline: "Education and Compliance Excellence",
    description: "We are your dedicated partner committed to a steadfast approach to compliance and education. Our commitment to doing right by you is unwavering. Retirees are never overlooked, and our solutions are designed to withstand scrutiny.",
    features: ["Compliance Resources", "Educational Materials", "Regulatory Updates", "Best Practices", "Training Support", "Documentation"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

// Client Services
const clientServices = [
  {
    title: "Retiree Group Benefit Solutions",
    description: "We understand the importance of supporting your employees not only during their active employment but also as they transition into retirement. Our Retiree Group Benefit Solutions are designed to offer comprehensive and customized packages that cater to the unique needs of retirees.",
    features: ["Healthcare Plans", "Supplemental Coverage", "Medicare Advantage", "Drug Benefits"],
  },
  {
    title: "Self-Funded Group Benefit Solutions",
    description: "As the healthcare landscape continues to evolve, self-funded benefit plans have become an attractive option for many organizations seeking more control over their employee benefit programs. Our Self-Funded Group Benefit Solutions provide flexible and cost-effective plans.",
    features: ["Custom Plan Design", "Cost Control", "Risk Management", "Claims Analysis"],
  },
  {
    title: "Level-Funded Group Benefit Solutions",
    description: "Finding the right balance between traditional fully-insured plans and self-funding can be challenging. Our Level-Funded Group Benefit Solutions offer the best of both worlds by providing predictable monthly payments with the potential for cost savings.",
    features: ["Predictable Costs", "Potential Refunds", "Stop-Loss Protection", "Flexibility"],
  },
  {
    title: "Administration Services & Support",
    description: "Managing employee benefits can be complex and time-consuming. SHN takes the burden off your shoulders with our comprehensive Administration Services & Support, ensuring a seamless experience for both employers and employees.",
    features: ["Claims Processing", "Enrollment Assistance", "Compliance Management", "Employee Education"],
  },
];

// All Services
const allServices = [
  { category: "Benefit Administration", items: ["Benefit Administration", "Billing & Invoicing", "Eligibility Management", "Benefit Audits", "Fringe Benefit Administration"] },
  { category: "Health Plans", items: ["Self-Funded Plans", "Fully Insured Plans", "Retiree Health Care", "Dental & Vision", "ACA Mandates"] },
  { category: "Claims & Processing", items: ["Claims Processing", "Prescription Drug Benefits", "Genetic Testing Compatibility", "Retiree Drug Subsidy Administration", "Retiree Drug Subsidy Recovery"] },
  { category: "Retirement Services", items: ["Annuity Administration", "Pension Administration", "Retiree Benefits"] },
  { category: "Support Services", items: ["Call Center Services (USA-Based)", "Member Services", "Employer Support"] },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real Health Solutions, Accessible For All. Comprehensive benefit administration 
            and consulting services tailored to your organization's unique needs.
          </p>
        </div>
      </section>

      {/* Four Core Solutions */}
      <section className="py-20">
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
          
          <div className="space-y-8">
            {coreSolutions.map((solution, index) => (
              <Card key={solution.name} className={`overflow-hidden ${index % 2 === 0 ? '' : 'bg-gray-50'}`}>
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                          {solution.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{solution.name}</h3>
                          <p className="text-primary font-medium">{solution.tagline}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{solution.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Client Services</h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">
              Comprehensive Benefit Solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {clientServices.map((service) => (
              <Card key={service.title} className="p-8">
                <CardContent className="pt-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span key={feature} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/5 text-primary">
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Complete Service List</h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">
              Everything We Offer
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((category) => (
              <div key={category.category} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Benefits?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Contact us today to learn how our comprehensive services can help your organization 
            attract and retain top talent while controlling costs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
