import styled from "styled-components";

export const Box = styled.div`
    border: 1px solid #fff;
    border-radius: .8rem;
    margin-bottom: .8rem;
    cursor: pointer;


    :hover{
        border: 1px solid #008cff;
        box-shadow: 0px 0px 10px #008cff;
    }
    

    & li{
       display: flex;
       flex-direction: column;
       align-items: center;
       color: #fff;
       padding: 12px 8px; 
    }

    & li:hover{
       color: #008cff;
    }

`