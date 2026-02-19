import { getMovieById } from '@/lib/mock';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface MovieDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const { id } = await params;
  const movie = getMovieById(id);

  if (!movie) notFound();

  const isGradient = movie.poster.startsWith('linear-gradient');

  return (
    <div className="max-w-4xl">
      <Link
        href="/library"
        className="inline-block text-sm text-white/60 hover:text-white mb-6 transition-colors"
      >
        ← Back to Library
      </Link>

      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        <div
          className="flex-shrink-0 w-full max-w-[280px] aspect-[2/3] rounded-xl overflow-hidden shadow-xl bg-neutral-800 mx-auto md:mx-0"
          style={
            isGradient
              ? { background: movie.poster }
              : { backgroundImage: `url(${movie.poster})`, backgroundSize: 'cover' }
          }
        />

        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
            {movie.title}
          </h1>
          <div className="flex flex-wrap gap-3 text-white/70 mb-6">
            <span>{movie.year}</span>
            <span className="inline-flex items-center rounded bg-white/15 px-2 py-0.5 text-sm text-white/80">
              {movie.language}
            </span>
          </div>

          <p className="border-t border-white/10 pt-6 text-white/70">
            {movie.language} · {movie.year}
          </p>
        </div>
      </div>
    </div>
  );
}
