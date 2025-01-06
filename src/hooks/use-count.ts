'use client';

import * as React from 'react';

const useCount = (value: any, isActive: boolean) => {
  React.useEffect(() => {
    if (!isActive) return;

    let initialValue = 0;
    const domValue = Number.parseInt(value.current.dataset.value, 10);
    const increment = Math.ceil(domValue / 1000);
    const el = value.current;

    const increaseCount = setInterval(() => {
      initialValue += increment;
      if (initialValue > domValue) {
        el.textContent = domValue;
        clearInterval(increaseCount);

        return;
      }

      if (domValue < 10) {
        el.textContent = `0${domValue}`;
        clearInterval(increaseCount);

        return;
      }

      el.textContent = initialValue;
    }, 10);

    return () => clearInterval(increaseCount);
  }, [value, isActive]);

  return value;
};

export default useCount;
