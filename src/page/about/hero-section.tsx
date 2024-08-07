import { heroQualitiesDisplay } from '@/constant';
import Image from 'next/image';

export const Hero = () => (
  <section>
    <div className='container'>
      <div className='mx-auto max-w-[55.75rem] text-center text-primary-200'>
        <p className='text-lg'>Our Mission</p>
        <h1 className='text-5xl font-medium leading-[1.3] text-primary-50'>
          Unlocking Creativity and Innovation in Every Pixel
        </h1>
        <p className='mt-3 text-lg'>
          Crafting Digital Experiences & Transforming Visions into
          Reality: Our Story
        </p>
      </div>

      {/* Qualities Display */}

      <ul className='mt-28 flex items-center gap-x-4'>
        {heroQualitiesDisplay.map((item) => (
          <li className='flex items-start gap-x-6'>
            <div className='grid shrink-0 place-content-center bg-primary-300 p-2 shadow-md'>
              <Image
                alt='icon'
                height={30}
                src={item.iconUrl}
                width={30}
              />
            </div>
            <div className='max-w-[398px]'>
              <h1 className='text-2xl font-medium text-primary-350'>
                {item.headline}
              </h1>
              <p className='text-base text-primary-200'>
                {item.paragraph}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
