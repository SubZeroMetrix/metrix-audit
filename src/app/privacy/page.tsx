import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
import { PageHeader } from '@/components/PageHeader'

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'How Metrix Audit handles your audit answers and any information you provide.',
  path: '/privacy',
})

export default function PrivacyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Privacy', url: '/privacy' },
  ])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader eyebrow="Privacy" title="Privacy Policy" breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Privacy', href: '/privacy' }]} />
      <div className="section-container max-w-3xl py-16">
        <div className="prose-content">
          <p>Metrix Audit is operated by SubZeroMetrix LLC.</p>

          <h2>Audit Answers</h2>
          <p>
            Your answers to the free audit are processed entirely in your browser to produce your result. They are
            not currently transmitted to or stored on any server.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you contact us through the SubZeroMetrix.com contact form linked from this site, that submission is
            governed by <a href="https://www.subzerometrix.com/privacy">SubZeroMetrix&apos;s privacy policy</a>.
          </p>

          <h2>Analytics</h2>
          <p>
            This site uses privacy-conscious analytics (Vercel Analytics) to understand aggregate traffic. It does
            not use tracking cookies or sell any data.
          </p>

          <h2>Affiliates</h2>
          <p>
            The Modern Trades Mentor and Modern Trades CRM are SubZeroMetrix LLC affiliates. Following a link to
            either from this site does not share your audit answers with them.
          </p>

          <h2>Contact</h2>
          <p>Questions about this policy can be sent through the SubZeroMetrix.com contact form.</p>
        </div>
      </div>
    </div>
  )
}
