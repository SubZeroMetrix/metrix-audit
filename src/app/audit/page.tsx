import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { AuditForm } from './AuditForm'

export const metadata = buildMetadata({
  title: 'Free Audit',
  description: 'Nine questions about how your contractor business actually operates. See your primary signal and recommended first action immediately, no email required.',
  path: '/audit',
})

export default function AuditPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Free Audit', url: '/audit' },
  ])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader
        eyebrow="Free -- no email required"
        title="The Metrix Audit"
        description={'Nine questions about digital visibility, response speed, reviews, scheduling, documentation, and accountability. Answers marked "not sure" are shown as unknown, not treated as a gap. See your primary signal and recommended first action immediately.'}
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Free Audit', href: '/audit' }]}
      />
      <div className="section-container max-w-2xl py-16">
        <AuditForm />
      </div>
    </div>
  )
}
