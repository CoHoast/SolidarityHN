"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import MarketingHeader from "@/components/marketing/Header";
import MarketingFooter from "@/components/marketing/Footer";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Bookmark, User, Tag } from "lucide-react";

const articles: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string[];
}> = {
  "2026-medicare-advantage-shake-up": {
    title: "The 2026 Medicare Advantage Shake-Up: What Retiree Plan Sponsors Need to Know Now",
    excerpt: "The Medicare Advantage market is undergoing one of its most significant transformations in years.",
    category: "Medicare",
    date: "March 15, 2026",
    readTime: "8 min read",
    image: "/retiree-care.jpg",
    author: "Anne Glorioso",
    content: [
      "The Medicare Advantage market is undergoing one of its most significant transformations in years. For retiree plan sponsors, these changes present both challenges and opportunities that require immediate attention and strategic planning.",
      "## What's Changing in 2026",
      "CMS has announced several key regulatory changes affecting Medicare Advantage plans in 2026. These include adjustments to star ratings methodology, changes to risk adjustment models, and new requirements for supplemental benefits.",
      "The most significant impact will be felt in how plans are rated and compensated. Plans that previously achieved 4-star ratings may see adjustments, affecting rebates and bonus payments that fund supplemental benefits.",
      "## Impact on Retiree Plan Sponsors",
      "For organizations sponsoring group Medicare Advantage plans for retirees, these changes could affect:",
      "**Premium Stability**: Changes to plan ratings may result in premium adjustments for 2026 and beyond. Plan sponsors should begin reviewing their current arrangements and exploring alternatives.",
      "**Benefit Design**: Some supplemental benefits that were previously available may be reduced or eliminated. It's crucial to communicate any changes to retirees well in advance.",
      "**Network Access**: Some plans may narrow their provider networks to maintain profitability. This could affect retiree access to preferred physicians and specialists.",
      "## Strategies for Plan Sponsors",
      "To navigate these changes successfully, plan sponsors should consider the following strategies:",
      "**1. Conduct a Comprehensive Plan Review**: Evaluate your current Medicare Advantage arrangement against alternatives. Consider both group and individual market options.",
      "**2. Engage with Your TPA Early**: Work with your third-party administrator to understand how changes will specifically affect your plan and retirees.",
      "**3. Communicate Proactively**: Keep retirees informed about potential changes. Transparency builds trust and reduces confusion during open enrollment.",
      "**4. Explore Innovative Solutions**: Consider hybrid approaches that combine Medicare Advantage with Medicare Supplement options to provide flexibility.",
      "## The SHN Approach",
      "At Solidarity Health Network, we've been closely monitoring these regulatory changes and working with our clients to develop proactive strategies. Our team of Medicare experts can help you:",
      "- Analyze the impact on your specific retiree population\n- Evaluate alternative plan designs and carriers\n- Develop communication strategies for retirees\n- Implement transitions with minimal disruption",
      "## Looking Ahead",
      "The 2026 Medicare Advantage changes represent a significant shift in the market. However, with proper planning and expert guidance, plan sponsors can navigate these changes successfully while continuing to provide valuable benefits to their retirees.",
      "Don't wait until open enrollment to address these changes. Contact SHN today to begin your strategic review and ensure your retiree benefits program is positioned for success in 2026 and beyond.",
    ],
  },
  "pbm-transparency-revolution": {
    title: "The PBM Transparency Revolution: How New Regulations Are Changing Drug Pricing",
    excerpt: "For years, Pharmacy Benefit Managers (PBMs) have faced growing scrutiny over how they generate revenue.",
    category: "Healthcare Trends",
    date: "March 10, 2026",
    readTime: "6 min read",
    image: "/doctor-tablet.jpg",
    author: "Joseph Marcoguiseppe",
    content: [
      "For years, Pharmacy Benefit Managers (PBMs) have faced growing scrutiny over how they generate revenue. Much of that criticism has centered on spread pricing, rebate practices, and lack of transparency in drug pricing.",
      "## The Traditional PBM Model",
      "Traditionally, PBMs have operated as intermediaries between drug manufacturers, pharmacies, insurance plans, and patients. They negotiate drug prices, process claims, and manage formularies. However, their compensation models have often been opaque.",
      "**Spread Pricing**: PBMs charge plans more than they pay pharmacies, pocketing the difference. This practice has come under intense regulatory scrutiny.",
      "**Rebate Retention**: Manufacturers pay rebates to PBMs for preferred formulary placement. Not all of these savings have been passed through to plans and patients.",
      "## New Transparency Requirements",
      "Recent federal and state regulations are fundamentally changing how PBMs must operate:",
      "**Pass-Through Pricing**: Many states now require PBMs to pass through the full amount paid by plans to pharmacies, eliminating spread pricing.",
      "**Rebate Disclosure**: New rules require detailed disclosure of all rebates received and how they're distributed.",
      "**Fiduciary Standards**: Some jurisdictions are imposing fiduciary duties on PBMs, requiring them to act in the best interest of plan sponsors.",
      "## What This Means for Plan Sponsors",
      "These changes create both opportunities and challenges for employers and plan sponsors:",
      "**Potential Cost Savings**: Greater transparency may reveal opportunities for cost reduction that were previously hidden.",
      "**Contract Renegotiation**: Now is an ideal time to review and renegotiate PBM contracts with transparency requirements built in.",
      "**New Vendor Options**: The changing landscape is creating opportunities for new, transparent PBM models to emerge.",
      "## Evaluating Your PBM Arrangement",
      "Plan sponsors should consider the following when evaluating their current PBM arrangement:",
      "- Request a full audit of current pricing and rebate arrangements\n- Compare pass-through vs. traditional pricing models\n- Evaluate administrative fees and hidden costs\n- Consider carve-out arrangements for specialty drugs",
      "## The Future of Drug Pricing",
      "As transparency becomes the norm, we expect to see continued evolution in how drug benefits are managed. Biosimilar adoption, direct contracting with manufacturers, and innovative pharmacy benefit designs will become increasingly important tools for managing costs.",
      "At SHN, we help our clients navigate these complex changes and optimize their pharmacy benefit programs for maximum value. Contact us to learn how we can help you take advantage of the PBM transparency revolution.",
    ],
  },
  "attracting-talent-2026": {
    title: "Why Your Job Postings Are Getting Ghosted: Benefits That Actually Attract Talent in 2026",
    excerpt: "If you've been wondering why your job postings are getting ghosted harder than a bad Tinder date, here's a clue.",
    category: "Employee Wellness",
    date: "March 5, 2026",
    readTime: "5 min read",
    image: "/happy-family.jpg",
    author: "Christian Nawrocki",
    content: [
      "If you've been wondering why your job postings are getting ghosted harder than a bad Tinder date, here's a clue: today's job seekers want more than just a paycheck. They're looking for comprehensive benefits that support their whole lives.",
      "## The Benefits Landscape Has Changed",
      "Gone are the days when a basic health plan and two weeks of PTO were enough to attract top talent. Today's workforce, particularly Gen Z and Millennials, prioritize benefits that support work-life balance, mental health, and financial wellness.",
      "## Benefits That Actually Move the Needle",
      "Our research with clients across industries reveals what benefits actually influence candidate decisions:",
      "**1. Mental Health Support**: Comprehensive mental health coverage, including therapy, counseling, and mental health days, is no longer optional. 78% of job seekers consider mental health benefits 'very important.'",
      "**2. Flexible Work Arrangements**: Remote work options, flexible hours, and results-oriented work environments are expected, not perks.",
      "**3. Student Loan Assistance**: With the average graduate carrying $30,000+ in student debt, employer contributions to student loan repayment are highly valued.",
      "**4. Family-Friendly Benefits**: Paid parental leave for all parents, fertility benefits, and childcare assistance help attract candidates planning for families.",
      "**5. Financial Wellness Programs**: 401(k) matching is table stakes. Leading employers offer financial planning services, emergency savings programs, and equity compensation.",
      "## The Hidden Cost of Poor Benefits",
      "Skimping on benefits might seem like a cost-saving measure, but consider the hidden costs:",
      "- Extended time-to-fill for open positions\n- Higher turnover as employees leave for better packages\n- Decreased productivity from stressed, unsupported employees\n- Damage to employer brand and reputation",
      "## Communicating Your Benefits Effectively",
      "Having great benefits isn't enough if candidates don't know about them. Best practices include:",
      "**Lead with Benefits in Job Postings**: Don't bury benefits information at the bottom. Highlight your best offerings prominently.",
      "**Quantify the Value**: Show candidates the total compensation package value, including benefits, not just base salary.",
      "**Share Employee Stories**: Let current employees share how benefits have positively impacted their lives.",
      "## Building a Competitive Benefits Package",
      "At SHN, we help employers design benefits packages that attract and retain top talent while managing costs effectively. Our approach includes:",
      "- Benchmarking against industry competitors\n- Identifying high-value, cost-effective benefit options\n- Implementing flexible benefit designs that appeal to diverse workforces\n- Communicating benefits value effectively",
      "Ready to transform your benefits into a competitive advantage? Contact us to learn how we can help you win the talent war.",
    ],
  },
};

