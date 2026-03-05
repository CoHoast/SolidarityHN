'use client';

import { useState } from 'react';

// Fee schedule data
const feeSchedules = [
  { 
    id: 'FS-001', 
    name: 'Medicare 100%', 
    type: 'MEDICARE_PCT', 
    baseRate: '100%', 
    clients: ['ABC Medical', 'Metro Clinic', 'Regional TPA'],
    clientCount: 12,
    claimsProcessed: 45892,
    totalSavings: '$1,234,567',
    avgSavings: '24.3%',
    status: 'Active',
  },
  { 
    id: 'FS-002', 
    name: 'Medicare 110%', 
    type: 'MEDICARE_PCT', 
    baseRate: '110%', 
    clients: ['XYZ Healthcare', 'City Providers'],
    clientCount: 5,
    claimsProcessed: 18234,
    totalSavings: '$456,789',
    avgSavings: '18.7%',
    status: 'Active',
  },
  { 
    id: 'FS-003', 
    name: 'Medicare 120%', 
    type: 'MEDICARE_PCT', 
    baseRate: '120%', 
    clients: ['Premium Care Network'],
    clientCount: 3,
    claimsProcessed: 8921,
    totalSavings: '$234,567',
    avgSavings: '14.2%',
    status: 'Active',
  },
  { 
    id: 'FS-004', 
    name: 'Custom - ABC Medical', 
    type: 'FIXED_RATE', 
    baseRate: 'Custom', 
    clients: ['ABC Medical'],
    clientCount: 1,
    claimsProcessed: 12456,
    totalSavings: '$345,678',
    avgSavings: '28.1%',
    status: 'Active',
  },
  { 
    id: 'FS-005', 
    name: 'UCR 80th Percentile', 
    type: 'UCR', 
    baseRate: '80%', 
    clients: ['Workers Comp TPA'],
    clientCount: 2,
    claimsProcessed: 5678,
    totalSavings: '$167,890',
    avgSavings: '31.5%',
    status: 'Active',
  },
];

