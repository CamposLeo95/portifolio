import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #ececec;

    
`

export const SecondContainer = styled.div`
    @keyframes movimento {
        from {
            left: -15px;
        }
        to {
            left: 1300px;
        }
    }
    position: relative;
    width: 100%;
    height: 80%;
    display: flex;


    & h1{
        position: relative;
        color:red;
        top:${`${Math.random()*400}px`};
        /* animation: movimento 2s linear infinite; */
    }
`

