import Contact from '@/components/contact';
import useLocalize from '@/hooks/use-locale';
import { Hero } from '@/page/work';
import { getSEOTags } from '@/utils/seo';

// import config from '../../../../config';

export const metadata = getSEOTags({
  // title: `About Us | ${config.appName}`,
  canonicalUrlRelative: '/about',
  description:
    'We partner with organizations to deliver innovative UI/UX design and effective growth strategies, helping you enhance customer experiences and achieve measurable growth',
  keywords:
    'UI/UX design, Building MVPs, Design & Research, Innovation Lab-aas',
});
const WorkPage = ({ params }: { params: { work: string } }) => {
  const { t } = useLocalize('Work');

  console.log(params);

  return (
    <main>
      <Hero />
      <div className='container mb-20'>
        <hr className='border-t border-[#E0E0E0]' />
      </div>
      <Contact
        btnText={t('cta-btn')}
        desc={t('cta-desc')}
        href='#contact'
        title={t('cta-title')}
      />
    </main>
  );
};

export default WorkPage;
