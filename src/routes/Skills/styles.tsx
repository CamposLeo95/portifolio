import styled from "styled-components";

interface SecondContainerProps{
    color: string
}

export const SecondContainer = styled.div<SecondContainerProps>`

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & h1{
        margin-top: 20px;
        font-size: 4rem;
        font-weight: bold;
        color: ${({ color }) => color };
    }

    @media (max-width: 1150px){
        flex-direction: column;

    }

`