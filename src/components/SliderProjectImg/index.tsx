// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SliderProjectImg {
  images: string[]

}

export default function SliderProjectImg({ images }: SliderProjectImg) {

  console.log(images)

  const media = window.screen.width
  return (
    <Swiper

      modules={[Navigation, A11y, Pagination]}
      spaceBetween={(media > 795) ? 10 : 100}
      slidesPerView={1}
    >
      {images.map((image: any) => (
        <SwiperSlide key={image} style={{
          display: "flex",
          justifyContent: "center",
          background: "red"
        }}
        >
          <img src={image} width="100%" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

