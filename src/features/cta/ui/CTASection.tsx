'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Container } from '@/shared/ui/Container/Container';
import { Button } from '@/shared/ui/Button/Button';

export function CTASection() {
    const t = useTranslations('cta');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const contactLinks = [
        { key: 'email', icon: Mail, href: 'mailto:contact@anthonyatiro.com' },
        { key: 'linkedin', icon: Linkedin, href: 'https://linkedin.com/in/anthonyatiro' },
        { key: 'github', icon: Github, href: 'https://github.com/anthonyatiro' }
    ];

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                />
            </div>

            {/* Top gradient overlay for smooth transition */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none z-20" />

            <Container className="relative z-10" ref={ref}>
                <div className="max-w-4xl mx-auto text-center">
                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
                            <span className="text-white">{t('title')}</span>
                            <br />
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                {t('titleHighlight')}
                            </span>
                            <br />
                            <span className="text-white">{t('titleEnd')}</span>
                        </h2>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        {t('description')}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-12"
                    >
                        <Button variant="primary" size="lg" className="group text-lg px-10 py-5">
                            {t('button')}
                            <Send className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                    </motion.div>

                    {/* Contact Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        {contactLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <motion.a
                                    key={link.key}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                    className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
                                >
                                    <Icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-300 group-hover:text-white transition-colors">
                                        {t(`contact.${link.key}`)}
                                    </span>
                                </motion.a>
                            );
                        })}
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="mt-16 flex justify-center gap-4">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -10, 0],
                                    opacity: [0.3, 1, 0.3]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.3
                                }}
                                className="w-2 h-2 rounded-full bg-cyan-400"
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
