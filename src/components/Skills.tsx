const Skills = () => {
  const skills = [
    'Go',
    'JavaScript',
    'TypeScript',
    'Python',
    'PHP',
    'REST APIs',
    'Microservices',
    'gRPC',
    'MySQL',
    'PostgreSQL',
    'Redis',
    'SQL',
    'Docker',
    'Git',
    'AWS',
    'GCP',
    'CI/CD',
    'Node.js',
    'Express',
    'Vue',
    'Ruby',
    'Scala',
    'Kafka',
    'MQTT',
    'WordPress',
  ]

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section header */}
        <div className="flex items-start gap-4 mb-16">
          <span className="signature-dot mt-2"></span>
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-2 tracking-tight">
              Skills
            </h2>
            <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
              Technologies I Work With
            </p>
          </div>
        </div>

        {/* Symmetric grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
              <div
                key={skill}
                className="border border-border bg-card p-4 hover:border-primary hover:bg-muted/50 transition-all duration-300"
              >
                <span className="font-mono text-sm text-foreground font-medium">
                  {skill}
                </span>
              </div>
            ))}
        </div>

        {/* Small signature text at bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
            Always learning something new
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
