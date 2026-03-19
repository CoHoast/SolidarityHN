"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MarketingHeader from "@/components/marketing/Header";
import MarketingFooter from "@/components/marketing/Footer";
import {
  Users,
  Award,
  Heart,
  Building2,
  Target,
  Lightbulb,
  Shield,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Commitment to Excellence",
    description: "We strive for excellence in every interaction, delivering superior service that exceeds expectations.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Your unique needs drive our solutions. We tailor every benefit package to fit your organization perfectly.",
  },
  {
    icon: Shield,
    title: "Integrity & Trust",
    description: "We operate with the highest morals and integrity, building lasting relationships based on trust.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We leverage cutting-edge technology and AI to revolutionize the benefits experience.",
  },
];

const milestones = [
  { year: "1989", event: "Founded in Cleveland, Ohio" },
  { year: "1995", event: "Expanded to serve labor unions nationwide" },
  { year: "2000", event: "100th organization served" },
  { year: "2010", event: "Launched self-funded plan administration" },
  { year: "2020", event: "Introduced AI-powered claims repricing" },
  { year: "2024", event: "500+ organizations served" },
  { year: "2025", event: "Launched AI Bill Negotiation platform" },
];

const leadership = [
  {
    name: "Anne Glorioso",
    role: "President & CEO",
    description: "A high energy professional with a 'can do' attitude. Anne surrounds herself with like-minded professionals and has a keen insight into the benefits industry. With decades of experience, she leads SHN with commitment, integrity, and meticulous attention to detail.",
  },
  {
    name: "Alexandra Szczepaniak",
    role: "Chief Operating Officer",
    description: "Extremely detail-oriented and dedicated to operational excellence. Alexandra ensures SHN delivers meticulous work with accuracy and efficiency. Known for her positive attitude and respectful approach, she leads operations with professionalism.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              About Solidarity Health Network
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Trusted Partner in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Total Benefits Solutions</span>
            </h1>
            <p className="text-xl text-blue-100">
              Since 1989, we've been empowering organizations with comprehensive and innovative benefit packages that attract top talent and ensure workforce well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                As a leading third-party administrator, benefits consultant, and full-service broker, we take pride in delivering a superior service model that empowers organizations with comprehensive and innovative benefit packages.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Our mission is to provide personalized solutions that cater to the unique needs of each organization we serve. Through expert guidance, cutting-edge technology, and a focus on well-being, we strive to revolutionize the benefits experience.
              </p>
              <p className="text-lg text-slate-600">
                We help our clients attract and retain top talent while ensuring the well-being of their workforce – both during employment and after retirement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { label: "Years Experience", value: "35+" },
                { label: "Organizations", value: "500+" },
                { label: "Members Served", value: "100K+" },
                { label: "Client Retention", value: "99%" },
              ].map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center border border-blue-100">
                  <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                  <p className="text-slate-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Leadership</h2>
            <p className="text-xl text-slate-600">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">{leader.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{leader.role}</p>
                  <p className="text-slate-600 text-sm">{leader.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-blue-300">35+ years of serving organizations</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 mb-8"
              >
                <div className="w-20 shrink-0">
                  <span className="text-xl font-bold text-blue-400">{milestone.year}</span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-blue-800 pl-6 relative">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                  <p className="text-white">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build a brighter future for your employees and your business together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
