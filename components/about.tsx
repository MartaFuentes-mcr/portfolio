import { Card } from "@/components/ui/card"

export function About() {
  const stats = [
    { value: "1 año", label: "Experiencia" },
    { value: "3+", label: "Proyectos destacados" },
    { value: "Blockchain", label: "Especialidad" },
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="gradient-blob gradient-blob-rose w-96 h-96 top-0 right-0" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-sm font-bold text-primary uppercase tracking-wider">Sobre mí</p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance font-serif">
            Construyo con transparencia y propósito
          </h2>

          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Soy una desarrolladora full stack enfocada en soluciones descentralizadas con blockchain, inteligencia
            artificial y criptoeconomía. Fundadora de <strong className="text-primary">BlockRider</strong> y{" "}
            <strong className="text-primary">CivicDAO</strong>, dos plataformas orientadas a la autonomía y la
            innovación social.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-chart-2 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
