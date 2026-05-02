import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import { copy } from "@/lib/copy"

export default function Services() {
  return (
    <Section id="services">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent">
              {copy.services.sectionLabel}
            </p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tighter leading-none text-brand-dark">
              {copy.services.heading}
            </h2>
          </div>
        </div>

        <div className="mt-14 divide-y divide-brand-border border-t border-brand-border">
          {copy.services.items.map((service, i) => (
            <div
              key={service.name}
              className="grid grid-cols-1 md:grid-cols-[72px_1fr_1.6fr] gap-2 md:gap-8 py-7 items-start"
            >
              <span className="font-mono text-xs text-brand-muted tabular-nums pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-sm font-semibold text-brand-dark">
                {service.name}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
