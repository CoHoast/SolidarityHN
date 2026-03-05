'use client';

import { useState } from 'react';

// Rule definitions
interface RuleCondition {
  field: string;
  operator: string;
  value: string;
}

interface Rule {
  id: string;
  name: string;
  description: string;
  conditions: RuleCondition[];
  action: 'APPROVE' | 'DENY' | 'REVIEW';
  actionReason: string;
  denialCode?: string;
  priority: number;
  enabled: boolean;
  hitCount: number;
  lastTriggered?: string;
}

// Available fields for conditions
const conditionFields = [
  { value: 'confidence_score', label: 'AI Confidence Score', type: 'number' },
  { value: 'billed_amount', label: 'Billed Amount', type: 'number' },
  { value: 'member_status', label: 'Member Status', type: 'enum', options: ['Active', 'Inactive', 'Pending', 'Terminated'] },
  { value: 'provider_network', label: 'Provider Network', type: 'enum', options: ['In-Network', 'Out-of-Network', 'Unknown'] },
  { value: 'has_prior_auth', label: 'Has Prior Authorization', type: 'boolean' },
  { value: 'procedure_requires_auth', label: 'Procedure Requires Auth', type: 'boolean' },
  { value: 'is_duplicate', label: 'Is Duplicate Claim', type: 'boolean' },
  { value: 'days_since_service', label: 'Days Since Service', type: 'number' },
  { value: 'validation_errors', label: 'Has Validation Errors', type: 'boolean' },
  { value: 'claim_type', label: 'Claim Type', type: 'enum', options: ['837P', '837I'] },
  { value: 'place_of_service', label: 'Place of Service', type: 'enum', options: ['Office', 'Hospital Inpatient', 'Hospital Outpatient', 'Emergency Room', 'Ambulatory Surgery', 'Skilled Nursing', 'Home Health'] },
  { value: 'service_type', label: 'Service Type', type: 'enum', options: ['Preventive', 'Diagnostic', 'Surgical', 'Emergency', 'Inpatient', 'Outpatient'] },
];

const operators = {
  number: [
    { value: 'equals', label: '=' },
    { value: 'not_equals', label: '≠' },
    { value: 'greater_than', label: '>' },
    { value: 'less_than', label: '<' },
    { value: 'greater_or_equal', label: '≥' },
    { value: 'less_or_equal', label: '≤' },
  ],
  enum: [
    { value: 'equals', label: 'equals' },
    { value: 'not_equals', label: 'does not equal' },
    { value: 'in_list', label: 'is one of' },
  ],
  boolean: [
    { value: 'is_true', label: 'is true' },
    { value: 'is_false', label: 'is false' },
  ],
};

const denialCodes = [
  { value: 'INELIGIBLE', label: 'INELIGIBLE - Member not eligible' },
  { value: 'NO_PRIOR_AUTH', label: 'NO_PRIOR_AUTH - Missing authorization' },
  { value: 'DUPLICATE', label: 'DUPLICATE - Duplicate claim' },
  { value: 'TIMELY_FILING', label: 'TIMELY_FILING - Past filing deadline' },
  { value: 'NON_COVERED', label: 'NON_COVERED - Service not covered' },
  { value: 'INVALID_PROVIDER', label: 'INVALID_PROVIDER - Provider not valid' },
  { value: 'INVALID_DIAGNOSIS', label: 'INVALID_DIAGNOSIS - Diagnosis invalid' },
  { value: 'BUNDLED', label: 'BUNDLED - Service bundled with another' },
];

