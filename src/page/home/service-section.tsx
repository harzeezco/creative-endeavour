'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import { slideUp } from '@/utils/motion';
import { motion, useInView } from 'framer-motion';
import { Minus } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

export const ServiceSection = () => {
  const { locale, t } = useLocalize('Home');
  const ref = useRef(null);
  const title = t('service-title');
  const desc = t('service-desc');
  const label = t('service-label');
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section className='container py-14'>
      <div
        ref={ref}
        className={cn(
          'mb-8 flex justify-between max-sm:flex-col',
          locale === 'en' ? '' : 'flex-row-reverse',
        )}
      >
        <div>
          <div
            className={cn(
              locale === 'en' ? '' : 'flex-row-reverse',
              'flex items-center gap-2 mb-2',
            )}
          >
            <p className='text-lg text-[#111111]'>
              {label.split(' ').map((word, index) => (
                <span
                  key={index}
                  className='relative inline-flex overflow-hidden '
                >
                  <motion.span
                    key={index}
                    animate={isInView ? 'open' : 'closed'}
                    custom={index}
                    variants={slideUp}
                  >
                    {word}
                  </motion.span>
                  <span className='inline-block'>&nbsp;</span>
                </span>
              ))}
            </p>
            <Image
              alt='line'
              height={30}
              src='/icons/line.svg'
              width={50}
            />
          </div>
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
            {title.split(' ').map((word, index) => (
              <span
                key={index}
                className='relative inline-flex overflow-hidden '
              >
                <motion.span
                  key={index}
                  animate={isInView ? 'open' : 'closed'}
                  custom={index}
                  variants={slideUp}
                >
                  {word}
                </motion.span>
                <span className='inline-block'>&nbsp;</span>
              </span>
            ))}
          </h1>

          <p
            className={cn(
              'mt-5  max-w-[450px] text-lg',
              locale === 'en' ? '' : 'text-end',
            )}
          >
            {desc.split(' ').map((word, index) => (
              <span
                key={index}
                className='relative inline-flex overflow-hidden'
              >
                <motion.span
                  key={index}
                  animate={isInView ? 'open' : 'closed'}
                  custom={index}
                  variants={slideUp}
                >
                  {word}
                </motion.span>
                <span className='inline-block'>&nbsp;</span>
              </span>
            ))}
          </p>
        </div>
      </div>

      <Service
        isOpen
        desc={t('service-desc1')}
        number='01'
        samples={Samples}
        title={t('service-title1')}
      />

      <Service
        desc={t('service-desc2')}
        isOpen={false}
        number='02'
        samples={[]}
        title={t('service-title2')}
      />

      <Service
        desc={t('service-desc3')}
        isOpen={false}
        number='03'
        samples={[]}
        title={t('service-title3')}
      />

      <Service
        desc={t('service-desc4')}
        isOpen={false}
        number='04'
        samples={[]}
        title={t('service-title4')}
      />
    </section>
  );
};

function Service({
  desc,
  isOpen,
  number,
  samples,
  title,
}: {
  desc: string;
  isOpen: boolean;
  number: string;
  samples: {
    alt: string;
    src: string;
  }[];
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
            'flex items-center gap-x-5 text-lg sm:text-2xl md:text-4xl text-body',
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

        <button aria-label='close' type='button'>
          <Minus />
        </button>
      </div>

      <p className={cn(locale === 'en' ? '' : 'text-end')}>{desc}</p>

      {isOpen && (
        <div className='mt-8 grid grid-cols-3 items-center gap-4 max-sm:grid-cols-2'>
          {samples.map((sample) => (
            <Image
              key={sample.src}
              alt={sample.alt}
              height={500}
              src={`/images/${sample.src}`}
              width={500}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const Samples = [
  {
    alt: 'coinbase',
    src: 'sample1.png',
  },
  {
    alt: 'sportify',
    src: 'sample2.png',
  },
  {
    alt: 'slack',
    src: 'sample3.png',
  },
];
