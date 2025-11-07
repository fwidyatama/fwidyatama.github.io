interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Full Stack Developer',
      company: 'SmartM2M',
      period: 'March 2024 - Present',
      description: [
        'Developed an AI-powered asset management module for a SOC platform using Go and MySQL, enhancing asset visibility and ensuring UR E26/E27 compliance',
        'Integrated the SOC with Cloudflare and Microsoft Teams to automate alerting and improve response time for security incidents',
        'Built an internal AI assistant leveraging LLMs (Large Language Models) to support automated threat triage, reducing manual analyst workload',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Mekari',
      period: 'November 2023 - March 2024',
      description: [
        'Led migration from legacy Ruby on Rails to Golang and Vue, improving response time and reducing tech debt',
        'Built an internal SDK to streamline 3rd-party API integrations, accelerating development of partner-related features',
        'Created comprehensive technical documentation for system architecture and API specifications to support team knowledge sharing',
        'Collaborated with cross-functional teams to integrate services and ensure seamless data flow between different system components',
      ],
    },
    {
      title: 'Backend Engineer',
      company: 'IDN Media',
      period: 'May 2023 - November 2023',
      description: [
        'Built scalable microservices to enable IDN Gold currency integration with external platforms, resulting in increased user engagement and monetization',
        'Developed a data migration feature to facilitate seamless data transfer from the old database to the new one',
        'Played a pivotal role in maintaining and resolving bugs in existing services, with a particular focus on core service enhancements, ensuring a smooth user experience',
      ],
    },
    {
      title: 'Backend Engineer',
      company: 'Style Theory',
      period: 'January 2023 - April 2023',
      description: [
        'Played a key role in developing integrations with a new logistics provider in Singapore, enhancing operational efficiency',
        'Designed and developed version monitoring tools to ensure tracking of service versions',
        'Actively participated in the deployment of services, both in development and production environments, ensuring seamless implementation',
      ],
    },
    {
      title: 'Backend Engineer',
      company: 'Docheck',
      period: 'July 2022 - October 2022',
      description: [
        'Managed and mentored intern team members, providing technical guidance and support their development',
        'Implemented new features and resolved outstanding technical debt to improve system performance and code maintainability',
        'Optimized database queries and API endpoints to enhance application response times and user experience',
        'Participated in code reviews and established best practices to ensure high-quality, scalable codebase',
      ],
    },
    {
      title: 'Frontend Engineer',
      company: 'Beeso Studio',
      period: 'January 2021 - June 2021',
      description: [
        'Developed and maintained web-based bus booking platform built on WordPress',
        'Implemented custom themes and plugins to support dynamic booking features and interactive UI elements',
        'Built frontend components to allow users to search, book, and manage bus trips, including visual display of bus amenities',
        'Collaborated with backend and design teams to ensure seamless UX across devices',
        'Optimized frontend performance and ensured cross-browser compatibility',
      ],
    },
    {
      title: 'Backend Engineer',
      company: 'BTS.ID',
      period: 'September 2020 - December 2022',
      description: [
        'Collaborated around 7 client projects across industries such as fintech, healthcare, agricultural, etc',
        'Ensured that each project was developed in strict adherence to client standards, guaranteeing high-quality deliverables',
        'Collaborated closely with project managers to meticulously capture and document all project details, ensuring clear and accurate project specifications',
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section header */}
        <div className="flex items-start gap-4 mb-16">
          <span className="signature-dot mt-2"></span>
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-2 tracking-tight">
              Experience
            </h2>
            <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
              Work History
            </p>
          </div>
        </div>
        
        {/* Improved timeline layout */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-border"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-0 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-4 top-3">
                  <div className="w-3 h-3 bg-primary border-2 border-background"></div>
                </div>

                {/* Improved card design */}
                <div className="bg-card border border-border p-6 md:p-8 hover:border-primary hover:shadow-sm transition-all duration-300">
                  {/* Header section */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-2">
                        {exp.company}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        {exp.period}
                      </p>
                    </div>
                    {/* Number badge */}
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Description list */}
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1.5 font-bold text-sm flex-shrink-0">•</span>
                        <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
