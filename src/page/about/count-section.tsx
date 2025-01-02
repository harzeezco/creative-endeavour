'use client';

import useLocalize from '@/hooks/use-locale';

export const CountSection = () => {
  const { t } = useLocalize('About');

  const ourStatusCount = [
    {
      digit: '12',
      label: t('count-client'),
    },
    {
      digit: '10K',
      label: t('count-project'),
    },
    {
      digit: '5',
      label: t('count-team'),
    },
    {
      digit: '2022',
      label: t('count-year'),
    },
  ];

  return (
    <section className='mx-auto max-w-4xl max-sm:px-4'>
      <ul className='my-24 flex items-center justify-between pt-4 text-center'>
        {ourStatusCount.map((item) => (
          <li className='grid justify-center'>
            <h1 className='mb-3 text-2xl font-bold text-primary-350'>
              {item.digit}
            </h1>
            <p className='text-base text-primary-200'>{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
