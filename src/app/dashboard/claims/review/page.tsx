'use client';

import Link from 'next/link';
import { useState } from 'react';

// Sample review queue data with AI analysis
const reviewItems = [
  { 
    id: 'CLM-2024-0045', 
    client: 'ABC Medical', 
    patient: 'John Smith', 
    type: '837P', 
    amount: '$1,250.00',
    repriced: '$750.00',
    aiLabel: 'REVIEW' as const,
    confidence: 78,
    rulesMatched: ['Low AI Confidence'],
    primaryIssue: 'AI Confidence: 78%',
    issueType: 'ai',
    flaggedField: 'Diagnosis Code',
    aiSummary: 'Office visit claim with unclear diagnosis code extraction. Multiple possible ICD-10 matches detected.',
  },
  { 
    id: 'CLM-2024-0046', 
    client: 'XYZ Healthcare', 
    patient: 'Mary Johnson', 
    type: '837I', 
    amount: '$15,400.00',
    repriced: '$12,320.00',
    aiLabel: 'REVIEW' as const,
    confidence: 94,
    rulesMatched: ['High Dollar Review'],
    primaryIssue: 'High Dollar Amount',
    issueType: 'high-dollar',
    threshold: '$10,000',
    aiSummary: 'Inpatient admission for surgical procedure. All fields extracted with high confidence. Flagged for high dollar review.',
  },
  { 
    id: 'CLM-2024-0047', 
    client: 'Metro Clinic', 
    patient: 'Bob Williams', 
    type: '837P', 
    amount: '$340.00',
    repriced: '$204.00',
    aiLabel: 'DENY' as const,
    confidence: 96,
    rulesMatched: ['Invalid Provider NPI'],
    primaryIssue: 'Invalid NPI',
    issueType: 'validation',
    denialCode: 'INVALID_PROVIDER',
    aiSummary: 'Provider NPI 9876543210 failed Luhn check validation. Recommend rejection pending NPI correction.',
  },
  { 
    id: 'CLM-2024-0048', 
    client: 'ABC Medical', 
    patient: 'Susan Davis', 
    type: '837P', 
    amount: '$890.00',
    repriced: '$534.00',
    aiLabel: 'REVIEW' as const,
    confidence: 82,
    rulesMatched: ['Low AI Confidence'],
    primaryIssue: 'AI Confidence: 82%',
    issueType: 'ai',
    flaggedField: 'CPT Modifier',
    aiSummary: 'Modifier extraction uncertain. Document shows possible modifier 25 but handwriting unclear.',
  },
  { 
    id: 'CLM-2024-0049', 
    client: 'Regional TPA', 
    patient: 'Tom Brown', 
    type: '837P', 
    amount: '$2,100.00',
    repriced: '$1,260.00',
    aiLabel: 'DENY' as const,
    confidence: 99,
    rulesMatched: ['Duplicate Claim'],
    primaryIssue: 'Potential Duplicate',
    issueType: 'duplicate',
    matchedClaim: 'CLM-2024-0012',
    denialCode: 'DUPLICATE',
    aiSummary: 'Exact match found with CLM-2024-0012 (same patient, provider, DOS, CPT codes). Recommend denial as duplicate.',
  },
  { 
    id: 'CLM-2024-0050', 
    client: 'City Providers', 
    patient: 'Lisa White', 
    type: '837P', 
    amount: '$445.00',
    repriced: '$267.00',
    aiLabel: 'REVIEW' as const,
    confidence: 71,
    rulesMatched: ['Low AI Confidence'],
    primaryIssue: 'AI Confidence: 71%',
    issueType: 'ai',
    flaggedField: 'Place of Service',
    aiSummary: 'Place of service code unclear on form. Could be 11 (Office) or 22 (Outpatient Hospital).',
  },
  { 
    id: 'CLM-2024-0051', 
    client: 'ABC Medical', 
    patient: 'Mike Green', 
    type: '837P', 
    amount: '$1,890.00',
    repriced: '$1,134.00',
    aiLabel: 'DENY' as const,
    confidence: 97,
    rulesMatched: ['Missing Prior Auth'],
    primaryIssue: 'Missing Authorization',
    issueType: 'validation',
    denialCode: 'NO_PRIOR_AUTH',
    aiSummary: 'CPT 27447 (knee replacement) requires prior authorization. No auth number found on claim or in system.',
  },
  { 
    id: 'CLM-2024-0052', 
    client: 'XYZ Healthcare', 
    patient: 'Jennifer Lee', 
    type: '837I', 
    amount: '$22,500.00',
    repriced: '$18,000.00',
    aiLabel: 'REVIEW' as const,
    confidence: 91,
    rulesMatched: ['High Dollar Review', 'Out of Network'],
    primaryIssue: 'High Dollar + OON',
    issueType: 'high-dollar',
    aiSummary: 'High dollar inpatient claim from out-of-network facility. Verify OON benefits before processing.',
  },
];

