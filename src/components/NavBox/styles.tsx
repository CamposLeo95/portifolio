import styled from "styled-components";

export const Box = styled.div`
    border: 1px solid #fff;
    border-radius: .8rem;
    margin-bottom: .8rem;
    cursor: pointer;


    :hover{
        border: 1px solid #fff;
        box-shadow: 0px 0px 10px #fff;
    }
    

    & li{
       display: flex;
       flex-direction: column;
       align-items: center;
       color: #fff;
       padding: 12px 8px; 
    }

    & li:hover{
       text-shadow: 0px 0px 10px #fff;
    }

    @media (max-width: 1150px) {
        width: 150px;
        height: 80px;
        margin-bottom:30px;
    }

`