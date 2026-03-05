'use client';

import { useState } from 'react';

// Role definitions with permissions
const roleDefinitions = [
  {
    id: 'admin',
    name: 'System Admin',
    description: 'Full system access including configuration and user management',
    color: 'bg-purple-500',
    permissions: {
      dashboard: true,
      claims_view: true,
      claims_edit: true,
      claims_approve: true,
      clients_view: true,
      clients_edit: true,
      repricing_view: true,
      repricing_edit: true,
      reports_view: true,
      reports_export: true,
      settings_view: true,
      settings_edit: true,
      team_manage: true,
      audit_view: true,
    }
  },
  {
    id: 'ops_manager',
    name: 'Operations Manager',
    description: 'Manage claims, clients, and repricing. Cannot modify system settings.',
    color: 'bg-blue-500',
    permissions: {
      dashboard: true,
      claims_view: true,
      claims_edit: true,
      claims_approve: true,
      clients_view: true,
      clients_edit: true,
      repricing_view: true,
      repricing_edit: true,
      reports_view: true,
      reports_export: true,
      settings_view: true,
      settings_edit: false,
      team_manage: false,
      audit_view: true,
    }
  },
  {
    id: 'reviewer',
    name: 'Reviewer',
    description: 'Review and approve claims. Read-only access to other areas.',
    color: 'bg-teal-500',
    permissions: {
      dashboard: true,
      claims_view: true,
      claims_edit: true,
      claims_approve: true,
      clients_view: true,
      clients_edit: false,
      repricing_view: true,
      repricing_edit: false,
      reports_view: true,
      reports_export: false,
      settings_view: false,
      settings_edit: false,
      team_manage: false,
      audit_view: false,
    }
  },
  {
    id: 'viewer',
    name: 'Viewer',
    description: 'Read-only access to reports and audit logs only.',
    color: 'bg-slate-500',
    permissions: {
      dashboard: false,
      claims_view: false,
      claims_edit: false,
      claims_approve: false,
      clients_view: false,
      clients_edit: false,
      repricing_view: false,
      repricing_edit: false,
      reports_view: true,
      reports_export: false,
      settings_view: false,
      settings_edit: false,
      team_manage: false,
      audit_view: true,
    }
  },
];

// Permission labels for the matrix
const permissionLabels: Record<string, string> = {
  dashboard: 'Dashboard',
  claims_view: 'View Claims',
  claims_edit: 'Edit Claims',
  claims_approve: 'Approve/Reject Claims',
  clients_view: 'View Clients',
  clients_edit: 'Manage Clients',
  repricing_view: 'View Repricing',
  repricing_edit: 'Edit Fee Schedules',
  reports_view: 'View Reports',
  reports_export: 'Export Reports',
  settings_view: 'View Settings',
  settings_edit: 'Edit Settings',
  team_manage: 'Manage Team',
  audit_view: 'View Audit Log',
};

