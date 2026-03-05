'use client';

// Sample submitted claims data
const submittedClaims = [
  { id: 'CLM-2024-0040', client: 'ABC Medical', patient: 'John Smith', payer: 'Aetna', billed: '$375.00', repriced: '$226.00', submitted: '2 hours ago', batch: 'BTH-445', status: 'Acknowledged' },
  { id: 'CLM-2024-0039', client: 'ABC Medical', patient: 'Mary Johnson', payer: 'Aetna', billed: '$1,250.00', repriced: '$750.00', submitted: '2 hours ago', batch: 'BTH-445', status: 'Acknowledged' },
  { id: 'CLM-2024-0038', client: 'XYZ Healthcare', patient: 'Bob Williams', payer: 'UHC', billed: '$8,900.00', repriced: '$7,120.00', submitted: '3 hours ago', batch: 'BTH-444', status: 'Pending' },
  { id: 'CLM-2024-0037', client: 'Metro Clinic', patient: 'Susan Davis', payer: 'BCBS', billed: '$445.00', repriced: '$356.00', submitted: '4 hours ago', batch: 'BTH-443', status: 'Accepted' },
  { id: 'CLM-2024-0036', client: 'Regional TPA', patient: 'Tom Brown', payer: 'Cigna', billed: '$1,890.00', repriced: '$1,512.00', submitted: '5 hours ago', batch: 'BTH-442', status: 'Accepted' },
  { id: 'CLM-2024-0035', client: 'City Providers', patient: 'Lisa White', payer: 'Aetna', billed: '$234.00', repriced: '$187.00', submitted: '6 hours ago', batch: 'BTH-441', status: 'Accepted' },
  { id: 'CLM-2024-0034', client: 'ABC Medical', patient: 'Mike Green', payer: 'Humana', billed: '$567.00', repriced: '$454.00', submitted: '1 day ago', batch: 'BTH-440', status: 'Accepted' },
  { id: 'CLM-2024-0033', client: 'XYZ Healthcare', patient: 'Jennifer Lee', payer: 'UHC', billed: '$2,340.00', repriced: '$1,872.00', submitted: '1 day ago', batch: 'BTH-439', status: 'Accepted' },
];

// Recent batches
const recentBatches = [
  { id: 'BTH-445', payer: 'Aetna', claims: 127, amount: '$145,230', submitted: '2 hours ago', status: 'Acknowledged' },
  { id: 'BTH-444', payer: 'UHC', claims: 89, amount: '$98,450', submitted: '3 hours ago', status: 'Pending' },
  { id: 'BTH-443', payer: 'BCBS', claims: 56, amount: '$67,890', submitted: '4 hours ago', status: 'Accepted' },
  { id: 'BTH-442', payer: 'Cigna', claims: 34, amount: '$42,100', submitted: '5 hours ago', status: 'Accepted' },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    'Accepted': 'bg-emerald-100 text-emerald-700',
    'Pending': 'bg-amber-100 text-amber-700',
    'Acknowledged': 'bg-blue-100 text-blue-700',
    'Rejected': 'bg-red-100 text-red-700',
  };
  
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[status] || 'bg-slate-100 text-slate-700'}`}>
      {status}
    </span>
  );
}

function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  );
}

export default function SubmittedClaimsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Submitted Claims</h2>
          <p className="text-sm text-slate-500 mt-1">Claims sent to payers awaiting acknowledgement</p>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Submitted Today</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">1,189</p>
          <p className="text-sm text-emerald-600 mt-1">↑ 8% vs yesterday</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Awaiting ACK</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">216</p>
          <p className="text-sm text-slate-500 mt-1">From 3 batches</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Acknowledged</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">956</p>
          <p className="text-sm text-slate-500 mt-1">999 received</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Accepted (277CA)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">842</p>
          <p className="text-sm text-emerald-600 mt-1">95.3% acceptance</p>
        </div>
      </div>
      
      {/* Recent Batches */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h3 className="text-sm font-semibold text-slate-900">Recent Batches</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Batch ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Payer</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Claims</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Submitted</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentBatches.map((batch) => (
                <tr key={batch.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <ArrowUpIcon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{batch.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">{batch.payer}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{batch.claims}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{batch.amount}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{batch.submitted}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={batch.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Claims Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">Individual Claims</h3>
          <div className="flex items-center gap-3">
            <select className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm text-slate-600">
              <option>All Payers</option>
              <option>Aetna</option>
              <option>UHC</option>
              <option>BCBS</option>
            </select>
            <select className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm text-slate-600">
              <option>All Statuses</option>
              <option>Pending</option>
              <option>Acknowledged</option>
              <option>Accepted</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Claim ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Payer</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Billed</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Repriced</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Batch</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Submitted</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {submittedClaims.map((claim) => (
                <tr key={claim.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-primary">{claim.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{claim.client}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{claim.patient}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{claim.payer}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{claim.billed}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{claim.repriced}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{claim.batch}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{claim.submitted}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={claim.status} />
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
