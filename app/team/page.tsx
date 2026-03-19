"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MarketingHeader from "@/components/marketing/Header";
import MarketingFooter from "@/components/marketing/Footer";
import { Award, Users, ArrowRight } from "lucide-react";

const executiveTeam = [
  {
    name: "Anne M. Glorioso",
    role: "President & CEO",
    description: "A high energy professional with a 'can do' attitude. Anne has a keen insight into the benefits industry with decades of experience leading SHN with commitment, integrity, and meticulous attention to detail.",
    image: "/team/anne-glorioso.jpg",
  },
  {
    name: "Alexandra (Allie) Szczepaniak",
    role: "Chief Operating Officer",
    description: "Extremely detail-oriented and dedicated to operational excellence. Alexandra ensures SHN delivers meticulous work with accuracy and efficiency, leading operations with professionalism.",
    image: "/team/alexandra-szczepaniak.jpg",
  },
  {
    name: "Anthony J. Mangoni",
    role: "Founder / Chairman of the Board",
    description: "Visionary founder who established SHN in 1989. Anthony's leadership and vision have shaped the company into a trusted partner for organizations across every sector.",
    image: "/team/anthony-mangoni.jpg",
  },
  {
    name: "Kathleen Caudill",
    role: "Senior Director of Operations",
    description: "Oversees day-to-day operations ensuring seamless service delivery. Kathleen brings extensive experience in benefits administration and operational management.",
    image: "/team/kathleen-caudill.jpg",
  },
];

const accountManagement = [
  { name: "Marie Vitali", role: "Account Manager & Certified Payroll Specialist", image: "/team/marie-vitali.jpg" },
  { name: "Helen Crawford", role: "Senior Account Manager", image: "/team/helen-crawford.jpg" },
];

const salesTeam = [
  { name: "Joseph Marcoguiseppe", role: "Vice President of Marketing & Business Development", image: "/team/joseph-marcoguiseppe.jpg" },
  { name: "Christian Nawrocki", role: "Licensed Agent & Benefits Specialist", image: "/team/christian-nawrocki.jpg" },
  { name: "Robert Glorioso", role: "Licensed Labor Liaison", image: "/team/robert-glorioso.jpg" },
  { name: "Mike Szczepaniak", role: "Licensed Agent & Project Manager", image: "/team/mike-szczepaniak.jpg" },
  { name: "Virgil Glorioso", role: "Marketing & Social Media Liaison", image: "/team/virgil-glorioso.jpg" },
];

const serviceTeam = [
  { name: "Kyle K.", role: "Director of Customer Service & Support", image: "/team/kyle-k.jpg" },
  { name: "Matthew M.", role: "Lead Customer Service Representative", image: "/team/matthew-m.jpg" },
  { name: "Jimmy B.", role: "Quality Assurance & Customer Care", image: "/team/jimmy-b.jpg" },
  { name: "Jeneen C.", role: "Executive Assistant", image: "/team/jeneen-c.jpg" },
  { name: "Doug H.", role: "Customer Service Representative", image: "/team/doug-h.jpg" },
  { name: "Toni B.", role: "Customer Service Representative", image: "/team/toni-b.jpg" },
  { name: "Evan B.", role: "Customer Service Representative", image: "/team/evan-b.jpg" },
  { name: "Dominic B.", role: "Customer Service Representative", image: "/team/dominic-b.jpg" },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/team/team-photo.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The People Behind
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Your Benefits</span>
            </h1>
            <p className="text-xl text-blue-100">
              At Solidarity Health Network, our journey is all about people - the driving force behind every experience we craft. We come to work each day, driven by the opportunity to tackle your most complex benefits challenges head-on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Executive Leadership</h2>
            <p className="text-xl text-slate-600">Experienced leaders dedicated to your success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveTeam.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <div className="h-64 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Management */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Account Management Team</h2>
            <p className="text-slate-600">Your dedicated partners in benefits administration</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {accountManagement.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex items-center gap-4"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{member.name}</h3>
                  <p className="text-sm text-slate-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales & Marketing Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Sales & Marketing Team</h2>
            <p className="text-slate-600">Connecting organizations with the right solutions</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {salesTeam.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-100 text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{member.name}</h3>
                <p className="text-xs text-slate-600 mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service & Customer Care Team */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Service & Customer Care Team</h2>
            <p className="text-slate-600">US-based support dedicated to your members</p>
          </div>

          <div className="grid md:grid-cols-4 lg:grid-cols-8 gap-4">
            {serviceTeam.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="bg-white rounded-xl p-4 border border-slate-100 text-center"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">{member.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/team/team-photo.jpg"
              alt="The Solidarity Health Network Team"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>
          <div className="text-center mt-8">
            <p className="text-xl text-slate-600">
              At SHN, we don't just create solutions; we pave the way for brighter futures and empowered plan sponsors.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Meet Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our dedicated professionals can help your organization.
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
