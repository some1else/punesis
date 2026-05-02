import React from "react"

type SectionVariant = "white" | "subtle" | "dark"

interface SectionProps {
  children: React.ReactNode
  variant?: SectionVariant
  id?: string
  className?: string
}

const variants: Record<SectionVariant, string> = {
  white: "py-20 md:py-28 bg-white",
  subtle: "py-20 md:py-28 bg-brand-subtle",
  dark: "py-20 md:py-28 bg-brand-dark text-white",
}

export default function Section({
  children,
  variant = "white",
  id,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`${variants[variant]} ${className}`}>
      {children}
    </section>
  )
}
