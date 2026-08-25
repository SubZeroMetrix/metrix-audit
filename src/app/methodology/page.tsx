import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Methodology',
  description: 'How the Metrix Audit works: nine yes/no/unsure questions, deterministic scoring with no hidden weighting, and honest treatment of unknown answers.',
  path: '/methodology',
})

export default function MethodologyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Methodology', url: '/methodology' },
  ])
  const article = articleSchema({
    headline: 'Metrix Audit Methodology',
    description: 'How the Metrix Audit scores answers and selects a primary signal.',
    path: '/methodology',
  })

  return (
    <div className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />

      <div className="section-container max-w-3xl">
        <p className="text-label text-brand-electric mb-3">Methodology</p>
        <h1 className="text-headline text-gray-900 mb-8">How the Audit Actually Works</h1>

        <div className="prose-content">
          <h2>Nine Questions, Six Signals</h2>
          <p>
            The audit asks nine yes/no/unsure questions across six operating signals: digital visibility, response
            speed, review management, scheduling discipline, documentation, and team accountability. Each question
            belongs to exactly one signal.
          </p>

          <h2>No Opaque Score</h2>
          <p>
            There is no single numeric score, no percentile, and no hidden weighting. The signal with the most
            &quot;no&quot; answers becomes your primary signal; the next-highest becomes your supporting signal.
            Ties are broken by question order -- deterministic, not statistical.
          </p>

          <h2>Unknown Answers Are Never a Gap</h2>
          <p>
            A &quot;not sure&quot; answer is shown separately as unknown evidence worth checking. It is never counted
            toward a signal and never treated as a negative finding. We don&apos;t know what we don&apos;t know, and
            the audit says so directly.
          </p>

          <h2>No Fabricated Benchmarks</h2>
          <p>
            The audit does not compare your answers against an industry average, a percentile, or any claimed dataset
            of other contractors. We don&apos;t have that data, so we don&apos;t invent it. Every result traces
            directly back to your own answers.
          </p>

          <h2>What the Audit Does Not Do</h2>
          <p>
            It does not certify, license, rate, or rank your business. It does not create urgency it can&apos;t
            support with evidence. It recommends exactly one first action -- not a list of everything that could
            theoretically be improved.
          </p>
        </div>

        <div className="mt-12">
          <Link href="/audit" className="btn-primary">Take the Free Audit</Link>
        </div>
      </div>
    </div>
  )
}
