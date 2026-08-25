import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
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
    <div className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="section-container max-w-2xl">
        <p className="text-label text-brand-electric mb-3">Free -- no email required</p>
        <h1 className="text-headline text-gray-900 mb-4">The Metrix Audit</h1>
        <p className="text-lg text-gray-500 mb-12">
          Nine questions about digital visibility, response speed, reviews, scheduling, documentation, and
          accountability. Answers marked &quot;not sure&quot; are shown as unknown, not treated as a gap. See your
          primary signal and recommended first action immediately.
        </p>
        <AuditForm />
      </div>
    </div>
  )
}
