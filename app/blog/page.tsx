"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MarketingHeader from "@/components/marketing/Header";
import MarketingFooter from "@/components/marketing/Footer";
import { BookOpen, Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react";

const categories = [
  "All",
  "Medicare",
  "Benefits Administration",
  "Healthcare Trends",
  "Compliance",
  "Cost Savings",
  "Employee Wellness",
];

const articles = [
  {
    slug: "2026-medicare-advantage-shake-up",
    title: "The 2026 Medicare Advantage Shake-Up: What Retiree Plan Sponsors Need to Know Now",
    excerpt: "The Medicare Advantage market is undergoing one of its most significant transformations in years. Here's what plan sponsors need to understand about the changes and how to prepare.",
    category: "Medicare",
    date: "March 15, 2026",
    readTime: "8 min read",
    image: "/retiree-care.jpg",
    featured: true,
  },
  {
    slug: "pbm-transparency-revolution",
    title: "The PBM Transparency Revolution: How New Regulations Are Changing Drug Pricing",
    excerpt: "For years, Pharmacy Benefit Managers (PBMs) have faced growing scrutiny over how they generate revenue. Much of that criticism has centered on spread pricing and rebate practices.",
    category: "Healthcare Trends",
    date: "March 10, 2026",
    readTime: "6 min read",
    image: "/doctor-tablet.jpg",
    featured: true,
  },
  {
    slug: "attracting-talent-2026",
    title: "Why Your Job Postings Are Getting Ghosted: Benefits That Actually Attract Talent in 2026",
    excerpt: "If you've been wondering why your job postings are getting ghosted harder than a bad Tinder date, here's a clue: today's job seekers want more than just a paycheck.",
    category: "Employee Wellness",
    date: "March 5, 2026",
    readTime: "5 min read",
    image: "/happy-family.jpg",
    featured: false,
  },
  {
    slug: "aca-subsidy-changes-2026",
    title: "ACA Subsidy Changes in 2026: What Small Employers Need to Know",
    excerpt: "Many small employers are hearing the same concern heading into 2026: 'My ACA subsidy went down — my premiums are going up.' Here's what's really happening.",
    category: "Compliance",
    date: "February 28, 2026",
    readTime: "7 min read",
    image: "/doctor-portrait-1.jpg",
    featured: false,
  },
  {
    slug: "pharmacogenomic-testing-guide",
    title: "How Pharmacogenomic (PGx) Testing Is Keeping Patients Safe",
    excerpt: "In healthcare, one size rarely fits all — especially when it comes to prescription medications. PGx testing is revolutionizing how we approach drug therapy.",
    category: "Healthcare Trends",
    date: "February 20, 2026",
    readTime: "6 min read",
    image: "/doctor-portrait-2.jpg",
    featured: false,
  },
  {
    slug: "social-security-cola-2026",
    title: "Social Security COLA 2026: What the 2.8% Adjustment Means for Retirees",
    excerpt: "The Social Security Administration has announced a 2.8% cost-of-living adjustment (COLA) for 2026, benefiting millions of retirees across the country.",
    category: "Medicare",
    date: "February 15, 2026",
    readTime: "4 min read",
    image: "/doctors-trio.jpg",
    featured: false,
  },
  {
    slug: "self-funded-vs-fully-insured",
    title: "Self-Funded vs. Fully-Insured: Which Is Right for Your Organization in 2026?",
    excerpt: "As healthcare costs continue to rise, more employers are exploring self-funded health plans. But is it the right choice for your organization?",
    category: "Benefits Administration",
    date: "February 10, 2026",
    readTime: "9 min read",
    image: "/team-reviewing.jpg",
    featured: false,
  },
  {
    slug: "opeb-liability-reduction",
    title: "5 Strategies for Reducing OPEB Liabilities Without Cutting Retiree Benefits",
    excerpt: "Other Post-Employment Benefits (OPEB) liabilities can weigh heavily on organization balance sheets. Here are proven strategies to reduce costs while maintaining coverage.",
    category: "Cost Savings",
    date: "February 5, 2026",
    readTime: "7 min read",
    image: "/medical-team-large.jpg",
    featured: false,
  },
  {
    slug: "mental-health-benefits-roi",
    title: "The ROI of Mental Health Benefits: Why Investing in Employee Wellness Pays Off",
    excerpt: "Mental health benefits aren't just a nice-to-have anymore — they're essential for attracting talent and maintaining a productive workforce.",
    category: "Employee Wellness",
    date: "January 30, 2026",
    readTime: "6 min read",
    image: "/doctor-patient-care.jpg",
    featured: false,
  },
  {
    slug: "healthcare-ai-administration",
    title: "How AI Is Transforming Healthcare Benefits Administration",
    excerpt: "From claims processing to bill negotiation, artificial intelligence is revolutionizing how benefits administrators manage healthcare costs and member experiences.",
    category: "Healthcare Trends",
    date: "January 25, 2026",
    readTime: "8 min read",
    image: "/doctor-clipboard.jpg",
    featured: false,
  },
  {
    slug: "cobra-compliance-guide",
    title: "COBRA Compliance in 2026: A Complete Guide for Employers",
    excerpt: "COBRA compliance can be complex and penalties for non-compliance are steep. Here's everything employers need to know about COBRA administration in 2026.",
    category: "Compliance",
    date: "January 20, 2026",
    readTime: "10 min read",
    image: "/doctor-tablet.jpg",
    featured: false,
  },
  {
    slug: "level-funded-plans-explained",
    title: "Level-Funded Health Plans Explained: The Best of Both Worlds?",
    excerpt: "Level-funded plans offer the predictability of fully-insured plans with the potential savings of self-funding. Is it the right fit for your organization?",
    category: "Benefits Administration",
    date: "January 15, 2026",
    readTime: "7 min read",
    image: "/doctors-trio.jpg",
    featured: false,
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter(a => a.featured);

  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              SHN Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Benefits
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Insights & News</span>
            </h1>
            <p className="text-xl text-blue-100">
              Stay informed with the latest trends, regulations, and best practices in employee benefits, healthcare administration, and cost management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/blog/${article.slug}`} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                    <div className="h-56 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                        <span className="text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/blog/${article.slug}`} className="group block h-full">
                  <div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium text-blue-600">{article.category}</span>
                        <span className="text-xs text-slate-400">{article.date}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-1">{article.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xs text-slate-500">{article.readTime}</span>
                        <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Informed</h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for the latest benefits insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
