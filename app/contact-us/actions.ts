'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function submitContactForm(formData: FormData) {
  const supabase = await createClient()

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('body') as string // The textarea name was 'body' in the original file

  const { error } = await supabase
    .from('contact_submissions')
    .insert([{ name, email, subject, message }])

  if (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: 'Failed to send message. Please try again later.' }
  }

  revalidatePath('/contact-us')
  return { success: true }
}
