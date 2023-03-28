import { useState } from "react";
import { Container, CardSkills, ArrowButton } from "./styles"

import jsImg from '../../assets/img/icons/js.png'
import reactImg from '../../assets/img/icons/react.png'
import tsImg from '../../assets/img/icons/ts.png'
import htmlImg from '../../assets/img/icons/html.png'
import cssImg from '../../assets/img/icons/css.png'
import nodeImg from '../../assets/img/icons/node.png'
import nextImg from '../../assets/img/icons/next.png'



interface CarroselProps{
    idImg: number
    handleBtnPrev: () => void
    handleBtnNext: () => void
}

export default function Carrossel({ idImg, handleBtnNext, handleBtnPrev }: CarroselProps){

    const imagen = [jsImg, reactImg, tsImg, htmlImg, cssImg, nextImg, nodeImg]

    return(
        <Container> 
            <ArrowButton side={false} onClick={() => handleBtnPrev()}>
                <i className="bi bi-caret-right-fill"/>
            </ArrowButton>
            <CardSkills>
                <img src={imagen[idImg]}/>
            </CardSkills>
            <ArrowButton side={true} onClick={ () => handleBtnNext()}>
                <i className="bi bi-caret-right-fill"/>
            </ArrowButton>
        </Container>
    )
}