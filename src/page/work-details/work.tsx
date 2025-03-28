'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export const WorkList = () => {
  const { locale, t } = useLocalize('Work');

  const projects = [
    {
      src: 'sample-project1.png',
      title: t('project1-title'),
      desc: t('project1-desc'),
      labels: [t('project1-label'), t('project1-label1')],
    },
    {
      src: 'sample-project.png',
      title: t('project2-title'),
      desc: t('project2-desc'),
      labels: [t('project2-label'), t('project2-label1')],
    },
  ];

  return (
    <section className='container py-14'>
      <div
        className={cn(
          locale === 'en' ? '' : 'flex-row-reverse',
          'mb-8 flex justify-between max-sm:flex-col',
        )}
      >
        <div>
          <p
            className={cn(
              locale === 'en' ? '' : 'flex-row-reverse',
              'flex items-center gap-2 mb-2',
            )}
          >
            <span className='text-lg text-[#111111]'>
              {t('main-label')}
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
            {t('main-title')}
          </h1>

          <p
            className={cn(
              locale === 'en' ? '' : 'text-end',
              'mt-5 max-w-[600px] text-lg',
            )}
          >
            {t('main-desc')}
          </p>
        </div>
      </div>

      <div className='space-y-10'>
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
        className='w-full'
        height={600}
        src={`/images/${src}`}
        width={500}
      />
      <div
        className={cn(
          locale === 'en' ? '' : 'flex flex-col items-end',
          'mt-3',
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

        <div
          className={cn(
            locale === 'en'
              ? 'max-sm:items-start'
              : 'flex-row-reverse max-sm:items-end',
            'flex items-center justify-between max-sm:flex-col w-full',
          )}
        >
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
    </div>
  );
}
