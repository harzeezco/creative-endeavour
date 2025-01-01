'use client';

import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import { Minus } from 'lucide-react';
import Image from 'next/image';

export const ServiceSection = () => {
  const { locale, t } = useLocalize('Home');

  return (
    <section className='container py-14'>
      <div className='mb-8 flex justify-between max-sm:flex-col'>
        <div>
          <p
            className={cn(
              locale === 'en' ? '' : 'flex-row-reverse',
              'flex items-center gap-2 mb-2',
            )}
          >
            <span className='text-lg text-[#111111]'>
              {t('service-label')}
            </span>
            <Image
              alt='line'
              height={30}
              src='/icons/line.svg'
              width={50}
            />
          </p>
        </div>

        <div>
          <h1
            className={cn(
              'font-nebulica text-black text-2xl max-w-xl sm:text-3xl lg:text-4xl  md:!leading-[1.1]',
            )}
          >
            {t('service-title')}
          </h1>

          <p className='mt-5 max-w-[650px] text-lg'>
            {t('service-desc')}
          </p>
        </div>
      </div>

      <Service
        isOpen
        desc='Custom solutions tailored to your business needs'
        number='01'
        samples={Samples}
        title='SOFTWARE DEVELOPMENT'
      />

      <Service
        desc='Custom solutions tailored to your business needs'
        isOpen={false}
        number='02'
        samples={[]}
        title='AI INTEGRATION'
      />

      <Service
        desc='Custom solutions tailored to your business needs'
        isOpen={false}
        number='03'
        samples={[]}
        title='REVERSE ENGINEERING'
      />

      <Service
        desc='Custom solutions tailored to your business needs'
        isOpen={false}
        number='04'
        samples={[]}
        title='BUSINESS DIGITALIZATION'
      />
    </section>
  );
};

function Service({
  desc,
  isOpen,
  number,
  samples,
  title,
}: {
  desc: string;
  isOpen: boolean;
  number: string;
  samples: {
    alt: string;
    src: string;
  }[];
  title: string;
}) {
  return (
    <div className='border-y border-solid border-[#D9D9D9] py-6'>
      <div className='mb-2 flex items-center justify-between'>
        <div className='grid grid-cols-[50px_auto] gap-x-5 font-nebulica text-4xl text-body'>
          <p className='text-center'>{number}</p>
          <h2 className=''>{title}</h2>
        </div>

        <button aria-label='close' type='button'>
          <Minus />
        </button>
      </div>

      <p>{desc}</p>

      {isOpen && (
        <div className='mt-8 flex items-center gap-x-4'>
          {samples.map((sample) => (
            <Image
              key={sample.src}
              alt={sample.alt}
              height={500}
              src={`/images/${sample.src}`}
              width={500}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const Samples = [
  {
    alt: 'coinbase',
    src: 'sample1.png',
  },
  {
    alt: 'sportify',
    src: 'sample2.png',
  },
  {
    alt: 'slack',
    src: 'sample3.png',
  },
];
