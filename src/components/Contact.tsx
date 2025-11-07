import { Mail, Linkedin, Github } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section header */}
        <div className="flex items-start gap-4 mb-16">
          <span className="signature-dot mt-2"></span>
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-2 tracking-tight">
              Contact
            </h2>
            <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
              Let's Talk
            </p>
          </div>
        </div>

        {/* Simple, functional layout */}
        <div className="max-w-2xl">
          <p className="text-muted-foreground mb-12 leading-relaxed text-lg">
            If you want to talk about a project or just say hi, feel free to reach out.
          </p>

          {/* Contact links - minimal, brutalist */}
          <div className="space-y-4">
            <a
              href="mailto:faridwidyatama12@gmail.com"
              className="flex items-center gap-4 p-4 border border-border bg-card hover:border-primary hover:bg-muted/30 transition-all group"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                faridwidyatama12@gmail.com
              </span>
            </a>

            <a
              href="https://linkedin.com/in/faridwidyatama"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-border bg-card hover:border-primary hover:bg-muted/30 transition-all group"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                LinkedIn
              </span>
            </a>

            <a
              href="https://github.com/fwidyatama"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-border bg-card hover:border-primary hover:bg-muted/30 transition-all group"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                GitHub
              </span>
            </a>
          </div>

          {/* Footer signature */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} Farid Widyatama
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
