'use client';

import { useTranslations } from 'next-intl';
import { Heart } from 'lucide-react';
import { Container } from '@/shared/ui/Container/Container';

export function Footer() {
    const t = useTranslations('footer');
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-gray-800 bg-black">
            <Container>
                <div className="py-8">
                    <div className="flex flex-col items-center justify-center gap-3 text-center">
                        {/* Copyright */}
                        <p className="text-gray-500 text-sm">
                            {t('copyright').replace('2026', currentYear.toString())}
                        </p>

                        {/* Built with */}
                        <div className="flex items-center gap-2 text-gray-600 text-xs">
                            <span>{t('builtWith')}</span>
                            <Heart className="w-3 h-3 text-cyan-500 fill-cyan-500" />
                        </div>
                    </div>
                </div>
            </Container>

            {/* Gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </footer>
    );
}
