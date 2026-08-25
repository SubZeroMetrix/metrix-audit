import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'About & Disclosure',
  description: 'Metrix Audit is owned and operated by SubZeroMetrix LLC. The Modern Trades Mentor and Modern Trades CRM are affiliates, disclosed wherever they are recommended.',
  path: '/about',
})

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <PageHeader eyebrow="About" title="About Metrix Audit" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />

      <div className="section-container max-w-3xl py-16">
        <div className="prose-content">
          <p>
            Metrix Audit is a free, transparent operating diagnostic for contractor and field-service businesses.
            It is owned and operated by <strong>SubZeroMetrix LLC</strong>.
          </p>

          <h2>Ownership &amp; Affiliation</h2>
          <p>
            SubZeroMetrix LLC also owns SubZeroMetrix.com (contractor revenue intelligence) and is affiliated with:
          </p>
          <ul>
            <li>
              <strong>The Modern Trades Mentor (TMT)</strong> -- local, hands-on contractor consulting in Pinellas
              County, FL. TMT is an affiliate, not an independent third party. The Modern Trades Mentor LLC has a{' '}
              <a href="https://www.bbb.org/us/fl/dunedin/profile/consultant/the-modern-trades-mentor-llc-0653-90465091">BBB Business Profile with BBB Serving West Florida</a>.
            </li>
            <li><strong>Modern Trades CRM</strong> -- a national CRM and follow-up system built by TMT. Also an affiliate.</li>
          </ul>
          <p>
            When Metrix Audit recommends either, that affiliation is disclosed at the point of recommendation, not
            only in this footer note. Using Metrix Audit does not require using either affiliate -- the audit result
            stands on its own.
          </p>

          <h2>What We Don&apos;t Do</h2>
          <p>
            We don&apos;t sell certifications, don&apos;t claim independent-third-party status we don&apos;t have,
            and don&apos;t fabricate urgency, benchmarks, or results to make the audit look more dramatic than the
            evidence supports.
          </p>
        </div>
      </div>
    </div>
  )
}
