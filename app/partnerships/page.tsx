"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MarketingHeader from "@/components/marketing/Header";
import MarketingFooter from "@/components/marketing/Footer";
import {
  ArrowRight,
  Handshake,
  Users,
  TrendingUp,
  Shield,
  CheckCircle2,
  Star,
  Award,
  Target,
  Zap,
  DollarSign,
  Heart,
  Building2,
} from "lucide-react";

const partnerBenefits = [
  {
    icon: DollarSign,
    title: "Reduce Client Costs",
    description: "Help your clients achieve 20-50% savings on retiree healthcare plans while minimizing OPEB liabilities.",
  },
  {
    icon: Zap,
    title: "Streamline Administration",
    description: "Eliminate day-to-day administrative burdens with our comprehensive TPA services and technology platforms.",
  },
  {
    icon: Heart,
    title: "Elevate Member Experiences",
    description: "Improve the member journey with seamless enrollment, dedicated support, and gratifying healthcare experiences.",
  },
  {
    icon: Target,
    title: "Tailored Solutions",
    description: "No one-size-fits-all approaches. Get custom strategies aligned with your clients' unique objectives.",
  },
];

const retireeEdgeFeatures = [
  "Comprehensive retiree healthcare plan management",
  "Medicare Advantage transitions and optimization",
  "OPEB liability reduction strategies",
  "Custom benefit strategy formulation",
  "Member-centric administration",
  "Compliance and regulatory expertise",
  "Dedicated account management",
  "Real-time reporting and analytics",
  "US-based customer care center",
  "Carrier relationship management",
];

const partnerTypes = [
  {
    title: "Benefits Brokers",
    description: "Expand your service offerings with comprehensive retiree solutions that set you apart from the competition.",
    icon: Handshake,
  },
  {
    title: "Benefits Consultants",
    description: "Leverage our expertise to deliver strategic recommendations backed by 35+ years of industry experience.",
    icon: Users,
  },
  {
    title: "Insurance Carriers",
    description: "Partner with a trusted TPA that carriers recommend across the US for compliance and service excellence.",
    icon: Building2,
  },
];

const partnerTestimonials = [
  {
    quote: "I have the pleasure of recommending Solidarity Health Network, one of best TPAs I've worked with in this industry. SHN's team approach and depth of knowledge has been refreshing and invaluable to our clients.",
    author: "Jennifer Heinz",
    role: "Account Manager III, Anthem",
  },
  {
    quote: "Their impact with one of our largest clients is immeasurable. I have known Anne and Allie for more than 7 years. Please do not hesitate to reach out to me directly if I can provide additional information or references.",
    author: "Jennifer Heinz",
    role: "Account Manager III, Anthem",
  },
];

const whyPartner = [
  { stat: "35+", label: "Years of Experience" },
  { stat: "100%", label: "Client Retention" },
  { stat: "95+", label: "Net Promoter Score" },
  { stat: "500+", label: "Organizations Served" },
];

export default function PartnershipsPage() {
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
              <Handshake className="w-4 h-4" />
              Broker & Consultant Partnerships
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              RetireeEdge™: Revolutionize
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Client Success</span>
            </h1>
            <p className="text-xl text-blue-100">
              Are you ready to elevate your group plan sponsor services to new heights? We're not just a partner; we're your strategic ally in conquering the intricate challenges faced by your group plan sponsor clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Stats */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {whyPartner.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-blue-600">{item.stat}</p>
                <p className="text-slate-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Power of Partnership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Power of Partnership</h2>
              <p className="text-lg text-slate-600 mb-6">
                At SHN, we understand that navigating the world of retiree healthcare plans can be a labyrinth of complexities. That's where we step in. With our unparalleled expertise, tailored solutions, and top-notch services, we don't just assist you - we empower you to drive transformative change.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Our seasoned professionals bring a wealth of knowledge to the table, enabling you to craft bespoke solutions that cater to your clients' unique needs. By teaming up with SHN, you gain a partner who doesn't just understand the industry - we shape it.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {partnerBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shrink-0">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-sm">{benefit.title}</h3>
                      <p className="text-xs text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/team-reviewing.jpg"
                alt="Partnership collaboration"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* RetireeEdge™ */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Featured Program
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">RetireeEdge™</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our groundbreaking solution for brokers and consultants serving group plan sponsors with retiree healthcare needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">What's Included</h3>
                <div className="space-y-3">
                  {retireeEdgeFeatures.slice(0, 5).map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">&nbsp;</h3>
                <div className="space-y-3">
                  {retireeEdgeFeatures.slice(5).map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/20"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Who We Partner With</h2>
            <p className="text-xl text-slate-600">Strategic alliances across the benefits industry</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
                <p className="text-slate-600">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partner Testimonials</h2>
            <p className="text-xl text-blue-300">What our partners say about working with SHN</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partnerTestimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 rounded-xl p-8 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Success Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/doctor-patient-care.jpg"
                alt="Success partnership"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Success Story, Tailored</h2>
              <p className="text-lg text-slate-600 mb-6">
                Group retiree benefits can be a maze of complexities, from benefit strategy formulation to cost reduction, OPEB liabilities management, and member-centric administration. We understand the hurdles you face and the goals you aspire to achieve.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                We don't offer one-size-fits-all solutions. Your challenges deserve tailor-made answers. Our dedicated team of experts collaborates with you to create strategies that align with your unique objectives.
              </p>
              <p className="text-lg text-slate-600">
                Change is inevitable, but disruption doesn't have to be. SHN helps you navigate benefit alterations with finesse, minimizing member impact. Transition periods become opportunities for growth rather than sources of concern.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner with SHN?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our network of successful brokers and consultants delivering exceptional results for their clients.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg"
          >
            Start the Conversation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
