'use client';

// Sample clients data
const clients = [
  { id: 'CLT-001', name: 'ABC Medical Group', type: 'TPA', claimsMonth: 4521, status: 'Active', joined: 'Jan 2026', contact: 'John Smith', email: 'john@abcmedical.com', users: 3 },
  { id: 'CLT-002', name: 'XYZ Healthcare', type: 'Provider', claimsMonth: 3892, status: 'Active', joined: 'Feb 2026', contact: 'Mary Johnson', email: 'mary@xyzhealthcare.com', users: 5 },
  { id: 'CLT-003', name: 'Metro Clinic', type: 'Provider', claimsMonth: 2156, status: 'Active', joined: 'Jan 2026', contact: 'Bob Williams', email: 'bob@metroclinic.com', users: 2 },
  { id: 'CLT-004', name: 'Regional TPA Services', type: 'TPA', claimsMonth: 1834, status: 'Active', joined: 'Mar 2026', contact: 'Susan Davis', email: 'susan@regionaltpa.com', users: 4 },
  { id: 'CLT-005', name: 'City Providers Network', type: 'Network', claimsMonth: 1203, status: 'Active', joined: 'Feb 2026', contact: 'Tom Brown', email: 'tom@cityproviders.net', users: 6 },
  { id: 'CLT-006', name: 'Demo Health Systems', type: 'Test', claimsMonth: 45, status: 'Test', joined: 'Mar 2026', contact: 'Test User', email: 'test@demo.com', users: 1 },
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

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    'Active': 'bg-emerald-100 text-emerald-700',
    'Test': 'bg-amber-100 text-amber-700',
    'Inactive': 'bg-slate-100 text-slate-600',
    'Suspended': 'bg-red-100 text-red-700',
  };
  
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[status] || 'bg-slate-100 text-slate-700'}`}>
      {status}
    </span>
  );
}

function TypeBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    'TPA': 'bg-blue-100 text-blue-700',
    'Provider': 'bg-purple-100 text-purple-700',
    'Network': 'bg-teal-100 text-teal-700',
    'Test': 'bg-slate-100 text-slate-600',
  };
  
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${styles[type] || 'bg-slate-100 text-slate-700'}`}>
      {type}
    </span>
  );
}

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Clients</h2>
          <p className="text-sm text-slate-500 mt-1">Manage clearing house client organizations</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
          <PlusIcon className="w-4 h-4" />
          Add Client
        </button>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <BuildingIcon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Total Clients</p>
              <p className="text-2xl font-bold text-slate-900">6</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Active Clients</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">5</p>
          <p className="text-sm text-emerald-600 mt-1">+2 this month</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Total Users</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">21</p>
          <p className="text-sm text-slate-500 mt-1">Across all clients</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Claims This Month</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">13,651</p>
          <p className="text-sm text-emerald-600 mt-1">↑ 12% vs last month</p>
        </div>
      </div>
      
      {/* Filter Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px] relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search clients..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Types</option>
            <option>TPA</option>
            <option>Provider</option>
            <option>Network</option>
          </select>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Test</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>
      
      {/* Clients Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Claims/Month</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Users</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Joined</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                        <BuildingIcon className="w-5 h-5 text-slate-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{client.name}</p>
                        <p className="text-xs text-slate-500">{client.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <TypeBadge type={client.type} />
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{client.claimsMonth.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-700">{client.contact}</p>
                    <p className="text-xs text-slate-500">{client.email}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">{client.users}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{client.joined}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={client.status} />
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-slate-400 hover:text-slate-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
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
