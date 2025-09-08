import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - The Brand Cabin | Our Featured Projects',
  description: 'Explore our diverse portfolio of cutting-edge web development, Mobile Mobiles, AI solutions, and e-commerce platforms. See the quality and innovation we deliver.',
  keywords: 'portfolio, web development, Mobile Mobiles, AI solutions, e-commerce, projects, case studies',
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
