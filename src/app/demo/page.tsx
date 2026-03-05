'use client';

import Link from 'next/link';
import Image from 'next/image';

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function ChartBarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function ComputerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

const demoCards = [
  {
    title: 'About Solidarity',
    description: 'Learn about our 35+ years of experience delivering innovative benefits solutions and claims processing services.',
    icon: BuildingIcon,
    href: '/',
    linkText: 'Visit Website',
    gradient: 'from-primary to-primary-dark',
  },
  {
    title: 'Our Solutions',
    description: 'Explore our comprehensive suite of clearing house services including BenefitsConnect™, BenefitsFlex™, and more.',
    icon: ChartBarIcon,
    href: '/services',
    linkText: 'View Solutions',
    gradient: 'from-secondary to-teal-700',
  },
  {
    title: 'Admin Dashboard',
    description: 'Experience our powerful clearing house operations dashboard for real-time claims processing and management.',
    icon: ComputerIcon,
    href: '/dashboard',
    linkText: 'Launch Dashboard',
    gradient: 'from-purple-600 to-purple-800',
    primary: true,
  },
];

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-primary-dark to-slate-900 flex flex-col">
      {/* Background orb effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[128px]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-16">
        {/* Logo & Title */}
        <div className="text-center mb-12">
          <Image
            src="/images/logo.png"
            alt="Solidarity Health Network"
            width={80}
            height={80}
            className="mx-auto mb-6 rounded-xl shadow-2xl"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Solidarity Clearing House
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Enterprise-grade healthcare claims processing platform
          </p>
        </div>
        
        {/* Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
          {demoCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className={`
                  group relative overflow-hidden rounded-2xl p-6
                  ${card.primary 
                    ? 'bg-white text-slate-900' 
                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/10'
                  }
                  hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl
                `}
              >
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                {/* Icon */}
                <div className={`
                  w-12 h-12 rounded-xl mb-4 flex items-center justify-center
                  ${card.primary 
                    ? `bg-gradient-to-br ${card.gradient} text-white` 
                    : 'bg-white/10'
                  }
                `}>
                  <Icon className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <h2 className={`text-xl font-semibold mb-2 ${card.primary ? 'text-slate-900' : 'text-white'}`}>
                  {card.title}
                </h2>
                <p className={`text-sm mb-4 ${card.primary ? 'text-slate-600' : 'text-white/70'}`}>
                  {card.description}
                </p>
                
                {/* Link */}
                <div className={`
                  inline-flex items-center gap-2 text-sm font-medium
                  ${card.primary ? 'text-purple-600' : 'text-white/90'}
                  group-hover:gap-3 transition-all
                `}>
                  {card.linkText}
                  <ArrowRightIcon className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
        
        {/* Demo credentials */}
        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm mb-2">Demo Credentials</p>
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur rounded-lg px-4 py-2 text-sm">
            <span className="text-white/70">Email: <span className="text-white font-mono">demo@solidarity.com</span></span>
            <span className="text-white/30">|</span>
            <span className="text-white/70">Password: <span className="text-white font-mono">demo2026</span></span>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 text-center py-6 text-white/40 text-sm">
        <p>© 2026 Solidarity Health Network. All rights reserved.</p>
        <p className="mt-1">Powered by DOKit</p>
      </footer>
    </div>
  );
}
