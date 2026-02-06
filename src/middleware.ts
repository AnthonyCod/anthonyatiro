import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config';

export default createMiddleware({
    // A list of all locales that are supported
    locales,

    // Used when no locale matches
    defaultLocale,

    // Always use locale prefix for all routes
    localePrefix: 'always',

    // Disable automatic locale detection to force defaultLocale
    localeDetection: false
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(es|en)/:path*']
};
