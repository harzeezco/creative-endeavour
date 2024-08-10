import { cn } from '@/utils/cn';
import { ArrowRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

export const ServiceSection = () => {
  const s = useTranslations('Home');
  const locale = useLocale();

  const Services = [
    {
      icon: 'd.svg',
      head: s('service-title1'),
      text: s('service-desc1'),
      content: [
        {
          title: s('service-content1-a'),
          desc: 'An expert that enlightens your functional area output'
        },
        {
          title: s('service-content1-b'),
          desc: 'An expert that enlightens your functional area output'
        },
        {
          title: s('service-content1-c'),
          desc: 'An expert that enlightens your functional area output'
        },
      ],
    },
    {
      icon: 'design.svg',
      head: s('service-title2'),
      text: s('service-desc2'),
      content: [
        {
          title: s('service-content2-a'),
           desc: 'An expert that enlightens your functional area output'
        },
        {
          title: s('service-content2-b'),
          desc: 'An expert that enlightens your functional area output'
        },
        {
          title: s('service-content2-c'),
          desc: 'An expert that enlightens your functional area output'
        },
      ],
    },
    {
      icon: 'head.svg',
      head: s('service-title3'),
      text: s('service-desc3'),
      content: [
        {
          title: s('service-content3-a'),
         desc: 'An expert that enlightens your functional area output'
        },
        {
          title: s('service-content3-b'),
                    desc: 'An expert that enlightens your functional area output'
        },
        {
          title: s('service-content3-c'),
                    desc: 'An expert that enlightens your functional area output'
        },
      ],
    },
  ];

  return (
    <section className='mt-20 bg-[#EFEFEF] py-10' id='services'>
      <div className={cn('container flex items-center max-lg:flex-wrap justify-center gap-y-8 gap-x-5', locale === 'ar' ? 'flex-row-reverse' : '')}>
        {Services.map(({ content, head, icon, text }) => (
          <div className={cn(locale === 'ar' ? 'text-end' : 'text-start', 'flex w-full min-h-[500px] grow flex-col bg-white p-5')}>
            <div className={cn(locale === 'ar' ? 'flex justify-end' : '')}>
              <Image
                alt={text}
                height={25}
                src={`/icons/${icon}`}
                width={25}
              />
            </div>

            <h2 className={cn('mt-4 text-xl font-bold text-[#2D313A]')}>
              {head}
            </h2>

            <p className='text-[#697485]'>{text}</p>

            <div className='mt-10 space-y-5 justify-self-end'>
              {content.map(({ desc, title }) => (
                <div className='group cursor-pointer border-b border-solid border-[#2D313A]'>
                  <h3 className={cn('pb-2 text-lg font-semibold')}>{title}</h3>

                  <div className='invisible flex h-0 items-end justify-between pb-3 text-primary-200 opacity-0 transition-all duration-300 group-hover:visible group-hover:h-16 group-hover:opacity-100'>
                    <span>
                      {desc}
                    </span>

                    <ArrowRight />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
