const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Asymmetric header */}
        <div className="flex items-start gap-4 mb-16">
          <span className="signature-dot mt-2"></span>
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-2 tracking-tight">
              About
            </h2>
            <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
              Who I Am
            </p>
          </div>
        </div>

        {/* Single column layout */}
        <div className="max-w-3xl">
          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
              <p>
                Experienced Software Engineer with over 5 years of delivering robust and scalable solutions across 
                diverse industries. Skilled in system design, development, and optimization. Passionate about solving complex 
                problems and committed to writing clean, maintainable code.
              </p>
              <p>
                I've worked on projects across different industries like cybersecurity, SaaS, media, fintech, healthcare. 
                Mostly building APIs, working with databases, and trying to make systems that actually work when people use them.
              </p>
              <p>
                I also take on freelance projects from time to time, helping clients build and improve their systems. 
                Eager to contribute to impactful projects and drive continuous improvement.
              </p>
            </div>

            {/* Small signature element */}
            <div className="pt-4 border-t border-border">
              <span className="font-mono text-xs text-muted-foreground">
                Available for freelance work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
