import { Button } from '@/components/ui/button';
import { getSEOTags } from '@/utils/seo';
import Image from 'next/image';
import Link from 'next/link';

import config from '../../config';

export const metadata = getSEOTags({
  title: `Not Found | ${config.appName}`,
  canonicalUrlRelative: '/not-found',
  description:
    'We partner with organizations to deliver innovative UI/UX design and effective growth strategies, helping you enhance customer experiences and achieve measurable growth',
  keywords: '',
});

const NotFound = () => (
  <section className='flex h-screen flex-col items-center justify-center gap-4'>
    <Image
      alt='not found'
      height={300}
      src='/images/error.png'
      width={300}
    />

    <p className='mx-auto max-w-md text-center'>
      Sorry, the page you’re looking for doesn’t exist. If you think
      something is broken, report a problem
    </p>

    <Link href='/'>
      <Button className='group/btn relative block h-12 rounded-2xl bg-primary-350 px-12 font-medium !text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-all duration-300 hover:bg-primary-350/70 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'>
        Go Home
      </Button>
    </Link>
  </section>
);

export default NotFound;
