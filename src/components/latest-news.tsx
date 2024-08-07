import { ourTrends } from '@/constant';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const LatestNews = () => (
  <section>
    <div className='container mx-auto mt-20 flex justify-between gap-x-10'>
      <div>
        <h1 className='max-w-[350px] text-5xl font-medium text-primary-350'>
          Explore Trends, Tips, and Inspiration
        </h1>
        <p className='mt-3 max-w-[350px] text-base text-primary-100'>
          The latest news, articles and inspirations that will make
          you say “I wish i’d done that!”.
        </p>
      </div>

      <ul className='space-y-7'>
        {ourTrends.map((trend) => (
          <li>
            <div className='flex items-center justify-between gap-x-10 border-b-2  border-primary-50 pb-5'>
              <div>
                <p className='text-base text-primary-100 '>
                  {trend.subText}
                </p>
                <h1
                  className='line-clamp-1 max-w-[500px] text-balance text-lg font-semibold'
                  title={trend.headline}
                >
                  {trend.headline}
                </h1>
              </div>
              <div className='flex items-center '>
                <Link
                  className=' text-primary-50 hover:underline'
                  href='/'
                >
                  Read more
                </Link>
                <ArrowRight className='shrink-0' size={22} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default LatestNews;
