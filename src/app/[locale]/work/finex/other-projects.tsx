'use client';

import { ProjectList } from '@/components/project-list';
import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import { slideUp } from '@/utils/motion';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export const OtherProjects = () => {
  const { locale, t } = useLocalize('Home');
  const ref = useRef(null);
  const title = t('portfolio-title');
  const desc = t('portfolio-desc');
  const label = t('portfolio-label');
  const isInView = useInView(ref, { amount: 0.3, once: true });

  const projects = [
    {
      href: 'work/pipelined',
      src: 'project6.png',
      title: t('project6-title'),
      desc: t('project6-desc'),
      labels: [t('project6-label')],
    },

    {
      src: 'project2.png',
      title: t('project2-title'),
      desc: t('project2-desc'),
      href: 'work/health-ease',
      labels: [t('project2-label'), t('project2-label1')],
    },
  ];

  return (
    <section className='container py-14'>
      <div
        ref={ref}
        className='mb-8 flex justify-between max-sm:flex-col'
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

          <p className='mt-5 max-w-[650px] text-lg'>
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

      <div className='grid grid-cols-2 gap-x-4 gap-y-8 max-sm:grid-cols-1'>
        {projects.map((project) => (
          <ProjectList key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};
