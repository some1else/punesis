import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import { copy } from "@/lib/copy"

export default function Testimonials() {
  return (
    <Section variant="subtle">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent text-center">
          {copy.testimonials.sectionLabel}
        </p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-brand-dark text-center">
          {copy.testimonials.heading}
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.testimonials.items.map((t, i) => (
            <figure
              key={i}
              className="rounded-xl border border-brand-border bg-white p-8"
            >
              <span
                className="block text-5xl leading-none text-brand-accent/25 font-serif mb-4"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="text-sm text-brand-dark leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 text-xs font-semibold text-brand-muted uppercase tracking-wider">
                — {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  )
}
