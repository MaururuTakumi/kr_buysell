import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'VisitPlus - 일본식 방문감정 서비스, 한국 첫 선!',
  description: '집에서 간편하게 → 당일 최고가 현금 지급. 럭셔리 브랜드, 시계, 주얼리, 한복, 골동품 방문 매입.',
  keywords: '방문감정, 방문매입, 럭셔리매입, 명품매입, 브랜드매입, 시계매입, 주얼리매입, 한복매입, 골동품매입',
  openGraph: {
    title: 'VisitPlus - 일본식 방문감정 서비스',
    description: '집에서 간편하게 → 당일 최고가 현금 지급',
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
        {children}
      </body>
    </html>
  )
}