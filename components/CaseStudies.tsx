import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import { copy } from "@/lib/copy"

export default function CaseStudies() {
  return (
    <Section variant="dark" id="case-studies">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
              {copy.caseStudies.sectionLabel}
            </p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-white">
              {copy.caseStudies.heading}
            </h2>
          </div>
          <a
            href={copy.caseStudies.viewAll.href}
            className="hidden md:inline-flex text-sm font-medium text-brand-accent hover:text-white transition-colors"
          >
            {copy.caseStudies.viewAll.label} →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.caseStudies.items.map((cs) => (
            <a
              key={cs.client}
              href={cs.href}
              className="group block rounded-xl border border-white/10 p-8 transition-all duration-200 hover:border-brand-accent hover:bg-white/5"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                {cs.category}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white leading-snug">
                {cs.client}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{cs.problem}</p>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">{cs.outcome}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand-accent group-hover:gap-2 transition-all">
                Read case study →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <a
            href={copy.caseStudies.viewAll.href}
            className="text-sm font-medium text-brand-accent hover:text-white transition-colors"
          >
            {copy.caseStudies.viewAll.label} →
          </a>
        </div>
      </Container>
    </Section>
  )
}
