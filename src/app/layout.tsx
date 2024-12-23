import SectionContainer from 'src/components/SectionContainer'
import siteMetadata from 'src/data/siteMetadata'
import { Analytics } from "@vercel/analytics/react"
import 'src/css/tailwind.css'
import { ReactLenis } from '@studio-freight/react-lenis'
import { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { SearchConfig, SearchProvider } from 'pliny/search'
import 'pliny/search/algolia.css'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'
import { ThemeProviders } from './theme-providers'
import SmoothScrolling from '@/components/SmoothScrolling'
const font = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-jetbrains-mono',
})

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
        default: siteMetadata.title,
        template: `%s | ${siteMetadata.title}`,
    },
    description: siteMetadata.description,
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: './',
        siteName: siteMetadata.title,
        images: [siteMetadata.socialBanner],
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: './',
        types: {
            'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: siteMetadata.title,
        card: 'summary_large_image',
        images: [siteMetadata.socialBanner],
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang={siteMetadata.language}
            className={`${font.variable} scroll-smooth`}
            suppressHydrationWarning
        >
            <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="/static/favicons/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/static/favicons/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/static/favicons/favicon-16x16.png"
            />
            <link rel="manifest" href="/static/favicons/site.webmanifest" />
            <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="theme-color" media="(prefers-color-scheme: light)" content="#E9D3B6" />
            <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#E9D3B6" />
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            <body className="bg-background text-black antialiased dark:text-white">
                <SmoothScrolling>
                <ThemeProviders>
                    <SectionContainer>
                        <div className="noise box-border flex h-full flex-col font-sans">
                            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                                {children}
                                <Analytics />
                            </SearchProvider>
                        </div>
                    </SectionContainer>
                </ThemeProviders>
                <GoogleTagManager gtmId="GTM-PXJS8VXB" />
            </SmoothScrolling>
            </body>
        </html>
    )
}
