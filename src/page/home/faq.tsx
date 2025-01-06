'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export const Faq = () => {
  const { locale, t } = useLocalize('Home');

  return (
    <section className='container mt-20'>
      <div className='mb-8 flex justify-between max-sm:flex-col'>
        <div>
          <p
            className={cn(
              locale === 'en' ? '' : 'flex-row-reverse',
              'flex items-center gap-2 mb-2',
            )}
          >
            <span className='text-lg text-[#111111]'>
              {t('faq-label')}
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
          <h1
            className={cn(
              'font-nebulica text-black text-2xl max-w-xl sm:text-3xl lg:text-4xl  md:!leading-[1.1]',
            )}
          >
            {t('faq-title')}
          </h1>

          <p className='mt-5 max-w-[650px] text-lg'>
            {t('faq-desc')}
          </p>
        </div>
      </div>

      <div className='mt-5'>
        <Accordion type='multiple'>
          <AccordionItem className=' pb-2' value='item-1'>
            <AccordionTrigger>
              <span className='text-left'>
                The frequently asked question?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              This is the description of the questions
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='pb-2' value='item-2'>
            <AccordionTrigger>
              <span className='text-left'>
                The frequently asked question?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              This is the description of the questions
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='pb-2' value='item-3'>
            <AccordionTrigger>
              <span className='text-left'>
                The frequently asked question?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              This is the description of the questions
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='pb-2' value='item-4'>
            <AccordionTrigger>
              <span className='text-left'>
                The frequently asked question?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              This is the description of the questions
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
