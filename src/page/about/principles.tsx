'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export const Principles = () => {
  const { locale, t } = useLocalize('About');

  return (
    <section className='bg-black text-white'>
      <div className='container py-16'>
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
              <span className='text-lg text-[#E0E0E0]'>
                {t('principle-label')}
              </span>
              <Image
                alt='line'
                height={30}
                src='/icons/stroke-white.svg'
                width={50}
              />
            </p>
          </div>

          <div
            className={cn(
              locale === 'en' ? '' : 'flex flex-col items-end',
              'mb-10',
            )}
          >
            <h1
              className={cn(
                locale === 'en'
                  ? 'font-nebulica'
                  : 'text-end font-cairo',
                'text-2xl max-w-xl sm:text-3xl lg:text-4xl  md:!leading-[1.1]',
              )}
            >
              {t('principle-title')}
            </h1>

            <p
              className={cn(
                'mt-5  max-w-[550px] text-[#E0E0E0] text-lg',
                locale === 'en' ? '' : 'text-end',
              )}
            >
              {t('principle-desc')}
            </p>
          </div>
        </div>

        <div>
          <Principle
            desc={t('principle-desc1')}
            number='01'
            title={t('principle-title1')}
          />

          <Principle
            desc={t('principle-desc2')}
            number='02'
            title={t('principle-title2')}
          />

          <Principle
            desc={t('principle-desc3')}
            number='03'
            title={t('principle-title3')}
          />
        </div>
      </div>
    </section>
  );
};

function Principle({
  desc,

  number,
  title,
}: {
  desc: string;

  number: string;
  title: string;
}) {
  const { locale } = useLocalize('Home');

  return (
    <div
      className={cn(
        locale === 'en' ? '' : 'items-end',
        'border-y border-solid flex flex-col border-[#737373] py-6',
      )}
    >
      <div
        className={cn(
          locale === 'en' ? '' : 'flex-row-reverse',
          'mb-2 flex items-center justify-between',
        )}
      >
        <div
          className={cn(
            locale === 'en' ? '' : 'flex-row-reverse',
            'flex items-center gap-x-5 text-2xl',
          )}
        >
          <p className='text-center font-nebulica'>{number}</p>
          <h2
            className={cn(
              locale === 'en'
                ? 'font-nebulica'
                : 'text-end font-cairo',
            )}
          >
            {title}
          </h2>
        </div>
      </div>

      <p
        className={cn(
          locale === 'en' ? '' : 'text-end',
          'max-w-2xl text-[#E0E0E0]',
        )}
      >
        {desc}
      </p>
    </div>
  );
}
