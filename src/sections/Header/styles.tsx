import styled from 'styled-components'
import bgBlack from '../../assets/img/fundoblack.jpg'

export const MainContainer = styled.section`
  position: relative;
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
    position: relative;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 10px 0;

    & i{
        font-size: var(--font-header-dois);
        color: #8f8f8f;
    }

    @media (min-width: 760px) {
      top: 50px;
      left: 0px;

      margin:20px 0;

      justify-content: start;
      gap: 30px;

      & i{
          font-size: var(--font-header-dois);
          font-size: 30px;
          opacity: 0;
          animation: IconsAnimation 2s ease-out forwards ;
          animation-delay: 2.8s;  
          transition: 0.2s ease-in-out;
      }

      & i:hover{
          color:  var(--cor-azul-claro);
      }

    }

    @media (min-width: 1024px) {
      position: absolute;
      top: 220px;
      left: 30px;
      gap: 40px;
      flex-direction: column;

      & i{
          font-size: 24px;

      }

    }

    @keyframes IconsAnimation {

      to {
        opacity: 0.8;
      }
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
      animation: SquareDesignAnimation 2s ease-out forwards ;
      animation-delay: 0.5s;    
    }

    @media (min-width: 1024px) {
      right: 70px;
    }

    @keyframes SquareDesignAnimation {
      from{
        top: -430px;
      }
      to{
        opacity: 1;
      }
    }


`

export const LineSquareDesign = styled.div`

  width: 310px;
  height: 300px;

  border: 2px solid #3d3d3d;

  position: absolute;
  right: 25px;
  bottom: 15px;
  opacity: 0;
  animation: LineSquareDesignAnimationMobile 2s ease-in-out forwards ;


    @media (min-width: 768px) {

      width: 350px;
      height: 360px;

      border: 2px solid #3d3d3d;

      position: absolute;
      right: 85px;
      bottom: 130px;

      animation: LineSquareDesignAnimation 1.5s ease-in-out forwards ;
      animation-delay: 0.8s;
    }

    @media (min-width: 1024px) {
      width: 300px;
      height: 310px;
      position: absolute;
      right: 190px;
      bottom: 180px;

    }

    @keyframes LineSquareDesignAnimation {
      from{
        right: 300px;
      }

      to {
        opacity: 1;
      }
    }


    @keyframes LineSquareDesignAnimationMobile {
      from{
        right: -50px;
      }

      to {
        opacity: 1;
      }
    }


`

export const LineDownDesign = styled.div`

    @media (min-width: 760px) {
      height:1px;
      width: 70%;

      background-color: gray;

      position: absolute;
      bottom: 62px;
      right: 0px;
      animation: LineDownDesignAnimation 1s forwards ;
      animation-delay: 2.5s;
      opacity: 0;

    }

    @media (min-width: 1024px) {
      width: 80%;
      bottom: 74px;
    }

    @keyframes LineDownDesignAnimation {
      from{
        right: -800px;
      }
      to{
        opacity: 1;
      }
    }

`

export const CardPerfilImage = styled.div`
    width: 300px;
    position: relative;

    z-index:999;

    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;

    box-shadow: 10px -10px 20px #000;

    & img{
      width: 100%;
    }

    animation: CardPerfilImageAnimationMobile 2s forwards ;


    @media (min-width: 760px) {
      width: 50%;
      animation: CardPerfilImageAnimation 2s forwards ;
    }

    @media (min-width: 1024px) {

    width:300px;
    animation: CardPerfilImageAnimation 2s forwards ;

    & img{
        scale: calc(1.25);
    }
  }

  @keyframes CardPerfilImageAnimationMobile {
      from{
        right: 80px;
      }
      to{
        right: 0;
        opacity: 1;
      }
    }

    @keyframes CardPerfilImageAnimation {
      from{
        right: -100px;
      }
      to{
        right: 0;
        opacity: 1;
      }
    }
  
`
