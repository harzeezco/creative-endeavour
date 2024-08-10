import useLocalize from '@/hooks/use-locale';
import Image from 'next/image';
import Link from 'next/link';

export const FeatureArticle = () => {
  const { locale } = useLocalize('About');

  return (
    <section className='container mt-20'>
      <p className='text-center text-primary-200'>The Editor’s Pick</p>
      <h1 className='mt-3 text-center text-5xl font-medium text-primary-350'>Featured Article</h1>
      <div className='mt-20 flex flex-col-reverse items-center justify-between gap-x-10 gap-y-8'>
        <div>
          <span className='text-primary-200'>Innovation</span>
          <Link href={`/${locale}/blog/id`}>
            <h1 className='mt-1 max-w-sm text-4xl text-primary-350 transition-all duration-300 hover:text-primary-200'>Unleashing the Power of Digital Innovation:...
            </h1>
          </Link>

          <p className='mt-3 font-medium text-primary-200'>Key guiding principles for our day to day operations at Sanam</p>
        </div>

        <Image alt='feature' height={400} src='/images/feat.png' width={500} />
      </div>
    </section>
  );
};
