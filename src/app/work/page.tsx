import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const WorkPage = () => (
  <main className='relative min-h-[150vh]'>
    <div className='absolute left-0 top-0'>
      <Image
        alt='work 1'
        className='object-contain'
        height={250}
        src='/images/work1.webp'
        width={300}
      />
    </div>

    <div className='absolute left-1/4 top-0'>
      <Image
        alt='work 1'
        className='object-contain'
        height={350}
        src='/images/work2.webp'
        width={300}
      />
    </div>

    <div className='absolute left-2/4 top-0'>
      <Image
        alt='work 1'
        className='max-h-[350px] object-contain'
        height={350}
        src='/images/work3.webp'
        width={300}
      />
    </div>

    <div className='absolute right-0 top-0'>
      <Image
        alt='work 1'
        className='max-h-[350px] object-contain'
        height={350}
        src='/images/work4.webp'
        width={300}
      />
    </div>

    <div className='absolute bottom-0 left-0'>
      <Image
        alt='work 1'
        className='object-contain'
        height={350}
        src='/images/work7.webp'
        width={300}
      />
    </div>

    <div className='absolute bottom-0 left-2/4'>
      <Image
        alt='work 1'
        className='object-contain'
        height={350}
        src='/images/work10.webp'
        width={300}
      />
    </div>

    <div className='absolute bottom-0 right-0'>
      <Image
        alt='work 1'
        className='object-contain'
        height={350}
        src='/images/work11.webp'
        width={300}
      />
    </div>

    <div className='absolute left-1/2 top-[60%] z-[100] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center'>
      <h1 className='text-5xl font-medium text-primary-350'>
        Crafting Excellence: Behind the Scenes of Innovation
      </h1>
      <p className='mb-6 mt-4 text-primary-200'>Coming soon...</p>

      <Link href='/'>
        <Button
          className='w-fit bg-black px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-black/70 active:bg-black/70'
          type='submit'
        >
          Back to Home
        </Button>
      </Link>
    </div>
  </main>
);

export default WorkPage;
