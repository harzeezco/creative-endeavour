import { QASection } from '@/page/home/qa-section';
import { ContactSection, HeroSection, ServiceSection, TrustedCompanies } from '../page/home';

const Homepage = () => (
  <main className='mt-14 2xl:pr-6'>
    <HeroSection />
    <TrustedCompanies />
    <ServiceSection />
    <ContactSection />
    <QASection />
  </main>
);

export default Homepage;
