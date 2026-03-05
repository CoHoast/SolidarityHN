'use client';

import { useState } from 'react';

// Comprehensive client data with intake configuration
const clientsData = [
  { 
    id: 'CLT-001', 
    name: 'ABC Medical Group', 
    type: 'TPA', 
    claimsMonth: 4521, 
    status: 'Active', 
    joined: 'Jan 2024', 
    contact: 'John Smith', 
    email: 'john@abcmedical.com', 
    phone: '(555) 123-4567',
    users: 8,
    address: '123 Medical Plaza, Suite 400, Columbus, OH 43215',
    // Intake Configuration
    intakeMethods: {
      webPortal: true,
      fileUpload: true,
      api: true,
      sftp: true,
      ediDirect: false,
      emailIntake: false,
    },
    // API Settings
    apiEnabled: true,
    apiKey: 'sk_live_abc123xxxxxxxxxxxxxx',
    apiSecret: 'sec_abc123xxxxxxxxxxxxxx',
    apiRateLimit: 1000,
    apiWebhookUrl: 'https://abcmedical.com/webhooks/solidarity',
    apiIpWhitelist: ['192.168.1.100', '10.0.0.50'],
    // SFTP Settings
    sftpEnabled: true,
    sftpHost: 'sftp.solidarity.com',
    sftpUsername: 'abc_medical',
    sftpPath: '/incoming/abc-medical/',
    sftpSchedule: 'hourly',
    sftpLastSync: '5 min ago',
    // File Settings
    acceptedFormats: ['837P', '837I', 'CSV'],
    csvTemplate: 'standard-v2',
    autoProcess: true,
    validateBeforeProcess: true,
    // Email Intake
    intakeEmail: 'claims-abc@intake.solidarity.com',
    // Billing
    billingTier: 'enterprise',
    pricePerClaim: 0.45,
    monthlyMinimum: 500,
    // Processing
    defaultPayer: 'Auto-detect',
    autoSubmitApproved: false,
    reviewThreshold: 85,
  },
  { 
    id: 'CLT-002', 
    name: 'XYZ Healthcare Systems', 
    type: 'Provider', 
    claimsMonth: 3892, 
    status: 'Active', 
    joined: 'Feb 2024', 
    contact: 'Mary Johnson', 
    email: 'mary@xyzhealthcare.com', 
    phone: '(555) 234-5678',
    users: 12,
    address: '456 Healthcare Drive, Cincinnati, OH 45202',
    intakeMethods: {
      webPortal: true,
      fileUpload: true,
      api: true,
      sftp: false,
      ediDirect: true,
      emailIntake: false,
    },
    apiEnabled: true,
    apiKey: 'sk_live_xyz456xxxxxxxxxxxxxx',
    apiSecret: 'sec_xyz456xxxxxxxxxxxxxx',
    apiRateLimit: 500,
    apiWebhookUrl: 'https://xyzhealthcare.com/api/webhooks',
    apiIpWhitelist: [],
    sftpEnabled: false,
    sftpHost: '',
    sftpUsername: '',
    sftpPath: '',
    sftpSchedule: 'daily',
    sftpLastSync: '',
    acceptedFormats: ['837P', '837I'],
    csvTemplate: '',
    autoProcess: true,
    validateBeforeProcess: true,
    intakeEmail: 'claims-xyz@intake.solidarity.com',
    billingTier: 'professional',
    pricePerClaim: 0.55,
    monthlyMinimum: 250,
    defaultPayer: 'Auto-detect',
    autoSubmitApproved: true,
    reviewThreshold: 90,
  },
  { 
    id: 'CLT-003', 
    name: 'Metro Urgent Care', 
    type: 'Provider', 
    claimsMonth: 2156, 
    status: 'Active', 
    joined: 'Jan 2024', 
    contact: 'Bob Williams', 
    email: 'bob@metrouclinic.com', 
    phone: '(555) 345-6789',
    users: 4,
    address: '789 Urgent Care Lane, Cleveland, OH 44114',
    intakeMethods: {
      webPortal: true,
      fileUpload: true,
      api: false,
      sftp: false,
      ediDirect: false,
      emailIntake: true,
    },
    apiEnabled: false,
    apiKey: '',
    apiSecret: '',
    apiRateLimit: 100,
    apiWebhookUrl: '',
    apiIpWhitelist: [],
    sftpEnabled: false,
    sftpHost: '',
    sftpUsername: '',
    sftpPath: '',
    sftpSchedule: 'daily',
    sftpLastSync: '',
    acceptedFormats: ['837P', 'CSV'],
    csvTemplate: 'standard-v2',
    autoProcess: false,
    validateBeforeProcess: true,
    intakeEmail: 'claims-metro@intake.solidarity.com',
    billingTier: 'starter',
    pricePerClaim: 0.75,
    monthlyMinimum: 100,
    defaultPayer: 'Auto-detect',
    autoSubmitApproved: false,
    reviewThreshold: 85,
  },
  { 
    id: 'CLT-004', 
    name: 'Regional TPA Services', 
    type: 'TPA', 
    claimsMonth: 8234, 
    status: 'Active', 
    joined: 'Dec 2023', 
    contact: 'Susan Davis', 
    email: 'susan@regionaltpa.com', 
    phone: '(555) 456-7890',
    users: 15,
    address: '321 TPA Boulevard, Dayton, OH 45402',
    intakeMethods: {
      webPortal: true,
      fileUpload: true,
      api: true,
      sftp: true,
      ediDirect: true,
      emailIntake: true,
    },
    apiEnabled: true,
    apiKey: 'sk_live_rtpa789xxxxxxxxxxxxxx',
    apiSecret: 'sec_rtpa789xxxxxxxxxxxxxx',
    apiRateLimit: 5000,
    apiWebhookUrl: 'https://regionaltpa.com/solidarity/webhook',
    apiIpWhitelist: ['10.20.30.40', '10.20.30.41', '10.20.30.42'],
    sftpEnabled: true,
    sftpHost: 'sftp.solidarity.com',
    sftpUsername: 'regional_tpa',
    sftpPath: '/incoming/regional-tpa/',
    sftpSchedule: '15min',
    sftpLastSync: '2 min ago',
    acceptedFormats: ['837P', '837I', 'CSV', 'XML'],
    csvTemplate: 'custom-rtpa',
    autoProcess: true,
    validateBeforeProcess: true,
    intakeEmail: 'claims-rtpa@intake.solidarity.com',
    billingTier: 'enterprise',
    pricePerClaim: 0.35,
    monthlyMinimum: 1000,
    defaultPayer: 'Auto-detect',
    autoSubmitApproved: true,
    reviewThreshold: 92,
  },
  { 
    id: 'CLT-005', 
    name: 'City Providers Network', 
    type: 'Network', 
    claimsMonth: 1203, 
    status: 'Active', 
    joined: 'Feb 2024', 
    contact: 'Tom Brown', 
    email: 'tom@cityproviders.net', 
    phone: '(555) 567-8901',
    users: 6,
    address: '555 Network Street, Toledo, OH 43604',
    intakeMethods: {
      webPortal: true,
      fileUpload: true,
      api: false,
      sftp: false,
      ediDirect: false,
      emailIntake: false,
    },
    apiEnabled: false,
    apiKey: '',
    apiSecret: '',
    apiRateLimit: 100,
    apiWebhookUrl: '',
    apiIpWhitelist: [],
    sftpEnabled: false,
    sftpHost: '',
    sftpUsername: '',
    sftpPath: '',
    sftpSchedule: 'daily',
    sftpLastSync: '',
    acceptedFormats: ['837P', 'CSV'],
    csvTemplate: 'standard-v2',
    autoProcess: true,
    validateBeforeProcess: true,
    intakeEmail: '',
    billingTier: 'professional',
    pricePerClaim: 0.55,
    monthlyMinimum: 250,
    defaultPayer: 'Auto-detect',
    autoSubmitApproved: false,
    reviewThreshold: 85,
  },
  { 
    id: 'CLT-006', 
    name: 'Demo Health Systems', 
    type: 'Test', 
    claimsMonth: 45, 
    status: 'Test', 
    joined: 'Mar 2024', 
    contact: 'Test User', 
    email: 'test@demo.com', 
    phone: '(555) 000-0000',
    users: 1,
    address: '000 Test Street, Test City, OH 00000',
    intakeMethods: {
      webPortal: true,
      fileUpload: true,
      api: true,
      sftp: false,
      ediDirect: false,
      emailIntake: false,
    },
    apiEnabled: true,
    apiKey: 'sk_test_demo000xxxxxxxxxxxxxx',
    apiSecret: 'sec_test_demo000xxxxxxxxxxxxxx',
    apiRateLimit: 100,
    apiWebhookUrl: '',
    apiIpWhitelist: [],
    sftpEnabled: false,
    sftpHost: '',
    sftpUsername: '',
    sftpPath: '',
    sftpSchedule: 'daily',
    sftpLastSync: '',
    acceptedFormats: ['837P', '837I', 'CSV'],
    csvTemplate: 'standard-v2',
    autoProcess: false,
    validateBeforeProcess: true,
    intakeEmail: 'claims-demo@intake.solidarity.com',
    billingTier: 'test',
    pricePerClaim: 0,
    monthlyMinimum: 0,
    defaultPayer: 'Auto-detect',
    autoSubmitApproved: false,
    reviewThreshold: 80,
  },
];

