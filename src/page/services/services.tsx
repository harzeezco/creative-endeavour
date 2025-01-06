'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export const Service = () => {
  const { locale, t } = useLocalize('Service');

  return (
    <section className='container pt-14'>
      <div
        className={cn(
          'mb-8 flex justify-between max-sm:flex-col',
          locale === 'en' ? '' : 'flex-row-reverse',
        )}
      >
        <div>
          <p
            className={cn(
              locale === 'en' ? '' : 'flex-row-reverse',
              'flex items-center gap-2 mb-2',
            )}
          >
            <span className='text-lg text-[#111111]'>
              {t('service-label')}
            </span>
            <Image
              alt='line'
              height={30}
              src='/icons/line.svg'
              width={50}
            />
          </p>
        </div>

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
              'text-black text-2xl max-w-xl sm:text-3xl lg:text-4xl  md:!leading-[1.1]',
            )}
          >
            {t('service-title')}
          </h1>

          <p
            className={cn(
              'mt-5  max-w-[550px] text-lg',
              locale === 'en' ? '' : 'text-end',
            )}
          >
            {t('service-desc')}
          </p>
        </div>
      </div>

      <div className='container mb-20'>
        <hr className='border-t border-[#E0E0E0]' />
      </div>
    </section>
  );
};
