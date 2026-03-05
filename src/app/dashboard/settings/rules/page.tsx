'use client';

import { useState } from 'react';

// Rule definitions
interface RuleCondition {
  field: string;
  operator: string;
  value: string;
  value2?: string; // For "between" operator
}

interface ConditionGroup {
  logic: 'AND' | 'OR';
  conditions: RuleCondition[];
}

interface Rule {
  id: string;
  name: string;
  description: string;
  conditionGroups: ConditionGroup[];
  action: 'APPROVE' | 'DENY' | 'REVIEW' | 'PEND';
  actionReason: string;
  denialCode?: string;
  remarkCode?: string;
  priority: number;
  enabled: boolean;
  hitCount: number;
  lastTriggered?: string;
  createdAt: string;
  category: string;
}

// Comprehensive condition fields organized by category
const conditionFieldCategories = [
  {
    category: 'AI & Confidence',
    fields: [
      { value: 'ai_confidence_score', label: 'AI Confidence Score', type: 'number', unit: '%' },
      { value: 'extraction_confidence', label: 'Extraction Confidence', type: 'number', unit: '%' },
      { value: 'ocr_quality_score', label: 'OCR Quality Score', type: 'number', unit: '%' },
      { value: 'has_extraction_warnings', label: 'Has Extraction Warnings', type: 'boolean' },
    ]
  },
  {
    category: 'Member / Patient',
    fields: [
      { value: 'member_status', label: 'Member Status', type: 'enum', options: ['Active', 'Inactive', 'Pending', 'Terminated', 'COBRA'] },
      { value: 'member_age', label: 'Member Age', type: 'number', unit: 'years' },
      { value: 'member_gender', label: 'Member Gender', type: 'enum', options: ['Male', 'Female', 'Unknown'] },
      { value: 'plan_type', label: 'Plan Type', type: 'enum', options: ['HMO', 'PPO', 'EPO', 'POS', 'HDHP', 'Indemnity', 'Medicare Advantage', 'Medicaid'] },
      { value: 'coverage_effective_date', label: 'Coverage Effective Date', type: 'date' },
      { value: 'coverage_term_date', label: 'Coverage Term Date', type: 'date' },
      { value: 'deductible_met', label: 'Deductible Met', type: 'boolean' },
      { value: 'deductible_remaining', label: 'Deductible Remaining', type: 'number', unit: '$' },
      { value: 'oop_max_met', label: 'Out-of-Pocket Max Met', type: 'boolean' },
      { value: 'oop_remaining', label: 'OOP Remaining', type: 'number', unit: '$' },
      { value: 'cob_indicator', label: 'COB Indicator', type: 'enum', options: ['Primary', 'Secondary', 'Tertiary', 'None'] },
      { value: 'subscriber_relationship', label: 'Subscriber Relationship', type: 'enum', options: ['Self', 'Spouse', 'Child', 'Other'] },
    ]
  },
  {
    category: 'Provider',
    fields: [
      { value: 'provider_network_status', label: 'Network Status', type: 'enum', options: ['In-Network', 'Out-of-Network', 'Tier 1', 'Tier 2', 'Non-Participating'] },
      { value: 'provider_type', label: 'Provider Type', type: 'enum', options: ['Individual', 'Facility', 'Group', 'Clinic', 'Hospital', 'ASC', 'SNF', 'Home Health'] },
      { value: 'provider_specialty', label: 'Provider Specialty', type: 'enum', options: ['Primary Care', 'Internal Medicine', 'Family Practice', 'Cardiology', 'Orthopedics', 'Neurology', 'Oncology', 'Radiology', 'Anesthesiology', 'Emergency Medicine', 'Surgery', 'Psychiatry', 'OB/GYN', 'Pediatrics', 'Dermatology', 'Gastroenterology', 'Urology', 'Other'] },
      { value: 'provider_state', label: 'Provider State', type: 'string' },
      { value: 'billing_npi_valid', label: 'Billing NPI Valid', type: 'boolean' },
      { value: 'rendering_npi_valid', label: 'Rendering NPI Valid', type: 'boolean' },
      { value: 'provider_enrolled', label: 'Provider Enrolled', type: 'boolean' },
      { value: 'provider_taxonomy', label: 'Provider Taxonomy', type: 'string' },
      { value: 'facility_npi_valid', label: 'Facility NPI Valid', type: 'boolean' },
    ]
  },
  {
    category: 'Diagnosis (ICD-10)',
    fields: [
      { value: 'primary_dx_code', label: 'Primary Diagnosis Code', type: 'string', placeholder: 'e.g., E11.9, J18.9' },
      { value: 'primary_dx_category', label: 'Primary Diagnosis Category', type: 'enum', options: ['Infectious Disease', 'Neoplasms', 'Blood Disorders', 'Endocrine/Metabolic', 'Mental Health', 'Nervous System', 'Eye/Ear', 'Circulatory', 'Respiratory', 'Digestive', 'Skin', 'Musculoskeletal', 'Genitourinary', 'Pregnancy', 'Perinatal', 'Congenital', 'Symptoms/Signs', 'Injury/Poisoning', 'External Causes', 'Other'] },
      { value: 'dx_code_count', label: 'Diagnosis Code Count', type: 'number' },
      { value: 'has_chronic_condition', label: 'Has Chronic Condition Code', type: 'boolean' },
      { value: 'dx_supports_procedure', label: 'Diagnosis Supports Procedure', type: 'boolean' },
      { value: 'primary_dx_valid', label: 'Primary Diagnosis Valid', type: 'boolean' },
    ]
  },
  {
    category: 'Procedure (CPT/HCPCS)',
    fields: [
      { value: 'cpt_code', label: 'CPT/HCPCS Code', type: 'string', placeholder: 'e.g., 99213, J1234' },
      { value: 'cpt_code_range', label: 'CPT Code Range', type: 'range', placeholder: 'e.g., 99201-99215' },
      { value: 'procedure_category', label: 'Procedure Category', type: 'enum', options: ['E&M', 'Surgery', 'Radiology', 'Pathology/Lab', 'Medicine', 'Anesthesia', 'DME', 'Drugs/Injections', 'Physical Therapy', 'Mental Health', 'Preventive', 'Telehealth'] },
      { value: 'modifier_present', label: 'Modifier Present', type: 'multi-enum', options: ['25', '26', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '76', '77', '78', '79', 'TC', 'LT', 'RT', 'XE', 'XP', 'XS', 'XU', 'GA', 'GY', 'GZ'] },
      { value: 'requires_prior_auth', label: 'Requires Prior Auth', type: 'boolean' },
      { value: 'has_prior_auth', label: 'Has Prior Auth on File', type: 'boolean' },
      { value: 'prior_auth_valid', label: 'Prior Auth Valid/Current', type: 'boolean' },
      { value: 'units_of_service', label: 'Units of Service', type: 'number' },
      { value: 'is_cosmetic', label: 'Cosmetic Procedure', type: 'boolean' },
      { value: 'is_experimental', label: 'Experimental Procedure', type: 'boolean' },
      { value: 'procedure_valid', label: 'Procedure Code Valid', type: 'boolean' },
    ]
  },
  {
    category: 'Claim Details',
    fields: [
      { value: 'claim_type', label: 'Claim Type', type: 'enum', options: ['Professional (837P)', 'Institutional (837I)', 'Dental (837D)'] },
      { value: 'billed_amount', label: 'Total Billed Amount', type: 'number', unit: '$' },
      { value: 'line_item_count', label: 'Line Item Count', type: 'number' },
      { value: 'place_of_service', label: 'Place of Service', type: 'enum', options: ['11 - Office', '12 - Home', '21 - Inpatient Hospital', '22 - On Campus-Outpatient Hospital', '23 - Emergency Room', '24 - Ambulatory Surgical Center', '31 - Skilled Nursing Facility', '32 - Nursing Facility', '41 - Ambulance - Land', '51 - Inpatient Psychiatric', '61 - Comprehensive Inpatient Rehab', '81 - Independent Laboratory', '99 - Other'] },
      { value: 'service_date', label: 'Date of Service', type: 'date' },
      { value: 'days_since_service', label: 'Days Since Service', type: 'number', unit: 'days' },
      { value: 'admission_date', label: 'Admission Date', type: 'date' },
      { value: 'discharge_date', label: 'Discharge Date', type: 'date' },
      { value: 'length_of_stay', label: 'Length of Stay', type: 'number', unit: 'days' },
      { value: 'admission_type', label: 'Admission Type', type: 'enum', options: ['Emergency', 'Urgent', 'Elective', 'Newborn', 'Trauma', 'Information Not Available'] },
      { value: 'discharge_status', label: 'Discharge Status', type: 'enum', options: ['Home', 'SNF', 'Home Health', 'AMA', 'Expired', 'Transfer', 'Other'] },
      { value: 'revenue_code', label: 'Revenue Code', type: 'string', placeholder: 'e.g., 0120, 0450' },
      { value: 'drg_code', label: 'DRG Code', type: 'string' },
    ]
  },
  {
    category: 'Referrals & Authorization',
    fields: [
      { value: 'referring_provider_present', label: 'Referring Provider Present', type: 'boolean' },
      { value: 'referring_npi_valid', label: 'Referring NPI Valid', type: 'boolean' },
      { value: 'referral_required', label: 'Referral Required', type: 'boolean' },
      { value: 'has_referral', label: 'Has Valid Referral', type: 'boolean' },
      { value: 'auth_units_remaining', label: 'Authorized Units Remaining', type: 'number' },
      { value: 'auth_visits_remaining', label: 'Authorized Visits Remaining', type: 'number' },
    ]
  },
  {
    category: 'Special Conditions',
    fields: [
      { value: 'is_emergency', label: 'Emergency Services', type: 'boolean' },
      { value: 'is_accident_related', label: 'Accident Related', type: 'boolean' },
      { value: 'accident_type', label: 'Accident Type', type: 'enum', options: ['Auto', 'Work', 'Other', 'None'] },
      { value: 'is_workers_comp', label: 'Workers Comp', type: 'boolean' },
      { value: 'is_duplicate', label: 'Duplicate Claim', type: 'boolean' },
      { value: 'is_resubmission', label: 'Resubmission/Corrected', type: 'boolean' },
      { value: 'original_claim_paid', label: 'Original Claim Paid', type: 'boolean' },
      { value: 'patient_deceased', label: 'Patient Deceased', type: 'boolean' },
    ]
  },
  {
    category: 'Validation',
    fields: [
      { value: 'has_validation_errors', label: 'Has Validation Errors', type: 'boolean' },
      { value: 'validation_error_count', label: 'Validation Error Count', type: 'number' },
      { value: 'missing_required_fields', label: 'Missing Required Fields', type: 'boolean' },
      { value: 'invalid_code_present', label: 'Invalid Code Present', type: 'boolean' },
      { value: 'ncci_edit_triggered', label: 'NCCI Edit Triggered', type: 'boolean' },
      { value: 'mue_exceeded', label: 'MUE Exceeded', type: 'boolean' },
    ]
  },
];

