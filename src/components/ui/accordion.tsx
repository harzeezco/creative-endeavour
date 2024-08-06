'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';
import { cn } from '@/utils/cn';
import { ChevronDown } from 'lucide-react';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('', className)}
    {...props}
  />
));

AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<
    typeof AccordionPrimitive.Trigger
  > & { className?: string }
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 transition-all text-primary-500 text-xl md:text-2xl duration-200 px-3 [&[data-state=open]]:bg-[#ebf0f5] [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown size={20} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<
    typeof AccordionPrimitive.Content
  > & { className?: string }
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className='overflow-hidden px-3 pt-2 text-sm transition-all duration-200 data-[state=open]:mb-5 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down data-[state=open]:bg-transparent'
    {...props}
  >
    <div className={cn('pb-4 pt-0 md:text-xl text-lg', className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};
