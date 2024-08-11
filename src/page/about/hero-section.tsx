import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export const Hero = () => {
  const { locale, t } = useLocalize('About');

  const heroQualitiesDisplay = [
    {
      iconUrl: '/icons/twinkleStar.svg',
      headline: t('hero-content-head1'),
      paragraph: t('hero-content-desc1'),
    },
    {
      iconUrl: '/icons/margicPen.svg',
      headline: t('hero-content-head2'),
      paragraph: t('hero-content-desc2'),
    },
    {
      iconUrl: '/icons/confabIcon.svg',
      headline: t('hero-content-head3'),
      paragraph: t('hero-content-desc3'),
    },
  ];

  return (
    <section>
      <div className='container'>
        <div className='mx-auto max-w-[55.75rem] text-center text-primary-200'>
          <p className='text-lg'>{t('hero-sub-text')}</p>
          <h1 className='text-2xl font-medium leading-[1.3] text-primary-50 max-sm:px-4 sm:text-3xl lg:text-5xl'>
            {t('title')}
          </h1>
          <p className='mt-3 text-lg'>{t('hero-desc')}</p>
        </div>

        {/* Qualities Display */}

        <ul
          className={cn(
            'mt-28 flex items-center max-sm:flex-col gap-y-10 gap-x-4',
          )}
        >
          {heroQualitiesDisplay.map((item) => (
            <li
              className={cn(
                locale === 'ar' ? 'flex-row-reverse text-end' : '',
                'flex items-start gap-x-6',
              )}
            >
              <div
                className={cn(
                  'grid shrink-0 place-content-center bg-primary-300 p-2',
                )}
              >
                <Image
                  alt='icon'
                  height={30}
                  src={item.iconUrl}
                  width={30}
                />
              </div>
              <div className='max-w-[398px]'>
                <h1 className='text-xl font-medium text-primary-350'>
                  {item.headline}
                </h1>
                <p className='mt-2 text-base text-primary-200'>
                  {item.paragraph}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
