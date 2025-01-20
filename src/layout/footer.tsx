'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  const { locale, t } = useLocalize('Home');

  const navLinks = [
    {
      label: t('link-home'),
      href: '',
    },
    {
      label: t('link-about'),
      href: '/about',
    },
    {
      label: t('link-service'),
      href: '/services',
    },
    {
      label: t('link-project'),
      href: '/work',
    },
  ];

  return (
    <div>
      <footer className='mt-20 border-t border-solid border-[#EDEDED] pt-16'>
        <div
          className={cn(
            locale === 'en' ? ' ' : 'flex-row-reverse',
            'mx-auto mb-3 flex container justify-between max-sm:flex-col gap-y-10 sm:flex-wrap',
          )}
        >
          <div
            className={cn(
              locale === 'en' ? 'text-start' : 'text-end',
            )}
          >
            <Link
              className={cn(
                locale === 'en' ? '' : 'flex justify-end',
              )}
              href='/'
            >
              <Image
                alt='logo'
                height={90}
                src={
                  locale === 'en'
                    ? '/icons/logo.svg'
                    : '/icons/logo-ar.svg'
                }
                width={120}
              />
            </Link>

            <p className='mb-5 mt-3 max-w-[300px]'>
              2118 Thornridge Cir. Syracuse, Connecticut 35624
            </p>

            <Link
              className='border-b-[1.5px] border-solid border-[#0A0A0A] text-[#0A0A0A] transition duration-300 hover:border-0'
              href='mailto:hello@creativeendeavour.com'
            >
              hello@creativeendeavour.com
            </Link>
          </div>

          <div>
            <h3 className='mb-3 text-lg font-medium text-body'>
              Quick Links
            </h3>
            <div className='flex flex-col gap-y-3'>
              {navLinks.map(({ href, label }) => (
                <Link href={`/${locale}${href}`}>{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className='mb-3 text-lg font-medium text-body'>
              Contact Information
            </h3>
            <div className='flex flex-col gap-y-3'>
              {contact.map((label) => (
                <Link href={`/${locale}${label}`}>{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className='mb-3 text-lg font-medium text-body'>
              Social Media
            </h3>
            <div className='flex flex-col gap-y-3'>
              {SOCIALS.map(({ href, name }) => (
                <Link href={`/${locale}${href}`}>{name}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-10 bg-black p-3'>
          <div
            className={cn(
              locale === 'en' ? '' : 'flex-row-reverse',
              'container flex max-sm:flex-col items-center justify-between text-white',
            )}
          >
            <p
              className={cn(
                locale === 'en'
                  ? 'flex-row-reverse whitespace-nowrap'
                  : '',
                'flex max-w-md gap-2',
              )}
            >
              <span>{t('copy')}</span>
              <span>{new Date().getFullYear()} ©</span>
            </p>

            <div className='flex items-center gap-5'>
              <Link href={`/${locale}/policy`}>{t('privacy')}</Link>
              <Link href={`/${locale}/terms`}>{t('terms')}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const SOCIALS = [
  {
    name: 'Instagram',
    href: '',
  },
  {
    name: 'X',
    href: '',
  },
  {
    name: 'Dribbble',
    href: '',
  },
  {
    name: 'Facebook',
    href: '',
  },
];

const contact = ['Email', 'Phone', 'Address'];
