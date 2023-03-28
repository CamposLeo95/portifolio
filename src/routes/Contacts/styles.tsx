import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #ececec;
    
`
export const SecondContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CardForm = styled.div`
    width: 60%; 
    min-width:300px;
    height: 80%;
    background:#383838;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    box-shadow: 2px 2px 10px #000000;
    animation: startedLeft 1.5s;
    position: relative;

    & h1{
        font-size: 4rem;
        color: #fff;
        text-shadow: 1px 1px 10px #ffffffb5;
    }

    & div{
        display: flex;
        justify-content: center;
        width: 90%;

        & i{
            font-size: 3rem;
            color: white;
            margin: 0px 20px;
            cursor: pointer;
        }
        & i:hover{
            text-shadow:1px 1px 25px #ffffff;
        }
    }

    @media (max-width: 1050px) {
        height: 70%;
    }
`
export const Form = styled.form`
    width: 90%;
    height: 60%;
    display: flex;
    flex-direction: column;

    & input{
        padding: 10px;
        margin-bottom: 10px;
        outline: none;
        border: none;
        border-radius: 3px;
        font-size: 1.8rem;
        background: #faf6f6dd;
        box-shadow:2px 2px 10px #000000;
        color: #2c2c2c;
    }

    & textarea{
        height: 150px;
        padding: 8px;
        margin-bottom: 20px;
        outline: none;
        border: none;
        border-radius: 3px;
        font-size: 1.8rem;
        background: #faf6f6dd;
        color: #2c2c2c;
        box-shadow:2px 2px 10px #000000;
    }

    & button{
        padding: 8px;
        cursor: pointer;
        background: transparent;
        border: 1.5px solid #fff;
        border-radius: 5px;
        color: white;
        font-size: 2rem;
        box-shadow: 0px 0px 10px #ffffff;
        
    }

    & button:hover{
        border: 1px solid #ffffff;
        box-shadow: 0px 0px 25px #ffffff;
        color:#ffffff;
        text-shadow:1px 1px 40px #ffffff;
        /* color:#008cff; */
    }
`
