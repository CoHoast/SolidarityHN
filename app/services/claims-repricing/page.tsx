"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MarketingHeader from "@/components/marketing/Header";
import MarketingFooter from "@/components/marketing/Footer";
import {
  ArrowRight,
  CheckCircle2,
  Calculator,
  Database,
  FileText,
  Shield,
  BarChart3,
  Zap,
  Settings,
  Search,
  DollarSign,
  TrendingDown,
} from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Medicare-Based Repricing",
    description: "Apply Medicare fee schedules to ensure fair and defensible pricing for all medical claims.",
  },
  {
    icon: BarChart3,
    title: "UCR Analysis & Benchmarking",
    description: "Compare charges against Usual, Customary, and Reasonable rates for your geographic area.",
  },
  {
    icon: Settings,
    title: "Custom Fee Schedule Management",
    description: "Build and maintain custom fee schedules tailored to your specific plan design and negotiated rates.",
  },
  {
    icon: Zap,
    title: "Real-Time Repricing Engine",
    description: "Instant repricing of claims as they're submitted, reducing processing time and improving accuracy.",
  },
  {
    icon: Shield,
    title: "Audit & Compliance Tools",
    description: "Built-in audit trails and compliance reporting to ensure defensibility of all repriced claims.",
  },
  {
    icon: Database,
    title: "Savings Analytics Dashboard",
    description: "Comprehensive reporting on savings achieved, trends, and opportunities for optimization.",
  },
];

const methodologies = [
  {
    title: "Medicare Percentage",
    description: "Claims repriced as a percentage of Medicare rates (e.g., 140% of Medicare).",
    savings: "15-30%",
  },
  {
    title: "UCR Benchmarking",
    description: "Claims compared to regional Usual, Customary, and Reasonable rates.",
    savings: "10-25%",
  },
  {
    title: "Reference-Based Pricing",
    description: "Claims priced based on a reference point like Medicare or cost-plus.",
    savings: "20-40%",
  },
  {
    title: "Custom Fee Schedules",
    description: "Claims repriced according to your custom negotiated fee schedules.",
    savings: "Varies",
  },
];

const stats = [
  { value: "15-25%", label: "Average Savings" },
  { value: "99.9%", label: "Accuracy Rate" },
  { value: "<24hrs", label: "Processing Time" },
  { value: "100%", label: "Audit Trail" },
];

const benefits = [
  "Reduce overall claims costs by 15-25%",
  "Ensure fair and reasonable pricing",
  "Maintain positive provider relationships",
  "Real-time processing and reporting",
  "Multiple repricing methodologies",
  "Complete audit trail for compliance",
  "Integration with existing claims systems",
  "Dedicated repricing support team",
];

export default function ClaimsRepricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/doctor-clipboard.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link href="/how-it-works" className="inline-flex items-center gap-2 text-orange-300 hover:text-white mb-6 transition-colors text-sm">
              ← Back to All Services
            </Link>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              Core Service
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Claims
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400"> Repricing</span>
            </h1>
            <p className="text-xl text-orange-100">
              Advanced claims repricing technology ensures you pay fair and reasonable rates on every claim, saving 15-25% while maintaining positive provider relationships.
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
                <p className="text-4xl font-bold text-orange-600">{stat.value}</p>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Maximum Savings on Every Claim</h2>
              <p className="text-lg text-slate-600 mb-6">
                Healthcare pricing is often opaque and inconsistent. Our claims repricing service applies proven pricing methodologies to ensure every claim is priced fairly and defensibly.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Whether you use Medicare-based pricing, UCR benchmarks, or custom fee schedules, our real-time repricing engine processes claims instantly with complete accuracy and audit trails.
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
              <img src="/doctor-clipboard.jpg" alt="Claims Repricing" className="rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Repricing Methodologies</h2>
            <p className="text-xl text-slate-600">Choose the approach that works best for your plan</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-orange-100"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{method.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{method.description}</p>
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-600">Typical Savings: {method.savings}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Platform Features</h2>
            <p className="text-xl text-slate-600">Comprehensive repricing capabilities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Claims Costs?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Start saving 15-25% on every claim with our advanced repricing technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all shadow-lg"
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
