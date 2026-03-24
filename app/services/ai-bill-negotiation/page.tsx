"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MarketingHeader from "@/components/marketing/Header";
import MarketingFooter from "@/components/marketing/Footer";
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  Zap,
  DollarSign,
  FileText,
  Clock,
  Shield,
  TrendingDown,
  BarChart3,
  MessageSquare,
  Target,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Our proprietary AI analyzes every medical bill, identifying overcharges, billing errors, and opportunities for negotiation.",
  },
  {
    icon: DollarSign,
    title: "Pricing Intelligence",
    description: "Fair prices calculated using Medicare rates (19,226 CPT codes) and hospital transparency data (869K prices across 184 hospitals).",
  },
  {
    icon: MessageSquare,
    title: "Automated Provider Outreach",
    description: "Smart routing sends offers via email (SES) or fax (Sinch) automatically. Manual queue for providers without contact info.",
  },
  {
    icon: Clock,
    title: "Real-Time Status Tracking",
    description: "Monitor every bill through our dashboard with real-time status updates from submission to settlement.",
  },
  {
    icon: FileText,
    title: "Settlement Documentation",
    description: "Complete documentation of all negotiations, settlements, and savings for your records and compliance needs.",
  },
  {
    icon: Shield,
    title: "Tiered Negotiation Strategy",
    description: "Multi-round approach: friendly offer → methodology explanation → firm position → NSA regulatory education if needed.",
  },
];

const stats = [
  { value: "40-60%", label: "Average Savings" },
  { value: "7-14", label: "Days to Settlement" },
  { value: "95%", label: "Success Rate" },
  { value: "24/7", label: "AI Processing" },
];

const process = [
  {
    step: "01",
    title: "Bill Import",
    description: "High-value claims (hospital charges, surgeries, ER visits, imaging) are imported via MCO flat file or secure upload.",
  },
  {
    step: "02",
    title: "Fair Price Calculation",
    description: "AI calculates fair price using Medicare rates + hospital transparency data. Auto-routes based on provider contact info.",
  },
  {
    step: "03",
    title: "Tiered Negotiation",
    description: "Round 1: Payment Offer → Round 2: Methodology → Round 3: Firm Position → Final: NSA Regulatory Reference.",
  },
  {
    step: "04",
    title: "Settlement",
    description: "Provider accepts via portal, settlement documented, savings applied. Average 40-60% reduction achieved.",
  },
];

const benefits = [
  "No upfront costs - we only charge on savings achieved",
  "Average 40-60% reduction on out-of-network bills",
  "7-14 day average turnaround time",
  "Full transparency with real-time tracking",
  "HIPAA-compliant secure processing",
  "Detailed reporting and analytics",
  "Appeals process for difficult cases",
  "Dedicated support team backup",
];

export default function AIBillNegotiationPage() {
  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/team-reviewing.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link href="/how-it-works" className="inline-flex items-center gap-2 text-purple-300 hover:text-white mb-6 transition-colors text-sm">
              ← Back to All Services
            </Link>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              AI-Powered Service
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Bill
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Negotiation</span>
            </h1>
            <p className="text-xl text-purple-100">
              Our proprietary AI-powered system analyzes medical bills, identifies overcharges, and automatically negotiates fair prices with providers — saving 40-60% on average.
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
                <p className="text-4xl font-bold text-purple-600">{stat.value}</p>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Intelligent Cost Reduction</h2>
              <p className="text-lg text-slate-600 mb-6">
                High-value medical claims — hospital charges, surgeries, specialist care, ER visits, and imaging — are often billed at 3-10x fair market rates. Our AI-powered system handles these complex negotiations autonomously.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Our pricing intelligence combines <strong>Medicare rates</strong> (19,226 CPT codes) with <strong>hospital transparency data</strong> (869,000 prices across 184 hospitals) to calculate defensible fair prices that providers respect.
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
              <img src="/team-reviewing.jpg" alt="AI Bill Negotiation" className="rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">From bill submission to savings in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 text-center"
              >
                <div className="text-5xl font-bold text-purple-100 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
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
            <p className="text-xl text-slate-600">Advanced AI capabilities for maximum savings</p>
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
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Saving?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Let our AI negotiate your medical bills and save 40-60% on average.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-all shadow-lg"
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
