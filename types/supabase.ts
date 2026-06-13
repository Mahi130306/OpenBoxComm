export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      servers: {
        Row: {
          id: string
          slug: string
          name: string
          description: string
          tags: string[] | null
          invite_url: string
          member_count: number | null
          is_live: boolean | null
          doc_url: string | null
          created_at: string | null
        }
        Insert: Partial<Database['public']['Tables']['servers']['Row']>
        Update: Partial<Database['public']['Tables']['servers']['Row']>
      }
      events: {
        Row: {
          id: string
          server_id: string | null
          name: string
          description: string
          date: string
          is_offline: boolean | null
          ticket_status: 'free' | 'ticketed' | 'sold_out' | 'coming_soon' | null
          ticket_price: number | null
          active: boolean | null
          created_at: string | null
        }
        Insert: Partial<Database['public']['Tables']['events']['Row']>
        Update: Partial<Database['public']['Tables']['events']['Row']>
      }
      blog_posts: {
        Row: {
          id: string
          slug: string
          title: string
          excerpt: string
          content: string
          author: string
          server_id: string | null
          published_at: string | null
          published: boolean | null
          created_at: string | null
        }
        Insert: Partial<Database['public']['Tables']['blog_posts']['Row']>
        Update: Partial<Database['public']['Tables']['blog_posts']['Row']>
      }
      supporters: {
        Row: {
          id: string
          name: string
          tier: string | null
          created_at: string | null
        }
        Insert: Partial<Database['public']['Tables']['supporters']['Row']>
        Update: Partial<Database['public']['Tables']['supporters']['Row']>
      }
      users: {
        Row: {
          id: string
          discord_id: string
          discord_username: string
          email: string | null
          avatar_url: string | null
          servers: Json | null
          is_admin: boolean | null
          created_at: string | null
        }
        Insert: Partial<Database['public']['Tables']['users']['Row']>
        Update: Partial<Database['public']['Tables']['users']['Row']>
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}
