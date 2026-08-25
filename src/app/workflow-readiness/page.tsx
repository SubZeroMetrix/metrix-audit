import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Workflow Readiness -- Reading Your Audit Result',
  description: 'Whether automating a workflow will actually help, based on what your Metrix Audit result surfaced -- and when automation makes an undocumented process worse, not better.',
  path: '/workflow-readiness',
})

export default function WorkflowReadinessPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Workflow Readiness', url: '/workflow-readiness' }])
  const article = articleSchema({
    headline: 'Workflow Readiness -- Reading Your Audit Result',
    description: 'When automating a workflow helps, and when it makes an undocumented process worse.',
    path: '/workflow-readiness',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader eyebrow="After Your Audit" title="Workflow Readiness -- Reading Your Audit Result" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Workflow Readiness', href: '/workflow-readiness' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="prose-content">
          <p>
            Automation makes a documented, consistent process faster. It makes an undocumented, inconsistent one
            fail faster and with less visibility into why. Before automating anything, the honest question is
            whether the underlying process is actually consistent yet -- not whether the software is available.
          </p>

          <h2>A Simple Test</h2>
          <p>
            Ask two different people to describe, step by step, how a specific task gets done today (e.g. how a
            missed call gets followed up, how a job gets scheduled). If their answers match closely, that process
            is ready to automate. If they don&apos;t match, automating it will encode whichever version the software
            happens to follow -- and quietly break the other version.
          </p>

          <h2>Reading Your Signal</h2>
          <p>
            If your primary signal was <strong>scheduling discipline</strong> or <strong>response speed</strong>,
            those are usually the most automation-ready of the six -- they involve a specific, repeatable trigger
            (a booking, an inbound lead) and a specific, repeatable next step. If your signal was{' '}
            <strong>team accountability</strong> or <strong>documentation</strong>, automation can surface the gap
            (a missing number, a missing record) but won&apos;t create the habit of filling it in -- that still
            takes a person deciding to do it consistently first.
          </p>

          <h2>What Modern Trades CRM Actually Automates Today</h2>
          <p>
            As of this review, automation is one of the least-built areas of Modern Trades CRM -- most of what
            exists (contacts, the sales pipeline, scheduling) is currently a manual workflow, not a triggered one.
            See the <a href="https://www.moderntradescrm.com/capabilities">capabilities matrix</a> for exactly
            what&apos;s automated versus manual before assuming a specific automation exists.
          </p>
        </div>

        <div className="card-panel bg-gray-50 border-brand-electric/20 text-center mt-12">
          <p className="text-gray-700 mb-4">Not sure if your process is consistent enough to automate yet? A second pair of eyes helps.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://www.themoderntradesmentor.com" className="btn-secondary">Work With TMT</a>
            <Link href="/audit" className="btn-primary">Retake the Audit</Link>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
