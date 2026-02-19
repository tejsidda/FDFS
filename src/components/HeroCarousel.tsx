import { Movie } from "@/lib/types"

export default function HeroCarousel({ movie }: { movie: Movie }) {
  const bgStyle = movie.poster.startsWith("linear-gradient")
    ? { background: movie.poster }
    : { backgroundImage: `url(${movie.poster})` }

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={bgStyle}
      />

      {/* Bottom fade (strong) */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      {/* Left fade (subtle) */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end px-16 pb-20">
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            {movie.title}
          </h1>
          <p className="text-sm text-white/70">
            {movie.language} · {movie.year}
          </p>

          <div className="mt-4 flex gap-3">
            <button
              type="button"
              className="rounded bg-white px-6 py-2 text-sm font-semibold text-black hover:bg-white/90"
            >
              ▶ Watch
            </button>
            <button
              type="button"
              className="rounded bg-white/20 px-6 py-2 text-sm font-semibold text-white hover:bg-white/30"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
