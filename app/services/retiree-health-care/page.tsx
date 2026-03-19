"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MarketingHeader from "@/components/marketing/Header";
import MarketingFooter from "@/components/marketing/Footer";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Users,
  Shield,
  DollarSign,
  FileText,
  Phone,
  Pill,
  BarChart3,
  Calendar,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Medicare Advantage Transitions",
    description: "Seamlessly transition retirees to Medicare Advantage plans, optimizing coverage while reducing OPEB liabilities by 20-50%.",
  },
  {
    icon: Pill,
    title: "Prescription Drug Benefits",
    description: "Comprehensive Part D management, including Retiree Drug Subsidy (RDS) administration and EGWP solutions.",
  },
  {
    icon: Shield,
    title: "Medicare Supplement Plans",
    description: "Access to competitive Medigap policies that fill coverage gaps and provide peace of mind for retirees.",
  },
  {
    icon: DollarSign,
    title: "OPEB Liability Reduction",
    description: "Strategic solutions to reduce Other Post-Employment Benefit liabilities while maintaining quality coverage.",
  },
  {
    icon: FileText,
    title: "Retiree Drug Subsidy Administration",
    description: "Full RDS administration including application, reporting, reconciliation, and subsidy recovery.",
  },
  {
    icon: Phone,
    title: "Dedicated Retiree Support",
    description: "US-based call center with representatives trained specifically to assist retirees with their unique needs.",
  },
];

const stats = [
  { value: "20-50%", label: "OPEB Reduction" },
  { value: "35+", label: "Years Experience" },
  { value: "100K+", label: "Retirees Served" },
  { value: "100%", label: "Compliance Rate" },
];

const benefits = [
  "Reduce OPEB liabilities by 20-50%",
  "Seamless Medicare transitions",
  "Comprehensive Part D management",
  "Retiree Drug Subsidy administration",
  "Dedicated retiree support line",
  "Compliance with all regulations",
  "Custom communication materials",
  "Ongoing benefit optimization",
];

const solutions = [
  {
    title: "Group Medicare Advantage",
    description: "Transition retirees to group MA plans with enhanced benefits and significant cost savings for sponsors.",
  },
  {
    title: "Employer Group Waiver Plans (EGWP)",
    description: "Maintain Part D coverage through EGWP with full subsidy capture and simplified administration.",
  },
  {
    title: "Retiree Drug Subsidy (RDS)",
    description: "Continue creditable coverage with full RDS administration and subsidy recovery services.",
  },
  {
    title: "Individual Medicare Solutions",
    description: "Help retirees navigate individual Medicare options with dedicated counseling and support.",
  },
];

export default function RetireeHealthCarePage() {
  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/retiree-care.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link href="/how-it-works" className="inline-flex items-center gap-2 text-rose-300 hover:text-white mb-6 transition-colors text-sm">
              ← Back to All Services
            </Link>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/20 rounded-full text-rose-300 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Specialized Service
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Retiree
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400"> Health Care</span>
            </h1>
            <p className="text-xl text-rose-100">
              Specialized retiree benefit solutions that reduce OPEB liabilities by 20-50% while ensuring your retirees receive the quality care they deserve.
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
                <p className="text-4xl font-bold text-rose-600">{stat.value}</p>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Supporting Retirees Through Every Stage</h2>
              <p className="text-lg text-slate-600 mb-6">
                We understand the importance of supporting your employees not only during their active employment but also as they transition into retirement. Our Retiree Health Care Solutions are designed to offer comprehensive and customized packages.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                From healthcare plans to supplemental coverage, we ensure that your retirees enjoy a smooth and financially secure retirement journey while helping you manage OPEB liabilities effectively.
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
              <img src="/retiree-care.jpg" alt="Retiree Health Care" className="rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Retiree Solutions</h2>
            <p className="text-xl text-slate-600">Flexible options to meet your organization's needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-rose-100"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Provide</h2>
            <p className="text-xl text-slate-600">Comprehensive retiree benefit services</p>
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
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
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
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Retiree Benefits?</h2>
          <p className="text-xl text-rose-100 mb-8">
            Reduce OPEB liabilities while providing excellent care for your retirees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-rose-600 font-semibold rounded-xl hover:bg-rose-50 transition-all shadow-lg"
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
