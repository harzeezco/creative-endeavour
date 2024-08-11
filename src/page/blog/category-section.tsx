import { cn } from '@/utils/cn';
import Image from 'next/image';

const Categories = [
  'Insights',
  'Inspiration',
  'Accessibility',
  'Tips',
  'Innovation',
];

export const Punch = [
  {
    label: 'Article Punchline',
    icon: '/icons/margicPen.svg',
  },
  {
    label: 'Article Punchline',
    icon: '/icons/margicPen.svg',
  },
  {
    label: 'Article Punchline',
    icon: '/icons/margicPen.svg',
  },
];

export const Article = [
  {
    tip: 'Tips',
    title: 'Article Title',
    desc: 'Article Title subtitle that goes as log as three lines max.',
  },
  {
    tip: 'Tips',
    title: 'Article Title',
    desc: 'Article Title subtitle that goes as log as three lines max.',
  },
  {
    tip: 'Tips',
    title: 'Article Title',
    desc: 'Article Title subtitle that goes as log as three lines max.',
  },
];

export const CategorySection = () => (
  <section className='container mt-20'>
    <h1 className='text-3xl font-medium text-primary-350'>
      Read by Category
    </h1>

    <div className='mt-3 flex items-center gap-x-3'>
      {Categories.map((category) => (
        <button
          className='rounded-md bg-[#F9FAFB] px-5 py-2 text-[#2D313A] transition-all duration-300 hover:bg-[#2D313A] hover:text-white'
          type='button'
        >
          {category}
        </button>
      ))}
    </div>

    <div>
      <ul className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 '>
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
                className={cn(
                  'text-2xl font-medium text-primary-350',
                )}
              >
                {item.label}
              </h1>
            </div>
          </li>
        ))}
      </ul>

      <ul className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {Article.map(({ desc, tip, title }) => (
          <li className='space-y-3'>
            <span className='text-primary-200'>{tip}</span>
            <h3 className='text-3xl font-semibold'>{title}</h3>
            <p className='max-w-[300px] text-primary-200'>{desc}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
