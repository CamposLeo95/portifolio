import styled from "styled-components";

interface HomeContainerProps{
    idImg: number
}

interface SecondContainerProps{
    color: string
}


export const HomeContainer = styled.div<HomeContainerProps>`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: ${ ()=> {
                            let numRandom = Math.ceil(Math.random()*4) 
                            console.log(numRandom);
                            switch(numRandom){
                                case 0: return "#c1fdb8c6"
                                break
                                case 1: return "#fcf58fad"
                                break
                                case 2: return "#b3fcffc1"
                                break
                                case 3: return "#ff9b9bb3"
                                break
                                case 4: return "#fac2ffcc"
                                break
                                default: return "#efefef"
                                }     
                            }
                        };
    transition-property: background-color;
    transition-duration: 2s;
    
`

export const SecondContainer = styled.div<SecondContainerProps>`

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & h1{
        margin-top: 20px;
        font-size: 4rem;
        font-weight: bold;
        color: ${({ color }) => color };
    }
`