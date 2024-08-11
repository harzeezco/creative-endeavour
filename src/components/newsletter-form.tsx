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
import { cn } from '@/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  user_email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: 'Please Enter a valid email address',
    })
    .min(5),
});

export function NewsletterForm() {
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>, e: any) {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    // setLoading(true);

    // const template = {
    //   name: values.name,
    //   user_email: values.user_email,
    //   message: values.message,
    //   workType: values.workType,
    // };

    // emailjs
    //   .send(
    //     process.env.NEXT_PUBLIC_SERVICE_KEY!,
    //     process.env.NEXT_PUBLIC_TEMPLATE_ID!,
    //     template,
    //     process.env.NEXT_PUBLIC_KEY!,
    //   )
    //   .then(
    //     () => {
    //       setSuccess(true);
    //       setError(false);
    //       setLoading(false);
    //       form.reset();
    //       setTimeout(() => {
    //         setSuccess(false);
    //       }, 4000);
    //     },
    //     (error: any) => {
    //       console.log(error);
    //       setLoading(false);
    //       setSuccess(false);
    //       setError(true);
    //     },
    //   );
  }

  return (
    <Form {...form}>
      <form
        className={cn('mx-auto w-full space-y-8 bg-[#FAFAFA] p-7')}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='user_email'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input label='Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          {success && (
            <p className='text-green-600'>
              Your message has been sent Successfully. I will soon get
              back to you.
            </p>
          )}
          {error && (
            <p className='text-red-500'>
              Some error occurred. Please send me a direct message
              using the email bottom 👇
            </p>
          )}
        </div>

        <div className={cn('flex justify-end')}>
          <Button
            className='w-fit bg-black px-6 py-4 text-white transition-all duration-300 hover:bg-black/70 active:bg-black/70'
            type='submit'
          >
            Send a request
          </Button>
        </div>
      </form>
    </Form>
  );
}
