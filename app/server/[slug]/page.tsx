import { redirect } from 'next/navigation'

export default function LegacyServerRoute({ params }: { params: { slug: string } }) {
  redirect(`/servers/${params.slug}`)
}
