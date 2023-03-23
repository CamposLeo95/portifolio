import styled from "styled-components"

interface CardProps{
    color?: string,
    align?: string,
    margin?: string,
    shadow?:boolean,
    secondWidth: number,
    bgColor?: string
    textColor: string
}

export const Card = styled.div<CardProps>`

    @keyframes chegada {
        from{
            left: 400px;
            opacity: 0;
        }
        to{
            left: 0px;
            opacity: 1;
        }
        
    }

    position: relative;
    width: 50%;
    height: 100vh;
    padding: 4rem;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content:center;
    text-align: ${({ align }) => align};
    
    & :nth-child(2){
        margin-bottom: ${({ margin }) => margin};
        text-shadow: ${ ({shadow})=> shadow ? "2px 2px 1px #c9c9c9;": ""}
    }

    & div{
        position: relative;
        width: ${({secondWidth})=> `${secondWidth}%`};
        height: 80%;
        padding: 20px;
        background: ${({bgColor})=> bgColor};
        border-radius: 20px; 
        color:${({textColor})=> textColor}; 
        animation: chegada 2s;
    }

    & h1{
        color: ${({color})=> color};
        
    }
    
    & h1, h3, h4{
        line-height: 5rem;
    }

    & p{
        margin-bottom: 2rem;
    }

`