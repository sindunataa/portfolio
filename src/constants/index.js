import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  php,
  html,
  css,
  reactjs,
  mysql,
  tailwind,
  nodejs,
  git,
  figma,
  nextjs,
  laravel,
  python,
  peparprov,
  imagestock,
  wina,
  xynpict,
  portfolio,
  nyeusi,
  space,
  coverhunt,
  dcc,
  sevenpion,
  balitower,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'SQL Query',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'My SQL',
    icon: mysql,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Laravel',
    icon: laravel,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'nextjs',
    icon: nextjs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Backend Developer Internship',
    company_name: 'PT Semesta Ruang Inovasi',
    icon: sevenpion,
    iconBg: '#333333',
    date: 'Sept 2022 - Jan 2023',
  },
  {
    title: 'Fullstack Developer Freelancer',
    company_name: 'PT Semesta Ruang Inovasi',
    icon: sevenpion,
    iconBg: '#333333',
    date: 'March 2023 - Sept 2023',
  },
  {
    title: 'ANALYST & APL DEVELOPMENT - BSS Developer',
    company_name: 'PT Bali Towerindo Sentra Tbk',
    icon: balitower,
    iconBg: '#333333',
    date: 'March 2024 - NOW',
  },
];

const projects = [
  // {
  //   id: 'project-1',
  //   name: 'WINA VACATION',
  //   description:
  //     'An innovative and efficient platform to book and manage your local andong rides.',
  //   tags: [
  //     {
  //       name: 'laravel',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'restapi',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'scss',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: wina,
  //   repo: 'https://github.com/sindunataa/withwina',
  //   demo: 'http://withwina.wuaze.com/',
  // },
    {
    id: 'project-1',
    name: 'Portfolio-v2',
    description: `Welcome to the world of creation and innovation! My portfolio, powered by Next.js,`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    repo: 'https://github.com/sindunataa/next-porto',
    demo: 'https://natacode.netlify.app/',
  },
  {
    id: 'project-2',
    name: 'PEPARPROV JATENG 2023',
    description: 'The Central Java Province Paralympic Week IV Sports Event which will be located in Pati Regency 2023.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: peparprov,
    repo: 'https://github.com/sindunataa/npc-jateng',
    demo: 'https://peparprov.npcjateng.com/',
  },
  // {
  //   id: 'project-3',
  //   name: 'xynpict',
  //   description: 'Discover beauty in an instant with an easy-to-navigate interface.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: xynpict,
  //   repo: 'https://github.com/sindunataa/xynpict',
  //   demo: 'http://xynpict.wuaze.com/',
  // },
];

