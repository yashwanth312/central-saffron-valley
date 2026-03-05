import type { Metadata } from 'next'
import { Cormorant_Garamond, Libre_Baskerville, Special_Elite } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation/Navigation'
import { Footer } from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-baskerville',
})

const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-special-elite',
})

export const metadata: Metadata = {
  title: 'Central by Saffron Valley',
  description: 'An upscale Indian restaurant inspired by the golden age of India\'s Railways. Flavor, Story, Soul & Nostalgia.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${baskerville.variable} ${specialElite.variable}`}>
      <body className="bg-cream text-ink font-body">
        <Navigation />
        <div className="pt-[72px]">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
