import styled from "styled-components";

export const MainContainer = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    font-size: 1.6rem;
    padding: 20px 0; 

    & h2{
        color: #0d8df5; 
        font-size: 3.2rem;   
    }

    & .span-about-two{
        font-family: 'Caveat', cursive;
    }

    & .about{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top:20px;
        gap: 10px;
    }

    & .card-about{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:20px 10px;
        border-radius: 10px;
        background-color: #ebeaea;


        & .card-descricao{
            width: 90%;
            display: flex;
            justify-content: center;

        }

        & img{
            width: 250px;
            border-radius: 10px;
        }
    }

    @media (min-width: 760px) {

        margin-top:50px;     
        & .card-about{
        margin: 70px 0;
        display: flex;
        flex-direction: row;
        gap: 50px;

        }

        & img{
            width: 250px;
            border-radius: 10px;
        }
    }

`