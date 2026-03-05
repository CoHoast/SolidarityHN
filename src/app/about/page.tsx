import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "35+", label: "Years of Excellence" },
  { value: "500+", label: "Organizations Served" },
  { value: "100K+", label: "Members Supported" },
  { value: "99%", label: "Client Retention" },
];

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in every interaction, every claim, and every service we provide.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Partnership",
    description: "We view ourselves as an extension of your team, working alongside you toward shared goals.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "We continuously invest in cutting-edge technology and processes to serve you better.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Care",
    description: "We genuinely care about the well-being of the members and organizations we serve.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const executiveTeam = [
  {
    name: "Anne M. Glorioso",
    role: "President & CEO",
    image: "/images/team/anne-glorioso.jpg",
    bio: "A high-energy professional with a 'can do' attitude, Anne has led SHN since its founding. With decades of experience in the healthcare and insurance industry, she brings keen insight to all the twists and turns along the way.",
  },
  {
    name: "Alexandra (Allie) Szczepaniak",
    role: "Chief Operating Officer",
    image: "/images/team/alexandra-szczepaniak.jpg",
    bio: "Alexandra is extremely detail-oriented and meticulous in her work. With her dedication, knowledge, and hard work, she ensures that SHN's operations run smoothly and efficiently.",
  },
  {
    name: "Anthony J. Mangoni",
    role: "Founder / Chairman of the Board",
    image: "/images/team/anthony-mangoni.jpg",
    bio: "As the visionary founder of SHN, Anthony laid the groundwork for a company built on integrity, service, and excellence in benefits administration.",
  },
  {
    name: "Kathleen Caudill",
    role: "Senior Director of Operations",
    image: "/images/team/kathleen-caudill.jpg",
    bio: "Kathleen brings extensive operational expertise to SHN, ensuring seamless day-to-day management and continuous improvement of our service delivery.",
  },
  {
    name: "Marie Vitali",
    role: "Account Manager & Certified Payroll Specialist",
    image: "/images/team/marie-vitali.jpg",
    bio: "Marie combines account management expertise with certified payroll knowledge to deliver comprehensive support to our clients.",
  },
  {
    name: "Helen Crawford",
    role: "Senior Account Manager",
    image: "/images/team/helen-crawford.jpg",
    bio: "Helen's extensive experience in account management ensures our clients receive personalized attention and exceptional service.",
  },
];

const salesTeam = [
  {
    name: "Christian Nawrocki",
    role: "Licensed Agent & Benefits Specialist",
    image: "/images/team/christian-nawrocki.jpg",
  },
  {
    name: "Virgil Glorioso",
    role: "Marketing & Social Media Liaison",
    image: "/images/team/virgil-glorioso.jpg",
  },
  {
    name: "Joseph Marcoguiseppe",
    role: "Vice President of Marketing & Business Development",
    image: "/images/team/joseph-marcoguiseppe.jpg",
  },
  {
    name: "Robert Glorioso",
    role: "Licensed Labor Liaison",
    image: "/images/team/robert-glorioso.jpg",
  },
  {
    name: "Mike Szczepaniak",
    role: "Licensed Agent & Project Manager",
    image: "/images/team/mike-szczepaniak.jpg",
  },
];

const serviceTeam = [
  {
    name: "Doug H.",
    role: "Customer Service Representative",
    image: "/images/team/doug-h.jpg",
  },
  {
    name: "Matthew M.",
    role: "Lead Customer Service Representative",
    image: "/images/team/matthew-m.jpg",
  },
  {
    name: "Kyle K.",
    role: "Director of Customer Service & Support",
    image: "/images/team/kyle-k.jpg",
  },
  {
    name: "Jimmy B.",
    role: "Quality Assurance & Customer Care",
    image: "/images/team/jimmy-b.jpg",
  },
  {
    name: "Jeneen C.",
    role: "Executive Assistant",
    image: "/images/team/jeneen-c.jpg",
  },
  {
    name: "Toni B.",
    role: "Customer Service Representative",
    image: "/images/team/toni-b.jpg",
  },
  {
    name: "Evan B.",
    role: "Customer Service Representative",
    image: "/images/team/evan-b.jpg",
  },
  {
    name: "Dominic B.",
    role: "Customer Service Representative",
    image: "/images/team/dominic-b.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/backgrounds/about-bg.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Company
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From Hire to Retire: Your Complete Partner in Benefits Excellence
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">About Us</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Simplifying the Intricate Benefits Landscape Since 1989
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  At SHN we are here to simplify the intricate benefits landscape on your behalf. Our goal is to empower 
                  you to effortlessly manage every aspect of employer-sponsored plans, ensuring seamless transitions into 
                  group retiree coverage or navigate the complex space of corporate benefits packages.
                </p>
                <p>
                  We understand the significance of addressing OPEB liabilities and the intricate balance it requires.
                </p>
                <p>
                  Our hallmark lies in crafting custom benefit solutions that align with your unique requirements. With us, 
                  you can rest assured knowing that your benefits are in capable hands, freeing you to focus on what truly 
                  matters - enhancing the health, well-being, and satisfaction of your valued members.
                </p>
                <p className="font-semibold text-gray-900">
                  At SHN, we are all about results. With our in-depth guidance and hands-on approach, our clients witness 
                  a transformational impact on their bottom line - a substantial up to 50% savings.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-2xl p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Our Values</h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">
              What Drives Us Every Day
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center p-6">
                <CardContent className="pt-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Our Team</h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The People Behind SHN
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At Solidarity Health Network, our journey is all about people - the driving force behind every experience we craft.
              We come to work each day, driven by the opportunity to tackle your most complex benefits challenges head-on.
            </p>
          </div>

          {/* Executive Team */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">Executive & Account Management Team</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {executiveTeam.map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <div className="aspect-[4/3] relative bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sales Team */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">Sales & Marketing Team</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {salesTeam.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="aspect-square relative bg-gray-100 rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">{member.name}</h4>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Team */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">Service & Customer Care Team</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {serviceTeam.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="aspect-square relative bg-gray-100 rounded-xl overflow-hidden mb-3">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-xs">{member.name}</h4>
                  <p className="text-xs text-gray-500 leading-tight">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Benefits?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join hundreds of organizations who trust SHN with their benefits administration.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
