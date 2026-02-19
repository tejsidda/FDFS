import WatchlistRail from "@/components/WatchlistRail"
import { WATCHLIST_UP_NEXT, WATCHLIST_SAVED_EARLIER } from "@/lib/mock"

export default function WatchlistPage() {
  return (
    <div className="min-h-screen bg-black text-white px-8">
      {/* Section A — Header */}
      <header className="pt-12 pb-8 max-w-5xl">
        <h1 className="text-3xl font-semibold text-white tracking-tight">
          Watchlist
        </h1>
        <p className="mt-2 text-sm text-white/60">
          Movies you meant to watch — waiting patiently.
        </p>
      </header>

      {/* Section B — Up Next (primary rail) */}
      <WatchlistRail
        title="Up Next"
        movies={WATCHLIST_UP_NEXT}
        cardSize="large"
      />

      {/* Section C — Saved Earlier (secondary rail) */}
      <WatchlistRail
        title="Saved Earlier"
        movies={WATCHLIST_SAVED_EARLIER}
        cardSize="small"
      />

      <div className="pb-24" />
    </div>
  )
}
