import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FDFS',
  description: 'Your personal movie space.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-neutral-950 text-white">{children}</body>
    </html>
  );
}
