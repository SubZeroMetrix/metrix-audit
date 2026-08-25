import { buildMetadata, breadcrumbSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Questions about your Metrix Audit result, or feedback on the diagnostic itself.',
  path: '/contact',
})

export default function ContactPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ])

  return (
    <div className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="section-container max-w-lg">
        <p className="text-label text-brand-electric mb-3">Contact</p>
        <h1 className="text-headline text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-body-lg mb-8">
          A live contact form isn&apos;t set up yet on this site. In the meantime, reach us through the working
          contact form on SubZeroMetrix.com, the parent company site.
        </p>
        <div className="card-panel">
          <a href="https://www.subzerometrix.com/contact?subject=Metrix+Audit+inquiry" className="btn-primary inline-block">Contact SubZeroMetrix</a>
        </div>
      </div>
    </div>
  )
}
