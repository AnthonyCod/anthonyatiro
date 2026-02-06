'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import { Container } from '@/shared/ui/Container/Container';

const milestoneIcons = {
    orderly: Briefcase,
    skillconnect: Code,
    education: GraduationCap
};

export function MilestonesSection() {
    const t = useTranslations('milestones');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const milestones = ['orderly', 'skillconnect', 'education'];

    return (
        <section id="milestones" className="py-24 relative overflow-hidden">
            {/* Background with smooth transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-gray-900">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            {/* Top gradient overlay for smooth transition */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

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
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                {/* Content */}
                <div className="max-w-4xl mx-auto relative">
                    {/* Continuous Line - Absolute Center (Desktop) or Left (Mobile) */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-cyan-500 to-blue-500/50 -translate-x-1/2" />

                    {milestones.map((milestone, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={milestone}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative mb-16 last:mb-0"
                            >
                                <div className="flex md:items-center flex-col md:flex-row gap-6 md:gap-0">

                                    {/* Simple Dot on the Line */}
                                    <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] -translate-x-1/2 mt-6 md:mt-0 z-10 border-2 border-black" />

                                    {/* Content Card - Left Side (Desktop Even) */}
                                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12 md:text-right md:order-1' : 'md:hidden'}`}>
                                        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                                            <div className="text-cyan-400 font-semibold mb-2">
                                                {t(`timeline.${milestone}.date`)}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                                {t(`timeline.${milestone}.title`)}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed">
                                                {t(`timeline.${milestone}.description`)}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Content Card - Right Side (Desktop Odd & Mobile All) */}
                                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:hidden' : 'md:pl-12 md:ml-auto md:order-2'}`}>
                                        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                                            <div className="text-cyan-400 font-semibold mb-2">
                                                {t(`timeline.${milestone}.date`)}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                                {t(`timeline.${milestone}.title`)}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed">
                                                {t(`timeline.${milestone}.description`)}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Decoration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 flex justify-center"
                >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                        <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
