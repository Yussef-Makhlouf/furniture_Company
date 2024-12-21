import './globals.css'
import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'

const cairo = Cairo({ subsets: ['arabic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: "شركة النقل اكزوموف في جدة | خدمات نقل موثوقة واحترافية",
    template: '%s | شركة النقل الحديثة'
  },
  description: "شركة النقل الحديثة في جدة تقدم حلول نقل شاملة تشمل نقل المنازل، المكاتب، والأثاث التجاري مع فريق محترف وخبرة طويلة. نوفر تغليف آمن، فك وتركيب الأثاث، وخدمات تخزين موثوقة.",
  keywords: ["شركة نقل جدة", "نقل اثاث جدة", "شركة نقل عفش", "نقل منازل جدة", "خدمات نقل موثوقة", "افضل شركة نقل"],
  authors: [{ name: 'شركة النقل الحديثة' }],
  creator: 'شركة النقل الحديثة',
  publisher: 'شركة النقل الحديثة',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://your-domain.com',
    title: 'شركة النقل الحديثة في جدة',
    description: 'خدمات نقل احترافية وموثوقة في جدة',
    siteName: 'شركة النقل الحديثة',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'شركة النقل الحديثة في جدة',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة النقل الحديثة في جدة',
    description: 'خدمات نقل احترافية وموثوقة في جدة',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/03.avif" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1E40AF" />
      </head>
      <body className={cairo.className}>{children}</body>
    </html>
  )
}