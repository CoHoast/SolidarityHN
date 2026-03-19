"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import MarketingHeader from "@/components/marketing/Header";
import MarketingFooter from "@/components/marketing/Footer";
import {
  Users,
  DollarSign,
  Shield,
  Heart,
  Building2,
  Phone,
  CheckCircle2,
  ArrowRight,
  Star,
  Clock,
  FileText,
  Activity,
  Award,
  CreditCard,
  Globe,
  Zap,
  ChevronDown,
  ChevronUp,
  Headphones,
  BadgeCheck,
  Calculator,
  Brain,
  TrendingDown,
  Handshake,
  Network,
  ClipboardCheck,
  Pill,
  Briefcase,
  Building,
  HardHat,
  Scale,
} from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "35+", icon: Award },
  { label: "Organizations Served", value: "500+", icon: Building2 },
  { label: "Members Supported", value: "100K+", icon: Users },
  { label: "Client Retention", value: "99%", icon: Heart },
];

const coreServices = [
  {
    icon: ClipboardCheck,
    title: "BenefitsConnect™",
    subtitle: "Streamlined Benefit Management",
    description: "From meticulous benefit planning to seamless implementation, smooth transitions, and a successful benefit launch.",
    features: ["Plan Design & Implementation", "Eligibility Management", "COBRA Administration", "ACA Compliance"],
    image: "/doctor-tablet.jpg",
  },
  {
    icon: Network,
    title: "PPO Network Services",
    subtitle: "Nationwide Provider Access",
    description: "Access our extensive network of contracted providers with pre-negotiated rates delivering significant savings.",
    features: ["50,000+ Contracted Providers", "Pre-Negotiated Rates", "Network Analytics", "Provider Credentialing"],
    image: "/doctors-trio.jpg",
  },
  {
    icon: Brain,
    title: "AI Bill Negotiation",
    subtitle: "Intelligent Cost Reduction",
    description: "Our AI-powered bill negotiation system analyzes medical bills and automatically negotiates fair prices—saving 40-60%.",
    features: ["Automated Bill Analysis", "Fair Price Calculation", "Provider Negotiation", "Real-Time Tracking"],
    image: "/team-reviewing.jpg",
  },
  {
    icon: Calculator,
    title: "Claims Repricing",
    subtitle: "Maximum Savings on Every Claim",
    description: "Advanced claims repricing technology ensures you pay fair and reasonable rates on all medical claims.",
    features: ["Medicare-Based Repricing", "UCR Analysis", "Fee Schedule Management", "Audit & Compliance"],
    image: "/doctor-clipboard.jpg",
  },
];

const sectors = [
  { icon: HardHat, title: "Labor Unions", description: "Comprehensive benefit solutions for union members and their families.", image: "/medical-team-large.jpg" },
  { icon: Building, title: "Commercial Sector", description: "Tailored corporate benefit packages for businesses of all sizes.", image: "/doctor-portrait-1.jpg" },
  { icon: Scale, title: "Public Sector", description: "Specialized solutions for government and municipal employees.", image: "/doctor-portrait-2.jpg" },
];

const testimonials = [
  {
    quote: "Anne is a high energy professional with a 'can do' attitude who surrounds herself with like minded professionals. She has a keen insight to all the twists and turns along the way.",
    author: "Industry Partner",
    role: "Healthcare Executive",
    image: "/doctor-tablet.jpg",
  },
  {
    quote: "Outstanding. Extremely knowledgeable about medical claims and the insurance industry. She has the highest morals and is a woman of great integrity.",
    author: "Aimee Fagan",
    role: "Head of North American A&H Claims, Swiss Re",
    image: "/doctor-portrait-1.jpg",
  },
  {
    quote: "SHN performs a full scope of services as our third party administrator. On all fronts, SHN has exceeded expectations in terms of commitment, timeliness and accuracy.",
    author: "Christine F. Fleps",
    role: "Director of Benefits, Cleveland Cliffs",
    image: "/doctor-portrait-2.jpg",
  },
  {
    quote: "Alexandra is extremely detail oriented. She is dedicated, knowledgeable and hard working. She has a positive attitude and speaks respectfully to all.",
    author: "Aimee Fagan",
    role: "Head of North American A&H Claims, Swiss Re",
    image: "/doctors-trio.jpg",
  },
];

