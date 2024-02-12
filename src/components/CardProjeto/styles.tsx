import styled from "styled-components";

interface ContainerProjetoProps {
    id: any,
}

export const ContainerProjeto = styled.div<ContainerProjetoProps>`
        width: 290px;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: space-between;
        gap:10px;
        overflow:hidden;
        border-radius: 2px;
        background-color: #fff;
        box-shadow: 5px 5px 10px black;

        @media (min-width: 768px) {
            width: 380px;
        }
`
export const CardImg = styled.div` 
    position: relative;
    display: flex;
    justify-content: center;
    overflow:hidden;
    width: 100%;
    transition: ease-in-out 0.3s;
    

    &:hover{
        border-radius: 5px;
        border:4px solid var(--cor-azul-claro);
    }

`

export const Img = styled.img`
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
    display: flex;
    font-size: var(--font-texto-um);
    align-items: center;
    padding: 15px 15px;  
    border-right:2px solid var(--cor-azul-claro);
    border-left:2px solid var(--cor-azul-claro);
    border-bottom:2px solid var(--cor-azul-claro);
        
`
export const Title = styled.h3`
    font-size: var(--font-header-dois);
    color: var(--cor-azul-claro);
`

export const Controls = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

`

export const Button = styled.button`
    
    color: #fff;
    background-color: var(--cor-azul-claro);
    opacity: 0.9;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid var(--cor-azul-claro);
    width:100%;
    padding: 8px;
    margin-bottom: 20px;
    border-radius: 5px;
    transition: 0.1s ease-in;
    cursor: pointer;


&:hover{
    color: #fff;
    opacity: 1;
    border: 1px solid var(--cor-azul-claro);
}

`

export const Tecnologies = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
    justify-content: center;
    flex-wrap: wrap;

    & img{
        border-radius: 5px;
    }
`