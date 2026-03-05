'use client';

// Sample payers data
const payers = [
  { id: 'PAY-001', name: 'Aetna', payerId: '60054', type: 'Commercial', status: 'Active', claims: 4521, submitterId: 'SHN001' },
  { id: 'PAY-002', name: 'UnitedHealthcare', payerId: '87726', type: 'Commercial', status: 'Active', claims: 3892, submitterId: 'SHN001' },
  { id: 'PAY-003', name: 'BCBS Ohio', payerId: '00520', type: 'Commercial', status: 'Active', claims: 2156, submitterId: 'SHN001' },
  { id: 'PAY-004', name: 'Cigna', payerId: '62308', type: 'Commercial', status: 'Active', claims: 1834, submitterId: 'SHN001' },
  { id: 'PAY-005', name: 'Humana', payerId: '61101', type: 'Commercial', status: 'Active', claims: 1203, submitterId: 'SHN001' },
  { id: 'PAY-006', name: 'Medicare', payerId: 'CMS', type: 'Government', status: 'Active', claims: 890, submitterId: 'SHN001' },
  { id: 'PAY-007', name: 'Medicaid Ohio', payerId: 'OHMED', type: 'Government', status: 'Active', claims: 567, submitterId: 'SHN001' },
  { id: 'PAY-008', name: 'Anthem', payerId: '00273', type: 'Commercial', status: 'Active', claims: 445, submitterId: 'SHN001' },
  { id: 'PAY-009', name: 'Medical Mutual', payerId: '00431', type: 'Commercial', status: 'Active', claims: 234, submitterId: 'SHN001' },
  { id: 'PAY-010', name: 'Tricare', payerId: '99726', type: 'Government', status: 'Inactive', claims: 0, submitterId: 'SHN001' },
];

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    'Active': 'bg-emerald-100 text-emerald-700',
    'Inactive': 'bg-slate-100 text-slate-600',
    'Pending': 'bg-amber-100 text-amber-700',
  };
  
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[status] || 'bg-slate-100 text-slate-700'}`}>
      {status}
    </span>
  );
}

function TypeBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    'Commercial': 'bg-blue-100 text-blue-700',
    'Government': 'bg-purple-100 text-purple-700',
    'Workers Comp': 'bg-amber-100 text-amber-700',
  };
  
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${styles[type] || 'bg-slate-100 text-slate-700'}`}>
      {type}
    </span>
  );
}

export default function PayersSettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Payer Configuration</h2>
          <p className="text-sm text-slate-500 mt-1">Manage payer connections and submission settings</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
          <PlusIcon className="w-4 h-4" />
          Add Payer
        </button>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Total Payers</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">10</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Active</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">9</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Commercial</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">7</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Government</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">3</p>
        </div>
      </div>
      
      {/* EDI Connection Status */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Stedi EDI Gateway</h3>
            <p className="text-white/70 mt-1">Connected and operational</p>
            <div className="mt-3 flex items-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Status: Connected
              </span>
              <span>Last sync: 2 min ago</span>
              <span>Uptime: 99.99%</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-sm">
            View Connection
          </button>
        </div>
      </div>
      
      {/* Filter Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px] relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search payers..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Types</option>
            <option>Commercial</option>
            <option>Government</option>
          </select>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>
      
      {/* Payers Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Payer</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Payer ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Submitter ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Claims (MTD)</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {payers.map((payer) => (
                <tr key={payer.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-900">{payer.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-sm text-slate-600 bg-slate-100 px-2 py-0.5 rounded">{payer.payerId}</code>
                  </td>
                  <td className="px-6 py-4">
                    <TypeBadge type={payer.type} />
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{payer.submitterId}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{payer.claims.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={payer.status} />
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:text-primary-dark text-sm font-medium">
                      Configure
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
