import styled from 'styled-components'

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const SecondContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1150px) {
        flex-direction: column;
    }


`

export const CardPhoto = styled.div`
    width: 50%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    & div{
        min-width:450px;
        height: 450px;
        border-radius: 50%;
        overflow: hidden;
        border: 5px solid white;
        box-shadow: 1px 1px 10px black;
        position: relative;

        & img{
            width: 450px;
            position: relative;
            top: -40px;
            right: 8px;
        }
        
    }

    @media (max-width: 1150px) {
        & div{
            width: 350px;
            height: 350px;
            min-width: 310px;
            bottom: 25px;

            & img{
            width: 350px;
            position: relative;
            top: -40px;
            right: 10px;
        }
        }
        
    }

    @media (max-width: 500px) {
        
        & div{
            width: 450px;
            height: 300px;
            min-width: 310px;
            bottom: 25px;

            & img{
            position: relative;
            top: -40px;
            right: 40px;
        }
        }
    }

`
