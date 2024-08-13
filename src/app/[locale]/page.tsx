import JoinNow from '@/components/join-now';
import Tenets from '@/components/tenets';
import {
  ContactSection,
  HeroSection,
  ServiceSection,
  TrustedCompanies,
} from '@/page/home';
import { getSEOTags } from '@/utils/seo';

import config from '../../../config';

export const metadata = getSEOTags({
  title: ` | ${config.appName}`,
  canonicalUrlRelative: '/',
  description:
    'We partner with organizations to deliver innovative UI/UX design and effective growth strategies, helping you enhance customer experiences and achieve measurable growth',
  keywords: '',
});

const Homepage = () => (
  <main className='2xl:pr-6'>
    <HeroSection />
    <TrustedCompanies />
    <ServiceSection />
    <ContactSection />
    <Tenets />
    <JoinNow />
    {/* <LatestNews /> */}
    {/* <QASection /> */}
  </main>
);

export default Homepage;
