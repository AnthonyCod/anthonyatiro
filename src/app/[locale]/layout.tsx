import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/config';
import '../globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'Anthony Atiro | Full Stack Developer & Software Architect',
    description: 'Crafting scalable solutions with modern technologies. Specialized in building high-performance applications that drive innovation.',
    keywords: ['Full Stack Developer', 'Software Architect', 'Next.js', 'React', 'TypeScript', 'Node.js'],
    authors: [{ name: 'Anthony Atiro' }],
    creator: 'Anthony Atiro',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://anthonyatiro.com',
        title: 'Anthony Atiro | Full Stack Developer',
        description: 'Crafting scalable solutions with modern technologies.',
        siteName: 'Anthony Atiro Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Anthony Atiro | Full Stack Developer',
        description: 'Crafting scalable solutions with modern technologies.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} className={inter.variable}>
            <body className="min-h-screen">
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
