import styled from "styled-components";

interface ArrowButtonProps {
    side: boolean
 }

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    animation: showObject 3s;

    @media (max-width: 1150px){
      width: 70%;
    }
    
`

export const CardSkills = styled.div`
    width: 70%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    animation: remix 2s linear infinite, startedBottom 1.5s;
   
    img{
      width: 150px;
    }

    @media (max-width: 880px) {
      margin-top: 40px;
      height: 40%;

      & img{
         width: 100px;
      }
    }

    @media (max-height: 500px) {
      margin-top: 40px;
      height: 40%;

      & img{
         width:110px;
      }
    }

`

 export const ArrowButton= styled.button<ArrowButtonProps>`
    font-size: 50px;
    cursor: pointer;
    rotate: ${ ({side}) => side ? "0deg": "180deg"};
    opacity:.5;
    background-color:transparent;
    border: none;

   
    &:hover{
       opacity: 1;
       text-shadow: 1px 1px 10px #008cff;
       transition: .5s;
    }

 
    & i{
       color: #ffffff;
       font-size: 5rem;
    }

    & i:hover{
       color: #008cff;
    }
 
    @media (max-height: 880px) {
      margin-top: 40px;
      
    }
 `