// Sample team members
const teamMembers = [
  { id: 'TM-001', name: 'John Smith', email: 'john@solidarity.com', role: 'admin', status: 'Active', lastActive: '2 min ago', avatar: 'JS' },
  { id: 'TM-002', name: 'Sarah Johnson', email: 'sarah@solidarity.com', role: 'ops_manager', status: 'Active', lastActive: '15 min ago', avatar: 'SJ' },
  { id: 'TM-003', name: 'Mike Williams', email: 'mike@solidarity.com', role: 'reviewer', status: 'Active', lastActive: '1 hour ago', avatar: 'MW' },
  { id: 'TM-004', name: 'Lisa Brown', email: 'lisa@solidarity.com', role: 'reviewer', status: 'Active', lastActive: '3 hours ago', avatar: 'LB' },
  { id: 'TM-005', name: 'Tom Davis', email: 'tom@solidarity.com', role: 'viewer', status: 'Active', lastActive: '1 day ago', avatar: 'TD' },
  { id: 'TM-006', name: 'Emily Wilson', email: 'emily@solidarity.com', role: 'reviewer', status: 'Invited', lastActive: 'Never', avatar: 'EW' },
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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
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

function RoleBadge({ roleId }: { roleId: string }) {
  const role = roleDefinitions.find(r => r.id === roleId);
  if (!role) return null;
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-white ${role.color}`}>
      <ShieldIcon className="w-3 h-3" />
      {role.name}
    </span>
  );
}

// Invite Modal Component
function InviteModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 m-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-900">Invite Team Member</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <XIcon className="w-5 h-5 text-slate-500" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="email"
                placeholder="colleague@company.com"
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Assign Role</label>
            <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white">
              {roleDefinitions.map(role => (
                <option key={role.id} value={role.id}>{role.name}</option>
              ))}
            </select>
          </div>
          
          <div className="pt-4 flex gap-3">
            <button 
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button className="flex-1 px-4 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium shadow-lg shadow-primary/25">
              Send Invitation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'members' | 'roles'>('members');
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Team Management</h2>
          <p className="text-sm text-slate-500 mt-1">Manage team members and role-based access control</p>
        </div>
        <button 
          onClick={() => setShowInviteModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
        >
          <PlusIcon className="w-4 h-4" />
          Invite Member
        </button>
      </div>
      
      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-slate-100 rounded-xl w-fit">
        <button
          onClick={() => setActiveTab('members')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'members' 
              ? 'bg-white text-slate-900 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Team Members
        </button>
        <button
          onClick={() => setActiveTab('roles')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'roles' 
              ? 'bg-white text-slate-900 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Roles & Permissions
        </button>
      </div>
      
      {activeTab === 'members' && (
        <>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Total Members</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">6</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Active Now</p>
              <p className="text-2xl font-bold text-emerald-600 mt-1">4</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Pending Invites</p>
              <p className="text-2xl font-bold text-amber-600 mt-1">1</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Roles in Use</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">4</p>
            </div>
          </div>
          
          {/* Filter Bar */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex-1 min-w-[200px] relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search team members..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>All Roles</option>
                {roleDefinitions.map(role => (
                  <option key={role.id} value={role.id}>{role.name}</option>
                ))}
              </select>
              <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>All Statuses</option>
                <option>Active</option>
                <option>Invited</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
          
          {/* Team Members Table */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Member</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Active</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {teamMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/20">
                            {member.avatar}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{member.name}</p>
                            <p className="text-xs text-slate-500">{member.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <RoleBadge roleId={member.role} />
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={member.status} />
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{member.lastActive}</td>
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
        </>
      )}
      
      {activeTab === 'roles' && (
        <>
          {/* Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roleDefinitions.map((role) => (
              <div key={role.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className={`h-2 ${role.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{role.name}</h3>
                      <p className="text-sm text-slate-500 mt-1">{role.description}</p>
                    </div>
                    <div className={`w-10 h-10 rounded-xl ${role.color} flex items-center justify-center shadow-lg`}>
                      <ShieldIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-xs text-slate-500 uppercase font-semibold mb-3">Permissions</div>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(role.permissions).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        {value ? (
                          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                            <CheckIcon className="w-3 h-3 text-emerald-600" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                            <XIcon className="w-3 h-3 text-slate-400" />
                          </div>
                        )}
                        <span className={`text-xs ${value ? 'text-slate-700' : 'text-slate-400'}`}>
                          {permissionLabels[key]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Permission Matrix */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">Permission Matrix</h3>
              <p className="text-sm text-slate-500 mt-1">Overview of what each role can access</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Permission</th>
                    {roleDefinitions.map(role => (
                      <th key={role.id} className="px-4 py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {role.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {Object.entries(permissionLabels).map(([key, label]) => (
                    <tr key={key} className="hover:bg-slate-50">
                      <td className="px-6 py-3 text-sm text-slate-700">{label}</td>
                      {roleDefinitions.map(role => (
                        <td key={role.id} className="px-4 py-3 text-center">
                          {role.permissions[key as keyof typeof role.permissions] ? (
                            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
                              <CheckIcon className="w-4 h-4 text-emerald-600" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mx-auto">
                              <XIcon className="w-4 h-4 text-slate-300" />
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      
      {/* Invite Modal */}
      <InviteModal isOpen={showInviteModal} onClose={() => setShowInviteModal(false)} />
    </div>
  );
}
