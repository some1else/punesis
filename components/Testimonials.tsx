import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import { copy } from "@/lib/copy"

export default function Testimonials() {
  const [featured, ...rest] = copy.testimonials.items

  return (
    <Section variant="subtle">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent">
          {copy.testimonials.sectionLabel}
        </p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tighter leading-none text-brand-dark">
          {copy.testimonials.heading}
        </h2>

        <div className="mt-14">
          {/* Featured testimonial */}
          <figure className="border-t border-brand-border pt-10 pb-12">
            <blockquote className="text-2xl md:text-3xl font-semibold tracking-tight text-brand-dark max-w-3xl leading-snug">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-xs font-semibold text-brand-muted uppercase tracking-[0.15em]">
              — {featured.author}
            </figcaption>
          </figure>

          {/* Remaining testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-brand-border md:divide-x divide-brand-border">
            {rest.map((t, i) => (
              <figure
                key={i}
                className={`pt-8 pb-8 md:pb-0 ${i === 0 ? "md:pr-12" : "md:pl-12"}`}
              >
                <blockquote className="text-sm text-brand-dark leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs font-semibold text-brand-muted uppercase tracking-[0.15em]">
                  — {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
