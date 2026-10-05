export interface SocialLinks {
  github: string
  linkedin: string
  twitter: string
}

export interface PersonalInfo {
  name: string
  role: string
  tagline: string
  location: string
  email: string
  phone: string
  portfolioUrl: string
  social: SocialLinks
}

export interface NavItem {
  label: string
  href: string
}

export interface Stat {
  /** Numeric target the counter animates to. */
  value: number
  /** Suffix appended after the number, e.g. "+" or "%". */
  suffix?: string
  label: string
}

export interface Highlight {
  title: string
  description: string
}

export interface Skill {
  name: string
  /** Proficiency 0–100, drives the progress bar width. */
  level: number
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface Project {
  name: string
  description: string
  tech: string[]
  githubUrl: string
  liveUrl: string
  /** Two accent colors for the placeholder gradient cover. */
  gradient: [string, string]
}

export interface Experience {
  company: string
  role: string
  duration: string
}

export interface Testimonial {
  name: string
  title: string
  quote: string
}
