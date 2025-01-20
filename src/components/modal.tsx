'use client';

import * as Dialog from '@radix-ui/react-dialog';
import * as React from 'react';
import { MdClose } from 'react-icons/md';

import { ContactForm } from './contact-form';

function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>{children}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='fixed inset-0 z-[9999] grid place-items-center overflow-y-auto overflow-x-hidden bg-[rgba(0,0,0,0.3)]'>
            <Dialog.Content className='relative w-full min-w-[300px] rounded-3xl !bg-white p-[30px] sm:max-w-[925px]'>
              <Dialog.Close asChild>
                <button
                  aria-label='Close'
                  className='absolute right-[30px] top-[20px] inline-flex size-12 appearance-none items-center justify-center rounded-full border-none bg-[#F0F0F1] transition-all hover:border-2 hover:border-solid hover:border-blue-700/20 focus:shadow-blue-700/20 focus:outline-none'
                  type='button'
                >
                  <MdClose className='text-3xl' />
                </button>
              </Dialog.Close>
              <ContactForm />
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default Modal;
