import Link from 'next/link'
import { buildMetadata, organizationSchema, websiteSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Metrix Audit -- Transparent Contractor Diagnostic',
  description: 'A free, evidence-based operating diagnostic for contractor businesses. See your primary signal immediately, no email required.',
})

export default function HomePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }} />

      <section className="bg-gradient-navy dark-section py-24">
        <div className="section-container max-w-3xl text-center">
          <p className="text-label text-brand-cyan mb-4">Free -- no email required</p>
          <h1 className="text-display text-white mb-6">A Transparent Diagnostic, Not a Score</h1>
          <p className="text-body-lg mb-10 max-w-xl mx-auto">
            Nine questions about how your business actually operates. See your primary signal, a supporting signal,
            and what to check next -- immediately, before anything is asked of you.
          </p>
          <Link href="/audit" className="btn-primary">Start the Free Audit</Link>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container max-w-4xl">
          <h2 className="text-headline text-gray-900 mb-10 text-center">What Makes This Different</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="card-panel">
              <p className="font-semibold text-gray-900 mb-2">No opaque score</p>
              <p className="text-sm text-gray-500">Every signal traces back to a specific question you answered. Nothing is a black-box number.</p>
            </div>
            <div className="card-panel">
              <p className="font-semibold text-gray-900 mb-2">Honest about unknowns</p>
              <p className="text-sm text-gray-500">&quot;Not sure&quot; answers are shown as unknown evidence, never folded into a negative finding.</p>
            </div>
            <div className="card-panel">
              <p className="font-semibold text-gray-900 mb-2">One recommended action</p>
              <p className="text-sm text-gray-500">A single, specific first step -- not a list of everything that could theoretically be wrong.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-light-alt">
        <div className="section-container max-w-3xl text-center">
          <h2 className="text-headline text-gray-900 mb-4">Where This Fits</h2>
          <p className="text-body-lg mb-8">
            Metrix Audit is a diagnostic, not a solution. Depending on what your audit surfaces, the right next step
            might be local, hands-on help from{' '}
            <a href="https://www.themoderntradesmentor.com" className="text-brand-electric underline">The Modern Trades Mentor</a>{' '}
            or a national software system like{' '}
            <a href="https://www.moderntradescrm.com" className="text-brand-electric underline">Modern Trades CRM</a>.
            Both are SubZeroMetrix LLC affiliates -- disclosed, not hidden.
          </p>
          <Link href="/methodology" className="btn-secondary">Read the Methodology</Link>
        </div>
      </section>
    </div>
  )
}
