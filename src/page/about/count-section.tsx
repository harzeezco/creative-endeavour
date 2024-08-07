import { ourStatusCount } from '@/constant';

export const CountSection = () => (
  <section className='mx-auto max-w-4xl'>
    <ul className='mb-40 mt-32 flex items-center justify-between pt-4 text-center'>
      {ourStatusCount.map((item) => (
        <li className='grid justify-center'>
          <h1 className='text-2xl font-bold text-primary-350'>
            {item.digit}
          </h1>
          <p className='text-base text-primary-200'>{item.label}</p>
        </li>
      ))}
    </ul>
  </section>
);
