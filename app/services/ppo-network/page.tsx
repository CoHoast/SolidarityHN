"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MarketingHeader from "@/components/marketing/Header";
import MarketingFooter from "@/components/marketing/Footer";
import {
  ArrowRight,
  CheckCircle2,
  Network,
  Users,
  MapPin,
  Shield,
  BarChart3,
  Search,
  Award,
  Building2,
  Heart,
  DollarSign,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Provider Network Management",
    description: "Build and manage your own provider network with comprehensive contracting, rate management, and provider relations tools.",
  },
  {
    icon: DollarSign,
    title: "Contract & Rate Management",
    description: "Flexible rate structures: % of billed, % of Medicare, fee schedules, case rates, and per diem. All centrally managed.",
  },
  {
    icon: Shield,
    title: "Automated Credentialing",
    description: "Real-time verification via NPPES, OIG exclusion checks, SAM.gov, and license validation. Re-credentialing reminders built in.",
  },
  {
    icon: BarChart3,
    title: "Network Analytics & Reporting",
    description: "Comprehensive analytics on network utilization, cost savings, contract health, and provider performance metrics.",
  },
  {
    icon: MapPin,
    title: "Geographic Coverage Analysis",
    description: "Ensure adequate provider access for all your members with detailed coverage analysis and gap identification by specialty.",
  },
  {
    icon: Search,
    title: "Provider Directory & Portal",
    description: "Public provider search directory plus self-service provider portal for credentialing updates and contract management.",
  },
];

const stats = [
  { value: "50,000+", label: "Network Providers" },
  { value: "25-35%", label: "Average Savings" },
  { value: "50", label: "States Covered" },
  { value: "99%", label: "Claims Accuracy" },
];

const benefits = [
  "Build your own network vs. paying $5 PMPM rental",
  "Manage client networks as a service offering",
  "Automated credentialing and re-credentialing",
  "Flexible contract rate structures",
  "Public provider directory with search",
  "Provider self-service portal",
  "OIG/SAM exclusion monitoring",
  "White-label ready for your brand",
];

export default function PPONetworkPage() {
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
            <Link href="/how-it-works" className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-6 transition-colors text-sm">
              ← Back to All Services
            </Link>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium mb-6">
              <Network className="w-4 h-4" />
              Core Service
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PPO Network
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400"> Services</span>
            </h1>
            <p className="text-xl text-blue-100">
              Stop renting networks at $5 PMPM. Build, manage, and grow your own provider network with our enterprise-grade platform — or let us manage it for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-cyan-600">{stat.value}</p>
                <p className="text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Own Your Network. Stop Renting.</h2>
              <p className="text-lg text-slate-600 mb-6">
                Most TPAs pay <strong>$5 PMPM</strong> to rent access to PPO networks they don't control. With our platform, you can build, manage, and grow your own provider network — turning a cost center into a revenue stream.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Our enterprise-grade platform handles provider contracting, credentialing, rate management, and compliance. Whether you're managing a client's network or building your own to rent to others, we provide the tools you need.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/doctors-trio.jpg" alt="PPO Network" className="rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Network Features</h2>
            <p className="text-xl text-slate-600">Everything you need for comprehensive provider network management</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How Our PPO Network Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Member Visits Provider", description: "Members choose any in-network provider for their healthcare needs." },
              { step: "02", title: "Provider Bills Network Rate", description: "Provider bills at the pre-negotiated discounted rate." },
              { step: "03", title: "Claims Processing", description: "We process the claim quickly and accurately." },
              { step: "04", title: "Savings Realized", description: "You save 25-35% compared to out-of-network costs." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-cyan-100 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Own Your Network?</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Stop paying rental fees. Build your own PPO network or let us manage it for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-cyan-50 transition-all shadow-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
