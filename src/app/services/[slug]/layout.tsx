import type { Metadata } from 'next'

interface ServiceLayoutProps {
  children: React.ReactNode
  params: Promise<{
    slug: string
  }>
}

// Service metadata mMobileing
const serviceMetadata = {
  'web-development': {
    title: 'Web Development Services | Professional Full-Stack Solutions',
    description: 'Expert web development services using React, Next.js, and Node.js. From custom web Mobilelications to e-commerce platforms, we deliver scalable solutions.',
    keywords: 'web development, react, nextjs, nodejs, full-stack development, custom web Mobilelications'
  },
  'Mobile-Mobile-development': {
    title: 'Mobile Mobile Development | iOS & Android Mobiles',
    description: 'Cross-platform Mobile Mobile development using React Native and Flutter. Create native-quality Mobiles for iOS and Android with seamless user experiences.',
    keywords: 'Mobile Mobile development, react native, flutter, ios Mobiles, android Mobiles, cross-platform'
  },
  'ui-ux-design': {
    title: 'UI/UX Design Services | User-Centered Design Solutions',
    description: 'Professional UI/UX design services that combine aesthetics with functionality. Create interfaces that users love and convert visitors into customers.',
    keywords: 'ui ux design, user interface design, user experience, wireframing, prototyping, design systems'
  },
  'e-commerce-solutions': {
    title: 'E-Commerce Development | Online Store Solutions',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics. Turn your products into profit with proven solutions.',
    keywords: 'ecommerce development, online store, shopping cart, payment integration, inventory management'
  },
  'seo-optimization': {
    title: 'SEO Optimization Services | Search Engine Marketing',
    description: 'Boost your online visibility with proven SEO strategies. Optimize your website to rank higher and attract more qualified traffic.',
    keywords: 'seo optimization, search engine optimization, keyword research, technical seo, content strategy'
  },
  'cloud-solutions': {
    title: 'Cloud Solutions | AWS, Azure & Google Cloud Services',
    description: 'Deploy and scale your Mobilelications with confidence using AWS, Azure, and Google Cloud. We handle the complexity so you can focus on growth.',
    keywords: 'cloud solutions, aws, azure, google cloud, cloud migration, devops, scalability'
  }
}

export async function generateMetadata({ params }: ServiceLayoutProps): Promise<Metadata> {
  const { slug } = await params
  const metadata = serviceMetadata[slug as keyof typeof serviceMetadata]
  
  if (!metadata) {
    return {
      title: 'Service Details | WebAesthetic',
      description: 'Professional web development and digital services'
    }
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'website',
      url: `https://webaesthetic.com/services/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
    }
  }
}

export default function ServiceLayout({ children }: ServiceLayoutProps) {
  return children
}
