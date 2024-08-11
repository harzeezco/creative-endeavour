import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

import { locales, pathnames } from './config';

export const { getPathname, Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames /* ... */,
  });
