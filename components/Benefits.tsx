import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import { copy } from "@/lib/copy"

export default function Benefits() {
  return (
    <Section variant="subtle" id="about">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
          {copy.benefits.sectionLabel}
        </p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-brand-dark max-w-lg whitespace-pre-line">
          {copy.benefits.heading}
        </h2>

        <dl className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {copy.benefits.items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div
                className="w-1 shrink-0 rounded-full bg-brand-accent mt-1 self-stretch"
                aria-hidden="true"
              />
              <div>
                <dt className="text-base font-semibold text-brand-dark">{item.title}</dt>
                <dd className="mt-1 text-sm text-brand-muted leading-relaxed">{item.body}</dd>
              </div>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  )
}