// Flatten for easy lookup
const conditionFields = conditionFieldCategories.flatMap(cat => 
  cat.fields.map(f => ({ ...f, category: cat.category }))
);

// Comprehensive operators by field type
const operators = {
  number: [
    { value: 'equals', label: 'equals (=)' },
    { value: 'not_equals', label: 'not equal to (≠)' },
    { value: 'greater_than', label: 'greater than (>)' },
    { value: 'less_than', label: 'less than (<)' },
    { value: 'greater_or_equal', label: 'greater or equal (≥)' },
    { value: 'less_or_equal', label: 'less or equal (≤)' },
    { value: 'between', label: 'between (range)' },
    { value: 'not_between', label: 'not between' },
  ],
  string: [
    { value: 'equals', label: 'equals' },
    { value: 'not_equals', label: 'not equal to' },
    { value: 'contains', label: 'contains' },
    { value: 'not_contains', label: 'does not contain' },
    { value: 'starts_with', label: 'starts with' },
    { value: 'ends_with', label: 'ends with' },
    { value: 'in_list', label: 'is in list' },
    { value: 'not_in_list', label: 'is not in list' },
    { value: 'is_empty', label: 'is empty' },
    { value: 'is_not_empty', label: 'is not empty' },
    { value: 'matches_regex', label: 'matches pattern' },
  ],
  enum: [
    { value: 'equals', label: 'equals' },
    { value: 'not_equals', label: 'not equal to' },
    { value: 'in_list', label: 'is one of' },
    { value: 'not_in_list', label: 'is not one of' },
  ],
  'multi-enum': [
    { value: 'contains_any', label: 'contains any of' },
    { value: 'contains_all', label: 'contains all of' },
    { value: 'not_contains', label: 'does not contain' },
    { value: 'is_empty', label: 'has none' },
    { value: 'is_not_empty', label: 'has at least one' },
  ],
  boolean: [
    { value: 'is_true', label: 'is true' },
    { value: 'is_false', label: 'is false' },
  ],
  date: [
    { value: 'equals', label: 'equals' },
    { value: 'before', label: 'is before' },
    { value: 'after', label: 'is after' },
    { value: 'between', label: 'is between' },
    { value: 'within_days', label: 'within X days of today' },
    { value: 'is_empty', label: 'is empty' },
    { value: 'is_not_empty', label: 'is not empty' },
  ],
  range: [
    { value: 'in_range', label: 'is in range' },
    { value: 'not_in_range', label: 'is not in range' },
  ],
};

// Industry-standard denial codes (CARC - Claim Adjustment Reason Codes)
const denialCodes = [
  { value: '', label: '-- Select Denial Code --', group: '' },
  // Contractual Obligations (CO)
  { value: 'CO-4', label: 'CO-4: Procedure code inconsistent with modifier', group: 'Contractual' },
  { value: 'CO-11', label: 'CO-11: Diagnosis inconsistent with procedure', group: 'Contractual' },
  { value: 'CO-15', label: 'CO-15: Authorization number missing/invalid', group: 'Contractual' },
  { value: 'CO-16', label: 'CO-16: Claim/service lacks information needed for adjudication', group: 'Contractual' },
  { value: 'CO-18', label: 'CO-18: Duplicate claim/service', group: 'Contractual' },
  { value: 'CO-22', label: 'CO-22: Coordination of benefits (COB)', group: 'Contractual' },
  { value: 'CO-24', label: 'CO-24: Charges covered under capitation agreement', group: 'Contractual' },
  { value: 'CO-27', label: 'CO-27: Expenses incurred after coverage terminated', group: 'Contractual' },
  { value: 'CO-29', label: 'CO-29: Timely filing limit exceeded', group: 'Contractual' },
  { value: 'CO-45', label: 'CO-45: Charges exceed fee schedule/maximum allowable', group: 'Contractual' },
  { value: 'CO-50', label: 'CO-50: Non-covered service (not a contract benefit)', group: 'Contractual' },
  { value: 'CO-55', label: 'CO-55: Procedure/treatment not deemed medically necessary', group: 'Contractual' },
  { value: 'CO-59', label: 'CO-59: Processed based on multiple/MUE procedure rules', group: 'Contractual' },
  { value: 'CO-97', label: 'CO-97: Payment included in allowance for another service', group: 'Contractual' },
  { value: 'CO-109', label: 'CO-109: Claim not covered by this payer', group: 'Contractual' },
  { value: 'CO-119', label: 'CO-119: Benefit maximum for this time period has been reached', group: 'Contractual' },
  { value: 'CO-151', label: 'CO-151: Payment adjusted - prior payer info required', group: 'Contractual' },
  { value: 'CO-167', label: 'CO-167: Diagnosis not covered', group: 'Contractual' },
  { value: 'CO-197', label: 'CO-197: Precertification/authorization absent', group: 'Contractual' },
  { value: 'CO-204', label: 'CO-204: Service not authorized by referral', group: 'Contractual' },
  { value: 'CO-234', label: 'CO-234: Claim denied - not medically necessary', group: 'Contractual' },
  // Patient Responsibility (PR)
  { value: 'PR-1', label: 'PR-1: Deductible amount', group: 'Patient Responsibility' },
  { value: 'PR-2', label: 'PR-2: Coinsurance amount', group: 'Patient Responsibility' },
  { value: 'PR-3', label: 'PR-3: Co-payment amount', group: 'Patient Responsibility' },
  { value: 'PR-26', label: 'PR-26: Expenses incurred prior to coverage', group: 'Patient Responsibility' },
  { value: 'PR-27', label: 'PR-27: Expenses incurred after coverage terminated', group: 'Patient Responsibility' },
  { value: 'PR-31', label: 'PR-31: Patient cannot be identified as our insured', group: 'Patient Responsibility' },
  { value: 'PR-49', label: 'PR-49: Non-covered service - routine/preventive', group: 'Patient Responsibility' },
  { value: 'PR-50', label: 'PR-50: Non-covered service - not a contract benefit', group: 'Patient Responsibility' },
  { value: 'PR-96', label: 'PR-96: Non-covered charge', group: 'Patient Responsibility' },
  // Other Adjustments (OA)
  { value: 'OA-23', label: 'OA-23: Payment adjusted - no effect on patient', group: 'Other Adjustment' },
  { value: 'OA-100', label: 'OA-100: Payment made to patient/insured', group: 'Other Adjustment' },
  { value: 'OA-101', label: 'OA-101: Predetermination - anticipated payment', group: 'Other Adjustment' },
  { value: 'OA-107', label: 'OA-107: Related/prior claim not identified', group: 'Other Adjustment' },
  // Payer Initiated Reductions (PI)
  { value: 'PI-94', label: 'PI-94: Processed in excess of charges', group: 'Payer Initiated' },
  { value: 'PI-95', label: 'PI-95: Plan procedures not followed', group: 'Payer Initiated' },
  { value: 'PI-100', label: 'PI-100: Payment made to patient', group: 'Payer Initiated' },
];

