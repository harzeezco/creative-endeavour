'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export const Projects = () => {
  const { locale, t } = useLocalize('Home');

  const projects = [
    {
      src: 'project2.png',
      title: t('project1-title'),
      desc: t('project1-desc'),
      labels: [t('project1-label'), t('project1-label1')],
    },
    {
      src: 'project1.png',
      title: t('project2-title'),
      desc: t('project2-desc'),
      labels: [t('project2-label')],
    },
    {
      src: 'project3.png',
      title: t('project3-title'),
      desc: t('project3-desc'),
      labels: [t('project3-label'), t('project3-label1')],
    },
    {
      src: 'project4.png',
      title: t('project4-title'),
      desc: t('project4-desc'),
      labels: [t('project4-label'), t('project4-label1')],
    },
  ];

  return (
    <section className='container py-14'>
      <div className='mb-8 flex justify-between max-sm:flex-col'>
        <div>
          <p
            className={cn(
              locale === 'en' ? '' : 'flex-row-reverse',
              'flex items-center gap-2 mb-2',
            )}
          >
            <span className='text-lg text-[#111111]'>
              {t('projects-label')}
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
            {t('projects-title')}
          </h1>

          <p className='mt-5 max-w-[650px] text-lg'>
            {t('projects-desc')}
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

function ProjectList({
  desc,
  labels,
  src,
  title,
}: {
  desc: string;
  labels: string[];
  src: string;
  title: string;
}) {
  const { locale } = useLocalize('Home');

  return (
    <div className=''>
      <Image
        alt={title}
        className='h-[350px] w-full'
        height={500}
        src={`/images/${src}`}
        width={500}
      />
      <div
        className={cn(
          locale === 'en' ? '' : 'flex flex-col items-end',
        )}
      >
        <h2
          className={cn(
            locale === 'en' ? 'font-nebulica' : 'font-cairo',
            'mt-2 text-lg text-[#111111]',
          )}
        >
          {title}
        </h2>

        <p className='py-2'>{desc}</p>

        <div className='mt-4 flex items-center gap-x-4'>
          {labels.map((label) => (
            <button
              key={label}
              className='cursor-text rounded-[8px] bg-[#F4F1FD] px-4 py-1.5 text-body'
              type='button'
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
