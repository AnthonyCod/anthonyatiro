'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Globe } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { locales, type Locale } from '@/config';

export function LanguageSwitcher() {
    const locale = useLocale() as Locale;
    const pathname = usePathname();
    const router = useRouter();

    const handleLocaleChange = (newLocale: Locale) => {
        if (newLocale === locale) return;

        // Replace the locale in the pathname
        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPathname = segments.join('/');

        router.push(newPathname);
    };

    return (
        <div className="relative group">
            <button
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Change language"
            >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium uppercase">{locale}</span>
            </button>

            {/* Dropdown */}
            <div className="absolute right-0 mt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden">
                    {locales.map((loc) => (
                        <button
                            key={loc}
                            onClick={() => handleLocaleChange(loc)}
                            className={cn(
                                'w-full px-4 py-3 text-left text-sm transition-colors duration-150',
                                locale === loc
                                    ? 'bg-cyan-500/20 text-cyan-400 font-medium'
                                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                            )}
                        >
                            {loc === 'en' ? 'English' : 'Español'}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
