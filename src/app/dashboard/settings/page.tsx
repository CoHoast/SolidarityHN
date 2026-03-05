'use client';

import Link from 'next/link';

// Settings navigation
const settingsNav = [
  {
    title: 'User Management',
    description: 'Manage SHN staff accounts, roles, and permissions',
    href: '/dashboard/settings/users',
    icon: 'users',
    count: '6 users'
  },
  {
    title: 'Validation Rules',
    description: 'Configure claim validation and scrubbing rules',
    href: '/dashboard/settings/rules',
    icon: 'check',
    count: '24 active'
  },
  {
    title: 'Payer Configuration',
    description: 'Manage payer connections, IDs, and submission settings',
    href: '/dashboard/settings/payers',
    icon: 'building',
    count: '12 payers'
  },
  {
    title: 'System Settings',
    description: 'Configure system-wide thresholds and preferences',
    href: '/dashboard/settings/system',
    icon: 'cog',
    count: ''
  },
];

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
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

function CogIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  'users': UsersIcon,
  'check': CheckIcon,
  'building': BuildingIcon,
  'cog': CogIcon,
};

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Settings</h2>
        <p className="text-sm text-slate-500 mt-1">Configure system settings and preferences</p>
      </div>
      
      {/* Settings Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {settingsNav.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  {item.count && (
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full">
                      {item.count}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-500 mt-0.5">{item.description}</p>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
            </Link>
          );
        })}
      </div>
      
      {/* Quick Settings */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Quick Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-slate-100">
            <div>
              <p className="text-sm font-medium text-slate-700">Auto-approval Threshold</p>
              <p className="text-xs text-slate-500">Claims above this confidence level are auto-approved</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-900">95%</span>
              <button className="text-primary text-sm font-medium hover:text-primary-dark">Edit</button>
            </div>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-slate-100">
            <div>
              <p className="text-sm font-medium text-slate-700">High Dollar Threshold</p>
              <p className="text-xs text-slate-500">Claims above this amount require manual review</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-900">$10,000</span>
              <button className="text-primary text-sm font-medium hover:text-primary-dark">Edit</button>
            </div>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-slate-100">
            <div>
              <p className="text-sm font-medium text-slate-700">Batch Submission Time</p>
              <p className="text-xs text-slate-500">When claims are batched and submitted to payers</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-900">Every 15 min</span>
              <button className="text-primary text-sm font-medium hover:text-primary-dark">Edit</button>
            </div>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm font-medium text-slate-700">Email Notifications</p>
              <p className="text-xs text-slate-500">Send alerts for rejections and high-priority items</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-emerald-600">Enabled</span>
              <button className="text-primary text-sm font-medium hover:text-primary-dark">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
