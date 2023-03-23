import { useState } from "react"

import { HomeContainer, SecondContainer } from "./styles"

import Carrossel from "../../components/Carrossel"
import CardText from "../../components/CardText"

import { linguagens } from "../../assets/Arrays/linguagens"

export default function Skills(){

    const [idImg, setIdImg] = useState<number>(0)

    const handleBtnPrev = ()=>{
        if(idImg <= 0){
            setIdImg(linguagens.length - 1)
        }else{
            setIdImg(idImg - 1)
        }
    }

    const handleBtnNext = () =>{
        if(idImg >= linguagens.length - 1){
            setIdImg(0)
        }else{
            setIdImg(idImg + 1)
        }
    }

    return(
        <HomeContainer idImg={idImg}> 
            <SecondContainer color={linguagens[idImg].color}>
                <Carrossel 
                    idImg={idImg} 
                    handleBtnNext={handleBtnNext} 
                    handleBtnPrev={handleBtnPrev}
                />
                <CardText 
                    title={linguagens[idImg].title}
                    mainText={linguagens[idImg].mainText}
                    color={linguagens[idImg].color}
                    align="center"
                    margin="15px"
                    shadow={true}
                    secondWidth={80}
                    textColor={"#ffffff"}
                    bgColor={"#383838"}
                />    
            </SecondContainer>
        </HomeContainer>
        
    )
}