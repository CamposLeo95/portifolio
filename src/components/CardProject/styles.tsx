import styled from "styled-components";

export const Wrapper = styled.div`
        width: 65%;
        min-width: 320px;
        max-width: 400px;
        height: 510px;
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

    & .description{
        width: 100%;
        height: 50%;
        border-radius: 0 0 15px 15px;
        background-color: #e7e7e7;
        overflow: hidden;
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        & .textDescription{
            height: 70%;
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            font-size: 1.7rem;
            border-bottom: 1px solid #979797b2;
        }

        & .wrapperLink{
            width: 60%;
            height: 30%;
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
                margin-right: 15px;

                & a{
                    color: white;
                }
            } 

            & button:hover {
                padding: 10px;
                cursor: pointer;
                border: 1px solid white;
                box-shadow: 0px 0px 10px white; 
            } 

            & i{
                font-size: 3.5rem;
                color: #000;
            }
        }
    }

    & img {
        width: 100%;
        height: 100%;
        background-size: cover;
    }

    & .content{
        text-align: center;
        width: 100%;
        height: 50%;
        color: #fff;
        border-radius: 15px 15px 0 0 ;
        background-color: #1d1d1dea;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 30px;

        & .wrapperImg{
            width: 100%;
            display: flex;
            padding: 10px;
            justify-content: space-between;

        }

        & .tecImg{
            width: 36px
        }
     
    }

    
    

`