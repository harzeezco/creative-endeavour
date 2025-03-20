'use client';

import Image from 'next/image';
import Link from 'next/link';

export const CTA = () => (
  <section
    className='mt-10 flex items-center justify-center px-6 pb-10'
    id='cta'
  >
    <div className='cta items-center md:grid md:grid-cols-[1fr_1fr]'>
      <div />
      <div className='container text-center text-white max-sm:pt-10 md:pr-20 lg:text-end'>
        <h1 className='mb-5 text-balance font-nebulica text-3xl font-medium leading-[1.3] sm:text-4xl lg:mb-10 lg:text-6xl'>
          جاهز للارتقاء برحلتك التعليمية؟
        </h1>

        <p className='text-balance text-xl'>
          حمّل تطبيق علم الآن وانطلق نحو تجربة تعليمية استثنائية
        </p>

        <div className='mt-10 flex items-center justify-end gap-x-4'>
          <Link href='/'>
            <Image
              alt='logo'
              className='transition-all duration-300 hover:scale-105'
              height={50}
              src='/images/apple.png'
              width={150}
            />
          </Link>

          <Link href='/'>
            <Image
              alt='logo'
              className='transition-all duration-300 hover:scale-105'
              height={50}
              src='/images/google.png'
              width={150}
            />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
