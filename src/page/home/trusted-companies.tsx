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

export const TrustedCompanies = () => (
  <section>
    <div className='mx-auto max-w-6xl max-md:px-4'>
      <ul className='mt-20 flex items-center justify-between gap-y-6 max-lg:flex-wrap'>
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
