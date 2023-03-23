import { Card } from './styles'

interface CardTextPorps{
    title: string,
    mainText: string,
    topText?: string, 
    subtitle?: string,
    color?: string,
    align?: string,
    margin?: string,
    shadow?: boolean
    bgColor?: string
    textColor: string
    secondWidth: number
}

export default function CardText({
     title,
     topText,
     subtitle,
     mainText,
     color, 
     align, 
     margin,
     shadow, 
     secondWidth,
     bgColor,
     textColor
}:CardTextPorps){
    return(
        <Card 
            color={color} 
            align={align} 
            margin={margin}
            shadow={shadow}
            secondWidth={secondWidth}
            bgColor={bgColor}
            textColor={textColor}
        >
            <div>
                <h3>{topText}</h3>
                <h1>{title}</h1>
                <h4>{subtitle}</h4>
                <p>{mainText}</p> 
            </div>  
        </Card>
    )
}