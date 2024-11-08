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
  {
    id: 'project-1',
    name: 'WINA VACATION',
    description:
      'An innovative and efficient platform to book and manage your local andong rides.',
    tags: [
      {
        name: 'laravel',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: wina,
    repo: 'https://github.com/sindunataa/withwina',
    demo: 'http://withwina.wuaze.com/',
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
  {
    id: 'project-3',
    name: 'xynpict',
    description: 'Discover beauty in an instant with an easy-to-navigate interface.',
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
    image: xynpict,
    repo: 'https://github.com/sindunataa/xynpict',
    demo: 'http://xynpict.wuaze.com/',
  },
  {
    id: 'project-4',
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
];

export { services, technologies, experiences, projects };
