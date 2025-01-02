'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export const ContactDetails = () => {
  const { locale, t } = useLocalize('About');

  return (
    <section className='container py-14'>
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
              {t('contact-label')}
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
            {t('contact-title')}
          </h1>

          <p
            className={cn(
              'mt-5  max-w-[450px] text-lg',
              locale === 'en' ? '' : 'text-end',
            )}
          >
            {t('contact-desc')}
          </p>

          <div className='mt-10 w-full max-w-3xl bg-black p-5 text-white'>
            <div>
              <h2
                className={cn(
                  locale === 'en'
                    ? 'font-nebulica'
                    : 'text-end font-cairo',
                )}
              >
                {t('contact-title1')}
              </h2>
              <p
                className={cn(
                  locale === 'en' ? '' : 'text-end',
                  'max-w-2xl text-[#E0E0E0] mt-2',
                )}
              >
                {t('contact-desc1')}
              </p>
            </div>

            <div>
              <h2
                className={cn(
                  locale === 'en'
                    ? 'font-nebulica'
                    : 'text-end font-cairo',
                  'mt-4',
                )}
              >
                {t('contact-title2')}
              </h2>

              <p
                className={cn(
                  locale === 'en' ? '' : 'text-end',
                  'max-w-2xl text-[#E0E0E0] mt-2',
                )}
              >
                {t('contact-desc2')}
              </p>

              <p
                className={cn(
                  locale === 'en' ? '' : 'text-end',
                  'max-w-2xl text-[#E0E0E0]',
                )}
              >
                {t('contact-desc3')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
