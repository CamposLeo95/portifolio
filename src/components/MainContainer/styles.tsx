import styled from "styled-components";

interface  NuvemProps{
    width: number;
    top: number;
    left?: number;
    sec: number;
    delay: number;
    animation: string
}

export const Container = styled.div`
    
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #87dbf0;
    position: relative;
    overflow: hidden;

`
export const Nuvem = styled.img<NuvemProps>`

    @keyframes moviment {
        from{
            left:-460px;
        }
        to{
            left: 1500px;
        }
    }

    position: absolute;
    width: ${({width}) => `${width}px`};
    top: ${({top}) => `${top}px`};
    left: ${({left}) => `${left}px`};
    animation: 
    ${({animation}) => animation }
    ${({sec}) => `${sec}s`}
    ${({delay}) => `${delay}s`}
    linear
    infinite;
    
`