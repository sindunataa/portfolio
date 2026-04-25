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
  misptpim2_cencored,
  misinternal_cencored,
  salesorder_cencored,
  intranet_cencored,
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
    title: 'Application Developer',
    company_name: 'PT Bali Towerindo Sentra Tbk',
    icon: balitower,
    iconBg: '#333333',
    date: 'March 2024 - NOW',
  },
  {
    title: 'Fullstack Developer Freelancer',
    company_name: 'PT Semesta Ruang Inovasi',
    icon: sevenpion,
    iconBg: '#333333',
    date: 'March 2023 - Sept 2023',
  },
    {
    title: 'Backend Developer Internship',
    company_name: 'PT Semesta Ruang Inovasi',
    icon: sevenpion,
    iconBg: '#333333',
    date: 'Sept 2022 - Jan 2023',
  }
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
    image: misptpim2_cencored,
    banner: misptpim2_cencored,
    name: 'MIS Vendor',
    subtitle: 'Inventory Movement System',
    company: 'PT Bali Towerindo Sentra Tbk',
    period: '2024 – Present',
    type: 'Enterprise System',
    stat: { value: '98%', label: 'Stock Accuracy' },
    description: 'End-to-end inventory movement across internal warehouses and vendors, integrated with Oracle DB.',
    tech: ['Oracle DB', 'CodeIgniter', 'REST API', 'Node.js'],
    features: ['Material Tracking', 'Approval Workflow', 'Audit Trail', 'MR System', 'Finance Sync'],
    contributions: [
      'Built inventory movement module between internal warehouses and vendors',
      'Integrated Oracle DB for real-time stock and transaction consistency',
      'Implemented MR approval workflow and goods issuance system',
      'Developed audit trail and reporting for compliance',
    ],
    impact: ['98% stock accuracy', '60% faster approvals', 'Full audit compliance'],
  },
  {
    id: 'prof-2',
    image: salesorder_cencored,
    banner: salesorder_cencored,
    name: 'Sales Order & Billing Automation',
    subtitle: 'Automated Sales Management',
    company: 'PT Bali Towerindo Sentra Tbk',
    period: '2024 – Present',
    type: 'Financial System',
    stat: { value: '90%', label: 'Billing Automated' },
    description: 'Automated end-to-end sales, billing, and payment reconciliation with ERP integration.',
    tech: ['Laravel', 'CodeIgniter', 'MySQL', 'ERP Integration'],
    features: ['Sales Automation', 'ERP Integration', 'Auto Billing', 'Payment Tracking', 'Invoice Gen'],
    contributions: [
      'Built Sales Order, Billing, and Payment recording modules',
      'Provided ERP and finance system APIs for automated invoicing',
      'Developed payment reconciliation and monitoring dashboard',
    ],
    impact: ['90% billing automated', '95% fewer invoice errors', 'Faster reconciliation'],
  },
  {
    id: 'prof-3',
    image: intranet_cencored,
    banner: intranet_cencored,
    name: 'Internal Management',
    subtitle: 'Employee & Ticketing Platform',
    company: 'PT Bali Towerindo Sentra Tbk',
    period: '2024 – Present',
    type: 'Internal Platform',
    stat: { value: '95%', label: 'SLA Compliance' },
    description: 'Internal service platform with SLA-based ticketing and SSO authentication for all departments.',
    tech: ['CodeIgniter', 'SSO Integration', 'SLA Tracking', 'RBAC'],
    features: ['Ticket Management', 'SLA Tracking', 'SSO Auth', 'Role-based Access', 'Multi-dept Support'],
    contributions: [
      'Built internal ticketing system for employee service requests',
      'Implemented SLA tracking for measurable response and resolution time',
      'Integrated SSO and role-based authorization',
    ],
    impact: ['70% faster response', '95% SLA compliance', '4.5/5 satisfaction'],
  },
  {
    id: 'prof-4',
    name: 'E-Budget System',
    subtitle: 'Budget Planning & Monitoring',
    company: 'PT Bali Towerindo Sentra Tbk',
    period: '2024 – Present',
    type: 'Financial Planning',
    stat: { value: '80%', label: 'Approval Efficiency' },
    description: 'Enterprise budgeting with real-time tracking, multi-level approval, and division-wide reporting.',
    tech: ['CodeIgniter', 'MySQL', 'Finance Integration'],
    features: ['Dept Budget Planning', 'Budget vs Actual', 'Multi-level Approval', 'Variance Analysis', 'Reallocation'],
    contributions: [
      'Built budget planning and departmental submission modules',
      'Automated spending-vs-budget matching to prevent overspend',
      'Integrated multi-level approval (Manager → Finance → BoD)',
      'Developed division-wide budget realization reports',
    ],
    impact: ['80% more efficient approvals', 'Full budget transparency'],
  },
  {
    id: 'prof-5',
    image: misinternal_cencored,
    banner: misinternal_cencored,
    name: 'MIS Internal',
    subtitle: 'Inter-site Inventory Transfer',
    company: 'PT Bali Towerindo Sentra Tbk',
    period: '2024 – Present',
    type: 'Inventory System',
    stat: { value: '100%', label: 'Audit Trail' },
    description: 'Site-to-site inventory transfer with condition tracking, field audit support, and full traceability.',
    tech: ['PHP', 'Oracle DB', 'Audit Trail', 'Condition Tracking'],
    features: ['Inter-site Transfer', 'Field Audit', 'Stock Opname', 'Condition Tracking', 'Full History'],
    contributions: [
      'Built structured inter-site stock transfer workflow',
      'Implemented item condition tracking (Good / Repair / Scrap)',
      'Developed full movement history and traceability per item',
    ],
    impact: ['100% audit trail coverage', '50% faster transfer processing'],
  },
  {
    id: 'prof-6',
    name: 'API Internal',
    subtitle: 'Mobile Backend Services',
    company: 'PT Bali Towerindo Sentra Tbk',
    period: '2024 – Present',
    type: 'Backend API',
    stat: { value: '<200ms', label: 'Response Time' },
    description: 'RESTful API backend for mobile operations, optimized for low-signal field environments.',
    tech: ['PHP', 'REST API', 'Auth', 'Caching'],
    features: ['REST API', 'Secure Auth', 'Low-signal Optimized', 'Offline Cache', 'Data Sync'],
    contributions: [
      'Designed REST APIs for field mobile applications',
      'Implemented auth and authorization layer',
      'Optimized for low-signal with caching and offline support',
    ],
    impact: ['<200ms response time', '500+ concurrent users'],
  },
  {
    id: 'prof-7',
    name: 'API IKR',
    subtitle: 'Cable Installation Field API',
    company: 'PT Bali Towerindo Sentra Tbk',
    period: '2024 – Present',
    type: 'Field Operations API',
    stat: { value: '100%', label: 'Digital Docs' },
    description: 'Mobile API for technician cable installation with real-time field reporting and customer sync.',
    tech: ['PHP', 'MySQL', 'Real-time Sync'],
    features: ['Installation Flow', 'Field Report Sync', 'Customer Updates', 'Photo Upload', 'Digital Signature'],
    contributions: [
      'Built API for IKR technician installation operations',
      'Implemented real-time field report sync for customer status updates',
      'Built photo upload and digital signature for installation proof',
    ],
    impact: ['Real-time tracking', '100% digital documentation', 'Higher customer satisfaction'],
  },
];


export { services, technologies, experiences, projects, professionalProjects };