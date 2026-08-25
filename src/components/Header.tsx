import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-surface-border">
      <div className="section-container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/brand/metrix-audit-logo.png" alt="Metrix Audit" width={168} height={56} className="hidden sm:block h-9 w-auto" priority />
          <Image src="/brand/metrix-audit-mark.png" alt="Metrix Audit" width={56} height={56} className="sm:hidden h-9 w-9" priority />
        </Link>
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/audit" className="hover:text-brand-electric transition-colors">Free Audit</Link>
          <Link href="/methodology" className="hover:text-brand-electric transition-colors">Methodology</Link>
          <Link href="/about" className="hover:text-brand-electric transition-colors">About</Link>
          <Link href="/contact" className="hover:text-brand-electric transition-colors">Contact</Link>
        </nav>
        <Link href="/audit" className="btn-primary !px-5 !py-2 !text-sm shrink-0">Start Free Audit</Link>
      </div>
    </header>
  )
}