const relatedArticles = [
  { slug: "aca-subsidy-changes-2026", title: "ACA Subsidy Changes in 2026: What Small Employers Need to Know", category: "Compliance" },
  { slug: "self-funded-vs-fully-insured", title: "Self-Funded vs. Fully-Insured: Which Is Right for Your Organization?", category: "Benefits Administration" },
  { slug: "opeb-liability-reduction", title: "5 Strategies for Reducing OPEB Liabilities Without Cutting Benefits", category: "Cost Savings" },
];

export default function BlogArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <MarketingHeader />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Blog
          </Link>
        </div>
        <MarketingFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-4">
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {article.content.map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("**") && paragraph.includes("**:")) {
              const [title, ...rest] = paragraph.split("**:");
              return (
                <p key={i} className="text-slate-700 mb-4">
                  <strong className="text-slate-900">{title.replace("**", "")}:</strong>
                  {rest.join("**:")}
                </p>
              );
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n");
              return (
                <ul key={i} className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                  {items.map((item, j) => (
                    <li key={j}>{item.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-slate-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Share */}
        <div className="border-t border-slate-200 mt-12 pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-slate-600">Share this article:</span>
              <button className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors">
                <Share2 className="w-5 h-5 text-slate-600" />
              </button>
              <button className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors">
                <Bookmark className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((related, i) => (
              <Link
                key={i}
                href={`/blog/${related.slug}`}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <span className="text-xs font-medium text-blue-600">{related.category}</span>
                <h3 className="font-bold text-slate-900 mt-2 line-clamp-2">{related.title}</h3>
                <span className="text-blue-600 text-sm mt-4 flex items-center gap-1">
                  Read More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help With Your Benefits Strategy?</h2>
          <p className="text-blue-100 mb-6">
            Our team of experts can help you navigate complex benefits challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
