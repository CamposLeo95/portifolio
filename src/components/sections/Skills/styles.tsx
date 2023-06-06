import styled from "styled-components";

export const SecondContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 8px;

    & .texto-principal{
        width: 90%;
        text-align: center;

        p{
            font-size: var(--font-texto-um);
            margin: 20px 0px;
        }
    }

    & h2{
        color: var(--cor-azul-claro); 
        font-size: var(--font-header-um); 
    }

    & .span-about-one{
        font-family: var(--font-family-secundaria);
    }

    & .container-card-skill{
        display: flex;
        padding: 30px 0;
        flex-direction: column;
        gap: 15px;   
        border-top: var(--borda-top)
    }

    @media (min-width: 815px) {

        & .texto-principal{
            width: 70%;
        }
        & .container-card-skill{
            flex-direction: row;
        }
    }
`

