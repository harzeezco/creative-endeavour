import * as React from 'react';
import { cn } from '@/utils/cn';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm ring-offset-white placeholder:text-tint-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tint-100 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-tint-300 dark:focus-visible:ring-tint-100',
        className,
      )}
      {...props}
    />
  ),
);

Textarea.displayName = 'Textarea';

export { Textarea };
