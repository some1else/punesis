import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import { copy } from "@/lib/copy"

export default function FinalCTA() {
  return (
    <Section variant="dark" id="contact">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            {copy.finalCta.heading}
          </h2>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            {copy.finalCta.body}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href={copy.finalCta.cta.href}>
              {copy.finalCta.cta.label}
            </Button>
            <a
              href={copy.finalCta.secondary.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {copy.finalCta.secondary.label}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
