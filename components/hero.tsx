"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const soapImages = [
  "/soap-cherry.png",
  "/soap-lemon.png",
  "/soap-lavender.png",
  "/soap-mint.png",
]

const scrollingSoaps = Array.from({ length: 8 }, () => soapImages).flat()

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const bgY = scrollY * 0.5
  const midY = scrollY * 0.25
  const soapY = scrollY * 0.15
  const textY = scrollY * 0.35
  const fadeOpacity = Math.max(0, 1 - scrollY / 600)

  return (
    <section
      id="top"
      className="relative h-screen min-h-[720px] w-full overflow-hidden bg-foreground"
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${bgY}px, 0) scale(1.15)`,
          background:
            "radial-gradient(ellipse at 18% 12%, oklch(0.34 0.045 75 / 0.85), transparent 46%), linear-gradient(135deg, oklch(0.13 0.018 55) 0%, oklch(0.18 0.025 72) 42%, oklch(0.08 0.015 45) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-foreground/20 to-foreground/70" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[6] overflow-visible will-change-transform"
        style={{
          transform: `translate3d(0, ${soapY}px, 0)`,
          opacity: fadeOpacity,
        }}
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[42deg] overflow-visible">
          <div className="diagonal-soap-track flex w-max gap-8 sm:gap-10 lg:gap-14">
            {scrollingSoaps.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative h-[250px] w-[250px] shrink-0 sm:h-[330px] sm:w-[330px] md:h-[440px] md:w-[440px] lg:h-[540px] lg:w-[540px] xl:h-[620px] xl:w-[620px]"
                style={{ transform: `rotate(${index % 2 === 0 ? 9 : -7}deg)` }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-contain drop-shadow-2xl"
                  loading="eager"
                  sizes="(min-width: 1280px) 620px, (min-width: 1024px) 540px, (min-width: 768px) 440px, (min-width: 640px) 330px, 250px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-background/40 to-transparent will-change-transform"
        style={{ transform: `translate3d(0, ${midY * -0.3}px, 0)` }}
      />

      <div
        className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12 lg:px-20 will-change-transform"
        style={{
          transform: `translate3d(0, ${textY * -0.5}px, 0)`,
          opacity: fadeOpacity,
        }}
      >
        <div className="max-w-3xl">
          <p className="text-background/70 text-xs uppercase tracking-[0.4em] mb-6 md:mb-8">
            Est. 2019 — Small Batch, Slow Crafted
          </p>
          <h1 className="font-serif text-background text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] leading-[0.95] tracking-tight font-light text-balance">
            Skin, kept
            <br />
            <em className="italic font-light text-primary">quietly</em> beautiful.
          </h1>
          <p className="mt-8 md:mt-10 text-background/80 text-base md:text-lg max-w-xl leading-relaxed font-light">
            Silk Sapone is a botanical soap house rooted in patience. Each bar is
            cold-pressed by hand, and pressed with a single
            leaf — a small reminder of where it came from.
          </p>
          <div className="mt-10">
            <a
              href="#collection"
              className="inline-flex items-center justify-center bg-background text-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary transition-colors duration-300"
            >
              Discover the Collection
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[5]"
        style={{ opacity: Math.max(0, 0.18 - scrollY / 800) }}
        aria-hidden="true"
      >
        <Image
          src="/logo.png"
          alt=""
          width={820}
          height={820}
          className="invert opacity-60"
          priority
        />
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        style={{ opacity: fadeOpacity }}
      >
        <span className="text-background/60 text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-px h-12 bg-background/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-background animate-[slideDown_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        .diagonal-soap-track {
          animation: diagonalSoapLoop 18s linear infinite;
        }

        @keyframes diagonalSoapLoop {
          from {
            transform: translate3d(-12.5%, 0, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  )
}
