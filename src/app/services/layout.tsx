import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - WebAesthetic',
  description: 'Comprehensive web development and digital solutions. From web Mobiles to Mobile development, UI/UX design, SEO optimization, and cloud solutions.',
  keywords: [
    'web development',
    'Mobile Mobile development', 
    'ui ux design',
    'seo optimization',
    'e-commerce solutions',
    'cloud services',
    'react development',
    'next.js',
    'digital solutions'
  ],
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