// RARC (Remittance Advice Remark Codes)
const remarkCodes = [
  { value: '', label: '-- Optional Remark Code --' },
  { value: 'N30', label: 'N30: Missing/incomplete service facility name/address' },
  { value: 'N56', label: 'N56: Procedure code billed is not correct' },
  { value: 'N95', label: 'N95: Claim/service adjusted - benefit maximums reached' },
  { value: 'N115', label: 'N115: This decision was based on a National Coverage Determination' },
  { value: 'N130', label: 'N130: Consult fee schedule for reimbursement' },
  { value: 'N362', label: 'N362: Missing/incomplete diagnosis/condition' },
  { value: 'N386', label: 'N386: This decision was based on a Local Coverage Determination' },
  { value: 'N479', label: 'N479: Missing/invalid referring provider' },
  { value: 'N522', label: 'N522: Duplicate of a claim processed/in process' },
  { value: 'M15', label: 'M15: Separately billed item included in procedure' },
  { value: 'M20', label: 'M20: Missing/incomplete diagnosis code' },
  { value: 'M51', label: 'M51: Missing/incomplete procedure code' },
  { value: 'M79', label: 'M79: Missing/incomplete charge amount' },
  { value: 'MA01', label: 'MA01: Missing/invalid claim info secondary payer' },
  { value: 'MA04', label: 'MA04: Secondary insurance not on file' },
  { value: 'MA07', label: 'MA07: Missing/incomplete physician info' },
  { value: 'MA83', label: 'MA83: Claim must include provider info' },
  { value: 'MA130', label: 'MA130: Missing/incomplete attending provider' },
];

const ruleCategories = [
  'Eligibility',
  'Authorization',
  'Medical Necessity',
  'Duplicate Detection',
  'Timely Filing',
  'Provider Validation',
  'Procedure Validation',
  'Coordination of Benefits',
  'Code Edits (NCCI/MUE)',
  'AI Confidence',
  'High Dollar Review',
  'Custom',
];

