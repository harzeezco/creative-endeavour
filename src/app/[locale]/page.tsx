import Contact from '@/components/contact';
import {
  About,
  Faq,
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
    <div className='container'>
      <hr className='border-t border-[#E0E0E0]' />
    </div>
    <Faq />
    <div className='container my-20'>
      <hr className='border-t border-[#E0E0E0]' />
    </div>
    <Contact
      btnText='Let’s Talk'
      desc="Let's explore how we can elevate your vision through our unique software development,AI integration and Reverse Engineering"
      href='#contact'
      title='"TELL US YOUR NEXT BIG IDEA"'
    />
  </main>
);

export default Homepage;
