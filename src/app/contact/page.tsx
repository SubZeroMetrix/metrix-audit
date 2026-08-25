import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

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
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader eyebrow="Contact" title="Get in Touch" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]} />
      <div className="section-container max-w-lg py-16">
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