// Queue counts by AI label
const queueCounts = {
  all: 43,
  approve: 0,
  deny: 12,
  review: 31,
};

function QueueTab({ name, count, active, onClick }: { name: string; count: number; active?: boolean; onClick: () => void }) {
  const colors: Record<string, string> = {
    'All': 'bg-slate-500',
    'APPROVE': 'bg-emerald-500',
    'DENY': 'bg-red-500',
    'REVIEW': 'bg-amber-500',
  };
  
  return (
    <button 
      onClick={onClick}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-xl border transition-all
        ${active 
          ? 'bg-white border-slate-200 shadow-sm' 
          : 'bg-transparent border-transparent hover:bg-white/50'
        }
      `}
    >
      <div className={`w-3 h-3 rounded-full ${colors[name] || colors['All']}`} />
      <span className="text-sm font-medium text-slate-700">{name}</span>
      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${active ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'}`}>
        {count}
      </span>
    </button>
  );
}

function AILabelBadge({ label, confidence }: { label: 'APPROVE' | 'DENY' | 'REVIEW'; confidence: number }) {
  const styles = {
    APPROVE: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    DENY: 'bg-red-100 text-red-700 border-red-200',
    REVIEW: 'bg-amber-100 text-amber-700 border-amber-200',
  };
  
  const icons = {
    APPROVE: '✓',
    DENY: '✗',
    REVIEW: '⚠',
  };
  
  return (
    <div className="flex items-center gap-2">
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold border ${styles[label]}`}>
        {icons[label]} {label}
      </span>
      <span className={`text-xs font-medium ${confidence >= 90 ? 'text-emerald-600' : confidence >= 80 ? 'text-amber-600' : 'text-red-600'}`}>
        {confidence}%
      </span>
    </div>
  );
}

function IssueTypeBadge({ type }: { type: string }) {
  const styles: Record<string, { bg: string; text: string; label: string }> = {
    'ai': { bg: 'bg-purple-100', text: 'text-purple-700', label: 'AI Flag' },
    'validation': { bg: 'bg-red-100', text: 'text-red-700', label: 'Validation' },
    'high-dollar': { bg: 'bg-amber-100', text: 'text-amber-700', label: 'High $' },
    'duplicate': { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Duplicate' },
  };
  
  const style = styles[type] || styles['validation'];
  
  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${style.bg} ${style.text}`}>
      {style.label}
    </span>
  );
}

// Icons
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

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  );
}

