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
import { useRef } from 'react';

export const Faq = () => {
  const { locale, t } = useLocalize('WorkDetail');
  const ref = useRef(null);
  const title = t('faq-title');
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section className='mt-14 bg-black py-14'>
      <div ref={ref} className='container'>
        <h1
          className={cn(
            locale === 'en' ? 'font-nebulica' : 'text-end font-cairo',
            'text-white text-2xl max-w-xl mx-auto sm:text-3xl lg:text-4xl  md:!leading-[1.1]',
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

        <div className='mt-10'>
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
          </Accordion>
        </div>
      </div>
    </section>
  );
};
