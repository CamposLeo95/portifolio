import styled from 'styled-components'

export const MainContainer = styled.section`
    width: 100%;
    align-items: center;
    color: white;
    background-image: linear-gradient(90deg, #000,#01011f);
    font-size: 1.5rem;
    padding: 30px 0; 
    border-radius: 0px 0px 150px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & .banner{
        width: 70%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    & .span-title-one{
        font-family: 'Caveat', cursive;
        display: block;
        margin: 8px 0;
    }

    & span{
        font-size: 3rem;
    }

    & .span-title-three{ 
        color: #0d8df5;
        font-weight: 400;
    }

    & .contatos{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 10px 0;

        & i{
            font-size: 2.4rem;
            color: #fff;
        }
    }

    & h2, p{
        text-align:center;
        margin: 10px 0;
    }

    & p {
        color: #a0a0a0;
        margin: 30px 0;
    }

    @media (min-width: 760px) {
        border-radius: 0px 0px 270px 0;
        padding: 60px 0; 
        
        & span{
            font-size: 4rem;
        }

        & .banner {
        width: 80%;
        align-items: start;
        /* background-color: green; */
        }

        & h2, p{
        text-align: start;
        }

        & .conteudo{
            width: 50%;
        }

    & .contatos{
        width: 100%;
        margin-top:20px;
        display: flex;
        justify-content: start;
        gap: 20px;

        & i{
            font-size: 2.8rem;
            color: #fff;
        }
    }
    }

`
