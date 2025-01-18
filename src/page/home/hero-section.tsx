'use client';

import { InfiniteMovingCards } from '@/components/infinite-moving-cards';
import { SlidingImages } from '@/components/sliding-images';
import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  const { locale, t } = useLocalize('Home');

  return (
    <section className='pb-14 pt-10'>
      <div className='container'>
        <div
          className={cn(
            locale === 'en' ? '' : 'flex flex-col items-end',
          )}
        >
          <div>
            <p
              className={cn(
                locale === 'en' ? '' : 'flex-row-reverse',
                'flex items-center gap-2 mb-2',
              )}
            >
              <span className='text-[#111111] sm:text-lg'>
                {t('hero-label')}
              </span>
              <Image
                alt='line'
                height={30}
                src='/icons/line.svg'
                width={50}
              />
            </p>
          </div>
          <h1
            className={cn(
              locale === 'en'
                ? 'font-nebulica'
                : 'font-cairo text-end',
              ' text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-5xl md:!leading-[1.1]',
            )}
          >
            {t('title')}
          </h1>

          <p
            className={cn(
              locale === 'en' ? '' : 'text-end',
              'mt-5 max-w-[650px] text-lg',
            )}
          >
            {t('hero-desc')}
          </p>

          <div className='mb-16 mt-8'>
            <Link className='inline-block' href={`/${locale}/work`}>
              <button
                className={cn(
                  locale === 'en'
                    ? 'pr-[3.3em]'
                    : '!pl-[1.5em] !pr-[20px]',
                  'cssbuttons-io-button flex group',
                )}
              >
                <span
                  className={cn(locale === 'en' ? 'pr-11' : 'pl-7')}
                >
                  {t('hero-btn')}
                </span>

                <div
                  className={cn(
                    locale === 'en'
                      ? 'right-[0.3em] sml-[1em]'
                      : 'left-[0.3em] mr-[1em]',
                    'icon',
                  )}
                >
                  {locale === 'en' ? (
                    <svg
                      className='group-hover:rotate-45'
                      fill='none'
                      height='12'
                      viewBox='0 0 12 12'
                      width='12'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1 11L11 1M11 1H1M11 1V11'
                        stroke='black'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                      />
                    </svg>
                  ) : (
                    <svg
                      className='group-hover:-rotate-45'
                      fill='none'
                      height='12'
                      viewBox='0 0 12 12'
                      width='12'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M11 11L1 1M1 1H11M1 1V11'
                        stroke='black'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                      />
                    </svg>
                  )}
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div className='sm:hidden'>
          <InfiniteMovingCards direction='right' speed='slow'>
            {Logos.map(({ alt, src }) => (
              <div className='relative max-w-full'>
                <Image
                  alt={alt}
                  height={70}
                  src={`/icons/${src}`}
                  width={130}
                />
              </div>
            ))}
          </InfiniteMovingCards>
        </div>
        <div className='hidden items-center justify-between gap-x-4 sm:flex'>
          {Logos.map(({ alt, src }, index) => (
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{
                delay: index * 0.3,
                duration: 1,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <Image
                alt={alt}
                height={70}
                src={`/icons/${src}`}
                width={130}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <SlidingImages />
    </section>
  );
};

const Logos = [
  {
    alt: 'coinbase',
    src: 'coinbase.svg',
  },
  {
    alt: 'sportify',
    src: 'sportify.svg',
  },
  {
    alt: 'slack',
    src: 'slack.svg',
  },
  {
    alt: 'dropbox',
    src: 'dropbox.svg',
  },
  {
    alt: 'dropbox',
    src: 'dropbox.svg',
  },
  {
    alt: 'webflow',
    src: 'webflow.svg',
  },
  {
    alt: 'zoom',
    src: 'zoom.svg',
  },
];
