'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, LogIn } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  const handleDiscordLogin = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        scopes: 'identify email guilds guilds.members.read',
      },
    })
    if (error) {
      console.error('Error logging in:', error.message)
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-24 sm:px-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
        <p className="text-muted-foreground">Sign in to access your dashboard</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 mb-6">
        <p className="text-center text-sm mb-6">
          Connect your Discord account to see your server memberships and profile.
        </p>

        <Button
          className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white"
          onClick={handleDiscordLogin}
          disabled={loading}
        >
          <LogIn className="mr-2 h-4 w-4" />
          {loading ? 'Connecting...' : 'Continue with Discord'}
        </Button>
      </div>

      <Link href="/">
        <Button variant="ghost" className="w-full flex items-center justify-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  )
}
