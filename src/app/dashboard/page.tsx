'use client';

import { useEffect, useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

// Animated counter hook
function useAnimatedNumber(target: number, duration: number = 1000) {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const startTime = Date.now();
    const startValue = 0;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const value = Math.floor(startValue + (target - startValue) * easeOutQuart);
      
      setCurrent(value);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [target, duration]);
  
  return current;
}

// Premium Stat Card Component
function StatCard({ 
  title, 
  value, 
  subtitle, 
  trend, 
  trendUp,
  gradient,
  icon,
  sparklineData,
  delay = 0
}: { 
  title: string;
  value: number;
  subtitle?: string;
  trend?: string;
  trendUp?: boolean;
  gradient: string;
  icon: React.ReactNode;
  sparklineData?: number[];
  delay?: number;
}) {
  const animatedValue = useAnimatedNumber(value, 1500);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`
        relative overflow-hidden rounded-2xl p-6 
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        hover:scale-[1.02] hover:shadow-2xl
        group cursor-pointer
      `}
      style={{
        background: `linear-gradient(135deg, ${gradient})`,
        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3)',
      }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id={`pattern-${title}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="white" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill={`url(#pattern-${title})`} />
        </svg>
      </div>
      
      {/* Icon */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      {/* Content */}
      <div className="relative">
        <p className="text-white/80 text-sm font-medium tracking-wide uppercase">{title}</p>
        <p className="text-white text-4xl font-bold mt-2 tracking-tight">
          {animatedValue.toLocaleString()}
        </p>
        
        {/* Sparkline */}
        {sparklineData && (
          <div className="mt-3 h-8 opacity-60">
            <ResponsiveContainer width="60%" height="100%">
              <AreaChart data={sparklineData.map((v, i) => ({ v }))}>
                <Area 
                  type="monotone" 
                  dataKey="v" 
                  stroke="rgba(255,255,255,0.8)" 
                  fill="rgba(255,255,255,0.2)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
        
        <div className="flex items-center gap-2 mt-3">
          {trend && (
            <span className={`
              flex items-center gap-1 text-sm font-semibold px-2 py-0.5 rounded-full
              ${trendUp ? 'bg-white/20 text-white' : 'bg-black/20 text-white/80'}
            `}>
              {trendUp ? '↑' : '↓'} {trend}
            </span>
          )}
          {subtitle && (
            <span className="text-white/70 text-sm">{subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
}

// Chart data
const volumeData = [
  { name: 'Mon', claims: 1120, approved: 1050 },
  { name: 'Tue', claims: 980, approved: 920 },
  { name: 'Wed', claims: 1340, approved: 1280 },
  { name: 'Thu', claims: 1200, approved: 1150 },
  { name: 'Fri', claims: 1450, approved: 1380 },
  { name: 'Sat', claims: 420, approved: 400 },
  { name: 'Sun', claims: 310, approved: 295 },
];

const pieData = [
  { name: 'Aetna', value: 35, color: '#3b82f6' },
  { name: 'UHC', value: 28, color: '#8b5cf6' },
  { name: 'BCBS', value: 18, color: '#06b6d4' },
  { name: 'Cigna', value: 12, color: '#f59e0b' },
  { name: 'Other', value: 7, color: '#64748b' },
];

// Premium Chart Card
function ChartCard({ children, title, subtitle, className = '' }: { 
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`
      bg-white rounded-2xl border border-slate-200/50 p-6
      shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1)]
      hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.15)]
      transition-all duration-300
      ${className}
    `}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          {subtitle && <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
            7D
          </button>
          <button className="px-3 py-1.5 text-xs font-medium text-white bg-primary rounded-lg">
            30D
          </button>
          <button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
            90D
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}

// Activity Item
function ActivityItem({ 
  icon, 
  iconBg, 
  title,
  subtitle,
  time,
  isNew = false
}: { 
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  subtitle: string;
  time: string;
  isNew?: boolean;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer">
      <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-slate-900">{title}</p>
          {isNew && (
            <span className="px-1.5 py-0.5 bg-primary text-white text-[10px] font-bold rounded uppercase">New</span>
          )}
        </div>
        <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>
      </div>
      <span className="text-xs text-slate-400 whitespace-nowrap">{time}</span>
    </div>
  );
}

// Queue Item
function QueueItem({ name, count, color, percent }: { name: string; count: number; color: string; percent: number }) {
  const animatedCount = useAnimatedNumber(count, 1200);
  
  return (
    <div className="group cursor-pointer">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${color} shadow-lg`} style={{ boxShadow: `0 0 10px ${color.replace('bg-', '').includes('purple') ? '#a855f7' : color.includes('red') ? '#ef4444' : color.includes('amber') ? '#f59e0b' : '#64748b'}` }} />
          <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{name}</span>
        </div>
        <span className="text-sm font-bold text-slate-900">{animatedCount}</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

// Icons
function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function XCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  );
}

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function UserPlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>
  );
}

// Top Client Row
function TopClientRow({ rank, name, claims, trend, isTop = false }: { rank: number; name: string; claims: string; trend: string; isTop?: boolean }) {
  return (
    <div className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${isTop ? 'bg-primary/5' : 'hover:bg-slate-50'}`}>
      <div className={`
        w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold
        ${isTop ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'}
      `}>
        {rank}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium ${isTop ? 'text-primary' : 'text-slate-700'}`}>{name}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-slate-900">{claims}</p>
        <p className="text-xs text-emerald-600">{trend}</p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Good morning, John 👋
          </h1>
          <p className="text-slate-500 mt-1">Here&apos;s what&apos;s happening with your claims today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
            Download Report
          </button>
          <button className="px-4 py-2.5 bg-primary rounded-xl text-sm font-medium text-white hover:bg-primary-dark transition-all shadow-lg shadow-primary/25">
            + New Claim
          </button>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard 
          title="Claims Today" 
          value={1247}
          trend="+12%"
          trendUp
          subtitle="vs yesterday"
          gradient="#1e3a5f, #3b82f6"
          sparklineData={[30, 40, 35, 50, 45, 60, 55]}
          icon={<FileTextIcon className="w-6 h-6 text-white" />}
          delay={0}
        />
        <StatCard 
          title="Pending Review" 
          value={43}
          subtitle="Needs attention"
          gradient="#7c3aed, #a855f7"
          sparklineData={[20, 25, 22, 30, 28, 35, 43]}
          icon={<ClockIcon className="w-6 h-6 text-white" />}
          delay={100}
        />
        <StatCard 
          title="Submitted" 
          value={1189}
          trend="95.3%"
          trendUp
          subtitle="acceptance rate"
          gradient="#059669, #10b981"
          sparklineData={[85, 88, 90, 92, 94, 93, 95]}
          icon={<CheckCircleIcon className="w-6 h-6 text-white" />}
          delay={200}
        />
        <StatCard 
          title="Rejected" 
          value={15}
          trend="-0.3%"
          trendUp
          subtitle="rejection rate"
          gradient="#dc2626, #f87171"
          sparklineData={[8, 10, 12, 9, 11, 13, 15]}
          icon={<XCircleIcon className="w-6 h-6 text-white" />}
          delay={300}
        />
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <ChartCard 
          title="Claims Volume" 
          subtitle="Processed vs Approved"
          className="lg:col-span-2"
        >
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={volumeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="claimsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="approvedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: 'none', 
                    borderRadius: '12px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                  }}
                  labelStyle={{ color: '#94a3b8' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="claims" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  fill="url(#claimsGradient)" 
                  name="Total Claims"
                />
                <Area 
                  type="monotone" 
                  dataKey="approved" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  fill="url(#approvedGradient)" 
                  name="Approved"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-8 mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm text-slate-600">Total Claims</span>
              <span className="text-sm font-bold text-slate-900">6,820</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-sm text-slate-600">Approved</span>
              <span className="text-sm font-bold text-slate-900">6,475</span>
            </div>
          </div>
        </ChartCard>
        
        {/* Review Queue */}
        <div className="bg-white rounded-2xl border border-slate-200/50 p-6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Review Queue</h3>
              <p className="text-sm text-slate-500 mt-0.5">Items needing attention</p>
            </div>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-bold rounded-full">
              43 pending
            </span>
          </div>
          
          <div className="space-y-5">
            <QueueItem name="AI Flagged" count={28} color="bg-purple-500" percent={65} />
            <QueueItem name="Validation Errors" count={8} color="bg-red-500" percent={19} />
            <QueueItem name="High Dollar" count={5} color="bg-amber-500" percent={12} />
            <QueueItem name="Payer Rejections" count={2} color="bg-slate-500" percent={4} />
          </div>
          
          <button className="w-full mt-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors">
            View All Queues →
          </button>
        </div>
      </div>
      
      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/50 p-6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
            <button className="text-sm text-primary font-medium hover:text-primary-dark transition-colors">
              View All
            </button>
          </div>
          
          <div className="space-y-1">
            <ActivityItem
              icon={<CheckIcon className="w-5 h-5 text-white" />}
              iconBg="bg-gradient-to-br from-emerald-500 to-emerald-600"
              title="Claim Approved"
              subtitle="CLM-2024-0050 approved and submitted to Aetna"
              time="2 min ago"
              isNew
            />
            <ActivityItem
              icon={<ArrowUpIcon className="w-5 h-5 text-white" />}
              iconBg="bg-gradient-to-br from-blue-500 to-blue-600"
              title="Batch Submitted"
              subtitle="BTH-445 sent to Aetna (127 claims, $145,230)"
              time="5 min ago"
            />
            <ActivityItem
              icon={<AlertIcon className="w-5 h-5 text-white" />}
              iconBg="bg-gradient-to-br from-amber-500 to-amber-600"
              title="Review Required"
              subtitle="CLM-2024-0052 flagged for high dollar review"
              time="8 min ago"
            />
            <ActivityItem
              icon={<UserPlusIcon className="w-5 h-5 text-white" />}
              iconBg="bg-gradient-to-br from-purple-500 to-purple-600"
              title="New Client Onboarded"
              subtitle="ABC Medical Group added to the platform"
              time="15 min ago"
            />
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          {/* Top Clients */}
          <div className="bg-white rounded-2xl border border-slate-200/50 p-6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1)]">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Top Clients</h3>
            <div className="space-y-2">
              <TopClientRow rank={1} name="ABC Medical" claims="4,521" trend="+12%" isTop />
              <TopClientRow rank={2} name="XYZ Healthcare" claims="3,892" trend="+8%" />
              <TopClientRow rank={3} name="Metro Clinic" claims="2,156" trend="+15%" />
              <TopClientRow rank={4} name="Regional TPA" claims="1,834" trend="+5%" />
            </div>
          </div>
          
          {/* Payer Distribution */}
          <div className="bg-white rounded-2xl border border-slate-200/50 p-6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1)]">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Payer Mix</h3>
            <div className="flex items-center justify-center">
              <div className="w-40 h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={70}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {pieData.map((payer) => (
                <div key={payer.name} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: payer.color }} />
                  <span className="text-xs text-slate-600">{payer.name}</span>
                  <span className="text-xs font-bold text-slate-900 ml-auto">{payer.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
