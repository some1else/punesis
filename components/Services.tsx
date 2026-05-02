import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import { copy } from "@/lib/copy"

export default function Services() {
  return (
    <Section id="services">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
          {copy.services.sectionLabel}
        </p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-brand-dark">
          {copy.services.heading}
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.services.items.map((service) => (
            <div
              key={service.name}
              className="rounded-xl border border-brand-border p-6 bg-white transition-all duration-200 hover:border-brand-accent hover:shadow-sm"
            >
              <h3 className="text-base font-semibold text-brand-dark">{service.name}</h3>
              <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
