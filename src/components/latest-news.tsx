import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const LatestNews = () => {
  const { locale, t } = useLocalize('Home');

  const ourTrends = [
  {
    subText: t('news-date'),
    headline: t('news-content'),
  },
  {
    subText: t('news-date'),
    headline: t('news-content'),
  },
  {
    subText: t('news-date'),
    headline: t('news-content'),
  },
  {
    subText: t('news-date'),
    headline: t('news-content'),
  },
  {
    subText: t('news-date'),
    headline: t('news-content'),
  },
  ];

  return (
    <section>
      <div className={cn('container mx-auto mt-20 flex max-lg:flex-col gap-y-10 justify-between gap-x-10', locale === 'ar' ? 'flex-row-reverse text-end' : '')}>
        <div className={cn('flex-1', locale === 'ar' ? 'flex flex-col items-end' : 'text-start')}>
          <h1 className='max-w-[350px] text-2xl font-medium text-primary-350 md:text-3xl lg:text-5xl'>
            {t('news-title')}
          </h1>
          <p className='mt-3 max-w-[350px] text-base text-primary-100'>
            {t('news-desc')}
          </p>
        </div>

        <ul className='flex flex-[1.3] flex-col gap-y-7'>
          {ourTrends.map((trend) => (
            <li>
              <div className={cn('group flex items-center justify-between gap-x-10 border-b-2  border-primary-50 pb-5', locale === 'ar' ? 'flex-row-reverse' : '')}>
                <div>
                  <p className='text-base text-primary-100'>
                    {trend.subText}
                  </p>
                  <h1
                    className='line-clamp-1 max-w-md text-lg font-semibold'
                    title={trend.headline}
                  >
                    {trend.headline}
                  </h1>
                </div>
                <div className={cn('flex items-center gap-1', locale === 'ar' ? 'flex-row-reverse' : '')}>
                  <Link className={cn('opacity-0 invisible transition-all duration-300 text-nowrap hover:underline text-[#181A2E] group-hover:visible group-hover:opacity-100')} href={`/${locale}/blog`}>
                    Read more
                  </Link>
                  {locale === 'ar' ? <ArrowLeft className='shrink-0' size={22} /> : <ArrowRight className='shrink-0' size={22} />}

                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LatestNews;
