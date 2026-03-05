'use client';

// Sample review queue data
const reviewItems = [
  { id: 'CLM-2024-0045', client: 'ABC Medical', patient: 'John Smith', type: '837P', amount: '$1,250.00', issue: 'AI Confidence: 78%', issueType: 'ai', confidence: 78, flaggedField: 'Diagnosis Code' },
  { id: 'CLM-2024-0046', client: 'XYZ Healthcare', patient: 'Mary Johnson', type: '837I', amount: '$15,400.00', issue: 'High Dollar Amount', issueType: 'high-dollar', threshold: '$10,000' },
  { id: 'CLM-2024-0047', client: 'Metro Clinic', patient: 'Bob Williams', type: '837P', amount: '$340.00', issue: 'Invalid NPI', issueType: 'validation', field: 'Rendering Provider NPI' },
  { id: 'CLM-2024-0048', client: 'ABC Medical', patient: 'Susan Davis', type: '837P', amount: '$890.00', issue: 'AI Confidence: 82%', issueType: 'ai', confidence: 82, flaggedField: 'CPT Modifier' },
  { id: 'CLM-2024-0049', client: 'Regional TPA', patient: 'Tom Brown', type: '837P', amount: '$2,100.00', issue: 'Potential Duplicate', issueType: 'duplicate', matchedClaim: 'CLM-2024-0012' },
  { id: 'CLM-2024-0050', client: 'City Providers', patient: 'Lisa White', type: '837P', amount: '$445.00', issue: 'AI Confidence: 71%', issueType: 'ai', confidence: 71, flaggedField: 'Place of Service' },
  { id: 'CLM-2024-0051', client: 'ABC Medical', patient: 'Mike Green', type: '837P', amount: '$1,890.00', issue: 'Missing Authorization', issueType: 'validation', field: 'Prior Auth Number' },
  { id: 'CLM-2024-0052', client: 'XYZ Healthcare', patient: 'Jennifer Lee', type: '837I', amount: '$22,500.00', issue: 'High Dollar Amount', issueType: 'high-dollar', threshold: '$10,000' },
];

// Queue counts
const queueCounts = {
  ai: 28,
  validation: 8,
  highDollar: 5,
  rejections: 2,
};

function QueueTab({ name, count, color, active }: { name: string; count: number; color: string; active?: boolean }) {
  return (
    <button 
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg border transition-all
        ${active 
          ? 'bg-white border-slate-200 shadow-sm' 
          : 'bg-transparent border-transparent hover:bg-white/50'
        }
      `}
    >
      <div className={`w-3 h-3 rounded-full ${color}`} />
      <span className="text-sm font-medium text-slate-700">{name}</span>
      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${active ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'}`}>
        {count}
      </span>
    </button>
  );
}

function IssueTypeBadge({ type }: { type: string }) {
  const styles: Record<string, { bg: string; text: string; label: string }> = {
    'ai': { bg: 'bg-purple-100', text: 'text-purple-700', label: 'AI Flag' },
    'validation': { bg: 'bg-red-100', text: 'text-red-700', label: 'Validation' },
    'high-dollar': { bg: 'bg-amber-100', text: 'text-amber-700', label: 'High $' },
    'duplicate': { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Duplicate' },
    'rejection': { bg: 'bg-slate-100', text: 'text-slate-700', label: 'Rejection' },
  };
  
  const style = styles[type] || styles['validation'];
  
  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${style.bg} ${style.text}`}>
      {style.label}
    </span>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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

function UserPlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>
  );
}

export default function ReviewQueuePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Review Queue</h2>
          <p className="text-sm text-slate-500 mt-1">Claims requiring manual review before submission</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span className="font-semibold text-slate-900">43</span> items pending
        </div>
      </div>
      
      {/* Queue Tabs */}
      <div className="bg-slate-100 rounded-xl p-2 flex flex-wrap gap-2">
        <QueueTab name="AI Flagged" count={queueCounts.ai} color="bg-purple-500" active />
        <QueueTab name="Validation Errors" count={queueCounts.validation} color="bg-red-500" />
        <QueueTab name="High Dollar" count={queueCounts.highDollar} color="bg-amber-500" />
        <QueueTab name="Payer Rejections" count={queueCounts.rejections} color="bg-slate-500" />
      </div>
      
      {/* Filter Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px] relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search queue..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Clients</option>
            <option>ABC Medical</option>
            <option>XYZ Healthcare</option>
            <option>Metro Clinic</option>
          </select>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
        </div>
      </div>
      
      {/* Queue Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="w-10 px-4 py-3">
                  <input type="checkbox" className="rounded border-slate-300" />
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Claim ID</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Client</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Patient</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Issue</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {reviewItems.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3">
                    <input type="checkbox" className="rounded border-slate-300" />
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm font-medium text-primary">{item.id}</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700">{item.client}</td>
                  <td className="px-4 py-3 text-sm text-slate-700">{item.patient}</td>
                  <td className="px-4 py-3 text-sm text-slate-500">{item.type}</td>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">{item.amount}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <IssueTypeBadge type={item.issueType} />
                      <span className="text-sm text-slate-600">{item.issue}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-1">
                      <button className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" title="Approve">
                        <CheckIcon className="w-5 h-5" />
                      </button>
                      <button className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Reject">
                        <XIcon className="w-5 h-5" />
                      </button>
                      <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" title="View">
                        <EyeIcon className="w-5 h-5" />
                      </button>
                      <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" title="Assign">
                        <UserPlusIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Bulk Actions */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">Selected: <span className="font-semibold text-slate-700">0</span> claims</p>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              <CheckIcon className="w-4 h-4" />
              Approve Selected
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              <XIcon className="w-4 h-4" />
              Reject Selected
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
              <UserPlusIcon className="w-4 h-4" />
              Assign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
