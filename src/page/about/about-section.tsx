import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';

export const AboutSection = () => {
  const { locale, t } = useLocalize('About');

  return (
    <section className={cn('mx-auto max-w-4xl max-sm:px-4', locale === 'ar' && 'text-end')}>
      <div>
        <h1 className='text-5xl font-medium text-primary-350'>
          {t('about-head')}
        </h1>
        <p className='mb-14 mt-2 text-base text-primary-200'>
          {t('about-desc')}
        </p>
      </div>

      <div className={cn('text-xl text-primary-200')}>
        <p>
          {t('about-content1')}
        </p>

        <p className='mt-7'>
          {t('about-content2')}
        </p>
      </div>
    </section>
  );
};
