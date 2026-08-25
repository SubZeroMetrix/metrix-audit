import { buildMetadata, breadcrumbSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Terms of Use',
  description: 'Terms of use for the Metrix Audit diagnostic tool.',
  path: '/terms',
})

export default function TermsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Terms', url: '/terms' },
  ])

  return (
    <div className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="section-container max-w-3xl">
        <p className="text-label text-brand-electric mb-3">Legal</p>
        <h1 className="text-headline text-gray-900 mb-8">Terms of Use</h1>
        <div className="prose-content">
          <p>Metrix Audit is operated by SubZeroMetrix LLC.</p>

          <h2>Nature of the Tool</h2>
          <p>
            Metrix Audit is a self-assessment diagnostic based on your own answers to nine questions. It is not a
            certification, rating, license, or independent audit performed by a third party. Results reflect only
            the information you provide.
          </p>

          <h2>No Guarantees</h2>
          <p>
            Metrix Audit makes no guarantee about business outcomes, revenue, or performance. The recommended first
            action is a starting point, not a complete solution.
          </p>

          <h2>Affiliate Links</h2>
          <p>
            This site links to The Modern Trades Mentor and Modern Trades CRM, both SubZeroMetrix LLC affiliates.
            Using Metrix Audit does not obligate you to use either.
          </p>

          <h2>Changes</h2>
          <p>These terms may be updated from time to time. Continued use of the site constitutes acceptance of the current terms.</p>
        </div>
      </div>
    </div>
  )
}