// CPT rate overrides for custom schedules
const cptOverrides = [
  { cpt: '99213', description: 'Office visit, established patient (15 min)', medicare: '$92.04', custom: '$89.00', variance: '-3.3%' },
  { cpt: '99214', description: 'Office visit, established patient (25 min)', medicare: '$134.56', custom: '$124.00', variance: '-7.9%' },
  { cpt: '99215', description: 'Office visit, established patient (40 min)', medicare: '$181.23', custom: '$165.00', variance: '-9.0%' },
  { cpt: '99203', description: 'Office visit, new patient (30 min)', medicare: '$110.45', custom: '$105.00', variance: '-4.9%' },
  { cpt: '99204', description: 'Office visit, new patient (45 min)', medicare: '$168.90', custom: '$155.00', variance: '-8.2%' },
  { cpt: '36415', description: 'Venipuncture', medicare: '$12.50', custom: '$10.00', variance: '-20.0%' },
  { cpt: '85025', description: 'CBC with differential', medicare: '$10.56', custom: '$8.50', variance: '-19.5%' },
  { cpt: '80053', description: 'Comprehensive metabolic panel', medicare: '$14.23', custom: '$12.00', variance: '-15.7%' },
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

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
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

function CogIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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

function TypeBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    'MEDICARE_PCT': 'bg-blue-100 text-blue-700',
    'FIXED_RATE': 'bg-purple-100 text-purple-700',
    'UCR': 'bg-teal-100 text-teal-700',
  };
  
  const labels: Record<string, string> = {
    'MEDICARE_PCT': '% Medicare',
    'FIXED_RATE': 'Fixed Rate',
    'UCR': 'UCR Based',
  };
  
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${styles[type] || 'bg-slate-100 text-slate-700'}`}>
      {labels[type] || type}
    </span>
  );
}

// Fee Schedule Editor Modal
function FeeScheduleModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [scheduleType, setScheduleType] = useState<'MEDICARE_PCT' | 'FIXED_RATE' | 'UCR'>('MEDICARE_PCT');
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-xl font-semibold text-slate-900">Create Fee Schedule</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <XIcon className="w-5 h-5 text-slate-500" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Schedule Name</label>
              <input
                type="text"
                placeholder="e.g., Medicare 100%"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Schedule Type</label>
              <div className="grid grid-cols-3 gap-3">
                {(['MEDICARE_PCT', 'FIXED_RATE', 'UCR'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setScheduleType(type)}
                    className={`
                      p-4 rounded-xl border-2 text-center transition-all
                      ${scheduleType === type 
                        ? 'border-primary bg-primary/5' 
                        : 'border-slate-200 hover:border-slate-300'
                      }
                    `}
                  >
                    <div className="text-sm font-semibold text-slate-700">
                      {type === 'MEDICARE_PCT' ? '% of Medicare' : type === 'FIXED_RATE' ? 'Fixed Rates' : 'UCR Based'}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {type === 'MEDICARE_PCT' ? 'Apply percentage to CMS rates' : type === 'FIXED_RATE' ? 'Custom rate per CPT' : 'Usual & customary rates'}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {scheduleType === 'MEDICARE_PCT' && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Percentage of Medicare</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    defaultValue={100}
                    min={50}
                    max={200}
                    className="w-32 px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <span className="text-slate-500">%</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Applied to CMS Medicare Physician Fee Schedule rates</p>
              </div>
            )}
            
            {scheduleType === 'UCR' && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">UCR Percentile</label>
                <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white">
                  <option>50th Percentile</option>
                  <option>75th Percentile</option>
                  <option>80th Percentile</option>
                  <option>90th Percentile</option>
                </select>
              </div>
            )}
            
            {scheduleType === 'FIXED_RATE' && (
              <div className="p-4 bg-slate-50 rounded-xl">
                <p className="text-sm text-slate-600">
                  Fixed rate schedules require uploading a CSV with CPT codes and rates, or manually entering rates after creation.
                </p>
                <button className="mt-3 flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-slate-50">
                  <UploadIcon className="w-4 h-4" />
                  Upload Rate CSV
                </button>
              </div>
            )}
          </div>
          
          {/* Assign Clients */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Assign to Clients</label>
            <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white">
              <option>Select clients...</option>
              <option>ABC Medical Group</option>
              <option>XYZ Healthcare</option>
              <option>Metro Clinic</option>
              <option>Regional TPA</option>
            </select>
            <p className="text-xs text-slate-500 mt-1">You can assign multiple clients after creation</p>
          </div>
        </div>
        
        <div className="sticky bottom-0 bg-white border-t border-slate-200 px-6 py-4 flex justify-end gap-3 rounded-b-2xl">
          <button onClick={onClose} className="px-4 py-2 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50">
            Cancel
          </button>
          <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/25">
            Create Schedule
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FeeSchedulesPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<string | null>('FS-004');
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Fee Schedules</h2>
          <p className="text-sm text-slate-500 mt-1">Configure repricing schedules for automated claim pricing</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
        >
          <PlusIcon className="w-4 h-4" />
          Create Schedule
        </button>
      </div>
      
      {/* Medicare Reference Card */}
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-6 text-white">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">Medicare Physician Fee Schedule (MPFS) 2026</h3>
            <p className="text-white/70 mt-1">CMS official rates — basis for percentage-based schedules</p>
            <div className="flex flex-wrap gap-6 mt-4 text-sm">
              <div>
                <span className="text-white/60">Last Updated:</span>
                <span className="ml-2 font-medium">Jan 1, 2026</span>
              </div>
              <div>
                <span className="text-white/60">CPT Codes:</span>
                <span className="ml-2 font-medium">16,842</span>
              </div>
              <div>
                <span className="text-white/60">Localities:</span>
                <span className="ml-2 font-medium">89</span>
              </div>
              <div>
                <span className="text-white/60">Conversion Factor:</span>
                <span className="ml-2 font-medium">$33.8872</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-white/20 rounded-lg hover:bg-white/30 text-sm">
              <UploadIcon className="w-4 h-4" />
              Update
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-white/20 rounded-lg hover:bg-white/30 text-sm">
              <DownloadIcon className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Active Schedules</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{feeSchedules.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Claims Repriced (MTD)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">91,181</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Total Savings (MTD)</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">$2.44M</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Avg Savings Rate</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">24.3%</p>
        </div>
      </div>
      
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fee Schedules List */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-900">Fee Schedules</h3>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-3 py-1.5 border border-slate-200 rounded-lg text-sm w-40 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          <div className="divide-y divide-slate-100">
            {feeSchedules.map((schedule) => (
              <div 
                key={schedule.id}
                onClick={() => setSelectedSchedule(schedule.id)}
                className={`
                  p-4 cursor-pointer transition-colors
                  ${selectedSchedule === schedule.id ? 'bg-primary/5 border-l-2 border-primary' : 'hover:bg-slate-50'}
                `}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-slate-900">{schedule.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <TypeBadge type={schedule.type} />
                      <span className="text-xs text-slate-500">{schedule.clientCount} clients</span>
                    </div>
                  </div>
                  <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg">
                    <CogIcon className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{schedule.claimsProcessed.toLocaleString()} claims</span>
                  <span className="text-emerald-600 font-medium">{schedule.avgSavings} avg savings</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Schedule Details */}
        <div className="space-y-6">
          {selectedSchedule && (
            <>
              {/* Schedule Info */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  {feeSchedules.find(s => s.id === selectedSchedule)?.name}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Type</span>
                    <TypeBadge type={feeSchedules.find(s => s.id === selectedSchedule)?.type || ''} />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Base Rate</span>
                    <span className="font-semibold text-slate-900">
                      {feeSchedules.find(s => s.id === selectedSchedule)?.baseRate}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Assigned Clients</span>
                    <span className="font-semibold text-slate-900">
                      {feeSchedules.find(s => s.id === selectedSchedule)?.clientCount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Total Savings</span>
                    <span className="font-semibold text-emerald-600">
                      {feeSchedules.find(s => s.id === selectedSchedule)?.totalSavings}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* CPT Overrides (for custom schedules) */}
              {selectedSchedule === 'FS-004' && (
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-900">CPT Rate Overrides</h3>
                    <button className="text-sm text-primary font-medium hover:text-primary-dark">
                      + Add Override
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500">CPT</th>
                          <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500">Description</th>
                          <th className="px-4 py-2 text-right text-xs font-semibold text-slate-500">Medicare</th>
                          <th className="px-4 py-2 text-right text-xs font-semibold text-slate-500">Custom</th>
                          <th className="px-4 py-2 text-right text-xs font-semibold text-slate-500">Var</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {cptOverrides.map((cpt) => (
                          <tr key={cpt.cpt} className="hover:bg-slate-50">
                            <td className="px-4 py-2 text-sm font-mono text-primary font-medium">{cpt.cpt}</td>
                            <td className="px-4 py-2 text-sm text-slate-600 truncate max-w-[200px]">{cpt.description}</td>
                            <td className="px-4 py-2 text-sm text-slate-500 text-right">{cpt.medicare}</td>
                            <td className="px-4 py-2 text-sm text-slate-900 font-semibold text-right">{cpt.custom}</td>
                            <td className="px-4 py-2 text-sm text-emerald-600 font-medium text-right">{cpt.variance}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {/* Assigned Clients */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-slate-900">Assigned Clients</h3>
                  <button className="text-sm text-primary font-medium hover:text-primary-dark">
                    + Assign Client
                  </button>
                </div>
                <div className="space-y-2">
                  {feeSchedules.find(s => s.id === selectedSchedule)?.clients.map((client, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm font-medium text-slate-700">{client}</span>
                      <button className="text-xs text-red-600 hover:text-red-700">Remove</button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Modal */}
      <FeeScheduleModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
