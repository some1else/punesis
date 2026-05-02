import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import { copy } from "@/lib/copy"

export default function Hero() {
  return (
    <Section variant="dark" className="relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-brand-accent/10 blur-3xl" />
        <div className="absolute top-1/2 -left-64 w-[400px] h-[400px] rounded-full bg-brand-accent/5 blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 max-w-3xl py-8 md:py-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
            {copy.hero.headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            {copy.hero.subheadline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary" size="lg" href={copy.hero.ctaPrimary.href}>
              {copy.hero.ctaPrimary.label}
            </Button>
            <Button variant="ghost" size="lg" href={copy.hero.ctaSecondary.href}>
              {copy.hero.ctaSecondary.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