// TAMBAHAN: Professional Projects (Enterprise Level)
const professionalProjects = [
  {
    id: 'prof-1',
    name: 'MIS Vendor — Inventory Movement',
    subtitle: 'Internal & Vendor Inventory System',
    company: 'PT Bali Towerindo Sentra Tbk',
    period: 'March 2024 - Present',
    type: 'Enterprise System',
    description: 'An integrated inventory movement management system for internal warehouses and vendors with material tracking.',
    detailedDescription: 'A comprehensive inventory management system that handles inventory movements across internal warehouses and vendor facilities. The system supports material tracking, automated workflows, and seamless integration with Oracle Database to ensure data consistency.',
    tech: ['Oracle Database', 'REST API', 'Workflow System', 'Codeigniter', 'JavaScript', 'Node.js'],
    tags: [
      { name: 'Oracle DB', color: 'blue-text-gradient' },
      { name: 'Backend', color: 'green-text-gradient' },
      { name: 'Enterprise', color: 'pink-text-gradient' },
    ],
    features: [
      'Material Inventory Tracking',
      'Multi-level Approval Workflow',
      'Audit Trail & Reporting',
      'Oracle Database Integration',
      'Inbound/Outbound Management',
      'Material Request (MR) System',
      'Data Synchronization with Finance/Procurement'
    ],
    contributions: [
      'Developed and optimized the inventory movement module between internal warehouses and vendors',
      'Integrated Oracle Database to ensure data consistency for stock and transaction information',
      'Enhanced stock accuracy through material tracking during inbound and outbound processes',
      'Implemented approval workflow for Material Requests (MR) and goods issuance',
      'Built reporting and audit trail features to support auditing and operational decision-making',
      'Handled data synchronization between inventory modules and finance/procurement systems'
    ],
    impact: [
      'Improved stock accuracy to 98%',
      'Reduced approval processing time by 60%',
      'Automated reporting for audit compliance'
    ]
  },
  {
    id: 'prof-2',
    name: 'Sales Order — Billing & Payment',
    subtitle: 'Automated Sales Management System',
    company: 'PT Bali Towerindo Sentra Tbk',
    period: 'March 2024 - Present',
    type: 'Financial System',
    description: 'Sales order, billing, and payment management system with automated integration to ERP and finance platforms.',
    detailedDescription: 'An end-to-end sales management solution that automates the process from sales order creation to payment reconciliation, with seamless ERP and financial system integration.',
    tech: ['ERP Integration', 'Laravel', 'Automation', 'Codeigniter', 'MySQL'],
    tags: [
      { name: 'ERP', color: 'blue-text-gradient' },
      { name: 'Finance', color: 'green-text-gradient' },
      { name: 'Automation', color: 'pink-text-gradient' },
    ],
    features: [
      'End-to-end Sales Process Automation',
      'ERP Integration',
      'Automated Billing',
      'Payment Tracking',
      'Financial Reporting',
      'Invoice Generation'
    ],
    contributions: [
      'Developed features for Sales Order recording, Billing, and Payment processes',
      'Provided APIs for ERP and financial system integration to automate invoicing',
      'Implemented payment tracking and reconciliation processes',
      'Built monitoring dashboard to track payment status'
    ],
    impact: [
      'Automated 90% of the billing process',
      'Reduced invoice errors by 95%',
      'Accelerated payment reconciliation processes'
    ]
  },
  {
    id: 'prof-3',
    name: 'Internal Management System',
    subtitle: 'Internal Employee & Ticketing Platform',
    company: 'PT Bali Towerindo Sentra Tbk',
    period: 'March 2024 - Present',
    type: 'Internal Platform',
    description: 'Internal platform for employee service management with structured ticketing and tracking.',
    detailedDescription: 'A comprehensive internal platform for employee service requests, featuring a structured ticketing system with SLA monitoring and SSO authentication.',
    tech: ['SSO Integration', 'Role Management', 'SLA Tracking', 'Codeigniter'],
    tags: [
      { name: 'SSO', color: 'blue-text-gradient' },
      { name: 'Ticketing', color: 'green-text-gradient' },
      { name: 'SLA', color: 'pink-text-gradient' },
    ],
    features: [
      'Employee Service Request Management',
      'SLA-based Ticket Tracking',
      'SSO Authentication',
      'Role-based Access Control',
      'Multi-department Support',
      'Progress Dashboard'
    ],
    contributions: [
      'Developed internal ticketing system for employee service requests',
      'Implemented SLA tracking to ensure measurable response and resolution time',
      'Integrated SSO login and role-based authorization for secure access control',
    ],
    impact: [
      'Improved response time by 70%',
      'Achieved 95% SLA compliance rate',
      'User satisfaction score of 4.5/5'
    ]
  },
  {
    id: 'prof-4',
    name: 'E-Budget System',
    subtitle: 'Internal Budget Planning & Monitoring',
    company: 'PT Bali Towerindo Sentra Tbk',
    period: 'March 2024 - Present',
    type: 'Financial Planning',
    description: 'Budget planning and monitoring system with multi-level approval workflow and comprehensive reporting.',
    detailedDescription: 'An enterprise budgeting system with real-time budget tracking, multi-level approval workflow, and comprehensive reporting features for financial planning.',
    tech: ['Budget Planning', 'Multi-level Approval', 'Reporting', 'Finance Integration', 'Codeigniter', 'MySQL'],
    tags: [
      { name: 'Budget', color: 'blue-text-gradient' },
      { name: 'Planning', color: 'green-text-gradient' },
      { name: 'Finance', color: 'pink-text-gradient' },
    ],
    features: [
      'Department Budget Planning',
      'Budget vs Actual Tracking',
      'Multi-level Approval Workflow',
      'Division-wide Reporting',
      'Overspending Prevention',
      'Budget Reallocation',
      'Variance Analysis'
    ],
    contributions: [
      'Developed budget planning and departmental budget submission modules',
      'Automated the matching between actual spending and budget to prevent overspending',
      'Provided reporting features for monitoring budget realization per division',
      'Integrated multi-level approval workflow (Manager, Finance, BoD)'
    ],
    impact: [
      'Enhanced budget transparency',
      'Improved approval process efficiency by 80%'
    ]
  },
  {
    id: 'prof-5',
    name: 'MIS Internal',
    subtitle: 'Inventory Movement Management',
    company: 'PT Bali Towerindo Sentra Tbk',
    period: 'March 2024 - Present',
    type: 'Inventory System',
    description: 'Inventory transfer management system between sites with audit support and structured control.',
    detailedDescription: 'A site-to-site inventory transfer management system supporting field audit, item condition tracking, and comprehensive transfer history records.',
    tech: ['Stock Management', 'Site Transfer', 'Audit Trail', 'Condition Tracking', 'PHP', 'Oracle DB'],
    tags: [
      { name: 'Inventory', color: 'blue-text-gradient' },
      { name: 'Transfer', color: 'green-text-gradient' },
      { name: 'Audit', color: 'pink-text-gradient' },
    ],
    features: [
      'Inter-site Stock Transfer',
      'Field Audit Support',
      'Stock Opname Management',
      'Item Condition Tracking',
      'History & Audit Trail',
      'Transfer Request Workflow',
      'Real-time Stock Updates'
    ],
    contributions: [
      'Ensured structured and controlled inter-site stock transfer processes',
      'Supported field audits and improved stock opname accuracy',
      'Implemented item condition tracking (Good/Repair/Scrap)',
      'Built history and traceability for every inventory item movement'
    ],
    impact: [
      '100% audit trail compliance',
      'Reduced transfer processing time by 50%'
    ]
  },
  {
    id: 'prof-6',
    name: 'API Internal',
    subtitle: 'Mobile API Services',
    company: 'PT Bali Towerindo Sentra Tbk',
    period: 'March 2024 - Present',
    type: 'Backend API',
    description: 'Backend API services for mobile operations, optimized for low-signal areas.',
    detailedDescription: 'RESTful API backend for mobile operational activities with optimized performance for low-signal areas and secure authentication mechanisms.',
    tech: ['REST API', 'Authentication', 'Low-signal Optimization', 'PHP'],
    tags: [
      { name: 'API', color: 'blue-text-gradient' },
      { name: 'Backend', color: 'pink-text-gradient' },
    ],
    features: [
      'RESTful API Design',
      'Secure Authentication',
      'Optimized Response Time',
      'Low-signal Support',
      'Data Synchronization'
    ],
    contributions: [
      'Designed and developed REST APIs for operational mobile applications',
      'Implemented authentication and authorization for secure data access',
      'Optimized response time for better performance in low-signal areas',
      'Built caching mechanisms to support offline capability'
    ],
    impact: [
      'Achieved API response time under 200ms',
      'Supported 500+ concurrent users',
    ]
  },
  {
    id: 'prof-7',
    name: 'API IKR',
    subtitle: 'Cable Installation Mobile API',
    company: 'PT Bali Towerindo Sentra Tbk',
    period: 'March 2024 - Present',
    type: 'Field Operations API',
    description: 'Backend API for technician cable installation processes with real-time reporting synchronization.',
    detailedDescription: 'Mobile API designed for managing cable installation processes by technicians, featuring real-time field reporting and customer status synchronization.',
    tech: ['Field Reporting', 'Real-time Sync', 'Technician App', 'PHP', 'MySQL'],
    tags: [
      { name: 'API', color: 'blue-text-gradient' },
      { name: 'Field Ops', color: 'green-text-gradient' },
      { name: 'Real-time', color: 'pink-text-gradient' },
    ],
    features: [
      'Installation Process Management',
      'Field Report Synchronization',
      'Customer Status Updates',
      'Photo Documentation',
      'Real-time Progress Tracking',
      'Digital Signature'
    ],
    contributions: [
      'Developed backend API for IKR (Home Cable Installation) technician operations',
      'Implemented field report synchronization to update customer status in real-time',
      'Built photo upload and validation features for installation proof',
      'Enabled real-time installation progress monitoring'
    ],
    impact: [
      'Real-time installation tracking',
      'Enhanced customer satisfaction',
      'Achieved 100% digital documentation'
    ]
  }
];


export { services, technologies, experiences, projects, professionalProjects };