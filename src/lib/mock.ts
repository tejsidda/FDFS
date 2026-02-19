import { Movie } from "./types"

export const WATCHLIST: Movie[] = [
  {
    id: "1",
    title: "Kumbalangi Nights",
    year: 2019,
    language: "Malayalam",
    poster: "/images/KL.jpg",
  },
  {
    id: "2",
    title: "Parasite",
    year: 2019,
    language: "Korean",
    poster: "linear-gradient(145deg, #2d1a2d 0%, #140a14 100%)",
  },
  {
    id: "3",
    title: "RRR",
    year: 2022,
    language: "Telugu",
    poster: "linear-gradient(145deg, #4a1a1a 0%, #1a0a0a 100%)",
  },
]

export const RECENTLY_WATCHED: Movie[] = [
  ...WATCHLIST,
  {
    id: "4",
    title: "Vikram",
    year: 2022,
    language: "Tamil",
    poster: "linear-gradient(145deg, #2d2d1a 0%, #14140a 100%)",
  },
  {
    id: "5",
    title: "Jawan",
    year: 2023,
    language: "Hindi",
    poster: "linear-gradient(145deg, #1a1a3d 0%, #0a0a1a 100%)",
  },
]

/** Extra movies for Watchlist page (Up Next / Saved Earlier) */
const WATCHLIST_PAGE_MOVIES: Movie[] = [
  { id: "6", title: "Past Lives", year: 2023, language: "Korean", poster: "linear-gradient(145deg, #1a2d2d 0%, #0a1414 100%)" },
  { id: "7", title: "Jallikattu", year: 2019, language: "Malayalam", poster: "linear-gradient(145deg, #2d1a1a 0%, #140a0a 100%)" },
  { id: "8", title: "Drive My Car", year: 2021, language: "Japanese", poster: "linear-gradient(145deg, #1a1a2d 0%, #0a0a14 100%)" },
  { id: "9", title: "Sardar Udham", year: 2021, language: "Hindi", poster: "linear-gradient(145deg, #2d2d1a 0%, #14140a 100%)" },
  { id: "10", title: "Kaathal", year: 2023, language: "Malayalam", poster: "linear-gradient(145deg, #1a2d1a 0%, #0a140a 100%)" },
  { id: "11", title: "The Fabelmans", year: 2022, language: "English", poster: "linear-gradient(145deg, #2d1a2d 0%, #140a14 100%)" },
  { id: "12", title: "Aftersun", year: 2022, language: "English", poster: "linear-gradient(145deg, #1a2d2d 0%, #0a1414 100%)" },
  { id: "13", title: "Bajirao Mastani", year: 2015, language: "Hindi", poster: "linear-gradient(145deg, #2d1a1a 0%, #140a0a 100%)" },
  { id: "14", title: "Super Deluxe", year: 2019, language: "Tamil", poster: "linear-gradient(145deg, #1a1a2d 0%, #0a0a14 100%)" },
  { id: "15", title: "C/o Kancharapalem", year: 2018, language: "Telugu", poster: "linear-gradient(145deg, #2d2d1a 0%, #14140a 100%)" },
]

const ALL_MOVIES = [...new Map([...WATCHLIST, ...RECENTLY_WATCHED, ...WATCHLIST_PAGE_MOVIES].map((m) => [m.id, m])).values()]

export function getMovieById(id: string): Movie | undefined {
  return ALL_MOVIES.find((m) => m.id === id)
}

/** For Library page: all unique movies from watchlist + recently watched */
export const LIBRARY_MOVIES: Movie[] = ALL_MOVIES

/** Watchlist page — Up Next (primary rail) */
export const WATCHLIST_UP_NEXT: Movie[] = [
  WATCHLIST[0],
  WATCHLIST[1],
  WATCHLIST[2],
  WATCHLIST_PAGE_MOVIES[0],
  WATCHLIST_PAGE_MOVIES[1],
  WATCHLIST_PAGE_MOVIES[2],
  WATCHLIST_PAGE_MOVIES[3],
]

/** Watchlist page — Saved Earlier (secondary rail) */
export const WATCHLIST_SAVED_EARLIER: Movie[] = [
  RECENTLY_WATCHED[3],
  RECENTLY_WATCHED[4],
  WATCHLIST_PAGE_MOVIES[4],
  WATCHLIST_PAGE_MOVIES[5],
  WATCHLIST_PAGE_MOVIES[6],
  WATCHLIST_PAGE_MOVIES[7],
  WATCHLIST_PAGE_MOVIES[8],
  WATCHLIST_PAGE_MOVIES[9],
]
