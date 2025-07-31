'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}

function GoogleAnalyticsComponent({ gaId }: { gaId: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!gaId || !window.gtag) return

    const url = pathname + searchParams.toString()
    
    window.gtag('config', gaId, {
      page_path: url,
      campaign: {
        source: searchParams.get('utm_source') || undefined,
        medium: searchParams.get('utm_medium') || undefined,
        name: searchParams.get('utm_campaign') || undefined,
      },
    })
  }, [pathname, searchParams, gaId])

  if (!gaId) return null

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  )
}

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsComponent gaId={gaId} />
    </Suspense>
  )
}