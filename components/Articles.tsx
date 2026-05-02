import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import { copy } from "@/lib/copy"

export default function Articles() {
  return (
    <Section id="articles">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
              {copy.articles.sectionLabel}
            </p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-brand-dark">
              {copy.articles.heading}
            </h2>
          </div>
          <a
            href={copy.articles.viewAll.href}
            className="hidden md:inline-flex text-sm font-medium text-brand-accent hover:underline"
          >
            {copy.articles.viewAll.label} →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.articles.items.map((article) => (
            <a
              key={article.href}
              href={article.href}
              className="group block rounded-xl border border-brand-border p-6 transition-all duration-200 hover:border-brand-accent hover:shadow-sm"
            >
              <div className="flex items-center gap-3 text-xs text-brand-muted">
                <span>{article.date}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="mt-3 text-base font-semibold text-brand-dark leading-snug group-hover:text-brand-accent transition-colors">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-brand-muted leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <a
            href={copy.articles.viewAll.href}
            className="text-sm font-medium text-brand-accent hover:underline"
          >
            {copy.articles.viewAll.label} →
          </a>
        </div>
      </Container>
    </Section>
  )
}
