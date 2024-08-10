'use client';

import LocaleSwitch from '@/components/locale-dropdown';
import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';

export const Footer = () => {
  const { locale, t } = useLocalize('Home');

  const Links = [
  {
    label: t('footer-page1'),
    href: '/work',
  },
  {
   label: t('footer-page2'),
    href: '/about',
  },
  {
   label: t('footer-page3'),
    href: '',
  },
  {
   label: t('footer-page4'),
    href: '#contact',
  },
  {
   label: t('footer-page5'),
    href: '',
  },
  {
   label: t('footer-page6'),
    href: '',
  },
];

  return (
    <footer className='mt-20 border-t border-solid border-[#EDEDED] py-16 max-lg:px-4'>
      <div className={cn(locale === 'en' ? ' ' : 'flex-row-reverse', 'mx-auto mb-3 flex max-w-[1150px] justify-between max-sm:flex-col gap-y-10 sm:flex-wrap text-[#181A2E]')}>
        <div className={cn(locale === 'en' ? 'text-start' : 'text-end')}>
          <Link className={cn(locale === 'en' ? '' : 'flex justify-end')} href='/'>
            <Image
              alt='logo'
              height={40}
              src={locale === 'en' ? '/icons/logo-footer.svg' : '/icons/logo-ar.svg'}
              width={70}
            />
          </Link>

          <p className='mt-3 max-w-md'>
            {t('footer-desc')}
          </p>
        </div>

        <div>
          <h3 className='mb-3 text-xl font-bold'>{t('footer-pages-title')}</h3>
          <div className='grid grid-cols-2 gap-x-10 gap-y-3'>
            {Links.map(({ href, label }) => (
              <Link href={href === '/work'
                    ? '/work'
                    : `/${locale}${href}`}
              >{label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className='mb-3 text-xl font-bold'>{t('footer-contact')}</h3>
          <Link className='border-b border-solid' href='mailto:info@sanam.sa?subject=Pre-filled Subject&body=Please%20enter%20your%20message%20here.'>
            Info@sanam.sa
          </Link>
        </div>

        <div className='flex flex-col gap-7'>
          <LocaleSwitch className='' icon='/icons/globe-black.svg' textClass='text-[#181A2E]' />

          <button className='w-fit rounded-[8px] bg-black px-6 py-2 text-white'>
            {t('footer-btn')}
          </button>
        </div>
      </div>

      <div className='mx-auto mt-8 flex max-w-[1150px] items-center justify-between'>
        <p className='max-w-md'>
          Copyright © {new Date().getFullYear()} Sanam | All Rights Reserved | Terms and
          Conditions | Privacy Policy
        </p>

        <div className='flex gap-2'>
          {SOCIALS.map(({ href, icon }) => (
            <Link
              className='h-fit bg-[#FAFAFA] p-2 text-xl'
              href={href}
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

const SOCIALS = [
  {
    icon: <FaLinkedinIn />,
    href: '',
  },
  {
    icon: <FaXTwitter />,
    href: '',
  },
  {
    icon: <FaInstagram />,
    href: '',
  },
];
