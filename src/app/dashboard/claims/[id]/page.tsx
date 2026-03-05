'use client';

import { useState } from 'react';
import Link from 'next/link';

// Sample claim data with AI analysis
const claimData = {
  id: 'CLM-2024-0050',
  status: 'PENDING_REVIEW',
  aiLabel: 'APPROVE' as const,
  claimType: '837P',
  submittedAt: '2026-03-05 09:23:45',
  client: 'ABC Medical Group',
  
  // Patient
  patient: {
    firstName: 'John',
    lastName: 'Smith',
    dob: '1965-01-15',
    memberId: 'ABC123456789',
    gender: 'M',
    address: '123 Main Street, Columbus, OH 43215',
  },
  
  // Provider
  provider: {
    name: 'Dr. Jane Doe, MD',
    npi: '1234567890',
    taxId: '12-3456789',
    address: '456 Medical Center Dr, Columbus, OH 43215',
  },
  
  // Payer
  payer: {
    name: 'Aetna',
    payerId: '60054',
    groupNumber: 'GRP001',
  },
  
  // Service Lines
  lines: [
    { lineNum: 1, dos: '2026-03-01', cpt: '99213', modifiers: [], dx: ['J06.9'], billed: 150.00, repriced: 89.50, description: 'Office visit, established patient' },
    { lineNum: 2, dos: '2026-03-01', cpt: '99214', modifiers: [], dx: ['J06.9'], billed: 200.00, repriced: 124.00, description: 'Office visit, established patient (extended)' },
    { lineNum: 3, dos: '2026-03-01', cpt: '36415', modifiers: [], dx: ['J06.9'], billed: 25.00, repriced: 12.50, description: 'Venipuncture' },
  ],
  
  // Diagnoses
  diagnoses: [
    { code: 'J06.9', description: 'Acute upper respiratory infection, unspecified', primary: true },
  ],
  
  // Totals
  totalBilled: 375.00,
  totalRepriced: 226.00,
  savings: 149.00,
  savingsPercent: 39.7,
  
  // AI Analysis
  aiAnalysis: {
    overallConfidence: 94,
    summary: "Professional claim (CMS-1500) for established patient John Smith (DOB: 01/15/1965) seen by Dr. Jane Doe (NPI: 1234567890) on 03/01/2026 for an office visit. Primary diagnosis: J06.9 (Acute upper respiratory infection, unspecified). Three service lines totaling $375.00 billed, repriced to $226.00 using Medicare 100% fee schedule.",
    fieldConfidence: {
      patientName: 99,
      patientDob: 98,
      memberId: 95,
      providerName: 100,
      providerNpi: 100,
      cptCodes: 96,
      diagnosis: 88,
      billedAmount: 99,
      dos: 100,
    },
    rulesMatched: [
      { rule: 'Clean Claim - Auto Approve', action: 'APPROVE', reason: 'Confidence 94%, amount <$1,000, no validation errors' },
      { rule: 'Member Active', action: 'APPROVE', reason: 'Member status verified as Active' },
      { rule: 'Provider In-Network', action: 'APPROVE', reason: 'NPI verified, provider in Aetna network' },
    ],
    flags: [
      { severity: 'warning', field: 'diagnosis', message: 'Diagnosis J06.9 is non-specific. Consider J06.0-J06.8 for more accurate coding.' },
    ],
    validationResults: {
      passed: ['NPI Format', 'Date Format', 'Required Fields', 'CPT Valid', 'ICD-10 Valid', 'Timely Filing', 'No Duplicate'],
      failed: [],
      warnings: ['Non-specific diagnosis code'],
    },
  },
  
  // Audit Trail
  auditTrail: [
    { timestamp: '2026-03-05 09:23:45', action: 'Claim received', user: 'System', details: 'Via portal upload' },
    { timestamp: '2026-03-05 09:23:47', action: 'AI extraction complete', user: 'System', details: '94% confidence' },
    { timestamp: '2026-03-05 09:23:48', action: 'Validation passed', user: 'System', details: 'All checks passed' },
    { timestamp: '2026-03-05 09:23:49', action: 'Repricing applied', user: 'System', details: 'Medicare 100% - $226.00' },
    { timestamp: '2026-03-05 09:23:50', action: 'Rules evaluated', user: 'System', details: '3 rules matched → APPROVE' },
  ],
};

// Icons
function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
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

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  );
}

