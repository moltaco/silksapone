import Image from "next/image"

export function JournalFooter() {
  return (
    <>
      <section
        id="journal"
        className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-secondary"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
            — Journal
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] font-light text-balance">
            Letters from
            <br />
            <em className="italic">the workshop.</em>
          </h2>
          <p className="mt-8 text-foreground/70 max-w-lg mx-auto font-light leading-relaxed">
            Seasonal recipes, foraging notes, and the occasional photograph from
            our hillside. Sent slowly — about once a month.
          </p>
          <form className="mt-12 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 bg-transparent border-b border-foreground/30 px-1 py-3 text-center sm:text-left text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-foreground transition-colors"
            />
            <button
              type="button"
              className="bg-foreground text-background px-8 py-3 text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <footer className="relative bg-foreground text-background py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <Image
                src="/logo.png"
                alt="Silk Sapone"
                width={80}
                height={80}
                className="invert opacity-90 mb-6"
              />
              <p className="font-serif text-3xl tracking-[0.2em] mb-6">
                SILK SAPONE
              </p>
              <p className="text-background/60 max-w-sm font-light leading-relaxed">
                Botanical soap, made in Swansea since
                2026. Skin, kept quietly beautiful.
              </p>
            </div>

            <FooterCol title="Shop" links={["Cherry Blossom", "Lemon", "Lavender", "Mint"]} />
            <FooterCol title="House" links={["About Us", "Ingredients", "Sustainability", "Wholesale"]} />
            <FooterCol title="Care" links={["Shipping", "Returns", "Contact", "FAQ", "Press"]} />
          </div>

          <div className="border-t border-background/15 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-background/50 tracking-wider">
              © {new Date().getFullYear()} Silk Sapone — Swansea, Wales
            </p>
            <div className="flex gap-6 text-xs uppercase tracking-[0.25em] text-background/50">
              <a href="#" className="hover:text-background">Instagram</a>
              <a href="#" className="hover:text-background">Pinterest</a>
              <a href="#" className="hover:text-background">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="md:col-span-2">
      <p className="text-[10px] uppercase tracking-[0.3em] text-background/50 mb-5">
        {title}
      </p>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-background/85 hover:text-primary transition-colors font-light">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
