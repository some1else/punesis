import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import { copy } from "@/lib/copy"

export default function CaseStudies() {
  return (
    <Section variant="dark" id="case-studies">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent">
              {copy.caseStudies.sectionLabel}
            </p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tighter leading-none text-white">
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

        <div className="mt-14 divide-y divide-white/10 border-t border-white/10">
          {copy.caseStudies.items.map((cs, i) => (
            <a
              key={cs.client}
              href={cs.href}
              className="group grid grid-cols-1 md:grid-cols-[72px_1fr_1.6fr_auto] gap-4 md:gap-8 py-10 items-start transition-opacity duration-200 hover:opacity-75"
            >
              <span className="font-mono text-xs text-gray-600 tabular-nums pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent">
                  {cs.category}
                </span>
                <h3 className="mt-2 text-base font-semibold text-white leading-snug">
                  {cs.client}
                </h3>
              </div>
              <div>
                <p className="text-sm text-gray-500 leading-relaxed">{cs.problem}</p>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">{cs.outcome}</p>
              </div>
              <span className="hidden md:flex items-center gap-1 text-sm font-medium text-brand-accent group-hover:gap-2 transition-all duration-200 whitespace-nowrap mt-0.5 self-start">
                Read →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 md:hidden">
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
