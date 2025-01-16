'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import { slideUp } from '@/utils/motion';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import { Faq } from './faq';

function Details() {
  const { locale, t } = useLocalize('WorkDetail');

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const title = t('finex-con-title1');
  const desc = t('finex-con-desc1');
  const label = t('finex-con-label1');
  const title2 = t('finex-con-title2');
  const desc2 = t('finex-con-desc2');
  const label2 = t('finex-con-label2');
  const title3 = t('finex-con-title3');
  const desc3 = t('finex-con-desc3');
  const label3 = t('finex-con-label3');
  const isInView = useInView(ref, { amount: 0.3, once: true });
  const isInView2 = useInView(ref2, { amount: 0.3, once: true });
  const isInView3 = useInView(ref3, { amount: 0.3, once: true });

  return (
    <section className='pt-7'>
      <div className='container'>
        <Image
          alt='finex'
          className='w-full'
          height={600}
          src='/images/work-large5.png'
          width={500}
        />

        <div className='mb-10 mt-7 grid grid-cols-2 justify-between gap-y-4 sm:grid-cols-3 md:grid-cols-4'>
          <div>
            <h3
              className={cn(
                locale === 'en'
                  ? 'font-nebulica'
                  : 'text-end font-cairo',
                'text-lg',
              )}
            >
              {t('details1')}
            </h3>
            <p className='text-xl text-black'>{t('finex-desc1')}</p>
          </div>
          <div>
            <h3
              className={cn(
                locale === 'en'
                  ? 'font-nebulica'
                  : 'text-end font-cairo',
                'text-lg',
              )}
            >
              {t('details2')}
            </h3>
            <p className='text-xl text-black'>{t('finex-desc1')}</p>
          </div>
          <div>
            <h3
              className={cn(
                locale === 'en'
                  ? 'font-nebulica'
                  : 'text-end font-cairo',
                'text-lg',
              )}
            >
              {t('details3')}
            </h3>
            <p className='text-xl text-black'>{t('finex-desc1')}</p>
          </div>
          <div>
            <h3
              className={cn(
                locale === 'en'
                  ? 'font-nebulica'
                  : 'text-end font-cairo',
                'text-xl',
              )}
            >
              {t('details4')}
            </h3>
            <p className='text-xl text-black'>{t('finex-desc1')}</p>
          </div>
        </div>

        <hr className='my-[50px] border-t border-[#E0E0E0]' />
      </div>

      <div className='container'>
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
                'mt-5  max-w-[550px] text-lg',
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
        <div className='grid grid-cols-2 gap-2 max-sm:grid-cols-1'>
          <Image
            alt='finex'
            className='w-full'
            height={600}
            src='/images/finex.png'
            width={500}
          />

          <Image
            alt='finex'
            className='w-full'
            height={600}
            src='/images/finex2.png'
            width={500}
          />
        </div>

        <div
          ref={ref2}
          className={cn(
            'my-12 flex justify-between max-sm:flex-col',
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
                {label2.split(' ').map((word, index) => (
                  <span
                    key={index}
                    className='relative inline-flex overflow-hidden '
                  >
                    <motion.span
                      key={index}
                      animate={isInView2 ? 'open' : 'closed'}
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
              {title2.split(' ').map((word, index) => (
                <span
                  key={index}
                  className='relative inline-flex overflow-hidden '
                >
                  <motion.span
                    key={index}
                    animate={isInView2 ? 'open' : 'closed'}
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
                'mt-5  max-w-[550px] text-lg',
                locale === 'en' ? '' : 'text-end',
              )}
            >
              {desc2.split(' ').map((word, index) => (
                <span
                  key={index}
                  className='relative inline-flex overflow-hidden'
                >
                  <motion.span
                    key={index}
                    animate={isInView2 ? 'open' : 'closed'}
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

      <Faq />

      <div className='container'>
        <div
          ref={ref3}
          className={cn(
            'mt-12 mb-10 flex justify-between max-sm:flex-col',
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
                {label3.split(' ').map((word, index) => (
                  <span
                    key={index}
                    className='relative inline-flex overflow-hidden '
                  >
                    <motion.span
                      key={index}
                      animate={isInView3 ? 'open' : 'closed'}
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
              {title3.split(' ').map((word, index) => (
                <span
                  key={index}
                  className='relative inline-flex overflow-hidden '
                >
                  <motion.span
                    key={index}
                    animate={isInView3 ? 'open' : 'closed'}
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
                'mt-5  max-w-[550px] text-lg',
                locale === 'en' ? '' : 'text-end',
              )}
            >
              {desc3.split(' ').map((word, index) => (
                <span
                  key={index}
                  className='relative inline-flex overflow-hidden'
                >
                  <motion.span
                    key={index}
                    animate={isInView3 ? 'open' : 'closed'}
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
    </section>
  );
}

export default Details;
