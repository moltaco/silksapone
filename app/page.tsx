import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Collection } from "@/components/collection"
import { JournalFooter } from "@/components/journal-footer"

export default function Page() {
  return (
    <main className="page-enter bg-background">
      <div className="site-loader" aria-hidden="true">
        <div className="site-loader-mark">SILK SAPONE</div>
      </div>
      <SiteNav />
      <Hero />
      <Collection />
      <JournalFooter />
    </main>
  )
}
