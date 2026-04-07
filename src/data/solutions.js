import {
    Baby,
    Building2,
    Car,
    Users,
    Calculator,
    MessageSquare,
    Phone,
    Clock,
    Sparkles,
    GraduationCap
} from 'lucide-react';

export const solutions = [
    {
        id: 'ivf-software',
        title: 'IVF Software',
        icon: Baby,
        shortDescription: 'Comprehensive fertility clinic management system for IVF centers.',
        content: {
            introduction: `Our IVF Software is a complete solution designed specifically for fertility clinics and IVF centers. It streamlines patient management, treatment cycles, laboratory operations, and billing processes, allowing medical professionals to focus on what matters most - helping families grow.`,
            features: [
                'Patient Registration & Medical History',
                'Treatment Cycle Management',
                'Laboratory & Embryology Tracking',
                'Appointment Scheduling',
                'Billing & Insurance Management',
                'Reports & Analytics',
                'HIPAA Compliant Security',
                'Multi-location Support'
            ],
            benefits: [
                'Improved patient care and satisfaction',
                'Streamlined clinic operations',
                'Better treatment outcome tracking',
                'Reduced administrative workload',
                'Enhanced data security and compliance'
            ]
        }
    },
    {
        id: 'real-estate-software',
        title: 'Property Management Software',
        icon: Building2,
        shortDescription: 'Complete property management and real estate CRM solution.',
        content: {
            introduction: `Our Property Management Software is a powerful platform designed for property developers, real estate agencies, and property management companies. It helps manage properties, leads, sales, rentals, and customer relationships all in one place.`,
            features: [
                'Property Listing Management',
                'Lead & Customer CRM',
                'Sales & Rental Tracking',
                'Document Management',
                'Payment & Commission Tracking',
                'Agent Performance Dashboard',
                'Marketing Campaign Tools',
                'Mobile App Integration'
            ],
            benefits: [
                'Centralized property database',
                'Improved lead conversion rates',
                'Automated follow-ups and reminders',
                'Better team collaboration',
                'Data-driven decision making'
            ]
        }
    },
    {
        id: 'auto-garage-software',
        title: 'Auto Garage / Workshop Software',
        icon: Car,
        shortDescription: 'Efficient workshop management system for auto repair shops.',
        content: {
            introduction: `Our Auto Garage Software is designed to help auto repair shops and workshops manage their daily operations efficiently. From job cards to inventory management, billing to customer tracking - everything is automated and organized.`,
            features: [
                'Job Card Management',
                'Vehicle Service History',
                'Inventory & Parts Management',
                'Technician Assignment & Tracking',
                'Billing & Invoicing',
                'Customer Database',
                'SMS & Email Notifications',
                'Reports & Analytics'
            ],
            benefits: [
                'Faster service delivery',
                'Reduced errors and rework',
                'Better inventory control',
                'Improved customer satisfaction',
                'Increased profitability'
            ]
        }
    },
    {
        id: 'hr-payroll-software',
        title: 'HR & Payroll Software',
        icon: Users,
        shortDescription: 'Complete HR management and payroll processing solution.',
        content: {
            introduction: `Our HR & Payroll Software is a comprehensive solution for managing your workforce. It handles everything from employee onboarding to payroll processing, leave management to performance reviews, making HR operations seamless and efficient.`,
            features: [
                'Employee Database Management',
                'Attendance & Leave Management',
                'Payroll Processing',
                'Tax Calculations & Compliance',
                'Performance Management',
                'Recruitment & Onboarding',
                'Employee Self-Service Portal',
                'Reports & Analytics'
            ],
            benefits: [
                'Automated payroll processing',
                'Compliance with labor laws',
                'Reduced HR administrative work',
                'Better employee engagement',
                'Data-driven HR decisions'
            ]
        }
    },
    {
        id: 'accounting-inventory-software',
        title: 'Accounting & Inventory Software',
        icon: Calculator,
        shortDescription: 'Integrated accounting and inventory management system.',
        content: {
            introduction: `Our Accounting & Inventory Software provides a complete financial management solution for businesses. It combines powerful accounting features with robust inventory management, helping you maintain accurate financial records and optimal stock levels.`,
            features: [
                'General Ledger & Chart of Accounts',
                'Accounts Payable & Receivable',
                'Inventory Tracking & Management',
                'Purchase & Sales Management',
                'Bank Reconciliation',
                'Financial Reporting',
                'Multi-currency Support',
                'Tax Management'
            ],
            benefits: [
                'Real-time financial visibility',
                'Accurate inventory tracking',
                'Reduced stock-outs and overstocking',
                'Simplified tax compliance',
                'Better cash flow management'
            ]
        }
    },
    {
        id: 'bulk-sms-software',
        title: 'Bulk SMS Software',
        icon: MessageSquare,
        shortDescription: 'Powerful bulk SMS platform for marketing campaigns.',
        content: {
            introduction: `Our Bulk SMS Software is a robust platform for sending mass SMS campaigns to your customers. Perfect for marketing, notifications, alerts, and customer engagement, it offers high delivery rates and comprehensive analytics.`,
            features: [
                'Bulk SMS Sending',
                'Contact List Management',
                'SMS Templates',
                'Scheduled Messaging',
                'Delivery Reports',
                'API Integration',
                'Personalized Messages',
                'Campaign Analytics'
            ],
            benefits: [
                'Instant customer reach',
                'High open rates',
                'Cost-effective marketing',
                'Automated campaigns',
                'Detailed performance tracking'
            ]
        }
    },
    {
        id: 'call-monitoring-software',
        title: 'Call Monitoring Software',
        icon: Phone,
        shortDescription: 'Advanced call center monitoring and quality assurance system.',
        content: {
            introduction: `Our Call Monitoring Software helps businesses monitor, record, and analyze customer calls for quality assurance and training purposes. It provides valuable insights into customer interactions and agent performance.`,
            features: [
                'Call Recording',
                'Live Call Monitoring',
                'Quality Scoring',
                'Agent Performance Tracking',
                'Call Analytics & Reports',
                'Speech Analytics',
                'Compliance Monitoring',
                'Training & Coaching Tools'
            ],
            benefits: [
                'Improved customer service quality',
                'Better agent training',
                'Compliance assurance',
                'Dispute resolution',
                'Performance optimization'
            ]
        }
    },
    {
        id: 'time-attendance-software',
        title: 'Time Attendance Software',
        icon: Clock,
        shortDescription: 'Automated employee time tracking and attendance management.',
        content: {
            introduction: `Our Time Attendance Software automates the process of tracking employee working hours, attendance, and leaves. It integrates with biometric devices and provides accurate data for payroll processing.`,
            features: [
                'Biometric Integration',
                'Clock In/Out Tracking',
                'Shift Management',
                'Overtime Calculation',
                'Leave Management',
                'Attendance Reports',
                'Mobile App Support',
                'Payroll Integration'
            ],
            benefits: [
                'Accurate time tracking',
                'Reduced time theft',
                'Automated attendance records',
                'Simplified payroll processing',
                'Better workforce management'
            ]
        }
    },
    {
        id: 'cleaning-software',
        title: 'Cleaning Software',
        icon: Sparkles,
        shortDescription: 'Complete management solution for cleaning service companies.',
        content: {
            introduction: `Our Cleaning Software is designed for cleaning service companies to manage their operations efficiently. From scheduling jobs to tracking staff, managing clients to invoicing - everything is streamlined in one platform.`,
            features: [
                'Job Scheduling & Assignment',
                'Staff Management',
                'Client Database',
                'Route Optimization',
                'Invoicing & Payments',
                'Quality Checklists',
                'Mobile App for Staff',
                'Reports & Analytics'
            ],
            benefits: [
                'Optimized scheduling',
                'Better resource utilization',
                'Improved service quality',
                'Faster invoicing',
                'Enhanced customer satisfaction'
            ]
        }
    },
    {
        id: 'school-nursery-software',
        title: 'School / Nursery Software',
        icon: GraduationCap,
        shortDescription: 'Comprehensive school management system for educational institutions.',
        content: {
            introduction: `Our School/Nursery Software is a complete management system for educational institutions. It handles student admissions, attendance, academics, fees, communication, and more, making school administration effortless.`,
            features: [
                'Student Admission & Registration',
                'Attendance Management',
                'Academic Records & Grades',
                'Fee Management',
                'Timetable & Scheduling',
                'Parent Communication Portal',
                'Library Management',
                'Transport Management',
                'Reports & Analytics'
            ],
            benefits: [
                'Streamlined administration',
                'Better parent-teacher communication',
                'Accurate academic records',
                'Simplified fee collection',
                'Data-driven insights'
            ]
        }
    }
];

export default solutions;
