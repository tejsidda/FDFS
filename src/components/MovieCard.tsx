import Link from 'next/link';
import type { Movie } from '@/lib/types';

interface MovieCardProps {
  movie: Movie;
  size?: 'rail' | 'grid';
}

export function MovieCard({ movie, size = 'rail' }: MovieCardProps) {
  const isGradient = movie.poster.startsWith('linear-gradient');
  return (
    <Link
      href={`/movie/${movie.id}`}
      className={`group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-lg ${
        size === 'grid' ? 'w-full' : 'flex-shrink-0 w-[140px] sm:w-[160px]'
      }`}
    >
      <article className="flex flex-col gap-2">
        <div
          className="aspect-[2/3] w-full rounded-lg overflow-hidden shadow-lg bg-neutral-800"
          style={
            isGradient
              ? { background: movie.poster }
              : { backgroundImage: `url(${movie.poster})`, backgroundSize: 'cover' }
          }
        />
        <div className="min-h-0">
          <h3 className="text-sm font-medium text-white truncate group-hover:text-white/90">
            {movie.title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 mt-0.5">
            <span className="inline-flex items-center rounded bg-white/15 px-1.5 py-0.5 text-xs text-white/80">
              {movie.language}
            </span>
            <span className="text-xs text-white/60">{movie.year}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
