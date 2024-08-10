import JoinNow from '@/components/join-now';
import LatestNews from '@/components/latest-news';
import Tenets from '@/components/tenets';

import {
  ContactSection,
  HeroSection,
  ServiceSection,
  TrustedCompanies,
} from '@/page/home';

const Homepage = () => (
  <main className='2xl:pr-6'>
    <HeroSection />
    <TrustedCompanies />
    <ServiceSection />
    <ContactSection />
    <Tenets />
    <JoinNow />
    <LatestNews />
    {/* <QASection /> */}
  </main>
  );

export default Homepage;