type Client = typeof clientsData[0];

// Icons
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

function CloudUploadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  );
}

function ServerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function KeyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
    </svg>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
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

function TierBadge({ tier }: { tier: string }) {
  const styles: Record<string, string> = {
    'enterprise': 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
    'professional': 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
    'starter': 'bg-slate-200 text-slate-700',
    'test': 'bg-slate-100 text-slate-500',
  };
  
  return (
    <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${styles[tier] || 'bg-slate-100 text-slate-700'}`}>
      {tier.charAt(0).toUpperCase() + tier.slice(1)}
    </span>
  );
}

function Toggle({ enabled, onChange, disabled = false }: { enabled: boolean; onChange: (val: boolean) => void; disabled?: boolean }) {
  return (
    <button
      onClick={() => !disabled && onChange(!enabled)}
      disabled={disabled}
      className={`relative w-11 h-6 rounded-full transition-colors ${
        enabled ? 'bg-primary' : 'bg-slate-300'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform shadow-sm ${
        enabled ? 'left-6' : 'left-1'
      }`} />
    </button>
  );
}

// Client Configuration Modal
function ClientConfigModal({ client, onClose }: { client: Client; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'general' | 'intake' | 'api' | 'sftp' | 'files' | 'processing' | 'billing'>('general');
  const [formData, setFormData] = useState(client);
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
    { id: 'general', label: 'General', icon: BuildingIcon },
    { id: 'intake', label: 'Intake Methods', icon: CloudUploadIcon },
    { id: 'api', label: 'API Settings', icon: CodeIcon },
    { id: 'sftp', label: 'SFTP/FTP', icon: ServerIcon },
    { id: 'files', label: 'File Formats', icon: DocumentIcon },
    { id: 'processing', label: 'Processing', icon: CogIcon },
    { id: 'billing', label: 'Billing', icon: KeyIcon },
  ];

  const enabledIntakeMethods = Object.entries(formData.intakeMethods).filter(([_, v]) => v).length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
        
        <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl max-h-[95vh] flex flex-col">
          {/* Header */}
          <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                <BuildingIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{client.name}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <code className="text-sm text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{client.id}</code>
                  <TypeBadge type={client.type} />
                  <StatusBadge status={client.status} />
                  <TierBadge tier={client.billingTier} />
                </div>
              </div>
            </div>
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Intake Summary Bar */}
          <div className="flex-shrink-0 px-6 py-3 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center gap-6 text-sm">
              <span className="text-slate-500">Active Intake Methods:</span>
              <div className="flex items-center gap-4">
                {formData.intakeMethods.webPortal && (
                  <span className="flex items-center gap-1.5 px-2 py-1 bg-emerald-100 text-emerald-700 rounded">
                    <GlobeIcon className="w-3.5 h-3.5" /> Portal
                  </span>
                )}
                {formData.intakeMethods.fileUpload && (
                  <span className="flex items-center gap-1.5 px-2 py-1 bg-blue-100 text-blue-700 rounded">
                    <CloudUploadIcon className="w-3.5 h-3.5" /> Upload
                  </span>
                )}
                {formData.intakeMethods.api && (
                  <span className="flex items-center gap-1.5 px-2 py-1 bg-purple-100 text-purple-700 rounded">
                    <CodeIcon className="w-3.5 h-3.5" /> API
                  </span>
                )}
                {formData.intakeMethods.sftp && (
                  <span className="flex items-center gap-1.5 px-2 py-1 bg-amber-100 text-amber-700 rounded">
                    <ServerIcon className="w-3.5 h-3.5" /> SFTP
                  </span>
                )}
                {formData.intakeMethods.ediDirect && (
                  <span className="flex items-center gap-1.5 px-2 py-1 bg-teal-100 text-teal-700 rounded">
                    <DocumentIcon className="w-3.5 h-3.5" /> EDI
                  </span>
                )}
                {formData.intakeMethods.emailIntake && (
                  <span className="flex items-center gap-1.5 px-2 py-1 bg-rose-100 text-rose-700 rounded">
                    <MailIcon className="w-3.5 h-3.5" /> Email
                  </span>
                )}
                {enabledIntakeMethods === 0 && (
                  <span className="text-slate-400 italic">None configured</span>
                )}
              </div>
              <span className="ml-auto text-slate-500">Claims this month: <strong className="text-slate-900">{client.claimsMonth.toLocaleString()}</strong></span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex-shrink-0 px-6 border-b border-slate-200">
            <nav className="flex gap-1 overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-primary text-primary'
                        : 'border-transparent text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* General Tab */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Client Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Client Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => handleChange('type', e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                    >
                      <option value="Provider">Provider</option>
                      <option value="TPA">TPA (Third Party Administrator)</option>
                      <option value="Network">Provider Network</option>
                      <option value="Test">Test Account</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Address</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Primary Contact</label>
                    <input
                      type="text"
                      value={formData.contact}
                      onChange={(e) => handleChange('contact', e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
                  <div className="flex gap-3">
                    {['Active', 'Test', 'Inactive', 'Suspended'].map((status) => (
                      <button
                        key={status}
                        onClick={() => handleChange('status', status)}
                        className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                          formData.status === status
                            ? status === 'Active' ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                              : status === 'Test' ? 'border-amber-500 bg-amber-50 text-amber-700'
                              : status === 'Suspended' ? 'border-red-500 bg-red-50 text-red-700'
                              : 'border-slate-500 bg-slate-50 text-slate-700'
                            : 'border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Intake Methods Tab */}
            {activeTab === 'intake' && (
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Configure Intake Channels:</strong> Enable the methods this client will use to submit claims. 
                    Each method requires additional configuration in its respective tab.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Web Portal */}
                  <div className={`p-5 border-2 rounded-xl transition-all ${formData.intakeMethods.webPortal ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-200'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${formData.intakeMethods.webPortal ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                          <GlobeIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">Web Portal</h4>
                          <p className="text-xs text-slate-500">Manual entry through dashboard</p>
                        </div>
                      </div>
                      <Toggle enabled={formData.intakeMethods.webPortal} onChange={(val) => handleNestedChange('intakeMethods', 'webPortal', val)} />
                    </div>
                    {formData.intakeMethods.webPortal && (
                      <div className="mt-3 pt-3 border-t border-emerald-200 text-xs text-emerald-700">
                        ✓ Users can enter claims directly in the dashboard
                      </div>
                    )}
                  </div>

                  {/* File Upload */}
                  <div className={`p-5 border-2 rounded-xl transition-all ${formData.intakeMethods.fileUpload ? 'border-blue-500 bg-blue-50/50' : 'border-slate-200'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${formData.intakeMethods.fileUpload ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                          <CloudUploadIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">File Upload</h4>
                          <p className="text-xs text-slate-500">Batch file upload (837, CSV)</p>
                        </div>
                      </div>
                      <Toggle enabled={formData.intakeMethods.fileUpload} onChange={(val) => handleNestedChange('intakeMethods', 'fileUpload', val)} />
                    </div>
                    {formData.intakeMethods.fileUpload && (
                      <div className="mt-3 pt-3 border-t border-blue-200 text-xs text-blue-700">
                        ✓ Configure accepted formats in File Formats tab
                      </div>
                    )}
                  </div>

                  {/* REST API */}
                  <div className={`p-5 border-2 rounded-xl transition-all ${formData.intakeMethods.api ? 'border-purple-500 bg-purple-50/50' : 'border-slate-200'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${formData.intakeMethods.api ? 'bg-purple-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                          <CodeIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">REST API</h4>
                          <p className="text-xs text-slate-500">Programmatic submission</p>
                        </div>
                      </div>
                      <Toggle enabled={formData.intakeMethods.api} onChange={(val) => handleNestedChange('intakeMethods', 'api', val)} />
                    </div>
                    {formData.intakeMethods.api && (
                      <div className="mt-3 pt-3 border-t border-purple-200 text-xs text-purple-700">
                        ✓ Configure credentials in API Settings tab
                      </div>
                    )}
                  </div>

                  {/* SFTP */}
                  <div className={`p-5 border-2 rounded-xl transition-all ${formData.intakeMethods.sftp ? 'border-amber-500 bg-amber-50/50' : 'border-slate-200'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${formData.intakeMethods.sftp ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                          <ServerIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">SFTP / FTP</h4>
                          <p className="text-xs text-slate-500">Automated file drops</p>
                        </div>
                      </div>
                      <Toggle enabled={formData.intakeMethods.sftp} onChange={(val) => handleNestedChange('intakeMethods', 'sftp', val)} />
                    </div>
                    {formData.intakeMethods.sftp && (
                      <div className="mt-3 pt-3 border-t border-amber-200 text-xs text-amber-700">
                        ✓ Configure connection in SFTP tab
                      </div>
                    )}
                  </div>

                  {/* EDI Direct */}
                  <div className={`p-5 border-2 rounded-xl transition-all ${formData.intakeMethods.ediDirect ? 'border-teal-500 bg-teal-50/50' : 'border-slate-200'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${formData.intakeMethods.ediDirect ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                          <DocumentIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">EDI Direct</h4>
                          <p className="text-xs text-slate-500">837 via clearinghouse network</p>
                        </div>
                      </div>
                      <Toggle enabled={formData.intakeMethods.ediDirect} onChange={(val) => handleNestedChange('intakeMethods', 'ediDirect', val)} />
                    </div>
                    {formData.intakeMethods.ediDirect && (
                      <div className="mt-3 pt-3 border-t border-teal-200 text-xs text-teal-700">
                        ✓ Uses Stedi EDI gateway connection
                      </div>
                    )}
                  </div>

                  {/* Email Intake */}
                  <div className={`p-5 border-2 rounded-xl transition-all ${formData.intakeMethods.emailIntake ? 'border-rose-500 bg-rose-50/50' : 'border-slate-200'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${formData.intakeMethods.emailIntake ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                          <MailIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">Email Intake</h4>
                          <p className="text-xs text-slate-500">Parse claims from email</p>
                        </div>
                      </div>
                      <Toggle enabled={formData.intakeMethods.emailIntake} onChange={(val) => handleNestedChange('intakeMethods', 'emailIntake', val)} />
                    </div>
                    {formData.intakeMethods.emailIntake && formData.intakeEmail && (
                      <div className="mt-3 pt-3 border-t border-rose-200 text-xs text-rose-700">
                        ✓ Intake email: {formData.intakeEmail}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* API Settings Tab */}
            {activeTab === 'api' && (
              <div className="space-y-6">
                {!formData.intakeMethods.api ? (
                  <div className="text-center py-12 bg-slate-50 rounded-xl">
                    <CodeIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-500">API intake is not enabled for this client.</p>
                    <button 
                      onClick={() => handleNestedChange('intakeMethods', 'api', true)}
                      className="mt-4 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark"
                    >
                      Enable API Access
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-emerald-800">API Access Enabled</p>
                        <p className="text-xs text-emerald-600 mt-0.5">Client can submit claims via REST API</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-emerald-700 text-sm">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        Active
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">API Key</label>
                        <div className="flex gap-2">
                          <input
                            type="password"
                            value={formData.apiKey}
                            readOnly
                            className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg font-mono text-sm"
                          />
                          <button className="px-3 py-2 border border-slate-200 rounded-lg hover:bg-slate-50">
                            <CopyIcon className="w-4 h-4 text-slate-500" />
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">API Secret</label>
                        <div className="flex gap-2">
                          <input
                            type="password"
                            value={formData.apiSecret}
                            readOnly
                            className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg font-mono text-sm"
                          />
                          <button className="px-3 py-2 border border-slate-200 rounded-lg hover:bg-slate-50">
                            <CopyIcon className="w-4 h-4 text-slate-500" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm hover:bg-slate-700">
                        <RefreshIcon className="w-4 h-4 inline mr-2" />
                        Regenerate Credentials
                      </button>
                      <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm hover:bg-slate-50">
                        View API Docs
                      </button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Rate Limit</label>
                      <select
                        value={formData.apiRateLimit}
                        onChange={(e) => handleChange('apiRateLimit', parseInt(e.target.value))}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg bg-white"
                      >
                        <option value={100}>100 requests/minute</option>
                        <option value={500}>500 requests/minute</option>
                        <option value={1000}>1,000 requests/minute</option>
                        <option value={5000}>5,000 requests/minute</option>
                        <option value={0}>Unlimited</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Webhook URL (Status Callbacks)</label>
                      <input
                        type="url"
                        value={formData.apiWebhookUrl}
                        onChange={(e) => handleChange('apiWebhookUrl', e.target.value)}
                        placeholder="https://your-server.com/webhooks/solidarity"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg"
                      />
                      <p className="text-xs text-slate-500 mt-1">Receive claim status updates via POST webhook</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">IP Whitelist (Optional)</label>
                      <textarea
                        rows={3}
                        value={formData.apiIpWhitelist.join('\n')}
                        onChange={(e) => handleChange('apiIpWhitelist', e.target.value.split('\n').filter(ip => ip.trim()))}
                        placeholder="Enter IP addresses, one per line..."
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg font-mono text-sm"
                      />
                      <p className="text-xs text-slate-500 mt-1">Leave empty to allow all IPs</p>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* SFTP Tab */}
            {activeTab === 'sftp' && (
              <div className="space-y-6">
                {!formData.intakeMethods.sftp ? (
                  <div className="text-center py-12 bg-slate-50 rounded-xl">
                    <ServerIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-500">SFTP intake is not enabled for this client.</p>
                    <button 
                      onClick={() => handleNestedChange('intakeMethods', 'sftp', true)}
                      className="mt-4 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark"
                    >
                      Enable SFTP Access
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-amber-800">SFTP Access Enabled</p>
                        <p className="text-xs text-amber-600 mt-0.5">Last sync: {formData.sftpLastSync || 'Never'}</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-amber-700 text-sm">
                        <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                        Connected
                      </span>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl">
                      <h4 className="text-sm font-semibold text-slate-900 mb-3">SFTP Connection Details</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-500 mb-1">Host</label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={formData.sftpHost || 'sftp.solidarity.com'}
                              readOnly
                              className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg font-mono text-sm"
                            />
                            <button className="px-3 py-2 border border-slate-200 rounded-lg hover:bg-white">
                              <CopyIcon className="w-4 h-4 text-slate-500" />
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-500 mb-1">Port</label>
                          <input
                            type="text"
                            value="22"
                            readOnly
                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg font-mono text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-500 mb-1">Username</label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={formData.sftpUsername}
                              readOnly
                              className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg font-mono text-sm"
                            />
                            <button className="px-3 py-2 border border-slate-200 rounded-lg hover:bg-white">
                              <CopyIcon className="w-4 h-4 text-slate-500" />
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-500 mb-1">Upload Path</label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={formData.sftpPath}
                              readOnly
                              className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg font-mono text-sm"
                            />
                            <button className="px-3 py-2 border border-slate-200 rounded-lg hover:bg-white">
                              <CopyIcon className="w-4 h-4 text-slate-500" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button className="mt-4 px-4 py-2 bg-slate-800 text-white rounded-lg text-sm hover:bg-slate-700">
                        Download SSH Key
                      </button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Polling Schedule</label>
                      <select
                        value={formData.sftpSchedule}
                        onChange={(e) => handleChange('sftpSchedule', e.target.value)}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg bg-white"
                      >
                        <option value="5min">Every 5 minutes</option>
                        <option value="15min">Every 15 minutes</option>
                        <option value="30min">Every 30 minutes</option>
                        <option value="hourly">Hourly</option>
                        <option value="daily">Daily (6:00 AM)</option>
                      </select>
                      <p className="text-xs text-slate-500 mt-1">How often to check for new files in the upload folder</p>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* File Formats Tab */}
            {activeTab === 'files' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3">Accepted File Formats</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: '837P', label: 'ANSI 837P', desc: 'Professional claims (HIPAA X12)' },
                      { id: '837I', label: 'ANSI 837I', desc: 'Institutional claims (HIPAA X12)' },
                      { id: '837D', label: 'ANSI 837D', desc: 'Dental claims (HIPAA X12)' },
                      { id: 'CSV', label: 'CSV', desc: 'Comma-separated values' },
                      { id: 'XML', label: 'XML', desc: 'Structured XML format' },
                      { id: 'JSON', label: 'JSON', desc: 'JSON API format' },
                    ].map((format) => (
                      <label key={format.id} className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.acceptedFormats.includes(format.id) 
                          ? 'border-primary bg-primary/5' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}>
                        <input
                          type="checkbox"
                          checked={formData.acceptedFormats.includes(format.id)}
                          onChange={(e) => {
                            const newFormats = e.target.checked 
                              ? [...formData.acceptedFormats, format.id]
                              : formData.acceptedFormats.filter(f => f !== format.id);
                            handleChange('acceptedFormats', newFormats);
                          }}
                          className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary mt-0.5"
                        />
                        <div>
                          <p className="font-medium text-slate-900">{format.label}</p>
                          <p className="text-xs text-slate-500">{format.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.acceptedFormats.includes('CSV') && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">CSV Template</label>
                    <select
                      value={formData.csvTemplate}
                      onChange={(e) => handleChange('csvTemplate', e.target.value)}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg bg-white"
                    >
                      <option value="standard-v2">Standard Template v2</option>
                      <option value="standard-v1">Standard Template v1 (Legacy)</option>
                      <option value="custom">Custom Template</option>
                    </select>
                    <button className="mt-2 text-sm text-primary hover:underline">
                      Download CSV Template
                    </button>
                  </div>
                )}

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-slate-900">Validate Files Before Processing</p>
                    <p className="text-xs text-slate-500 mt-0.5">Check file format and required fields before import</p>
                  </div>
                  <Toggle enabled={formData.validateBeforeProcess} onChange={(val) => handleChange('validateBeforeProcess', val)} />
                </div>
              </div>
            )}

            {/* Processing Tab */}
            {activeTab === 'processing' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-slate-900">Auto-Process Incoming Claims</p>
                    <p className="text-xs text-slate-500 mt-0.5">Automatically process claims upon receipt (no manual trigger)</p>
                  </div>
                  <Toggle enabled={formData.autoProcess} onChange={(val) => handleChange('autoProcess', val)} />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-slate-900">Auto-Submit Approved Claims</p>
                    <p className="text-xs text-slate-500 mt-0.5">Automatically submit claims that pass all rules to payers</p>
                  </div>
                  <Toggle enabled={formData.autoSubmitApproved} onChange={(val) => handleChange('autoSubmitApproved', val)} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Review Queue Threshold</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="70"
                      max="99"
                      value={formData.reviewThreshold}
                      onChange={(e) => handleChange('reviewThreshold', parseInt(e.target.value))}
                      className="flex-1 accent-primary"
                    />
                    <span className="w-16 text-center text-lg font-semibold text-primary">{formData.reviewThreshold}%</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Claims below this AI confidence will go to manual review</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Default Payer Routing</label>
                  <select
                    value={formData.defaultPayer}
                    onChange={(e) => handleChange('defaultPayer', e.target.value)}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg bg-white"
                  >
                    <option value="Auto-detect">Auto-detect from claim data</option>
                    <option value="Aetna">Aetna</option>
                    <option value="UnitedHealthcare">UnitedHealthcare</option>
                    <option value="BCBS">BCBS</option>
                    <option value="Cigna">Cigna</option>
                    <option value="Medicare">Medicare</option>
                  </select>
                </div>

                {formData.intakeMethods.emailIntake && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Intake Email Address</label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={formData.intakeEmail}
                        readOnly
                        className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg font-mono text-sm"
                      />
                      <button className="px-3 py-2 border border-slate-200 rounded-lg hover:bg-slate-50">
                        <CopyIcon className="w-4 h-4 text-slate-500" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Client sends claims as email attachments to this address</p>
                  </div>
                )}
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3">Billing Tier</label>
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { id: 'starter', name: 'Starter', price: '$0.75', desc: 'Up to 500 claims/mo' },
                      { id: 'professional', name: 'Professional', price: '$0.55', desc: 'Up to 2,500 claims/mo' },
                      { id: 'enterprise', name: 'Enterprise', price: '$0.35', desc: 'Unlimited claims' },
                      { id: 'test', name: 'Test', price: 'Free', desc: 'Testing only' },
                    ].map((tier) => (
                      <button
                        key={tier.id}
                        onClick={() => handleChange('billingTier', tier.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.billingTier === tier.id
                            ? tier.id === 'enterprise' ? 'border-amber-500 bg-gradient-to-br from-amber-50 to-orange-50'
                              : tier.id === 'professional' ? 'border-blue-500 bg-blue-50'
                              : tier.id === 'test' ? 'border-slate-400 bg-slate-50'
                              : 'border-primary bg-primary/5'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <p className="font-semibold text-slate-900">{tier.name}</p>
                        <p className="text-2xl font-bold text-primary mt-1">{tier.price}</p>
                        <p className="text-xs text-slate-500 mt-1">{tier.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Price Per Claim</label>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">$</span>
                      <input
                        type="number"
                        step="0.01"
                        value={formData.pricePerClaim}
                        onChange={(e) => handleChange('pricePerClaim', parseFloat(e.target.value))}
                        className="flex-1 px-4 py-2.5 border border-slate-200 rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Monthly Minimum</label>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">$</span>
                      <input
                        type="number"
                        value={formData.monthlyMinimum}
                        onChange={(e) => handleChange('monthlyMinimum', parseInt(e.target.value))}
                        className="flex-1 px-4 py-2.5 border border-slate-200 rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">This Month's Usage</h4>
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-slate-900">{formData.claimsMonth.toLocaleString()}</p>
                      <p className="text-xs text-slate-500">Claims Processed</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-emerald-600">${(formData.claimsMonth * formData.pricePerClaim).toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
                      <p className="text-xs text-slate-500">Estimated Bill</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">{formData.users}</p>
                      <p className="text-xs text-slate-500">Active Users</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">{enabledIntakeMethods}</p>
                      <p className="text-xs text-slate-500">Intake Methods</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50">
            <button onClick={onClose} className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors">
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

export default function ClientsPage() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredClients = clientsData.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || client.type === filterType;
    const matchesStatus = filterStatus === 'all' || client.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const totalClaims = clientsData.reduce((sum, c) => sum + c.claimsMonth, 0);
  const activeClients = clientsData.filter(c => c.status === 'Active').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Clients</h2>
          <p className="text-sm text-slate-500 mt-1">Manage clearing house client organizations and intake configuration</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
          <PlusIcon className="w-4 h-4" />
          Add Client
        </button>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <BuildingIcon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Total Clients</p>
              <p className="text-2xl font-bold text-slate-900">{clientsData.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Active</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">{activeClients}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">Claims This Month</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{totalClaims.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">API Enabled</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">{clientsData.filter(c => c.intakeMethods.api).length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-sm font-medium text-slate-500">SFTP Enabled</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">{clientsData.filter(c => c.intakeMethods.sftp).length}</p>
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
            <option value="TPA">TPA</option>
            <option value="Provider">Provider</option>
            <option value="Network">Network</option>
          </select>
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="all">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Test">Test</option>
            <option value="Inactive">Inactive</option>
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
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Intake Methods</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Claims/Month</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Tier</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                        <BuildingIcon className="w-5 h-5 text-slate-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{client.name}</p>
                        <p className="text-xs text-slate-500">{client.contact}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <TypeBadge type={client.type} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      {client.intakeMethods.webPortal && <span className="w-6 h-6 bg-emerald-100 rounded flex items-center justify-center" title="Web Portal"><GlobeIcon className="w-3.5 h-3.5 text-emerald-600" /></span>}
                      {client.intakeMethods.fileUpload && <span className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center" title="File Upload"><CloudUploadIcon className="w-3.5 h-3.5 text-blue-600" /></span>}
                      {client.intakeMethods.api && <span className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center" title="REST API"><CodeIcon className="w-3.5 h-3.5 text-purple-600" /></span>}
                      {client.intakeMethods.sftp && <span className="w-6 h-6 bg-amber-100 rounded flex items-center justify-center" title="SFTP"><ServerIcon className="w-3.5 h-3.5 text-amber-600" /></span>}
                      {client.intakeMethods.ediDirect && <span className="w-6 h-6 bg-teal-100 rounded flex items-center justify-center" title="EDI Direct"><DocumentIcon className="w-3.5 h-3.5 text-teal-600" /></span>}
                      {client.intakeMethods.emailIntake && <span className="w-6 h-6 bg-rose-100 rounded flex items-center justify-center" title="Email"><MailIcon className="w-3.5 h-3.5 text-rose-600" /></span>}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{client.claimsMonth.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <TierBadge tier={client.billingTier} />
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={client.status} />
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => setSelectedClient(client)}
                      className="flex items-center gap-1.5 text-primary hover:text-primary-dark text-sm font-medium"
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

      {/* Client Config Modal */}
      {selectedClient && (
        <ClientConfigModal client={selectedClient} onClose={() => setSelectedClient(null)} />
      )}
    </div>
  );
}