function ConfidenceBar({ value, label }: { value: number; label: string }) {
  const getColor = (v: number) => {
    if (v >= 95) return 'bg-emerald-500';
    if (v >= 85) return 'bg-blue-500';
    if (v >= 70) return 'bg-amber-500';
    return 'bg-red-500';
  };
  
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-slate-600 w-32 truncate">{label}</span>
      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full ${getColor(value)} rounded-full transition-all`} style={{ width: `${value}%` }} />
      </div>
      <span className={`text-sm font-semibold w-12 text-right ${value >= 85 ? 'text-slate-700' : 'text-amber-600'}`}>
        {value}%
      </span>
    </div>
  );
}

function ActionBadge({ action }: { action: 'APPROVE' | 'DENY' | 'REVIEW' }) {
  const styles = {
    APPROVE: 'bg-emerald-100 text-emerald-700',
    DENY: 'bg-red-100 text-red-700',
    REVIEW: 'bg-amber-100 text-amber-700',
  };
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold ${styles[action]}`}>
      {action === 'APPROVE' ? '✓' : action === 'DENY' ? '✗' : '⚠'} {action}
    </span>
  );
}

export default function ClaimDetailPage() {
  const [activeTab, setActiveTab] = useState<'extracted' | 'original'>('extracted');
  const claim = claimData;
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            href="/dashboard/claims"
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 text-slate-500" />
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-semibold text-slate-900">{claim.id}</h1>
              <span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                {claim.status.replace(/_/g, ' ')}
              </span>
            </div>
            <p className="text-sm text-slate-500 mt-0.5">
              {claim.client} • Submitted {claim.submittedAt}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2">
            <EyeIcon className="w-4 h-4" />
            View Original
          </button>
          <button className="px-4 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors flex items-center gap-2">
            <XIcon className="w-4 h-4" />
            Deny
          </button>
          <button className="px-4 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25 flex items-center gap-2">
            <CheckIcon className="w-4 h-4" />
            Approve & Submit
          </button>
        </div>
      </div>
      
      {/* AI Analysis Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 text-white overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center">
                <SparklesIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">AI Claim Analysis</h2>
                <p className="text-white/60 text-sm">Automated extraction and rule evaluation</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-white/60 text-xs uppercase tracking-wider">Overall Confidence</p>
                <p className="text-3xl font-bold">{claim.aiAnalysis.overallConfidence}%</p>
              </div>
              <ActionBadge action={claim.aiLabel} />
            </div>
          </div>
          
          {/* Summary */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-4">
            <p className="text-white/90 text-sm leading-relaxed">
              {claim.aiAnalysis.summary}
            </p>
          </div>
          
          {/* Rules Matched */}
          <div className="mb-4">
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">Rules Matched</h3>
            <div className="space-y-2">
              {claim.aiAnalysis.rulesMatched.map((rule, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckIcon className="w-3 h-3 text-emerald-400" />
                  </span>
                  <span className="text-sm font-medium text-white">{rule.rule}</span>
                  <span className="text-xs text-white/50">—</span>
                  <span className="text-sm text-white/70 flex-1">{rule.reason}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Flags */}
          {claim.aiAnalysis.flags.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">Flags</h3>
              {claim.aiAnalysis.flags.map((flag, i) => (
                <div key={i} className="flex items-start gap-3 bg-amber-500/20 rounded-lg px-3 py-2">
                  <span className="text-amber-400 mt-0.5">⚠</span>
                  <div>
                    <span className="text-sm text-white font-medium">{flag.field}:</span>
                    <span className="text-sm text-white/80 ml-1">{flag.message}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Claim Data */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-slate-100 rounded-xl w-fit">
            <button
              onClick={() => setActiveTab('extracted')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'extracted' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Extracted Data
            </button>
            <button
              onClick={() => setActiveTab('original')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'original' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Original Document
            </button>
          </div>
          
          {activeTab === 'extracted' && (
            <>
              {/* Patient & Provider */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl border border-slate-200 p-5">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">Patient Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Name</span>
                      <span className="text-slate-900 font-medium">{claim.patient.firstName} {claim.patient.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">DOB</span>
                      <span className="text-slate-900">{claim.patient.dob}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Member ID</span>
                      <span className="text-slate-900 font-mono">{claim.patient.memberId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Gender</span>
                      <span className="text-slate-900">{claim.patient.gender}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl border border-slate-200 p-5">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">Provider Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Name</span>
                      <span className="text-slate-900 font-medium">{claim.provider.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">NPI</span>
                      <span className="text-slate-900 font-mono">{claim.provider.npi}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Tax ID</span>
                      <span className="text-slate-900 font-mono">{claim.provider.taxId}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Service Lines */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-900">Service Lines</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Line</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">DOS</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">CPT</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Description</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">DX</th>
                        <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 uppercase">Billed</th>
                        <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 uppercase">Repriced</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {claim.lines.map((line) => (
                        <tr key={line.lineNum} className="hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm text-slate-500">{line.lineNum}</td>
                          <td className="px-4 py-3 text-sm text-slate-700">{line.dos}</td>
                          <td className="px-4 py-3 text-sm font-mono text-primary font-medium">{line.cpt}</td>
                          <td className="px-4 py-3 text-sm text-slate-700">{line.description}</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-600">{line.dx.join(', ')}</td>
                          <td className="px-4 py-3 text-sm text-slate-700 text-right">${line.billed.toFixed(2)}</td>
                          <td className="px-4 py-3 text-sm text-slate-900 font-semibold text-right">${line.repriced.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-slate-50 border-t-2 border-slate-200">
                        <td colSpan={5} className="px-4 py-3 text-sm font-semibold text-slate-900">Totals</td>
                        <td className="px-4 py-3 text-sm text-slate-700 text-right">${claim.totalBilled.toFixed(2)}</td>
                        <td className="px-4 py-3 text-sm text-slate-900 font-bold text-right">${claim.totalRepriced.toFixed(2)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="px-5 py-3 bg-emerald-50 border-t border-emerald-100 flex items-center justify-between">
                  <span className="text-sm text-emerald-700">Savings</span>
                  <span className="text-sm font-bold text-emerald-700">${claim.savings.toFixed(2)} ({claim.savingsPercent}%)</span>
                </div>
              </div>
              
              {/* Diagnoses */}
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Diagnosis Codes</h3>
                <div className="space-y-2">
                  {claim.diagnoses.map((dx, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      {dx.primary && <span className="px-2 py-0.5 bg-primary text-white text-xs font-semibold rounded">Primary</span>}
                      <span className="font-mono text-primary font-semibold">{dx.code}</span>
                      <span className="text-sm text-slate-600">{dx.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'original' && (
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <EyeIcon className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Document Viewer</h3>
              <p className="text-sm text-slate-500 mb-4">View the original scanned document</p>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                Open Document
              </button>
            </div>
          )}
        </div>
        
        {/* Right Column - Confidence & Audit */}
        <div className="space-y-6">
          {/* Field Confidence */}
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Field Confidence</h3>
            <div className="space-y-3">
              <ConfidenceBar value={claim.aiAnalysis.fieldConfidence.patientName} label="Patient Name" />
              <ConfidenceBar value={claim.aiAnalysis.fieldConfidence.patientDob} label="Date of Birth" />
              <ConfidenceBar value={claim.aiAnalysis.fieldConfidence.memberId} label="Member ID" />
              <ConfidenceBar value={claim.aiAnalysis.fieldConfidence.providerName} label="Provider Name" />
              <ConfidenceBar value={claim.aiAnalysis.fieldConfidence.providerNpi} label="Provider NPI" />
              <ConfidenceBar value={claim.aiAnalysis.fieldConfidence.cptCodes} label="CPT Codes" />
              <ConfidenceBar value={claim.aiAnalysis.fieldConfidence.diagnosis} label="Diagnosis" />
              <ConfidenceBar value={claim.aiAnalysis.fieldConfidence.billedAmount} label="Billed Amount" />
              <ConfidenceBar value={claim.aiAnalysis.fieldConfidence.dos} label="Date of Service" />
            </div>
          </div>
          
          {/* Validation Results */}
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Validation Results</h3>
            <div className="space-y-2">
              {claim.aiAnalysis.validationResults.passed.map((check, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckIcon className="w-3 h-3 text-emerald-600" />
                  </span>
                  <span className="text-slate-700">{check}</span>
                </div>
              ))}
              {claim.aiAnalysis.validationResults.warnings.map((warn, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs">⚠</span>
                  <span className="text-amber-700">{warn}</span>
                </div>
              ))}
              {claim.aiAnalysis.validationResults.failed.map((fail, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                    <XIcon className="w-3 h-3 text-red-600" />
                  </span>
                  <span className="text-red-700">{fail}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Payer Info */}
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Payer Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Payer</span>
                <span className="text-slate-900 font-medium">{claim.payer.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payer ID</span>
                <span className="text-slate-900 font-mono">{claim.payer.payerId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Group #</span>
                <span className="text-slate-900 font-mono">{claim.payer.groupNumber}</span>
              </div>
            </div>
          </div>
          
          {/* Audit Trail */}
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Audit Trail</h3>
            <div className="space-y-3">
              {claim.auditTrail.map((entry, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-900">{entry.action}</span>
                      <span className="text-xs text-slate-400">{entry.timestamp.split(' ')[1]}</span>
                    </div>
                    <p className="text-slate-500 text-xs">{entry.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
