'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Zap,
    Activity,
    Award,
    TrendingUp,
    CheckCircle,
    Target
} from 'lucide-react';
import { Container } from '@/shared/ui/Container/Container';
import { Card } from '@/shared/ui/Card/Card';

const metricIcons = {
    loadTime: Zap,
    apiResponse: Activity,
    lighthouse: Award,
    uptime: TrendingUp,
    codeQuality: CheckCircle,
    testCoverage: Target
};

export function PerformanceSection() {
    const t = useTranslations('performance');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const metrics = ['loadTime', 'apiResponse', 'lighthouse', 'uptime', 'codeQuality', 'testCoverage'];

    return (
        <section id="performance" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

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

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {metrics.map((metric, index) => {
                        const Icon = metricIcons[metric as keyof typeof metricIcons];

                        return (
                            <motion.div
                                key={metric}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card variant="gradient" className="p-6 h-full group">
                                    {/* Icon */}
                                    <div className="mb-4">
                                        <div className="inline-flex p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors duration-300">
                                            <Icon className="w-8 h-8 text-cyan-400" />
                                        </div>
                                    </div>

                                    {/* Value */}
                                    <div className="mb-3">
                                        <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                            {t(`metrics.${metric}.value`)}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {t(`metrics.${metric}.title`)}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {t(`metrics.${metric}.description`)}
                                    </p>

                                    {/* Progress Bar */}
                                    <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: '100%' } : {}}
                                            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                        />
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { label: 'Projects Deployed', value: '50+' },
                        { label: 'Years Experience', value: '5+' },
                        { label: 'Happy Clients', value: '30+' },
                        { label: 'Code Commits', value: '10K+' }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
