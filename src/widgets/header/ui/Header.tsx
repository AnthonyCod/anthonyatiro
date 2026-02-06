'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { Container } from '@/shared/ui/Container/Container';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '@/shared/lib/utils';

export function Header() {
    const t = useTranslations('header');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { key: 'home', href: '#home' },
        { key: 'tech', href: '#tech-stack' },
        { key: 'projects', href: '#projects' },
        { key: 'milestones', href: '#milestones' },
        { key: 'contact', href: '#contact' }
    ];

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-gray-950/95 backdrop-blur-lg border-b border-gray-800 shadow-lg'
                    : 'bg-transparent'
            )}
        >
            <Container>
                <nav className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl font-bold text-gray-300 bg-clip-text hover:scale-105 transition-transform duration-200"
                    >
                        Anthony Atiro
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.key}
                                href={item.href}
                                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
                            >
                                {t(`nav.${item.key}`)}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                        <LanguageSwitcher />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-800 animate-in slide-in-from-top duration-200">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.key}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                                >
                                    {t(`nav.${item.key}`)}
                                </Link>
                            ))}
                            <div className="pt-2 border-t border-gray-800">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
}
