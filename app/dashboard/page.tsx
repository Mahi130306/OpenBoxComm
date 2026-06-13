'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const isLoginEnabled = process.env.NEXT_PUBLIC_LOGIN_ENABLED === 'true'

  useEffect(() => {
    if (!isLoginEnabled) {
      setLoading(false)
      return
    }

    const supabase = createClient()
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
      setLoading(false)
    })
  }, [isLoginEnabled])

  if (!isLoginEnabled) {
    return (
      <div className="mx-auto max-w-md px-4 py-24 text-center sm:px-6">
        <h1 className="text-3xl mb-4">Login Required</h1>
        <p className="text-muted-foreground mb-6">Login is coming soon along with dashboard. Join our Discord to stay updated.</p>
        <Button asChild>
          <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE_MAIN} target="_blank" rel="noopener noreferrer">
            Join Discord
          </a>
        </Button>
      </div>
    )
  }

  if (loading) {
    return <div className="text-center py-24">Loading...</div>
  }

  if (!user) {
    router.push('/login')
    return null
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-2">Dashboard</h1>
      <p className="text-muted-foreground mb-8">Welcome back, {user.email}</p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="border border-border rounded-lg p-6 bg-surface">
          <h2 className="text-xl mb-3">Your Tickets</h2>
          <p className="text-muted-foreground">No tickets purchased yet.</p>
        </div>
        <div className="border border-border rounded-lg p-6 bg-surface">
          <h2 className="text-xl mb-3">Events Registered</h2>
          <p className="text-muted-foreground">You haven't registered for any events.</p>
        </div>
        <div className="border border-border rounded-lg p-6 bg-surface md:col-span-2">
          <h2 className="text-xl mb-3">Servers You're In</h2>
          <p className="text-muted-foreground">Connect your Discord to see server membership.</p>
        </div>
      </div>
    </div>
  )
}
