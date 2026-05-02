import React from "react"

type ButtonVariant = "primary" | "secondary" | "ghost"
type ButtonSize = "md" | "lg"

interface ButtonProps {
  variant: ButtonVariant
  size?: ButtonSize
  href?: string
  children: React.ReactNode
  className?: string
}

const base =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-accent text-white hover:bg-brand-accent-h focus-visible:outline-brand-accent",
  secondary:
    "border border-brand-border text-brand-dark bg-transparent hover:bg-brand-subtle focus-visible:outline-brand-border",
  ghost:
    "border border-white/20 text-white bg-transparent hover:bg-white/10 focus-visible:outline-white",
}

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
}

export default function Button({
  variant,
  size = "md",
  href,
  children,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  )
}
