import { ourTenets } from '@/constant';
import Image from 'next/image';

const Tenets = () => (
  <div>
    <section className='container mt-20'>
      <div>
        <h1 className='text-5xl font-medium text-primary-350'>
          Our tenets
        </h1>
        <p className='mt-3 text-base text-primary-200'>
          Key guiding principles for our day to day operations at
          Sanam
        </p>
      </div>
      <ul className='mt-10 grid grid-cols-3 gap-8 '>
        {ourTenets.map((item) => (
          <li className='flex h-[250px] flex-col items-start justify-between bg-primary-300 p-7 shadow-sm'>
            <span className='size-[30px] overflow-hidden'>
              <Image
                alt='icon'
                className='w-full object-cover '
                height={50}
                src={item.iconUrl}
                width={50}
              />
            </span>
            <div>
              <h1 className='text-3xl font-medium text-primary-350'>
                {item.label}
              </h1>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default Tenets;
