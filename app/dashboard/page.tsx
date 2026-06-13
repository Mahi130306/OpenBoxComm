'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const isLoginEnabled = process.env.NEXT_PUBLIC_LOGIN_ENABLED === 'true'
  const supabase = createClient()

  useEffect(() => {
    if (!isLoginEnabled) {
      setLoading(false)
      return
    }

    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
      setLoading(false)
    })
  }, [isLoginEnabled, supabase])

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
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user.user_metadata?.full_name || user.email}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full border border-border">
            <img src={user.user_metadata?.avatar_url} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Servers You're In</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg border border-border p-3 bg-muted/30">
                <div className="h-10 w-10 rounded-lg bg-rose-500/20 flex items-center justify-center font-bold text-rose-500">JN</div>
                <div>
                  <p className="text-sm font-semibold">Open Box Junction</p>
                  <p className="text-xs text-muted-foreground">Member</p>
                </div>
              </div>
              {/* Mocking for now, will be dynamic with Supabase + Discord API */}
              <div className="flex items-center justify-center rounded-lg border border-dashed border-border p-3 text-sm text-muted-foreground">
                Syncing more servers...
              </div>
            </div>
          </section>

          <div className="grid gap-6 sm:grid-cols-2">
            <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Your Tickets</h2>
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <p className="text-sm text-muted-foreground">No tickets purchased yet.</p>
                <Button variant="link" size="sm" asChild>
                  <Link href="/events">Browse Events</Link>
                </Button>
              </div>
            </section>

            <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Events Registered</h2>
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <p className="text-sm text-muted-foreground">You haven't registered for any events.</p>
              </div>
            </section>
          </div>
        </div>

        <aside className="space-y-6">
          <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Profile Info</h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Discord Username</p>
                <p className="text-sm">{user.user_metadata?.full_name}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
                <p className="text-sm">{user.email}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Account Created</p>
                <p className="text-sm">{new Date(user.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          </section>

          <Button variant="outline" className="w-full text-rose-500" onClick={() => supabase.auth.signOut()}>
            Logout
          </Button>
        </aside>
      </div>
    </div>
  )
}
