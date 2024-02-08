// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper';

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
      pagination={{ clickable: true }}
      style={{ background: "#d1d1d1" }}
      modules={[Navigation, A11y, Pagination]}
      spaceBetween={(media > 795) ? 10 : 100}
      slidesPerView={(media > 750) ? 3 : 1}
      autoplay={{
        delay: 1000,
      }}
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

