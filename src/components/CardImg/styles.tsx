import styled from "styled-components"
import light from "../../theme/light"

export const CardImagem = styled.div`
        position: relative;
        border:3px solid ${light.colors.primary};
        border-radius: 3px;

        & img{
            position: relative;
            width: 250px;
            left: 15px;
            bottom: 10px;
            border-radius: 3px;
            box-shadow: -8px 8px 10px black;
            cursor: pointer;
            transition: 0.3s ease-in-out;
        }

        & img:hover{
            width: 255px;
            bottom: 20px;
        }
`