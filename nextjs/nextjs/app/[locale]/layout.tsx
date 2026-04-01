import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Bebas_Neue, Poppins } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import '../globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'Batuku & Cultura — Cap-Vert Suisse — Cultura dos PALOP',
  description: 'Association culturelle promouvant les cultures des pays africains de langue portugaise (PALOP) en Suisse romande.',
  keywords: ['PALOP', 'Batuku', 'Cap-Vert', 'Suisse', 'culture africaine', 'Payerne'],
  openGraph: {
    title: 'Batuku & Cultura — Cultura dos PALOP',
    description: 'La voix de l\'Afrique lusophone au cœur de la Suisse.',
    locale: 'fr_CH',
    type: 'website',
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${bebasNeue.variable} ${poppins.variable}`}>
      <body className="antialiased bg-brand-bg">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
