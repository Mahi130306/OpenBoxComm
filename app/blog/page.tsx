import type { Metadata } from 'next'
import { blogs } from '@/lib/community-data'
import { BlogSearch } from '@/components/BlogSearch'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Community updates, building playbooks, event recaps, and practical notes from Open Box servers.',
  alternates: { canonical: '/blog' },
}


export default async function BlogsPage({ searchParams }: { searchParams: Promise<{ server?: string }> }) {
  const { server: serverQuery } = await searchParams
  const serverFilter = serverQuery?.toLowerCase()

  const activeBlogs = blogs.filter((blog: any) => blog.category !== 'dbw')

  const filteredBlogs = serverFilter
    ? activeBlogs.filter((blog) => blog.server.toLowerCase() === serverFilter)
    : activeBlogs

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <Badge variant="outline" className="mb-4 border-pink-500/30 text-pink-400 px-4 py-1">
          Field Notes
        </Badge>
        <h1 className="mb-6 text-5xl font-black tracking-tighter sm:text-6xl lg:text-7xl">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-600">Blog.</span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Community updates, building playbooks, event recaps, and practical notes from the Open Box network.
        </p>
      </div>

      <div className="relative">
         <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent blur-[100px] -z-10" />
         <BlogSearch initialBlogs={filteredBlogs} />
      </div>
    </div>
  )
}
