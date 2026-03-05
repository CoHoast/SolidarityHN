'use client';

import { useState } from 'react';

// Sample payers data with full configuration
const payersData = [
  { 
    id: 'PAY-001', 
    name: 'Aetna', 
    payerId: '60054', 
    type: 'Commercial', 
    status: 'Active', 
    claims: 4521, 
    submitterId: 'SHN001',
    receiverId: 'AETNA',
    enrollmentStatus: 'Enrolled',
    enrollmentDate: '2024-01-15',
    submissionMode: 'real-time',
    testMode: false,
    claimTypes: { professional: true, institutional: true, dental: false },
    autoSubmit: true,
    batchFrequency: 'immediate',
    batchCutoff: '17:00',
    timelyFilingDays: 90,
    priorAuthRequired: true,
    feeSchedule: 'medicare-120',
    repricingMethod: 'medicare-percent',
    repricingPercent: 120,
    ediContact: { name: 'EDI Support', phone: '1-800-555-0001', email: 'edi@aetna.com' },
    providerContact: { name: 'Provider Relations', phone: '1-800-555-0002', email: 'providers@aetna.com' },
    notes: 'Primary commercial payer. Real-time submission preferred.',
    acceptanceRate: 96.5,
    avgTurnaround: 3.2,
  },
  { 
    id: 'PAY-002', 
    name: 'UnitedHealthcare', 
    payerId: '87726', 
    type: 'Commercial', 
    status: 'Active', 
    claims: 3892, 
    submitterId: 'SHN001',
    receiverId: 'UHC',
    enrollmentStatus: 'Enrolled',
    enrollmentDate: '2024-02-01',
    submissionMode: 'batch',
    testMode: false,
    claimTypes: { professional: true, institutional: true, dental: true },
    autoSubmit: true,
    batchFrequency: 'hourly',
    batchCutoff: '18:00',
    timelyFilingDays: 180,
    priorAuthRequired: true,
    feeSchedule: 'medicare-115',
    repricingMethod: 'medicare-percent',
    repricingPercent: 115,
    ediContact: { name: 'EDI Team', phone: '1-800-555-0010', email: 'edi@uhc.com' },
    providerContact: { name: 'Provider Services', phone: '1-800-555-0011', email: 'providers@uhc.com' },
    notes: 'Batch submission only. Hourly batches during business hours.',
    acceptanceRate: 94.2,
    avgTurnaround: 4.1,
  },
  { 
    id: 'PAY-003', 
    name: 'BCBS Ohio', 
    payerId: '00520', 
    type: 'Commercial', 
    status: 'Active', 
    claims: 2156, 
    submitterId: 'SHN001',
    receiverId: 'BCBSOH',
    enrollmentStatus: 'Enrolled',
    enrollmentDate: '2024-01-20',
    submissionMode: 'real-time',
    testMode: false,
    claimTypes: { professional: true, institutional: true, dental: false },
    autoSubmit: true,
    batchFrequency: 'immediate',
    batchCutoff: '17:00',
    timelyFilingDays: 120,
    priorAuthRequired: true,
    feeSchedule: 'medicare-110',
    repricingMethod: 'medicare-percent',
    repricingPercent: 110,
    ediContact: { name: 'Electronic Claims', phone: '1-800-555-0020', email: 'eclaims@bcbsoh.com' },
    providerContact: { name: 'Provider Network', phone: '1-800-555-0021', email: 'network@bcbsoh.com' },
    notes: 'State Blue plan. Real-time preferred.',
    acceptanceRate: 97.1,
    avgTurnaround: 2.8,
  },
  { 
    id: 'PAY-004', 
    name: 'Cigna', 
    payerId: '62308', 
    type: 'Commercial', 
    status: 'Active', 
    claims: 1834, 
    submitterId: 'SHN001',
    receiverId: 'CIGNA',
    enrollmentStatus: 'Enrolled',
    enrollmentDate: '2024-03-01',
    submissionMode: 'real-time',
    testMode: false,
    claimTypes: { professional: true, institutional: false, dental: true },
    autoSubmit: true,
    batchFrequency: 'immediate',
    batchCutoff: '16:00',
    timelyFilingDays: 90,
    priorAuthRequired: false,
    feeSchedule: 'medicare-125',
    repricingMethod: 'medicare-percent',
    repricingPercent: 125,
    ediContact: { name: 'EDI Help Desk', phone: '1-800-555-0030', email: 'edihelp@cigna.com' },
    providerContact: { name: 'Contracting', phone: '1-800-555-0031', email: 'contracting@cigna.com' },
    notes: 'No institutional claims. Professional and dental only.',
    acceptanceRate: 95.8,
    avgTurnaround: 3.5,
  },
  { 
    id: 'PAY-005', 
    name: 'Humana', 
    payerId: '61101', 
    type: 'Commercial', 
    status: 'Active', 
    claims: 1203, 
    submitterId: 'SHN001',
    receiverId: 'HUMANA',
    enrollmentStatus: 'Enrolled',
    enrollmentDate: '2024-02-15',
    submissionMode: 'batch',
    testMode: false,
    claimTypes: { professional: true, institutional: true, dental: false },
    autoSubmit: true,
    batchFrequency: 'daily',
    batchCutoff: '15:00',
    timelyFilingDays: 180,
    priorAuthRequired: true,
    feeSchedule: 'medicare-105',
    repricingMethod: 'medicare-percent',
    repricingPercent: 105,
    ediContact: { name: 'EDI Operations', phone: '1-800-555-0040', email: 'edi@humana.com' },
    providerContact: { name: 'Provider Support', phone: '1-800-555-0041', email: 'support@humana.com' },
    notes: 'Daily batch submissions. Cutoff 3 PM EST.',
    acceptanceRate: 93.4,
    avgTurnaround: 5.2,
  },
  { 
    id: 'PAY-006', 
    name: 'Medicare', 
    payerId: 'CMS', 
    type: 'Government', 
    status: 'Active', 
    claims: 890, 
    submitterId: 'SHN001',
    receiverId: 'CMS',
    enrollmentStatus: 'Enrolled',
    enrollmentDate: '2023-06-01',
    submissionMode: 'batch',
    testMode: false,
    claimTypes: { professional: true, institutional: true, dental: false },
    autoSubmit: false,
    batchFrequency: 'daily',
    batchCutoff: '18:00',
    timelyFilingDays: 365,
    priorAuthRequired: false,
    feeSchedule: 'medicare-100',
    repricingMethod: 'medicare-percent',
    repricingPercent: 100,
    ediContact: { name: 'MAC EDI', phone: '1-800-555-0050', email: 'edi@cms.gov' },
    providerContact: { name: 'Provider Enrollment', phone: '1-800-555-0051', email: 'enrollment@cms.gov' },
    notes: 'Government payer. 1 year timely filing. Manual review before submission.',
    acceptanceRate: 98.2,
    avgTurnaround: 14.0,
  },
  { 
    id: 'PAY-007', 
    name: 'Medicaid Ohio', 
    payerId: 'OHMED', 
    type: 'Government', 
    status: 'Active', 
    claims: 567, 
    submitterId: 'SHN001',
    receiverId: 'ODJFS',
    enrollmentStatus: 'Enrolled',
    enrollmentDate: '2023-08-01',
    submissionMode: 'batch',
    testMode: false,
    claimTypes: { professional: true, institutional: true, dental: true },
    autoSubmit: false,
    batchFrequency: 'daily',
    batchCutoff: '17:00',
    timelyFilingDays: 365,
    priorAuthRequired: true,
    feeSchedule: 'medicaid-oh',
    repricingMethod: 'fixed-schedule',
    repricingPercent: 0,
    ediContact: { name: 'MITS Help Desk', phone: '1-800-555-0060', email: 'mits@ohio.gov' },
    providerContact: { name: 'Provider Services', phone: '1-800-555-0061', email: 'providers@ohio.gov' },
    notes: 'State Medicaid. Uses fixed fee schedule. Manual review required.',
    acceptanceRate: 91.5,
    avgTurnaround: 21.0,
  },
  { 
    id: 'PAY-008', 
    name: 'Anthem', 
    payerId: '00273', 
    type: 'Commercial', 
    status: 'Active', 
    claims: 445, 
    submitterId: 'SHN001',
    receiverId: 'ANTHEM',
    enrollmentStatus: 'Enrolled',
    enrollmentDate: '2024-04-01',
    submissionMode: 'real-time',
    testMode: false,
    claimTypes: { professional: true, institutional: true, dental: false },
    autoSubmit: true,
    batchFrequency: 'immediate',
    batchCutoff: '17:00',
    timelyFilingDays: 90,
    priorAuthRequired: true,
    feeSchedule: 'medicare-118',
    repricingMethod: 'medicare-percent',
    repricingPercent: 118,
    ediContact: { name: 'EDI Support', phone: '1-800-555-0070', email: 'edi@anthem.com' },
    providerContact: { name: 'Provider Relations', phone: '1-800-555-0071', email: 'relations@anthem.com' },
    notes: 'Anthem BCBS affiliate. Real-time submission.',
    acceptanceRate: 95.0,
    avgTurnaround: 3.8,
  },
  { 
    id: 'PAY-009', 
    name: 'Medical Mutual', 
    payerId: '00431', 
    type: 'Commercial', 
    status: 'Active', 
    claims: 234, 
    submitterId: 'SHN001',
    receiverId: 'MEDMUT',
    enrollmentStatus: 'Enrolled',
    enrollmentDate: '2024-03-15',
    submissionMode: 'batch',
    testMode: false,
    claimTypes: { professional: true, institutional: false, dental: false },
    autoSubmit: true,
    batchFrequency: 'hourly',
    batchCutoff: '16:00',
    timelyFilingDays: 120,
    priorAuthRequired: false,
    feeSchedule: 'medicare-112',
    repricingMethod: 'medicare-percent',
    repricingPercent: 112,
    ediContact: { name: 'Claims EDI', phone: '1-800-555-0080', email: 'edi@medmutual.com' },
    providerContact: { name: 'Network Management', phone: '1-800-555-0081', email: 'network@medmutual.com' },
    notes: 'Ohio regional. Professional claims only.',
    acceptanceRate: 96.8,
    avgTurnaround: 4.5,
  },
  { 
    id: 'PAY-010', 
    name: 'Tricare', 
    payerId: '99726', 
    type: 'Government', 
    status: 'Inactive', 
    claims: 0, 
    submitterId: 'SHN001',
    receiverId: 'TRICARE',
    enrollmentStatus: 'Pending',
    enrollmentDate: '',
    submissionMode: 'batch',
    testMode: true,
    claimTypes: { professional: true, institutional: true, dental: true },
    autoSubmit: false,
    batchFrequency: 'daily',
    batchCutoff: '17:00',
    timelyFilingDays: 365,
    priorAuthRequired: true,
    feeSchedule: 'tricare',
    repricingMethod: 'fixed-schedule',
    repricingPercent: 0,
    ediContact: { name: 'PGBA EDI', phone: '1-800-555-0090', email: 'edi@tricare.mil' },
    providerContact: { name: 'Provider Affairs', phone: '1-800-555-0091', email: 'providers@tricare.mil' },
    notes: 'Military healthcare. Enrollment in progress.',
    acceptanceRate: 0,
    avgTurnaround: 0,
  },
];

