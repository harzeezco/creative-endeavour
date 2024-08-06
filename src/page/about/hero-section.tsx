import {
  heroQualitiesDisplay,
  ourStatusCount,
  ourTenets,
  ourTrends,
} from '@/constant';
import { ArrowRight } from 'lucide-react';

export const Hero = () => (
  <section>
    <div className='container'>
      <div className=' mx-auto  max-w-[55.75rem] text-center text-primary-200'>
        <p className='text-lg'>Our Mission</p>
        <h1 className='text-5xl font-medium text-primary-50'>
          Unlocking Creativity and Innovation in Every Pixel
        </h1>
        <p className='text-lg'>
          Crafting Digital Experiences & Transforming Visions into
          Reality: Our Story
        </p>
      </div>

      {/* Qualities Display */}

      <ul className='mt-28 flex items-center gap-x-4'>
        {heroQualitiesDisplay.map((item) => (
          <li className='flex items-start gap-x-6'>
            <div className='grid shrink-0 place-content-center bg-primary-300 p-2 shadow-md'>
              <img alt='icon' src={item.iconUrl} />
            </div>
            <div className='max-w-[398px]'>
              <h1 className='text-lg font-medium text-primary-350'>
                {item.headline}
              </h1>
              <p className='text-base text-primary-200'>
                {item.paragraph}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Our status count  section */}

      <section>
        <ul className='mb-40 mt-32 flex items-center justify-between pt-4 text-center'>
          {ourStatusCount.map((item) => (
            <li className='grid justify-center'>
              <h1 className='text-2xl font-bold text-primary-350'>
                {item.digit}
              </h1>
              <p className='text-base text-primary-200'>
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* About section */}

      <section>
        <div>
          <h1 className='text-5xl font-medium text-primary-350'>
            About us
          </h1>
          <p className='mb-20 text-base'>
            Discover the Faces Behind Our Success
          </p>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <div className='flex flex-col items-start justify-between bg-primary-300 p-10'>
            <span className='size-[30px] overflow-hidden'>
              <img
                alt='icon'
                className='w-full object-cover'
                src='icon/groupIcon.svg'
              />
            </span>
            <h1 className='text-2xl text-primary-350'>
              Meet the Heartbeat of Sanam
            </h1>
          </div>
          <div>
            <img alt='image' src='images/image2.jpg' />
          </div>
          <div>
            <img alt='image' src='images/image3.jpg' />
          </div>
          <div>
            <img alt='image' src='images/image4.jpg' />
          </div>
          <div className='col-span-2'>
            <img alt='image' src='images/image1.jpg' />
          </div>
          <div>
            <img alt='image' src='images/image5.jpg' />
          </div>
          <div>
            <img alt='image' src='images/image6.jpg' />
          </div>
          <div className='flex flex-col items-start justify-between bg-primary-300 p-10'>
            <span className='size-[30px] overflow-hidden'>
              <img
                alt='icon'
                className='w-full object-cover '
                src='icon/customArrow.svg'
              />
            </span>
            <div>
              <h1 className='text-2xl text-primary-350'>Join us</h1>
              <div className='flex gap-y-8'>
                <p className='shrink-0 text-base font-semibold'>
                  Start here
                </p>
                <ArrowRight color='black' size={22} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='my-20 max-w-[1440px] text-xl text-primary-200'>
        <p>
          We are a team of five young passionate about design, human
          resources, and digital products. Our journey began in the
          design industry, where we found our calling in connecting
          talented individuals with rewarding opportunities. With
          extensive experience in technical and design fields, we are
          dedicated to delivering innovative solutions and fostering
          creativity in every project we undertake.
        </p>
        <p>
          At the heart of our mission is the ambition to elevate the
          standard of the design sector in the Kingdom of Saudi
          Arabia. We strive to nurture local talent, drive innovation,
          and set new benchmarks for excellence. Through our work, we
          aim to inspire growth and transformation, contributing to a
          thriving design ecosystem in our country.
        </p>
      </div>

      {/* Our Tenet */}
      <section>
        <div>
          <h1 className='text-5xl font-medium text-primary-350'>
            Our tenets
          </h1>
          <p className='mb-20 text-base'>
            Key guiding principles for our day to day operations at
            Sanam
          </p>
        </div>
        <ul className='my-20 grid grid-cols-3 gap-8 '>
          {ourTenets.map((item) => (
            <li className='flex h-[250px] flex-col items-start justify-between bg-primary-300 p-10 shadow-md'>
              <span className='size-[30px] overflow-hidden'>
                <img
                  alt='icon'
                  className='w-full object-cover '
                  src={item.iconUrl}
                />
              </span>
              <div>
                <h1 className='text-2xl text-primary-350'>
                  {item.label}
                </h1>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className='mb-20 flex h-[450px] max-h-[550px] flex-col items-start justify-between bg-primary-300 p-10 shadow-md'>
          <span className='size-6'>
            <img
              alt='image'
              className='object-cover '
              src='icon/customArrow.svg'
            />
          </span>
          <div className='flex w-full items-end justify-between'>
            <div className='max-w-[606px]'>
              <h1 className='text-5xl font-medium text-primary-350'>
                Join us
              </h1>
              <p className='text-base text-primary-200'>
                Elevate user experiences with us – join Sanam and make
                every interaction unforgettable.
              </p>
            </div>
            <button className='bg-primary-50 px-6 py-3 text-white'>
              Join Sanam
            </button>
          </div>
        </div>
      </section>
    </div>

    <section>
      <div className='mx-auto  flex max-w-[1540px] justify-center gap-x-10 px-10'>
        <div className='max-w-[500px]'>
          <h1 className='text-6xl font-medium text-primary-350'>
            Explore Trends, Tips, and Inspiration
          </h1>
          <p className='text-base text-primary-100'>
            The latest news, articles and inspirations that will make
            you say “I wish i’d done that!”.
          </p>
        </div>

        {/* Explore Trends */}
        <ul>
          {ourTrends.map((trend) => (
            <li>
              <div className='flex items-center justify-between gap-x-10  border-b-2 border-primary-50 py-10'>
                <div>
                  <p className='text-base text-primary-100 '>
                    {trend.subText}
                  </p>
                  <h1 className='line-clamp-1 max-w-[500px] text-balance text-lg font-semibold'>
                    {trend.headline}
                  </h1>
                </div>
                <div className='flex items-center '>
                  <a
                    className=' text-primary-50 hover:underline'
                    href='#'
                  >
                    Read more
                  </a>
                  <ArrowRight className='shrink-0' size={22} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </section>
);
