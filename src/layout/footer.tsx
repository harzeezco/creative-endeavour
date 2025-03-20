'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Footer = () => {
  const { locale, t } = useLocalize('Home');
  const navigate = usePathname();

  const navLinks = [
    {
      label: t('link-home'),
      href: '#home',
    },
    {
      label: t('link-about'),
      href: '#about',
    },
    {
      label: t('link-service'),
      href: '#service',
    },
    {
      label: t('link-project'),
      href: '#cta',
    },
  ];

  return (
    <div>
      <footer className='mt-20'>
        <div
          className={cn(
            locale === 'en' ? ' ' : 'flex-row-reverse',
            'mx-auto mb-3 flex container justify-between max-sm:flex-col gap-y-10 sm:flex-wrap',
          )}
        >
          <div className='flex flex-col items-end gap-y-5'>
            <Link href='/'>
              <Image
                alt='logo'
                height={90}
                src='/icons/logo.svg'
                width={130}
              />
            </Link>

            <nav>
              <ul
                className={cn(
                  'flex items-center justify-between gap-x-6',
                  locale === 'ar' && 'flex-row-reverse',
                )}
              >
                {navLinks.map((item) => {
                  const isActive =
                    `/${locale}${item.href}` === navigate;

                  return (
                    <Link
                      key={item.href}
                      className={cn(
                        isActive
                          ? 'text-[#475467]'
                          : 'text-[#475467] hover:text-body',
                        'transition-all duration-300',
                      )}
                      href={`/${locale}${item.href}`}
                    >
                      <li
                        key={item.label}
                        className={cn(
                          locale === 'ar' && 'flex-row-reverse',
                          'flex items-center gap-x-[2px]',
                        )}
                      >
                        {item.label}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className='text-end'>
            <p className='font-medium text-[#175CD3]'>
              احصل على التطبيق
            </p>

            <div className='mt-5 flex items-center gap-x-4'>
              <Link href='/'>
                <Image
                  alt='logo'
                  className='transition-all duration-300 hover:scale-105'
                  height={50}
                  src='/images/app-store.png'
                  width={150}
                />
              </Link>

              <Link href='/'>
                <Image
                  alt='logo'
                  className='transition-all duration-300 hover:scale-105'
                  height={50}
                  src='/images/google-app.png'
                  width={150}
                />
              </Link>
            </div>
          </div>
        </div>

        <hr className='container my-14 border-t border-solid border-[#98A2B3]' />

        <div
          className={cn(
            'mx-auto mb-10 flex container justify-between max-sm:flex-col gap-y-10 sm:flex-wrap',
          )}
        >
          <div className='flex items-center gap-4'>
            <Link href='/'>
              <Image
                alt='logo'
                className='transition-all duration-300 hover:scale-105'
                height={25}
                src='/icons/twitter.svg'
                width={25}
              />
            </Link>

            <Link href='/'>
              <Image
                alt='logo'
                className='transition-all duration-300 hover:scale-105'
                height={25}
                src='/icons/linkedin.svg'
                width={25}
              />
            </Link>

            <Link href='/'>
              <Image
                alt='logo'
                className='transition-all duration-300 hover:scale-105'
                height={25}
                src='/icons/facebook.svg'
                width={25}
              />
            </Link>
          </div>
          <div className='flex items-center gap-x-4'>
            <p>© 2025 علم. جميع الحقوق محفوظة.</p>

            <Link
              className='text-right underline transition-all duration-300 hover:no-underline '
              href={`/${locale}/about`}
            >
              سياسة الخصوصية
            </Link>
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
    name: 'Facebook',
    href: '',
  },
];
