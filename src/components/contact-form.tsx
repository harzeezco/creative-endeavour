'use client';

import * as React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
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

export function ContactForm() {
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_email: '',
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
      user_email: values.user_email,
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
          setSuccess(true);
          setError(false);
          setLoading(false);
          form.reset();
          setTimeout(() => {
            setSuccess(false);
          }, 4000);
        },
        (error: any) => {
          console.log(error);
          setLoading(false);
          setSuccess(false);
          setError(true);
        },
      );
  }

  return (
    <Form {...form}>
      <form
        className='mx-auto mt-14 max-w-4xl space-y-5'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className='mb-4 flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-semibold text-body'>
                  Full Name:
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='John Doe'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='user_email'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-semibold text-body'>
                  Email:
                </FormLabel>
                <FormControl>
                  <Input placeholder='johndoe@pro.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='mb-4'>
              <FormLabel className='font-semibold text-body'>
                Your Message:
              </FormLabel>
              <FormControl>
                <Textarea
                  className='resize-none'
                  placeholder='We would love to know the scope, timeline and budget'
                  rows={10}
                  {...field}
                />
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

        <div className='group relative isolation-auto z-10 mx-auto mt-7 flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[16px] border border-solid border-[#D9D9D9] p-3 text-lg text-gray-900 backdrop-blur-md transition-colors duration-500 before:absolute before:bottom-0 before:-z-10 before:aspect-square before:w-full before:origin-bottom before:-translate-y-full before:bg-[#101010] before:transition-transform before:duration-300 hover:text-gray-50 before:hover:translate-y-0'>
          <button type='submit'>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </Form>
  );
}
