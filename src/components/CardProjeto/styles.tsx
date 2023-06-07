import styled from "styled-components";

interface ContainerProjetoProps {
    id: any,
}

export const ContainerProjeto = styled.div<ContainerProjetoProps>`
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        text-align:center;
        border-bottom:2px solid var(--cor-azul-claro);

        & .descricao{
            display: flex;
            font-size: var(--font-texto-um);
            flex-direction: column;
            width: 80%;
            padding: 20px;
        }

        & h3{
            font-family: var(--font-family-secundaria);           
            font-size: var(--font-header-dois);
            color: var(--cor-azul-claro)
        }

        & p{
            margin: 15px 0;
        }

        & .ferramentas{
            display:flex;
            justify-content:center;
            gap: 15px;
            padding: 15px 0px;
        }
    
        & .controles{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;

            & a{
                color: var(--cor-azul-claro);
                border: 1px solid var(--cor-azul-claro);
                width: 120px;
                padding: 8px;
                border-radius: 5px;
                transition: 0.3s;
            }

            & a:hover{
                color: #fff;
                background-color: var(--cor-azul-claro);
                border: 1px solid var(--cor-azul-claro);
            }
        }

        @media (min-width: 815px) {
            flex-direction: ${props => (props.id % 2) === 0 ? "row" : "row-reverse"}
        }

`