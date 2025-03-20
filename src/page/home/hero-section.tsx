'use client';

import useLocalize from '@/hooks/use-locale';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const HeroSection = () => {
  const { locale } = useLocalize('Home');

  return (
    <section className='mt-10 pb-10 md:px-6' id='home'>
      <div className='hero relative flex items-center justify-center md:grid md:grid-cols-[1fr_1fr] md:rounded-t-2xl'>
        <div />
        <div className='container relative z-50 text-white md:pr-20 lg:text-end'>
          <h1 className='mb-10 text-balance font-nebulica text-4xl font-medium max-sm:text-end lg:text-6xl'>
            افتح عالمًا من{' '}
            <span className='text-[#2F1CE4]'>التعلم</span> و
            <span className='text-[#2F1CE4]'>التواصل</span> والنمو
          </h1>

          <p className='text-balance text-xl'>
            حوّل دراستك أو خبرتك إلى تجربة ملهمة مع علم
          </p>

          <ul className='max-sm:text-end'>
            <li>
              معلمون متوافقون تمامًا مع احتياجاتك
              <span className='-translate-y-[30%] pl-2 text-3xl'>
                .
              </span>
            </li>
            <li>
              دروس في أي وقت ومن أي مكان{' '}
              <span className='-translate-y-[30%] pl-2 text-3xl'>
                .
              </span>
            </li>
            <li>
              تفاعل مباشر مع معلمين خبراء{' '}
              <span className='-translate-y-[30%] pl-2 text-3xl'>
                .
              </span>
            </li>
          </ul>

          <div className='mt-8 flex justify-end'>
            <Link href={`/${locale}/contact`}>
              <button
                className='group flex h-12 gap-2 rounded-lg bg-gradient-to-r from-[#422EFF]  to-[#2F1CE4] pr-2 text-white transition-all hover:opacity-80'
                type='button'
              >
                <div className='flex items-center justify-center rounded-l-lg bg-white px-2 '>
                  <ArrowLeft className='mr-2 text-black transition-all duration-300 group-hover:-translate-x-1' />
                </div>

                <span className='flex items-center'>
                  حمّل التطبيق
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className='absolute inset-0 bg-[#0120AB] opacity-20 sm:hidden' />
      </div>
    </section>
  );
};
