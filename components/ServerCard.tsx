import { ExternalLink, Users } from 'lucide-react'
import Link from 'next/link'

interface ServerCardProps {
  name: string
  description: string
  memberCount?: number
  inviteUrl: string
  icon?: string
}

export function ServerCard({ name, description, memberCount, inviteUrl, icon }: ServerCardProps) {
  return (
    <div className="group rounded-lg border border-border bg-card p-6 hover:shadow-md transition-shadow flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{name}</h3>
          {icon && <span className="text-3xl mt-2">{icon}</span>}
        </div>
      </div>
      <p className="text-sm text-muted-foreground flex-grow mb-4">{description}</p>
      <div className="flex items-center justify-between">
        {memberCount && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{memberCount.toLocaleString()}</span>
          </div>
        )}
        <Link
          href={inviteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          Join
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
