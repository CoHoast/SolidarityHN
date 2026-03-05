'use client';

// Sample users data
const users = [
  { id: 'USR-001', name: 'John Smith', email: 'john@shn.com', role: 'System Admin', status: 'Active', lastLogin: '2 hours ago', mfa: true },
  { id: 'USR-002', name: 'Sarah Johnson', email: 'sarah@shn.com', role: 'Ops Manager', status: 'Active', lastLogin: '30 min ago', mfa: true },
  { id: 'USR-003', name: 'Mike Williams', email: 'mike@shn.com', role: 'Reviewer', status: 'Active', lastLogin: '1 hour ago', mfa: true },
  { id: 'USR-004', name: 'Lisa Brown', email: 'lisa@shn.com', role: 'Reviewer', status: 'Active', lastLogin: '3 hours ago', mfa: false },
  { id: 'USR-005', name: 'Tom Davis', email: 'tom@shn.com', role: 'Viewer', status: 'Active', lastLogin: '1 day ago', mfa: true },
  { id: 'USR-006', name: 'Emily Wilson', email: 'emily@shn.com', role: 'Reviewer', status: 'Invited', lastLogin: 'Never', mfa: false },
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
    'Invited': 'bg-amber-100 text-amber-700',
    'Inactive': 'bg-slate-100 text-slate-600',
    'Suspended': 'bg-red-100 text-red-700',
  };
  
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[status] || 'bg-slate-100 text-slate-700'}`}>
      {status}
    </span>
  );
}

function RoleBadge({ role }: { role: string }) {
  const styles: Record<string, string> = {
    'System Admin': 'bg-purple-100 text-purple-700',
    'Ops Manager': 'bg-blue-100 text-blue-700',
    'Reviewer': 'bg-teal-100 text-teal-700',
    'Viewer': 'bg-slate-100 text-slate-600',
  };
  
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${styles[role] || 'bg-slate-100 text-slate-700'}`}>
      {role}
    </span>
  );
}

export default function UsersSettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">User Management</h2>
          <p className="text-sm text-slate-500 mt-1">Manage SHN staff accounts and permissions</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
          <PlusIcon className="w-4 h-4" />
          Invite User
        </button>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Total Users</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">6</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Active</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">5</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Pending Invite</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">1</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">MFA Enabled</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">83%</p>
        </div>
      </div>
      
      {/* Filter Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px] relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Roles</option>
            <option>System Admin</option>
            <option>Ops Manager</option>
            <option>Reviewer</option>
            <option>Viewer</option>
          </select>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Invited</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>
      
      {/* Users Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">MFA</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Login</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium text-sm">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{user.name}</p>
                        <p className="text-xs text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <RoleBadge role={user.role} />
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={user.status} />
                  </td>
                  <td className="px-6 py-4">
                    {user.mfa ? (
                      <span className="text-emerald-600 text-sm">✓ Enabled</span>
                    ) : (
                      <span className="text-amber-600 text-sm">✗ Disabled</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{user.lastLogin}</td>
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
      
      {/* Role Descriptions */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Role Permissions</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
            <RoleBadge role="System Admin" />
            <p className="text-sm text-slate-600">Full system access, user management, configuration</p>
          </div>
          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
            <RoleBadge role="Ops Manager" />
            <p className="text-sm text-slate-600">All claims, all clients, reports, rule configuration</p>
          </div>
          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
            <RoleBadge role="Reviewer" />
            <p className="text-sm text-slate-600">Review queues, approve/reject claims, basic reports</p>
          </div>
          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
            <RoleBadge role="Viewer" />
            <p className="text-sm text-slate-600">Read-only access to dashboards and reports</p>
          </div>
        </div>
      </div>
    </div>
  );
}
