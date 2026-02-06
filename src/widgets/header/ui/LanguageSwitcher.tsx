'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { type Locale } from '@/config';

export function LanguageSwitcher() {
    const locale = useLocale() as Locale;
    const pathname = usePathname();
    const router = useRouter();

    const toggleLocale = () => {
        const newLocale = locale === 'en' ? 'es' : 'en';

        // Replace the locale in the pathname
        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPathname = segments.join('/');

        router.push(newPathname);
    };

    return (
        <button
            onClick={toggleLocale}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
            aria-label={locale === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
        >
            {locale === 'en' ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 741 390" className="w-6 h-auto rounded-sm shadow-sm flex-shrink-0 object-cover">
                    <rect width="741" height="390" fill="#b22234"/>
                    <rect y="30" width="741" height="30" fill="#fff"/>
                    <rect y="90" width="741" height="30" fill="#fff"/>
                    <rect y="150" width="741" height="30" fill="#fff"/>
                    <rect y="210" width="741" height="30" fill="#fff"/>
                    <rect y="270" width="741" height="30" fill="#fff"/>
                    <rect y="330" width="741" height="30" fill="#fff"/>
                    <rect width="296" height="210" fill="#3c3b6e"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" className="w-6 h-auto rounded-sm shadow-sm flex-shrink-0 object-cover">
                    <rect width="750" height="500" fill="#c60b1e"/>
                    <rect y="125" width="750" height="250" fill="#ffc400"/>
                </svg>
            )}
            <span className="text-sm font-medium uppercase">{locale}</span>
        </button>
    );
}
