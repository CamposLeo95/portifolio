import styled from "styled-components";
import bgMobile from '../../assets/img/bgMobile.png'
import bgTablet from '../../assets/img/bgTablet.png'
import bgPc from '../../assets/img/bgPc.png'

export const MainContainer = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    font-size: 1.6rem;
    background-color: #fff;
    background-image: url(${bgMobile});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    & h2{
        color: var(--cor-azul-claro); 
        font-size: var(--font-header-um); 
    }
    & .span-about-one{
        font-family: var(--font-family-terceira);
        font-weight: 400;
    }
    & .span-about-two{
        color: #fff;
        font-weight: 400;
        font-family: var(--font-family-secundaria);
    }

    & .span-citacao-frase{
        color: var(--cor-cinza-claro);
        font-style: italic;
        display:block;
    }

    & .span-citacao-criador{
        color: #fff;
        font-weight:bold;
        font-family: var(--font-family-secundaria);
        font-size: 2rem;
    }

    & .about{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 10px;
        gap: 20px;
    }

    & .card-about{
        position: relative;
        top: 70px;
        gap: 20px;
        padding-top: 15px;
        border-radius: 3px;
        border-top: var(--borda-top);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 80px;

        & .texto-distaque{
            font-weight: 600;
        }
    }

    & .container-skill{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 30px;
    }

    @media (min-width: 768px) {
        background-image: url(${bgTablet});

        & .card-about{
            padding-top: 60px;
            display: flex;
            flex-direction: column;
            margin-top: 60px; 
            gap: 10px;
            top: 0px;

        }

        & .container-skill{
            justify-content: center;
            flex-direction: row;
        }

    }

    @media (min-width: 1024px) {

        background-image: url(${bgPc});

         & .card-about{
            width: 100%;
            display: flex;
            flex-direction: column;
            top: 30px;

        }

        & .container-skill{
            gap: 50px;
        }

    }

    

`