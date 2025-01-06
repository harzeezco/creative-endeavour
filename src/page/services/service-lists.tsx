'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export const ServiceLists = () => {
  const { locale, t } = useLocalize('Service');

  const Lists = [
    {
      number: '01',
      title: t('project1-title'),
      desc: t('project1-desc'),
      src: 'devops.png',
      alt: 'devops',
      tools: [
        t('project1-label'),
        t('project1-label1'),
        t('project1-label2'),
        t('project1-label3'),
      ],
    },
    {
      number: '02',
      title: t('project2-title'),
      desc: t('project2-desc'),
      src: 'ai.png',
      alt: 'AI',
      tools: [
        t('project2-label'),
        t('project2-label1'),
        t('project2-label2'),
        t('project2-label3'),
      ],
    },
    {
      number: '03',
      title: t('project3-title'),
      desc: t('project3-desc'),
      src: 'code.png',
      alt: 'code',
      tools: [
        t('project3-label'),
        t('project3-label1'),
        t('project3-label3'),
        t('project3-label3'),
      ],
    },
    {
      number: '04',
      title: t('project4-title'),
      desc: t('project4-desc'),
      src: 'dashboard.png',
      alt: 'devops',
      tools: [
        t('project4-label'),
        t('project4-label1'),
        t('project4-label2'),
        t('project4-label3'),
      ],
    },
  ];

  return (
    <section className='container mb-20'>
      <div>
        <div className='flex items-start justify-between'>
          <div
            className={cn(
              locale === 'en' ? '' : 'flex-row-reverse',
              'flex items-center gap-y-7 max-sm:flex-col justify-between gap-x-10',
            )}
          >
            {Lists.slice(0, 2).map(
              ({ alt, desc, number, src, title, tools }) => (
                <Principle
                  alt={alt}
                  desc={desc}
                  number={number}
                  src={`/images/${src}`}
                  title={title}
                  tools={tools}
                />
              ),
            )}
          </div>
        </div>

        <div className='py-10'>
          <hr className='border-t border-[#E0E0E0]' />
        </div>

        <div
          className={cn(
            locale === 'en' ? '' : 'flex-row-reverse',
            'flex items-center gap-y-7 max-sm:flex-col justify-between gap-x-10',
          )}
        >
          {Lists.slice(2, 4).map(
            ({ alt, desc, number, src, title, tools }) => (
              <Principle
                alt={alt}
                desc={desc}
                number={number}
                src={`/images/${src}`}
                title={title}
                tools={tools}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

function Principle({
  alt,
  desc,
  number,
  src,
  title,
  tools,
}: {
  alt: string;
  desc: string;
  number: string;
  src: string;
  title: string;
  tools: string[];
}) {
  const { locale, t } = useLocalize('Service');

  return (
    <div
      className={cn(
        locale === 'en' ? '' : 'items-end',
        'flex flex-col',
      )}
    >
      <div
        className={cn(
          locale === 'en' ? '' : 'flex-row-reverse',
          'mb-4 flex items-center justify-between',
        )}
      >
        <div
          className={cn(
            locale === 'en' ? '' : 'flex-row-reverse',
            'flex items-center text-[#0A0A0A] gap-x-5 text-2xl',
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
      </div>

      <p
        className={cn(locale === 'en' ? '' : 'text-end', 'max-w-2xl')}
      >
        {desc}
      </p>

      <div
        className={cn(
          locale === 'en' ? '' : 'text-end flex-row-reverse',
          'mt-7 flex gap-6',
        )}
      >
        <Image alt={alt} height={350} src={src} width={250} />

        <div>
          <p className='mb-5 text-black'>{t('include')}</p>

          <div className='space-y-2 text-body'>
            {tools?.map((tool) => <p>{tool}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}
