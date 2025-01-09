// Core component that receives mouse positions and renders pointer and content
import { cn } from '@/utils/cn';
import {
  AnimatePresence,
  motion,
  useMotionValue,
} from 'framer-motion';
import React, { useEffect, useState } from 'react';

export const FollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false); // Add this line

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const { scrollX } = window;
      const { scrollY } = window;

      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
    }
  };
  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  return (
    <div
      ref={ref}
      className={cn('relative', className)}
      style={{
        cursor: 'none',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence>
        {isInside && <FollowPointer title={title} x={x} y={y} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  title,
  x,
  y,
}: {
  title?: string | React.ReactNode;
  x: any;
  y: any;
}) => {
  const colors = [
    'var(--sky-500)',
    'var(--neutral-500)',
    'var(--teal-500)',
    'var(--green-500)',
    'var(--blue-500)',
    'var(--red-500)',
    'var(--yellow-500)',
  ];

  return (
    <motion.div
      animate={{
        scale: 1,
        opacity: 1,
      }}
      className='absolute z-50 size-4 rounded-full'
      exit={{
        scale: 0,
        opacity: 0,
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      style={{
        top: y,
        left: x,
        pointerEvents: 'none',
      }}
    >
      <svg
        className='size-6 -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] stroke-sky-600 text-sky-500'
        fill='currentColor'
        height='1em'
        stroke='currentColor'
        strokeWidth='1'
        viewBox='0 0 16 16'
        width='1em'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z' />
      </svg>
      <motion.div
        animate={{
          scale: 1,
          opacity: 1,
        }}
        className='min-w-max whitespace-nowrap rounded-full bg-neutral-200 p-2 text-xs text-white'
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        style={{
          backgroundColor:
            colors[Math.floor(Math.random() * colors.length)],
        }}
      >
        {title || 'William Shakespeare'}
      </motion.div>
    </motion.div>
  );
};
