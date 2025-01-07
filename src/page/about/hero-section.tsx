'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export const Hero = () => {
  const { locale, t } = useLocalize('About');

  return (
    <section className='container py-14'>
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
            locale === 'en' ? 'font-nebulica' : 'font-cairo text-end',
            ' text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[850px] md:!leading-[1.1]',
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
      </div>
    </section>
  );
};
