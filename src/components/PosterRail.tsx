import { Movie } from "@/lib/types"

export default function PosterRail({
  title,
  movies,
}: {
  title: string
  movies: Movie[]
}) {
  return (
    <section className="px-8 mt-16">
      <h2 className="mb-4 text-sm font-semibold tracking-wide text-neutral-300 uppercase">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {movies.map((m) => (
          <div
            key={m.id}
            className="min-w-[160px] h-[240px] rounded-xl bg-cover bg-center transition-transform hover:-translate-y-2"
            style={
              m.poster.startsWith("linear-gradient")
                ? { background: m.poster }
                : { backgroundImage: `url(${m.poster})` }
            }
            title={m.title}
          />
        ))}
      </div>
    </section>
  )
}
