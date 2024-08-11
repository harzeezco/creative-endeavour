import { Button } from '@/components/ui/button';
import Link from 'next/link';

const WorkPage = () => (
  <main className='work relative min-h-dvh'>
    <div className='absolute left-1/2 top-1/2 z-[100] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center'>
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
