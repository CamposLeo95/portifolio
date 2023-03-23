import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 110px;
    height: 100vh;
    display: flex;
    flex-direction:column;
    align-items: center;
    border-right: 1px solid #C2C1BA;
    background: #181818;
 
`
export const SecondContainer = styled.div`

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
 
`