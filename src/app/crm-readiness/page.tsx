import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'CRM Readiness -- Reading Your Audit Result',
  description: 'If your Metrix Audit result pointed at response speed, scheduling, or documentation, here is what that specifically means for whether software would help.',
  path: '/crm-readiness',
})

export default function CrmReadinessPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'CRM Readiness', url: '/crm-readiness' }])
  const article = articleSchema({
    headline: 'CRM Readiness -- Reading Your Audit Result',
    description: 'What a response-speed, scheduling, or documentation signal specifically implies about CRM readiness.',
    path: '/crm-readiness',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="After Your Audit" title="CRM Readiness -- Reading Your Audit Result" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'CRM Readiness', href: '/crm-readiness' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="prose-content">
          <p>
            A CRM is not the answer to every signal the audit surfaces. It genuinely helps with three of the six:
            response speed, scheduling discipline, and documentation. It does not fix digital visibility, review
            management, or team accountability by itself -- those are people/process problems a piece of software
            can support but not solve alone.
          </p>

          <h2>If Response Speed Was Your Primary Signal</h2>
          <p>
            Software helps by giving every inbound lead a visible, trackable record instead of relying on someone
            remembering to reply. It does not make anyone reply faster on its own -- that&apos;s still a team
            behavior. See what&apos;s <Link href="/operating-domains#response-speed">actually behind this signal</Link>.
          </p>

          <h2>If Scheduling Discipline Was Your Primary Signal</h2>
          <p>
            A shared calendar visible to more than one person directly addresses the core problem: information
            that lives in one person&apos;s head instead of somewhere everyone can see. This is one of the more
            direct software fixes among the six signals.
          </p>

          <h2>If Documentation Was Your Primary Signal</h2>
          <p>
            A CRM gives job records a consistent home instead of scattered notes or memory. It only helps if the
            habit of writing things down gets built alongside it -- the software provides the place, not the habit.
          </p>

          <h2>If Your Signal Was Digital Visibility, Reviews, or Team Accountability</h2>
          <p>
            A CRM is not the first fix here. Digital visibility is a listings/website problem. Review management
            is a request-and-respond habit problem. Team accountability is a visibility-into-shared-numbers
            problem that a CRM can support once other pieces exist, but won&apos;t create on its own.
            Start with the underlying gap, not the software.
          </p>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 text-center mt-12">
          <p className="text-gray-700 mb-4">
            See exactly what&apos;s verified working today in{' '}
            <a href="https://www.moderntradescrm.com/capabilities" className="text-brand-electric underline">Modern Trades CRM</a>,
            honestly labeled -- or retake the diagnostic.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://www.moderntradescrm.com" className="btn-secondary">Modern Trades CRM</a>
            <Link href="/audit" className="btn-primary">Retake the Audit</Link>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
