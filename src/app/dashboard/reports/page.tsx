'use client';

// Report definitions
const reports = [
  { 
    id: 'claims-volume',
    name: 'Claims Volume Report', 
    description: 'Daily/weekly/monthly claim counts by client and payer',
    icon: 'chart-bar',
    category: 'Operations'
  },
  { 
    id: 'financial-summary',
    name: 'Financial Summary', 
    description: 'Billed vs repriced amounts, savings analysis',
    icon: 'currency',
    category: 'Financial'
  },
  { 
    id: 'rejection-analysis',
    name: 'Rejection Analysis', 
    description: 'Rejection reasons, trends, by payer',
    icon: 'x-circle',
    category: 'Operations'
  },
  { 
    id: 'processing-metrics',
    name: 'Processing Metrics', 
    description: 'Turnaround times, auto-approval rates',
    icon: 'clock',
    category: 'Operations'
  },
  { 
    id: 'client-activity',
    name: 'Client Activity', 
    description: 'Per-client volume and billing summary',
    icon: 'users',
    category: 'Clients'
  },
  { 
    id: 'audit-report',
    name: 'Audit Report', 
    description: 'All system actions for compliance',
    icon: 'shield',
    category: 'Compliance'
  },
  { 
    id: 'payer-performance',
    name: 'Payer Performance', 
    description: 'Acceptance rates, response times by payer',
    icon: 'building',
    category: 'Operations'
  },
  { 
    id: 'user-activity',
    name: 'User Activity', 
    description: 'User logins, actions, and permissions audit',
    icon: 'user',
    category: 'Compliance'
  },
];

function ChartBarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function CurrencyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function XCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  'chart-bar': ChartBarIcon,
  'currency': CurrencyIcon,
  'x-circle': XCircleIcon,
  'clock': ClockIcon,
  'users': UsersIcon,
  'shield': ShieldIcon,
  'building': BuildingIcon,
  'user': UserIcon,
};

const categoryColors: Record<string, string> = {
  'Operations': 'bg-blue-100 text-blue-700',
  'Financial': 'bg-emerald-100 text-emerald-700',
  'Clients': 'bg-purple-100 text-purple-700',
  'Compliance': 'bg-amber-100 text-amber-700',
};

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Reports & Analytics</h2>
          <p className="text-sm text-slate-500 mt-1">Generate and export operational reports</p>
        </div>
      </div>
      
      {/* Date Range & Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-500">Date Range:</label>
            <input
              type="date"
              defaultValue="2026-03-01"
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <span className="text-slate-400">to</span>
            <input
              type="date"
              defaultValue="2026-03-05"
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Clients</option>
            <option>ABC Medical</option>
            <option>XYZ Healthcare</option>
          </select>
        </div>
      </div>
      
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Volume (Period)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">12,456</p>
          <p className="text-sm text-slate-500 mt-1">Total claims</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Acceptance Rate</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">94.7%</p>
          <p className="text-sm text-emerald-600 mt-1">↑ 1.2% vs prior period</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Total Savings</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">$847,234</p>
          <p className="text-sm text-slate-500 mt-1">Billed vs repriced</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Avg Processing</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">4.2 sec</p>
          <p className="text-sm text-emerald-600 mt-1">↓ 0.5s vs prior</p>
        </div>
      </div>
      
      {/* Reports Grid */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Available Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reports.map((report) => {
            const Icon = iconMap[report.icon] || ChartBarIcon;
            return (
              <div 
                key={report.id}
                className="flex items-start gap-4 p-4 border border-slate-200 rounded-xl hover:border-primary/50 hover:bg-slate-50 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-medium text-slate-900">{report.name}</p>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${categoryColors[report.category]}`}>
                      {report.category}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">{report.description}</p>
                </div>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors opacity-0 group-hover:opacity-100">
                  <PlayIcon className="w-4 h-4" />
                  Generate
                </button>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Recent Reports */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h3 className="text-sm font-semibold text-slate-900">Recently Generated</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { name: 'Claims Volume Report', date: 'Mar 5, 2026 09:15 AM', format: 'PDF', size: '245 KB' },
            { name: 'Financial Summary', date: 'Mar 4, 2026 04:30 PM', format: 'Excel', size: '1.2 MB' },
            { name: 'Rejection Analysis', date: 'Mar 4, 2026 02:00 PM', format: 'PDF', size: '180 KB' },
            { name: 'Client Activity', date: 'Mar 3, 2026 11:45 AM', format: 'Excel', size: '890 KB' },
          ].map((report, i) => (
            <div key={i} className="px-6 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                <ChartBarIcon className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-sm font-medium text-slate-700">{report.name}</p>
                  <p className="text-xs text-slate-500">{report.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-slate-500">{report.format} • {report.size}</span>
                <button className="p-1.5 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                  <DownloadIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
