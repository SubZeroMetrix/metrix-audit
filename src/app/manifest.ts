import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Metrix Audit',
    short_name: 'Metrix Audit',
    description: 'A free, transparent contractor operating diagnostic.',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      { src: '/brand/metrix-audit-mark.png', sizes: 'any', type: 'image/png' },
    ],
  }
}
