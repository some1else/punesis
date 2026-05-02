"use client"

import { useState } from "react"
import Link from "next/link"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import { copy } from "@/lib/copy"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-white/5">
      <Container>
        <nav aria-label="Main navigation" className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-white hover:text-gray-200 transition-colors"
          >
            {copy.site.name}
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {copy.nav.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button variant="primary" size="md" href={copy.nav.cta.href}>
              {copy.nav.cta.label}
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
          >
            <span className="block w-6 h-0.5 bg-white transition-all" />
            <span className="block w-6 h-0.5 bg-white transition-all" />
            <span className="block w-4 h-0.5 bg-white transition-all" />
          </button>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-white/10 py-5 flex flex-col gap-5"
          >
            <ul className="flex flex-col gap-4">
              {copy.nav.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button variant="primary" size="md" href={copy.nav.cta.href}>
              {copy.nav.cta.label}
            </Button>
          </div>
        )}
      </Container>
    </header>
  )
}
