import { ContactForm } from '@/components/contact-form';
import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';

export const ContactSection = () => {
  const { locale, t } = useLocalize('Home');

  return (
    <section className='mt-20' id='contact'>
      <div className={cn('container flex max-sm:flex-col gap-y-10 justify-between gap-x-16', locale === 'ar' ? 'flex-row-reverse' : '')}>
        <div className='flex flex-[1] justify-end'>
          <h3 className='md:text-3xl text-xl font-bold'>
            {t('contact-title')}
          </h3>
        </div>

        <div className='flex-[1.2]'>
          <ContactForm  />
        </div>
      </div>
    </section>
  );
};
