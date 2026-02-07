'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Container } from '@/shared/ui/Container/Container';
import { Card } from '@/shared/ui/Card/Card';

const projectGallery = {
    orderly: ['/projects/orderly/first.png', '/projects/orderly/second.png'],
    serviestiba: ['/projects/serviestiba/first.png', '/projects/serviestiba/second.png', '/projects/serviestiba/third.png', '/projects/serviestiba/fourth.png'],
    viajaya: ['/projects/viajaya/first.png', '/projects/viajaya/second.png', '/projects/viajaya/third.png', '/projects/viajaya/fourth.png'],
    altoq: ['/projects/altoq/first.png', '/projects/altoq/second.png', '/projects/altoq/third.png'],
    skillconnect: ['/projects/skillconnect/first.png', '/projects/skillconnect/second.png', '/projects/skillconnect/third.png']
};

const projectLinks: Record<string, { repo?: string; demo?: string }> = {
    orderly: {
        repo: 'https://github.com/CodeUp-Labs/ordely-frontend'
    },
    serviestiba: {
        repo: 'https://github.com/AnthonyCod/serviestiba-back',
        demo: 'https://serviestiba-front.vercel.app/login'
    },
    viajaya: {
        repo: 'https://github.com/Kodo-Takai/frontend-app-kodotakai',
        demo: 'https://frontend-app-kodotakai-demo.vercel.app/'
    },
    altoq: {
        repo: 'https://github.com/AltoqOfficial/altoq-pwa',
        demo: 'https://altoqperu.com'
    },
    skillconnect: {
        repo: 'https://github.com/AnthonyCod/SkillConnect',
        demo: 'https://anthonycod.github.io/SkillConnect/'
    }
};

