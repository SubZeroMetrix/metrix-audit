import Link from 'next/link'
import { buildMetadata, organizationSchema, breadcrumbSchema, articleSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'
import { SIGNALS } from '@/lib/auditCheck'

export const metadata = buildMetadata({
  title: 'Operating Domains',
  description: 'The six operating signals the Metrix Audit measures -- digital visibility, response speed, review management, scheduling discipline, documentation, and team accountability -- explained in depth.',
  path: '/operating-domains',
})

const DOMAIN_DETAIL: Record<string, { checklist: string[]; example: string }> = {
  'digital-visibility': {
    checklist: [
      'Search your business name + primary service + city from a logged-out browser and note what actually appears.',
      'Check whether your address, phone number, and hours match exactly across every listing you can find.',
      'Confirm your website (if any) loads correctly on a phone, not just a desktop.',
    ],
    example: 'Say a prospective customer searches "emergency plumber [your city]" -- if your listing shows an outdated phone number or a service area that no longer matches where you actually work, that mismatch alone can end the decision before you ever get the call, regardless of the quality of your work.',
  },
  'response-speed': {
    checklist: [
      'Time your next 10 inbound leads from arrival to first reply, and write the numbers down.',
      'Check whether after-hours or weekend leads get any response at all, or wait until the next business day.',
      'Ask whether the person answering knows enough to give a real answer, not just take a message.',
    ],
    example: 'Say two contractors both quote the same job well. If one replies in 20 minutes and the other in 3 hours, most buyers commit to the first one before the second even calls back -- independent of price.',
  },
  'review-management': {
    checklist: [
      'Count new reviews received across every platform in the last 30 days.',
      'Check whether your most recent negative review (if any) has a public, professional response.',
      'Confirm your review profile reflects work from this year, not primarily years-old feedback.',
    ],
    example: 'Say a business has excellent work but its last review is 14 months old. A prospect comparing options reasonably wonders if the business is still active or has slowed down -- a false impression created purely by absence of recent signal.',
  },
  'scheduling-discipline': {
    checklist: [
      'Ask everyone who touches scheduling to describe, in writing, exactly how an appointment gets confirmed.',
      'Check whether more than one person can see the full schedule without asking someone else.',
      'Look for the last double-booking or missed appointment and trace what actually broke down.',
    ],
    example: 'Say a schedule lives only in one person\'s head or a single paper calendar. The day that person is out sick or overwhelmed, appointments get missed -- not because of bad intentions, but because the information had nowhere else to live.',
  },
  documentation: {
    checklist: [
      'Pull the record for your last five completed jobs and check whether each clearly states what was done.',
      'Check whether anything promised for "next time" during a job is written down anywhere.',
      'Confirm warranty or follow-up commitments are traceable to a specific job, not memory.',
    ],
    example: 'Say a customer calls back six months later disputing what was included in a job. Without documentation, that becomes a he-said-she-said dispute that costs goodwill and often a free redo -- a cost that a two-line job note would have prevented.',
  },
  'team-accountability': {
    checklist: [
      'Pick one number that matters (jobs completed this week, same-day call returns) and check who besides you could state it accurately right now.',
      'Check whether team performance is visible anywhere shared, or lives only in individual memory.',
      'Look for the last time a task fell through the cracks and trace whether anyone would have caught it earlier with visibility.',
    ],
    example: 'Say a technician quietly falls behind on callbacks for a month. Without a shared, visible number, that pattern is invisible until a customer complains -- by which point several relationships are already damaged.',
  },
}

export default function OperatingDomainsPage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Operating Domains', url: '/operating-domains' }])
  const article = articleSchema({
    headline: 'The Six Operating Domains',
    description: 'In-depth explanation of the six signals measured by the Metrix Audit.',
    path: '/operating-domains',
    dateModified: '2026-08-25',
  })

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHeader
        eyebrow="Operating Domains"
        title="The Six Operating Domains"
        description="Every question in the Metrix Audit belongs to exactly one of these six domains. Here is what each one actually means, with a worked example and a checklist you can run yourself, audit or not."
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Operating Domains', href: '/operating-domains' }]}
      />
      <div className="section-container max-w-3xl py-16">
        {Object.values(SIGNALS).map((s) => (
          <div key={s.id} id={s.id} className="prose-content mb-14 scroll-mt-24">
            <h2>{s.title}</h2>
            <p>{s.whatItMeans}</p>
            <p className="italic text-gray-600">{DOMAIN_DETAIL[s.id]?.example}</p>
            <h3>Check It Yourself</h3>
            <ul>
              {DOMAIN_DETAIL[s.id]?.checklist.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        ))}

        <div className="card-panel bg-gray-50 border-brand-electric/20 text-center mt-4">
          <p className="text-gray-700 mb-4">See which of these six is your business&apos;s primary signal right now.</p>
          <Link href="/audit" className="btn-primary">Take the Free Audit</Link>
        </div>
        <p className="text-xs text-gray-400 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
