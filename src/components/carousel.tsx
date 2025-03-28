import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import { slideUp } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

export function TestimonialCarousel({
  isInView,
}: {
  isInView: boolean;
}) {
  const { locale, t } = useLocalize('Home');

  const TestimonialData = [
    {
      src: 'testimonial-student.png',
      description: `"${t('testimonial-comment')}"`,
      person: 'Kristin Watson',
    },
    {
      src: 'testimonial-student.png',
      description: `"${t('testimonial-comment')}"`,
      person: 'Kristin Watson',
    },
    {
      src: 'testimonial-student.png',
      description: `"${t('testimonial-comment')}"`,
      person: 'Kristin Watson',
    },
  ];

  return (
    <div className=''>
      <Carousel>
        <CarouselContent>
          {TestimonialData.map(({ description, person }, index) => (
            <CarouselItem key={index} className='relative z-[9999]'>
              <article className='relative mt-7 lg:mt-7 lg:px-7'>
                <div>
                  <blockquote
                    className={cn(
                      locale === 'en'
                        ? 'font-nebulica'
                        : 'text-end font-cairo',
                      'font-nebulica text-xl leading-7 text-body md:text-3xl md:leading-[33px]',
                    )}
                  >
                    {description.split(' ').map((word, index) => (
                      <span
                        key={index}
                        className='relative inline-flex overflow-hidden '
                      >
                        <motion.span
                          key={index}
                          animate={isInView ? 'open' : 'closed'}
                          custom={index}
                          variants={slideUp}
                        >
                          {word}
                        </motion.span>
                        <span className='inline-block'>&nbsp;</span>
                      </span>
                    ))}
                  </blockquote>

                  <div className='mt-10 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <Image
                        alt='image'
                        className='size-16 rounded-full object-cover max-sm:size-14'
                        height={70}
                        src='/images/image6.jpg'
                        width={70}
                      />

                      <div className=''>
                        <p className='flex items-center gap-2 text-lg font-medium text-body sm:text-xl'>
                          {' '}
                          {person}
                        </p>

                        <span>SmartHealth</span>
                      </div>
                    </div>

                    <div className='mt-10 items-center justify-end gap-4 md:flex'>
                      <CarouselPrevious className='h-9 !w-12 from-[#024BA5] to-[#105DBD] transition-all hover:border-none hover:bg-gradient-to-r hover:text-white' />
                      <CarouselNext className='h-9 !w-12 from-[#024BA5] to-[#105DBD] transition-all hover:border-none hover:bg-gradient-to-r hover:text-white max-sm:ml-3' />
                    </div>
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
