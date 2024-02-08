import styled from "styled-components";

export const MainContainer = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    gap: 50px;
    font-size: 1.6rem;
    padding: 20px 0; 


    & h2{
        color: var(--cor-azul-claro); 
        font-size: var(--font-header-um); 
    }

    & .span-about-two{
        font-family: var(--font-family-secundaria);
    }

    & .span-citacao-frase{
        color: var(--cor-cinza-claro);
        font-style: italic;
        display:block;
    }

    & .span-citacao-criador{
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
        gap: 5px;
    }

    & .card-about{
        margin-top:5px;
        padding:50px 10px;
        gap: 30px;
        border-radius: 3px;
        border-top: var(--borda-top);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & .card-descricao{
            display: flex;
            flex-direction:column;
            width: 80%;
            height: 100%;
            gap:10px;
        }

        & .texto-distaque{
            font-weight: 600;

        }
    }

    @media (min-width: 760px) {

        margin-top:50px;  

        & .card-about{
        margin: 20px 0;
        display: flex;
        flex-direction: row;
        gap: 50px;

        }

        & img{
            width: 250px;
        }

        & .card-descricao{
            text-align:start;
            width: 50%;
        }
    }

`