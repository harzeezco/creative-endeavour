'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import { slideUp } from '@/utils/motion';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import Modal from './modal';

const defaultAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Contact({
  btnText,
  desc,
  title,
}: {
  btnText: string;
  desc: string;
  title: string;
}) {
  const { locale } = useLocalize('Home');
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const refdesc = useRef(null);
  const description = desc;
  const isView = useInView(refdesc, { amount: 0.7, once: true });

  return (
    <section className='container text-center'>
      <motion.span
        ref={ref}
        animate={isInView ? 'visible' : 'hidden'}
        className={cn(
          locale === 'en' ? 'font-nebulica' : 'font-cairo',
          'text-black mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-6xl max-w-5xl md:!leading-[1.1]',
        )}
        initial='hidden'
        transition={{
          staggerChildren: 0.1,
          duration: 0.1,
          ease: [0.25, 0.8, 0.25, 1],
        }}
      >
        {title.split(' ').map((word, index) => (
          <motion.span key={index} className='inline-block'>
            {word.split('').map((word, index) => (
              <motion.span
                key={index}
                className='inline-block'
                variants={defaultAnimation}
              >
                {word}
              </motion.span>
            ))}

            <span className='inline-block'>&nbsp;</span>
          </motion.span>
        ))}
      </motion.span>

      <p
        ref={refdesc}
        className='mx-auto mb-7 mt-3 max-w-[700px] text-center md:text-lg'
      >
        {description.split(' ').map((word, index) => (
          <span
            key={index}
            className='relative inline-flex overflow-hidden '
          >
            <motion.span
              key={index}
              animate={isView ? 'open' : 'closed'}
              custom={index}
              variants={slideUp}
            >
              {word}
            </motion.span>
            <span className='inline-block'>&nbsp;</span>
          </span>
        ))}
      </p>

      <Modal>
        <div className='group relative isolation-auto z-10 mx-auto flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[16px] border border-solid border-[#D9D9D9] px-4 text-lg text-gray-900 backdrop-blur-md transition-colors duration-500 before:absolute before:bottom-0 before:-z-10 before:aspect-square before:w-full before:origin-bottom before:-translate-y-full before:bg-[#101010] before:transition-transform before:duration-300 hover:text-gray-50 before:hover:translate-y-0'>
          <button
            className={cn(
              locale === 'en' ? '' : 'flex-row-reverse ',
              'flex items-center gap-3 rounded-[12px] px-4 py-3',
            )}
          >
            <span className='font-nebulica text-lg text-black transition-all duration-300 group-hover:text-white sm:text-2xl md:text-3xl'>
              {btnText}
            </span>

            <span className='flex h-6 w-8 items-center justify-center rounded-[4px] bg-black'>
              <Image
                alt='arrow'
                className={cn(
                  locale === 'en'
                    ? 'group-hover:rotate-45'
                    : 'group-hover:-rotate-45',
                  'transition-all duration-300',
                )}
                height={12}
                src={
                  locale === 'en'
                    ? '/icons/c-arrow.svg'
                    : '/icons/c-ar-arrow.svg'
                }
                width={12}
              />
            </span>
          </button>
        </div>
      </Modal>
    </section>
  );
}

export default Contact;
