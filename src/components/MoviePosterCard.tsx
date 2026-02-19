"use client"

import Link from "next/link"
import { Movie } from "@/lib/types"

type Size = "large" | "small"

const sizeClasses = {
  large: {
    card: "min-w-[180px] w-[180px]",
    poster: "aspect-[2/3] rounded-lg",
    title: "text-base font-medium",
  },
  small: {
    card: "min-w-[140px] w-[140px]",
    poster: "aspect-[2/3] rounded-lg",
    title: "text-sm font-medium",
  },
}

export default function MoviePosterCard({
  movie,
  size = "large",
}: {
  movie: Movie
  size?: Size
}) {
  const s = sizeClasses[size]
  const isGradient = movie.poster.startsWith("linear-gradient")

  return (
    <Link
      href={`/movie/${movie.id}`}
      className={`${s.card} group block text-left`}
    >
      <div
        className={`${s.poster} overflow-hidden bg-neutral-800 transition-transform duration-200 group-hover:scale-[1.03]`}
        style={
          isGradient
            ? { background: movie.poster }
            : { backgroundImage: `url(${movie.poster})`, backgroundSize: "cover", backgroundPosition: "center" }
        }
      />
      <h3 className={`${s.title} mt-2 text-white line-clamp-2`}>
        {movie.title}
      </h3>
      <span className="mt-1 inline-block rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80">
        {movie.language}
      </span>
      {movie.year != null && (
        <p className="mt-0.5 text-xs text-white/50">{movie.year}</p>
      )}
    </Link>
  )
}
