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
    min-width: 400px;
    max-width: 50%;
    min-height: 450px;
    max-height: 90vh;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0px 25px;
    box-shadow: 0px 0px 10px black;
    overflow: auto;
    border-radius: 3px;
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
    font-size: 20px;
    color: var(--cor-azul-claro);
`
export const Content = styled.span`
    font-size: 16px;
    color: #838383
`