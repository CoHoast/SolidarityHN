"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MarketingHeader from "@/components/marketing/Header";
import MarketingFooter from "@/components/marketing/Footer";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Star,
  Award,
  CheckCircle2,
  BarChart3,
  DollarSign,
  Heart,
  Shield,
  Clock,
  Target,
} from "lucide-react";

const impactStats = [
  {
    value: "20-50%",
    label: "Immediate Bottom-Line Savings",
    description: "For groups moving to Medicare Advantage for the first time",
    icon: DollarSign,
  },
  {
    value: "95+",
    label: "Net Promoter Score",
    description: "Industry-leading client satisfaction rating",
    icon: Star,
  },
  {
    value: "100%",
    label: "Client Retention Rate",
    description: "Our clients stay because we deliver results",
    icon: Heart,
  },
  {
    value: "Annual",
    label: "Market Analysis",
    description: "Ensuring benefits and renewal rates are optimized",
    icon: BarChart3,
  },
];

const testimonials = [
  {
    quote: "SHN performs a full scope of services as our third-party administrator. On all fronts, SHN has exceeded expectations in terms of commitment to the matter at hand, timeliness and accuracy. We view SHN as an extension of our staff who can be relied upon with the highest level of confidence.",
    author: "Christine F. Fleps",
    role: "Director of Benefits",
    company: "Cleveland Cliffs",
  },
  {
    quote: "I have the pleasure of recommending Solidarity Health Network, one of best TPAs I've worked with in this industry. They provide a wide range of services, from enrollment and communications with members, clients, and carriers, to client-specific website creation and management, a dedicated customer service call center, and invoicing, collection of premiums, and reporting processing to maintain compliance for employer clients.",
    author: "Jennifer Heinz",
    role: "Account Manager III",
    company: "Anthem",
  },
  {
    quote: "SHN's team approach and depth of knowledge has been refreshing and invaluable to our clients. They continue to provide support and knowledge to our clients throughout the year. Led by Anne Glorioso, President, and Allie Szczepaniak, Chief Operating Officer, their impact with one of our largest clients is immeasurable.",
    author: "Jennifer Heinz",
    role: "Account Manager III",
    company: "Anthem",
  },
  {
    quote: "It has been a great experience working with Solidarity Health Network. Their staff is not only knowledgeable but are easily accessible. This has not only led to a great partnership but also a great friendship.",
    author: "Joseph F. Venere",
    role: "Contract Coordinator",
    company: "Cleveland Cliffs / United Steel Workers",
  },
  {
    quote: "As a small business owner, I would highly recommend SHN to anyone looking to add or change health insurance. Joseph is extremely knowledgeable about the latest trends in health care and helped our company receive affordable rates while not giving up the benefits our employees need. Our employees are family, and the level funded plan is customized to their benefits, their budgets, and if problems arise, they're handled in a timely compassionate manner.",
    author: "Anthony Rockman",
    role: "Owner",
    company: "Bedford Nissan Collision Center",
  },
  {
    quote: "Anne is a high energy professional with a 'can do' attitude who surrounds herself with like minded professionals. She is very much process oriented and has a keen insight to all the twists and turns along the way. It would be a pleasure to work with Anne in the future.",
    author: "Industry Partner",
    role: "Healthcare Executive",
    company: "",
  },
];

const caseStudies = [
  {
    title: "Large Manufacturing Company",
    industry: "Steel & Manufacturing",
    challenge: "Managing complex retiree benefits across multiple union contracts with rising OPEB liabilities.",
    solution: "Implemented comprehensive TPA services with custom reporting, Medicare Advantage transitions, and streamlined claims processing.",
    results: [
      "35% reduction in administrative costs",
      "Seamless transition for 5,000+ retirees",
      "100% compliance with union requirements",
      "Annual savings of $2.1M",
    ],
  },
  {
    title: "Regional Labor Union",
    industry: "Labor & Trades",
    challenge: "Outdated benefits administration system causing member frustration and compliance concerns.",
    solution: "Full benefits overhaul with BenefitsConnect™ platform, dedicated call center, and member portal.",
    results: [
      "95+ NPS from union members",
      "50% reduction in call wait times",
      "Zero compliance violations",
      "Real-time eligibility verification",
    ],
  },
  {
    title: "Small Business Coalition",
    industry: "Commercial",
    challenge: "Rising premiums making healthcare unaffordable for small business employees.",
    solution: "Level-funded group benefit solution with pharmacy optimization and wellness programs.",
    results: [
      "28% first-year premium savings",
      "Custom plan design flexibility",
      "Enhanced employee satisfaction",
      "Predictable monthly costs",
    ],
  },
];

const outcomes = [
  { icon: DollarSign, title: "Cost Savings", description: "Up to 50% reduction in benefits administration costs" },
  { icon: Clock, title: "Time Efficiency", description: "Streamlined processes save HR teams 20+ hours monthly" },
  { icon: Users, title: "Member Satisfaction", description: "95+ NPS scores across our client base" },
  { icon: Shield, title: "Compliance", description: "100% compliance rate with regulatory requirements" },
  { icon: Target, title: "Accuracy", description: "99.9% claims processing accuracy" },
  { icon: Heart, title: "Retention", description: "100% client retention rate year over year" },
];

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/happy-family.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Our Impact
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              A Clear Path to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Unrivaled Outcomes</span>
            </h1>
            <p className="text-xl text-blue-100">
              Real results for real organizations. See how we've helped our clients achieve transformational savings and exceptional member experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {impactStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100"
                >
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</p>
                  <p className="font-semibold text-slate-900 text-sm mb-1">{stat.label}</p>
                  <p className="text-xs text-slate-600">{stat.description}</p>
                </motion.div>
              ))}
            </div>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="/medical-team.jpg" 
                alt="Our dedicated team delivering results"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Unmatched Outcomes: A Promise Delivered</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0">
                  <outcome.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{outcome.title}</h3>
                  <p className="text-sm text-slate-600">{outcome.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-xl text-slate-600">Real results from real partnerships</p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <span className="text-sm font-medium text-blue-600">{study.industry}</span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1 mb-4">{study.title}</h3>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-slate-700 mb-1">Challenge:</p>
                      <p className="text-sm text-slate-600">{study.challenge}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-1">Solution:</p>
                    <p className="text-sm text-slate-600">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">Results:</p>
                    <ul className="space-y-2">
                      {study.results.map((result, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">In Their Own Words</h2>
            <p className="text-xl text-blue-300">What our clients say about working with SHN</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm mb-4 line-clamp-6">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                  {t.company && <p className="text-sm text-blue-400">{t.company}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to See Results Like These?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the hundreds of organizations that trust SHN for their benefits administration.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