// Enhanced sample rules
const sampleRules: Rule[] = [
  // ============================================
  // PRIORITY 0 - ELIGIBILITY DENIALS (Run First)
  // ============================================
  {
    id: 'RULE-001',
    name: 'Member Not Eligible - Deny',
    description: 'Deny claims when member coverage is inactive, terminated, or pending',
    conditionGroups: [{
      logic: 'OR',
      conditions: [
        { field: 'member_status', operator: 'equals', value: 'Inactive' },
        { field: 'member_status', operator: 'equals', value: 'Terminated' },
      ]
    }],
    action: 'DENY',
    actionReason: 'Member not eligible for coverage on date of service',
    denialCode: 'CO-27',
    remarkCode: '',
    priority: 0,
    enabled: true,
    hitCount: 1234,
    lastTriggered: '5 min ago',
    createdAt: '2024-01-15',
    category: 'Eligibility',
  },
  {
    id: 'RULE-002',
    name: 'Duplicate Claim - Deny',
    description: 'Deny claims identified as exact duplicates of previously processed claims',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'is_duplicate', operator: 'is_true', value: '' },
        { field: 'is_resubmission', operator: 'is_false', value: '' },
      ]
    }],
    action: 'DENY',
    actionReason: 'Exact duplicate of previously processed claim',
    denialCode: 'CO-18',
    remarkCode: 'N522',
    priority: 0,
    enabled: true,
    hitCount: 567,
    lastTriggered: '15 min ago',
    createdAt: '2024-01-15',
    category: 'Duplicate Detection',
  },
  {
    id: 'RULE-003',
    name: 'Timely Filing Exceeded - Deny',
    description: 'Deny claims submitted more than 365 days after date of service',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'days_since_service', operator: 'greater_than', value: '365' },
      ]
    }],
    action: 'DENY',
    actionReason: 'Claim exceeds timely filing limit of 365 days from DOS',
    denialCode: 'CO-29',
    remarkCode: '',
    priority: 0,
    enabled: true,
    hitCount: 234,
    lastTriggered: '2 hours ago',
    createdAt: '2024-01-15',
    category: 'Timely Filing',
  },
  {
    id: 'RULE-004',
    name: 'Patient Deceased Before DOS - Deny',
    description: 'Deny claims where patient was deceased before date of service',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'patient_deceased', operator: 'is_true', value: '' },
      ]
    }],
    action: 'DENY',
    actionReason: 'Patient deceased - service date after death date',
    denialCode: 'CO-27',
    remarkCode: '',
    priority: 0,
    enabled: true,
    hitCount: 12,
    lastTriggered: '5 days ago',
    createdAt: '2024-01-15',
    category: 'Eligibility',
  },
  
  // ============================================
  // PRIORITY 1 - AUTHORIZATION DENIALS
  // ============================================
  {
    id: 'RULE-005',
    name: 'Missing Prior Authorization - Deny',
    description: 'Deny when procedure requires prior authorization but none is on file',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'requires_prior_auth', operator: 'is_true', value: '' },
        { field: 'has_prior_auth', operator: 'is_false', value: '' },
      ]
    }],
    action: 'DENY',
    actionReason: 'Service requires prior authorization - none on file',
    denialCode: 'CO-197',
    remarkCode: '',
    priority: 1,
    enabled: true,
    hitCount: 456,
    lastTriggered: '30 min ago',
    createdAt: '2024-01-15',
    category: 'Authorization',
  },
  {
    id: 'RULE-006',
    name: 'Invalid/Expired Prior Auth - Deny',
    description: 'Deny when prior authorization exists but is invalid or expired for DOS',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'requires_prior_auth', operator: 'is_true', value: '' },
        { field: 'has_prior_auth', operator: 'is_true', value: '' },
        { field: 'prior_auth_valid', operator: 'is_false', value: '' },
      ]
    }],
    action: 'DENY',
    actionReason: 'Prior authorization invalid or expired for date of service',
    denialCode: 'CO-15',
    remarkCode: '',
    priority: 1,
    enabled: true,
    hitCount: 189,
    lastTriggered: '3 hours ago',
    createdAt: '2024-01-15',
    category: 'Authorization',
  },
  {
    id: 'RULE-007',
    name: 'Exceeded Authorized Units - Deny',
    description: 'Deny when billed units exceed remaining authorized units',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'requires_prior_auth', operator: 'is_true', value: '' },
        { field: 'auth_units_remaining', operator: 'equals', value: '0' },
      ]
    }],
    action: 'DENY',
    actionReason: 'Units exceed authorized quantity - authorization exhausted',
    denialCode: 'CO-119',
    remarkCode: '',
    priority: 1,
    enabled: true,
    hitCount: 78,
    lastTriggered: '6 hours ago',
    createdAt: '2024-01-15',
    category: 'Authorization',
  },
  {
    id: 'RULE-008',
    name: 'Missing Referral - Deny',
    description: 'Deny when HMO plan requires referral but none is on file',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'plan_type', operator: 'equals', value: 'HMO' },
        { field: 'referral_required', operator: 'is_true', value: '' },
        { field: 'has_referral', operator: 'is_false', value: '' },
      ]
    }],
    action: 'DENY',
    actionReason: 'HMO plan requires referral - none on file',
    denialCode: 'CO-204',
    remarkCode: '',
    priority: 1,
    enabled: true,
    hitCount: 234,
    lastTriggered: '1 hour ago',
    createdAt: '2024-01-15',
    category: 'Authorization',
  },
  
  // ============================================
  // PRIORITY 1 - CODE EDIT DENIALS
  // ============================================
  {
    id: 'RULE-009',
    name: 'MUE Exceeded - Deny',
    description: 'Deny line items that exceed Medically Unlikely Edits (MUE) unit limits',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'mue_exceeded', operator: 'is_true', value: '' },
      ]
    }],
    action: 'DENY',
    actionReason: 'Units exceed MUE limit for procedure code',
    denialCode: 'CO-59',
    remarkCode: '',
    priority: 1,
    enabled: true,
    hitCount: 345,
    lastTriggered: '45 min ago',
    createdAt: '2024-01-15',
    category: 'Code Edits (NCCI/MUE)',
  },
  {
    id: 'RULE-010',
    name: 'NCCI Bundling Edit - Deny',
    description: 'Deny when NCCI edit indicates procedure is bundled with another',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'ncci_edit_triggered', operator: 'is_true', value: '' },
      ]
    }],
    action: 'DENY',
    actionReason: 'Service bundled with primary procedure per NCCI edits',
    denialCode: 'CO-97',
    remarkCode: 'M15',
    priority: 1,
    enabled: true,
    hitCount: 567,
    lastTriggered: '20 min ago',
    createdAt: '2024-01-15',
    category: 'Code Edits (NCCI/MUE)',
  },
  {
    id: 'RULE-011',
    name: 'Invalid Diagnosis Code - Deny',
    description: 'Deny when primary diagnosis code is invalid or truncated',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'primary_dx_valid', operator: 'is_false', value: '' },
      ]
    }],
    action: 'DENY',
    actionReason: 'Primary diagnosis code invalid - verify ICD-10 code',
    denialCode: 'CO-16',
    remarkCode: 'M20',
    priority: 1,
    enabled: true,
    hitCount: 123,
    lastTriggered: '4 hours ago',
    createdAt: '2024-01-15',
    category: 'Procedure Validation',
  },
  {
    id: 'RULE-012',
    name: 'Invalid Procedure Code - Deny',
    description: 'Deny when CPT/HCPCS code is invalid, deleted, or not effective for DOS',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'procedure_valid', operator: 'is_false', value: '' },
      ]
    }],
    action: 'DENY',
    actionReason: 'Procedure code invalid or not effective for date of service',
    denialCode: 'CO-16',
    remarkCode: 'N56',
    priority: 1,
    enabled: true,
    hitCount: 89,
    lastTriggered: '5 hours ago',
    createdAt: '2024-01-15',
    category: 'Procedure Validation',
  },
  {
    id: 'RULE-013',
    name: 'Diagnosis Does Not Support Procedure - Deny',
    description: 'Deny when primary diagnosis is not medically consistent with procedure',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'dx_supports_procedure', operator: 'is_false', value: '' },
      ]
    }],
    action: 'DENY',
    actionReason: 'Diagnosis does not support medical necessity of procedure',
    denialCode: 'CO-11',
    remarkCode: '',
    priority: 1,
    enabled: true,
    hitCount: 234,
    lastTriggered: '2 hours ago',
    createdAt: '2024-01-15',
    category: 'Medical Necessity',
  },
  
  // ============================================
  // PRIORITY 1 - NON-COVERED SERVICES
  // ============================================
  {
    id: 'RULE-014',
    name: 'Cosmetic Procedure - Deny',
    description: 'Deny procedures identified as cosmetic/elective without medical necessity',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'is_cosmetic', operator: 'is_true', value: '' },
      ]
    }],
    action: 'DENY',
    actionReason: 'Cosmetic procedure - not covered without documented medical necessity',
    denialCode: 'CO-50',
    remarkCode: '',
    priority: 1,
    enabled: true,
    hitCount: 67,
    lastTriggered: '1 day ago',
    createdAt: '2024-01-15',
    category: 'Medical Necessity',
  },
  {
    id: 'RULE-015',
    name: 'Experimental Procedure - Deny',
    description: 'Deny procedures classified as experimental or investigational',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'is_experimental', operator: 'is_true', value: '' },
      ]
    }],
    action: 'DENY',
    actionReason: 'Experimental/investigational procedure - not a covered benefit',
    denialCode: 'CO-50',
    remarkCode: '',
    priority: 1,
    enabled: true,
    hitCount: 23,
    lastTriggered: '3 days ago',
    createdAt: '2024-01-15',
    category: 'Medical Necessity',
  },
  
  // ============================================
  // PRIORITY 1 - EMERGENCY/COMPLIANCE APPROVALS
  // ============================================
  {
    id: 'RULE-016',
    name: 'Emergency OON - Auto Approve (No Surprises Act)',
    description: 'Auto-approve emergency services from OON providers per No Surprises Act',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'is_emergency', operator: 'is_true', value: '' },
        { field: 'provider_network_status', operator: 'equals', value: 'Out-of-Network' },
        { field: 'member_status', operator: 'equals', value: 'Active' },
      ]
    }],
    action: 'APPROVE',
    actionReason: 'Emergency services - OON covered per No Surprises Act compliance',
    priority: 1,
    enabled: true,
    hitCount: 156,
    lastTriggered: '6 hours ago',
    createdAt: '2024-01-15',
    category: 'Eligibility',
  },
  
  // ============================================
  // PRIORITY 2 - PEND FOR ADDITIONAL INFO
  // ============================================
  {
    id: 'RULE-017',
    name: 'Invalid Billing NPI - Pend',
    description: 'Pend claims where billing provider NPI fails NPPES validation',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'billing_npi_valid', operator: 'is_false', value: '' },
      ]
    }],
    action: 'PEND',
    actionReason: 'Billing provider NPI validation failed - verify NPPES',
    denialCode: 'CO-16',
    remarkCode: 'MA07',
    priority: 2,
    enabled: true,
    hitCount: 189,
    lastTriggered: '2 hours ago',
    createdAt: '2024-01-15',
    category: 'Provider Validation',
  },
  {
    id: 'RULE-018',
    name: 'Invalid Rendering NPI - Pend',
    description: 'Pend claims where rendering provider NPI fails NPPES validation',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'rendering_npi_valid', operator: 'is_false', value: '' },
      ]
    }],
    action: 'PEND',
    actionReason: 'Rendering provider NPI validation failed - verify NPPES',
    denialCode: 'CO-16',
    remarkCode: 'MA07',
    priority: 2,
    enabled: true,
    hitCount: 145,
    lastTriggered: '3 hours ago',
    createdAt: '2024-01-15',
    category: 'Provider Validation',
  },
  {
    id: 'RULE-019',
    name: 'Missing Required Fields - Pend',
    description: 'Pend claims missing required fields for adjudication',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'missing_required_fields', operator: 'is_true', value: '' },
      ]
    }],
    action: 'PEND',
    actionReason: 'Claim missing required information - request additional data',
    denialCode: 'CO-16',
    remarkCode: '',
    priority: 2,
    enabled: true,
    hitCount: 234,
    lastTriggered: '1 hour ago',
    createdAt: '2024-01-15',
    category: 'Procedure Validation',
  },
  {
    id: 'RULE-020',
    name: 'Missing Referring Provider - Pend',
    description: 'Pend claims requiring referring provider but field is missing',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'referral_required', operator: 'is_true', value: '' },
        { field: 'referring_provider_present', operator: 'is_false', value: '' },
      ]
    }],
    action: 'PEND',
    actionReason: 'Referring provider required but not provided on claim',
    denialCode: 'CO-16',
    remarkCode: 'N479',
    priority: 2,
    enabled: true,
    hitCount: 178,
    lastTriggered: '4 hours ago',
    createdAt: '2024-01-15',
    category: 'Provider Validation',
  },
  {
    id: 'RULE-021',
    name: 'Provider Not Enrolled - Pend',
    description: 'Pend claims from providers not enrolled with the payer',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'provider_enrolled', operator: 'is_false', value: '' },
      ]
    }],
    action: 'PEND',
    actionReason: 'Provider not enrolled - verify enrollment status',
    denialCode: 'CO-16',
    remarkCode: '',
    priority: 2,
    enabled: true,
    hitCount: 89,
    lastTriggered: '8 hours ago',
    createdAt: '2024-01-15',
    category: 'Provider Validation',
  },
  
  // ============================================
  // PRIORITY 3 - MANUAL REVIEW REQUIRED
  // ============================================
  {
    id: 'RULE-022',
    name: 'Low AI Confidence - Review',
    description: 'Route claims with low AI extraction confidence to manual data verification',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'ai_confidence_score', operator: 'less_than', value: '85' },
      ]
    }],
    action: 'REVIEW',
    actionReason: 'AI confidence below 85% - verify extracted data accuracy',
    priority: 3,
    enabled: true,
    hitCount: 1567,
    lastTriggered: '2 min ago',
    createdAt: '2024-01-15',
    category: 'AI Confidence',
  },
  {
    id: 'RULE-023',
    name: 'COB Secondary Payer - Review',
    description: 'Route secondary/tertiary payer claims to verify primary EOB',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'cob_indicator', operator: 'in_list', value: 'Secondary,Tertiary' },
      ]
    }],
    action: 'REVIEW',
    actionReason: 'COB claim - verify primary payer EOB and payment attached',
    priority: 3,
    enabled: true,
    hitCount: 678,
    lastTriggered: '30 min ago',
    createdAt: '2024-01-15',
    category: 'Coordination of Benefits',
  },
  {
    id: 'RULE-024',
    name: 'Workers Comp Indicator - Review',
    description: 'Route workers compensation claims for liability verification',
    conditionGroups: [{
      logic: 'OR',
      conditions: [
        { field: 'is_workers_comp', operator: 'is_true', value: '' },
        { field: 'accident_type', operator: 'equals', value: 'Work' },
      ]
    }],
    action: 'REVIEW',
    actionReason: 'Workers compensation indicated - verify liability',
    priority: 3,
    enabled: true,
    hitCount: 123,
    lastTriggered: '4 hours ago',
    createdAt: '2024-01-15',
    category: 'Coordination of Benefits',
  },
  {
    id: 'RULE-025',
    name: 'Auto Accident - Review',
    description: 'Route auto accident claims for liability and subrogation review',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'accident_type', operator: 'equals', value: 'Auto' },
      ]
    }],
    action: 'REVIEW',
    actionReason: 'Auto accident indicated - verify liability and subrogation',
    priority: 3,
    enabled: true,
    hitCount: 89,
    lastTriggered: '1 day ago',
    createdAt: '2024-01-15',
    category: 'Coordination of Benefits',
  },
  {
    id: 'RULE-026',
    name: 'Inpatient Long Stay - Review',
    description: 'Route inpatient claims with extended length of stay for review',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'claim_type', operator: 'equals', value: 'Institutional (837I)' },
        { field: 'length_of_stay', operator: 'greater_than', value: '14' },
      ]
    }],
    action: 'REVIEW',
    actionReason: 'Extended inpatient stay (>14 days) - medical necessity review',
    priority: 3,
    enabled: true,
    hitCount: 234,
    lastTriggered: '6 hours ago',
    createdAt: '2024-01-15',
    category: 'Medical Necessity',
  },
  {
    id: 'RULE-027',
    name: 'Out of Network (Non-Emergency) - Review',
    description: 'Route non-emergency OON claims for benefit verification',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'provider_network_status', operator: 'equals', value: 'Out-of-Network' },
        { field: 'is_emergency', operator: 'is_false', value: '' },
      ]
    }],
    action: 'REVIEW',
    actionReason: 'Out-of-network provider - verify OON benefits and allowable amount',
    priority: 3,
    enabled: true,
    hitCount: 456,
    lastTriggered: '1 hour ago',
    createdAt: '2024-01-15',
    category: 'Provider Validation',
  },
  {
    id: 'RULE-028',
    name: 'Multiple Surgery Modifier - Review',
    description: 'Route claims with modifier 51 (multiple surgeries) for payment reduction review',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'modifier_present', operator: 'contains_any', value: '51' },
      ]
    }],
    action: 'REVIEW',
    actionReason: 'Multiple surgery modifier - verify payment reduction applied',
    priority: 3,
    enabled: true,
    hitCount: 345,
    lastTriggered: '2 hours ago',
    createdAt: '2024-01-15',
    category: 'Procedure Validation',
  },
  {
    id: 'RULE-029',
    name: 'Bilateral Procedure Modifier - Review',
    description: 'Route claims with modifier 50 (bilateral) for payment calculation',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'modifier_present', operator: 'contains_any', value: '50' },
      ]
    }],
    action: 'REVIEW',
    actionReason: 'Bilateral modifier - verify 150% payment calculation',
    priority: 3,
    enabled: true,
    hitCount: 234,
    lastTriggered: '3 hours ago',
    createdAt: '2024-01-15',
    category: 'Procedure Validation',
  },
  {
    id: 'RULE-030',
    name: 'Corrected Claim Resubmission - Review',
    description: 'Route corrected/replacement claims for adjustment processing',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'is_resubmission', operator: 'is_true', value: '' },
      ]
    }],
    action: 'REVIEW',
    actionReason: 'Corrected claim - verify changes and process adjustment',
    priority: 3,
    enabled: true,
    hitCount: 189,
    lastTriggered: '5 hours ago',
    createdAt: '2024-01-15',
    category: 'Duplicate Detection',
  },
  
  // ============================================
  // PRIORITY 5 - HIGH DOLLAR REVIEW
  // ============================================
  {
    id: 'RULE-031',
    name: 'High Dollar Claim ($10K+) - Review',
    description: 'Route claims over $10,000 to manual review queue',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'billed_amount', operator: 'greater_than', value: '10000' },
      ]
    }],
    action: 'REVIEW',
    actionReason: 'High dollar claim (>$10K) - requires additional review',
    priority: 5,
    enabled: true,
    hitCount: 567,
    lastTriggered: '30 min ago',
    createdAt: '2024-01-15',
    category: 'High Dollar Review',
  },
  {
    id: 'RULE-032',
    name: 'Very High Dollar Claim ($50K+) - Review',
    description: 'Route claims over $50,000 to senior reviewer queue',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'billed_amount', operator: 'greater_than', value: '50000' },
      ]
    }],
    action: 'REVIEW',
    actionReason: 'Very high dollar claim (>$50K) - senior reviewer required',
    priority: 5,
    enabled: true,
    hitCount: 89,
    lastTriggered: '1 day ago',
    createdAt: '2024-01-15',
    category: 'High Dollar Review',
  },
  
  // ============================================
  // PRIORITY 10 - AUTO-APPROVE (Clean Claims)
  // ============================================
  {
    id: 'RULE-033',
    name: 'Clean Claim - Auto Approve',
    description: 'Auto-approve clean claims with high confidence, active member, valid provider, low dollar',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'ai_confidence_score', operator: 'greater_or_equal', value: '95' },
        { field: 'billed_amount', operator: 'less_than', value: '2500' },
        { field: 'has_validation_errors', operator: 'is_false', value: '' },
        { field: 'member_status', operator: 'equals', value: 'Active' },
        { field: 'provider_network_status', operator: 'equals', value: 'In-Network' },
        { field: 'billing_npi_valid', operator: 'is_true', value: '' },
        { field: 'is_duplicate', operator: 'is_false', value: '' },
      ]
    }],
    action: 'APPROVE',
    actionReason: 'Clean claim meeting all auto-approval criteria',
    priority: 10,
    enabled: true,
    hitCount: 8934,
    lastTriggered: '30 sec ago',
    createdAt: '2024-01-15',
    category: 'AI Confidence',
  },
  {
    id: 'RULE-034',
    name: 'Preventive Care E&M - Auto Approve',
    description: 'Auto-approve preventive care E&M visits (wellness exams)',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'procedure_category', operator: 'equals', value: 'Preventive' },
        { field: 'member_status', operator: 'equals', value: 'Active' },
        { field: 'provider_network_status', operator: 'equals', value: 'In-Network' },
        { field: 'ai_confidence_score', operator: 'greater_or_equal', value: '90' },
      ]
    }],
    action: 'APPROVE',
    actionReason: 'Preventive care service - covered at 100% with no cost share',
    priority: 10,
    enabled: true,
    hitCount: 2345,
    lastTriggered: '10 min ago',
    createdAt: '2024-01-15',
    category: 'Eligibility',
  },
  {
    id: 'RULE-035',
    name: 'Lab/Pathology - Auto Approve',
    description: 'Auto-approve routine lab and pathology claims from in-network providers',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'procedure_category', operator: 'equals', value: 'Pathology/Lab' },
        { field: 'member_status', operator: 'equals', value: 'Active' },
        { field: 'provider_network_status', operator: 'equals', value: 'In-Network' },
        { field: 'billed_amount', operator: 'less_than', value: '1000' },
        { field: 'ai_confidence_score', operator: 'greater_or_equal', value: '90' },
      ]
    }],
    action: 'APPROVE',
    actionReason: 'Routine lab/pathology - auto-approved',
    priority: 10,
    enabled: true,
    hitCount: 4567,
    lastTriggered: '5 min ago',
    createdAt: '2024-01-15',
    category: 'AI Confidence',
  },
  {
    id: 'RULE-036',
    name: 'Office Visit E&M - Auto Approve',
    description: 'Auto-approve standard office visits (99211-99215) from in-network providers',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'procedure_category', operator: 'equals', value: 'E&M' },
        { field: 'place_of_service', operator: 'equals', value: '11 - Office' },
        { field: 'member_status', operator: 'equals', value: 'Active' },
        { field: 'provider_network_status', operator: 'equals', value: 'In-Network' },
        { field: 'billed_amount', operator: 'less_than', value: '500' },
        { field: 'ai_confidence_score', operator: 'greater_or_equal', value: '92' },
      ]
    }],
    action: 'APPROVE',
    actionReason: 'Standard office E&M visit - auto-approved',
    priority: 10,
    enabled: true,
    hitCount: 6789,
    lastTriggered: '1 min ago',
    createdAt: '2024-01-15',
    category: 'AI Confidence',
  },
  {
    id: 'RULE-037',
    name: 'Telehealth Visit - Auto Approve',
    description: 'Auto-approve telehealth visits from enrolled providers',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'procedure_category', operator: 'equals', value: 'Telehealth' },
        { field: 'member_status', operator: 'equals', value: 'Active' },
        { field: 'provider_enrolled', operator: 'is_true', value: '' },
        { field: 'ai_confidence_score', operator: 'greater_or_equal', value: '90' },
      ]
    }],
    action: 'APPROVE',
    actionReason: 'Telehealth visit - auto-approved',
    priority: 10,
    enabled: true,
    hitCount: 1234,
    lastTriggered: '15 min ago',
    createdAt: '2024-01-15',
    category: 'AI Confidence',
  },
  
  // ============================================
  // PRIORITY 15 - DEPENDENT AGE LIMITS
  // ============================================
  {
    id: 'RULE-038',
    name: 'Dependent Over Age 26 - Deny',
    description: 'Deny claims for dependents over age 26 (ACA limit)',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'subscriber_relationship', operator: 'equals', value: 'Child' },
        { field: 'member_age', operator: 'greater_than', value: '26' },
      ]
    }],
    action: 'DENY',
    actionReason: 'Dependent over age 26 - not eligible for coverage',
    denialCode: 'CO-27',
    remarkCode: '',
    priority: 15,
    enabled: true,
    hitCount: 45,
    lastTriggered: '2 days ago',
    createdAt: '2024-01-15',
    category: 'Eligibility',
  },
  {
    id: 'RULE-039',
    name: 'Pediatric Service on Adult - Review',
    description: 'Review pediatric-specific services billed for patients over 18',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'provider_specialty', operator: 'equals', value: 'Pediatrics' },
        { field: 'member_age', operator: 'greater_than', value: '18' },
      ]
    }],
    action: 'REVIEW',
    actionReason: 'Pediatric service for adult patient - verify appropriateness',
    priority: 15,
    enabled: true,
    hitCount: 67,
    lastTriggered: '1 day ago',
    createdAt: '2024-01-15',
    category: 'Medical Necessity',
  },
  {
    id: 'RULE-040',
    name: 'OB/GYN on Male Patient - Deny',
    description: 'Deny OB/GYN procedures billed for male patients',
    conditionGroups: [{
      logic: 'AND',
      conditions: [
        { field: 'provider_specialty', operator: 'equals', value: 'OB/GYN' },
        { field: 'member_gender', operator: 'equals', value: 'Male' },
      ]
    }],
    action: 'DENY',
    actionReason: 'Gender-specific procedure inconsistent with patient gender',
    denialCode: 'CO-11',
    remarkCode: '',
    priority: 15,
    enabled: true,
    hitCount: 12,
    lastTriggered: '1 week ago',
    createdAt: '2024-01-15',
    category: 'Procedure Validation',
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

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
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

function ActionBadge({ action }: { action: 'APPROVE' | 'DENY' | 'REVIEW' | 'PEND' }) {
  const styles = {
    APPROVE: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    DENY: 'bg-red-100 text-red-700 border-red-200',
    REVIEW: 'bg-amber-100 text-amber-700 border-amber-200',
    PEND: 'bg-blue-100 text-blue-700 border-blue-200',
  };
  
  const icons = {
    APPROVE: '✓',
    DENY: '✗',
    REVIEW: '⚠',
    PEND: '⏸',
  };
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border ${styles[action]}`}>
      <span>{icons[action]}</span>
      {action}
    </span>
  );
}

function CategoryBadge({ category }: { category: string }) {
  const colors: Record<string, string> = {
    'Eligibility': 'bg-purple-50 text-purple-700',
    'Authorization': 'bg-blue-50 text-blue-700',
    'Medical Necessity': 'bg-cyan-50 text-cyan-700',
    'Duplicate Detection': 'bg-orange-50 text-orange-700',
    'Timely Filing': 'bg-rose-50 text-rose-700',
    'Provider Validation': 'bg-teal-50 text-teal-700',
    'Procedure Validation': 'bg-indigo-50 text-indigo-700',
    'Coordination of Benefits': 'bg-pink-50 text-pink-700',
    'Code Edits (NCCI/MUE)': 'bg-yellow-50 text-yellow-700',
    'AI Confidence': 'bg-violet-50 text-violet-700',
    'High Dollar Review': 'bg-emerald-50 text-emerald-700',
    'Custom': 'bg-slate-100 text-slate-700',
  };
  
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${colors[category] || 'bg-slate-100 text-slate-700'}`}>
      {category}
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
  const [conditionGroups, setConditionGroups] = useState<ConditionGroup[]>(
    rule?.conditionGroups || [{ logic: 'AND', conditions: [{ field: 'ai_confidence_score', operator: 'greater_or_equal', value: '95' }] }]
  );
  const [action, setAction] = useState<'APPROVE' | 'DENY' | 'REVIEW' | 'PEND'>(rule?.action || 'APPROVE');
  const [selectedCategory, setSelectedCategory] = useState(rule?.category || 'Custom');
  const [activeFieldCategory, setActiveFieldCategory] = useState('AI & Confidence');
  
  if (!isOpen) return null;
  
  const addCondition = (groupIndex: number) => {
    const newGroups = [...conditionGroups];
    newGroups[groupIndex].conditions.push({ field: 'billed_amount', operator: 'less_than', value: '' });
    setConditionGroups(newGroups);
  };
  
  const removeCondition = (groupIndex: number, condIndex: number) => {
    const newGroups = [...conditionGroups];
    newGroups[groupIndex].conditions = newGroups[groupIndex].conditions.filter((_, i) => i !== condIndex);
    if (newGroups[groupIndex].conditions.length === 0) {
      newGroups.splice(groupIndex, 1);
    }
    setConditionGroups(newGroups.length ? newGroups : [{ logic: 'AND', conditions: [{ field: 'ai_confidence_score', operator: 'greater_or_equal', value: '95' }] }]);
  };
  
  const addConditionGroup = () => {
    setConditionGroups([...conditionGroups, { logic: 'OR', conditions: [{ field: 'member_status', operator: 'equals', value: 'Active' }] }]);
  };
  
  const getFieldInfo = (fieldValue: string) => {
    return conditionFields.find(f => f.value === fieldValue);
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-hidden m-4 flex flex-col">
        {/* Header */}
        <div className="flex-shrink-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              {rule ? 'Edit Rule' : 'Create Adjudication Rule'}
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">Define conditions and actions for automated claim processing</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <XIcon className="w-5 h-5 text-slate-500" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Rule Name *</label>
              <input
                type="text"
                defaultValue={rule?.name}
                placeholder="e.g., Missing Prior Auth - Deny"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
              >
                {ruleCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Description</label>
            <textarea
              defaultValue={rule?.description}
              placeholder="Describe when this rule should apply and why..."
              rows={2}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
            />
          </div>
          
          {/* Condition Groups */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <label className="text-sm font-semibold text-slate-900">Conditions</label>
                <p className="text-xs text-slate-500">Define when this rule should trigger. Groups are evaluated with OR logic, conditions within a group use the selected logic.</p>
              </div>
              <button 
                onClick={addConditionGroup}
                className="text-sm text-primary font-medium hover:text-primary-dark flex items-center gap-1"
              >
                <PlusIcon className="w-4 h-4" /> Add OR Group
              </button>
            </div>
            
            <div className="space-y-4">
              {conditionGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="border border-slate-200 rounded-xl overflow-hidden">
                  {/* Group Header */}
                  {conditionGroups.length > 1 && (
                    <div className="bg-slate-50 px-4 py-2 flex items-center justify-between border-b border-slate-200">
                      <div className="flex items-center gap-3">
                        {groupIndex > 0 && (
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">OR</span>
                        )}
                        <span className="text-xs font-medium text-slate-500">Group {groupIndex + 1}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <label className="text-xs text-slate-500">Logic:</label>
                        <select
                          value={group.logic}
                          onChange={(e) => {
                            const newGroups = [...conditionGroups];
                            newGroups[groupIndex].logic = e.target.value as 'AND' | 'OR';
                            setConditionGroups(newGroups);
                          }}
                          className="text-xs px-2 py-1 border border-slate-200 rounded bg-white"
                        >
                          <option value="AND">AND (all must match)</option>
                          <option value="OR">OR (any can match)</option>
                        </select>
                      </div>
                    </div>
                  )}
                  
                  {/* Conditions */}
                  <div className="p-4 space-y-3">
                    {group.conditions.map((condition, condIndex) => {
                      const fieldInfo = getFieldInfo(condition.field);
                      const fieldType = fieldInfo?.type || 'string';
                      
                      return (
                        <div key={condIndex} className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
                          <span className="text-xs text-slate-500 font-medium w-10">
                            {condIndex === 0 ? 'IF' : group.logic}
                          </span>
                          
                          {/* Field Select with Categories */}
                          <select 
                            value={condition.field}
                            onChange={(e) => {
                              const newGroups = [...conditionGroups];
                              newGroups[groupIndex].conditions[condIndex].field = e.target.value;
                              newGroups[groupIndex].conditions[condIndex].operator = 'equals';
                              newGroups[groupIndex].conditions[condIndex].value = '';
                              setConditionGroups(newGroups);
                            }}
                            className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                          >
                            {conditionFieldCategories.map(cat => (
                              <optgroup key={cat.category} label={cat.category}>
                                {cat.fields.map(f => (
                                  <option key={f.value} value={f.value}>{f.label}</option>
                                ))}
                              </optgroup>
                            ))}
                          </select>
                          
                          {/* Operator Select */}
                          <select 
                            value={condition.operator}
                            onChange={(e) => {
                              const newGroups = [...conditionGroups];
                              newGroups[groupIndex].conditions[condIndex].operator = e.target.value;
                              setConditionGroups(newGroups);
                            }}
                            className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 min-w-[140px]"
                          >
                            {operators[fieldType as keyof typeof operators]?.map(op => (
                              <option key={op.value} value={op.value}>{op.label}</option>
                            ))}
                          </select>
                          
                          {/* Value Input */}
                          {fieldType === 'boolean' ? null : fieldType === 'enum' ? (
                            <select 
                              value={condition.value}
                              onChange={(e) => {
                                const newGroups = [...conditionGroups];
                                newGroups[groupIndex].conditions[condIndex].value = e.target.value;
                                setConditionGroups(newGroups);
                              }}
                              className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                            >
                              <option value="">Select...</option>
                              {fieldInfo?.options?.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          ) : fieldType === 'multi-enum' ? (
                            <select 
                              multiple
                              value={condition.value ? condition.value.split(',') : []}
                              onChange={(e) => {
                                const newGroups = [...conditionGroups];
                                const selected = Array.from(e.target.selectedOptions, opt => opt.value);
                                newGroups[groupIndex].conditions[condIndex].value = selected.join(',');
                                setConditionGroups(newGroups);
                              }}
                              className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[80px]"
                            >
                              {fieldInfo?.options?.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          ) : condition.operator === 'between' ? (
                            <div className="flex items-center gap-2">
                              <input
                                type={fieldType === 'number' ? 'number' : fieldType === 'date' ? 'date' : 'text'}
                                value={condition.value}
                                onChange={(e) => {
                                  const newGroups = [...conditionGroups];
                                  newGroups[groupIndex].conditions[condIndex].value = e.target.value;
                                  setConditionGroups(newGroups);
                                }}
                                placeholder="Min"
                                className="w-24 px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                              />
                              <span className="text-slate-400">to</span>
                              <input
                                type={fieldType === 'number' ? 'number' : fieldType === 'date' ? 'date' : 'text'}
                                value={condition.value2 || ''}
                                onChange={(e) => {
                                  const newGroups = [...conditionGroups];
                                  newGroups[groupIndex].conditions[condIndex].value2 = e.target.value;
                                  setConditionGroups(newGroups);
                                }}
                                placeholder="Max"
                                className="w-24 px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                              />
                            </div>
                          ) : (
                            <input
                              type={fieldType === 'number' ? 'number' : fieldType === 'date' ? 'date' : 'text'}
                              value={condition.value}
                              onChange={(e) => {
                                const newGroups = [...conditionGroups];
                                newGroups[groupIndex].conditions[condIndex].value = e.target.value;
                                setConditionGroups(newGroups);
                              }}
                              placeholder={fieldInfo?.placeholder || (fieldType === 'number' ? '0' : 'Value')}
                              className="w-32 px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                          )}
                          
                          {fieldInfo?.unit && (
                            <span className="text-xs text-slate-400">{fieldInfo.unit}</span>
                          )}
                          
                          <button 
                            onClick={() => removeCondition(groupIndex, condIndex)}
                            className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                          >
                            <XIcon className="w-4 h-4" />
                          </button>
                        </div>
                      );
                    })}
                    
                    <button 
                      onClick={() => addCondition(groupIndex)}
                      className="w-full py-2 border-2 border-dashed border-slate-200 rounded-lg text-sm text-slate-500 hover:border-primary hover:text-primary transition-colors"
                    >
                      + Add Condition
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Action */}
          <div>
            <label className="text-sm font-semibold text-slate-900 mb-3 block">Then Take Action</label>
            <div className="grid grid-cols-4 gap-3">
              {(['APPROVE', 'DENY', 'REVIEW', 'PEND'] as const).map((act) => (
                <button
                  key={act}
                  onClick={() => setAction(act)}
                  className={`
                    p-4 rounded-xl border-2 text-center transition-all
                    ${action === act 
                      ? act === 'APPROVE' ? 'border-emerald-500 bg-emerald-50' 
                        : act === 'DENY' ? 'border-red-500 bg-red-50'
                        : act === 'REVIEW' ? 'border-amber-500 bg-amber-50'
                        : 'border-blue-500 bg-blue-50'
                      : 'border-slate-200 hover:border-slate-300'
                    }
                  `}
                >
                  <div className={`text-2xl mb-1 ${
                    act === 'APPROVE' ? 'text-emerald-600' 
                    : act === 'DENY' ? 'text-red-600' 
                    : act === 'REVIEW' ? 'text-amber-600'
                    : 'text-blue-600'
                  }`}>
                    {act === 'APPROVE' ? '✓' : act === 'DENY' ? '✗' : act === 'REVIEW' ? '⚠' : '⏸'}
                  </div>
                  <div className="text-sm font-semibold text-slate-700">{act}</div>
                  <div className="text-xs text-slate-500 mt-1">
                    {act === 'APPROVE' ? 'Auto-approve' : act === 'DENY' ? 'Reject claim' : act === 'REVIEW' ? 'Manual queue' : 'Hold for info'}
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Action Details */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Action Reason / Summary *</label>
              <input
                type="text"
                defaultValue={rule?.actionReason}
                placeholder="e.g., Clean claim meeting auto-approval criteria"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            
            {(action === 'DENY' || action === 'PEND') && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    CARC Denial Code {action === 'DENY' ? '*' : ''}
                  </label>
                  <select 
                    defaultValue={rule?.denialCode}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                  >
                    {denialCodes.map(code => (
                      <option key={code.value} value={code.value}>
                        {code.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-slate-500 mt-1">Claim Adjustment Reason Code (X12 835)</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">RARC Remark Code</label>
                  <select 
                    defaultValue={rule?.remarkCode}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                  >
                    {remarkCodes.map(code => (
                      <option key={code.value} value={code.value}>
                        {code.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-slate-500 mt-1">Remittance Advice Remark Code (optional)</p>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Priority</label>
                <input
                  type="number"
                  defaultValue={rule?.priority || 5}
                  min={0}
                  max={99}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <p className="text-xs text-slate-500 mt-1">0 = highest priority (evaluated first)</p>
              </div>
              <div className="flex items-center gap-3 pt-6">
                <input type="checkbox" id="enabled" defaultChecked={rule?.enabled ?? true} className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" />
                <label htmlFor="enabled" className="text-sm font-medium text-slate-700">Rule is active</label>
              </div>
              <div className="flex items-center gap-3 pt-6">
                <input type="checkbox" id="stopProcessing" className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" />
                <label htmlFor="stopProcessing" className="text-sm font-medium text-slate-700">Stop processing on match</label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex-shrink-0 bg-white border-t border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              <PlayIcon className="w-4 h-4" />
              Test Rule
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              <CopyIcon className="w-4 h-4" />
              Duplicate
            </button>
          </div>
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
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterAction, setFilterAction] = useState('all');
  
  const openCreateModal = () => {
    setEditingRule(undefined);
    setShowModal(true);
  };
  
  const openEditModal = (rule: Rule) => {
    setEditingRule(rule);
    setShowModal(true);
  };
  
  const filteredRules = rules.filter(rule => {
    if (filterCategory !== 'all' && rule.category !== filterCategory) return false;
    if (filterAction !== 'all' && rule.action !== filterAction) return false;
    return true;
  });
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Adjudication Rules Engine</h2>
          <p className="text-sm text-slate-500 mt-1">Configure rules for automated claim processing, validation, and routing</p>
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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Total Rules</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{rules.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Active Rules</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">{rules.filter(r => r.enabled).length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Auto-Approve</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">{rules.filter(r => r.action === 'APPROVE').length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Auto-Deny</p>
          <p className="text-2xl font-bold text-red-600 mt-1">{rules.filter(r => r.action === 'DENY').length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Rules Triggered Today</p>
          <p className="text-2xl font-bold text-primary mt-1">8,234</p>
        </div>
      </div>
      
      {/* Rule Evaluation Order Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <span className="text-blue-600 text-xl">ℹ️</span>
          <div>
            <p className="text-sm font-medium text-blue-900">Rule Evaluation Order</p>
            <p className="text-sm text-blue-700 mt-1">
              Rules are evaluated in priority order (0 = highest). First matching rule wins unless "continue processing" is enabled.
              DENY rules at priority 0 run first to catch eligibility issues before other processing.
            </p>
          </div>
        </div>
      </div>
      
      {/* Filter Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px] relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search rules by name, description, or denial code..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <select 
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="all">All Categories</option>
            {ruleCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select 
            value={filterAction}
            onChange={(e) => setFilterAction(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="all">All Actions</option>
            <option value="APPROVE">APPROVE</option>
            <option value="DENY">DENY</option>
            <option value="REVIEW">REVIEW</option>
            <option value="PEND">PEND</option>
          </select>
        </div>
      </div>
      
      {/* Rules List */}
      <div className="space-y-4">
        {filteredRules.sort((a, b) => a.priority - b.priority).map((rule) => (
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
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-mono rounded">P{rule.priority}</span>
                    <h3 className="text-lg font-semibold text-slate-900">{rule.name}</h3>
                    <ActionBadge action={rule.action} />
                    <CategoryBadge category={rule.category} />
                    {!rule.enabled && (
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs rounded-full">Disabled</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 mb-4">{rule.description}</p>
                  
                  {/* Conditions */}
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-semibold text-slate-400 uppercase">Conditions:</span>
                    {rule.conditionGroups.map((group, gi) => (
                      <div key={gi} className="flex items-center gap-1">
                        {gi > 0 && <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">OR</span>}
                        <span className="text-xs text-slate-400">(</span>
                        {group.conditions.map((cond, ci) => {
                          const field = conditionFields.find(f => f.value === cond.field);
                          return (
                            <span key={ci} className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg">
                              {ci > 0 && <span className="text-slate-400 mr-1">{group.logic}</span>}
                              <span className="font-medium">{field?.label || cond.field}</span>
                              <span className="text-slate-500">{cond.operator.replace(/_/g, ' ')}</span>
                              {cond.value && <span className="font-semibold">{cond.value}{cond.value2 ? `-${cond.value2}` : ''}</span>}
                            </span>
                          );
                        })}
                        <span className="text-xs text-slate-400">)</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button 
                    onClick={() => openEditModal(rule)}
                    className="p-2 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg transition-colors"
                    title="Edit rule"
                  >
                    <CogIcon className="w-5 h-5" />
                  </button>
                  <button 
                    className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                    title="Duplicate rule"
                  >
                    <CopyIcon className="w-5 h-5" />
                  </button>
                  <button 
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete rule"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                  <label className="relative inline-flex items-center cursor-pointer ml-2">
                    <input type="checkbox" checked={rule.enabled} className="sr-only peer" readOnly />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-6">
                <span>Hits today: <strong className="text-slate-700">{rule.hitCount.toLocaleString()}</strong></span>
                {rule.lastTriggered && <span>Last triggered: <strong className="text-slate-700">{rule.lastTriggered}</strong></span>}
                <span>Created: <strong className="text-slate-700">{rule.createdAt}</strong></span>
              </div>
              <div className="flex items-center gap-3">
                {rule.denialCode && (
                  <span className="font-mono text-red-600 bg-red-50 px-2 py-0.5 rounded">{rule.denialCode}</span>
                )}
                {rule.remarkCode && (
                  <span className="font-mono text-amber-600 bg-amber-50 px-2 py-0.5 rounded">{rule.remarkCode}</span>
                )}
              </div>
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
