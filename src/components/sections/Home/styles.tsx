import styled from 'styled-components'

export const MainContainer = styled.section`
    width: 100%;
    align-items: center;
    color: #fff;
    background-image: linear-gradient(45deg, #000,#05448d, #000);
    font-size: 1.5rem;
    padding: 30px 0; 
    display: flex;
    flex-direction: column;
    justify-content: center;

    & .banner{
        width: 70%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    & .span-title-one{
        font-family: var(--font-family-secundaria);
        display: block;
        margin: 8px 0;
    }

    & span{
        font-size: var(--font-header-um);
    }

    & .span-title-three{ 
        color: var(--cor-azul-claro);
        font-weight: 400;
    }

    & .contatos{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 10px 0;

        & i{
            font-size: var(--font-header-dois);
            color: #fff;
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
        padding: 60px 0; 
        
        & span{
            font-size: 4rem;
        }

        & .banner {
        width: 80%;
        align-items: start;
        }

        & h2, p{
        text-align: start;
        }

        & .conteudo{
            width: 50%;
        }

    & .contatos{
        width: 100%;
        margin-top:20px;
        display: flex;
        justify-content: start;
        gap: 20px;

        & i{
            font-size: var(--font-header-dois);
            color: #fff;
        }
    }
    }

`
