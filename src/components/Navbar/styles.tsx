import styled from 'styled-components';

interface HeaderContainerProps{
    showHideMenu: boolean
}

interface SecondContainerProps{
    showHideMenu: boolean
}

export const HeaderContainer = styled.div<HeaderContainerProps>`
    width: 110px;
    height: 100vh;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #C2C1BA;
    background-color: #2b2b2bdc;
    z-index: 4;
    position: fixed;

    & button{
        display: none;
    }
    
    @media (max-width: 1150px){
        height: 8vh;
        width:100%;
        background: #1d1d1dea;

        & button{
            position: relative;
            display: initial;
            border: none;
            background: transparent;
            color: white;
            font-size: 3.5rem;
            top: ${({showHideMenu}) => showHideMenu ? "85vh" : ""};
            z-index: 4;
            cursor: pointer;
        }
    }

 
`
export const SecondContainer = styled.div<SecondContainerProps>`
    
    width: 80%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: 4rem;
    

    & ul{

        & li{
            list-style: none;
            font-size: 1.8rem
        }
    }

    @media (max-width: 1150px){
        display: ${({showHideMenu}) => showHideMenu ? "flex" : "none"};
        background-color: #1d1d1dea;
        position: absolute;
        height: 94vh;
        width:100%;
        top: 7.4vh;
    }

 
`