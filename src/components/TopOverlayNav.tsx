import Link from "next/link"

export default function TopOverlayNav() {
  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between px-8 py-4 text-white">
      <Link href="/" className="font-semibold tracking-wide">
        FDFS
      </Link>
      <div className="flex gap-6 text-sm text-neutral-300">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <Link href="/library" className="hover:text-white transition-colors">
          Library
        </Link>
        <Link href="/watchlist" className="hover:text-white transition-colors">
          Watchlist
        </Link>
      </div>
    </div>
  )
}
