// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ProjetosProps } from '../../interfaces/interfaces';
import CardProjeto from '../CardProjeto';

type SliderProps = {
  projetos: ProjetosProps[]
}

export default function Slider({ projetos }: SliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
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
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
    // pagination={{ clickable: true }}
    >
      {
        projetos.map((P) => (
          <SwiperSlide key={P.id} >
            <CardProjeto key={P.id}
              id={P.id}
              description={P.description}
              image={P.image}
              linkGitHub={P.linkGitHub}
              linkProject={P.linkProject}
              tecnologies={P.tecnologies}
              title={P.title}
              challenge={P.challenge}
              video={P.video}
            />
          </SwiperSlide>
        ))
      }
    </Swiper >
  )
}

