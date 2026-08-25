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
            This site uses privacy-conscious analytics (Vercel Analytics) to understand aggregate traffic. We do
            not use third-party advertising or cross-site tracking cookies, and we do not sell any data.
          </p>

          <h2>First-Touch Attribution Cookie</h2>
          <p>
            This site sets a first-party cookie (<code>mt_first_touch</code>, and a same-purpose
            <code>mt_last_touch</code> cookie) to remember, for up to 90 days, which page and marketing source you
            first arrived from. This is separate from your audit answers -- it never includes anything you answer
            in the audit itself, only page/source information. It helps an affiliated site (Modern Trades CRM or
            Modern Trades) credit the right source if you later visit there through a link on this site. Set with
            <code>SameSite=Lax</code>, not shared with any advertising network.
          </p>

          <h2>Affiliates</h2>
          <p>
            The Modern Trades Mentor and Modern Trades CRM are SubZeroMetrix LLC affiliates. Following a link to
            either from this site does not share your audit answers with them -- only the first-touch source
            information described above.
          </p>

          <h2>Contact</h2>
          <p>Questions about this policy can be sent through the SubZeroMetrix.com contact form.</p>
        </div>
      </div>
    </div>
  )
}
