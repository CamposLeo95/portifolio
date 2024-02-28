import styled from "styled-components";

export const SecondContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
    background-image: linear-gradient(180deg, #000, #000, #ececec);

    padding: 30px 0;

    & .card-projetos{
        width:100%;
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content: center;
        gap: 50px;
    }

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
        font-family: var(--font-family-secundaria);
        font-weight: 400;
    }

    & .container-cards-projeto{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-evenly;
        gap: 35px;
    }

    @media (min-width: 1024px) {

        & .card-projetos{
            width: 70%;
        }
    }
`

