import SlideInAnimation from '@/components/slide-in-animation';
import { SlidingImages } from '@/components/sliding-images';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';

export const HeroSection = () => {
  const t = useTranslations('Home');

  return (
    <section className='bg-black py-14'>
      <SlideInAnimation as='h1' className={cn('mx-auto text-center text-3xl max-sm:px-4 text-white sm:text-4xl md:text-5xl md:!leading-[1.3]', t('title').startsWith('Your') ? 'max-w-5xl' : 'max-w-lg')}>
        {t('title')}
      </SlideInAnimation>

      <SlidingImages />
    </section>
  );
};
