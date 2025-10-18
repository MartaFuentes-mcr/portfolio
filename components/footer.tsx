import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Hecho con <span className="text-pink-500">♥</span> por Marta Fuentes | {currentYear}
          </p>

          <Button asChild variant="outline" size="sm">
            <Link href="#hero">
              <ArrowUp className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
