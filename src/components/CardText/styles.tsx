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
    min-width: 460px;
    padding: 3rem;
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

    & .cardContainer{
        position: relative;
        width: ${({secondWidth})=> `${secondWidth}%`};
        max-width: 500px;
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

    .cardIcons{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items:center;
    }

    & a{
        width: 30px;
        font-size: 2rem;
        font-weight: bold;
        transition: 0.2s;
        margin: 0 20px;

        & button {
            width: 60px;
            height: 100%;
            padding: 15px;
            background: none;
            border:none;
            border-radius: 3px;
            transition: 0.2s;
            color: #ffffff; 
            cursor: pointer; 

            & i{
                font-size: 3rem;
            }
        }

    } 

    @media (max-width: 1240px){
        .cardContainer{
            margin-top: 10px;
        }

        & h1{
            font-size: 3rem;
        }

        & p{
            font-size: 1.8rem;
        }
    }

    @media (max-width: 1150px){
        width: 100%;
        width: 90%;
        text-align: center;

        & h1, h3, h4{
            line-height: 5rem;
        }

        & p{
            font-size: 2rem;
        }

    }

    @media (max-width: 810px){
        .cardContainer{
            margin-top: 1px;
        }
    }

    @media (max-height: 700px){
        .cardContainer{
            width: 90%;
        }
    }


`