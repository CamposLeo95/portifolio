import styled from 'styled-components'
import bgBlack from '../../assets/img/fundoblack.jpg'

export const MainContainer = styled.section`

  width: 100vw;
  padding: 30px 15px; 

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 15px;

  background-image: url(${`${bgBlack}`});
  background-repeat: no-repeat;
  background-size: cover;

  font-size: 1.5rem;
  color: #fff;

  position: relative;


  @media (min-width: 760px) {
    height: 60vh;
    padding: 60px ; 

    flex-direction: row;
    justify-content: space-evenly;
  
  }

  @media (min-width: 1024px) {
    height: 100vh;
  }

`
export const ContainerText = styled.div`

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 760px) {
        width: 50%;
        padding: 10px;
        align-items: start;
    }

    @media (min-width: 1024px) {
        height: 100vh;
    }

    
`

export const MainText = styled.div`

    & .main-text_first{
        font-family: var(--font-family-secundaria);
        font-size: 20px;
        margin: 8px 0;
    }

    & .main-text_second{
        font-size: 20px;
        font-weight: 100;
        font-family: "Cinzel Decorative", serif;
        font-weight: 400;
    }
`

export const ContainerInfo = styled.h2`

  @media (min-width: 760px) {
      width: 90%;
  }

`

export const Subtitle = styled.h2`
    margin: 10px 0;

    font-size:52px;
    font-weight: 100;
    font-family: "Cinzel Decorative", serif;
    font-weight: 400;

    text-align:center;


    @media (min-width: 760px) {
        text-align: start;
    }

`

export const Content = styled.p`
    margin: 10px 0;

    color: var(--cor-cinza-claro);
    font-size: 1.5rem;
    font-weight: 100;
    text-align:center;

    @media (min-width: 760px) {
      text-align: start;
      font-size: 1.7rem;
    }
    

`

export const TextBold = styled.span`  

    font-size: 1.3rem;
    color: #fff;

    @media (min-width: 760px) {
      font-size: 1.7rem;

    }

`

export const CardIcons = styled.div`
  
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 10px 0;

    & i{
        font-size: var(--font-header-dois);
        color: #8f8f8f;
    }

    @media (min-width: 760px) {

      position: absolute;
      bottom: 35px;
      left: 45px;

      margin:20px 0;

      justify-content: start;
      gap: 30px;

      & i{
          font-size: var(--font-header-dois);
          font-size: 30px;
      }

      & i:hover{
          color:  var(--cor-azul-claro);
      }

    }

    @media (min-width: 1024px) {
      left: 100px;

    }

    
`

export const SquareDesign = styled.div`

    width: 250px;
    height: 300px;

    background-color: #3d3d3d;

    position: absolute;
    right: 0;
    bottom: 10px;

    display: none;

    @media (min-width: 768px) {
      width: 350px;
      height: 400px;

      background-color: #3d3d3d;

      position: absolute;

      top: 0; 
      right: 20px;

      display: flex;      
    }

    @media (min-width: 1024px) {
      right: 70px;
    }


`

export const LineSquareDesign = styled.div`

  width: 310px;
  height: 300px;

  border: 2px solid #3d3d3d;

  position: absolute;
  right: 35px;
  bottom: 15px;


    @media (min-width: 768px) {

      width: 350px;
      height: 360px;

      border: 2px solid #3d3d3d;

      position: absolute;
      right: 35px;
      bottom: 130px;
    }

    @media (min-width: 1024px) {
      width: 300px;
      height: 290px;

      position: absolute;
      right: 180px;
      bottom: 140px;
    }


`

export const LineDownDesign = styled.div`

    @media (min-width: 760px) {
      height:1px;
      width: 70%;

      background-color: gray;

      position: absolute;
      bottom: 62px;
      right: 20px;

    }

    @media (min-width: 1024px) {
      height:1px;
      width: 75%;

    }
`

export const CardPerfilImage = styled.div`
    width: 300px;

    z-index:999;

    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 10px -10px 20px #000;

    & img{
      width: 100%;
    }


    @media (min-width: 760px) {
      width: 50%;
    }

    @media (min-width: 1024px) {

    width:300px;

    & img{
        scale: calc(1.25);
    }
  }
`
