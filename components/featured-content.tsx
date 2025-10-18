import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Calendar } from "lucide-react"
import Image from "next/image"

export function FeaturedContent() {
  const articles = [
    {
      title: "El futuro de las DAOs en Latinoamérica",
      excerpt:
        "Explorando cómo las organizaciones autónomas descentralizadas pueden transformar la gobernanza en nuestra región.",
      date: "15 Mar 2024",
      category: "Blockchain",
      image: "/dao-governance-latin-america.jpg",
      readTime: "5 min",
    },
    {
      title: "Smart Contracts: Mejores prácticas de seguridad",
      excerpt: "Guía completa sobre cómo escribir contratos inteligentes seguros y auditables en Solidity.",
      date: "8 Mar 2024",
      category: "Desarrollo",
      image: "/smart-contract-security-code.jpg",
      readTime: "8 min",
    },
  ]

  return (
    <section id="featured" className="py-20 md:py-32 relative overflow-hidden">
      <div className="gradient-blob gradient-blob-rose w-96 h-96 top-0 right-0" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-serif">Contenido Destacado</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Artículos y recursos sobre blockchain, Web3 y desarrollo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold leading-tight">{article.title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed">{article.excerpt}</p>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0"
                >
                  Leer más <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
