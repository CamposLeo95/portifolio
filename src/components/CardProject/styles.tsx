import styled from "styled-components";

export const Wrapper = styled.div`
        width: 320px;
        height: 550px;
        border-radius: 15px;
        font-size: 1.6rem;
        box-shadow: 1px 1px 10px black;

        & button {
                height: 40px;
                border-radius: 5px;
                font-weight: bold;
                background: #e7ab06; 
                border: 1px solid #fff;
                padding: 5px;
                margin: 5px;
                color: #fff;
            }

    & .image{
        width: 100%;
        height: 40%;
        border-radius: 15px 15px 0 0;
        background-color: #e7e7e7;
    }

    & .content{
        width: 100%;
        height: 60%;
        color: #fff;
        border-radius: 0 0 15px 15px;
        background-color: #1d1d1dea;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 8px;

        & .wrapperSpan{
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }

        & .wrapperLink{
            width: 60%;
            display: flex;
            justify-content: space-around;
            align-items: center;

            & button {
                width: 100px;
                height: 50px;
                font-size: 2rem;
                padding: 10px;
                cursor: pointer;
                color: #fff;
                text-shadow: 1px 1px 5px black;
                border: 1px solid white;
                background-color: #3fd9ff;
                transition: 0.3s;
            } 

            & button:hover {
                padding: 10px;
                cursor: pointer;
                color: white;
                border: 1px solid white;
                box-shadow: 0px 0px 10px white;
            } 

            & i{
                font-size: 3.5rem;
                color: white;
            }
        }
    }

    
    

`