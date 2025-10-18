import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "BlockRider",
      description: "App de transporte descentralizado con minería de datos y economía colaborativa.",
      tags: ["Solidity", "Web3", "IA"],
      image: "/blockchain-transport-app-dashboard.jpg",
    },
    {
      title: "CivicDAO",
      description: "Presupuesto participativo automatizado con transparencia total vía smart contracts.",
      tags: ["Next.js", "DAO", "Blockchain"],
      image: "/civic-dao-governance-platform.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="gradient-blob gradient-blob-pink w-96 h-96 bottom-0 left-0" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-serif">Mis Proyectos</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex gap-3 pt-2">
                  <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/10 bg-transparent">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
