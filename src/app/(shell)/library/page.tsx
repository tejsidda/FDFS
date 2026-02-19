import { LIBRARY_MOVIES } from '@/lib/mock';
import { MovieCard } from '@/components/MovieCard';

const LANGUAGES = ['All', 'Telugu', 'Hindi', 'Tamil', 'Malayalam', 'English', 'Korean', 'Japanese'];
const YEARS = ['All', '2024', '2023', '2022', '2019'];

export default function LibraryPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-white mb-6">Library</h1>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lang-filter" className="text-xs font-medium text-white/60">
            Language
          </label>
          <select
            id="lang-filter"
            className="rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="year-filter" className="text-xs font-medium text-white/60">
            Year
          </label>
          <select
            id="year-filter"
            className="rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"
          >
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {LIBRARY_MOVIES.map((movie) => (
          <MovieCard key={movie.id} movie={movie} size="grid" />
        ))}
      </div>
    </div>
  );
}
