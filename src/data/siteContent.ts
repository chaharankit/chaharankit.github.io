import type { SiteContent } from '../types/content'

export const siteContent: SiteContent = {
  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    name: 'Ankit Chahar',
    role: 'Full-Stack .NET Developer',
    tagline: 'Engineering enterprise products that stay fast as complexity grows.',
    summary:
      'I design and ship scalable web applications, integration plugins, and APIs with measurable business impact. My focus is clean architecture, reliable delivery, and thoughtful user experience.',
    image: '/images/about.jpg',
    ctas: [
      { label: 'Contact Me', href: '#contact', variant: 'primary' },
      { label: 'Download Resume', href: '/pdf/ankitcv.pdf', variant: 'ghost' },
    ],
    highlights: ['3+ years shipping products', '.NET + React specialist', 'APS / Autodesk domain'],
  },
  about: {
    title: 'About',
    intro:
      'I build practical software systems that bridge engineering complexity and business outcomes.',
    paragraphs: [
      'I am currently working as a Full-Stack .NET Developer, collaborating with cross-functional teams to deliver enterprise-grade solutions across web platforms and integrations.',
      'My work spans backend APIs, data design, front-end interfaces, and DevOps pipelines. I enjoy translating ambiguous product requirements into stable, maintainable software.',
    ],
    image: '/images/staff-1.jpg',
    facts: [
      { label: 'Name', value: 'Ankit Chahar' },
      { label: 'Location', value: 'Gurugram, Haryana, India' },
      { label: 'Primary Stack', value: '.NET, TypeScript, React, MSSQL' },
      { label: 'Current Focus', value: 'Scalable app architecture and UX performance' },
    ],
    focusAreas: [
      'Enterprise web development with modern .NET',
      'Autodesk Platform Services and plugin ecosystems',
      'API design, query optimization, and observability',
      'CI/CD automation and team delivery acceleration',
    ],
  },
  experience: {
    title: 'Experience & Resume',
    intro:
      'Hands-on product engineering across enterprise web applications, Autodesk integrations, and high-throughput APIs.',
    resumePath: '/pdf/ankitcv.pdf',
    items: [
      {
        company: 'Siemens Energy',
        title: 'Full-Stack .NET Developer',
        period: 'Jul 2022 - Present',
        location: 'Gurugram, India',
        bullets: [
          'Developed and integrated a 3D viewer with Autodesk Platform Services, improving user interaction for technical models.',
          'Built robust APIs and full-stack modules using .NET, MSSQL, TypeScript, and modern frontend tooling.',
          'Optimized critical database queries and reduced page load bottlenecks by refining data access patterns.',
          'Helped migrate legacy systems to modern .NET Core architecture with cleaner deployment and maintainability.',
          'Implemented CI/CD workflows with Azure DevOps, reducing deployment overhead and improving release confidence.',
        ],
      },
      {
        company: 'Siemens Energy',
        title: 'Full-Stack .NET Intern',
        period: 'Apr 2022 - Jul 2022',
        location: 'Gurugram, India',
        bullets: [
          'Contributed to internal web tools for Autodesk Inventor plugin data and workflow automation.',
          'Created reusable UI components and supported API integration across team projects.',
          'Assisted in testing and release preparation, improving delivery consistency.',
        ],
      },
    ],
  },
  projects: {
    title: 'Projects',
    intro:
      'Selected builds focused on performance, maintainability, and real business use cases. Each project reflects production-focused engineering decisions.',
    items: [
      {
        name: 'APS 3D Viewer Experience',
        summary:
          'Interactive model visualization module for enterprise users with layered controls and API-driven data overlays.',
        stack: ['.NET', 'TypeScript', 'APS', 'Three.js'],
        impact: 'Improved visualization workflows and reduced context switching for engineering teams.',
        githubUrl: 'https://github.com/chaharankit?tab=repositories',
        image: '/images/project-1.jpg',
      },
      {
        name: 'Autodesk Integration Toolkit',
        summary:
          'Plugin and service integrations connecting Autodesk tools with internal systems and shared data workflows.',
        stack: ['.NET', 'MSSQL', 'REST APIs'],
        impact: 'Reduced manual handoffs and improved data consistency across tools.',
        githubUrl: 'https://github.com/chaharankit?tab=repositories',
        image: '/images/project-2.jpg',
      },
      {
        name: 'Enterprise API Platform',
        summary:
          'Modular backend services for secure data exchange, validation, and operational reporting.',
        stack: ['ASP.NET Core', 'MSSQL', 'Caching'],
        impact: 'Cut response times and increased service reliability under load.',
        githubUrl: 'https://github.com/chaharankit?tab=repositories',
        image: '/images/project-3.jpg',
      },
      {
        name: 'Developer Delivery Dashboard',
        summary:
          'Internal dashboard to track deployment quality, build health, and feature throughput.',
        stack: ['React', 'TypeScript', '.NET API'],
        impact: 'Gave teams clearer release visibility and faster issue triage.',
        githubUrl: 'https://github.com/chaharankit?tab=repositories',
        image: '/images/project-4.jpg',
      },
      {
        name: 'Portfolio Platform V2',
        summary:
          'Modern React migration with content modeling, high-motion design language, and production-ready deployment automation.',
        stack: ['React', 'Tailwind', 'Framer Motion'],
        impact: 'Created a stronger personal brand presence with scalable front-end architecture.',
        githubUrl: 'https://github.com/chaharankit/chaharankit.github.io',
        image: '/images/project-5.jpg',
      },
      {
        name: 'Progressive Web Utility Suite',
        summary:
          'Client-first productivity modules with offline capability and responsive interaction patterns.',
        stack: ['PWA', 'TypeScript', 'Service Workers'],
        impact: 'Improved task continuity and usability in constrained network conditions.',
        githubUrl: 'https://github.com/chaharankit?tab=repositories',
        image: '/images/project-6.jpg',
      },
    ],
  },
  skills: {
    title: 'Skills',
    intro:
      'A practical stack built for shipping maintainable products in fast-moving enterprise environments.',
    groups: [
      {
        title: 'Backend & Data',
        skills: [
          { name: '.NET / ASP.NET Core', level: 92 },
          { name: 'MSSQL', level: 90 },
          { name: 'REST API Design', level: 88 },
          { name: 'Entity Framework', level: 86 },
        ],
      },
      {
        title: 'Frontend',
        skills: [
          { name: 'React', level: 85 },
          { name: 'TypeScript', level: 88 },
          { name: 'JavaScript', level: 84 },
          { name: 'HTML/CSS', level: 90 },
        ],
      },
      {
        title: 'Cloud & Delivery',
        skills: [
          { name: 'Azure DevOps', level: 84 },
          { name: 'AWS Fundamentals', level: 76 },
          { name: 'CI/CD Automation', level: 87 },
          { name: 'System Debugging', level: 88 },
        ],
      },
    ],
  },
  contact: {
    title: 'Contact',
    intro:
      'If you are hiring or building something ambitious, send a message. I am open to impactful software roles and collaboration.',
    email: 'feb.ankiit14@gmail.com',
    location: 'Gurugram, Haryana, India',
    linkedinUrl: 'https://www.linkedin.com/in/chahar-ankiit',
    githubUrl: 'https://github.com/chaharankit',
  },
}
