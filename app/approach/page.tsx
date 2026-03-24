"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MarketingHeader from "@/components/marketing/Header";
import MarketingFooter from "@/components/marketing/Footer";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Users,
  Lightbulb,
  Heart,
  Shield,
  Zap,
  Target,
  Handshake,
  TrendingUp,
  Clock,
} from "lucide-react";

const principles = [
  {
    icon: Compass,
    title: "Expert Guidance",
    description: "Navigating the ever-changing landscape of employee benefits can be overwhelming. That's why our team of experienced benefits consultants is here to guide you through every step of the process. From plan design and implementation to ongoing support and strategic planning, we are your trusted advisors, providing valuable insights to help you make informed decisions.",
    image: "/doctors-consulting.jpg",
  },
  {
    icon: Users,
    title: "Personalized Solutions",
    description: "No two organizations are the same, and we recognize the importance of tailoring our solutions to fit your specific requirements. Our team takes the time to understand your company's culture, workforce demographics, and budget constraints, allowing us to craft personalized benefit plans that resonate with your employees and align with your business objectives.",
    image: "/doctor-patient-consult.jpg",
  },
  {
    icon: Zap,
    title: "Technology-Driven Efficiency",
    description: "We leverage cutting-edge technology and streamlined processes to enhance the efficiency of benefits administration. Our user-friendly online platforms make it easy for employees to access and manage their benefits, simplifying enrollment and claims processing for HR teams.",
    image: "/doctor-tablet.jpg",
  },
  {
    icon: Heart,
    title: "Focus on Employee Well-Being",
    description: "Employee well-being is at the heart of what we do. We strive to provide benefit packages that go beyond traditional healthcare coverage, encompassing wellness programs and resources to promote a healthy and active workforce and engaged retirees.",
    image: "/happy-family.jpg",
  },
];

const differentiators = [
  {
    title: "Client-Centric Approach",
    description: "Your organization's unique needs and goals are at the forefront of everything we do.",
    icon: Target,
  },
  {
    title: "35+ Years Experience",
    description: "Decades of expertise navigating complex benefits landscapes across every sector.",
    icon: Clock,
  },
  {
    title: "Results-Driven",
    description: "We measure our success by your outcomes - cost savings, efficiency gains, and member satisfaction.",
    icon: TrendingUp,
  },
  {
    title: "Partnership Mindset",
    description: "We're not just a vendor - we're an extension of your team, invested in your long-term success.",
    icon: Handshake,
  },
];

const commitments = [
  "Immediate savings and amplified administrative efficiencies",
  "Hands-on approach with in-depth guidance",
  "Substantial up to 50% savings on bottom line",
  "Seamless transitions and successful benefit launches",
  "Strategic insights from experienced consultants",
  "User-friendly technology platforms",
  "US-based customer support team",
  "Compliance expertise and carrier relationships",
];

export default function ApproachPage() {
  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 relative overflow-hidden">
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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Compass className="w-4 h-4" />
              Our Approach
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              A Client-Centric Approach to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Benefits Excellence</span>
            </h1>
            <p className="text-xl text-blue-100">
              At SHN, we believe in placing your organization's unique needs and goals at the forefront of everything we do. Our commitment to delivering a superior service model is reflected in every interaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Principles</h2>
            <p className="text-xl text-slate-600">The foundation of how we serve our clients</p>
          </div>

          <div className="space-y-12">
            {principles.map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? '' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                    <principle.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{principle.title}</h3>
                  <p className="text-lg text-slate-600">{principle.description}</p>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-xl ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={principle.image} 
                    alt={principle.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-blue-300">The SHN difference</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Commitment to You</h2>
              <p className="text-lg text-slate-600 mb-8">
                At SHN, we are all about results. With an unwavering dedication to benefits, our people-centric approach drives superior solutions and services. Expect transformational impact on your bottom line.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {commitments.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
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
                src="/doctor-patient-care.jpg"
                alt="Our commitment to care"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-medium text-slate-700 italic mb-8">
              "From Hire to Retire: Your Complete Partner in Benefits Excellence. We understand the significance of addressing OPEB liabilities and the intricate balance it requires."
            </p>
            <p className="text-blue-600 font-semibold">— Solidarity Health Network</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the SHN Approach</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us show you how our client-centric methodology can transform your benefits program.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
