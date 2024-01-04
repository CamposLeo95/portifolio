import styled from 'styled-components'

export const SecondContainer = styled.section`

    & .container-card-skill{
        display: flex;
        flex-direction: column;
        gap: 15px;   
    }

    & .card-skill{
        background-color: var(--cor-azul-claro);
        max-width: 300px;
        min-width:250px;
        min-height: 280px;
        border-radius: 15px;
        color: #fff;
        padding: 20px;
        font-size: var(--font-texto-um);
        display: flex;
        flex-direction: column;
        gap: 8px;

        & h2{
            color:#fff;
        }
    }
`
