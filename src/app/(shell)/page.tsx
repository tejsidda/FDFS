import HeroCarousel from "@/components/HeroCarousel"
import PosterRail from "@/components/PosterRail"
import TopOverlayNav from "@/components/TopOverlayNav"
import { WATCHLIST, RECENTLY_WATCHED } from "@/lib/mock"

export default function Home() {
  return (
    <main className="bg-black text-white">
      <TopOverlayNav />
      <HeroCarousel movie={WATCHLIST[0]} />
      <div className="-mt-10 h-10 bg-black" />

      {/* Spotify-style browsing */}
      <div className="pb-32">
        <PosterRail title="Recently Watched" movies={RECENTLY_WATCHED} />
        <PosterRail title="From Your Watchlist" movies={WATCHLIST} />
      </div>
    </main>
  )
}
