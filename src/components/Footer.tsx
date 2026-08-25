import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-brand-navy text-gray-400 mt-24">
      <div className="section-container py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="font-bold text-white text-lg mb-3">Metrix Audit</p>
            <p className="text-sm leading-relaxed">
              A transparent contractor diagnostic. Metrix Audit is operated by SubZeroMetrix LLC.
              The Modern Trades Mentor (TMT) and Modern Trades CRM are SubZeroMetrix LLC affiliates,
              not independent third parties.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Site</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/audit" className="hover:text-white transition-colors">Free Audit</Link></li>
              <li><Link href="/methodology" className="hover:text-white transition-colors">Methodology</Link></li>
              <li><Link href="/operating-domains" className="hover:text-white transition-colors">Operating Domains</Link></li>
              <li><Link href="/crm-readiness" className="hover:text-white transition-colors">CRM Readiness</Link></li>
              <li><Link href="/workflow-readiness" className="hover:text-white transition-colors">Workflow Readiness</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Legal</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><a href="https://www.subzerometrix.com" className="hover:text-white transition-colors">SubZeroMetrix</a></li>
              <li><a href="https://www.moderntradescrm.com" className="hover:text-white transition-colors">Modern Trades CRM</a></li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-400 border-t border-white/10 pt-6">
          &copy; {new Date().getFullYear()} SubZeroMetrix LLC. Metrix Audit is a diagnostic tool, not a certification,
          rating agency, or licensing body.
        </p>
      </div>
    </footer>
  )
}
