interface ExperienceItem {
  title: string
  company: string
  period: string
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Full Stack Developer',
      company: 'SmartM2M',
      period: 'March 2024 - Present',
    },
    {
      title: 'Full Stack Developer',
      company: 'Mekari',
      period: 'November 2023 - March 2024',
    },
    {
      title: 'Backend Engineer',
      company: 'IDN Media',
      period: 'May 2023 - November 2023',
    },
    {
      title: 'Backend Engineer',
      company: 'Style Theory',
      period: 'January 2023 - April 2023',
    },
    {
      title: 'Backend Engineer',
      company: 'Docheck',
      period: 'July 2022 - October 2022',
    },
    {
      title: 'Frontend Engineer',
      company: 'Beeso Studio',
      period: 'January 2021 - June 2021',
    },
    {
      title: 'Backend Engineer',
      company: 'BTS.ID',
      period: 'September 2020 - December 2022',
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
        
        {/* Simplified timeline layout */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-border"></div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-0 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-4 top-2">
                  <div className="w-3 h-3 bg-primary border-2 border-background"></div>
                </div>

                {/* Simplified card */}
                <div className="bg-card border border-border p-4 md:p-6 hover:border-primary hover:shadow-sm transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-1">
                        {exp.company}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        {exp.period}
                      </p>
                    </div>
                    {/* Number badge */}
                    <div className="flex items-center">
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
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
