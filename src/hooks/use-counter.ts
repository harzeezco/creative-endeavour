'use client';

import { useRef, useState } from 'react';
import { useInView } from 'react-cool-inview';

import useCount from './use-count';

const useCounter = () => {
  const [isActive, setIsActive] = useState(false);

  const count1Ref = useRef();
  const count2Ref = useRef();

  const counter1 = useCount(count1Ref, isActive);
  const counter2 = useCount(count2Ref, isActive);

  const { observe } = useInView({
    unobserveOnEnter: true,
    rootMargin: '-100px 0px',
    onChange: ({ inView }) => setIsActive(inView),
  });

  return { counter1, counter2, observe };
};

export default useCounter;
