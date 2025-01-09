'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import { slideUp } from '@/utils/motion';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export const ContactDetails = () => {
  const { locale, t } = useLocalize('About');
  const ref = useRef(null);
  const title = t('contact-title');
  const title1 = t('contact-title1');
  const title2 = t('contact-title2');
  const label = t('contact-label');
  const desc = t('contact-desc');
  const desc1 = t('contact-desc1');
  const desc2 = t('contact-desc2');
  const desc3 = t('contact-desc3');
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section ref={ref} className='container py-14'>
      <div
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
            <p className='text-[#111111] sm:text-lg'>
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

          <div className='mt-10 w-full max-w-3xl bg-black p-5 text-white'>
            <div>
              <h2
                className={cn(
                  locale === 'en'
                    ? 'font-nebulica'
                    : 'text-end font-cairo',
                )}
              >
                {title1.split(' ').map((word, index) => (
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
              </h2>
              <p
                className={cn(
                  locale === 'en' ? '' : 'text-end',
                  'max-w-2xl text-[#E0E0E0] mt-2',
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
                {title2.split(' ').map((word, index) => (
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
              </h2>

              <p
                className={cn(
                  locale === 'en' ? '' : 'text-end',
                  'max-w-2xl text-[#E0E0E0] mt-2',
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

              <p
                className={cn(
                  locale === 'en' ? '' : 'text-end',
                  'max-w-2xl text-[#E0E0E0]',
                )}
              >
                {desc3.split(' ').map((word, index) => (
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
          </div>
        </div>
      </div>
    </section>
  );
};
