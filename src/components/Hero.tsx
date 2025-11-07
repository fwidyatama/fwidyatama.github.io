import { useEffect, useRef } from 'react'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`
        heroRef.current.style.opacity = `${1 - scrolled / 800}`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="min-h-screen flex items-center section-padding pt-32 relative">
      <div className="container-custom relative">
        <div 
          ref={heroRef}
          className="max-w-4xl parallax"
        >
          {/* Badge label */}
          <div className="flex items-start gap-4 mb-12">
            <span className="signature-dot mt-2"></span>
            <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase not-italic">
              Software Engineer
            </span>
          </div>

          {/* Bold, dramatic typography with intentional line breaks */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-foreground mb-8 leading-[0.9] tracking-tight">
            Hi, I'm
            <br />
            <span className="text-primary">Farid</span>.
            <br />
            <span className="text-muted-foreground font-light">I'm a</span>
            <br />
            software engineer.
          </h1>

          {/* Symmetric layout */}
          <div className="max-w-xl">
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed font-light">
              I've been building APIs and microservices for over 5 years now. 
              Mostly working with <span className="font-mono text-foreground font-medium">Go</span>, 
              {' '}<span className="font-mono text-foreground font-medium">JavaScript</span>, 
              and whatever else the project needs.
            </p>

            {/* Simple, brutalist links - no buttons */}
            <div className="flex flex-wrap gap-8 items-center">
              <a 
                href="#experience" 
                className="underline-custom text-foreground font-medium text-sm uppercase tracking-wider"
              >
                View experience
              </a>
              <span className="text-muted-foreground">/</span>
              <a 
                href="#contact" 
                className="underline-custom text-muted-foreground font-medium text-sm uppercase tracking-wider hover:text-foreground"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

        {/* Signature element: vertical line on the right */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-px h-32 bg-border"></div>
      </div>
    </section>
  )
}

export default Hero
