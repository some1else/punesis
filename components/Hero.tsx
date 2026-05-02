import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import { copy } from "@/lib/copy"

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center bg-brand-dark text-white py-24 md:py-32">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden="true"
      />
      {/* Right vertical accent */}
      <div
        className="absolute top-0 right-1/4 h-full w-px bg-white/5 pointer-events-none hidden md:block"
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent mb-8">
            Digital product consulting &amp; engineering
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-none text-white">
            {copy.hero.headline}
          </h1>
          <p className="mt-8 text-base text-gray-400 max-w-[55ch] leading-relaxed">
            {copy.hero.subheadline}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button variant="primary" size="lg" href={copy.hero.ctaPrimary.href}>
              {copy.hero.ctaPrimary.label}
            </Button>
            <Button variant="ghost" size="lg" href={copy.hero.ctaSecondary.href}>
              {copy.hero.ctaSecondary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
