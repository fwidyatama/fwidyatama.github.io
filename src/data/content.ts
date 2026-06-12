export interface ExperienceItem {
  yearRange: string
  company: string
  role: string
  description: string
}

export interface ProjectItem {
  name: string
  description: string
  status: 'In Progress' | 'Active'
}

export interface NoteItem {
  date: string
  title: string
  tags: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  { yearRange: '2024–Present', company: 'SmartM2M', role: 'Full Stack Developer', description: 'Working on core platform services' },
  { yearRange: '2023–2024', company: 'Mekari', role: 'Full Stack Developer', description: 'Developer experience and system scalability' },
  { yearRange: '2023', company: 'IDN Media', role: 'Backend Engineer', description: 'High traffic systems for content and community platform' },
  { yearRange: '2023', company: 'Style Theory', role: 'Backend Engineer', description: 'E-commerce platform and internal tooling' },
  { yearRange: '2022', company: 'Docheck', role: 'Backend Engineer', description: 'Backend services' },
  { yearRange: '2021', company: 'Beeso Studio', role: 'Frontend Engineer', description: 'Frontend systems' },
  { yearRange: '2020–2022', company: 'BTS.ID', role: 'Backend Engineer', description: 'Backend systems' },
]

export const PROJECTS: ProjectItem[] = [
  { name: 'chit-chat-service', description: 'A modular chat service with Go, gRPC, and Redis Stream', status: 'In Progress' },
  { name: 'til', description: 'A collection of my daily learnings and notes', status: 'Active' },
  { name: 'infra-sandbox', description: 'Playground for exploring infra, networking, and distributed systems', status: 'In Progress' },
  { name: 'block-explorer', description: 'Simple blockchain explorer for learning purposes', status: 'In Progress' },
]

export const NOTES_PREVIEW: NoteItem[] = [
  { date: 'May 18, 2026', title: 'Designing Message Queue for Order Processing at Scale', tags: ['architecture'] },
  { date: 'May 12, 2026', title: 'Getting Started with OpenTelemetry in Go', tags: ['observability'] },
  { date: 'Apr 28, 2026', title: 'Lessons from Debugging a Memory Leak in Production', tags: ['debugging'] },
  { date: 'Apr 15, 2026', title: 'Running Kafka on Kubernetes with Strimzi', tags: ['kafka', 'kubernetes'] },
]

export const CURRENTLY: string[] = [
  'Building AI agent for personal productivity',
  'Preparing for MEXT scholarship',
  'Learning Japanese (N4)',
  'Reading Designing Data-Intensive Applications',
]

export const TECH_STACK: string[] = [
  'Go, Java, PHP, TypeScript',
  'PostgreSQL, Redis, Kafka',
  'Docker, Kubernetes',
  'AWS, GCP, Terraform',
  'Elasticsearch, Prometheus',
  'and more...',
]
