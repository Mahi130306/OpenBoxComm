# DEV EDIT GUIDE

A scannable guide for managing content on the Open Box website.

---

## 📝 Blog Posts
- **File:** `lib/community-data.ts`
- **Format:** Add objects to the `blogs` array.

```ts
{
  slug: 'post-slug',
  title: 'Post Title',
  server: 'OB Team',
  date: 'YYYY-MM-DD',
  excerpt: 'Short summary...',
  readTime: 'X min read',
}
```

---

## 📅 Events
- **File:** `lib/community-data.ts`
- **Format:** Add objects to the `events` array.

```ts
{
  id: 'event-id',
  name: 'Event Name',
  server: 'Dev',
  serverSlug: 'dev',
  date: 'YYYY-MM-DDTHH:mm:ss+05:30',
  description: 'Full description...',
  ticketStatus: 'free', // or 'paid'
  isOffline: false,
  location: 'Discord',
  agenda: ['Step 1', 'Step 2'],
}
```

---

## 📚 Docs
- **File:** `lib/community-data.ts` (Metadata) and `lib/docs.ts` (Content).
- **Structure:**
  1. Add metadata to `docs` array in `lib/community-data.ts`.
  2. Add content to `docContents` record in `lib/docs.ts`.

```ts
// lib/docs.ts
'slug': {
  sections: [
    { title: 'Section Title', content: 'Section content...' }
  ]
}
```

---

## 👥 Team Members
- **File:** `lib/community-data.ts`
- **Avatar format:** Use DiceBear API or hosted image URL.

```ts
{
  slug: 'member-name',
  name: 'Name',
  role: 'Role',
  bio: 'Bio...',
  avatar: 'https://api.dicebear.com/10.x/initials/svg?seed=Name',
}
```

---

## 🖥️ Server Info
- **File:** `lib/community-data.ts`
- **Format:** Modify the `servers` array.

```ts
{
  slug: 'slug',
  name: 'Server Name',
  description: 'Tagline',
  tags: ['tag1'],
  memberCount: 0,
  isLive: true,
  accent: 'from-color to-color',
}
```

---

## ⚖️ Legal Pages
- **Path:** `app/legal/[page-name]/page.tsx`
- **Format:** Standard Next.js page component.
- **Requirement:** Include H1, Last Updated date, and numbered sections.

---

## 💡 Content Deletion
To delete any item, simply remove its corresponding object or entry from the relevant file listed above.
