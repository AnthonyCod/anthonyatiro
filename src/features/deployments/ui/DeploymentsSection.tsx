'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Container } from '@/shared/ui/Container/Container';
import { Card } from '@/shared/ui/Card/Card';
import { Button } from '@/shared/ui/Button/Button';

const projectImages = {
    ecommerce: '/projects/ecommerce.jpg',
    analytics: '/projects/analytics.jpg',
    api: '/projects/api.jpg'
};

export function DeploymentsSection() {
    const t = useTranslations('deployments');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const projects = ['orderly', 'skillconnect', 'viajaya'];

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background with smooth transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black" />

            {/* Top gradient overlay for smooth transition */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none z-10" />

            <Container className="relative z-10" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {t('title')}
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                    </div>

                    <Button variant="outline" className="mt-6 md:mt-0 group">
                        {t('viewAll')}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Card variant="glass" className="overflow-hidden group h-full flex flex-col">
                                {/* Project Image */}
                                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />

                                    {/* Placeholder gradient - replace with actual images */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-purple-500/30 group-hover:scale-110 transition-transform duration-500" />

                                    {/* Overlay Icons */}
                                    <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a
                                            href="#"
                                            className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                                            aria-label="View project"
                                        >
                                            <ExternalLink className="w-5 h-5 text-white" />
                                        </a>
                                        <a
                                            href="#"
                                            className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                                            aria-label="View code"
                                        >
                                            <Github className="w-5 h-5 text-white" />
                                        </a>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {t(`projects.${project}.title`)}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4 flex-1">
                                        {t(`projects.${project}.description`)}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {t.raw(`projects.${project}.tech`).map((tech: string) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
