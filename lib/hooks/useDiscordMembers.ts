'use client';

import { useState, useEffect } from 'react';
import { servers } from '@/lib/community-data';

export function useDiscordMembers(targetSlug?: string) {
  const [counts, setCounts] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    servers.forEach(s => {
      initial[s.slug] = s.memberCount;
    });
    return initial;
  });

  useEffect(() => {
    let mounted = true;

    const fetchCounts = async () => {
      // Only fetch live servers that have an inviteCode
      const liveServers = servers.filter((s) => s.isLive && s.inviteCode);
      const serversToFetch = targetSlug 
        ? liveServers.filter((s) => s.slug === targetSlug) 
        : liveServers;

      await Promise.allSettled(
        serversToFetch.map(async (server) => {
          try {
            const res = await fetch(`/api/v1/stats/discord?code=${server.inviteCode}`);
            if (res.ok) {
              const data = await res.json();
              if (data.approximate_member_count !== undefined && mounted) {
                setCounts((prev) => ({ 
                  ...prev, 
                  [server.slug]: data.approximate_member_count 
                }));
              }
            }
          } catch (error) {
            console.error(`Failed to fetch stats for ${server.slug}`, error);
          }
        })
      );
    };

    fetchCounts();
    // Poll every 30 seconds
    const interval = setInterval(fetchCounts, 30_000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [targetSlug]);

  return counts;
}
