import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      year: "2025",
      title: "Fundadora — BlockRider",
      description:
        "Transporte descentralizado con incentivos cripto, IA y analítica on-chain. Lideré el desarrollo de la plataforma, la estrategia de producto y la integración blockchain.",
      tags: ["Blockchain", "IA", "Liderazgo"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg",
      gradient: "from-purple-500 to-cyan-500",
    },
    {
      year: "2025",
      title: "Fundadora — CivicDAO",
      description:
        "Presupuestos participativos automatizados y trazabilidad total vía smart contracts. Diseño, desarrollo y lanzamiento de la DAO y su plataforma de gobernanza.",
      tags: ["DAO", "Smart Contracts", "Gobernanza"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      gradient: "from-cyan-500 to-purple-500",
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Experiencia</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 opacity-20 hidden md:block" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative flex gap-6 items-start">
              {/* Icon */}
              <div
                className={`hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br ${exp.gradient} items-center justify-center flex-shrink-0 shadow-lg z-10`}
              >
                <img src={exp.icon || "/placeholder.svg"} alt="" className="w-8 h-8" />
              </div>

              {/* Content */}
              <Card className="flex-1 p-6 bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-xl transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0">
                      {exp.year}
                    </Badge>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {exp.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Badge variant="outline" className="text-sm py-2 px-4">
            Abierta a colaboraciones y consultorías
          </Badge>
        </div>
      </div>
    </section>
  )
}
