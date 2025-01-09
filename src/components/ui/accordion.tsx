'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';
import useLocalize from '@/hooks/use-locale';
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
  > & { className?: string; content: string }
>(({ children, className, content, ...props }, ref) => {
  const { locale } = useLocalize('Home');

  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          locale === 'en' ? '' : 'text-end flex-row-reverse',
          'w-full py-3 px-3 border border-[#D9D9D9] transition-all text-xl md:text-2xl duration-200 [&[data-state=open]]:text-white [&[data-state=open]]:bg-black [&[data-state=open]_svg]:rotate-180',
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            locale === 'en' ? 'font-nebulica' : 'font-cairo',
            'flex items-center justify-between',
          )}
        >
          {children}
          <ChevronDown size={20} />
        </div>
        <AccordionContent>{content}</AccordionContent>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<
    typeof AccordionPrimitive.Content
  > & { className?: string }
>(({ children, className, ...props }, ref) => {
  const { locale } = useLocalize('Home');

  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        locale === 'en' ? 'text-start' : 'text-end',
        'overflow-hidden text-sm transition-all duration-200 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down data-[state=open]:bg-transparent',
      )}
      {...props}
    >
      <div className={cn('pb-3 pt-2 md:text-xl text-lg', className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
});

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};
