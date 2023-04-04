import styled from 'styled-components'

export const SecondContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0 0 60px;

    @media (max-width: 1150px) {
        flex-direction: column;
        margin: 30px 0 0 0;
    }

    @media (max-height: 620px) {       
        height: 100%;
    }


`

export const CardPhoto = styled.div`
    width: 50%;
    height: 100%;
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
        height: 50%;
        & div{
            height: 150px;
            min-width: 150px;
            bottom: 25px;

            & img{
            width: 150px;
            position: relative;
            top: -40px;
            right: 8px;
        }
        }
        
    }

    @media (max-width: 500px) {
        
        & div{
            min-width: 130px;
            bottom: 25px;

            & img{
            min-width: 150px;
            position: relative;
            top: -30px;
            right: 0px;
        }
        }
    }

`
