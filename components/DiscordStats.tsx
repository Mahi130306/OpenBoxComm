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
        <div key={server.slug} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">{server.name}</span>
            <span className="text-xs text-white/50 capitalize">{server.tags[0] || 'Community'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-bold text-[#6EE87A]">
              {(memberCounts[server.slug] || server.memberCount).toLocaleString()}
            </span>
            <span className="text-xs text-[#6EE87A]/70">members</span>
          </div>
        </div>
      ))}
    </div>
  );
}