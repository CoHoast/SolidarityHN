'use client';

// Sample rejected claims data
const rejectedClaims = [
  { id: 'CLM-2024-0030', client: 'ABC Medical', patient: 'John Smith', payer: 'UHC', billed: '$1,250.00', reason: 'Invalid NPI - Provider not enrolled', code: 'A7:B1', rejectedAt: '1 hour ago', resubmittable: true },
  { id: 'CLM-2024-0028', client: 'XYZ Healthcare', patient: 'Mary Johnson', payer: 'Aetna', billed: '$445.00', reason: 'Duplicate claim previously submitted', code: 'A7:33', rejectedAt: '3 hours ago', resubmittable: false },
  { id: 'CLM-2024-0025', client: 'Metro Clinic', patient: 'Bob Williams', payer: 'BCBS', billed: '$2,340.00', reason: 'Patient not eligible on DOS', code: 'A7:72', rejectedAt: '5 hours ago', resubmittable: true },
  { id: 'CLM-2024-0022', client: 'Regional TPA', patient: 'Susan Davis', payer: 'Cigna', billed: '$890.00', reason: 'Missing prior authorization', code: 'A7:43', rejectedAt: '1 day ago', resubmittable: true },
  { id: 'CLM-2024-0019', client: 'City Providers', patient: 'Tom Brown', payer: 'Humana', billed: '$156.00', reason: 'Service not covered under plan', code: 'A7:18', rejectedAt: '1 day ago', resubmittable: false },
  { id: 'CLM-2024-0015', client: 'ABC Medical', patient: 'Lisa White', payer: 'UHC', billed: '$3,450.00', reason: 'Invalid diagnosis code combination', code: 'A7:B2', rejectedAt: '2 days ago', resubmittable: true },
];

// Rejection reason breakdown
const rejectionReasons = [
  { reason: 'Invalid NPI', count: 5, percent: 33 },
  { reason: 'Eligibility Issues', count: 3, percent: 20 },
  { reason: 'Missing Auth', count: 3, percent: 20 },
  { reason: 'Duplicate Claims', count: 2, percent: 13 },
  { reason: 'Non-covered Service', count: 2, percent: 13 },
];

function AlertTriangleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
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

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

export default function RejectedClaimsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Rejected Claims</h2>
          <p className="text-sm text-slate-500 mt-1">Claims rejected by payers requiring correction</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
          <DownloadIcon className="w-4 h-4" />
          Export Rejections
        </button>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangleIcon className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Total Rejected</p>
              <p className="text-2xl font-bold text-slate-900">15</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Rejection Rate</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">1.2%</p>
          <p className="text-sm text-emerald-600 mt-1">↓ 0.3% vs last week</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Resubmittable</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">11</p>
          <p className="text-sm text-slate-500 mt-1">73% correctable</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Pending Action</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">6</p>
          <p className="text-sm text-slate-500 mt-1">Needs review</p>
        </div>
      </div>
      
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Rejection Reasons Breakdown */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">Rejection Reasons</h3>
          <div className="space-y-3">
            {rejectionReasons.map((item) => (
              <div key={item.reason} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">{item.reason}</span>
                  <span className="font-medium text-slate-900">{item.count} ({item.percent}%)</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-red-500 rounded-full"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Rejection Table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-900">Recent Rejections</h3>
            <select className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm text-slate-600">
              <option>All Payers</option>
              <option>Aetna</option>
              <option>UHC</option>
              <option>BCBS</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Claim</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Client</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Payer</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Reason</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rejectedClaims.map((claim) => (
                  <tr key={claim.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3">
                      <p className="text-sm font-medium text-primary">{claim.id}</p>
                      <p className="text-xs text-slate-500">{claim.patient}</p>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">{claim.client}</td>
                    <td className="px-4 py-3 text-sm text-slate-500">{claim.payer}</td>
                    <td className="px-4 py-3">
                      <p className="text-sm text-slate-700">{claim.reason}</p>
                      <p className="text-xs text-slate-400">Code: {claim.code}</p>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-1">
                        {claim.resubmittable && (
                          <button className="p-1.5 text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Resubmit">
                            <RefreshIcon className="w-5 h-5" />
                          </button>
                        )}
                        <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" title="View">
                          <EyeIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
