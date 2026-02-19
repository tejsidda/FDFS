import { Movie } from "@/lib/types"
import MoviePosterCard from "./MoviePosterCard"

type CardSize = "large" | "small"

export default function WatchlistRail({
  title,
  movies,
  cardSize = "large",
}: {
  title: string
  movies: Movie[]
  cardSize?: CardSize
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-lg font-medium text-white/90">
        {title}
      </h2>
      <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-2">
        {movies.map((movie) => (
          <MoviePosterCard
            key={movie.id}
            movie={movie}
            size={cardSize}
          />
        ))}
      </div>
    </section>
  )
}
