"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Mail, MessageCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("¡Gracias! Me pondré en contacto.")
    setFormData({ nombre: "", email: "", mensaje: "" })
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/MartaFuentes-mcr",
      gradient: "from-purple-500 to-cyan-500",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:marta.olivares@example.com",
      gradient: "from-cyan-500 to-purple-500",
    },
    {
      name: "Reddit",
      icon: MessageCircle,
      href: "#",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Contacto</h2>
          <p className="text-lg text-muted-foreground">¿Quieres colaborar conmigo? Escríbeme o sígueme en redes.</p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <Button
                key={link.name}
                asChild
                size="lg"
                className={`bg-gradient-to-r ${link.gradient} hover:opacity-90 transition-opacity`}
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <Icon className="mr-2 h-5 w-5" />
                  {link.name}
                </a>
              </Button>
            )
          })}
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-card to-card/50 border-border/50 shadow-xl">
          <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Escríbeme
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="correo@ejemplo.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensaje">Mensaje</Label>
              <Textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                placeholder="Cuéntame tu idea o proyecto"
                required
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
            >
              Enviar
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
