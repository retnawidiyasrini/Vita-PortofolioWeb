import type {
  Experience,
  Highlight,
  NavItem,
  PersonalInfo,
  Project,
  SkillCategory,
  Stat,
  Testimonial,
} from '../types'

export const personal: PersonalInfo = {
  name: 'Vita Anggraeni',
  role: 'Full Stack AI Engineer',
  tagline:
    'Membangun pengalaman digital cerdas dengan AI dan teknologi web modern.',
  location: 'Jakarta, Indonesia',
  email: 'vita@prestasijunior.org',
  phone: '08512345678',
  portfolioUrl: 'www.vitaanggraeni.dev',
  social: {
    github: 'https://github.com/vitaanggraenisdev',
    linkedin: 'https://linkedin.com/in/vitaanggraenidev',
    twitter: 'https://x.com/vitaanggraenidev',
  },
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const bio =
  'Vita Anggraeni is a passionate full-stack AI engineer with expertise in frontend development, backend systems, cloud deployment, and AI-powered applications. She specializes in building scalable web platforms, intelligent automation tools, and modern user experiences. She enjoys solving real-world problems through clean architecture and innovative technologies.'

export const highlights: Highlight[] = [
  {
    title: 'Frontend Development',
    description:
      'Crafting responsive, accessible interfaces with React, TypeScript, and modern CSS.',
  },
  {
    title: 'Backend & Cloud',
    description:
      'Designing scalable APIs and deploying resilient systems across cloud platforms.',
  },
  {
    title: 'AI Engineering',
    description:
      'Building intelligent automation and AI-powered features into real products.',
  },
]

export const stats: Stat[] = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 40, suffix: '+', label: 'Projects Delivered' },
  { value: 20, suffix: '+', label: 'Happy Clients' },
  { value: 15, suffix: '+', label: 'Technologies' },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Framer Motion', level: 80 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 85 },
      { name: 'Python', level: 88 },
      { name: 'FastAPI', level: 82 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 88 },
      { name: 'Firebase', level: 80 },
    ],
  },
  {
    title: 'AI & Cloud',
    skills: [
      { name: 'OpenAI API', level: 90 },
      { name: 'LangChain', level: 83 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 78 },
      { name: 'Vercel', level: 88 },
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'AI Task Manager',
    description:
      'Aplikasi produktivitas cerdas dengan bantuan AI untuk melakukan prioritas dan penjadwalan tugas.',
    tech: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
    githubUrl: 'https://github.com/vitaanggraenisdev',
    liveUrl: '#',
    gradient: ['#7c5cff', '#22d3ee'],
  },
  {
    name: 'Smart Chat Assistant',
    description:
      'Chatbot AI real-time dengan conversational memory dan context management.',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL'],
    githubUrl: 'https://github.com/vitaanggraenisdev',
    liveUrl: '#',
    gradient: ['#22d3ee', '#4ade80'],
  },
  {
    name: 'DevOps Monitoring Dashboard',
    description:
      'Dashboard monitoring server dan analitik secara real-time dengan grafik interaktif.',
    tech: ['React', 'Express.js', 'Docker', 'Chart.js'],
    githubUrl: 'https://github.com/vitaanggraenisdev',
    liveUrl: '#',
    gradient: ['#f472b6', '#7c5cff'],
  },
]

export const experiences: Experience[] = [
  {
    company: 'Novatech Solutions',
    role: 'Senior Full Stack Engineer',
    duration: '2023 - Present',
  },
  {
    company: 'PixelForge Labs',
    role: 'Frontend Developer',
    duration: '2021 - 2023',
  },
  {
    company: 'CloudNest AI',
    role: 'Junior Software Engineer',
    duration: '2019 - 2021',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Ahmad Fauzi',
    title: 'CTO, Prestasi Junior Indonesia',
    quote:
      'Vita is an exceptional engineer who consistently delivers beyond expectations. Her ability to bridge AI capabilities with practical user needs is remarkable. She transformed our platform\u2019s intelligence layer in a way that measurably improved user engagement.',
  },
  {
    name: 'Siti Rahayu',
    title: 'Product Manager, PT Indo',
    quote:
      'Working with Vita was a pleasure. She has a rare talent for turning complex data into clear, actionable insights. Her dashboards became the go-to tool for our entire leadership team, and she always brought ideas that went far beyond the initial brief.',
  },
  {
    name: 'Budi Santoso',
    title: 'Lead Engineer, PT Technesia',
    quote:
      'Vita\u2019s technical depth combined with her product mindset makes her stand out. She delivered a full-stack AI feature in record time without compromising code quality. I\u2019d recommend her without hesitation to any team looking for a high-impact engineer.',
  },
]
