'use client';

import * as React from 'react';
import Input from '@/components/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: 'Please Enter a valid email address',
    })
    .min(5),
  name: z
    .string()
    .regex(/^[\s'A-Za-z-]{4,50}$/, {
      message: 'Specify your full name',
    })
    .min(3, {
      message: 'Your full name must be at least 4 characters.',
    })
    .max(20, {
      message:
        'Your full name must not be longer than 20 characters.',
    }),
  message: z
    .string()
    .min(10, {
      message: 'message must be at least 10 characters.',
    })
    .max(360, {
      message: 'Bio must not be longer than 360 characters.',
    }),
});

export function JoinForm({ setActive }: { setActive: (value: boolean) => void}) {

  const [error, setError] = React.useState(false);
  const { locale, t } = useLocalize('Home');
  const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>, e: any) {

    e.preventDefault();
    setSuccess(false);
    setError(false);
    setLoading(true);

    const template = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_KEY!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        template,
        process.env.NEXT_PUBLIC_KEY!,
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setError(false);

          setTimeout(() => {
            setSuccess(false);
            setActive(false);
          }, 10000)
        },
        () => {
          setLoading(false);
          setError(true);
          setSuccess(false);
        },
      );

    //   axios
    //     .post(
    //       'https://sheet.best/api/sheets/dc02882c-92c5-4d12-933b-23ea443c9779',
    //       sheet,
    //     )
    //     .then(() => {
    //       setLoading(false);
    //       setSuccess(true);
    //       setError(false);
    //     })
    //     .catch(() => {
    //       setLoading(false);
    //       setError(true);
    //       setSuccess(false);
    //     });
  }

  return (
    <div>
      {success ? <div><p className='text-lg font-semibold'>{t('contact-form')}</p></div> : <Form {...form}>
      <form
        className={cn('w-full space-y-8 bg-transparent')}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input label={t('contact-name')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input label={t('contact-email')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='mb-4 w-full'>
              <FormControl>
                <Input
                  label={t('contact-why')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          {error && (
            <p className='text-red-500'>
              Some error occurred. 
            </p>
          )}
        </div>

        <div className={cn(locale === 'ar' ? 'flex justify-start' : 'justify-end', 'mt-7 flex')}>
          <Button
              className='w-fit bg-black px-6 py-4 text-white transition-all duration-300 hover:bg-black/70 active:bg-black/70'
              disabled={loading}
            type='submit'
          >
            {t('contact-btn')}
          </Button>
        </div>
      </form>
    </Form>}
    </div>
  );
}
