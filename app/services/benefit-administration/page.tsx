"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MarketingHeader from "@/components/marketing/Header";
import MarketingFooter from "@/components/marketing/Footer";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Users,
  FileText,
  Shield,
  Zap,
  Clock,
  Phone,
  BarChart3,
  Settings,
  Calendar,
} from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "Plan Design & Implementation",
    description: "Custom benefit plan design tailored to your organization's unique needs, culture, and budget. We handle everything from initial design to full implementation.",
  },
  {
    icon: Users,
    title: "Eligibility Management",
    description: "Accurate and efficient eligibility tracking, verification, and reporting. Real-time updates ensure your members always have access to their benefits.",
  },
  {
    icon: Shield,
    title: "COBRA Administration",
    description: "Full-service COBRA administration including qualifying event processing, election notices, premium collection, and compliance management.",
  },
  {
    icon: FileText,
    title: "ACA Compliance & Reporting",
    description: "Stay compliant with Affordable Care Act requirements. We handle 1094-C/1095-C filing, affordability calculations, and employer mandate tracking.",
  },
  {
    icon: Calendar,
    title: "Open Enrollment Support",
    description: "Seamless open enrollment management with employee communication, enrollment platforms, and dedicated support throughout the enrollment period.",
  },
  {
    icon: Phone,
    title: "Employee Communication",
    description: "Clear, comprehensive communication strategies to help employees understand and maximize their benefits. Custom materials and dedicated support lines.",
  },
];

const benefits = [
  "Reduce administrative burden on your HR team",
  "Ensure compliance with federal and state regulations",
  "Improve employee satisfaction with benefits",
  "Streamline enrollment and claims processes",
  "Access real-time reporting and analytics",
  "Dedicated account management support",
];

const solutions = [
  {
    title: "BenefitsConnect™",
    subtitle: "Streamlined Benefit Management",
    description: "From meticulous benefit planning to seamless implementation, smooth transitions, and a successful benefit launch. Our Eligibility Services ensure accuracy and efficiency.",
  },
  {
    title: "BenefitsFlex™",
    subtitle: "Tailored Flexibility at Its Best",
    description: "Say goodbye to 'We can't do that' because with BenefitsFlex™, customization knows no bounds. Whether you're a large corporation or growing business, receive a tailored experience.",
  },
  {
    title: "BenefitsSupport™",
    subtitle: "Advocacy and Exceptional Service",
    description: "A dedicated account advocate at your service with US-based customer care available Monday through Friday. Audit and renewal support included.",
  },
  {
    title: "BenefitsBrief™",
    subtitle: "Education and Compliance Excellence",
    description: "Comprehensive compliance and educational resources that empower your decision-making. Retirees are never overlooked, and solutions withstand scrutiny.",
  },
];

export default function BenefitAdministrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/doctor-tablet.jpg" alt="" className="w-full h-full object-cover" />
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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <ClipboardCheck className="w-4 h-4" />
              Core Service
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Benefit
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Administration</span>
            </h1>
            <p className="text-xl text-blue-100">
              Comprehensive benefit plan management from hire to retire. We handle the complexity so you can focus on what matters most — your employees.
            </p>
          </motion.div>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">From Hire to Retire: Your Complete Partner</h2>
              <p className="text-lg text-slate-600 mb-6">
                At SHN, we simplify the intricate benefits landscape on your behalf. Our goal is to empower you to effortlessly manage every aspect of employer-sponsored plans, ensuring seamless transitions into group retiree coverage or navigating the complex space of corporate benefits packages.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Our hallmark lies in crafting custom benefit solutions that align with your unique requirements. With us, your benefits are in capable hands, freeing you to focus on enhancing the health, well-being, and satisfaction of your valued members.
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
              <img src="/doctor-tablet.jpg" alt="Benefit Administration" className="rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What's Included</h2>
            <p className="text-xl text-slate-600">Comprehensive administration services for all your benefit needs</p>
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
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branded Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Branded Solutions</h2>
            <p className="text-xl text-slate-600">Four cornerstones of excellence for your benefit needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-1">{solution.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{solution.subtitle}</p>
                <p className="text-slate-600">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Simplify Your Benefits Administration?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us show you how our comprehensive services can reduce your administrative burden and improve employee satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg"
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
