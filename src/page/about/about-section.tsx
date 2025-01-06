'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export const About = () => {
  const { locale, t } = useLocalize('About');

  return (
    <section className='container py-14'>
      <div
        className={cn(
          'mb-8 flex justify-between max-sm:flex-col',
          locale === 'en' ? '' : 'flex-row-reverse',
        )}
      >
        <div
          className={cn(
            locale === 'en' ? '' : 'flex flex-col items-end',
          )}
        >
          <h1
            className={cn(
              locale === 'en'
                ? 'font-nebulica'
                : 'text-end font-cairo',
              'text-black text-xl max-w-xl sm:text-2xl lg:text-3xl  md:!leading-[1.1]',
            )}
          >
            {t('about-title')}
          </h1>

          <h3
            className={cn(
              locale === 'en'
                ? 'font-nebulica'
                : 'text-end font-cairo',
              'text-black text-lg max-w-xl sm:text-xl mt-9 md:!leading-[1.1]',
            )}
          >
            {t('about-content1')}
          </h3>

          <p
            className={cn(
              'mt-3  max-w-[550px] text-lg',
              locale === 'en' ? '' : 'text-end',
            )}
          >
            {t('about-desc1')}
          </p>

          <h3
            className={cn(
              locale === 'en'
                ? 'font-nebulica'
                : 'text-end font-cairo',
              'text-black text-lg mt-6 max-w-xl sm:text-xl md:!leading-[1.1]',
            )}
          >
            {t('about-content2')}
          </h3>

          <p
            className={cn(
              'mt-3  max-w-[550px] text-lg',
              locale === 'en' ? '' : 'text-end',
            )}
          >
            {t('about-desc2')}
          </p>
        </div>

        <Image
          alt='work sample'
          height={500}
          src='/images/about-hero.png'
          width={500}
        />
      </div>
    </section>
  );
};