const faqs = [
  {
    q: "What types of organizations do you serve?",
    a: "We serve a diverse range of organizations including labor unions, commercial businesses of all sizes, public sector entities, and municipalities. Our solutions are tailored to meet the unique needs of each sector.",
  },
  {
    q: "How does your AI Bill Negotiation service work?",
    a: "Our AI analyzes medical bills using Medicare rates and fair market data, identifies overcharges, and automatically negotiates with providers on your behalf. Most negotiations are completed within 7-14 days, saving clients 40-60% on average.",
  },
  {
    q: "What is claims repricing?",
    a: "Claims repricing applies fair and reasonable pricing to medical claims based on Medicare rates, UCR data, or custom fee schedules. This ensures you're not overpaying for medical services while maintaining positive provider relationships.",
  },
  {
    q: "How long have you been in business?",
    a: "Solidarity Health Network has been a trusted partner in benefits administration since 1989—over 35 years of experience serving organizations across every sector.",
  },
  {
    q: "Where is your call center located?",
    a: "Our call center is proudly located right here in the USA, providing personalized support from knowledgeable representatives who understand your benefits.",
  },
];

const allServices = [
  "Benefit Administration",
  "Billing/Invoicing", 
  "Retiree Health Care",
  "Self-Funded Plans",
  "ACA Mandates",
  "Dental and Vision",
  "Fully Insured Plans",
  "Eligibility",
  "Claims Processing",
  "Benefit Audits",
  "Prescription Drug Benefits",
  "Fringe Benefit Administration",
  "Annuity Administration",
  "Pension Administration",
  "Genetic Testing for Rx Compatibility",
  "Retiree Drug Subsidy Administration",
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      {/* Hero Section with Image */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/happy-family.jpg" 
            alt="Happy family" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Trusted Partner Since 1989
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Empowering Your Workforce,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Enriching Your Future</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                Your complete healthcare cost containment partner. From benefits administration to AI-powered claims repricing and bill negotiation — we help organizations reduce costs while delivering exceptional care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/30"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img 
                src="/happy-family.jpg" 
                alt="Happy family with health coverage" 
                className="rounded-2xl shadow-2xl shadow-black/30 border border-white/10"
              />
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/10">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-blue-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Serve with Images */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who We Serve</h2>
            <p className="text-xl text-slate-600">Trusted by Organizations Across Every Sector</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sectors.map((sector, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-100"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg">
                    <sector.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{sector.title}</h3>
                  <p className="text-slate-600">{sector.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-2xl font-bold text-blue-600">500+ Organizations Served</p>
          </div>
        </div>
      </section>

      {/* Four Core Solutions with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Four Core Solutions</h2>
            <p className="text-xl text-slate-600">For All Your Benefit Needs</p>
          </div>

          <div className="space-y-16">
            {coreServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? '' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                      <p className="text-blue-600 font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6 text-lg">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
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

      {/* Retiree Care Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="/retiree-care.jpg" 
                alt="Retiree healthcare" 
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                Specialized Care
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Retiree Health Care Solutions</h2>
              <p className="text-lg text-slate-600 mb-6">
                We understand the unique healthcare needs of retirees. Our specialized retiree benefit programs ensure your retired workforce receives the care they deserve while helping you manage costs effectively.
              </p>
              <ul className="space-y-3">
                {[
                  "Retiree Drug Subsidy Administration",
                  "Medicare Supplement Management",
                  "Prescription Drug Benefits",
                  "Retiree Drug Subsidy Recovery",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Health Solutions</h2>
            <p className="text-xl text-blue-300">Accessible For All</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-3 bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-sm">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Network of Providers</h2>
            <p className="text-xl text-slate-600">50,000+ Contracted Healthcare Professionals</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="/medical-team-large.jpg" 
              alt="Medical team" 
              className="rounded-2xl shadow-xl w-full max-h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Helped Our Clients</h2>
            <p className="text-xl text-slate-600">In Their Own Words</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-lg italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-slate-900">{t.author}</p>
                  <p className="text-slate-500 text-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-600">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Image */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/doctor-patient-care.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner with Solidarity Health Network
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the difference of having a dedicated ally for all your benefits needs. Together, let's build a brighter future for your employees and your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg"
          >
            Continue the Conversation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
