'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-24 sm:px-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Coming Soon</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 mb-6">
        <p className="text-center text-sm mb-4">
          We're working on an amazing dashboard experience. Check back soon!
        </p>
        <p className="text-center text-xs text-muted-foreground">
          Join our Discord server to stay updated on launch.
        </p>
      </div>

      <Link href="/">
        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  )
}
