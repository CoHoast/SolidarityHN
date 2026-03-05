'use client';

import { useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

// AI Insights data
const confidenceTrend = [
  { date: 'Mon', avg: 91, high: 98, low: 72 },
  { date: 'Tue', avg: 89, high: 97, low: 68 },
  { date: 'Wed', avg: 93, high: 99, low: 75 },
  { date: 'Thu', avg: 92, high: 98, low: 71 },
  { date: 'Fri', avg: 94, high: 99, low: 78 },
  { date: 'Sat', avg: 90, high: 96, low: 69 },
  { date: 'Sun', avg: 88, high: 95, low: 65 },
];

const rulePerformance = [
  { rule: 'Clean Claim Auto-Approve', hits: 1234, rate: 28.5 },
  { rule: 'Low Confidence Review', hits: 456, rate: 10.5 },
  { rule: 'High Dollar Review', hits: 234, rate: 5.4 },
  { rule: 'Member Inactive Deny', hits: 89, rate: 2.1 },
  { rule: 'Missing Auth Deny', hits: 67, rate: 1.5 },
  { rule: 'Duplicate Deny', hits: 45, rate: 1.0 },
];

const denialReasons = [
  { reason: 'Member Inactive', count: 89, color: '#ef4444' },
  { reason: 'Missing Prior Auth', count: 67, color: '#f97316' },
  { reason: 'Duplicate Claim', count: 45, color: '#eab308' },
  { reason: 'Invalid NPI', count: 34, color: '#22c55e' },
  { reason: 'Timely Filing', count: 23, color: '#3b82f6' },
  { reason: 'Other', count: 18, color: '#8b5cf6' },
];

const anomalies = [
  {
    id: 'ANM-001',
    severity: 'high',
    title: 'ABC Medical Rejection Spike',
    description: 'Rejection rate increased 340% today (3 → 13 claims). Common issue: Missing prior auth on surgical claims.',
    metric: '+340%',
    action: 'View Affected Claims',
    timestamp: '2 hours ago',
  },
  {
    id: 'ANM-002',
    severity: 'medium',
    title: 'UHC Response Time Degradation',
    description: 'UHC acknowledgement time increased from 4hr to 8hr average this week. Consider separate batching.',
    metric: '2x slower',
    action: 'View Batch History',
    timestamp: '5 hours ago',
  },
  {
    id: 'ANM-003',
    severity: 'low',
    title: 'Low Confidence Pattern Detected',
    description: 'Claims from Metro Clinic showing consistently low AI confidence (avg 72%). Possible form quality issue.',
    metric: '72% avg',
    action: 'Review Extractions',
    timestamp: '1 day ago',
  },
];

const recommendations = [
  {
    id: 'REC-001',
    type: 'optimization',
    title: 'Adjust Auto-Approval Threshold',
    description: '94 claims could auto-approve if confidence threshold lowered from 95% to 92%. Estimated time savings: 4.7 hours/week.',
    impact: 'High',
    effort: 'Low',
    action: 'Simulate Change',
  },
  {
    id: 'REC-002',
    type: 'rule',
    title: 'New Rule Suggestion: Preventive Care Fast-Track',
    description: 'Preventive care claims (CPT 99381-99397) have 99.2% approval rate. Consider auto-approval rule.',
    impact: 'Medium',
    effort: 'Low',
    action: 'Create Rule',
  },
  {
    id: 'REC-003',
    type: 'client',
    title: 'XYZ Healthcare Training Opportunity',
    description: 'XYZ Healthcare has 3x higher rejection rate than average. Common issues: missing modifiers, incomplete patient info.',
    impact: 'High',
    effort: 'Medium',
    action: 'Generate Report',
  },
];

const predictions = {
  nextWeekVolume: 8200,
  volumeChange: '+12%',
  estimatedRejections: 98,
  rejectionRate: '1.2%',
  highDollarReviews: 45,
  peakDay: 'Tuesday',
  peakVolume: 1800,
  staffingAlert: true,
};

// Icons
function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  );
}

function AlertTriangleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function LightBulbIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  );
}

function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function ChartBarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function SeverityBadge({ severity }: { severity: string }) {
  const styles: Record<string, string> = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-amber-100 text-amber-700',
    low: 'bg-blue-100 text-blue-700',
  };
  
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-semibold uppercase ${styles[severity]}`}>
      {severity}
    </span>
  );
}

function ImpactBadge({ impact }: { impact: string }) {
  const styles: Record<string, string> = {
    High: 'bg-emerald-100 text-emerald-700',
    Medium: 'bg-blue-100 text-blue-700',
    Low: 'bg-slate-100 text-slate-600',
  };
  
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${styles[impact]}`}>
      {impact} Impact
    </span>
  );
}

