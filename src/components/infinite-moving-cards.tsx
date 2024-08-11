'use client';

import { cn } from '@/utils/cn';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
  children,
  className,
  direction = 'left',
  speed = 'fast',
}: {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(
        scrollerRef.current.children,
      );

      for (const item of scrollerContent) {
        const duplicatedItem = item.cloneNode(true);

        if (scrollerRef.current) {
          scrollerRef.current.append(duplicatedItem);
        }
      }

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty(
          '--animation-duration',
          '20s',
        );
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty(
          '--animation-duration',
          '40s',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-duration',
          '110s',
        );
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative max-xl:max-w-7xl xl:max-w-[1760px] z-20 overflow-hidden',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll',
        )}
      >
        {children}
      </ul>
    </div>
  );
};
