import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/layout/header";
import LaunchOfferBanner from "@/components/ui/LaunchOfferBanner";
import LaunchOfferStrip from "@/components/ui/LaunchOfferStrip";
import FloatingOfferPopup from "@/components/ui/FloatingOfferPopup";
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://webaesthetic.vercel.Mobile'),
  title: "The Brand Cabin - Premium Web Development Agency",
  description: "Transform your digital presence with custom web solutions, modern designs, and cutting-edge development from The Brand Cabin agency.",
  keywords: ["web development", "web design", "react development", "next.js", "custom websites", "digital agency"],
  authors: [{ name: "The Brand Cabin Team" }],
  creator: "The Brand Cabin",
  publisher: "The Brand Cabin",
  openGraph: {
    title: "The Brand Cabin - Premium Web Development Agency",
    description: "Transform your digital presence with custom web solutions",
    url: "https://The Brand Cabin.com",
    siteName: "The Brand Cabin",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Brand Cabin - Premium Web Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Brand Cabin - Premium Web Development Agency",
    description: "Transform your digital presence with custom web solutions",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J247NNNVC4"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J247NNNVC4');
        `}
      </Script>
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased dark`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <Header />
          <LaunchOfferBanner />
          <LaunchOfferStrip />
          {children}
          <FloatingOfferPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
