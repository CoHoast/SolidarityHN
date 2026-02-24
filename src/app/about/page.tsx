import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const team = [
  {
    name: "Anne Glorioso",
    role: "President & CEO",
    bio: "A high-energy professional with a 'can do' attitude, Anne has led SHN since its founding. With decades of experience in the healthcare and insurance industry, she brings keen insight to all the twists and turns along the way. Her commitment to excellence and attention to detail have been instrumental in building SHN's reputation for outstanding service.",
    image: "/images/team-ceo.jpg",
  },
  {
    name: "Alexandra Szczepaniak",
    role: "Chief Operating Officer",
    bio: "Alexandra is extremely detail-oriented and meticulous in her work. With her dedication, knowledge, and hard work, she ensures that SHN's operations run smoothly and efficiently. Her positive attitude and respectful approach have earned praise from clients and partners alike.",
    image: "/images/team-coo.jpg",
  },
];

const milestones = [
  { year: "1989", title: "Founded", desc: "Solidarity Health Network established in Cleveland, Ohio" },
  { year: "1995", title: "Growth", desc: "Expanded services to include retiree health care administration" },
  { year: "2005", title: "Technology", desc: "Launched cutting-edge claims processing platform" },
  { year: "2010", title: "500+ Clients", desc: "Reached milestone of serving over 500 organizations" },
  { year: "2015", title: "Innovation", desc: "Introduced genetic testing compatibility services" },
  { year: "Today", title: "35+ Years", desc: "Continuing our mission of excellence in benefits administration" },
];

const values = [
  {
    icon: "🎯",
    title: "Excellence",
    desc: "We strive for excellence in every interaction, every claim, and every service we provide.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    desc: "We view ourselves as an extension of your team, working alongside you toward shared goals.",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "We continuously invest in cutting-edge technology and processes to serve you better.",
  },
  {
    icon: "❤️",
    title: "Care",
    desc: "We genuinely care about the well-being of the members and organizations we serve.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <Image 
                src="/images/logo-icon.png" 
                alt="SHN" 
                width={40} 
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <div className="hidden xs:block">
                <span className="font-bold text-primary text-sm sm:text-base">Solidarity Health</span>
                <span className="text-muted-foreground text-xs sm:text-sm block -mt-1">Network</span>
              </div>
            </Link>
            
            <button className="md:hidden p-2 text-muted-foreground hover:text-primary">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/about" className="text-sm font-medium text-primary">About</Link>
              <Link href="/#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Testimonials</Link>
              <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
            <Button asChild className="hidden md:inline-flex">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-muted/50 to-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('/images/about-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge variant="outline" className="mb-4">About Us</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
            Your Trusted Partner in{" "}
            <span className="text-primary">Total Benefits Solutions</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Since 1989, Solidarity Health Network has been delivering personalized solutions 
            that cater to the unique needs of each organization we serve.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Our Mission</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                Empowering Organizations, Enriching Lives
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                As a leading third-party administrator, benefits consultant, and full-service broker, 
                we take pride in delivering a superior service model that empowers organizations 
                with comprehensive and innovative benefit packages.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Our mission is to provide personalized solutions that cater to the unique needs of 
                each organization we serve. Through expert guidance, cutting-edge technology, and 
                a focus on well-being, we strive to revolutionize the benefits experience.
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                We help our clients attract and retain top talent while ensuring the well-being 
                of their workforce – both during employment and after retirement.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary">35+</div>
                <div className="text-sm md:text-base text-muted-foreground mt-2">Years of Excellence</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary">500+</div>
                <div className="text-sm md:text-base text-muted-foreground mt-2">Organizations Served</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary">100K+</div>
                <div className="text-sm md:text-base text-muted-foreground mt-2">Members Supported</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary">99%</div>
                <div className="text-sm md:text-base text-muted-foreground mt-2">Client Retention</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <Badge variant="outline" className="mb-4">Our Values</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              What Drives Us Every Day
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl md:text-5xl mb-4">{value.icon}</div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <Badge variant="outline" className="mb-4">Our Journey</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              35+ Years of Building Trust
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />
            
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, idx) => (
                <div key={milestone.year} className={`relative flex items-center gap-4 md:gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                    <Card className="inline-block">
                      <CardContent className="p-4 md:p-6">
                        <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{milestone.year}</div>
                        <div className="font-semibold text-foreground">{milestone.title}</div>
                        <div className="text-sm text-muted-foreground mt-1">{milestone.desc}</div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-white shadow" />
                  
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <Badge variant="outline" className="mb-4">Leadership</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Meet Our Team
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our leadership brings decades of combined experience in healthcare, insurance, 
              and benefits administration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/30 backdrop-blur-sm mx-auto flex items-center justify-center mb-4">
                      <span className="text-4xl md:text-5xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <div className="text-primary font-medium mb-3">{member.role}</div>
                  <p className="text-sm md:text-base text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Together, Let&apos;s Build a Brighter Future
            </h2>
            <p className="text-base md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto">
              For your employees and your business. Partner with Solidarity Health Network 
              and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/images/logo-icon.png" 
                  alt="SHN" 
                  width={40} 
                  height={40}
                  className="w-10 h-10 bg-white rounded-lg p-1"
                />
                <div>
                  <span className="font-bold text-white">Solidarity Health</span>
                  <span className="text-white/60 text-sm block -mt-1">Network</span>
                </div>
              </div>
              <p className="text-white/60 max-w-md text-sm md:text-base">
                Your trusted partner in total benefits solutions since 1989. 
                Together, let&apos;s build a brighter future for your employees and your business.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm md:text-base text-white/60">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm md:text-base text-white/60">
                <p>Solidarity Health Network</p>
                <p>4853 Galaxy Parkway, Suite K</p>
                <p>Cleveland, OH 44128</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-white/10" />
          
          <p className="text-center text-white/40 text-sm">
            © {new Date().getFullYear()} Solidarity Health Network. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
