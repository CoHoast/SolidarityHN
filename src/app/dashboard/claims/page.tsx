'use client';

import Link from 'next/link';

// Sample claims data
const claims = [
  { id: 'CLM-2024-0050', patient: 'John Smith', client: 'ABC Medical', dos: '03/01/26', type: '837P', billed: '$375.00', repriced: '$226.00', status: 'Accepted', payer: 'Aetna' },
  { id: 'CLM-2024-0049', patient: 'Mary Johnson', client: 'XYZ Healthcare', dos: '03/01/26', type: '837I', billed: '$15,400.00', repriced: '$12,320.00', status: 'Pending', payer: 'UHC' },
  { id: 'CLM-2024-0048', patient: 'Bob Williams', client: 'Metro Clinic', dos: '02/28/26', type: '837P', billed: '$89.00', repriced: '$67.00', status: 'Accepted', payer: 'BCBS' },
  { id: 'CLM-2024-0047', patient: 'Susan Davis', client: 'ABC Medical', dos: '02/28/26', type: '837P', billed: '$2,340.00', repriced: '$1,872.00', status: 'Submitted', payer: 'Aetna' },
  { id: 'CLM-2024-0046', patient: 'Tom Brown', client: 'Regional TPA', dos: '02/27/26', type: '837P', billed: '$156.00', repriced: '$124.80', status: 'Rejected', payer: 'Cigna' },
  { id: 'CLM-2024-0045', patient: 'Lisa White', client: 'City Providers', dos: '02/27/26', type: '837P', billed: '$445.00', repriced: '$356.00', status: 'Accepted', payer: 'Aetna' },
  { id: 'CLM-2024-0044', patient: 'Mike Green', client: 'ABC Medical', dos: '02/26/26', type: '837P', billed: '$890.00', repriced: '$712.00', status: 'Accepted', payer: 'UHC' },
  { id: 'CLM-2024-0043', patient: 'Jennifer Lee', client: 'XYZ Healthcare', dos: '02/26/26', type: '837I', billed: '$8,750.00', repriced: '$7,000.00', status: 'Review', payer: 'BCBS' },
  { id: 'CLM-2024-0042', patient: 'David Miller', client: 'Metro Clinic', dos: '02/25/26', type: '837P', billed: '$234.00', repriced: '$187.20', status: 'Accepted', payer: 'Humana' },
  { id: 'CLM-2024-0041', patient: 'Sarah Wilson', client: 'Regional TPA', dos: '02/25/26', type: '837P', billed: '$1,100.00', repriced: '$880.00', status: 'Submitted', payer: 'Aetna' },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    'Accepted': 'bg-emerald-100 text-emerald-700',
    'Pending': 'bg-amber-100 text-amber-700',
    'Submitted': 'bg-blue-100 text-blue-700',
    'Rejected': 'bg-red-100 text-red-700',
    'Review': 'bg-purple-100 text-purple-700',
  };
  
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[status] || 'bg-slate-100 text-slate-700'}`}>
      {status}
    </span>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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

export default function AllClaimsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">All Claims</h2>
          <p className="text-sm text-slate-500 mt-1">View and manage all claims across clients</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
          <DownloadIcon className="w-4 h-4" />
          Export
        </button>
      </div>
      
      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px] relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search claims..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Statuses</option>
            <option>Accepted</option>
            <option>Pending</option>
            <option>Submitted</option>
            <option>Review</option>
            <option>Rejected</option>
          </select>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Clients</option>
            <option>ABC Medical</option>
            <option>XYZ Healthcare</option>
            <option>Metro Clinic</option>
            <option>Regional TPA</option>
            <option>City Providers</option>
          </select>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Payers</option>
            <option>Aetna</option>
            <option>UHC</option>
            <option>BCBS</option>
            <option>Cigna</option>
            <option>Humana</option>
          </select>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
            <option>Custom Range</option>
          </select>
        </div>
      </div>
      
      {/* Claims Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="w-10 px-4 py-3">
                  <input type="checkbox" className="rounded border-slate-300" />
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Claim ID</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Patient</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Client</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">DOS</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Billed</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Repriced</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Payer</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {claims.map((claim) => (
                <tr key={claim.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3">
                    <input type="checkbox" className="rounded border-slate-300" />
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/dashboard/claims/${claim.id}`} className="text-sm font-medium text-primary hover:text-primary-dark">
                      {claim.id}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700">{claim.patient}</td>
                  <td className="px-4 py-3 text-sm text-slate-700">{claim.client}</td>
                  <td className="px-4 py-3 text-sm text-slate-500">{claim.dos}</td>
                  <td className="px-4 py-3 text-sm text-slate-500">{claim.type}</td>
                  <td className="px-4 py-3 text-sm text-slate-700">{claim.billed}</td>
                  <td className="px-4 py-3 text-sm text-slate-700 font-medium">{claim.repriced}</td>
                  <td className="px-4 py-3 text-sm text-slate-500">{claim.payer}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={claim.status} />
                  </td>
                  <td className="px-4 py-3">
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
        
        {/* Pagination */}
        <div className="px-4 py-3 border-t border-slate-200 flex items-center justify-between">
          <p className="text-sm text-slate-500">Showing 1-10 of 12,456 claims</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">Previous</button>
            <button className="px-3 py-1.5 text-sm text-white bg-primary rounded-lg">1</button>
            <button className="px-3 py-1.5 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">2</button>
            <button className="px-3 py-1.5 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">3</button>
            <span className="text-slate-400">...</span>
            <button className="px-3 py-1.5 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">1246</button>
            <button className="px-3 py-1.5 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
