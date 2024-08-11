import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';

const Tenets = () => {
  const { locale, t } = useLocalize('Home');

  const ourTenets = [
    {
      iconUrl: '/icons/margicPen.svg',
      label: t('tenets-content1'),
    },
    {
      iconUrl: '/icons/tailwind.svg',
      label: t('tenets-content2'),
    },
    {
      iconUrl: '/icons/user.svg',
      label: t('tenets-content3'),
    },
    {
      iconUrl: '/icons/transform.svg',
      label: t('tenets-content4'),
    },
    {
      iconUrl: '/icons/growth.svg',
      label: t('tenets-content5'),
    },
    {
      iconUrl: '/icons/diamond.svg',
      label: t('tenets-content6'),
    },
  ];

  return (
    <div>
      <section className='container mt-28'>
        <div
          className={cn(locale === 'ar' ? 'text-right' : 'text-left')}
        >
          <h1 className='text-3xl font-medium text-primary-350 sm:text-4xl lg:text-5xl'>
            {t('tenets-title')}
          </h1>
          <p className='mt-3 text-base text-primary-200'>
            {t('tenets-desc')}
          </p>
        </div>
        <ul className='mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 '>
          {ourTenets.map((item) => (
            <li
              className={cn(
                'flex h-[250px] flex-col justify-between bg-primary-300 p-5 shadow-sm',
                locale === 'ar' ? 'items-end' : 'items-start',
              )}
            >
              <span className='size-[30px] overflow-hidden'>
                <Image
                  alt='icon'
                  className='w-full object-cover'
                  height={50}
                  src={item.iconUrl}
                  width={50}
                />
              </span>
              <div>
                <h1
                  className={cn(
                    'text-2xl font-medium text-primary-350',
                    locale === 'ar' ? 'text-right' : 'text-left',
                  )}
                >
                  {item.label}
                </h1>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Tenets;