// Sample rules
const sampleRules: Rule[] = [
  {
    id: 'RULE-001',
    name: 'Clean Claim - Auto Approve',
    description: 'Automatically approve clean claims with high confidence and low dollar amount',
    conditions: [
      { field: 'confidence_score', operator: 'greater_or_equal', value: '95' },
      { field: 'billed_amount', operator: 'less_than', value: '1000' },
      { field: 'validation_errors', operator: 'is_false', value: '' },
      { field: 'member_status', operator: 'equals', value: 'Active' },
    ],
    action: 'APPROVE',
    actionReason: 'Clean claim meeting all auto-approval criteria',
    priority: 1,
    enabled: true,
    hitCount: 1234,
    lastTriggered: '2 min ago',
  },
  {
    id: 'RULE-002',
    name: 'Member Inactive - Deny',
    description: 'Deny claims when member coverage is not active',
    conditions: [
      { field: 'member_status', operator: 'equals', value: 'Inactive' },
    ],
    action: 'DENY',
    actionReason: 'Member coverage inactive on date of service',
    denialCode: 'INELIGIBLE',
    priority: 0,
    enabled: true,
    hitCount: 89,
    lastTriggered: '1 hour ago',
  },
  {
    id: 'RULE-003',
    name: 'High Dollar - Review',
    description: 'Flag high dollar claims for manual review',
    conditions: [
      { field: 'billed_amount', operator: 'greater_than', value: '10000' },
    ],
    action: 'REVIEW',
    actionReason: 'High dollar amount requires manual review',
    priority: 2,
    enabled: true,
    hitCount: 156,
    lastTriggered: '30 min ago',
  },
  {
    id: 'RULE-004',
    name: 'Low AI Confidence - Review',
    description: 'Review claims where AI extraction confidence is low',
    conditions: [
      { field: 'confidence_score', operator: 'less_than', value: '85' },
    ],
    action: 'REVIEW',
    actionReason: 'AI confidence below threshold - verify extracted data',
    priority: 3,
    enabled: true,
    hitCount: 234,
    lastTriggered: '15 min ago',
  },
  {
    id: 'RULE-005',
    name: 'Missing Prior Auth - Deny',
    description: 'Deny when procedure requires authorization but none on file',
    conditions: [
      { field: 'procedure_requires_auth', operator: 'is_true', value: '' },
      { field: 'has_prior_auth', operator: 'is_false', value: '' },
    ],
    action: 'DENY',
    actionReason: 'Procedure requires prior authorization - none on file',
    denialCode: 'NO_PRIOR_AUTH',
    priority: 1,
    enabled: true,
    hitCount: 67,
    lastTriggered: '3 hours ago',
  },
  {
    id: 'RULE-006',
    name: 'Duplicate Claim - Deny',
    description: 'Deny duplicate claims automatically',
    conditions: [
      { field: 'is_duplicate', operator: 'is_true', value: '' },
    ],
    action: 'DENY',
    actionReason: 'Duplicate of previously submitted claim',
    denialCode: 'DUPLICATE',
    priority: 0,
    enabled: true,
    hitCount: 45,
    lastTriggered: '5 hours ago',
  },
  {
    id: 'RULE-007',
    name: 'Out of Network - Review',
    description: 'Review out-of-network claims for benefit verification',
    conditions: [
      { field: 'provider_network', operator: 'equals', value: 'Out-of-Network' },
    ],
    action: 'REVIEW',
    actionReason: 'Out-of-network provider - verify OON benefits',
    priority: 4,
    enabled: true,
    hitCount: 312,
    lastTriggered: '45 min ago',
  },
  {
    id: 'RULE-008',
    name: 'Timely Filing Exceeded - Deny',
    description: 'Deny claims submitted more than 365 days after service',
    conditions: [
      { field: 'days_since_service', operator: 'greater_than', value: '365' },
    ],
    action: 'DENY',
    actionReason: 'Claim exceeds timely filing limit',
    denialCode: 'TIMELY_FILING',
    priority: 0,
    enabled: true,
    hitCount: 23,
    lastTriggered: '2 days ago',
  },
];

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

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CogIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ActionBadge({ action }: { action: 'APPROVE' | 'DENY' | 'REVIEW' }) {
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
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border ${styles[action]}`}>
      <span>{icons[action]}</span>
      {action}
    </span>
  );
}

// Rule Builder Modal
function RuleBuilderModal({ 
  isOpen, 
  onClose, 
  rule 
}: { 
  isOpen: boolean; 
  onClose: () => void;
  rule?: Rule;
}) {
  const [conditions, setConditions] = useState<RuleCondition[]>(
    rule?.conditions || [{ field: 'confidence_score', operator: 'greater_or_equal', value: '95' }]
  );
  const [action, setAction] = useState<'APPROVE' | 'DENY' | 'REVIEW'>(rule?.action || 'APPROVE');
  
  if (!isOpen) return null;
  
  const addCondition = () => {
    setConditions([...conditions, { field: 'billed_amount', operator: 'less_than', value: '' }]);
  };
  
  const removeCondition = (index: number) => {
    setConditions(conditions.filter((_, i) => i !== index));
  };
  
  const getFieldType = (fieldValue: string) => {
    const field = conditionFields.find(f => f.value === fieldValue);
    return field?.type || 'string';
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-xl font-semibold text-slate-900">
            {rule ? 'Edit Rule' : 'Create New Rule'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <XIcon className="w-5 h-5 text-slate-500" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Rule Name</label>
              <input
                type="text"
                defaultValue={rule?.name}
                placeholder="e.g., Auto-Approve Clean Claims"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Description</label>
              <textarea
                defaultValue={rule?.description}
                placeholder="Describe when this rule should apply..."
                rows={2}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
              />
            </div>
          </div>
          
          {/* Conditions */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-slate-900">
                Conditions <span className="text-slate-500 font-normal">(ALL must match)</span>
              </label>
              <button 
                onClick={addCondition}
                className="text-sm text-primary font-medium hover:text-primary-dark flex items-center gap-1"
              >
                <PlusIcon className="w-4 h-4" /> Add Condition
              </button>
            </div>
            
            <div className="space-y-3">
              {conditions.map((condition, index) => {
                const fieldType = getFieldType(condition.field);
                const field = conditionFields.find(f => f.value === condition.field);
                
                return (
                  <div key={index} className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
                    <span className="text-xs text-slate-500 font-medium w-8">
                      {index === 0 ? 'IF' : 'AND'}
                    </span>
                    
                    <select 
                      value={condition.field}
                      onChange={(e) => {
                        const newConditions = [...conditions];
                        newConditions[index].field = e.target.value;
                        setConditions(newConditions);
                      }}
                      className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      {conditionFields.map(f => (
                        <option key={f.value} value={f.value}>{f.label}</option>
                      ))}
                    </select>
                    
                    <select 
                      value={condition.operator}
                      className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      {operators[fieldType as keyof typeof operators]?.map(op => (
                        <option key={op.value} value={op.value}>{op.label}</option>
                      ))}
                    </select>
                    
                    {fieldType === 'boolean' ? null : fieldType === 'enum' ? (
                      <select 
                        value={condition.value}
                        className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        {field?.options?.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={fieldType === 'number' ? 'number' : 'text'}
                        value={condition.value}
                        onChange={(e) => {
                          const newConditions = [...conditions];
                          newConditions[index].value = e.target.value;
                          setConditions(newConditions);
                        }}
                        placeholder={fieldType === 'number' ? '0' : 'Value'}
                        className="w-24 px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    )}
                    
                    {conditions.length > 1 && (
                      <button 
                        onClick={() => removeCondition(index)}
                        className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                      >
                        <XIcon className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Action */}
          <div>
            <label className="text-sm font-semibold text-slate-900 mb-3 block">Then Label As</label>
            <div className="grid grid-cols-3 gap-3">
              {(['APPROVE', 'DENY', 'REVIEW'] as const).map((act) => (
                <button
                  key={act}
                  onClick={() => setAction(act)}
                  className={`
                    p-4 rounded-xl border-2 text-center transition-all
                    ${action === act 
                      ? act === 'APPROVE' ? 'border-emerald-500 bg-emerald-50' 
                        : act === 'DENY' ? 'border-red-500 bg-red-50'
                        : 'border-amber-500 bg-amber-50'
                      : 'border-slate-200 hover:border-slate-300'
                    }
                  `}
                >
                  <div className={`text-2xl mb-1 ${
                    act === 'APPROVE' ? 'text-emerald-600' 
                    : act === 'DENY' ? 'text-red-600' 
                    : 'text-amber-600'
                  }`}>
                    {act === 'APPROVE' ? '✓' : act === 'DENY' ? '✗' : '⚠'}
                  </div>
                  <div className="text-sm font-semibold text-slate-700">{act}</div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Action Details */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Reason / Summary</label>
              <input
                type="text"
                defaultValue={rule?.actionReason}
                placeholder="e.g., Clean claim meeting auto-approval criteria"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            
            {action === 'DENY' && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Denial Code</label>
                <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white">
                  {denialCodes.map(code => (
                    <option key={code.value} value={code.value}>{code.label}</option>
                  ))}
                </select>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Priority</label>
                <input
                  type="number"
                  defaultValue={rule?.priority || 1}
                  min={0}
                  max={99}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <p className="text-xs text-slate-500 mt-1">Lower = evaluated first (0 is highest)</p>
              </div>
              <div className="flex items-center gap-3 pt-6">
                <input type="checkbox" id="enabled" defaultChecked={rule?.enabled ?? true} className="w-5 h-5 rounded border-slate-300" />
                <label htmlFor="enabled" className="text-sm font-medium text-slate-700">Rule is active</label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-slate-200 px-6 py-4 flex items-center justify-between rounded-b-2xl">
          <button className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
            <PlayIcon className="w-4 h-4" />
            Test Rule
          </button>
          <div className="flex gap-3">
            <button 
              onClick={onClose}
              className="px-4 py-2 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25">
              {rule ? 'Save Changes' : 'Create Rule'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RulesPage() {
  const [showModal, setShowModal] = useState(false);
  const [editingRule, setEditingRule] = useState<Rule | undefined>();
  const [rules] = useState<Rule[]>(sampleRules);
  
  const openCreateModal = () => {
    setEditingRule(undefined);
    setShowModal(true);
  };
  
  const openEditModal = (rule: Rule) => {
    setEditingRule(rule);
    setShowModal(true);
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Adjudication Rules</h2>
          <p className="text-sm text-slate-500 mt-1">Configure rules for automated claim labeling and routing</p>
        </div>
        <button 
          onClick={openCreateModal}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
        >
          <PlusIcon className="w-4 h-4" />
          Create Rule
        </button>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Total Rules</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{rules.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Active Rules</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">{rules.filter(r => r.enabled).length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Rules Triggered Today</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">2,160</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Auto-Process Rate</p>
          <p className="text-2xl font-bold text-primary mt-1">73%</p>
        </div>
      </div>
      
      {/* Filter Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px] relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search rules..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Actions</option>
            <option>APPROVE</option>
            <option>DENY</option>
            <option>REVIEW</option>
          </select>
          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>
      
      {/* Rules List */}
      <div className="space-y-4">
        {rules.sort((a, b) => a.priority - b.priority).map((rule) => (
          <div 
            key={rule.id}
            className={`
              bg-white rounded-xl border shadow-sm overflow-hidden transition-all hover:shadow-md
              ${rule.enabled ? 'border-slate-200' : 'border-slate-200 opacity-60'}
            `}
          >
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-slate-400">P{rule.priority}</span>
                    <h3 className="text-lg font-semibold text-slate-900">{rule.name}</h3>
                    <ActionBadge action={rule.action} />
                    {!rule.enabled && (
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs rounded-full">Disabled</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 mb-4">{rule.description}</p>
                  
                  {/* Conditions */}
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase">If:</span>
                    {rule.conditions.map((cond, i) => {
                      const field = conditionFields.find(f => f.value === cond.field);
                      const op = cond.operator.replace(/_/g, ' ');
                      return (
                        <span key={i} className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg">
                          {i > 0 && <span className="text-slate-400 mr-1">AND</span>}
                          <span className="font-medium">{field?.label}</span>
                          <span className="text-slate-500">{op}</span>
                          {cond.value && <span className="font-semibold">{cond.value}</span>}
                        </span>
                      );
                    })}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => openEditModal(rule)}
                    className="p-2 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <CogIcon className="w-5 h-5" />
                  </button>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={rule.enabled} className="sr-only peer" readOnly />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-4">
                <span>Hits: <strong className="text-slate-700">{rule.hitCount.toLocaleString()}</strong></span>
                {rule.lastTriggered && <span>Last triggered: <strong className="text-slate-700">{rule.lastTriggered}</strong></span>}
              </div>
              {rule.denialCode && (
                <span className="font-mono text-red-600">{rule.denialCode}</span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Rule Builder Modal */}
      <RuleBuilderModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        rule={editingRule}
      />
    </div>
  );
}
