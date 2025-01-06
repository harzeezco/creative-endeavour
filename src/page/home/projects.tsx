'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export const Projects = () => {
  const { locale, t } = useLocalize('Home');

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
  return (
    <div className=''>
      <Image
        alt={title}
        className='h-[350px] w-full'
        height={500}
        src={`/images/${src}`}
        width={500}
      />
      <h2 className='mt-2 font-nebulica text-lg text-[#111111]'>
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
  );
}

const projects = [
  {
    src: 'project2.png',
    title: 'SMARTHEALTH WEBSITE',
    desc: 'A dynamic website showcasing cutting-edge digital solutions and innovative software excellence.',
    labels: ['Web Development', 'Web App Development'],
  },
  {
    src: 'project1.png',
    title: 'Enterprise Software Migration',
    desc: 'We empower brands with innovative strategies and impactful digital solutions for growth and success.',
    labels: ['SOFTWARE DEVELOPMENT'],
  },
  {
    src: 'project3.png',
    title: 'CityGov Portal',
    desc: 'Exploring new horizons in digital innovation,  and transformative technological solutions for your business.',
    labels: ['AI', 'SOFTWARE DEVELOPMENT'],
  },
  {
    src: 'project4.png',
    title: 'Legacy System Modernization',
    desc: 'Redefining possibilities through groundbreaking digital solutions and creative innovation for enhanced business success.',
    labels: ['REVERSE ENGINEERING', 'SOFTWARE DEVELOPMENT'],
  },
];
