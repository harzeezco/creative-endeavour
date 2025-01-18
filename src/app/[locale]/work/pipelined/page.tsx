import Contact from '@/components/contact';
import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import { getSEOTags } from '@/utils/seo';
import Image from 'next/image';

import Details from './details';

// import config from '../../../../config';

export const metadata = getSEOTags({
  // title: `About Us | ${config.appName}`,
  canonicalUrlRelative: '/about',
  description:
    'We partner with organizations to deliver innovative UI/UX design and effective growth strategies, helping you enhance customer experiences and achieve measurable growth',
  keywords:
    'UI/UX design, Building MVPs, Design & Research, Innovation Lab-aas',
});
const PipelinedPage = () => {
  const { locale, t } = useLocalize('WorkDetail');

  return (
    <main className='mt-[90px]'>
      <hr className='mt-[90px] border-t border-[#E0E0E0]' />
      <section className='container py-14'>
        <div
          className={cn(
            locale === 'en' ? '' : 'flex flex-col items-end',
          )}
        >
          <div>
            <p
              className={cn(
                locale === 'en' ? '' : 'flex-row-reverse',
                'flex items-center gap-2 mb-2',
              )}
            >
              <span className='text-[#111111] sm:text-lg'>
                {t('pipelined-label')}
              </span>
              <Image
                alt='line'
                height={30}
                src='/icons/line.svg'
                width={50}
              />
            </p>
          </div>
          <h1
            className={cn(
              locale === 'en'
                ? 'font-nebulica'
                : 'font-cairo text-end',
              ' text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[800px] md:!leading-[1.1]',
            )}
          >
            {t('pipelined-title')}
          </h1>

          <p
            className={cn(
              locale === 'en' ? '' : 'text-end',
              'mt-5 max-w-[700px] text-lg',
            )}
          >
            {t('pipelined-desc')}
          </p>
        </div>
      </section>

      <Details />
      <div className='container mb-20'>
        <hr className='border-t border-[#E0E0E0]' />
      </div>
      <Contact
        btnText={t('cta-btn')}
        desc={t('cta-desc')}
        title={t('cta-title')}
      />
    </main>
  );
};

export default PipelinedPage;
