// Styled- Components
import { SecondContainer } from "./styles"

//Data
import { projetos } from "../../../assets/Data/data"

//Slider
import Slider from "../../../components/Slider"
import { SwiperSlide } from "swiper/react"

export default function Skills(){

    const media = window.screen.width

    const settings = {
        spaceBetween: (media > 795) ? 10 : 100,
        slidesPerView: (media > 750) ? 2 : 1,
        pagination:{ clickable: true }
        }

    return(
            <SecondContainer>   
                <div className="card">

                </div>
            </SecondContainer>   
    )
}
