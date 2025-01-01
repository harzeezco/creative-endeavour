import JoinNow from '@/components/join-now';
import {
  About,
  HeroSection,
  Projects,
  ServiceSection,
  Testimonials,
} from '@/page/home';
import { getSEOTags } from '@/utils/seo';

import config from '../../../config';

export const metadata = getSEOTags({
  title: `Home | ${config.appName}`,
  canonicalUrlRelative: '/',
  description:
    'We partner with organizations to deliver innovative UI/UX design and effective growth strategies, helping you enhance customer experiences and achieve measurable growth',
  keywords:
    'UI/UX design, Building MVPs, Design & Research, Innovation Lab-aas',
  twitter: {
    card: 'summary_large_image',
  },
});

const Homepage = () => (
  <main className='2xl:pr-6'>
    <HeroSection />
    <About />
    <ServiceSection />
    <Projects />
    <Testimonials />
    <JoinNow />
  </main>
);

export default Homepage;
