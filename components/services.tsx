import { Card } from "@/components/ui/card"
import { Code2, FileCode2, Coins } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code2,
      title: "Aplicaciones Full-Stack",
      description:
        "Frontends accesibles, APIs robustas y bases de datos seguras listas para producción. Desarrollo integral con foco en experiencia de usuario y escalabilidad.",
      features: ["React, Next.js, Tailwind", "APIs REST y GraphQL", "Automatización y despliegue en Vercel"],
    },
    {
      icon: FileCode2,
      title: "Smart Contracts",
      description:
        "Diseño, implementación y pruebas de contratos inteligentes con foco en seguridad y auditabilidad. Integración con plataformas DeFi y DAOs.",
      features: ["Solidity, Hardhat", "Auditoría y testing", "Automatización de procesos"],
    },
    {
      icon: Coins,
      title: "Crypto & DeFi",
      description:
        "Integraciones Web3, pagos, wallets y analítica on-chain para productos financieros. Experiencia en gobernanza y economía de tokens.",
      features: ["Web3.js, Ethers.js", "Wallets y pagos cripto", "DAO y gobernanza"],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-serif">Servicios</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Acompaño a startups y equipos a lanzar productos confiables, medibles y escalables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
