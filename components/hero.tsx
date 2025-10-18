import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="gradient-blob gradient-blob-pink w-96 h-96 top-20 -right-48" />
      <div className="gradient-blob gradient-blob-rose w-80 h-80 top-60 -left-40" />

      <div className="container max-w-6xl relative z-10">
        <div className="max-w-3xl space-y-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <p className="text-sm text-primary font-medium tracking-wide uppercase">Full Stack Developer</p>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-balance">
            Building polished software and <span className="text-primary font-serif">blockchain experiences</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
            I'm a developer passionate about crafting accessible, production-ready applications that blend thoughtful
            design with robust engineering. My work focuses on Web3, DeFi, and decentralized systems.
          </p>

          {/* CTA and Social Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="#contact">
                Get in touch <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <div className="flex items-center gap-3 ml-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:marta@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
