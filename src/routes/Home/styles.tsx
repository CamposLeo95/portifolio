import styled from 'styled-components'

export const SecondContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px 0 0 60px;

    @media (max-width: 1150px) {
        flex-direction: column;
        margin: 60px 0 0 0;
    }

    @media (max-height: 620px) {       
        height: 80%;
    }


`

export const CardPhoto = styled.div`
    width: 50%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: startedRight 2s;

    & div{
        min-width:350px;
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
            bottom: 25px;

            & img{
            width: 350px;
            position: relative;
            top: -40px;
            right: 8px;
        }
        }
        
    }

    @media (max-width: 500px) {
        
        & div{
            width: 250px;
            height: 300px;
            min-width: 310px;
            bottom: 25px;

            & img{
            width: 300px;
            position: relative;
            top: -50px;
            right: 0px;
        }
        }
    }

    @media (max-height: 620px) {       
        & div{
            width: 150px;
            height: 150px;
            bottom: 25px;
            min-width: 50px;

            & img{
            width: 150px;
            position: relative;
            top: -20px;
            right: 0px;
        }
        }

    }
`
