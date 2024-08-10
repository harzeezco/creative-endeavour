import JoinNow from '@/components/join-now';
import LatestNews from '@/components/latest-news';
import Tenets from '@/components/tenets';
import { AboutSection, CountSection, Hero } from '@/page/about';

const AboutPage = () => (
  <main className='pt-20'>
    <Hero />
    <CountSection />
    <AboutSection />
    <Tenets />
    <JoinNow />
    <LatestNews />
  </main>
);

export default AboutPage;
