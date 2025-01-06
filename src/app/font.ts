import { Cairo, Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const nebulica = localFont({
  src: [
    {
      path: '../../public/font/Nebulica-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/font/Nebulica-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/font/Nebulica-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/font/Nebulica-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-nebulica',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const cairo = Cairo({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-cairo',
});
