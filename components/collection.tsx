"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

type Soap = {
  id: string
  name: string
  italian: string
  notes: string
  price: string
  img: string
  bg: string
  description: string
}

const soaps: Soap[] = [
  {
    id: "cherry-blossom",
    name: "Cherry Blossom",
    italian: "Ciliegio",
    notes: "Cherry blossom extract, soft florals, fruit undertones",
    price: "£5",
    img: "/soap-cherry.png",
    bg: "oklch(0.92 0.06 350)",
    description:
      "A delicate, airy floral with soft fruity undertones. It offers a subtle, elegant sweetness that feels like a fresh spring breeze, leaving a light and graceful scent on the skin.",
  },
  {
    id: "lemon",
    name: "Lemon",
    italian: "Limone",
    notes: "Sicilian lemon zest, citrus oils, vitamin E",
    price: "£5",
    img: "/soap-lemon.png",
    bg: "oklch(0.95 0.08 95)",
    description:
      "This zesty citrus scent provides an instant burst of energy. It is crisp, punchy, and leaves a bright, sunny trail for a revitalizing and exceptionally clean finish.",
  },
  {
    id: "lavender",
    name: "Lavender",
    italian: "Lavanda",
    notes: "Provence lavender, shea butter, white clay",
    price: "£5",
    img: "/soap-lavender.png",
    bg: "oklch(0.88 0.06 300)",
    description:
      "Grounding and herbal, this classic scent focuses on earthy floral notes rather than sweetness. It is designed for a calming, tranquil experience that helps quiet the mind.",
  },
  {
    id: "mint",
    name: "Mint",
    italian: "Menta",
    notes: "Fresh peppermint, eucalyptus, cooling botanicals",
    price: "£5",
    img: "/soap-mint.png",
    bg: "oklch(0.92 0.08 155)",
    description:
      "An invigorating, sharp scent that delivers an immediate cooling sensation. It provides a crisp botanical reset that leaves the skin feeling refreshed, tingly, and fully energized.",
  },
]

export function Collection() {
  const [active, setActive] = useState(0)
  const current = soaps[active]

  return (
    <section
      id="collection"
      className="relative py-24 md:py-40 transition-colors duration-700 overflow-hidden"
      style={{ backgroundColor: current.bg }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-foreground/60 mb-4">
              — The Collection
            </p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] font-light text-balance">
              Four bars,
              <br />
              <em className="italic">four moods.</em>
            </h2>
          </div>
          <p className="text-foreground/70 max-w-sm font-light leading-relaxed">
            Every Silk Sapone bar weighs 110g, lasts six weeks of daily use, and
            arrives wrapped in unbleached paper.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-square max-w-[480px] mx-auto">
              {soaps.map((soap, i) => (
                <div
                  key={soap.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-700 ease-out",
                    i === active
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none",
                  )}
                >
                  <Image
                    src={soap.img}
                    alt={`${soap.name} soap bar`}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 1024px) 90vw, 50vw"
                  />
                </div>
              ))}
              <p
                key={current.italian}
                className="absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 font-serif italic text-foreground/10 text-[20vw] lg:text-[14rem] leading-none pointer-events-none select-none whitespace-nowrap"
              >
                {current.italian}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-t border-foreground/20 pt-8">
              <p className="font-serif italic text-foreground/60 text-lg mb-2">
                {current.italian}
              </p>
              <h3 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6">
                {current.name}
              </h3>
              <p className="text-foreground/75 leading-relaxed mb-6 font-light">
                {current.description}
              </p>
              <div className="space-y-3 text-sm border-t border-foreground/15 pt-6">
                <DetailRow label="Notes" value={current.notes} />
                <DetailRow label="Weight" value="110 g" />
                <DetailRow label="Cure" value="48 hours" />
              </div>
              <div className="mt-10">
                <div className="flex items-baseline gap-4 mb-4">
                  <p className="font-serif text-3xl">{current.price}</p>
                  <p className="text-foreground/60 text-sm">or 2 for £8</p>
                </div>
                <button
                  type="button"
                  className="w-full bg-foreground text-background py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  Add to Basket
                </button>
              </div>
            </div>

            <div className="mt-12 flex gap-3">
              {soaps.map((soap, i) => (
                <button
                  key={soap.id}
                  onClick={() => setActive(i)}
                  className="flex-1 group relative py-4 text-left transition-all duration-300"
                  aria-label={`View ${soap.name}`}
                >
                  <div
                    className={cn(
                      "h-px w-full transition-colors duration-300",
                      i === active ? "bg-foreground" : "bg-foreground/20",
                    )}
                  />
                  <p
                    className={cn(
                      "mt-3 text-[10px] uppercase tracking-[0.25em] transition-colors duration-300",
                      i === active ? "text-foreground" : "text-foreground/50",
                    )}
                  >
                    0{i + 1}
                  </p>
                  <p
                    className={cn(
                      "font-serif italic mt-1 transition-colors duration-300",
                      i === active ? "text-foreground" : "text-foreground/50",
                    )}
                  >
                    {soap.italian}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 pt-1">
        {label}
      </span>
      <span className="text-foreground/85 text-right font-light">{value}</span>
    </div>
  )
}
