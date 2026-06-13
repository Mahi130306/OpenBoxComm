'use client'

import { useDiscordMembers } from "@/lib/hooks/useDiscordMembers";
import { servers as communityServers } from "@/lib/community-data";

export function DiscordStats() {
  const memberCounts = useDiscordMembers();
  
  // Dynamically adopt any live server
  const liveServers = communityServers.filter(s => s.isLive && s.inviteCode);

  return (
    <div className="flex flex-col gap-3">
      {liveServers.map(server => (
        <div key={server.slug} className="flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:bg-accent/50">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">{server.name}</span>
            <span className="text-xs text-muted-foreground capitalize">{server.tags[0] || 'Community'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-bold text-emerald-500">
              {(memberCounts[server.slug] || server.memberCount).toLocaleString()}
            </span>
            <span className="text-xs text-emerald-500/70">members</span>
          </div>
        </div>
      ))}
    </div>
  );
}