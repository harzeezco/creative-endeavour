import { Button } from '@/components/ui/button';
import useLocalize from '@/hooks/use-locale';
import Link from 'next/link';

const WorkPage = () => {
  const { t } = useLocalize('Work');

  return (
    <main className='work relative min-h-dvh'>
      <div className='absolute left-1/2 top-1/2 z-[100] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center'>
        <h1 className='text-5xl font-medium text-primary-350'>
          {t('heading')}
        </h1>
        <p className='mb-6 mt-4 text-primary-200'>{t('desc')}</p>

        <Link href='/'>
          <Button
            className='w-fit bg-black px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-black/70 active:bg-black/70'
            type='submit'
          >
            {t('work-btn')}
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default WorkPage;
