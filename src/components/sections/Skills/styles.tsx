import styled from "styled-components";



export const SecondContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    .sliderCard{
        margin-bottom: 40px;
        background: #161616d3;
        border-radius: 15px;
        width:37%;
        min-height: 190px;
        min-width: 250px;
        height:250px;
        display: flex;
        justify-content: center;
        align-items:center;
        z-index: 2;
    }

    & h1{
        margin-top: 20px;
        font-size: 4rem;
        font-weight: bold;
        color:#fff;
    }

    @media (max-width: 1150px){
        flex-direction: column;

    }

    @media (max-width: 500px){
        .sliderCard{
            margin-top: 100px;
            width:30%;
            min-width: 350px;
        }
    }

    @media (max-height: 700px){
        .sliderCard{
            position: relative;
            top: 50px;
        }
    }

`