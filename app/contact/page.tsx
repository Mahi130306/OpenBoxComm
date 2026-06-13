import { redirect } from 'next/navigation'

// Permanent redirect: /contact -> /contact-us
export default function ContactRedirect() {
  redirect('/contact-us')
}