export default function ReviewQueuePage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'approve' | 'deny' | 'review'>('all');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  
  const filteredItems = activeFilter === 'all' 
    ? reviewItems 
    : reviewItems.filter(item => item.aiLabel.toLowerCase() === activeFilter);
  
  const toggleSelect = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };
  
  const toggleSelectAll = () => {
    if (selectedItems.length === filteredItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredItems.map(i => i.id));
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Adjudication Queue</h2>
          <p className="text-sm text-slate-500 mt-1">AI-analyzed claims awaiting human verification</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <SparklesIcon className="w-5 h-5 text-primary" />
          <span className="text-slate-500">AI processed</span>
          <span className="font-semibold text-slate-900">{queueCounts.all}</span>
          <span className="text-slate-500">claims</span>
        </div>
      </div>
      
      {/* AI Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
              <SparklesIcon className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Total in Queue</p>
              <p className="text-2xl font-bold text-slate-900">{queueCounts.all}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
              <span className="text-amber-600 font-bold">⚠</span>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Needs Review</p>
              <p className="text-2xl font-bold text-amber-600">{queueCounts.review}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <span className="text-red-600 font-bold">✗</span>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">AI Recommends Deny</p>
              <p className="text-2xl font-bold text-red-600">{queueCounts.deny}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
              <span className="text-emerald-600 font-bold">✓</span>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Avg Confidence</p>
              <p className="text-2xl font-bold text-emerald-600">87%</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Queue Tabs */}
      <div className="bg-slate-100 rounded-xl p-2 flex flex-wrap gap-2">
        <QueueTab name="All" count={queueCounts.all} active={activeFilter === 'all'} onClick={() => setActiveFilter('all')} />
        <QueueTab name="REVIEW" count={queueCounts.review} active={activeFilter === 'review'} onClick={() => setActiveFilter('review')} />
        <QueueTab name="DENY" count={queueCounts.deny} active={activeFilter === 'deny'} onClick={() => setActiveFilter('deny')} />
        <QueueTab name="APPROVE" count={queueCounts.approve} active={activeFilter === 'approve'} onClick={() => setActiveFilter('approve')} />
      </div>
      
      {/* Filter Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
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
            <option>All Clients</option>
            <option>ABC Medical</option>
            <option>XYZ Healthcare</option>
            <option>Metro Clinic</option>
          </select>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Issue Types</option>
            <option>AI Confidence</option>
            <option>Validation Error</option>
            <option>High Dollar</option>
            <option>Duplicate</option>
          </select>
        </div>
      </div>
      
      {/* Claims List */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            className={`
              bg-white rounded-xl border shadow-sm overflow-hidden transition-all hover:shadow-md
              ${selectedItems.includes(item.id) ? 'border-primary ring-2 ring-primary/20' : 'border-slate-200'}
            `}
          >
            <div className="p-5">
              <div className="flex items-start gap-4">
                {/* Checkbox */}
                <input 
                  type="checkbox" 
                  checked={selectedItems.includes(item.id)}
                  onChange={() => toggleSelect(item.id)}
                  className="mt-1 w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary/20"
                />
                
                {/* Main Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <Link href={`/dashboard/claims/${item.id}`} className="text-lg font-semibold text-primary hover:text-primary-dark">
                      {item.id}
                    </Link>
                    <AILabelBadge label={item.aiLabel} confidence={item.confidence} />
                    <IssueTypeBadge type={item.issueType} />
                    {item.denialCode && (
                      <span className="px-2 py-0.5 bg-red-50 text-red-600 text-xs font-mono rounded">
                        {item.denialCode}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span>{item.client}</span>
                    <span>•</span>
                    <span>{item.patient}</span>
                    <span>•</span>
                    <span>{item.type}</span>
                    <span>•</span>
                    <span className="text-slate-700 font-medium">{item.amount}</span>
                    <span>→</span>
                    <span className="text-emerald-600 font-semibold">{item.repriced}</span>
                  </div>
                  
                  {/* AI Summary */}
                  <div className="bg-slate-50 rounded-lg p-3 flex items-start gap-2">
                    <SparklesIcon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-slate-600">{item.aiSummary}</p>
                  </div>
                  
                  {/* Rules Matched */}
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs text-slate-400">Rules matched:</span>
                    {item.rulesMatched.map((rule, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded">
                        {rule}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Link 
                    href={`/dashboard/claims/${item.id}`}
                    className="p-2 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg transition-colors"
                    title="View Details"
                  >
                    <EyeIcon className="w-5 h-5" />
                  </Link>
                  <button 
                    className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                    title="Approve"
                  >
                    <CheckIcon className="w-5 h-5" />
                  </button>
                  <button 
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Deny"
                  >
                    <XIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bulk Actions */}
      {selectedItems.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-6">
          <span className="text-sm">
            <strong>{selectedItems.length}</strong> claims selected
          </span>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium">
              <CheckIcon className="w-4 h-4" />
              Approve Selected
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
              <XIcon className="w-4 h-4" />
              Deny Selected
            </button>
            <button 
              onClick={() => setSelectedItems([])}
              className="px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
