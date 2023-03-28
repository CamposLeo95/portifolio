import styled from "styled-components";

interface ArrowButtonProps {
    side: boolean
 }

export const Container = styled.div`
    width: 50%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    animation: showObject 3s;
    
`

export const CardSkills = styled.div`

    width: 70%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    animation: remix 2s linear infinite, startedBottom 1.5s;;

    img{
      width: 150px;
    }

`

 export const ArrowButton= styled.button<ArrowButtonProps>`
    font-size: 50px;
    cursor: pointer;
    rotate: ${ ({side}) => side ? "0deg": "180deg"};
    opacity:.5;
    background-color: transparent;
    border: none;

   
    &:hover{
       opacity: 1;
       text-shadow: 1px 1px 10px #008cff;
       transition: .5s;
    }
 
    i{
       color: #757575;
       font-size: 5rem;
    }

    & i:hover{
       color: #008cff;
    }
 
 `
