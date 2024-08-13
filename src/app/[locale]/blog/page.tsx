import { CategorySection, FeatureArticle, Hero } from '@/page/blog';
import { NewsletterSection } from '@/page/blog/newsletter';
import { getSEOTags } from '@/utils/seo';

import config from '../../../../config';

export const metadata = getSEOTags({
  title: `Blog | ${config.appName}`,
  canonicalUrlRelative: '/about',
  description:
    'We partner with organizations to deliver innovative UI/UX design and effective growth strategies, helping you enhance customer experiences and achieve measurable growth',
  keywords:
    'UI/UX design, Building MVPs, Design & Research, Innovation Lab-aas',
});

const BlogPage = () => (
  <main>
    <Hero />
    <FeatureArticle />
    <CategorySection />
    <NewsletterSection />
  </main>
);

export default BlogPage;
