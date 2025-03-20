'use client';

import { Button } from '@/components/ui/button';
import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import { slideUp } from '@/utils/motion';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export const About = () => {
  const { locale } = useLocalize('Home');
  const ref = useRef(null);
  const title = 'للطلاب، اعثر على الشريك التعليمي المثالي';
  const desc =
    'اعثر على شريكك التعليمي المثالي وارتقِ بتعليمك لمستويات جديدة';
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section
      className={cn(
        locale === 'en' ? '' : 'flex-row-reverse',
        'container pb-14 max-sm:flex-col text-end',
      )}
      id='about'
    >
      <div ref={ref}>
        <div
          className={cn(
            locale === 'en' ? '' : 'flex flex-col items-end',
          )}
        >
          <p
            className={cn(
              'text-[#253459] text-2xl max-w-[650px] sm:text-3xl lg:text-4xl font-medium font-nebulica md:!leading-[1.1]',
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
          </p>

          <p
            className={cn(
              'mt-5 max-w-[650px] text-lg text-[#212121]',
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

          <Button className='text-capitalize mt-10 rounded-lg !bg-[#0020AC] px-5 text-lg !text-white transition duration-300 hover:opacity-85 max-sm:w-full'>
            احجز درسًا الآن
          </Button>
        </div>
      </div>

      <div className='mt-14 flex items-center justify-between gap-10 max-sm:flex-col'>
        {DATA.map((item, index) => (
          <div
            key={index}
            className={cn(
              locale === 'en' ? '' : 'flex flex-col items-end',
            )}
          >
            <Image
              alt={item.title}
              className='w-full'
              height={400}
              src={`/images/${item.src}`}
              width={300}
            />
            <div
              className={cn(
                locale === 'en' ? '' : 'flex flex-col items-end',
                'mt-3',
              )}
            >
              <h3 className='font-nebulica text-lg font-medium text-[#212121]'>
                {item.title}
              </h3>
              <p className='mt-2 text-sm text-[#212121]'>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const DATA = [
  {
    src: 'dashboard.png',
    title: 'تطابق شخصي',
    desc: 'معلمون متوافقون تمامًا مع احتياجاتك',
  },
  {
    src: 'dashboard2.png',
    title: 'تطابق شخصي',
    desc: 'معلمون متوافقون تمامًا مع احتياجاتك',
  },
  {
    src: 'dashboard3.png',
    title: 'جدولة مرنة',
    desc: 'دروسك في أي وقت ومن أي مكان',
  },
];
