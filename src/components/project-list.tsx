import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

export function ProjectList({
  desc,
  href,
  labels,
  src,
  title,
}: {
  desc: string;
  href: string;
  labels: string[];
  src: string;
  title: string;
}) {
  const { locale } = useLocalize('Home');

  return (
    <div className='group relative transition-all duration-300'>
      <Link className='' href={`/${locale}/${href}`}>
        <Image
          alt={title}
          className='h-[350px] w-full'
          height={500}
          src={`/images/${src}`}
          width={500}
        />
      </Link>

      <div
        className={cn(
          locale === 'en' ? '' : 'flex flex-col items-end',
        )}
      >
        <Link href={href}>
          <h2
            className={cn(
              locale === 'en' ? 'font-nebulica' : 'font-cairo',
              'mt-2 text-lg text-[#111111] inline-block transition-all duration-300 hover:text-primary',
            )}
          >
            {title}
          </h2>
        </Link>

        <p className={cn(locale === 'en' ? '' : 'text-end', 'py-2')}>
          {desc}
        </p>

        <div className='mt-4 flex items-center gap-x-4'>
          {labels.map((label) => (
            <button
              key={label}
              className='cursor-text rounded-[8px] bg-[#F4F1FD] px-4 py-1.5 text-xs text-body sm:text-sm'
              type='button'
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <Link href={`/${locale}/${href}`}>
        <div className='absolute left-1/2 top-1/4 flex size-20 -translate-x-1/2 items-center justify-center rounded-full bg-black text-white  opacity-0 group-hover:opacity-100 group-hover:transition group-hover:duration-300'>
          <span>Explore</span>
        </div>
      </Link>
    </div>
  );
}