export function DeploymentsSection() {
    const t = useTranslations('deployments');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setCurrentImageIndex(0);
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    const nextImage = () => {
        if (!selectedProject) return;
        const images = projectGallery[selectedProject as keyof typeof projectGallery] || [];
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        if (!selectedProject) return;
        const images = projectGallery[selectedProject as keyof typeof projectGallery] || [];
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const projects = ['orderly', 'serviestiba', 'viajaya', 'altoq', 'skillconnect'];
    const currentLinks = selectedProject ? projectLinks[selectedProject] : null;

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background with smooth transition */}
            <div className="absolute inset-0 bg-linear-to-b from-gray-900 via-gray-950 to-black" />

            {/* Top gradient overlay for smooth transition */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-linear-to-b from-gray-900 to-transparent pointer-events-none z-10" />

            <Container className="relative z-10" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                {/* Projects Slider */}
                <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                    {projects.map((project, index) => {
                        const images = projectGallery[project as keyof typeof projectGallery] || [];
                        const coverImage = images[0];

                        return (
                            <motion.div
                                key={project}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="flex-none w-[85vw] md:w-[400px] snap-center cursor-pointer"
                                onClick={() => { setSelectedProject(project); setCurrentImageIndex(0); }}
                            >
                                <Card variant="glass" className="overflow-hidden group h-full flex flex-col hover:border-cyan-500/50 transform-gpu">
                                    {/* Project Image Preview */}
                                    <div className="relative h-72 bg-gray-900 overflow-hidden">
                                        {coverImage && (
                                            <Image
                                                src={coverImage}
                                                alt={t(`projects.${project}.title`)}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                            />
                                        )}

                                        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent z-10" />

                                        {/* Placeholder gradient fallback or verify overlay */}
                                        {!coverImage && (
                                            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/30 via-blue-500/30 to-purple-500/30 group-hover:scale-110 transition-transform duration-500" />
                                        )}

                                        {/* Indication to click */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                            <span className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10">
                                                Ver Detalles
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                            {t(`projects.${project}.title`)}
                                        </h3>

                                        <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
                                            {t(`projects.${project}.description`)}
                                        </p>

                                        {/* Tech Stack Preview */}
                                        <div className="flex flex-wrap gap-2">
                                            {t.raw(`projects.${project}.tech`).slice(0, 3).map((tech: string) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {t.raw(`projects.${project}.tech`).length > 3 && (
                                                <span className="px-3 py-1 text-xs bg-gray-800 border border-gray-700 rounded-full text-gray-400">
                                                    +{t.raw(`projects.${project}.tech`).length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>

            {/* Project Details Modal - Moved outside Container to prevent z-index/fixed position issues */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-5xl bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-gray-900/50 backdrop-blur-md sticky top-0 z-10">
                                <h3 className="text-2xl font-bold text-white">
                                    {t(`projects.${selectedProject}.title`)}
                                </h3>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Scrollable Body */}
                            <div className="overflow-y-auto p-6 space-y-8">
                                {/* Gallery Section */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                                        {t('modal.gallery')}
                                    </h4>
                                    <div className="relative h-80 md:h-[450px] w-full bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group ring-1 ring-white/10 shadow-2xl">
                                        {/* Current Image */}
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={currentImageIndex}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute inset-0 flex items-center justify-center bg-black/40"
                                            >
                                                <Image
                                                    src={projectGallery[selectedProject as keyof typeof projectGallery]?.[currentImageIndex] || ''}
                                                    alt={`Screenshot ${currentImageIndex + 1} of ${selectedProject}`}
                                                    fill
                                                    className="object-cover"
                                                    priority={currentImageIndex === 0}
                                                />
                                                {/* Gradient overlay for better text contrast if needed */}
                                                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
                                            </motion.div>
                                        </AnimatePresence>

                                        {/* Navigation Buttons */}
                                        <button
                                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-cyan-500/80 text-white opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110 backdrop-blur-sm border border-white/10 z-20"
                                        >
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-cyan-500/80 text-white opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110 backdrop-blur-sm border border-white/10 z-20"
                                        >
                                            <ChevronRight className="w-6 h-6" />
                                        </button>

                                        {/* Dots */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/30 rounded-full backdrop-blur-sm z-20">
                                            {projectGallery[selectedProject as keyof typeof projectGallery]?.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setCurrentImageIndex(idx)}
                                                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-cyan-400 w-8' : 'bg-gray-500 hover:bg-gray-400 w-2'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Description & Details Grid */}
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="md:col-span-2 space-y-4">
                                        <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                                            {t('modal.about')}
                                        </h4>
                                        <p className="text-gray-300 leading-relaxed text-lg">
                                            {t(`projects.${selectedProject}.fullDescription`)}
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Links */}
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                                                {t('modal.links')}
                                            </h4>
                                            <div className="flex gap-3">
                                                {/* Repo Link */}
                                                {currentLinks?.repo ? (
                                                    <a
                                                        href={currentLinks.repo}
                                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Github className="w-5 h-5" />
                                                        <span>{t('modal.code')}</span>
                                                    </a>
                                                ) : (
                                                    <button
                                                        disabled
                                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-gray-500 cursor-not-allowed opacity-50"
                                                    >
                                                        <Github className="w-5 h-5" />
                                                        <span>{t('modal.code')}</span>
                                                    </button>
                                                )}

                                                {/* Demo Link */}
                                                {currentLinks?.demo ? (
                                                    <a
                                                        href={currentLinks.demo}
                                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 rounded-lg text-cyan-400 transition-colors"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <ExternalLink className="w-5 h-5" />
                                                        <span>{t('modal.demo')}</span>
                                                    </a>
                                                ) : (
                                                    <button
                                                        disabled
                                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-900/10 border border-cyan-900/10 rounded-lg text-cyan-900/40 cursor-not-allowed opacity-50"
                                                    >
                                                        <ExternalLink className="w-5 h-5" />
                                                        <span>{t('modal.demo')}</span>
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        {/* Tech Stack Full List */}
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                                                {t('modal.tech')}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {t.raw(`projects.${selectedProject}.tech`).map((tech: string) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-lg text-gray-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
