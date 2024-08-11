'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { useState } from 'react';
import { JoinForm } from './join-form';

const JoinNow = () => {
  const { locale, t } = useLocalize('Home');
  const [active, setActive] = useState(false);

  return (
    <section className='container mt-20' id='join'>
      <div className='flex min-h-[350px] bg-primary-300 p-7 shadow-sm'>

        <div className={cn('flex w-full items-end max-lg:flex-col gap-y-10 justify-between', locale === 'ar' ? 'flex-row-reverse text-right' : '')}>
          <div className='flex h-full max-w-[606px] flex-[1] flex-col justify-between'>
            <div className={cn(locale === 'ar' ? 'justify-end items-end' : 'justify-start', 'flex')}>
              <Image
                alt='image'
                className='object-cover'
                height={30}
                src='/icons/customArrow.svg'
                width={30}
              />
            </div>
            <div>
              <h1 className='text-3xl font-medium text-primary-350 sm:text-4xl lg:text-5xl'>
                {t('join-title')}
              </h1>
              <p className='mt-3 max-w-sm text-base text-primary-200'>
                {t('join-desc')}
              </p>
            </div>
          </div>

          <div className='flex-[1.2] justify-self-end'>
            {
              active ? <JoinForm setActive={setActive} /> : (
                <div className='text-end'>
                  <button className='w-fit bg-black px-4 py-2 text-white transition-all duration-300 hover:bg-black/70 active:bg-black/70' onClick={() => setActive(true)}>
                    {t('join-btn')}
                  </button>
                </div>
)
            }
          </div>

        </div>
      </div>
    </section>
  );
};

export default JoinNow;
