import { useRef, useState } from 'react';

const useCarouselSlide = () => {
  const sliderRef = useRef<any>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: any, next: any) => {
      setActiveSlide(next);
    },
  };

  const goToSlide = (index: number) => {
    sliderRef.current.slickGoTo(index);
    setActiveSlide(index);
  };

  return { activeSlide, sliderRef, settings, goToSlide };
};

export default useCarouselSlide;