type Payer = typeof payersData[0];

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

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CogIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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

function EnrollmentBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    'Enrolled': 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    'Pending': 'bg-amber-100 text-amber-700 border border-amber-200',
    'Not Enrolled': 'bg-red-100 text-red-700 border border-red-200',
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status] || 'bg-slate-100 text-slate-700'}`}>
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

// Payer Configuration Modal Component
function PayerConfigModal({ payer, onClose }: { payer: Payer; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'general' | 'submission' | 'validation' | 'repricing' | 'contacts'>('general');
  const [formData, setFormData] = useState(payer);
  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setHasChanges(true);
  };

  const handleNestedChange = (parent: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: { ...(prev as any)[parent], [field]: value }
    }));
    setHasChanges(true);
  };

  const tabs = [
    { id: 'general', label: 'General' },
    { id: 'submission', label: 'EDI Submission' },
    { id: 'validation', label: 'Validation' },
    { id: 'repricing', label: 'Repricing' },
    { id: 'contacts', label: 'Contacts' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
        
        {/* Modal */}
        <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                <CogIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Configure {payer.name}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <code className="text-sm text-slate-500 bg-slate-100 px-2 py-0.5 rounded">ID: {payer.payerId}</code>
                  <TypeBadge type={payer.type} />
                  <EnrollmentBadge status={payer.enrollmentStatus} />
                </div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Performance Stats Bar */}
          <div className="px-6 py-3 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <ChartIcon className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-500">Performance:</span>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-sm text-slate-500">Claims MTD:</span>
                  <span className="ml-2 text-sm font-semibold text-slate-900">{payer.claims.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-sm text-slate-500">Acceptance Rate:</span>
                  <span className={`ml-2 text-sm font-semibold ${payer.acceptanceRate >= 95 ? 'text-emerald-600' : payer.acceptanceRate >= 90 ? 'text-amber-600' : 'text-red-600'}`}>
                    {payer.acceptanceRate}%
                  </span>
                </div>
                <div>
                  <span className="text-sm text-slate-500">Avg Turnaround:</span>
                  <span className="ml-2 text-sm font-semibold text-slate-900">{payer.avgTurnaround} days</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tab Navigation */}
          <div className="px-6 border-b border-slate-200">
            <nav className="flex gap-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            {/* General Tab */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Payer Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Payer ID</label>
                    <input
                      type="text"
                      value={formData.payerId}
                      onChange={(e) => handleChange('payerId', e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Payer Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => handleChange('type', e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="Commercial">Commercial</option>
                      <option value="Government">Government</option>
                      <option value="Workers Comp">Workers Comp</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => handleChange('status', e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Enrollment Status</label>
                  <div className="grid grid-cols-3 gap-4">
                    {['Enrolled', 'Pending', 'Not Enrolled'].map((status) => (
                      <button
                        key={status}
                        onClick={() => handleChange('enrollmentStatus', status)}
                        className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                          formData.enrollmentStatus === status
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.enrollmentStatus === 'Enrolled' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Enrollment Date</label>
                    <input
                      type="date"
                      value={formData.enrollmentDate}
                      onChange={(e) => handleChange('enrollmentDate', e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Claim Types Accepted</label>
                  <div className="flex gap-4">
                    {[
                      { key: 'professional', label: 'Professional (837P)' },
                      { key: 'institutional', label: 'Institutional (837I)' },
                      { key: 'dental', label: 'Dental (837D)' },
                    ].map((type) => (
                      <label key={type.key} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50">
                        <input
                          type="checkbox"
                          checked={(formData.claimTypes as any)[type.key]}
                          onChange={(e) => handleNestedChange('claimTypes', type.key, e.target.checked)}
                          className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary"
                        />
                        <span className="text-sm text-slate-700">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Notes</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => handleChange('notes', e.target.value)}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    placeholder="Internal notes about this payer..."
                  />
                </div>
              </div>
            )}

            {/* Submission Tab */}
            {activeTab === 'submission' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Submitter ID</label>
                    <input
                      type="text"
                      value={formData.submitterId}
                      onChange={(e) => handleChange('submitterId', e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Receiver ID</label>
                    <input
                      type="text"
                      value={formData.receiverId}
                      onChange={(e) => handleChange('receiverId', e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Submission Mode</label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: 'real-time', label: 'Real-Time', desc: 'Claims submitted immediately upon processing' },
                      { value: 'batch', label: 'Batch', desc: 'Claims collected and submitted on schedule' },
                    ].map((mode) => (
                      <button
                        key={mode.value}
                        onClick={() => handleChange('submissionMode', mode.value)}
                        className={`px-4 py-4 rounded-lg border-2 text-left transition-all ${
                          formData.submissionMode === mode.value
                            ? 'border-primary bg-primary/5'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <p className={`text-sm font-semibold ${formData.submissionMode === mode.value ? 'text-primary' : 'text-slate-900'}`}>
                          {mode.label}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">{mode.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {formData.submissionMode === 'batch' && (
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Batch Frequency</label>
                      <select
                        value={formData.batchFrequency}
                        onChange={(e) => handleChange('batchFrequency', e.target.value)}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="immediate">Immediate (as received)</option>
                        <option value="hourly">Hourly</option>
                        <option value="daily">Daily</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Batch Cutoff Time</label>
                      <input
                        type="time"
                        value={formData.batchCutoff}
                        onChange={(e) => handleChange('batchCutoff', e.target.value)}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-slate-900">Auto-Submit Approved Claims</p>
                    <p className="text-xs text-slate-500 mt-1">Automatically submit claims that pass all validation rules</p>
                  </div>
                  <button
                    onClick={() => handleChange('autoSubmit', !formData.autoSubmit)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      formData.autoSubmit ? 'bg-primary' : 'bg-slate-300'
                    }`}
                  >
                    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      formData.autoSubmit ? 'left-7' : 'left-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-amber-900">Test Mode</p>
                    <p className="text-xs text-amber-700 mt-1">Send claims to payer test environment only</p>
                  </div>
                  <button
                    onClick={() => handleChange('testMode', !formData.testMode)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      formData.testMode ? 'bg-amber-500' : 'bg-slate-300'
                    }`}
                  >
                    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      formData.testMode ? 'left-7' : 'left-1'
                    }`} />
                  </button>
                </div>
              </div>
            )}

            {/* Validation Tab */}
            {activeTab === 'validation' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Timely Filing Limit</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      value={formData.timelyFilingDays}
                      onChange={(e) => handleChange('timelyFilingDays', parseInt(e.target.value))}
                      className="w-32 px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <span className="text-sm text-slate-500">days from date of service</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">Claims submitted after this period will be flagged for review</p>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-slate-900">Prior Authorization Required</p>
                    <p className="text-xs text-slate-500 mt-1">Flag claims without prior auth for review</p>
                  </div>
                  <button
                    onClick={() => handleChange('priorAuthRequired', !formData.priorAuthRequired)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      formData.priorAuthRequired ? 'bg-primary' : 'bg-slate-300'
                    }`}
                  >
                    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      formData.priorAuthRequired ? 'left-7' : 'left-1'
                    }`} />
                  </button>
                </div>

                <div className="p-4 border border-slate-200 rounded-lg">
                  <h4 className="text-sm font-semibold text-slate-900 mb-4">Payer-Specific Required Fields</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Patient Account Number',
                      'Prior Authorization Number',
                      'Referring Provider NPI',
                      'Facility NPI',
                      'Place of Service',
                      'Diagnosis Pointer',
                      'Units of Service',
                      'Service Facility Address',
                    ].map((field) => (
                      <label key={field} className="flex items-center gap-2 text-sm text-slate-600">
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary" />
                        {field}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="text-sm font-semibold text-blue-900 mb-2">Validation Rules Applied</h4>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• NPI validation against NPPES registry</li>
                    <li>• ICD-10 code validation</li>
                    <li>• CPT/HCPCS code validation</li>
                    <li>• Date range validation (DOS not in future)</li>
                    <li>• Duplicate claim detection</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Repricing Tab */}
            {activeTab === 'repricing' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Repricing Method</label>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: 'medicare-percent', label: 'Medicare %', desc: 'Percentage of Medicare rates' },
                      { value: 'fixed-schedule', label: 'Fixed Schedule', desc: 'Custom fee schedule' },
                      { value: 'ucr', label: 'UCR', desc: 'Usual, Customary, Reasonable' },
                    ].map((method) => (
                      <button
                        key={method.value}
                        onClick={() => handleChange('repricingMethod', method.value)}
                        className={`px-4 py-4 rounded-lg border-2 text-left transition-all ${
                          formData.repricingMethod === method.value
                            ? 'border-primary bg-primary/5'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <p className={`text-sm font-semibold ${formData.repricingMethod === method.value ? 'text-primary' : 'text-slate-900'}`}>
                          {method.label}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">{method.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {formData.repricingMethod === 'medicare-percent' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Medicare Percentage</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        value={formData.repricingPercent}
                        onChange={(e) => handleChange('repricingPercent', parseInt(e.target.value))}
                        className="w-32 px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                      <span className="text-sm text-slate-500">% of Medicare allowable</span>
                    </div>
                    <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                      <p className="text-xs text-slate-500">Example: Medicare allowable $100.00 × {formData.repricingPercent}% = <span className="font-semibold text-slate-900">${(100 * formData.repricingPercent / 100).toFixed(2)}</span></p>
                    </div>
                  </div>
                )}

                {formData.repricingMethod === 'fixed-schedule' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Fee Schedule</label>
                    <select
                      value={formData.feeSchedule}
                      onChange={(e) => handleChange('feeSchedule', e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="medicare-100">Medicare 100%</option>
                      <option value="medicare-105">Medicare 105%</option>
                      <option value="medicare-110">Medicare 110%</option>
                      <option value="medicare-115">Medicare 115%</option>
                      <option value="medicare-120">Medicare 120%</option>
                      <option value="medicare-125">Medicare 125%</option>
                      <option value="medicaid-oh">Ohio Medicaid</option>
                      <option value="tricare">TRICARE</option>
                      <option value="custom">Custom Schedule</option>
                    </select>
                  </div>
                )}

                <div className="p-4 border border-slate-200 rounded-lg">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Repricing Statistics</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-primary">$847K</p>
                      <p className="text-xs text-slate-500 mt-1">Total Billed</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-emerald-600">$612K</p>
                      <p className="text-xs text-slate-500 mt-1">Repriced Amount</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-amber-600">27.8%</p>
                      <p className="text-xs text-slate-500 mt-1">Avg Savings</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contacts Tab */}
            {activeTab === 'contacts' && (
              <div className="space-y-6">
                <div className="p-5 border border-slate-200 rounded-xl">
                  <h4 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <MailIcon className="w-4 h-4 text-blue-600" />
                    </span>
                    EDI Support Contact
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">Name</label>
                      <input
                        type="text"
                        value={formData.ediContact.name}
                        onChange={(e) => handleNestedChange('ediContact', 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">Phone</label>
                      <input
                        type="text"
                        value={formData.ediContact.phone}
                        onChange={(e) => handleNestedChange('ediContact', 'phone', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">Email</label>
                      <input
                        type="email"
                        value={formData.ediContact.email}
                        onChange={(e) => handleNestedChange('ediContact', 'email', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-5 border border-slate-200 rounded-xl">
                  <h4 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                      <PhoneIcon className="w-4 h-4 text-purple-600" />
                    </span>
                    Provider Relations Contact
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">Name</label>
                      <input
                        type="text"
                        value={formData.providerContact.name}
                        onChange={(e) => handleNestedChange('providerContact', 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">Phone</label>
                      <input
                        type="text"
                        value={formData.providerContact.phone}
                        onChange={(e) => handleNestedChange('providerContact', 'phone', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">Email</label>
                      <input
                        type="email"
                        value={formData.providerContact.email}
                        onChange={(e) => handleNestedChange('providerContact', 'email', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Quick Actions</h4>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                      <PhoneIcon className="w-4 h-4" />
                      Call EDI Support
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                      <MailIcon className="w-4 h-4" />
                      Email Provider Relations
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Cancel
            </button>
            <div className="flex items-center gap-3">
              {hasChanges && (
                <span className="text-xs text-amber-600 flex items-center gap-1">
                  <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                  Unsaved changes
                </span>
              )}
              <button
                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  hasChanges
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
                disabled={!hasChanges}
              >
                <CheckIcon className="w-4 h-4" />
                Save Configuration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PayersSettingsPage() {
  const [selectedPayer, setSelectedPayer] = useState<Payer | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredPayers = payersData.filter(payer => {
    const matchesSearch = payer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         payer.payerId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || payer.type === filterType;
    const matchesStatus = filterStatus === 'all' || payer.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Payer Configuration</h2>
          <p className="text-sm text-slate-500 mt-1">Manage payer connections, EDI settings, and submission rules</p>
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
          <p className="text-2xl font-bold text-slate-900 mt-1">{payersData.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Active</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">{payersData.filter(p => p.status === 'Active').length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Enrolled</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">{payersData.filter(p => p.enrollmentStatus === 'Enrolled').length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Avg Acceptance</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">
            {(payersData.filter(p => p.acceptanceRate > 0).reduce((acc, p) => acc + p.acceptanceRate, 0) / payersData.filter(p => p.acceptanceRate > 0).length).toFixed(1)}%
          </p>
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
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <select 
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="all">All Types</option>
            <option value="Commercial">Commercial</option>
            <option value="Government">Government</option>
          </select>
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="all">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
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
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Enrollment</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Claims (MTD)</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Acceptance</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPayers.map((payer) => (
                <tr key={payer.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-900">{payer.name}</p>
                    <p className="text-xs text-slate-500">{payer.submissionMode === 'real-time' ? 'Real-time' : 'Batch'}</p>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-sm text-slate-600 bg-slate-100 px-2 py-0.5 rounded">{payer.payerId}</code>
                  </td>
                  <td className="px-6 py-4">
                    <TypeBadge type={payer.type} />
                  </td>
                  <td className="px-6 py-4">
                    <EnrollmentBadge status={payer.enrollmentStatus} />
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{payer.claims.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    {payer.acceptanceRate > 0 ? (
                      <span className={`text-sm font-medium ${payer.acceptanceRate >= 95 ? 'text-emerald-600' : payer.acceptanceRate >= 90 ? 'text-amber-600' : 'text-red-600'}`}>
                        {payer.acceptanceRate}%
                      </span>
                    ) : (
                      <span className="text-sm text-slate-400">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={payer.status} />
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => setSelectedPayer(payer)}
                      className="flex items-center gap-1.5 text-primary hover:text-primary-dark text-sm font-medium transition-colors"
                    >
                      <CogIcon className="w-4 h-4" />
                      Configure
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Configuration Modal */}
      {selectedPayer && (
        <PayerConfigModal 
          payer={selectedPayer} 
          onClose={() => setSelectedPayer(null)} 
        />
      )}
    </div>
  );
}
