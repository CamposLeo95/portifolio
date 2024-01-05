import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center; 
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: #a8a8a8a9;  
    
`

export const CardModal = styled.div`
    width: 80%;
    max-width: 650px;
    min-height: 450px;
    max-height: 90vh;
    background-color: #2c2c2c;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0px 25px;
    box-shadow: 0px 0px 10px black;
    overflow: auto;
    border-radius: 8px;
    scrollbar-width: thin;
    scrollbar-color: var(--cor-azul-claro) #f0f0f0;
`

export const FieldModal = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Title = styled.span`
    font-size: 22px;
    color: var(--cor-azul-claro);
`

export const SubTitle = styled.span`
    font-size: 24px;
    color: var(--cor-azul-claro);;
    font-weight: 700;
    text-transform: uppercase;
`

export const Content = styled.span`
    font-size: 16px;
    color: #bdbdbd;

`

export const ContentTech = styled.span`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 5px;
    gap: 4px;

`

export const ContainerSlider = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

`

export const Icon = styled.img`
    margin-right: 15px;
    
`

export const Link = styled.a`
    border: 2px solid white;
    width: 120px;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    font-size: 16px;
    color: white
`