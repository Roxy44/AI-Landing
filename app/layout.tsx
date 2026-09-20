import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import { site } from '@/lib/content';

import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://roxy44.github.io/AI-Landing';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: site.title,
    description: site.description,
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: site.title,
        description: site.description,
        type: 'website',
        images: [
            {
                url: '/images/hero.webp',
                width: 1372,
                height: 500,
                alt: 'AI Roleplay Generator showcase',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: site.title,
        description: site.description,
        images: ['/images/hero.webp'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang='en' className={`${geistSans.variable} h-full antialiased`}>
            <body className='min-h-full bg-[#0d0d0d] font-sans text-white'>{children}</body>
        </html>
    );
}
