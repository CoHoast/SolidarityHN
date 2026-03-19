"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MarketingHeader from "@/components/marketing/Header";
import MarketingFooter from "@/components/marketing/Footer";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  DollarSign,
  Settings,
  BarChart3,
  FileText,
  Users,
  TrendingUp,
  Zap,
  PieChart,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Custom Plan Design",
    description: "Design benefit plans tailored to your workforce demographics, budget, and organizational goals.",
  },
  {
    icon: DollarSign,
    title: "Cost Control & Transparency",
    description: "See exactly where your healthcare dollars go with complete transparency into claims data and costs.",
  },
  {
    icon: Shield,
    title: "Stop-Loss Protection",
    description: "Protect against catastrophic claims with specific and aggregate stop-loss coverage options.",
  },
  {
    icon: BarChart3,
    title: "Claims Analytics",
    description: "Detailed reporting and analytics to identify trends, risks, and opportunities for cost management.",
  },
  {
    icon: FileText,
    title: "Compliance Management",
    description: "Full compliance support including ERISA, ACA, HIPAA, and state-specific requirements.",
  },
  {
    icon: Users,
    title: "TPA Administration",
    description: "Comprehensive third-party administration including claims processing, eligibility, and member services.",
  },
];

const planTypes = [
  {
    title: "Self-Funded Plans",
    description: "Full self-insurance with complete control over plan design, provider networks, and claims management.",
    bestFor: "Large employers (500+ employees)",
    savings: "15-30% potential savings",
  },
  {
    title: "Level-Funded Plans",
    description: "Predictable monthly payments with potential for refunds if claims are lower than expected.",
    bestFor: "Mid-size employers (50-500 employees)",
    savings: "10-20% potential savings",
  },
  {
    title: "Minimum Premium Plans",
    description: "Hybrid approach with insurer handling large claims while employer funds smaller claims.",
    bestFor: "Growing organizations",
    savings: "5-15% potential savings",
  },
];

const stats = [
  { value: "15-30%", label: "Cost Savings" },
  { value: "500+", label: "Self-Funded Clients" },
  { value: "100%", label: "Data Transparency" },
  { value: "$0", label: "State Premium Tax" },
];

const benefits = [
  "Potential 15-30% cost savings vs. fully-insured",
  "Complete plan design flexibility",
  "Full claims data ownership and transparency",
  "Exempt from state premium taxes",
  "Avoid state-mandated benefit requirements",
  "Cash flow advantages",
  "Customizable network options",
  "Stop-loss protection available",
];

const considerations = [
  {
    title: "Financial Risk",
    description: "With proper stop-loss coverage, risk is manageable and predictable.",
  },
  {
    title: "Administration",
    description: "SHN handles all administration, so you focus on your business.",
  },
  {
    title: "Compliance",
    description: "We ensure full ERISA and regulatory compliance.",
  },
  {
    title: "Cash Flow",
    description: "Monthly funding based on actual claims plus admin fees.",
  },
];

export default function SelfFundedPlansPage() {
  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/medical-team-large.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link href="/how-it-works" className="inline-flex items-center gap-2 text-emerald-300 hover:text-white mb-6 transition-colors text-sm">
              ← Back to All Services
            </Link>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Core Service
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Self-Funded
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"> Plans</span>
            </h1>
            <p className="text-xl text-emerald-100">
              Take control of your healthcare costs with self-funded and level-funded benefit solutions. Save 15-30% while gaining complete transparency and flexibility.
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
                <p className="text-4xl font-bold text-emerald-600">{stat.value}</p>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">More Control, More Savings</h2>
              <p className="text-lg text-slate-600 mb-6">
                As the healthcare landscape continues to evolve, self-funded benefit plans have become an attractive option for organizations seeking more control over their employee benefit programs.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Our Self-Funded Solutions provide flexible and cost-effective plans, allowing you to customize benefits according to your employees' needs while managing risks efficiently with stop-loss protection.
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
              <img src="/medical-team-large.jpg" alt="Self-Funded Plans" className="rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plan Types */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Plan Options</h2>
            <p className="text-xl text-slate-600">Find the right balance of control and predictability</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {planTypes.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-emerald-100"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{plan.title}</h3>
                <p className="text-slate-600 mb-4">{plan.description}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium text-slate-700">Best for:</span> {plan.bestFor}</p>
                  <p className="text-emerald-600 font-medium">{plan.savings}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What's Included</h2>
            <p className="text-xl text-slate-600">Comprehensive self-funded plan administration</p>
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
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Considerations */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Considerations</h2>
            <p className="text-xl text-slate-600">We address every concern</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {considerations.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-100"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Self-Funding?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let us show you how self-funded plans can reduce costs and increase control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all shadow-lg"
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
