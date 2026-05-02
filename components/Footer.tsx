import Container from "@/components/ui/Container"
import { copy } from "@/lib/copy"

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <Container>
        <div className="py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-base font-semibold text-white">{copy.site.name}</p>
            <p className="mt-1 text-sm text-gray-500">{copy.footer.tagline}</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {copy.footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/10 py-6">
          <p className="text-xs text-gray-600">{copy.footer.copyright}</p>
        </div>
      </Container>
    </footer>
  )
}
