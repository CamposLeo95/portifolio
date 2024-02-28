import styled from 'styled-components'
import bgBlack from '../../assets/img/fundoblack.jpg'

export const MainContainer = styled.section`
    width: 100vw;
    align-items: center;
    color: #fff;
    background-image: url(${`${bgBlack}`});
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 1.5rem;
    padding: 30px 15px; 
    gap: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;


    & .texto-distaque{
        font-size: 16px;
        color: #fff;
    }

    & span{
        font-size: var(--font-header-um);
    }

    & h2 {
        font-size:52px;
        font-weight: 100;
        font-family: "Cinzel Decorative", serif;
        font-weight: 400;
    }

    & .contatos{
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 10px 0;

        & i{
            font-size: var(--font-header-dois);
            color: #8f8f8f;
        }
    }

    & .quadrado{
        width: 250px;
        position: absolute;
        height: 300px;
        background-color: #3d3d3d;
        right: 0;
        bottom: 10px;
        display: none;
    }

    & .quadrado-linha{
        width: 310px;
        position: absolute;
        height: 300px;
        border: 2px solid #3d3d3d;
        right: 35px;
        bottom: 15px;
    }

    & .card-imagem{
        width: 300px;
        z-index:999;
        border-radius:1px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(45deg, #000,#000000dc, #000000);
        box-shadow: 10px -10px 20px #000;

        & img{
            width: 100%;
        }

    }

    & h2, p{
        text-align:center;
        margin: 10px 0;
    }

    & p {
        color: var(--cor-cinza-claro);
        margin: 30px 0;
    }

    @media (min-width: 760px) {
        padding: 60px ; 
        flex-direction: row;
        height: 60vh;
        justify-content: space-evenly;
        
        
        & span{
            font-size: 2rem;
        }


        & h2, p{
            text-align: start;
        }

        & .conteudo{
            width: 90%;
        }

        & .contatos{
            position: absolute;
            bottom: 35px;
            left: 45px;
            margin-top:20px;
            display: flex;
            justify-content: start;
            gap: 30px;

            & i{
                font-size: var(--font-header-dois);
                font-size: 30px;
            }

            & i:hover{
                color:  var(--cor-azul-claro);
            }
        }

        & .quadrado{
            width: 350px;
            position: absolute;
            height: 400px;
            background-color: #3d3d3d;
            top: 0; 
            right: 20px;
            display: flex;
        }

        & .quadrado-linha{
            position: absolute;
            width: 350px;
            height: 360px;
            border: 2px solid #3d3d3d;
            right: 35px;
            bottom: 130px;
        }

        & .card-imagem{
            width: 50%;
        }

        & .linha{
            height:1px;
            width: 70%;
            background-color: gray;
            position: absolute;
            bottom: 62px;
            right: 20px;
        }
    }

    @media (min-width: 1024px) {

        height: 100vh;

        & .contatos{
            left: 100px;
            gap: 30px;
        }

        & .quadrado{
            top: 0; 
            right: 70px;

        }

        & .quadrado-linha{
            position: absolute;
            width: 300px;
            height: 290px;
            right: 180px;
            bottom: 140px;
        }

        & .linha{
            height:1px;
            width: 75%;
        }

        & .card-imagem{
            width:300px;

            & img{
                width: 100%;
                scale: calc(1.25);
                filter: grayscale(100%)
            }
        }

    }

`
export const Banner = styled.div`

        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (min-width: 760px) {

            width: 50%;
            padding: 10px;
            align-items: start;

        }
    
`

export const MainText = styled.div`

    & .span-title-one{
        font-family: var(--font-family-secundaria);
        margin: 8px 0;
        font-size: 20px;
    }

    & .span-title-two{
        font-family: var(--font-family-secundaria);
        font-size: 20px;
        font-weight: 100;
        font-family: "Cinzel Decorative", serif;
        font-weight: 400;
        
    }
`
