import Contact from '@/components/contact';
import useLocalize from '@/hooks/use-locale';
import { Hero, Projects, WorkList } from '@/page/work';
import { getSEOTags } from '@/utils/seo';

import config from '../../../../config';

export const metadata = getSEOTags({
  title: `About Us | ${config.appName}`,
  canonicalUrlRelative: '/about',
  description:
    'We partner with organizations to deliver innovative UI/UX design and effective growth strategies, helping you enhance customer experiences and achieve measurable growth',
  keywords:
    'UI/UX design, Building MVPs, Design & Research, Innovation Lab-aas',
});
const WorkPage = () => {
  const { t } = useLocalize('Work');

  return (
    <main className='mt-[90px]'>
      <hr className='mt-[90px] border-t border-[#E0E0E0]' />
      <Hero />
      <WorkList />
      <Projects />
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

export default WorkPage;
