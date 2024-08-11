import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Logos = [
  {
    alt: '',
    src: 'company1.svg',
    width: 70,
  },
  {
    alt: '',
    src: 'company2.svg',
    width: 150,
  },
  {
    alt: '',
    src: 'company3.svg',
    width: 150,
  },
  {
    alt: '',
    src: 'company4.svg',
    width: 150,
  },
  {
    alt: '',
    src: 'company5.svg',
    width: 150,
  },
  {
    alt: '',
    src: 'company6.svg',
    width: 150,
  },
  {
    alt: '',
    src: 'company7.svg',
    width: 150,
  },
  {
    alt: '',
    src: 'company8.svg',
    width: 150,
  },
];

export const TrustedCompanies = () => {
  const c = useTranslations('Home');

  return (
    <section className='mt-20'>
      <div className='mx-auto max-w-6xl max-md:px-4'>
        <h1 className='text-center text-2xl text-primary-200'>
          {c('client-title')}
        </h1>
        <ul className='mx-auto mt-6 grid grid-cols-3 gap-y-6 sm:grid-cols-4 lg:grid-cols-8'>
          {Logos.map(({ alt, src, width }) => (
            <li key={alt}>
              <Image
                alt={alt}
                height={50}
                src={`/icons/${src}`}
                width={width}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
