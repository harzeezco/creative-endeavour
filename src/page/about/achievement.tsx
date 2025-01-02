'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export const Achievement = () => {
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
            'mb-10',
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

      <div
        className={cn(
          'mb-8 flex justify-between max-sm:flex-col',
          locale === 'en' ? '' : 'flex-row-reverse',
        )}
      >
        <Image
          alt='work sample'
          height={500}
          src='/images/sample-image2.png'
          width={500}
        />

        <div>
          <Achieve
            desc={t('achievement-desc1')}
            number='2024'
            title={t('achievement-title1')}
          />

          <Achieve
            desc={t('achievement-desc2')}
            number='2024'
            title={t('achievement-title2')}
          />

          <Achieve
            desc={t('achievement-desc3')}
            number='2023'
            title={t('achievement-title3')}
          />

          <Achieve
            desc={t('achievement-desc4')}
            number='2023'
            title={t('achievement-title4')}
          />
        </div>
      </div>
    </section>
  );
};

function Achieve({
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
    <div className='border-y border-solid border-[#D9D9D9] py-6'>
      <div
        className={cn(
          locale === 'en' ? '' : 'flex-row-reverse',
          'mb-2 flex items-center justify-between',
        )}
      >
        <div
          className={cn(
            locale === 'en' ? '' : 'flex-row-reverse',
            'flex items-center gap-x-5 text-2xl text-body',
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

      <p className={cn(locale === 'en' ? '' : 'text-end')}>{desc}</p>
    </div>
  );
}
