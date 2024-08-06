import { ContactForm } from '@/components/contact-form';

export const ContactSection = () => (
  <section className='mt-20'>
    <div className='container grid grid-cols-1 sm:grid-cols-2'>
      <h3 className='text-3xl font-bold'>Let&apos;s Craft Your Vision Together</h3>

      <div>
        <ContactForm />
      </div>
    </div>
  </section>
  );
