export interface ExperienceItem {
  yearRange: string
  company: string
  role: string
  description: string
}

export interface NoteItem {
  date: string
  title: string
  tags: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    yearRange: '2024–Present',
    company: 'SmartM2M',
    role: 'Full Stack Developer',
    description: 'Building AI-driven SOC platform, offensive security tools with LLMs, and blockchain infrastructure (Hyperledger Besu/Fabric)',
  },
  {
    yearRange: '2023–2024',
    company: 'Mekari',
    role: 'Full Stack Developer',
    description: 'Led Rails→Go migration, built internal SDK for 3rd-party API integrations',
  },
  {
    yearRange: '2023',
    company: 'IDN Media',
    role: 'Backend Engineer',
    description: 'Built microservices for IDN Gold currency integration with external platforms',
  },
  {
    yearRange: '2023',
    company: 'Style Theory',
    role: 'Backend Engineer',
    description: 'Developed logistics provider integrations and service version monitoring tools',
  },
  {
    yearRange: '2022',
    company: 'Docheck',
    role: 'Backend Engineer',
    description: 'Implemented features, optimized queries, mentored intern team (contract)',
  },
  {
    yearRange: '2021',
    company: 'Beeso Studio',
    role: 'Frontend Engineer',
    description: 'Built web-based bus booking platform with WordPress, PHP, and JavaScript',
  },
  {
    yearRange: '2020–2022',
    company: 'BTS.ID',
    role: 'Backend Engineer',
    description: 'Delivered 7 client projects across fintech, healthcare, and agriculture',
  },
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
  'Go, JavaScript, TypeScript',
  'REST APIs, Microservices, gRPC',
  'MySQL, PostgreSQL, Redis',
  'Docker, Git, AWS, GCP, CI/CD',
  'Kafka, RabbitMQ, MQTT',
  'LLMs, Hyperledger, Ethereum',
]
