
export interface Server {
  id: string
  slug: string
  name: string
  description: string
  tags: string[]
  invite_url: string
  member_count: number
  is_live: boolean
  created_at: string
}

export interface Event {
  id: string
  server_id: string
  server?: Server
  name: string
  description: string
  date: string
  is_offline: boolean
  ticket_status: 'free' | 'ticketed' | 'sold_out' | 'coming_soon'
  ticket_price?: number
  active: boolean
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  server_id: string
  server?: Server
  published_at: string
  published: boolean
}

export interface Supporter {
  id: string
  name: string
  tier?: string
}

export type UpdateType = 'blog' | 'event' | 'doc' | 'update' | 'announcement' | 'release' | 'feature' | 'fix' | 'video' | 'community'

export interface Update {
  id: string
  title: string
  type: UpdateType
  date: string
  description: string
  href: string
  isNew: boolean
}