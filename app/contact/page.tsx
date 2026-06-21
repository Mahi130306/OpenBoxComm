import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Contact Us — Open Box',
  description: 'Reach out to the Open Box team.',
}

export default function ContactRedirect() {
  redirect('/contact-us')
}
