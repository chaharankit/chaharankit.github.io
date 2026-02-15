export type NavItem = {
  id: string
  label: string
}

export type CTA = {
  label: string
  href: string
  variant: 'primary' | 'ghost'
}

export type HeroContent = {
  name: string
  role: string
  tagline: string
  summary: string
  image: string
  ctas: CTA[]
  highlights: string[]
}

export type AboutFact = {
  label: string
  value: string
}

export type AboutContent = {
  title: string
  intro: string
  paragraphs: string[]
  image: string
  facts: AboutFact[]
  focusAreas: string[]
}

export type ExperienceItem = {
  company: string
  title: string
  period: string
  location: string
  bullets: string[]
}

export type ExperienceContent = {
  title: string
  intro: string
  items: ExperienceItem[]
  resumePath: string
}

export type ProjectItem = {
  name: string
  summary: string
  stack: string[]
  impact: string
  githubUrl: string
  image: string
}

export type ProjectsContent = {
  title: string
  intro: string
  items: ProjectItem[]
}

export type Skill = {
  name: string
  level: number
}

export type SkillGroup = {
  title: string
  skills: Skill[]
}

export type SkillsContent = {
  title: string
  intro: string
  groups: SkillGroup[]
}

export type ContactContent = {
  title: string
  intro: string
  email: string
  location: string
  linkedinUrl: string
  githubUrl: string
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export type SiteContent = {
  navigation: NavItem[]
  hero: HeroContent
  about: AboutContent
  experience: ExperienceContent
  projects: ProjectsContent
  skills: SkillsContent
  contact: ContactContent
}
