export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

export const pageview = (url: string) => {
  if (!window.gtag) return
  
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (!window.gtag) return
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}