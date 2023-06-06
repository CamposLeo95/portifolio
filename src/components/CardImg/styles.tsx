import styled from "styled-components"

export const CardImagem = styled.div`
        position: relative;
        border:3px solid var(--cor-azul-claro);
        border-radius: 3px;

        & img{
            position: relative;
            width: 250px;
            left: 15px;
            bottom: 10px;
            border-radius: 3px;
            box-shadow: -8px 8px 10px black;
        }
`