"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MarketingHeader from "@/components/marketing/Header";
import MarketingFooter from "@/components/marketing/Footer";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Network,
  Brain,
  Calculator,
  Users,
  Shield,
  Pill,
  Building2,
  Phone,
  FileText,
  CreditCard,
  Zap,
  TrendingDown,
  Clock,
  Award,
  Target,
  BarChart3,
} from "lucide-react";

const coreServices = [
  {
    icon: ClipboardCheck,
    title: "BenefitsConnect™",
    subtitle: "Comprehensive Benefit Administration",
    description: "From plan design to seamless implementation, we manage every aspect of your benefit programs with precision and care.",
    features: [
      "Benefit Plan Design & Implementation",
      "Eligibility Management & Verification",
      "COBRA Administration",
      "ACA Compliance & Reporting",
      "Open Enrollment Support",
      "Employee Communication",
    ],
    color: "from-blue-500 to-blue-600",
    image: "/doctor-tablet.jpg",
  },
  {
    icon: Network,
    title: "PPO Network Services",
    subtitle: "Nationwide Provider Access",
    description: "Access our extensive network of contracted providers with pre-negotiated rates, delivering significant savings while ensuring quality care.",
    features: [
      "50,000+ Contracted Providers",
      "Pre-Negotiated Discount Rates",
      "Provider Credentialing",
      "Network Analytics & Reporting",
      "Geographic Coverage Analysis",
      "Provider Directory Management",
    ],
    color: "from-cyan-500 to-teal-500",
    image: "/doctors-trio.jpg",
  },
  {
    icon: Brain,
    title: "AI Bill Negotiation",
    subtitle: "Intelligent Cost Reduction",
    description: "Our proprietary AI-powered system analyzes medical bills, identifies overcharges, and automatically negotiates fair prices—saving 40-60% on average.",
    features: [
      "Automated Bill Analysis",
      "Medicare-Based Fair Pricing",
      "AI-Powered Provider Negotiation",
      "Real-Time Status Tracking",
      "Settlement Documentation",
      "Appeals Management",
    ],
    color: "from-purple-500 to-indigo-500",
    image: "/team-reviewing.jpg",
  },
  {
    icon: Calculator,
    title: "Claims Repricing",
    subtitle: "Maximum Savings on Every Claim",
    description: "Advanced repricing technology applies multiple pricing methodologies to ensure you pay fair and reasonable rates on all claims.",
    features: [
      "Medicare-Based Repricing",
      "UCR Analysis & Benchmarking",
      "Custom Fee Schedule Management",
      "Real-Time Repricing Engine",
      "Audit & Compliance Tools",
      "Savings Analytics Dashboard",
    ],
    color: "from-orange-500 to-red-500",
    image: "/doctor-clipboard.jpg",
  },
];

const additionalServices = [
  { icon: Users, title: "Retiree Health Care", description: "Specialized health care solutions for retiree populations." },
  { icon: Shield, title: "Self-Funded Plans", description: "Custom self-funded plan design and management." },
  { icon: FileText, title: "Claims Processing", description: "Efficient and accurate claims adjudication." },
  { icon: Pill, title: "Prescription Drug Benefits", description: "PBM services and drug benefit management." },
  { icon: CreditCard, title: "Billing & Invoicing", description: "Accurate and timely billing solutions." },
  { icon: Phone, title: "Call Center Services", description: "US-based support for your members." },
  { icon: Building2, title: "Pension Administration", description: "Comprehensive pension management." },
  { icon: BarChart3, title: "Benefit Audits", description: "Thorough audits to ensure compliance." },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your organization, current benefits, and goals to understand your unique needs.",
    image: "/doctor-portrait-2.jpg",
  },
  {
    step: "02",
    title: "Solution Design",
    description: "Our experts design a customized benefit solution tailored specifically for your workforce.",
    image: "/doctor-tablet.jpg",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Seamless transition with dedicated support to ensure a smooth launch of your new benefits.",
    image: "/team-reviewing.jpg",
  },
  {
    step: "04",
    title: "Ongoing Partnership",
    description: "Continuous optimization, support, and strategic guidance to maximize your benefits investment.",
    image: "/doctors-trio.jpg",
  },
];

const savingsStats = [
  { value: "40-60%", label: "Average Savings on Bill Negotiation" },
  { value: "25-35%", label: "PPO Network Discount Rates" },
  { value: "15-25%", label: "Claims Repricing Savings" },
  { value: "99%", label: "Client Retention Rate" },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/doctors-trio.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real Health Solutions
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Accessible For All</span>
            </h1>
            <p className="text-xl text-blue-100">
              Four cornerstones of excellence form the foundation of our business model, setting us apart as your trusted partner in healthcare cost containment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Savings Stats */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {savingsStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Four Core Solutions</h2>
            <p className="text-xl text-slate-600">Comprehensive services for all your benefit needs</p>
          </div>

          <div className="space-y-20">
            {coreServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-blue-600 font-medium mb-4">{service.subtitle}</p>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-2xl shadow-xl w-full h-80 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-blue-300">Complete benefit solutions under one roof</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <service.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-slate-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Work Together</h2>
            <p className="text-xl text-slate-600">A partnership built on trust and results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-slate-50 rounded-2xl overflow-hidden"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl font-bold text-blue-100 mb-2">{step.step}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/happy-family.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our services can help your organization reduce costs and improve benefits.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
