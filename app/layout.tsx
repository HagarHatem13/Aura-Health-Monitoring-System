import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aura Health | Biosensor Wellness',
  description: 'Real-time cardiovascular wellness, heart rate analytics, and mindful recovery with Aura Health.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#020913',
  userScalable: false,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-[#020913]"><body className="antialiased">{children}</body></html>
}
