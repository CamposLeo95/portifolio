// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


interface SliderImgProps {
  iconTecArray: object[]

}

export default function SliderImg({ iconTecArray }: SliderImgProps) {

  const media = window.screen.width
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {iconTecArray.map((icon: any) => (
        <SwiperSlide key={icon.name} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          width: "80px",
          height: "100px",
          gap: "5px",
        }}
        >
          <img src={icon.img} width="50px" />
          <p style={{
            fontSize: "2.4rem",
            fontFamily: "Caveat, cursive",
            fontWeight: "600",
          }}>{icon.name}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

