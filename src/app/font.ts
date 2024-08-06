import localFont from 'next/font/local';

export const bricolage = localFont({
  src: [
    {
      path: '../public/font/BricolageGrotesque-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/font/BricolageGrotesque-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/font/BricolageGrotesque-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-bricolage',
});

export const satoshi = localFont({
  src: [
    {
      path: '../public/font/Satoshi-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/Satoshi-Medium.woff',
      weight: '500',
      style: 'normal',
    },
  ],
});
