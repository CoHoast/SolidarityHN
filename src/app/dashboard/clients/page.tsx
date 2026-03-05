'use client';

import { useState, useRef, useEffect } from 'react';

// Comprehensive client data with ALL clearinghouse requirements
const clientsData = [
  { 
    id: 'CLT-001', 
    name: 'ABC Medical Group', 
    legalName: 'ABC Medical Group, LLC',
    dba: 'ABC Medical',
    taxId: '12-3456789',
    npi: '1234567890',
    submitterId: 'ABC001',
    type: 'TPA', 
    claimsMonth: 4521,
    claimsTotal: 45210,
    status: 'Active', 
    joined: '2024-01-15',
    // Contacts
    primaryContact: { name: 'John Smith', title: 'Director of Operations', email: 'john@abcmedical.com', phone: '(555) 123-4567' },
    billingContact: { name: 'Sarah Wilson', title: 'Billing Manager', email: 'billing@abcmedical.com', phone: '(555) 123-4568' },
    technicalContact: { name: 'Mike Chen', title: 'IT Manager', email: 'it@abcmedical.com', phone: '(555) 123-4569' },
    // Addresses
    address: '123 Medical Plaza, Suite 400, Columbus, OH 43215',
    billingAddress: '123 Medical Plaza, Suite 400, Columbus, OH 43215',
    // Compliance
    baaStatus: 'Signed',
    baaSignedDate: '2024-01-10',
    baaExpirationDate: '2027-01-10',
    contractStatus: 'Active',
    contractStartDate: '2024-01-15',
    contractEndDate: '2027-01-14',
    slaLevel: 'Premium',
    // Users
    users: [
      { id: 'U001', name: 'John Smith', email: 'john@abcmedical.com', role: 'Admin', status: 'Active', lastLogin: '2 hours ago' },
      { id: 'U002', name: 'Sarah Wilson', email: 'sarah@abcmedical.com', role: 'Billing', status: 'Active', lastLogin: '1 day ago' },
      { id: 'U003', name: 'Mike Chen', email: 'mike@abcmedical.com', role: 'Technical', status: 'Active', lastLogin: '3 hours ago' },
      { id: 'U004', name: 'Lisa Brown', email: 'lisa@abcmedical.com', role: 'Reviewer', status: 'Active', lastLogin: '5 hours ago' },
      { id: 'U005', name: 'Tom Davis', email: 'tom@abcmedical.com', role: 'Reviewer', status: 'Active', lastLogin: '1 week ago' },
      { id: 'U006', name: 'Amy Lee', email: 'amy@abcmedical.com', role: 'Viewer', status: 'Inactive', lastLogin: '1 month ago' },
    ],
    // Trading Partner Agreements
    tradingPartners: [
      { payerId: '60054', payerName: 'Aetna', status: 'Active', enrolledDate: '2024-01-20', submitterId: 'ABC001' },
      { payerId: '87726', payerName: 'UnitedHealthcare', status: 'Active', enrolledDate: '2024-01-22', submitterId: 'ABC001' },
      { payerId: '00520', payerName: 'BCBS Ohio', status: 'Active', enrolledDate: '2024-02-01', submitterId: 'ABC001' },
      { payerId: 'CMS', payerName: 'Medicare', status: 'Pending', enrolledDate: '', submitterId: 'ABC001' },
    ],
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
    currentBalance: 0,
    lastInvoiceDate: '2024-02-01',
    lastInvoiceAmount: 2034.45,
    lastPaymentDate: '2024-02-10',
    lastPaymentAmount: 2034.45,
    paymentTerms: 'Net 30',
    paymentMethod: 'ACH',
    // Processing
    defaultPayer: 'Auto-detect',
    autoSubmitApproved: false,
    reviewThreshold: 85,
    // Recent Activity
    recentActivity: [
      { type: 'claims', action: 'Batch uploaded 245 claims', user: 'John Smith', timestamp: '2 hours ago' },
      { type: 'api', action: 'API key regenerated', user: 'Mike Chen', timestamp: '1 day ago' },
      { type: 'user', action: 'Added user Amy Lee', user: 'John Smith', timestamp: '1 week ago' },
    ],
    // Account Manager
    accountManager: 'Jennifer Adams',
    accountManagerEmail: 'jadams@solidarity.com',
    notes: 'Large TPA client with multiple locations. Premium SLA with 4-hour response time.',
  },
  { 
    id: 'CLT-002', 
    name: 'XYZ Healthcare Systems', 
    legalName: 'XYZ Healthcare Systems, Inc.',
    dba: '',
    taxId: '98-7654321',
    npi: '0987654321',
    submitterId: 'XYZ002',
    type: 'Provider', 
    claimsMonth: 3892,
    claimsTotal: 31136,
    status: 'Active', 
    joined: '2024-02-01',
    primaryContact: { name: 'Mary Johnson', title: 'Practice Manager', email: 'mary@xyzhealthcare.com', phone: '(555) 234-5678' },
    billingContact: { name: 'Mary Johnson', title: 'Practice Manager', email: 'mary@xyzhealthcare.com', phone: '(555) 234-5678' },
    technicalContact: { name: 'David Park', title: 'IT Coordinator', email: 'david@xyzhealthcare.com', phone: '(555) 234-5679' },
    address: '456 Healthcare Drive, Cincinnati, OH 45202',
    billingAddress: '456 Healthcare Drive, Cincinnati, OH 45202',
    baaStatus: 'Signed',
    baaSignedDate: '2024-01-28',
    baaExpirationDate: '2027-01-28',
    contractStatus: 'Active',
    contractStartDate: '2024-02-01',
    contractEndDate: '2027-01-31',
    slaLevel: 'Standard',
    users: [
      { id: 'U101', name: 'Mary Johnson', email: 'mary@xyzhealthcare.com', role: 'Admin', status: 'Active', lastLogin: '1 hour ago' },
      { id: 'U102', name: 'David Park', email: 'david@xyzhealthcare.com', role: 'Technical', status: 'Active', lastLogin: '2 days ago' },
      { id: 'U103', name: 'Nancy White', email: 'nancy@xyzhealthcare.com', role: 'Billing', status: 'Active', lastLogin: '4 hours ago' },
    ],
    tradingPartners: [
      { payerId: '60054', payerName: 'Aetna', status: 'Active', enrolledDate: '2024-02-05', submitterId: 'XYZ002' },
      { payerId: '87726', payerName: 'UnitedHealthcare', status: 'Active', enrolledDate: '2024-02-05', submitterId: 'XYZ002' },
    ],
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
    currentBalance: 1245.60,
    lastInvoiceDate: '2024-02-01',
    lastInvoiceAmount: 2140.60,
    lastPaymentDate: '2024-02-15',
    lastPaymentAmount: 895.00,
    paymentTerms: 'Net 30',
    paymentMethod: 'Credit Card',
    defaultPayer: 'Auto-detect',
    autoSubmitApproved: true,
    reviewThreshold: 90,
    recentActivity: [
      { type: 'claims', action: 'Submitted 156 claims via API', user: 'System', timestamp: '1 hour ago' },
      { type: 'payment', action: 'Payment received $895.00', user: 'System', timestamp: '2 days ago' },
    ],
    accountManager: 'Robert Taylor',
    accountManagerEmail: 'rtaylor@solidarity.com',
    notes: 'Multi-specialty healthcare provider. Good payment history.',
  },
  { 
    id: 'CLT-003', 
    name: 'Metro Urgent Care', 
    legalName: 'Metro Urgent Care Centers, LLC',
    dba: 'Metro UC',
    taxId: '45-6789012',
    npi: '1122334455',
    submitterId: 'MUC003',
    type: 'Provider', 
    claimsMonth: 2156,
    claimsTotal: 17248,
    status: 'Active', 
    joined: '2024-01-20',
    primaryContact: { name: 'Bob Williams', title: 'Operations Director', email: 'bob@metrouclinic.com', phone: '(555) 345-6789' },
    billingContact: { name: 'Carol Martinez', title: 'Billing Specialist', email: 'billing@metrouclinic.com', phone: '(555) 345-6790' },
    technicalContact: { name: 'Bob Williams', title: 'Operations Director', email: 'bob@metrouclinic.com', phone: '(555) 345-6789' },
    address: '789 Urgent Care Lane, Cleveland, OH 44114',
    billingAddress: 'PO Box 1234, Cleveland, OH 44115',
    baaStatus: 'Signed',
    baaSignedDate: '2024-01-15',
    baaExpirationDate: '2027-01-15',
    contractStatus: 'Active',
    contractStartDate: '2024-01-20',
    contractEndDate: '2026-01-19',
    slaLevel: 'Standard',
    users: [
      { id: 'U201', name: 'Bob Williams', email: 'bob@metrouclinic.com', role: 'Admin', status: 'Active', lastLogin: '3 hours ago' },
      { id: 'U202', name: 'Carol Martinez', email: 'carol@metrouclinic.com', role: 'Billing', status: 'Active', lastLogin: '1 day ago' },
    ],
    tradingPartners: [
      { payerId: '60054', payerName: 'Aetna', status: 'Active', enrolledDate: '2024-01-25', submitterId: 'MUC003' },
      { payerId: '62308', payerName: 'Cigna', status: 'Active', enrolledDate: '2024-01-25', submitterId: 'MUC003' },
      { payerId: '00520', payerName: 'BCBS Ohio', status: 'Active', enrolledDate: '2024-02-01', submitterId: 'MUC003' },
    ],
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
    currentBalance: 0,
    lastInvoiceDate: '2024-02-01',
    lastInvoiceAmount: 1617.00,
    lastPaymentDate: '2024-02-05',
    lastPaymentAmount: 1617.00,
    paymentTerms: 'Net 15',
    paymentMethod: 'ACH',
    defaultPayer: 'Auto-detect',
    autoSubmitApproved: false,
    reviewThreshold: 85,
    recentActivity: [
      { type: 'claims', action: 'Uploaded 89 claims via portal', user: 'Carol Martinez', timestamp: '1 day ago' },
    ],
    accountManager: 'Jennifer Adams',
    accountManagerEmail: 'jadams@solidarity.com',
    notes: 'Urgent care chain with 4 locations. Uses email intake primarily.',
  },
  { 
    id: 'CLT-004', 
    name: 'Regional TPA Services', 
    legalName: 'Regional Third Party Administrators, Inc.',
    dba: 'Regional TPA',
    taxId: '33-4455667',
    npi: '',
    submitterId: 'RTPA004',
    type: 'TPA', 
    claimsMonth: 8234,
    claimsTotal: 98808,
    status: 'Active', 
    joined: '2023-12-01',
    primaryContact: { name: 'Susan Davis', title: 'CEO', email: 'susan@regionaltpa.com', phone: '(555) 456-7890' },
    billingContact: { name: 'James Miller', title: 'CFO', email: 'james@regionaltpa.com', phone: '(555) 456-7891' },
    technicalContact: { name: 'Kevin Zhang', title: 'CTO', email: 'kevin@regionaltpa.com', phone: '(555) 456-7892' },
    address: '321 TPA Boulevard, Dayton, OH 45402',
    billingAddress: '321 TPA Boulevard, Dayton, OH 45402',
    baaStatus: 'Signed',
    baaSignedDate: '2023-11-15',
    baaExpirationDate: '2026-11-15',
    contractStatus: 'Active',
    contractStartDate: '2023-12-01',
    contractEndDate: '2026-11-30',
    slaLevel: 'Premium',
    users: [
      { id: 'U301', name: 'Susan Davis', email: 'susan@regionaltpa.com', role: 'Admin', status: 'Active', lastLogin: '30 min ago' },
      { id: 'U302', name: 'James Miller', email: 'james@regionaltpa.com', role: 'Admin', status: 'Active', lastLogin: '1 hour ago' },
      { id: 'U303', name: 'Kevin Zhang', email: 'kevin@regionaltpa.com', role: 'Technical', status: 'Active', lastLogin: '2 hours ago' },
      { id: 'U304', name: 'Rachel Green', email: 'rachel@regionaltpa.com', role: 'Billing', status: 'Active', lastLogin: '3 hours ago' },
      { id: 'U305', name: 'Monica Lee', email: 'monica@regionaltpa.com', role: 'Reviewer', status: 'Active', lastLogin: '1 hour ago' },
      { id: 'U306', name: 'Ross Chen', email: 'ross@regionaltpa.com', role: 'Reviewer', status: 'Active', lastLogin: '4 hours ago' },
      { id: 'U307', name: 'Joey Adams', email: 'joey@regionaltpa.com', role: 'Reviewer', status: 'Active', lastLogin: '2 hours ago' },
      { id: 'U308', name: 'Chandler Bing', email: 'chandler@regionaltpa.com', role: 'Viewer', status: 'Active', lastLogin: '1 day ago' },
    ],
    tradingPartners: [
      { payerId: '60054', payerName: 'Aetna', status: 'Active', enrolledDate: '2023-12-05', submitterId: 'RTPA004' },
      { payerId: '87726', payerName: 'UnitedHealthcare', status: 'Active', enrolledDate: '2023-12-05', submitterId: 'RTPA004' },
      { payerId: '00520', payerName: 'BCBS Ohio', status: 'Active', enrolledDate: '2023-12-10', submitterId: 'RTPA004' },
      { payerId: '62308', payerName: 'Cigna', status: 'Active', enrolledDate: '2023-12-15', submitterId: 'RTPA004' },
      { payerId: '61101', payerName: 'Humana', status: 'Active', enrolledDate: '2024-01-01', submitterId: 'RTPA004' },
      { payerId: 'CMS', payerName: 'Medicare', status: 'Active', enrolledDate: '2024-01-15', submitterId: 'RTPA004' },
      { payerId: 'OHMED', payerName: 'Medicaid Ohio', status: 'Active', enrolledDate: '2024-02-01', submitterId: 'RTPA004' },
    ],
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
    currentBalance: 0,
    lastInvoiceDate: '2024-02-01',
    lastInvoiceAmount: 2881.90,
    lastPaymentDate: '2024-02-08',
    lastPaymentAmount: 2881.90,
    paymentTerms: 'Net 30',
    paymentMethod: 'Wire Transfer',
    defaultPayer: 'Auto-detect',
    autoSubmitApproved: true,
    reviewThreshold: 92,
    recentActivity: [
      { type: 'claims', action: 'SFTP batch: 1,245 claims processed', user: 'System', timestamp: '15 min ago' },
      { type: 'api', action: 'API: 567 claims submitted', user: 'System', timestamp: '1 hour ago' },
      { type: 'user', action: 'User role updated: Chandler Bing → Viewer', user: 'Susan Davis', timestamp: '1 day ago' },
    ],
    accountManager: 'Michael Scott',
    accountManagerEmail: 'mscott@solidarity.com',
    notes: 'Largest TPA client. Uses all intake methods. Premium SLA with dedicated support.',
  },
  { 
    id: 'CLT-005', 
    name: 'City Providers Network', 
    legalName: 'City Providers Network, Inc.',
    dba: 'CPN',
    taxId: '55-6677889',
    npi: '',
    submitterId: 'CPN005',
    type: 'Network', 
    claimsMonth: 1203,
    claimsTotal: 8421,
    status: 'Active', 
    joined: '2024-02-15',
    primaryContact: { name: 'Tom Brown', title: 'Network Director', email: 'tom@cityproviders.net', phone: '(555) 567-8901' },
    billingContact: { name: 'Laura White', title: 'Finance Manager', email: 'laura@cityproviders.net', phone: '(555) 567-8902' },
    technicalContact: { name: 'Tom Brown', title: 'Network Director', email: 'tom@cityproviders.net', phone: '(555) 567-8901' },
    address: '555 Network Street, Toledo, OH 43604',
    billingAddress: '555 Network Street, Toledo, OH 43604',
    baaStatus: 'Signed',
    baaSignedDate: '2024-02-10',
    baaExpirationDate: '2027-02-10',
    contractStatus: 'Active',
    contractStartDate: '2024-02-15',
    contractEndDate: '2027-02-14',
    slaLevel: 'Standard',
    users: [
      { id: 'U401', name: 'Tom Brown', email: 'tom@cityproviders.net', role: 'Admin', status: 'Active', lastLogin: '6 hours ago' },
      { id: 'U402', name: 'Laura White', email: 'laura@cityproviders.net', role: 'Billing', status: 'Active', lastLogin: '2 days ago' },
      { id: 'U403', name: 'Steve Rogers', email: 'steve@cityproviders.net', role: 'Reviewer', status: 'Active', lastLogin: '1 day ago' },
    ],
    tradingPartners: [
      { payerId: '60054', payerName: 'Aetna', status: 'Active', enrolledDate: '2024-02-20', submitterId: 'CPN005' },
      { payerId: '87726', payerName: 'UnitedHealthcare', status: 'Pending', enrolledDate: '', submitterId: 'CPN005' },
    ],
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
    currentBalance: 661.65,
    lastInvoiceDate: '2024-02-01',
    lastInvoiceAmount: 661.65,
    lastPaymentDate: '',
    lastPaymentAmount: 0,
    paymentTerms: 'Net 30',
    paymentMethod: 'ACH',
    defaultPayer: 'Auto-detect',
    autoSubmitApproved: false,
    reviewThreshold: 85,
    recentActivity: [
      { type: 'claims', action: 'File upload: 312 claims', user: 'Steve Rogers', timestamp: '1 day ago' },
    ],
    accountManager: 'Robert Taylor',
    accountManagerEmail: 'rtaylor@solidarity.com',
    notes: 'Provider network aggregating multiple small practices.',
  },
  { 
    id: 'CLT-006', 
    name: 'Demo Health Systems', 
    legalName: 'Demo Health Systems (Test Account)',
    dba: '',
    taxId: '00-0000000',
    npi: '0000000000',
    submitterId: 'DEMO006',
    type: 'Test', 
    claimsMonth: 45,
    claimsTotal: 45,
    status: 'Test', 
    joined: '2024-03-01',
    primaryContact: { name: 'Test User', title: 'Test Account', email: 'test@demo.com', phone: '(555) 000-0000' },
    billingContact: { name: 'Test User', title: 'Test Account', email: 'test@demo.com', phone: '(555) 000-0000' },
    technicalContact: { name: 'Test User', title: 'Test Account', email: 'test@demo.com', phone: '(555) 000-0000' },
    address: '000 Test Street, Test City, OH 00000',
    billingAddress: '000 Test Street, Test City, OH 00000',
    baaStatus: 'Not Required',
    baaSignedDate: '',
    baaExpirationDate: '',
    contractStatus: 'Test',
    contractStartDate: '2024-03-01',
    contractEndDate: '',
    slaLevel: 'None',
    users: [
      { id: 'U501', name: 'Test User', email: 'test@demo.com', role: 'Admin', status: 'Active', lastLogin: '1 hour ago' },
    ],
    tradingPartners: [
      { payerId: 'TEST', payerName: 'Test Payer', status: 'Test', enrolledDate: '2024-03-01', submitterId: 'DEMO006' },
    ],
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
    currentBalance: 0,
    lastInvoiceDate: '',
    lastInvoiceAmount: 0,
    lastPaymentDate: '',
    lastPaymentAmount: 0,
    paymentTerms: 'N/A',
    paymentMethod: 'N/A',
    defaultPayer: 'Auto-detect',
    autoSubmitApproved: false,
    reviewThreshold: 80,
    recentActivity: [
      { type: 'claims', action: 'Test claims submitted', user: 'Test User', timestamp: '1 hour ago' },
    ],
    accountManager: 'System',
    accountManagerEmail: 'support@solidarity.com',
    notes: 'Test/demo account for prospective clients.',
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

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function CurrencyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
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

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
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

function DotsVerticalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
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

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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

function KeyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
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

// Action Menu Dropdown Component
function ActionMenu({ client, onAction }: { client: Client; onAction: (action: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { id: 'view', label: 'View Details', icon: EyeIcon },
    { id: 'configure', label: 'Configure Intake', icon: CogIcon },
    { id: 'users', label: 'Manage Users', icon: UsersIcon },
    { id: 'claims', label: 'View Claims', icon: DocumentIcon },
    { id: 'invoices', label: 'View Invoices', icon: CurrencyIcon },
    { id: 'reports', label: 'View Reports', icon: ChartIcon },
    { id: 'divider', label: '', icon: null },
    { id: 'suspend', label: client.status === 'Suspended' ? 'Reactivate' : 'Suspend', icon: PauseIcon, danger: client.status !== 'Suspended' },
    { id: 'delete', label: 'Delete Client', icon: TrashIcon, danger: true },
  ];

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
      >
        <DotsVerticalIcon className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
          {menuItems.map((item, index) => (
            item.id === 'divider' ? (
              <div key={index} className="my-2 border-t border-slate-100" />
            ) : (
              <button
                key={item.id}
                onClick={() => {
                  onAction(item.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                  item.danger 
                    ? 'text-red-600 hover:bg-red-50' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.label}
              </button>
            )
          ))}
        </div>
      )}
    </div>
  );
}

// Comprehensive Client Detail Modal (View Mode)
function ClientDetailModal({ client, onClose, onEdit }: { client: Client; onClose: () => void; onEdit: () => void }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'compliance' | 'users' | 'trading' | 'activity' | 'billing'>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BuildingIcon },
    { id: 'compliance', label: 'Compliance', icon: ShieldIcon },
    { id: 'users', label: 'Users', icon: UsersIcon },
    { id: 'trading', label: 'Trading Partners', icon: LinkIcon },
    { id: 'activity', label: 'Activity', icon: ClipboardIcon },
    { id: 'billing', label: 'Billing', icon: CurrencyIcon },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
        
        <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl max-h-[95vh] flex flex-col">
          {/* Header */}
          <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                {client.name.substring(0, 2).toUpperCase()}
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
            <div className="flex items-center gap-2">
              <button 
                onClick={onEdit}
                className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark"
              >
                <CogIcon className="w-4 h-4 inline mr-2" />
                Configure
              </button>
              <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg">
                <XIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex-shrink-0 px-6 border-b border-slate-200">
            <nav className="flex gap-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
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
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white">
                    <p className="text-blue-100 text-sm">Claims This Month</p>
                    <p className="text-3xl font-bold mt-1">{client.claimsMonth.toLocaleString()}</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-5 text-white">
                    <p className="text-emerald-100 text-sm">Total Claims</p>
                    <p className="text-3xl font-bold mt-1">{client.claimsTotal.toLocaleString()}</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-5 text-white">
                    <p className="text-purple-100 text-sm">Active Users</p>
                    <p className="text-3xl font-bold mt-1">{client.users.filter(u => u.status === 'Active').length}</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl p-5 text-white">
                    <p className="text-amber-100 text-sm">Trading Partners</p>
                    <p className="text-3xl font-bold mt-1">{client.tradingPartners.filter(t => t.status === 'Active').length}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white border border-slate-200 rounded-xl p-5">
                    <h4 className="text-sm font-semibold text-slate-900 mb-4">Business Information</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Legal Name</span>
                        <span className="font-medium text-slate-900">{client.legalName}</span>
                      </div>
                      {client.dba && (
                        <div className="flex justify-between">
                          <span className="text-slate-500">DBA</span>
                          <span className="font-medium text-slate-900">{client.dba}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-slate-500">Tax ID (EIN)</span>
                        <span className="font-mono text-slate-900">{client.taxId}</span>
                      </div>
                      {client.npi && (
                        <div className="flex justify-between">
                          <span className="text-slate-500">NPI</span>
                          <span className="font-mono text-slate-900">{client.npi}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-slate-500">Submitter ID</span>
                        <span className="font-mono text-slate-900">{client.submitterId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Address</span>
                        <span className="font-medium text-slate-900 text-right max-w-[60%]">{client.address}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-5">
                    <h4 className="text-sm font-semibold text-slate-900 mb-4">Contacts</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wide">Primary Contact</p>
                        <p className="font-medium text-slate-900">{client.primaryContact.name}</p>
                        <p className="text-sm text-slate-500">{client.primaryContact.title}</p>
                        <p className="text-sm text-primary">{client.primaryContact.email}</p>
                        <p className="text-sm text-slate-600">{client.primaryContact.phone}</p>
                      </div>
                      <div className="border-t border-slate-100 pt-3">
                        <p className="text-xs text-slate-500 uppercase tracking-wide">Account Manager</p>
                        <p className="font-medium text-slate-900">{client.accountManager}</p>
                        <p className="text-sm text-primary">{client.accountManagerEmail}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {client.notes && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-sm font-medium text-amber-900">Notes</p>
                    <p className="text-sm text-amber-700 mt-1">{client.notes}</p>
                  </div>
                )}
              </div>
            )}

            {/* Compliance Tab */}
            {activeTab === 'compliance' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white border border-slate-200 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${client.baaStatus === 'Signed' ? 'bg-emerald-100' : 'bg-amber-100'}`}>
                        <ShieldIcon className={`w-5 h-5 ${client.baaStatus === 'Signed' ? 'text-emerald-600' : 'text-amber-600'}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Business Associate Agreement</h4>
                        <p className={`text-sm ${client.baaStatus === 'Signed' ? 'text-emerald-600' : 'text-amber-600'}`}>{client.baaStatus}</p>
                      </div>
                    </div>
                    {client.baaStatus === 'Signed' && (
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Signed Date</span>
                          <span className="font-medium">{new Date(client.baaSignedDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Expiration Date</span>
                          <span className="font-medium">{new Date(client.baaExpirationDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${client.contractStatus === 'Active' ? 'bg-emerald-100' : 'bg-amber-100'}`}>
                        <DocumentIcon className={`w-5 h-5 ${client.contractStatus === 'Active' ? 'text-emerald-600' : 'text-amber-600'}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Service Contract</h4>
                        <p className={`text-sm ${client.contractStatus === 'Active' ? 'text-emerald-600' : 'text-amber-600'}`}>{client.contractStatus}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Start Date</span>
                        <span className="font-medium">{new Date(client.contractStartDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">End Date</span>
                        <span className="font-medium">{client.contractEndDate ? new Date(client.contractEndDate).toLocaleDateString() : 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">SLA Level</span>
                        <span className="font-medium">{client.slaLevel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-slate-500">{client.users.length} total users ({client.users.filter(u => u.status === 'Active').length} active)</p>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">
                    <PlusIcon className="w-4 h-4 inline mr-2" />
                    Add User
                  </button>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">User</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Role</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Last Login</th>
                        <th className="px-4 py-3"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {client.users.map((user) => (
                        <tr key={user.id} className="hover:bg-slate-50">
                          <td className="px-4 py-3">
                            <p className="text-sm font-medium text-slate-900">{user.name}</p>
                            <p className="text-xs text-slate-500">{user.email}</p>
                          </td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">{user.role}</span>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-slate-500">{user.lastLogin}</td>
                          <td className="px-4 py-3">
                            <button className="text-slate-400 hover:text-slate-600">
                              <CogIcon className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Trading Partners Tab */}
            {activeTab === 'trading' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-slate-500">{client.tradingPartners.length} payer enrollments ({client.tradingPartners.filter(t => t.status === 'Active').length} active)</p>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">
                    <PlusIcon className="w-4 h-4 inline mr-2" />
                    Add Payer
                  </button>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Payer</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Payer ID</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Submitter ID</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Enrolled</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {client.tradingPartners.map((partner, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-medium text-slate-900">{partner.payerName}</td>
                          <td className="px-4 py-3">
                            <code className="text-sm text-slate-600 bg-slate-100 px-2 py-0.5 rounded">{partner.payerId}</code>
                          </td>
                          <td className="px-4 py-3">
                            <code className="text-sm text-slate-600">{partner.submitterId}</code>
                          </td>
                          <td className="px-4 py-3 text-sm text-slate-500">
                            {partner.enrolledDate ? new Date(partner.enrolledDate).toLocaleDateString() : '—'}
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              partner.status === 'Active' ? 'bg-emerald-100 text-emerald-700' 
                              : partner.status === 'Pending' ? 'bg-amber-100 text-amber-700'
                              : 'bg-slate-100 text-slate-500'
                            }`}>
                              {partner.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Activity Tab */}
            {activeTab === 'activity' && (
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-slate-900">Recent Activity</h4>
                <div className="space-y-3">
                  {client.recentActivity.map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activity.type === 'claims' ? 'bg-blue-100' 
                        : activity.type === 'api' ? 'bg-purple-100'
                        : activity.type === 'user' ? 'bg-emerald-100'
                        : 'bg-amber-100'
                      }`}>
                        {activity.type === 'claims' && <DocumentIcon className="w-5 h-5 text-blue-600" />}
                        {activity.type === 'api' && <CodeIcon className="w-5 h-5 text-purple-600" />}
                        {activity.type === 'user' && <UsersIcon className="w-5 h-5 text-emerald-600" />}
                        {activity.type === 'payment' && <CurrencyIcon className="w-5 h-5 text-amber-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                        <p className="text-xs text-slate-500">by {activity.user} • {activity.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-white border border-slate-200 rounded-xl p-5">
                    <p className="text-sm text-slate-500">Current Balance</p>
                    <p className={`text-2xl font-bold mt-1 ${client.currentBalance > 0 ? 'text-amber-600' : 'text-emerald-600'}`}>
                      ${client.currentBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-5">
                    <p className="text-sm text-slate-500">Price Per Claim</p>
                    <p className="text-2xl font-bold mt-1 text-slate-900">${client.pricePerClaim}</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-5">
                    <p className="text-sm text-slate-500">Monthly Minimum</p>
                    <p className="text-2xl font-bold mt-1 text-slate-900">${client.monthlyMinimum}</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-5">
                    <p className="text-sm text-slate-500">Payment Terms</p>
                    <p className="text-2xl font-bold mt-1 text-slate-900">{client.paymentTerms}</p>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-slate-900 mb-4">Recent Transactions</h4>
                  <div className="space-y-3">
                    {client.lastInvoiceDate && (
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <DocumentIcon className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">Invoice Generated</p>
                            <p className="text-xs text-slate-500">{new Date(client.lastInvoiceDate).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <p className="text-sm font-semibold text-slate-900">${client.lastInvoiceAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
                      </div>
                    )}
                    {client.lastPaymentDate && (
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <CheckIcon className="w-4 h-4 text-emerald-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">Payment Received ({client.paymentMethod})</p>
                            <p className="text-xs text-slate-500">{new Date(client.lastPaymentDate).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <p className="text-sm font-semibold text-emerald-600">-${client.lastPaymentAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Import the existing config modal (simplified reference)
function ClientConfigModal({ client, onClose }: { client: Client; onClose: () => void }) {
  // This would be the full configuration modal from before
  // For brevity, showing a simplified version that references the configure action
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
        <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Configure {client.name}</h3>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg">
              <XIcon className="w-5 h-5" />
            </button>
          </div>
          <p className="text-slate-500">Full intake configuration modal would go here (7 tabs: General, Intake Methods, API, SFTP, Files, Processing, Billing)</p>
          <div className="mt-6 flex justify-end">
            <button onClick={onClose} className="px-4 py-2 bg-primary text-white rounded-lg">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClientsPage() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [viewingClient, setViewingClient] = useState<Client | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const handleAction = (client: Client, action: string) => {
    switch (action) {
      case 'view':
        setViewingClient(client);
        break;
      case 'configure':
        setSelectedClient(client);
        break;
      case 'users':
        setViewingClient(client);
        break;
      case 'claims':
        // Navigate to claims filtered by client
        break;
      case 'invoices':
        // Navigate to invoices
        break;
      case 'reports':
        // Navigate to reports
        break;
      case 'suspend':
        // Handle suspend
        break;
      case 'delete':
        // Handle delete with confirmation
        break;
    }
  };

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
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-blue-100 rounded-lg flex items-center justify-center text-primary font-bold text-sm">
                        {client.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{client.name}</p>
                        <p className="text-xs text-slate-500">{client.primaryContact.name}</p>
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
                    <div className="flex items-center gap-1">
                      <button 
                        onClick={() => setViewingClient(client)}
                        className="p-2 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => setSelectedClient(client)}
                        className="p-2 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg transition-colors"
                        title="Configure"
                      >
                        <CogIcon className="w-4 h-4" />
                      </button>
                      <ActionMenu client={client} onAction={(action) => handleAction(client, action)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Details Modal */}
      {viewingClient && (
        <ClientDetailModal 
          client={viewingClient} 
          onClose={() => setViewingClient(null)} 
          onEdit={() => {
            setSelectedClient(viewingClient);
            setViewingClient(null);
          }}
        />
      )}

      {/* Configure Modal */}
      {selectedClient && (
        <ClientConfigModal client={selectedClient} onClose={() => setSelectedClient(null)} />
      )}
    </div>
  );
}
