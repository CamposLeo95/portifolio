import styled from 'styled-components'

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #ececec;
    
`

export const SecondContainer = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
`

export const CardLeft = styled.div`
    width: 50%;
    height: 100vh;
    position: relative;

    & :nth-child(1){
        width: 60%;
        height: 70%;
        position: absolute;
        top: 90px;
        left: 110px;
        border-radius: 15px;
        background-color: #444444;
    }

    & :nth-child(2){
        width: 60%;
        height: 70%;
        position: absolute;
        top: 100px;
        left: 120px;
        border-radius: 15px;
        background-color: #e7dede;

    }
`
