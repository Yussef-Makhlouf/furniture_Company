import './globals.css'
import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'

const cairo = Cairo({ subsets: ['arabic'] })

export const metadata: Metadata = {
  title: 'شركة النقل الحديثة | خدمات نقل احترافية',
  description: 'تقدم شركة النقل الحديثة خدمات نقل احترافية وموثوقة للعملاء السكنيين والتجاريين. احصل على عرض سعر مجاني اليوم!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}

