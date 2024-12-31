'use client';

import SlideInAnimation from '@/components/slide-in-animation';
import { SlidingImages } from '@/components/sliding-images';
import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  const { locale, t } = useLocalize('Home');

  return (
    <section className='container py-14 sm:min-h-[60dvh]'>
      <div>
        <p
          className={cn(
            locale === 'en' ? '' : 'flex-row-reverse',
            'flex items-center gap-2 mb-2',
          )}
        >
          <span className='text-lg text-[#111111]'>
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
      <SlideInAnimation
        as='h1'
        className={cn(
          'font-nebulica text-black text-3xl max-sm:px-4 sm:text-4xl md:text-5xl lg:text-6xl max-w-5xl md:!leading-[1.1]',
        )}
      >
        {t('title')}
      </SlideInAnimation>

      <p className='mt-5 max-w-[650px] text-lg'>
        We’re Creative endeavor, a full-service agency where Software
        and AI technology join to create extraordinary digital
        experiences
      </p>

      <div className='mb-16 mt-8'>
        <Link href='/work'>
          <button className='flex items-center gap-2 rounded-[12px] bg-black px-4 py-3 text-white transition-all duration-300 hover:bg-[#2D313A]/70 active:bg-[#2D313A]/70'>
            <span>{t('hero-btn')}</span>

            <span className='flex h-7 w-8 items-center justify-center rounded-[4px] bg-white'>
              <Image
                alt='arrow'
                height={12}
                src={
                  locale === 'en'
                    ? '/icons/arrow-right.svg'
                    : '/icons/arrow-left.svg'
                }
                width={12}
              />
            </span>
          </button>
        </Link>
      </div>

      <div className='flex items-center justify-between gap-x-4'>
        {Logos.map(({ alt, src }) => (
          <Image
            alt={alt}
            height={70}
            src={`/icons/${src}`}
            width={130}
          />
        ))}
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
