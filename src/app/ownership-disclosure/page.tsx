import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Ownership & Disclosure',
  description: 'Who operates Metrix Audit and how it relates to Modern Trades CRM, The Modern Trades Mentor, and other SubZeroMetrix LLC properties.',
  path: '/ownership-disclosure',
})

export default function OwnershipDisclosurePage() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Ownership & Disclosure', url: '/ownership-disclosure' }])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader eyebrow="Ownership & Disclosure" title="Ownership & Disclosure" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Ownership & Disclosure', href: '/ownership-disclosure' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="prose-content">
          <h2>Who Operates This Site</h2>
          <p>Metrix Audit is a transparent contractor operating diagnostic operated by <strong>SubZeroMetrix LLC</strong>.</p>

          <h2>Affiliated Businesses</h2>
          <p>SubZeroMetrix LLC also owns or is affiliated with:</p>
          <ul>
            <li><strong>Modern Trades CRM</strong> (moderntradescrm.com) -- a national contractor CRM product.</li>
            <li><strong>The Modern Trades Mentor</strong> -- local, hands-on contractor consulting in Pinellas County, FL.</li>
            <li><strong>Modern Trades</strong> (moderntrades.io) -- a national contractor operations publication.</li>
            <li><strong>SubZeroMetrix</strong> (subzerometrix.com) and other SubZeroMetrix LLC properties.</li>
          </ul>
          <p>
            When your audit result recommends Modern Trades CRM or The Modern Trades Mentor, that recommendation is
            not independent -- it comes from a commonly-owned affiliate. We disclose this directly next to that
            recommendation, not only here. The audit&apos;s scoring itself never favors either recommendation --
            see the <a href="/methodology">methodology</a> page.
          </p>

          <h2>Affiliate Business Standing</h2>
          <p>
            The Modern Trades Mentor LLC, an affiliated company, has a{' '}
            <a href="https://www.bbb.org/us/fl/dunedin/profile/consultant/the-modern-trades-mentor-llc-0653-90465091">BBB Business Profile with BBB Serving West Florida</a>.
            This profile and its status do not apply to Metrix Audit.
          </p>
        </div>
        <p className="text-xs text-gray-500 mt-8">Last reviewed 2026-08-25.</p>
      </div>
    </div>
  )
}
