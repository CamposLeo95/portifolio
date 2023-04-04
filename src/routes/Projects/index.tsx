// Styled- Components
import { SecondContainer } from "./styles"

//Hooks

// Components
import MainContainer from "../../components/MainContainer"
import CardProject from "../../components/CardProject"

//Data
import { projetos } from "../../assets/Data/data"

//Slider
import Slider from "../../components/Slider"
import { SwiperSlide } from "swiper/react"

export default function Projects(){

    const media = window.screen.width

    const settings = {
        spaceBetween: (media > 795) ? 10 : 100,
        slidesPerView: (media > 750) ? 2 : 1,
        pagination:{ clickable: true }
        }

    return(
        <MainContainer>
            <SecondContainer>   
                <Slider settings={settings}>
                    {projetos.map((projeto) =>(
                    <SwiperSlide key={projeto.id}>
                        <CardProject datas={projetos[projeto.id]}/>
                    </SwiperSlide>
                    ))}
                </Slider>
            </SecondContainer>
        </MainContainer>
        
    )
}

