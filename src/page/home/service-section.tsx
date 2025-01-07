'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import { slideUp } from '@/utils/motion';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

export const ServiceSection = () => {
  const { locale, t } = useLocalize('Home');
  const ref = useRef(null);
  const title = t('service-title');
  const desc = t('service-desc');
  const label = t('service-label');
  const isInView = useInView(ref, { amount: 0.3, once: true });

  const ServiceList = [
    {
      isOpen: true,
      id: 1,
      number: '01',
      title: t('project1-title'),
      desc: t('project1-desc'),
      samples: [
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
      ],
    },
    {
      isOpen: false,
      id: 2,
      number: '02',
      title: t('project2-title'),
      desc: t('project2-desc'),
      samples: [
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
      ],
    },
    {
      isOpen: false,
      id: 3,
      number: '03',
      title: t('project3-title'),
      desc: t('project3-desc'),
      samples: [
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
      ],
    },
    {
      isOpen: false,
      id: 4,
      number: '04',
      title: t('project4-title'),
      desc: t('project4-desc'),
      samples: [
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
      ],
    },
  ];

  const [service, setService] = useState(ServiceList);

  const handleService = (id: number) => {
    setService((prev) =>
      prev.map((options) =>
        options.id === id
          ? { ...options, isOpen: !options.isOpen }
          : { ...options },
      ),
    );
  };

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

      <div>
        {service.map(
          ({ desc, id, isOpen, number, samples, title }) => (
            <Service
              key={number}
              desc={desc}
              handleClick={handleService}
              id={id}
              isOpen={isOpen}
              number={number}
              samples={samples}
              title={title}
            />
          ),
        )}
      </div>
    </section>
  );
};

function Service({
  desc,
  handleClick,
  id,
  isOpen,
  number,
  samples,
  title,
}: {
  desc: string;
  handleClick: (id: number) => void;
  id: number;
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
    <div
      className='border-y border-solid border-[#D9D9D9] px-4 py-6 transition duration-200 ease-in-out hover:cursor-pointer hover:bg-[#737373]/10'
      role='button'
      tabIndex={0}
      onClick={() => handleClick(id)}
      onKeyDown={() => handleClick(id)}
    >
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
          <AnimatePresence>
            {isOpen ? <Minus /> : <Plus />}
          </AnimatePresence>
        </button>
      </div>

      <p className={cn(locale === 'en' ? '' : 'text-end')}>{desc}</p>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ scale: 1 }}
            className='mt-8 grid grid-cols-3 items-center gap-4 max-sm:grid-cols-2'
            exit={{ scale: 0 }}
            initial={{ scale: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
          >
            {samples.map((sample) => (
              <Image
                key={sample.src}
                alt={sample.alt}
                height={500}
                src={`/images/${sample.src}`}
                width={500}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
