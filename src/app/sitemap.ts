import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.metrixaudit.com'
  const now = new Date().toISOString()

  const staticRoutes = ['', '/audit', '/methodology', '/operating-domains', '/about', '/contact', '/privacy', '/terms']

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1 : route === '/audit' ? 0.9 : 0.5,
  }))
}
