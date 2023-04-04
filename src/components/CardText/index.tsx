import { Card } from './styles'
import curriculo from '../../assets/curriculo.pdf'

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
            <div>
                <h3>{settings.topText}</h3>
                <h1>{settings.title}</h1>
                <h4>{settings.subtitle}</h4>
                <p>{settings.mainText}</p> 
                {settings.curriculo && <button><a href={curriculo} download>Download CV</a></button>}
            </div>  
        </Card>
    )
}