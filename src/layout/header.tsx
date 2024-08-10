'use client';

import LocaleSwitch from '@/components/locale-dropdown';
import { cn } from '@/utils/cn';
import { Menu } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const locale = useLocale();
  const navigate = usePathname();
  const links = useTranslations('Home');
  const logoAR =
    navigate === '/ar' && locale === 'ar'
      ? '/icons/logo-ar-white.svg'
      : '/icons/logo-ar.svg';
  const logoEN =
    locale === 'en' && navigate === '/en'
      ? '/icons/logo-white.svg'
      : '/icons/logo.svg';

  const btnAR =
    navigate === '/ar' && locale === 'ar'
      ? 'text-white border border-solid rounded-[8px] border-white px-4 py-2'
      : 'bg-[#2D313A] px-4 py-2 transition-all hover:bg-[#2D313A]/70 duration-300 text-white rounded-md active:bg-[#2D313A]/70';

  const navLinks = [
    {
      label: links('link-work'),
      href: '/work',
    },
    {
      label: links('link-service'),
      href: '#services',
    },
    {
      label: links('link-about'),
      href: '/about',
    },
    {
      label: links('link-contact'),
      href: '#contact',
    },
  ];

  return (
    <header
      className={cn(
        navigate === '/en' || navigate === '/ar'
          ? 'bg-black text-white'
          : 'bg-white border-primary-650 border-b',
      )}
    >
      <div
        className={cn(
          locale === 'en' ? '' : 'flex-row-reverse',
          'container flex items-center justify-between py-4  text-base',
        )}
      >
        <Link href='/'>
          <Image
            alt='logo'
            height={50}
            src={locale === 'ar' ? logoAR : logoEN}
            width={70}
          />
        </Link>

        <nav>
          <ul className='flex items-center justify-between gap-x-6 max-md:hidden '>
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={
                  item.href === '/work'
                    ? '/work'
                    : `/${locale}${item.href}`
                }
              >
                <li key={item.label}>{item.label}</li>
              </Link>
            ))}
          </ul>
        </nav>

        <div className={cn(locale === 'ar' ? 'flex-row-reverse' : '', 'flex items-center gap-x-2')}>
          <LocaleSwitch
            className={btnAR}
            icon='/icons/globe.svg'
            textClass=''
          />

          <button type='button' className='md:hidden'>
            <Menu />
          </button>
        </div>

      </div>
    </header>
  );
};
