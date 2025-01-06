import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const TestimonialData = [
  {
    src: 'testimonial-student.png',
    description:
      '"Creative Endeavour transformed our healthcare platform with their AI integration expertise. Their innovative solutions streamlined patient data management, improving efficiency by 70%. We’re proud to work with such a forward-thinking team."',
    person: 'Kristin Watson',
  },
  {
    src: 'testimonial-student.png',
    description:
      '"Creative Endeavour transformed our healthcare platform with their AI integration expertise. Their innovative solutions streamlined patient data management, improving efficiency by 70%. We’re proud to work with such a forward-thinking team."',
    person: 'Kristin Watson',
  },
  {
    src: 'testimonial-student.png',
    description:
      '"Creative Endeavour transformed our healthcare platform with their AI integration expertise. Their innovative solutions streamlined patient data management, improving efficiency by 70%. We’re proud to work with such a forward-thinking team."',
    person: 'Kristin Watson',
  },
];

export function TestimonialCarousel() {
  return (
    <div className=''>
      <Carousel>
        <CarouselContent>
          {TestimonialData.map(({ description, person }, index) => (
            <CarouselItem key={index} className='relative z-[9999]'>
              <article className='relative mt-7 lg:mt-7 lg:px-7'>
                <div>
                  <blockquote className='font-nebulica text-xl leading-7 text-body md:text-3xl md:leading-[33px]'>
                    {description}
                  </blockquote>

                  <div className='mt-10 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <Image
                        alt='image'
                        className='size-16 rounded-full object-cover'
                        height={70}
                        src='/images/image6.jpg'
                        width={70}
                      />

                      <div className=''>
                        <p className='flex items-center gap-2 text-xl font-medium text-body'>
                          {' '}
                          {person}
                        </p>

                        <span>SmartHealth</span>
                      </div>
                    </div>

                    <div className='mt-10 items-center justify-end gap-4 md:flex'>
                      <CarouselPrevious className='h-9 !w-12 from-[#024BA5] to-[#105DBD] transition-all hover:border-none hover:bg-gradient-to-r hover:text-white max-sm:absolute max-sm:!left-0 max-sm:!-translate-y-48' />
                      <CarouselNext className='h-9 !w-12 from-[#024BA5] to-[#105DBD] transition-all hover:border-none hover:bg-gradient-to-r hover:text-white max-sm:absolute max-sm:!right-0 max-sm:!-translate-y-48' />
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
