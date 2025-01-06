'use client';

import useCounter from '@/hooks/use-counter';
import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export const About = () => {
  const { locale, t } = useLocalize('Home');
  const { counter1, counter2, observe } = useCounter();

  return (
    <section
      className={cn(
        locale === 'en' ? '' : 'flex-row-reverse',
        'container flex justify-between pb-14 max-sm:flex-col',
      )}
      id='about'
    >
      <div>
        <p
          className={cn(
            locale === 'en' ? '' : 'flex-row-reverse',
            'flex items-center gap-2 mb-2',
          )}
        >
          <span className='text-lg text-[#111111]'>
            {t('about-label')}
          </span>
          <Image
            alt='line'
            height={30}
            src='/icons/line.svg'
            width={50}
          />
        </p>
      </div>

      <div>
        <div
          className={cn(locale === 'en' ? '' : 'flex justify-end')}
        >
          <h1
            className={cn(
              locale === 'en'
                ? 'font-nebulica'
                : 'text-end font-cairo',
              'text-black text-2xl max-w-xl sm:text-3xl lg:text-4xl  md:!leading-[1.1]',
            )}
          >
            {t('about-title')}
          </h1>
        </div>

        <p
          className={cn(
            locale === 'en' ? '' : 'text-end',
            'mt-5 max-w-[650px] text-lg',
          )}
        >
          {t('about-desc')}
        </p>

        <div
          ref={observe}
          className={cn(
            locale === 'en' ? '' : 'flex-row-reverse mx-auto',
            'mt-10 flex max-w-[550px] items-center justify-between font-nebulica text-5xl text-black',
          )}
        >
          <div className='flex flex-col items-center gap-y-4'>
            <p className='text-3xl font-semibold md:text-4xl lg:text-6xl'>
              <span ref={counter1} data-value='45'>
                45
              </span>
              +
            </p>

            <span className='text-lg text-primary'>
              {t('review-project')}
            </span>
          </div>

          <div className='flex flex-col items-center gap-y-4'>
            <p className='text-3xl font-semibold md:text-4xl lg:text-6xl'>
              <span ref={counter2} data-value='92'>
                92
              </span>
              %
            </p>

            <span className='text-lg text-primary'>
              {t('review-customer')}
            </span>
          </div>

          <div className='flex flex-col items-center gap-y-4'>
            <p className='text-3xl font-semibold md:text-4xl lg:text-6xl'>
              4.8
            </p>

            <span className='text-lg text-primary'>
              {t('review-rating')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
