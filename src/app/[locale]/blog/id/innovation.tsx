import { Article, Punch } from '@/page/blog';
import { cn } from '@/utils/cn';
import Image from 'next/image';

const Innovation = () => (
  <div className='mt-20'>
    <h1 className='text-3xl font-semibold text-primary-350'>
      More on Innovation
    </h1>
    <ul className='mt-5 grid grid-cols-3 gap-8'>
      {Punch.map((item) => (
        <li
          className={cn(
            'flex h-[250px] flex-col justify-between bg-primary-300 p-5 shadow-sm',
          )}
        >
          <span className='size-[30px] overflow-hidden'>
            <Image
              alt='icon'
              className='w-full object-cover'
              height={50}
              src={item.icon}
              width={50}
            />
          </span>
          <div>
            <h1
              className={cn('text-2xl font-medium text-primary-350')}
            >
              {item.label}
            </h1>
          </div>
        </li>
      ))}
    </ul>

    <ul className='mt-10 flex items-center justify-between'>
      {Article.map(({ desc, tip, title }) => (
        <li className='space-y-3'>
          <span className='text-primary-200'>{tip}</span>
          <h3 className='text-3xl font-semibold'>{title}</h3>
          <p className='max-w-[300px] text-primary-200'>{desc}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Innovation;
