import Link from 'next/link'
import { FAQSearch } from '@/components/FAQSearch'
import { Button } from '@/components/ui/button'

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.08] to-cyan-400/[0.05] p-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Help center</p>
        <h1 className="mb-4">FAQ</h1>
        <p className="max-w-2xl text-muted-foreground">
          Search common questions about joining, servers, events, support, and community rules.
        </p>
      </div>

      <FAQSearch />

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild variant="outline">
          <Link href="/help">Back to Help</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/doc/rules">Read Rules</Link>
        </Button>
      </div>
    </div>
  )
}
