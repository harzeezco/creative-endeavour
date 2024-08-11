import SlideInAnimation from '@/components/slide-in-animation';
import { SlidingImages } from '@/components/sliding-images';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const HeroSection = () => {
  const t = useTranslations('Home');

  return (
    <section className='bg-black py-14 sm:min-h-[60dvh]'>
      <SlideInAnimation
        as='h1'
        className={cn(
          'mx-auto text-center text-3xl max-sm:px-4 text-white sm:text-4xl md:text-5xl md:!leading-[1.3]',
          t('title').startsWith('Your') ? 'max-w-5xl' : 'max-w-lg',
        )}
      >
        {t('title')}
      </SlideInAnimation>

      <div className='mt-5 flex items-center justify-center sm:hidden'>
        <SlideInAnimation as={Link} delay={0.3} href='/work'>
          <button className='rounded-[8px] bg-[#2D313A] px-6 py-3 text-white transition-all duration-300 hover:bg-[#2D313A]/70 active:bg-[#2D313A]/70'>
            Discover Our Works
          </button>
        </SlideInAnimation>
      </div>

      <SlidingImages />
    </section>
  );
};
