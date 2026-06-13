'use client'

import { useDiscordMembers } from "@/lib/hooks/useDiscordMembers";

export function ServerMemberCountInline({ slug, initialCount }: { slug: string, initialCount: number }) {
  const counts = useDiscordMembers(slug);
  const count = counts[slug] || initialCount;

  return (
    <p className="text-sm text-muted-foreground">~{count.toLocaleString()} members</p>
  );
}
