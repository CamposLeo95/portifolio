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
`

export const CardSkills = styled.div`
   @keyframes remix {
      0%{
         transform: rotateZ(0deg) 
      }
      25%{
         transform: rotateZ(8deg) 
      }
      50%{
         transform: rotateZ(0deg) 
      }
      75%{
         transform: rotateZ(-8deg) 
      }
      100%{
         transform: rotateZ(0deg) 
      }

   }

    width: 70%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: remix 2s linear infinite;

    img{
      width: 150px;
    }

`
 
 export const ArrowButton= styled.button<ArrowButtonProps>`
    font-size: 50px;
    cursor: pointer;
    rotate: ${ ({side}) => side ? "0deg": "180deg"};
    opacity:.8;
    background: none;
    border: none;
   
    &:hover{
       opacity:.8;
       text-shadow: 1px 1px 15px #008cff;;
    }
 
    i{
       color: #757575;
    }

    & i:hover{
       color: #008cff;
    }
 
 `
