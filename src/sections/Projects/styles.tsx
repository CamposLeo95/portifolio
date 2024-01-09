import styled from "styled-components";

export const SecondContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
    margin: 30px 0; 

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

    & .span-about-two{
        font-family: var(--font-family-secundaria);
    }

    & .container-cards-projeto{
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        gap: 15px;
    }

    @media (min-width: 815px) {
        & .card-projetos{
            width: 70%;
        }
    }
`
