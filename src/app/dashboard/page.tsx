'use client';

// Stats Card Component
function StatCard({ 
  title, 
  value, 
  subtitle, 
  trend, 
  trendUp,
  alert 
}: { 
  title: string;
  value: string;
  subtitle?: string;
  trend?: string;
  trendUp?: boolean;
  alert?: boolean;
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        {alert && (
          <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
            Action Required
          </span>
        )}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <p className="text-3xl font-bold text-slate-900">{value}</p>
        {trend && (
          <span className={`text-sm font-medium ${trendUp ? 'text-emerald-600' : 'text-slate-500'}`}>
            {trendUp && '↑'} {trend}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      )}
    </div>
  );
}

// Chart placeholder - 7 day bar chart
function ClaimsVolumeChart() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const values = [1120, 980, 1340, 1200, 1450, 420, 310];
  const maxValue = Math.max(...values);
  
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <h3 className="text-sm font-semibold text-slate-900 mb-4">Claims Volume (7 Days)</h3>
      <div className="flex items-end gap-2 h-40">
        {days.map((day, i) => (
          <div key={day} className="flex-1 flex flex-col items-center gap-2">
            <div 
              className="w-full bg-primary/80 rounded-t hover:bg-primary transition-colors cursor-pointer"
              style={{ height: `${(values[i] / maxValue) * 100}%` }}
              title={`${values[i]} claims`}
            />
            <span className="text-xs text-slate-500">{day}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-slate-500">Total: 6,820 claims</span>
        <span className="text-emerald-600 font-medium">+8% vs last week</span>
      </div>
    </div>
  );
}

// Review Queue Summary
function ReviewQueueCard() {
  const queues = [
    { name: 'AI Flagged', count: 28, color: 'bg-purple-500' },
    { name: 'Validation Errors', count: 8, color: 'bg-red-500' },
    { name: 'High Dollar', count: 5, color: 'bg-amber-500' },
    { name: 'Payer Rejections', count: 2, color: 'bg-slate-500' },
  ];
  
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-900">Review Queue</h3>
        <span className="text-xs text-slate-500">43 total</span>
      </div>
      <div className="space-y-3">
        {queues.map((queue) => (
          <div key={queue.name} className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${queue.color}`} />
            <span className="flex-1 text-sm text-slate-600">{queue.name}</span>
            <span className="text-sm font-semibold text-slate-900">{queue.count}</span>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full text-center text-sm text-primary font-medium hover:text-primary-dark transition-colors">
        View All Queues →
      </button>
    </div>
  );
}

// Activity Item
function ActivityItem({ 
  icon, 
  iconBg, 
  text, 
  time 
}: { 
  icon: React.ReactNode;
  iconBg: string;
  text: string;
  time: string;
}) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0">
      <div className={`w-8 h-8 rounded-full ${iconBg} flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-slate-700">{text}</p>
      </div>
      <span className="text-xs text-slate-400 whitespace-nowrap">{time}</span>
    </div>
  );
}

// Check icon
function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

// Arrow up icon
function ArrowUpIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  );
}

// Alert icon
function AlertIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

// User icon
function UserIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

// X icon
function XIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

// Recent Activity Feed
function RecentActivity() {
  const activities = [
    {
      icon: <CheckIcon />,
      iconBg: 'bg-emerald-500',
      text: 'Claim #CLM-2024-0001 approved by John S.',
      time: '2 min ago'
    },
    {
      icon: <ArrowUpIcon />,
      iconBg: 'bg-primary',
      text: 'Batch #BTH-445 submitted to Aetna (127 claims)',
      time: '5 min ago'
    },
    {
      icon: <AlertIcon />,
      iconBg: 'bg-amber-500',
      text: 'Claim #CLM-2024-0002 flagged for review',
      time: '8 min ago'
    },
    {
      icon: <UserIcon />,
      iconBg: 'bg-secondary',
      text: 'New client "ABC Medical Group" onboarded',
      time: '15 min ago'
    },
    {
      icon: <XIcon />,
      iconBg: 'bg-red-500',
      text: 'Claim #CLM-2024-0003 rejected by UHC (invalid NPI)',
      time: '22 min ago'
    },
  ];
  
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <h3 className="text-sm font-semibold text-slate-900 mb-2">Recent Activity</h3>
      <div className="divide-y divide-slate-100">
        {activities.map((activity, i) => (
          <ActivityItem key={i} {...activity} />
        ))}
      </div>
    </div>
  );
}

// Top Clients Table
function TopClientsCard() {
  const clients = [
    { name: 'ABC Medical', claims: '4,521' },
    { name: 'XYZ Healthcare', claims: '3,892' },
    { name: 'Metro Clinic', claims: '2,156' },
    { name: 'Regional TPA', claims: '1,834' },
    { name: 'City Providers', claims: '1,203' },
  ];
  
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <h3 className="text-sm font-semibold text-slate-900 mb-4">Top Clients (This Month)</h3>
      <div className="space-y-3">
        {clients.map((client, i) => (
          <div key={client.name} className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-slate-100 text-xs font-medium text-slate-600 flex items-center justify-center">
              {i + 1}
            </span>
            <span className="flex-1 text-sm text-slate-700">{client.name}</span>
            <span className="text-sm font-medium text-slate-900">{client.claims}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Payer Distribution
function PayerDistributionCard() {
  const payers = [
    { name: 'Aetna', percent: 35, color: 'bg-primary' },
    { name: 'UHC', percent: 28, color: 'bg-secondary' },
    { name: 'BCBS', percent: 18, color: 'bg-purple-500' },
    { name: 'Cigna', percent: 12, color: 'bg-amber-500' },
    { name: 'Other', percent: 7, color: 'bg-slate-400' },
  ];
  
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <h3 className="text-sm font-semibold text-slate-900 mb-4">Payer Distribution</h3>
      <div className="space-y-3">
        {payers.map((payer) => (
          <div key={payer.name} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">{payer.name}</span>
              <span className="font-medium text-slate-900">{payer.percent}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className={`h-full ${payer.color} rounded-full`}
                style={{ width: `${payer.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Claims Today" 
          value="1,247" 
          trend="+12%"
          trendUp
        />
        <StatCard 
          title="Pending Review" 
          value="43" 
          alert
        />
        <StatCard 
          title="Submitted" 
          value="1,189" 
          subtitle="95.3% submission rate"
        />
        <StatCard 
          title="Rejected" 
          value="15" 
          subtitle="1.2% rejection rate"
        />
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ClaimsVolumeChart />
        </div>
        <ReviewQueueCard />
      </div>
      
      {/* Activity & Stats Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <RecentActivity />
        </div>
        <TopClientsCard />
        <PayerDistributionCard />
      </div>
    </div>
  );
}
