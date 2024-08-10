'use client';

import * as React from 'react';
import { cn } from '@/utils/cn';
import { motion, useInView } from 'framer-motion';

interface Props<C extends React.ElementType> {
  as?: C;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

type ContainerTypes<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>;

// Source: www.benmvp.com/blog/polymorphic-react-components-typescript/

const SlideInAnimation = <C extends React.ElementType = 'div'>({
  as,
  children,
  className,
  delay = 0.3,
  ...otherProps
}: ContainerTypes<C>) => {
  const Component = as ?? 'div';
  const container = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true });

  return (
    <div ref={container}>
      {isInView && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{
            duration: 0.7,
            ease: 'easeInOut',
            delay,
          }}
        >
          <Component {...otherProps} className={cn(className)}>
            {children}
          </Component>
        </motion.div>
      )}
    </div>
  );
};

export default SlideInAnimation;