export default function AIInsightsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center">
            <SparklesIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">AI Insights & Analytics</h2>
            <p className="text-sm text-slate-500">Intelligent analysis and recommendations</p>
          </div>
        </div>
        <div className="text-sm text-slate-500">
          Last updated: <span className="font-medium text-slate-700">2 minutes ago</span>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl p-5 text-white">
          <p className="text-white/80 text-sm">Avg AI Confidence</p>
          <p className="text-3xl font-bold mt-1">91.2%</p>
          <p className="text-white/60 text-sm mt-1">↑ 2.3% vs last week</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Auto-Processed</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">73%</p>
          <p className="text-sm text-emerald-600 mt-1">↑ 5% improvement</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Rules Triggered</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">2,125</p>
          <p className="text-sm text-slate-500 mt-1">Today</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Active Anomalies</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">3</p>
          <p className="text-sm text-slate-500 mt-1">Needs attention</p>
        </div>
      </div>
      
      {/* Anomaly Alerts */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center gap-3">
          <AlertTriangleIcon className="w-5 h-5 text-amber-500" />
          <h3 className="font-semibold text-slate-900">Anomaly Detection</h3>
          <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
            {anomalies.length} active
          </span>
        </div>
        <div className="divide-y divide-slate-100">
          {anomalies.map((anomaly) => (
            <div key={anomaly.id} className="p-5 hover:bg-slate-50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <SeverityBadge severity={anomaly.severity} />
                    <h4 className="font-semibold text-slate-900">{anomaly.title}</h4>
                    <span className="text-xl font-bold text-slate-900">{anomaly.metric}</span>
                  </div>
                  <p className="text-sm text-slate-600">{anomaly.description}</p>
                  <p className="text-xs text-slate-400 mt-2">{anomaly.timestamp}</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors">
                  {anomaly.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Confidence Trend */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4">AI Confidence Trend (7 Days)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={confidenceTrend}>
                <defs>
                  <linearGradient id="confidenceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis domain={[60, 100]} axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                  labelStyle={{ color: '#94a3b8' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="avg" stroke="#3b82f6" strokeWidth={2} fill="url(#confidenceGradient)" name="Average" />
                <Area type="monotone" dataKey="high" stroke="#10b981" strokeWidth={1} fill="none" strokeDasharray="3 3" name="High" />
                <Area type="monotone" dataKey="low" stroke="#f59e0b" strokeWidth={1} fill="none" strokeDasharray="3 3" name="Low" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Rule Performance */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4">Rule Performance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={rulePerformance} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis type="category" dataKey="rule" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 11 }} width={150} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                  labelStyle={{ color: '#94a3b8' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="hits" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Recommendations */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center gap-3">
          <LightBulbIcon className="w-5 h-5 text-amber-500" />
          <h3 className="font-semibold text-slate-900">AI Recommendations</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {recommendations.map((rec) => (
            <div key={rec.id} className="p-5 hover:bg-slate-50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <ImpactBadge impact={rec.impact} />
                    <h4 className="font-semibold text-slate-900">{rec.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600">{rec.description}</p>
                </div>
                <button className="px-4 py-2 border border-primary text-primary text-sm font-medium rounded-lg hover:bg-primary/5 transition-colors whitespace-nowrap">
                  {rec.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Predictions */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl p-6 text-white">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUpIcon className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Predictive Forecast — Next Week</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-white/60 text-sm">Projected Volume</p>
            <p className="text-2xl font-bold mt-1">{predictions.nextWeekVolume.toLocaleString()}</p>
            <p className="text-emerald-400 text-sm">{predictions.volumeChange} vs this week</p>
          </div>
          <div>
            <p className="text-white/60 text-sm">Est. Rejections</p>
            <p className="text-2xl font-bold mt-1">{predictions.estimatedRejections}</p>
            <p className="text-white/50 text-sm">{predictions.rejectionRate} rate</p>
          </div>
          <div>
            <p className="text-white/60 text-sm">High Dollar Reviews</p>
            <p className="text-2xl font-bold mt-1">~{predictions.highDollarReviews}</p>
            <p className="text-white/50 text-sm">Expected</p>
          </div>
          <div>
            <p className="text-white/60 text-sm">Peak Day</p>
            <p className="text-2xl font-bold mt-1">{predictions.peakDay}</p>
            <p className="text-white/50 text-sm">{predictions.peakVolume.toLocaleString()} claims</p>
          </div>
        </div>
        
        {predictions.staffingAlert && (
          <div className="mt-6 p-4 bg-amber-500/20 rounded-xl flex items-center gap-3">
            <AlertTriangleIcon className="w-5 h-5 text-amber-400" />
            <p className="text-sm">
              <strong className="text-amber-400">Staffing Alert:</strong>
              <span className="text-white/80 ml-1">You may need +1 reviewer on {predictions.peakDay} (projected peak: {predictions.peakVolume.toLocaleString()} claims)</span>
            </p>
          </div>
        )}
      </div>
      
      {/* Denial Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4">Denial Reason Breakdown</h3>
          <div className="flex items-center gap-8">
            <div className="w-40 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={denialReasons}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="count"
                  >
                    {denialReasons.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-2">
              {denialReasons.map((reason) => (
                <div key={reason.reason} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: reason.color }} />
                    <span className="text-sm text-slate-600">{reason.reason}</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">{reason.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4">Extraction Accuracy by Field</h3>
          <div className="space-y-3">
            {[
              { field: 'Patient Name', accuracy: 99.2 },
              { field: 'Provider NPI', accuracy: 99.8 },
              { field: 'Date of Service', accuracy: 99.5 },
              { field: 'CPT Codes', accuracy: 96.4 },
              { field: 'Billed Amount', accuracy: 98.7 },
              { field: 'Diagnosis Codes', accuracy: 88.3 },
              { field: 'Modifiers', accuracy: 82.1 },
            ].map((item) => (
              <div key={item.field} className="flex items-center gap-3">
                <span className="text-sm text-slate-600 w-32">{item.field}</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${item.accuracy >= 95 ? 'bg-emerald-500' : item.accuracy >= 85 ? 'bg-blue-500' : 'bg-amber-500'}`}
                    style={{ width: `${item.accuracy}%` }}
                  />
                </div>
                <span className={`text-sm font-semibold w-14 text-right ${item.accuracy >= 95 ? 'text-emerald-600' : item.accuracy >= 85 ? 'text-blue-600' : 'text-amber-600'}`}>
                  {item.accuracy}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
