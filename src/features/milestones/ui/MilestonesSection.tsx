'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import { Container } from '@/shared/ui/Container/Container';
import { Card } from '@/shared/ui/Card/Card';

const milestoneIcons = {
    orderly: Briefcase,
    serviestiba: Briefcase,
    viajaya: Briefcase,
    altoq: Briefcase,
    skillconnect: Code
};

export function MilestonesSection() {
    const t = useTranslations('milestones');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const milestones = ['orderly', 'serviestiba', 'viajaya', 'altoq', 'skillconnect'];

    const milestoneImages = {
        orderly: '/lineTime/first.jpeg',
        serviestiba: '/lineTime/second.jpeg',
        viajaya: '/lineTime/third.jpeg',
        altoq: '/lineTime/fourth.jpeg',
        skillconnect: '/lineTime/fifth.jpeg'
    };

    return (
        <section id="milestones" className="py-24 relative overflow-hidden">
            {/* Background with smooth transition */}
            <div className="absolute inset-0 bg-linear-to-b from-black via-gray-950 to-gray-900">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            {/* Top gradient overlay for smooth transition */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-linear-to-b from-black to-transparent pointer-events-none z-10" />

            <Container className="relative z-10" ref={ref}>
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                {/* Timeline Horizontal Scroll Container */}
                <div className="relative pt-16">
                    {/* Horizontal Axis Line - Now clearly visible as the 'Time Spine' */}
                    <div className="absolute top-[5.5rem] left-0 w-full h-0.5 bg-linear-to-r from-transparent via-cyan-500/30 to-transparent pointer-events-none" />

                    <div className="flex overflow-x-auto gap-8 pb-12 px-4 md:px-0 scrollbar-hide snap-x snap-mandatory py-10">
                        {milestones.map((milestone, index) => {
                            // @ts-ignore
                            const imagePath = milestoneImages[milestone];

                            return (
                                <motion.div
                                    key={milestone}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="relative flex-none w-[85vw] md:w-[450px] snap-center flex flex-col items-center"
                                >
                                    {/* Timeline Marker Group */}
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 w-max">
                                        {/* Date Label - Floating Above */}
                                        <div className="mb-3 px-4 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 font-bold text-sm tracking-widest uppercase backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                            {t(`timeline.${milestone}.date`)}
                                        </div>

                                        {/* The Dot on the Axis */}
                                        <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)] border-2 border-gray-900 relative z-10 box-content" />

                                        {/* Vertical Connector Line to Card */}
                                        <div className="w-0.5 h-8 bg-linear-to-b from-cyan-400 to-transparent opacity-50" />
                                    </div>

                                    {/* Content Card */}
                                    <Card variant="glass" className="w-full h-full mt-8 overflow-hidden flex flex-col group border-gray-800 hover:border-cyan-500/50 transition-all duration-700 ease-in-out shadow-lg hover:shadow-cyan-900/20">
                                        {/* Image */}
                                        {imagePath && (
                                            <div className="relative h-72 w-full overflow-hidden shrink-0">
                                                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-700 ease-in-out z-10" />
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={imagePath}
                                                    alt={t(`timeline.${milestone}.title`)}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                                                />
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-1 relative">
                                            {/* Decorative top grad */}
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />

                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-700 ease-in-out">
                                                {t(`timeline.${milestone}.title`)}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed text-sm">
                                                {t(`timeline.${milestone}.description`)}
                                            </p>
                                        </div>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Decoration - Pagination or Scroll Hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex justify-center gap-2 mt-4"
                >
                    {milestones.map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-gray-700" />
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
