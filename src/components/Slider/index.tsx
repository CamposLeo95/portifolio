import { ReactNode } from 'react';

import { Swiper, SwiperProps} from 'swiper/react';
import { A11y, Navigation, Pagination} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

interface SliderProps{
  settings:SwiperProps;
  children: ReactNode;
}

export default function Slider({settings, children}: SliderProps) {
  return (

    <Swiper modules={[Navigation, A11y, Pagination]} {...settings}>
      {children}
    </Swiper>

  );
};