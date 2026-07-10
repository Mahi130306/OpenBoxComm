import type { Metadata } from 'next'
import { blogs } from '@/lib/community-data'
import { BlogSearch } from '@/components/BlogSearch'

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Community updates, building playbooks, event recaps, and practical notes from Open Box servers.',
  alternates: { canonical: '/blogs' },
}


export default async function BlogsPage({ searchParams }: { searchParams: Promise<{ server?: string }> }) {
  const { server: serverQuery } = await searchParams
  const serverFilter = serverQuery?.toLowerCase()

  const activeBlogs = blogs.filter((blog: any) => blog.category !== 'dbw')

  const filteredBlogs = serverFilter
    ? activeBlogs.filter((blog) => blog.server.toLowerCase() === serverFilter)
    : activeBlogs

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-xl border border-black/10 bg-black/[0.04] dark:bg-white/[0.06] p-8 shadow-sm dark:border-white/10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-pink-600 dark:text-pink-300">Field notes</p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">Blogs</h1>
        <p className="max-w-2xl text-lg text-muted-foreground/90">
          Community updates, building playbooks, event recaps, and practical notes from Open Box servers.
        </p>
      </div>

      <BlogSearch initialBlogs={filteredBlogs} />
    </div>
  )
}
