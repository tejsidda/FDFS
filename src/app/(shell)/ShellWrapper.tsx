"use client"

import { usePathname } from "next/navigation"
import { TopNav } from "@/components/TopNav"

export default function ShellWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  if (isHome) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900/95 to-neutral-950">
      <TopNav />
      <main className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6 md:py-8">
        {children}
      </main>
    </div>
  )
}
