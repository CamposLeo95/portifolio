import { Card } from './styles'
import curriculo from '../../assets/curriculo.pdf'
import cv from '../../assets/img/icons/cv.png'

interface CardTextPorps{
    settings:{
        title: string,
        mainText: string,
        topText?: string, 
        subtitle?: string,
        color?: string,
        align?: string,
        margin?: string,
        shadow: boolean,
        boxShadow: boolean,
        bgColor?: string,
        textColor: string,
        secondWidth: number,
        animation: string,
        curriculo: boolean
    }
}

export default function CardText({settings}:CardTextPorps){
    return(
        <Card {...settings}>
            <div className='cardContainer'>
                <h3>{settings.topText}</h3>
                <h1>{settings.title}</h1>
                <h4>{settings.subtitle}</h4>
                <p>{settings.mainText}</p> 
                {settings.curriculo && 
                    <div className='cardIcons'>
                            <a href="https://www.linkedin.com/in/leonardo-a-campos/" target="_blank">
                                <button>
                                <i className="bi bi-linkedin" />
                                </button>
                            </a>
                            <a href="https://github.com/CamposLeo95" target="_blank">
                                <button>
                                    <i className="bi bi-github" /> 
                                </button>
                            </a>
                            <a href="https://wa.me/5511958639720" target="_blank">
                                <button>
                                <i className="bi bi-whatsapp" />
                                </button>
                            </a>
                            <a href={curriculo} download>
                                <button>
                                    <img src={cv} width="35px"alt="Curriculo" />
                                </button>
                            </a>      
                    </div>
                }
            </div>  
        </Card>
    )
}