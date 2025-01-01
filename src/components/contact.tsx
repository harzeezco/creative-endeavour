import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

function Contact({
  btnText,
  desc,
  href,
  title,
}: {
  btnText: string;
  desc: string;
  href: string;
  title: string;
}) {
  const { locale } = useLocalize('Home');

  return (
    <section className='container text-center'>
      <h1
        className={cn(
          'font-nebulica text-black mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-5xl md:!leading-[1.1]',
        )}
      >
        {title}
      </h1>

      <p className='mx-auto mb-7 max-w-[700px] text-center text-lg'>
        {desc}
      </p>

      <Link href={href}>
        <div className='flex items-center justify-center rounded-lg border border-solid border-[#D9D9D9]'>
          <button className='flex items-center gap-3 rounded-[12px] px-4 py-3'>
            <span className='font-nebulica text-3xl text-black'>
              {btnText}
            </span>

            <span className='flex h-6 w-8 items-center justify-center rounded-[4px] bg-black'>
              <Image
                alt='arrow'
                height={12}
                src={
                  locale === 'en'
                    ? '/icons/arrow-right.svg'
                    : '/icons/arrow-left.svg'
                }
                width={12}
              />
            </span>
          </button>
        </div>
      </Link>
    </section>
  );
}

export default Contact;
