import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/dashboard'

  if (code) {
    const supabase = await createClient()
    const { error, data } = await supabase.auth.exchangeCodeForSession(code)

    if (!error && data?.session) {
      const { provider_token, provider_refresh_token, user } = data.session

      if (provider_token && user) {
        const supabase = await createClient()

        // Store tokens
        await supabase.from('user_tokens').upsert({
          user_id: user.id,
          access_token: provider_token,
          refresh_token: provider_refresh_token || '',
          expires_at: new Date(Date.now() + 3600 * 1000).toISOString(),
        })

        // Fetch guilds from Discord
        try {
          const guildRes = await fetch('https://discord.com/api/users/@me/guilds', {
            headers: { Authorization: `Bearer ${provider_token}` },
          })
          if (guildRes.ok) {
            const guilds = await guildRes.json()
            const guildData = guilds.map((g: any) => ({
              user_id: user.id,
              guild_id: g.id,
              guild_name: g.name,
              guild_icon: g.icon,
              is_owner: g.owner,
              roles: [], // Roles require member endpoint which needs per-guild permissions
            }))

            await supabase.from('user_guilds').upsert(guildData, { onConflict: 'user_id,guild_id' })
          }
        } catch (e) {
          console.error('Failed to fetch Discord guilds:', e)
        }
      }

      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
