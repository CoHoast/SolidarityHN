'use client';

// Sample audit log data
const auditLogs = [
  { id: 'AUD-001', timestamp: '2026-03-05 09:23:45', user: 'John Smith', action: 'claim.approve', resource: 'CLM-2024-0050', details: 'Claim approved and submitted to Aetna', ip: '192.168.1.105' },
  { id: 'AUD-002', timestamp: '2026-03-05 09:22:30', user: 'System', action: 'batch.submit', resource: 'BTH-445', details: 'Batch submitted to Aetna (127 claims)', ip: 'Internal' },
  { id: 'AUD-003', timestamp: '2026-03-05 09:20:15', user: 'Sarah Johnson', action: 'claim.edit', resource: 'CLM-2024-0049', details: 'Updated diagnosis code from J06.0 to J06.9', ip: '192.168.1.108' },
  { id: 'AUD-004', timestamp: '2026-03-05 09:18:00', user: 'Mike Williams', action: 'claim.reject', resource: 'CLM-2024-0048', details: 'Rejected due to invalid NPI', ip: '192.168.1.112' },
  { id: 'AUD-005', timestamp: '2026-03-05 09:15:30', user: 'System', action: 'client.create', resource: 'CLT-007', details: 'New client onboarded: Demo Health Systems', ip: 'Internal' },
  { id: 'AUD-006', timestamp: '2026-03-05 09:10:00', user: 'John Smith', action: 'user.invite', resource: 'USR-006', details: 'Invited emily@shn.com as Reviewer', ip: '192.168.1.105' },
  { id: 'AUD-007', timestamp: '2026-03-05 09:05:45', user: 'System', action: 'validation.run', resource: 'CLM-2024-0050', details: 'Validation passed (100% confidence)', ip: 'Internal' },
  { id: 'AUD-008', timestamp: '2026-03-05 09:00:00', user: 'Sarah Johnson', action: 'auth.login', resource: 'USR-002', details: 'Successful login', ip: '192.168.1.108' },
  { id: 'AUD-009', timestamp: '2026-03-05 08:55:00', user: 'System', action: 'batch.complete', resource: 'BTH-444', details: 'Batch acknowledged by UHC (89 claims)', ip: 'Internal' },
  { id: 'AUD-010', timestamp: '2026-03-05 08:50:00', user: 'John Smith', action: 'settings.update', resource: 'SYS-001', details: 'Updated auto-approval threshold from 90% to 95%', ip: '192.168.1.105' },
  { id: 'AUD-011', timestamp: '2026-03-05 08:45:00', user: 'System', action: 'payer.ack', resource: 'BTH-443', details: 'Received 277CA from BCBS (56 accepted)', ip: 'Internal' },
  { id: 'AUD-012', timestamp: '2026-03-05 08:30:00', user: 'John Smith', action: 'auth.login', resource: 'USR-001', details: 'Successful login with MFA', ip: '192.168.1.105' },
];

// Action categories
const actionCategories = [
  { name: 'All Actions', value: 'all' },
  { name: 'Authentication', value: 'auth' },
  { name: 'Claims', value: 'claim' },
  { name: 'Batches', value: 'batch' },
  { name: 'Users', value: 'user' },
  { name: 'Settings', value: 'settings' },
  { name: 'System', value: 'system' },
];

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

function ActionBadge({ action }: { action: string }) {
  const category = action.split('.')[0];
  const styles: Record<string, string> = {
    'claim': 'bg-blue-100 text-blue-700',
    'batch': 'bg-purple-100 text-purple-700',
    'user': 'bg-teal-100 text-teal-700',
    'auth': 'bg-emerald-100 text-emerald-700',
    'settings': 'bg-amber-100 text-amber-700',
    'client': 'bg-pink-100 text-pink-700',
    'validation': 'bg-slate-100 text-slate-700',
    'payer': 'bg-indigo-100 text-indigo-700',
  };
  
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium font-mono ${styles[category] || 'bg-slate-100 text-slate-700'}`}>
      {action}
    </span>
  );
}

export default function AuditLogPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Audit Log</h2>
          <p className="text-sm text-slate-500 mt-1">Complete record of all system actions for compliance</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
          <DownloadIcon className="w-4 h-4" />
          Export Log
        </button>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Events Today</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">1,247</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">User Logins</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">24</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Claim Actions</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">892</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Config Changes</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">8</p>
        </div>
      </div>
      
      {/* Filter Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px] relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search logs..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            {actionCategories.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.name}</option>
            ))}
          </select>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Users</option>
            <option>John Smith</option>
            <option>Sarah Johnson</option>
            <option>Mike Williams</option>
            <option>System</option>
          </select>
          <div className="flex items-center gap-2">
            <input
              type="date"
              defaultValue="2026-03-05"
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <span className="text-slate-400">to</span>
            <input
              type="date"
              defaultValue="2026-03-05"
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </div>
      
      {/* Audit Log Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Timestamp</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">User</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Resource</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Details</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">IP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3">
                    <p className="text-sm text-slate-900 font-mono">{log.timestamp}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className={`text-sm ${log.user === 'System' ? 'text-slate-500 italic' : 'text-slate-700'}`}>
                      {log.user}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <ActionBadge action={log.action} />
                  </td>
                  <td className="px-4 py-3">
                    <code className="text-sm text-primary bg-primary/5 px-2 py-0.5 rounded">{log.resource}</code>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600 max-w-md truncate">{log.details}</td>
                  <td className="px-4 py-3">
                    <code className="text-xs text-slate-500">{log.ip}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-4 py-3 border-t border-slate-200 flex items-center justify-between">
          <p className="text-sm text-slate-500">Showing 1-12 of 1,247 events</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">Previous</button>
            <button className="px-3 py-1.5 text-sm text-white bg-primary rounded-lg">1</button>
            <button className="px-3 py-1.5 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">2</button>
            <button className="px-3 py-1.5 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">3</button>
            <span className="text-slate-400">...</span>
            <button className="px-3 py-1.5 text-sm text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>
      
      {/* Compliance Note */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <span className="text-amber-600 text-lg">⚠️</span>
          <div>
            <p className="text-sm font-medium text-amber-800">HIPAA Compliance Notice</p>
            <p className="text-sm text-amber-700 mt-1">
              All audit logs are retained for 7 years per HIPAA requirements. Logs cannot be deleted or modified.
              For compliance inquiries, contact your system administrator.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
