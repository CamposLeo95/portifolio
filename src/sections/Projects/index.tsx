import { projetos } from "../../assets/Data/data"

import * as S from "./styles"
import ModalProjeto from "../../components/ModalProjeto"
import { useContext } from "react"
import { ModalContext } from "../../Context/ModalContext"

import Slider from "../../components/Slider"

export default function Projects() {
    const modalContext = useContext(ModalContext)

    return (
        <S.SecondContainer>
            {modalContext?.isModal && <ModalProjeto />}
            <div className="card-projetos">
                <h2>
                    <span className="span-about-one">Meus, </span>
                    <span className="span-about-two">Projetos</span>
                </h2>
                <div style={{ width: "100vw" }}>
                    <Slider projetos={projetos} />
                </div>
            </div>
        </S.SecondContainer>
    )
}

