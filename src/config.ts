import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'ar'] as const;

export const pathnames = {
  // If all locales use the same pathname, a single
  // external path can be used for all locales
  '/': '/',

  // If locales use different paths, you can
  // specify each external path per locale
  '/about': {
    en: '/about',
    ar: '/about',
  },
} satisfies Pathnames<typeof locales>;
