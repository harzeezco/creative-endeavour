import SlideInAnimation from '@/components/slide-in-animation';
import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const ServiceSection = () => {
  const { locale, t } = useLocalize('Home');

  const Services = [
    {
      icon: 'd.svg',
      head: t('service-title1'),
      text: t('service-desc1'),
      content: [
        {
          title: t('service-content1-a'),
          desc: t('service-content1-a-desc'),
        },
        {
          title: t('service-content1-b'),
          desc: t('service-content1-b-desc'),
        },
        {
          title: t('service-content1-c'),
          desc: t('service-content1-c-desc'),
        },
      ],
    },
    {
      icon: 'design.svg',
      head: t('service-title2'),
      text: t('service-desc2'),
      content: [
        {
          title: t('service-content2-a'),
          desc: t('service-content2-a-desc'),
        },
        {
          title: t('service-content2-b'),
          desc: t('service-content2-b-desc'),
        },
        {
          title: t('service-content2-c'),
          desc: t('service-content2-c-desc'),
        },
      ],
    },
    {
      icon: 'head.svg',
      head: t('service-title3'),
      text: t('service-desc3'),
      content: [
        {
          title: t('service-content3-a'),
          desc: t('service-content3-a-desc'),
        },
        {
          title: t('service-content3-b'),
          desc: t('service-content3-b-desc'),
        },
        {
          title: t('service-content3-c'),
          desc: t('service-content3-c-desc'),
        },
      ],
    },
  ];

  return (
    <section className='mt-20 bg-[#EFEFEF] py-16' id='services'>
      <div
        className={cn(
          'container flex items-center max-lg:flex-wrap justify-center gap-y-8 gap-x-9',
          locale === 'ar' ? 'flex-row-reverse' : '',
        )}
      >
        {Services.map(({ content, head, icon, text }) => (
          <div className='w-full'>
            <SlideInAnimation
              key={text}
              as='div'
              className={cn(
                locale === 'ar' ? 'text-end' : 'text-start',
                'flex w-full justify-between min-h-[500px] grow flex-col bg-white p-5',
              )}
            >
              <div>
                <div
                  className={cn(
                    locale === 'ar' ? 'flex justify-end' : '',
                  )}
                >
                  <Image
                    alt={text}
                    height={25}
                    src={`/icons/${icon}`}
                    width={25}
                  />
                </div>

                <h2
                  className={cn(
                    'mt-4 text-xl font-semibold text-primary-50',
                  )}
                >
                  {head}
                </h2>

                <p className='text-primary-200'>{text}</p>
              </div>

              <div className='mt-10 space-y-7 justify-self-end'>
                {content.map(({ desc, title }) => (
                  <div className='border-b border-solid border-[#2D313A]'>
                    <Link
                      className='group cursor-pointer'
                      href='#contact'
                    >
                      <h3
                        className={cn('pb-1 text-lg font-semibold')}
                      >
                        {title}
                      </h3>

                      <div
                        className={cn(
                          'invisible flex max-h-0 items-end justify-between pb-3 text-primary-200 opacity-0 transition-all duration-400 group-hover:visible group-hover:min-h-16 group-hover:max-h-20 group-hover:opacity-100',
                          locale === 'ar' ? 'flex-row-reverse' : '',
                        )}
                      >
                        <span>{desc}</span>

                        {locale === 'ar' ? (
                          <ArrowLeft className='shrink-0' size={22} />
                        ) : (
                          <ArrowRight
                            className='shrink-0'
                            size={22}
                          />
                        )}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </SlideInAnimation>
          </div>
        ))}
      </div>
    </section>
  );
};
