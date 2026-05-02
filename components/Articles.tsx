import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import { copy } from "@/lib/copy"

export default function Articles() {
  const [featured, ...rest] = copy.articles.items

  return (
    <Section id="articles">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent">
              {copy.articles.sectionLabel}
            </p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tighter leading-none text-brand-dark">
              {copy.articles.heading}
            </h2>
          </div>
          <a
            href={copy.articles.viewAll.href}
            className="hidden md:inline-flex text-sm font-medium text-brand-accent hover:text-brand-dark transition-colors"
          >
            {copy.articles.viewAll.label} →
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-[3fr_2fr] border-t border-brand-border">
          {/* Featured article */}
          <div className="py-8 md:py-10 md:pr-12 md:border-r border-brand-border">
            <a href={featured.href} className="group block">
              <div className="flex items-center gap-3 text-xs text-brand-muted">
                <span>{featured.date}</span>
                <span aria-hidden="true">·</span>
                <span>{featured.readTime}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brand-dark leading-snug group-hover:text-brand-accent transition-colors duration-200">
                {featured.title}
              </h3>
              <p className="mt-3 text-sm text-brand-muted leading-relaxed max-w-[55ch]">
                {featured.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-accent group-hover:gap-2 transition-all duration-200">
                Read article →
              </span>
            </a>
          </div>

          {/* Stacked articles */}
          <div className="flex flex-col divide-y divide-brand-border md:pl-12">
            {rest.map((article) => (
              <a
                key={article.href}
                href={article.href}
                className="group block py-8"
              >
                <div className="flex items-center gap-3 text-xs text-brand-muted">
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-brand-dark leading-snug group-hover:text-brand-accent transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 md:hidden">
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
