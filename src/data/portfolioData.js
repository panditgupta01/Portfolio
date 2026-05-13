const publicUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const skills = [
  { name: 'React.js + Vite', level: 88 },
  { name: 'Tailwind CSS', level: 86 },
  { name: 'AI App Integration (Groq API)', level: 82 },
  { name: 'MERN Stack', level: 84 },
  { name: 'Power BI / Excel', level: 78 },
]

export const projects = [
  {
    title: 'HostelMed - AI Health Assistant',
    description:
      'An AI-powered health guidance app for hostel students that analyzes symptoms, detects urgency level, and suggests actionable next steps.',
    stack: ['React (Vite)', 'Tailwind CSS', 'Node.js', 'Express.js', 'Groq API'],
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://ai-health-assistant-two.vercel.app/',
    githubUrl: 'https://github.com/panditgupta01/ai-health-assistant',
  },
  {
    title: 'ShopIT',
    description:
      'A full-stack MERN online ordering platform where users can shop from local stores and admins can manage inventory, orders, and secure JWT-based authentication.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'JWT'],
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
    liveUrl: '#',
    githubUrl: 'https://github.com/panditgupta01',
  },
]

export const experienceItems = [
  {
    role: 'UI/UX Design Intern',
    company: 'TechnoHacks Solutions Pvt. Ltd.',
    period: '2026',
    highlights:
      'Designed FlowApp, a task management product in Figma—user research and wireframing, UI/UX design, prototyping and usability testing, plus A/B testing and iterative improvements. Strengthened user-centered design, visual hierarchy, and end-to-end design workflows.',
    links: [
      { label: 'View certificate (PDF)', href: publicUrl('technohacks-uiux-internship-certificate.pdf') },
      {
        label: 'Certificate on LinkedIn',
        href: 'https://www.linkedin.com/posts/panditgupta01_internship-certificate-ugcPost-7459629729596456960-YpdJ',
      },
    ],
  },
  {
    role: 'B.Tech - Computer Science & Engineering',
    company: 'Parul University (PIT)',
    period: '2022 — 2026 (completed)',
    highlights:
      'Completed degree with final CGPA: 7.17 / 10. Built practical projects in frontend, full-stack web development, and machine learning integrations.',
  },
  {
    role: 'Project: HostelMed - AI Health Assistant',
    company: 'Team Size: 4',
    period: '2025',
    highlights:
      'Built an AI-powered health guidance system for hostel students with symptom analysis, urgency detection, and actionable recommendations.',
  },
  {
    role: 'Project: ShopIT',
    company: 'Mentor: Dr. Chandrasekar P | Team Size: 4',
    period: 'Sep 2024 - Dec 2024',
    highlights:
      'Built a complete MERN ordering platform with secure authentication and admin-side operations for local shops.',
  },
]

export const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/panditgupta01' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/panditgupta01' },
  { label: 'Email (University)', href: 'mailto:2203051050063@paruluniversity.ac.in' },
  { label: 'Email (Personal)', href: 'mailto:amarnathgupta112@gmail.com' },
]

export const personalInfo = {
  fullName: 'Amarnath Prasad Gupta',
  shortName: 'AMARNATH',
  role: 'B.Tech CSE Graduate | Frontend, MERN & UI/UX',
  tagline:
    'I build modern, responsive, and user-focused applications with React, MERN, and practical AI integrations.',
  aboutTitle: 'I learn by building products that solve real problems.',
  aboutDescription:
    'B.Tech Computer Science graduate from Parul University (final CGPA 7.17 / 10), focused on frontend engineering, full-stack development, and UI/UX design.',
  aboutStory:
    'From MERN commerce apps like ShopIT to AI-powered products like HostelMed—and product design on FlowApp during my UI/UX internship at TechnoHacks—I enjoy turning ideas into usable digital products with clean UI and strong functionality.',
  contactTitle: 'Let us connect and build impactful products.',
  contactDescription:
    'Open to collaborative projects and frontend, full-stack, and UI/UX opportunities.',
  phone: '+91-7050886395',
  location: 'Vaghodia, Gujarat, India',
  languages: 'Hindi, English, Maithili, Bhojpuri',
}
