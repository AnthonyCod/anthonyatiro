'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Code2,
    Database,
    Server,
    Cloud,
    Wrench,
    Layers
} from 'lucide-react';
import { Container } from '@/shared/ui/Container/Container';
import { Card } from '@/shared/ui/Card/Card';

const techIcons = {
    frontend: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Zustand'],
    backend: ['Node.js', 'NestJS', 'TypeORM', 'Prisma'],
    database: ['Bun', 'Docker', 'PostgreSQL', 'MySQL', 'Git'],
    tools: ['Jest', 'React Testing Library']
};

const categoryIcons = {
    frontend: Code2,
    backend: Server,
    database: Database,
    tools: Wrench
};

export function TechStackSection() {
    const t = useTranslations('techStack');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section id="tech-stack" className="py-24 relative overflow-hidden -mt-2">
            {/* Background with smooth transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-gray-900" />

            {/* Top gradient overlay for smoothest transition */}
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none z-10" />

            <Container className="relative z-10" ref={ref}>
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Layers className="w-8 h-8 text-cyan-500" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            {t('title')}
                        </h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                {/* Tech Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(techIcons).map(([category, technologies], index) => {
                        const Icon = categoryIcons[category as keyof typeof categoryIcons];

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card variant="glass" className="p-6 h-full">
                                    {/* Category Header */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                            <Icon className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white">
                                            {t(`categories.${category}`)}
                                        </h3>
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1.5 text-sm bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 rounded-full text-gray-300 hover:text-white transition-all duration-200 cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
