"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const links = [
  { label: "Collection", href: "#collection" },
  { label: "Journal", href: "#journal" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="Silk Sapone home">
          <Image
            src="/logo.png"
            alt="Silk Sapone"
            width={44}
            height={44}
            className={cn(
              "transition-all duration-500",
              scrolled ? "opacity-100" : "opacity-0 -translate-y-2",
            )}
          />
          <span
            className={cn(
              "font-serif text-xl tracking-[0.3em] transition-all duration-500",
              scrolled ? "text-foreground" : "text-background",
            )}
          >
            SILK SAPONE
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs uppercase tracking-[0.25em] transition-colors duration-300 hover:text-primary",
                scrolled ? "text-foreground/80" : "text-background/90",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#collection"
          className={cn(
            "text-xs uppercase tracking-[0.25em] border px-5 py-2.5 transition-all duration-300",
            scrolled
              ? "border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
              : "border-background/50 text-background hover:bg-background hover:text-foreground",
          )}
        >
          Shop
        </a>
      </div>
    </header>
  )
}
