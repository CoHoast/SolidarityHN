'use client';

import { useState } from 'react';

function SaveIcon({ className }: { className?: string }) {
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

function BellIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
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

function RefreshIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  );
}

function Toggle({ enabled, onChange, disabled = false }: { enabled: boolean; onChange: (val: boolean) => void; disabled?: boolean }) {
  return (
    <button
      onClick={() => !disabled && onChange(!enabled)}
      disabled={disabled}
      className={`relative w-12 h-6 rounded-full transition-colors ${
        enabled ? 'bg-primary' : 'bg-slate-300'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform shadow-sm ${
        enabled ? 'left-7' : 'left-1'
      }`} />
    </button>
  );
}

function SettingsCard({ 
  icon: Icon, 
  title, 
  description, 
  iconBg,
  children 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  iconBg: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-500 mt-1">{description}</p>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-5">
        {children}
      </div>
    </div>
  );
}

function SettingRow({ 
  label, 
  description, 
  children 
}: { 
  label: string; 
  description?: string; 
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium text-slate-900">{label}</p>
        {description && <p className="text-xs text-slate-500 mt-0.5">{description}</p>}
      </div>
      <div className="ml-4">{children}</div>
    </div>
  );
}

export default function SystemSettingsPage() {
  const [hasChanges, setHasChanges] = useState(false);
  
  // AI Processing Settings
  const [aiAutoApproveThreshold, setAiAutoApproveThreshold] = useState(95);
  const [aiReviewThreshold, setAiReviewThreshold] = useState(85);
  const [aiEnabled, setAiEnabled] = useState(true);
  const [humanReviewRequired, setHumanReviewRequired] = useState(true);
  
  // Batch Processing Settings
  const [defaultBatchSize, setDefaultBatchSize] = useState(100);
  const [batchSchedule, setBatchSchedule] = useState('hourly');
  const [maxRetries, setMaxRetries] = useState(3);
  const [retryDelay, setRetryDelay] = useState(5);
  
  // Data Retention Settings
  const [claimRetention, setClaimRetention] = useState(2555); // 7 years
  const [auditLogRetention, setAuditLogRetention] = useState(2555);
  const [documentRetention, setDocumentRetention] = useState(2555);
  const [autoArchive, setAutoArchive] = useState(true);
  
  // Notification Settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [rejectionAlerts, setRejectionAlerts] = useState(true);
  const [dailyDigest, setDailyDigest] = useState(true);
  const [webhookEnabled, setWebhookEnabled] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('');
  
  // Security Settings
  const [sessionTimeout, setSessionTimeout] = useState(30);
  const [mfaRequired, setMfaRequired] = useState(true);
  const [ipWhitelist, setIpWhitelist] = useState(false);
  const [passwordExpiry, setPasswordExpiry] = useState(90);
  
  // API Settings
  const [apiRateLimit, setApiRateLimit] = useState(1000);
  const [apiKey, setApiKey] = useState('sk-shn-prod-xxxxxxxxxxxxxxxxxxxx');
  
  const handleChange = (setter: (val: any) => void, value: any) => {
    setter(value);
    setHasChanges(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">System Settings</h2>
          <p className="text-sm text-slate-500 mt-1">Configure system-wide settings and operational parameters</p>
        </div>
        <button 
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
            hasChanges 
              ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20' 
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
          }`}
          disabled={!hasChanges}
        >
          <SaveIcon className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      {/* System Status */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">System Status</h3>
            <p className="text-white/70 mt-1">All systems operational</p>
            <div className="mt-3 flex items-center gap-6 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                API: Healthy
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Database: Connected
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Stedi EDI: Online
              </span>
              <span>Last check: 30 sec ago</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-sm">
            <RefreshIcon className="w-4 h-4 inline mr-2" />
            Refresh Status
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Processing Thresholds */}
        <SettingsCard 
          icon={CogIcon} 
          title="AI Processing Thresholds" 
          description="Configure AI confidence thresholds for claim processing"
          iconBg="bg-gradient-to-br from-violet-500 to-purple-600"
        >
          <SettingRow label="Enable AI Processing" description="Use AI for claim extraction and analysis">
            <Toggle enabled={aiEnabled} onChange={(val) => handleChange(setAiEnabled, val)} />
          </SettingRow>
          
          <SettingRow label="Auto-Approve Threshold" description="Claims above this confidence are eligible for auto-approval">
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="80"
                max="100"
                value={aiAutoApproveThreshold}
                onChange={(e) => handleChange(setAiAutoApproveThreshold, parseInt(e.target.value))}
                className="w-32 accent-primary"
              />
              <span className="text-sm font-semibold text-primary w-12">{aiAutoApproveThreshold}%</span>
            </div>
          </SettingRow>
          
          <SettingRow label="Review Threshold" description="Claims below this confidence go to manual review">
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="50"
                max="95"
                value={aiReviewThreshold}
                onChange={(e) => handleChange(setAiReviewThreshold, parseInt(e.target.value))}
                className="w-32 accent-amber-500"
              />
              <span className="text-sm font-semibold text-amber-600 w-12">{aiReviewThreshold}%</span>
            </div>
          </SettingRow>
          
          <SettingRow label="Require Human Review" description="All AI decisions must be verified by a human">
            <Toggle enabled={humanReviewRequired} onChange={(val) => handleChange(setHumanReviewRequired, val)} />
          </SettingRow>
          
          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-emerald-500"></span>
                <span>≥{aiAutoApproveThreshold}%: Auto-Approve Eligible</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-amber-500"></span>
                <span>{aiReviewThreshold}-{aiAutoApproveThreshold-1}%: Review</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-red-500"></span>
                <span>&lt;{aiReviewThreshold}%: Manual Required</span>
              </div>
            </div>
          </div>
        </SettingsCard>

        {/* Batch Processing */}
        <SettingsCard 
          icon={ClockIcon} 
          title="Batch Processing" 
          description="Configure how claims are batched for submission"
          iconBg="bg-gradient-to-br from-blue-500 to-cyan-600"
        >
          <SettingRow label="Default Batch Size" description="Maximum claims per batch submission">
            <select
              value={defaultBatchSize}
              onChange={(e) => handleChange(setDefaultBatchSize, parseInt(e.target.value))}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value={50}>50 claims</option>
              <option value={100}>100 claims</option>
              <option value={250}>250 claims</option>
              <option value={500}>500 claims</option>
              <option value={1000}>1,000 claims</option>
            </select>
          </SettingRow>
          
          <SettingRow label="Batch Schedule" description="How often to process pending claims">
            <select
              value={batchSchedule}
              onChange={(e) => handleChange(setBatchSchedule, e.target.value)}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="realtime">Real-time</option>
              <option value="15min">Every 15 minutes</option>
              <option value="hourly">Hourly</option>
              <option value="daily">Daily (6:00 AM)</option>
            </select>
          </SettingRow>
          
          <SettingRow label="Max Retry Attempts" description="Number of times to retry failed submissions">
            <select
              value={maxRetries}
              onChange={(e) => handleChange(setMaxRetries, parseInt(e.target.value))}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value={1}>1 retry</option>
              <option value={3}>3 retries</option>
              <option value={5}>5 retries</option>
              <option value={10}>10 retries</option>
            </select>
          </SettingRow>
          
          <SettingRow label="Retry Delay" description="Minutes between retry attempts">
            <select
              value={retryDelay}
              onChange={(e) => handleChange(setRetryDelay, parseInt(e.target.value))}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value={1}>1 minute</option>
              <option value={5}>5 minutes</option>
              <option value={15}>15 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>1 hour</option>
            </select>
          </SettingRow>
        </SettingsCard>

        {/* Data Retention */}
        <SettingsCard 
          icon={DatabaseIcon} 
          title="Data Retention" 
          description="Configure how long data is retained (HIPAA requires 6+ years)"
          iconBg="bg-gradient-to-br from-emerald-500 to-green-600"
        >
          <SettingRow label="Claim Data Retention" description="How long to retain claim records">
            <select
              value={claimRetention}
              onChange={(e) => handleChange(setClaimRetention, parseInt(e.target.value))}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value={2190}>6 years (minimum)</option>
              <option value={2555}>7 years (recommended)</option>
              <option value={3650}>10 years</option>
              <option value={0}>Indefinite</option>
            </select>
          </SettingRow>
          
          <SettingRow label="Audit Log Retention" description="How long to retain audit logs">
            <select
              value={auditLogRetention}
              onChange={(e) => handleChange(setAuditLogRetention, parseInt(e.target.value))}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value={2190}>6 years</option>
              <option value={2555}>7 years</option>
              <option value={3650}>10 years</option>
              <option value={0}>Indefinite</option>
            </select>
          </SettingRow>
          
          <SettingRow label="Document Storage" description="How long to retain uploaded documents">
            <select
              value={documentRetention}
              onChange={(e) => handleChange(setDocumentRetention, parseInt(e.target.value))}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value={2190}>6 years</option>
              <option value={2555}>7 years</option>
              <option value={3650}>10 years</option>
              <option value={0}>Indefinite</option>
            </select>
          </SettingRow>
          
          <SettingRow label="Auto-Archive" description="Automatically archive old records to cold storage">
            <Toggle enabled={autoArchive} onChange={(val) => handleChange(setAutoArchive, val)} />
          </SettingRow>
          
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-xs text-amber-800">
              <strong>HIPAA Compliance:</strong> Healthcare records must be retained for a minimum of 6 years. 
              Some states require longer retention periods.
            </p>
          </div>
        </SettingsCard>

        {/* Notifications */}
        <SettingsCard 
          icon={BellIcon} 
          title="Notifications" 
          description="Configure alerts and notification preferences"
          iconBg="bg-gradient-to-br from-amber-500 to-orange-600"
        >
          <SettingRow label="Email Notifications" description="Receive important updates via email">
            <Toggle enabled={emailNotifications} onChange={(val) => handleChange(setEmailNotifications, val)} />
          </SettingRow>
          
          <SettingRow label="Rejection Alerts" description="Immediate alerts when claims are rejected">
            <Toggle enabled={rejectionAlerts} onChange={(val) => handleChange(setRejectionAlerts, val)} />
          </SettingRow>
          
          <SettingRow label="Daily Digest" description="Summary email of daily activity at 6:00 PM">
            <Toggle enabled={dailyDigest} onChange={(val) => handleChange(setDailyDigest, val)} />
          </SettingRow>
          
          <div className="pt-4 border-t border-slate-100 space-y-4">
            <SettingRow label="Webhook Notifications" description="Send events to external URL">
              <Toggle enabled={webhookEnabled} onChange={(val) => handleChange(setWebhookEnabled, val)} />
            </SettingRow>
            
            {webhookEnabled && (
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-2">Webhook URL</label>
                <input
                  type="url"
                  value={webhookUrl}
                  onChange={(e) => handleChange(setWebhookUrl, e.target.value)}
                  placeholder="https://your-server.com/webhook"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            )}
          </div>
        </SettingsCard>

        {/* Security */}
        <SettingsCard 
          icon={ShieldIcon} 
          title="Security" 
          description="Configure security policies and access controls"
          iconBg="bg-gradient-to-br from-red-500 to-rose-600"
        >
          <SettingRow label="Session Timeout" description="Auto-logout after inactivity">
            <select
              value={sessionTimeout}
              onChange={(e) => handleChange(setSessionTimeout, parseInt(e.target.value))}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value={15}>15 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>1 hour</option>
              <option value={120}>2 hours</option>
            </select>
          </SettingRow>
          
          <SettingRow label="Require MFA" description="Two-factor authentication for all users">
            <Toggle enabled={mfaRequired} onChange={(val) => handleChange(setMfaRequired, val)} />
          </SettingRow>
          
          <SettingRow label="IP Whitelist" description="Restrict access to approved IP addresses">
            <Toggle enabled={ipWhitelist} onChange={(val) => handleChange(setIpWhitelist, val)} />
          </SettingRow>
          
          <SettingRow label="Password Expiry" description="Days until password must be changed">
            <select
              value={passwordExpiry}
              onChange={(e) => handleChange(setPasswordExpiry, parseInt(e.target.value))}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value={30}>30 days</option>
              <option value={60}>60 days</option>
              <option value={90}>90 days</option>
              <option value={180}>180 days</option>
              <option value={0}>Never</option>
            </select>
          </SettingRow>
          
          {ipWhitelist && (
            <div className="pt-4 border-t border-slate-100">
              <label className="block text-xs font-medium text-slate-500 mb-2">Allowed IP Addresses</label>
              <textarea
                rows={3}
                placeholder="Enter IP addresses, one per line..."
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none font-mono"
              />
            </div>
          )}
        </SettingsCard>

        {/* API Configuration */}
        <SettingsCard 
          icon={KeyIcon} 
          title="API Configuration" 
          description="Manage API keys and rate limits"
          iconBg="bg-gradient-to-br from-slate-600 to-slate-800"
        >
          <SettingRow label="API Rate Limit" description="Maximum requests per minute">
            <select
              value={apiRateLimit}
              onChange={(e) => handleChange(setApiRateLimit, parseInt(e.target.value))}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value={100}>100 req/min</option>
              <option value={500}>500 req/min</option>
              <option value={1000}>1,000 req/min</option>
              <option value={5000}>5,000 req/min</option>
              <option value={0}>Unlimited</option>
            </select>
          </SettingRow>
          
          <div className="pt-4 border-t border-slate-100">
            <label className="block text-sm font-medium text-slate-900 mb-1">Production API Key</label>
            <p className="text-xs text-slate-500 mb-3">Use this key to authenticate API requests</p>
            <div className="flex gap-2">
              <input
                type="password"
                value={apiKey}
                readOnly
                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-mono"
              />
              <button className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Reveal
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                Regenerate
              </button>
            </div>
          </div>
          
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-xs text-red-800">
              <strong>Warning:</strong> Regenerating your API key will invalidate the current key immediately. 
              Update all integrations before regenerating.
            </p>
          </div>
        </SettingsCard>
      </div>

      {/* Integrations Section */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
              <CloudIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">External Integrations</h3>
              <p className="text-sm text-slate-500 mt-1">Connected services and integration status</p>
            </div>
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {/* Stedi */}
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <span className="text-xl font-bold text-emerald-600">S</span>
              </div>
              <div>
                <p className="font-medium text-slate-900">Stedi EDI Gateway</p>
                <p className="text-sm text-slate-500">Electronic Data Interchange for claim submission</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-sm text-emerald-600">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Connected
              </span>
              <button className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Configure
              </button>
            </div>
          </div>
          
          {/* AWS */}
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                <span className="text-lg font-bold text-orange-600">AWS</span>
              </div>
              <div>
                <p className="font-medium text-slate-900">Amazon Web Services</p>
                <p className="text-sm text-slate-500">S3 storage, RDS database, and infrastructure</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-sm text-emerald-600">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Connected
              </span>
              <button className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Configure
              </button>
            </div>
          </div>
          
          {/* OpenAI */}
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                <span className="text-lg font-bold text-slate-600">AI</span>
              </div>
              <div>
                <p className="font-medium text-slate-900">OpenAI</p>
                <p className="text-sm text-slate-500">GPT-4 for claim extraction and analysis</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-sm text-emerald-600">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Connected
              </span>
              <button className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Configure
              </button>
            </div>
          </div>
          
          {/* Email Service */}
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <span className="text-lg font-bold text-blue-600">SES</span>
              </div>
              <div>
                <p className="font-medium text-slate-900">Amazon SES</p>
                <p className="text-sm text-slate-500">Email notifications and alerts</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-sm text-emerald-600">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Connected
              </span>
              <button className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Configure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-xl border border-red-200 overflow-hidden">
        <div className="p-6 bg-red-50 border-b border-red-200">
          <h3 className="text-lg font-semibold text-red-900">Danger Zone</h3>
          <p className="text-sm text-red-700 mt-1">Irreversible actions that affect your entire organization</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
            <div>
              <p className="font-medium text-slate-900">Export All Data</p>
              <p className="text-sm text-slate-500">Download a complete backup of all claims and records</p>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
              Export Data
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50/50">
            <div>
              <p className="font-medium text-red-900">Purge Test Data</p>
              <p className="text-sm text-red-700">Permanently delete all test/demo claims and data</p>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
              Purge Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
