'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import { slideUp } from '@/utils/motion';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export const About = () => {
  const { locale, t } = useLocalize('About');
  const ref = useRef(null);
  const title = t('about-title');
  const content = t('about-content1');
  const content2 = t('about-content2');
  const desc1 = t('about-desc1');
  const desc2 = t('about-desc2');
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section className='container py-14'>
      <div
        className={cn(
          'mb-8 flex justify-between gap-y-10 max-sm:flex-col',
          locale === 'en' ? '' : 'flex-row-reverse',
        )}
      >
        <div
          ref={ref}
          className={cn(
            locale === 'en' ? '' : 'flex flex-col items-end ',
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

          <h3
            className={cn(
              locale === 'en'
                ? 'font-nebulica'
                : 'text-end font-cairo',
              'text-black text-lg max-w-xl sm:text-xl mt-9 md:!leading-[1.1]',
            )}
          >
            {content.split(' ').map((word, index) => (
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
          </h3>

          <p
            className={cn(
              'mt-3  max-w-[550px] sm:text-lg',
              locale === 'en' ? '' : 'text-end',
            )}
          >
            {desc1.split(' ').map((word, index) => (
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

          <h3
            className={cn(
              locale === 'en'
                ? 'font-nebulica'
                : 'text-end font-cairo',
              'text-black text-lg max-w-xl sm:text-xl mt-6 md:!leading-[1.1]',
            )}
          >
            {content2.split(' ').map((word, index) => (
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
          </h3>

          <p
            className={cn(
              'mt-3  max-w-[550px] sm:text-lg',
              locale === 'en' ? '' : 'text-end',
            )}
          >
            {desc2.split(' ').map((word, index) => (
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
