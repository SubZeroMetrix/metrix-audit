import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, organizationSchema, websiteSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Metrix Audit -- Transparent Contractor Diagnostic',
  description: 'A free, evidence-based operating diagnostic for contractor businesses. See your primary signal immediately, no email required.',
})

const SIGNAL_PREVIEW = [
  { label: 'Digital Visibility', icon: '01' },
  { label: 'Response Speed', icon: '02' },
  { label: 'Reviews', icon: '03' },
  { label: 'Scheduling', icon: '04' },
  { label: 'Documentation', icon: '05' },
  { label: 'Accountability', icon: '06' },
]

export default function HomePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }} />

      <section className="relative overflow-hidden bg-gradient-navy dark-section py-24">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="section-container relative grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center">
          <div>
            <p className="text-label text-brand-cyan mb-4">Free -- no email required</p>
            <h1 className="text-display text-white mb-6">A Transparent Diagnostic, Not a Score</h1>
            <p className="text-body-lg mb-10 max-w-xl">
              Nine questions across six operating signals. See your primary signal, a supporting signal, and one
              recommended first action -- immediately, before anything is asked of you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/audit" className="btn-primary">Start the Free Audit</Link>
              <Link href="/methodology" className="btn-outline-visible !text-white !border-white/40">Read the Methodology</Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 rounded-full bg-brand-electric/20 blur-3xl" />
            <Image
              src="/brand/metrix-audit-mark.png"
              alt="Metrix Audit diagnostic mark"
              width={420}
              height={420}
              className="relative w-64 sm:w-80 lg:w-96 h-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-8 bg-brand-navy-light border-y border-white/10">
        <div className="section-container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {SIGNAL_PREVIEW.map((s) => (
              <div key={s.label} className="bg-brand-navy px-4 py-5 text-center">
                <p className="text-2xl font-bold text-brand-cyan mb-1">{s.icon}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container max-w-4xl">
          <h2 className="text-headline text-gray-900 mb-10 text-center">What Makes This Different</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="card-panel">
              <div className="w-10 h-10 rounded-lg bg-brand-electric/10 flex items-center justify-center mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-electric" />
              </div>
              <p className="font-semibold text-gray-900 mb-2">No opaque score</p>
              <p className="text-sm text-gray-500">Every signal traces back to a specific question you answered. Nothing is a black-box number.</p>
            </div>
            <div className="card-panel">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              </div>
              <p className="font-semibold text-gray-900 mb-2">Honest about unknowns</p>
              <p className="text-sm text-gray-500">&quot;Not sure&quot; answers are shown as unknown evidence, never folded into a negative finding.</p>
            </div>
            <div className="card-panel">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
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
