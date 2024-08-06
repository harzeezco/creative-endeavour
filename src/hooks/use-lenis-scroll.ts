'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

function useLenisScroll() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return null;
}

export default useLenisScroll;
