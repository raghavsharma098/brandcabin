import { Metadata } from 'next'
import ContactPageClient from '@/components/ui/ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Us - The Brand Cabin',
  description: 'Get in touch with The Brand Cabin for your web development needs. Contact our expert team today.',
}

export default function ContactPage() {
  return <ContactPageClient />
}
