import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import localFont from 'next/font/local';

export const nebulica = localFont({
  src: [
    {
      path: '../../public/font/NeoSansArabicMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/font/NeoSansArabicBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/font/Neo Sans Arabic Regular.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-nebulica',
});

export const cairo = IBM_Plex_Sans_Arabic({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
