import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/shared/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'gradient' | 'glass';
    hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', hover = true, children, ...props }, ref) => {
        const baseStyles = 'rounded-xl transition-all duration-300';

        const variants = {
            default: 'bg-gray-900/50 border border-gray-800 backdrop-blur-sm',
            gradient: 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700',
            glass: 'bg-white/5 backdrop-blur-md border border-white/10'
        };

        const hoverStyles = hover ? 'hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/50' : '';

        return (
            <div
                ref={ref}
                className={cn(
                    baseStyles,
                    variants[variant],
                    hoverStyles,
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

export { Card };
