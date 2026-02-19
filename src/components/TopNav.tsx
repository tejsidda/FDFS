import Link from 'next/link';

export function TopNav() {
  return (
    <nav className="flex items-center justify-between px-4 py-4 md:px-6 border-b border-white/10 bg-black/40 backdrop-blur-sm">
      <Link href="/" className="text-xl font-semibold tracking-tight text-white">
        FDFS
      </Link>
      <div className="flex items-center gap-3">
        <Link
          href="/library"
          className="rounded-md px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors"
        >
          Library
        </Link>
        <Link
          href="/watchlist"
          className="rounded-md px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors"
        >
          Watchlist
        </Link>
        <Link
          href="/log"
          className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90 transition-colors"
        >
          Log
        </Link>
      </div>
    </nav>
  );
}
