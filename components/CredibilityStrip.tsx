import Container from "@/components/ui/Container"
import { copy } from "@/lib/copy"

export default function CredibilityStrip() {
  return (
    <div className="bg-brand-subtle border-y border-brand-border py-5">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {copy.credibility.items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm font-medium text-brand-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
