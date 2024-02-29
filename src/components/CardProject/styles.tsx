import styled from "styled-components";

interface ContainerProjetoProps {
    id: any,
}

export const ContainerProjeto = styled.div<ContainerProjetoProps>`
        width: 290px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap:10px;
        overflow:hidden;
        border-radius: 1px;
        background-color: #111111;
        box-shadow: 5px 5px 10px black;

        @media (min-width: 768px) {
            width: 450px;
        }
`
export const CardImg = styled.div` 
    position: relative;
    display: flex;
    justify-content: center;
    overflow:hidden;
    width: 100%;
    transition: ease-in-out 0.3s;

`

export const MaskImage = styled.div`

    position: absolute;
    z-index:5;
    width: 100%;
    height: 320px;
    padding: 20px;
    display: flex;
    opacity: 0;
    justify-content: flex-end;
    transition: 0.2s ease-in;

    &:hover{
        background-image: linear-gradient(270deg, #131313,  #131313c1, transparent);
        opacity: 1;
    }


`
export const MaskImageCardText = styled.div`
        position: relative;
        color: #fff;
        width: 60%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 10px;
        animation: MaskImageCardTextAnimation 1s;

        & h3{
            font-size: 14px ;
        }

        @media (min-width: 768px){
            font-size: 12px;
            & h3{
                font-size: 16px ;
            }
        }

        @media (min-width: 1024px){
            font-size: 14px;
            & h3{
                font-size: 18px ;
            }
        }


`


export const Image = styled.img`
    width: 100%;
    cursor: pointer;
    transition: ease-in-out 0.5s;
    filter: brightness(50%); 

    &:hover{
        scale: calc(1.07);
        filter: brightness(100%); 
    }

    @media (max-width: 1024px) {
        filter: brightness(90%); 
    }
`

export const CardDescription = styled.div` 
    width: 100%;
    min-height: 150px;
    display: flex;
    font-size: var(--font-texto-um);
    align-items: center;
    padding: 15px 15px;  
        
`
export const Controls = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

`

export const Charge = styled.div`
    position: relative;
    width: 100%;
    height: 5px;
    background-color: gray;
    overflow: hidden;
    border-radius: 5px;

    & .bolinha{
        width: 40px;
        height:100%; 
        background-color: #006eff;
        position: absolute;
        bottom: -0.1px;
        left: -20px;
        animation: carregando 2s infinite;
    }

    @keyframes carregando {

        to{
            opacity: 1;
            left: 100%;
            background-color: #0044ff;
        }
    }
`
export const CardButtons = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;

    @media (min-width: 768px) {
        justify-content: center;
    }
`

export const Button = styled.div`

    width: 120px;    
    color: #fff;
    opacity: 0.9;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid gray;
    padding: 8px;
    margin-bottom: 20px;
    border-radius: 5px;
    transition: 0.1s ease-in;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & img{
        width: 25px;
    }


&:hover{
    color: var(--cor-azul-claro);
    opacity: 1;
    border: 1px solid var(--cor-azul-claro);
}

`

export const Tecnologies = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;

    & img{
        border-radius: 5px;
    }
`

export const TecnologiesIcons = styled.img`
    width: 30px;
    filter: grayscale(100%);
    transition: 0.3s ease-in-out;

    &:hover{
        cursor: auto;
        filter: grayscale(0%);
    }
`