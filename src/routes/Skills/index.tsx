// Hooks
import { useState } from "react"

// Styled-Components
import { SecondContainer } from "./styles"

// Components
import Carrossel from "../../components/Carrossel"
import CardText from "../../components/CardText"
import MainContainer from '../../components/MainContainer'

// Data
import { linguagens } from "../../assets/Data/data"

export default function Skills(){
    const [idImg, setIdImg] = useState<number>(0)

    const settingsTxt = {
        title:linguagens[idImg].title,
        mainText:linguagens[idImg].mainText,
        color:linguagens[idImg].color,
        align:"center",
        margin:"15px",
        shadow:true,
        secondWidth:80,
        textColor:"#ffffff",
        bgColor:"#000000c8",
        boxShadow:true,
        animation:"startedRight",
        curriculo: false
    }    

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
        <MainContainer> 
            <SecondContainer color={linguagens[idImg].color}>
                <div className="sliderCard">
                    <Carrossel 
                        idImg={idImg} 
                        handleBtnNext={handleBtnNext} 
                        handleBtnPrev={handleBtnPrev}
                    />
                </div>
                <CardText settings={settingsTxt} /> 
            </SecondContainer>
        </MainContainer>
        
    )
}