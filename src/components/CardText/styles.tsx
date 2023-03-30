import styled from "styled-components"

interface CardProps{
    color?: string,
    align?: string,
    margin?: string,
    shadow:boolean,
    boxShadow: boolean,
    secondWidth: number,
    bgColor?: string
    textColor: string
    animation: string
}

export const Card = styled.div<CardProps>`

    position: relative;
    width: 50%;
    min-width: 400px;
    height: 100%;
    padding: 4rem;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    text-align: ${({ align }) => align};
    
    & :nth-child(2){
        margin-bottom: ${({ margin }) => margin};
        text-shadow: ${ ({shadow})=> shadow ? "2px 2px 1px #c9c9c9": ""};
    }

    & div{
        position: relative;
        width: ${({secondWidth})=> `${secondWidth}%`};
        height: 80%;
        max-height: 450px;
        padding: 20px;
        background: ${({bgColor})=> bgColor};
        border-radius: 13px; 
        color:${({textColor})=> textColor}; 
        animation: ${({animation})=> animation} 2s;
        box-shadow: ${ ({boxShadow})=> boxShadow ? "2px 2px 10px #000000": ""};
        
    }

    & h1{
        color: ${({color})=> color};
        font-size: 4.5rem;
        
    }
    & h1{
        line-height: 8rem;
    }

    & h3, h4{
        line-height: 7rem;
    }

    & p{
        margin-bottom: 2rem;
    }

    @media (max-width: 1240px){
        & h1{
        font-size: 3.2rem
    }
    }

    @media (max-width: 1150px){
        width: 100%;
        text-align: center;

        & h1, h3, h4{
        line-height: 5rem;
    }

        & div{
            width:100%;
            max-width: 700px;
            height:100%;
        }
    }


`