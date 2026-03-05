'use client';

// Sample fee schedules data
const feeSchedules = [
  { id: 'FS-001', name: 'Medicare 100%', type: '% of Medicare', base: '100%', clients: 12, status: 'Active', updated: 'Jan 1, 2026' },
  { id: 'FS-002', name: 'Medicare 110%', type: '% of Medicare', base: '110%', clients: 5, status: 'Active', updated: 'Jan 1, 2026' },
  { id: 'FS-003', name: 'Medicare 120%', type: '% of Medicare', base: '120%', clients: 3, status: 'Active', updated: 'Jan 1, 2026' },
  { id: 'FS-004', name: 'Custom - ABC Medical', type: 'Fixed Rates', base: 'Custom', clients: 1, status: 'Active', updated: 'Feb 15, 2026' },
  { id: 'FS-005', name: 'Custom - XYZ Healthcare', type: 'Fixed Rates', base: 'Custom', clients: 1, status: 'Active', updated: 'Feb 20, 2026' },
  { id: 'FS-006', name: 'UCR 80%', type: 'UCR Based', base: '80%', clients: 2, status: 'Active', updated: 'Jan 1, 2026' },
];

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}

function RefreshIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
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

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
  );
}

function TableIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    'Active': 'bg-emerald-100 text-emerald-700',
    'Inactive': 'bg-slate-100 text-slate-600',
    'Draft': 'bg-amber-100 text-amber-700',
  };
  
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[status] || 'bg-slate-100 text-slate-700'}`}>
      {status}
    </span>
  );
}

function TypeBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    '% of Medicare': 'bg-blue-100 text-blue-700',
    'Fixed Rates': 'bg-purple-100 text-purple-700',
    'UCR Based': 'bg-teal-100 text-teal-700',
  };
  
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${styles[type] || 'bg-slate-100 text-slate-700'}`}>
      {type}
    </span>
  );
}

export default function RepricingPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Fee Schedules</h2>
          <p className="text-sm text-slate-500 mt-1">Manage repricing fee schedules and rate tables</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
          <PlusIcon className="w-4 h-4" />
          Create Schedule
        </button>
      </div>
      
      {/* Medicare Reference Card */}
      <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-6 text-white">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">Medicare Fee Schedule (2026)</h3>
            <p className="text-white/70 mt-1">CMS Medicare Physician Fee Schedule Reference</p>
            <div className="mt-4 flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-white/60">Last Updated:</span>
                <span className="ml-2 font-medium">Jan 1, 2026</span>
              </div>
              <div>
                <span className="text-white/60">Source:</span>
                <span className="ml-2 font-medium">CMS MPFS</span>
              </div>
              <div>
                <span className="text-white/60">Records:</span>
                <span className="ml-2 font-medium">16,842 CPT/HCPCS codes</span>
              </div>
              <div>
                <span className="text-white/60">Localities:</span>
                <span className="ml-2 font-medium">89</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-sm">
              <RefreshIcon className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors text-sm font-medium">
            <UploadIcon className="w-4 h-4" />
            Upload New Schedule
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-sm">
            <DownloadIcon className="w-4 h-4" />
            Download Current
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-sm">
            <TableIcon className="w-4 h-4" />
            View Rates
          </button>
        </div>
      </div>
      
      {/* Fee Schedules Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">Client Fee Schedules</h3>
          <div className="flex items-center gap-3">
            <select className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm text-slate-600">
              <option>All Types</option>
              <option>% of Medicare</option>
              <option>Fixed Rates</option>
              <option>UCR Based</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Schedule Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Base Rate</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Clients Using</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {feeSchedules.map((schedule) => (
                <tr key={schedule.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-900">{schedule.name}</p>
                    <p className="text-xs text-slate-500">{schedule.id}</p>
                  </td>
                  <td className="px-6 py-4">
                    <TypeBadge type={schedule.type} />
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{schedule.base}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{schedule.clients}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{schedule.updated}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={schedule.status} />
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:text-primary-dark text-sm font-medium">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Repricing Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Claims Repriced Today</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">1,247</p>
          <p className="text-sm text-slate-500 mt-1">Across all schedules</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Average Savings</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">24.3%</p>
          <p className="text-sm text-slate-500 mt-1">Billed vs repriced</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Total Savings (MTD)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">$847,234</p>
          <p className="text-sm text-emerald-600 mt-1">↑ 12% vs last month</p>
        </div>
      </div>
    </div>
  );
}
