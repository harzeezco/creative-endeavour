'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import { slideUp } from '@/utils/motion';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export const Faq = () => {
  const { locale, t } = useLocalize('Home');
  const ref = useRef(null);
  const title = t('faq-title');
  const desc = t('faq-desc');
  const label = t('faq-label');
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section className='container mt-20'>
      <div
        ref={ref}
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
            <span className='text-[#111111] sm:text-lg'>
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
              locale === 'en' ? '' : 'text-end',
              'mt-5 max-w-[650px] text-lg',
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
        </div>
      </div>

      <div className='mt-5'>
        <Accordion type='multiple'>
          <AccordionItem className='pb-2' value='item-1'>
            <AccordionTrigger content={t('faq-desc1')}>
              <span className='text-left'>{t('faq-title1')}</span>
            </AccordionTrigger>
          </AccordionItem>
          <AccordionItem className='pb-2' value='item-2'>
            <AccordionTrigger content={t('faq-desc2')}>
              <span className='text-left'>{t('faq-title2')}</span>
            </AccordionTrigger>
          </AccordionItem>
          <AccordionItem className='pb-2' value='item-3'>
            <AccordionTrigger content={t('faq-desc3')}>
              <span className='text-left'>{t('faq-title3')}</span>
            </AccordionTrigger>
          </AccordionItem>
          <AccordionItem className='pb-2' value='item-4'>
            <AccordionTrigger content={t('faq-desc4')}>
              <span className='text-left'>{t('faq-title4')}</span>
            </AccordionTrigger>
          </AccordionItem>
          <AccordionItem className='pb-2' value='item-5'>
            <AccordionTrigger content={t('faq-desc5')}>
              <span className='text-left'>{t('faq-title5')}</span>
            </AccordionTrigger>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
