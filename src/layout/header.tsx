'use client';

import LocaleSwitch from '@/components/locale-dropdown';
import SlideInAnimation from '@/components/slide-in-animation';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/components/ui/drawer';
import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SOCIALS } from './footer';

export function DrawerBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { locale, t } = useLocalize('Home');

  const navLinks = [
    {
      label: t('link-work'),
      href: '/work',
    },
    {
      label: t('link-service'),
      href: '#services',
    },
    {
      label: t('link-about'),
      href: '/about',
    },
    {
      label: t('link-contact'),
      href: '#contact',
    },
  ];

  return (
    <Drawer>
      <DrawerTrigger asChild className='cursor-pointer'>
        {children}
      </DrawerTrigger>
      <DrawerContent className='bg-primary-350 text-white'>
        <div className='px-6'>
          <div className='flex flex-col gap-4'>
            {navLinks.map(({ href, label }) => {
              const isActive = href === pathname;

              return (
                <Link key={href} href={`/${locale}${href}`}>
                  <DrawerClose asChild>
                    <div
                      className={cn(
                        isActive
                          ? 'bg-dark-400 font-semibold'
                          : 'bg-transparent font-medium',
                        'text-lg transition-all p-4 py-3 duration-200 hover:bg-dark-400 active:bg-dark-400 w-full rounded-2xl',
                      )}
                    >
                      {label}
                    </div>
                  </DrawerClose>
                </Link>
              );
            })}
          </div>

          <ul className='mb-11 mt-3 flex gap-3'>
            {SOCIALS.map(({ href, icon }) => (
              <Link
                key={href}
                className={cn(
                  'border-dark-400/20 border flex size-[70px] flex-col items-center justify-center gap-3 rounded-[2vw] border-solid bg-dark-600 p-2 transition-all duration-200',
                )}
                href={href}
                target='_blank'
              >
                {icon}
              </Link>
            ))}
          </ul>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export const Header = () => {
  const { locale, t } = useLocalize('Home');
  const navigate = usePathname();

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
    <div className='border-b border-solid border-[#D9D9D9]'>
      <header className={cn()}>
        <SlideInAnimation delay={0}>
          <div
            className={cn(
              locale === 'en' ? '' : 'flex-row-reverse',
              'container flex items-center justify-between py-3  text-base',
            )}
          >
            <div
              className={cn(
                locale === 'ar' && 'flex-row-reverse',
                'flex items-center gap-x-12',
              )}
            >
              <Link href='/'>
                <Image
                  alt='logo'
                  height={90}
                  src={
                    locale === 'ar'
                      ? '/icons/logo-ar.svg'
                      : '/icons/logo.svg'
                  }
                  width={130}
                />
              </Link>

              <nav>
                <ul
                  className={cn(
                    'flex items-center justify-between gap-x-6 max-md:hidden',
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
                            ? 'text-body'
                            : 'text-primary hover:text-body',
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
                          {isActive && (
                            <div className='-translate-y-[30%] text-6xl'>
                              .
                            </div>
                          )}
                          {item.label}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div
              className={cn(
                locale === 'ar' ? 'flex-row-reverse' : '',
                'flex items-center gap-x-3',
              )}
            >
              <div>
                <Link
                  className='border-b-[1.5px] border-solid border-[#0A0A0A] text-[#0A0A0A] transition duration-300 hover:border-0'
                  href='mailto:hello@creativeendeavour.com'
                >
                  hello@creativeendeavour.com
                </Link>
              </div>
              <LocaleSwitch
                className='rounded-md bg-[#2D313A] px-4 py-2 text-white transition-all duration-300 hover:bg-[#2D313A]/70 active:bg-[#2D313A]/70'
                icon='/icons/globe.svg'
                textClass=''
              />

              <div className='md:hidden'>
                <DrawerBar>
                  <Menu />
                </DrawerBar>
              </div>
            </div>
          </div>
        </SlideInAnimation>
      </header>
    </div>
  );
};
