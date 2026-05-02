import Container from "@/components/ui/Container"
import { copy } from "@/lib/copy"

export default function CredibilityStrip() {
  const doubled = [...copy.credibility.items, ...copy.credibility.items]

  return (
    <div className="bg-brand-subtle border-y border-brand-border py-4 overflow-hidden">
      <div
        className="flex w-max animate-marquee"
        aria-label="Capabilities"
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2.5 text-sm font-medium text-brand-muted px-10 whitespace-nowrap"
            aria-hidden={i >= copy.credibility.items.length}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
