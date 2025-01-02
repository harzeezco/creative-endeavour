import { About, Achievement, Hero, Principles } from '@/page/about';
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

const AboutPage = () => (
  <main className='pt-20'>
    <Hero />
    <div className='container'>
      <hr className='border-t border-[#E0E0E0]' />
    </div>
    <About />
    <div className='container'>
      <hr className='border-t border-[#E0E0E0]' />
    </div>
    <Achievement />
    <Principles />
  </main>
);

export default AboutPage;
