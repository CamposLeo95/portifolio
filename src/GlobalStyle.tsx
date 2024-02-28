import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{

        //Font-Sizes
        --font-header-um: 4.2rem;
        --font-header-dois: 2.4rem;
        --font-texto-um: 1.6rem;

        //Fonts-Family
        --font-family-principal: 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        --font-family-secundaria: 'Caveat', cursive;
        --font-family-terceira: "Cinzel Decorative", serif;

        //Colors
        --cor-azul-escuro: #080077; 
        --cor-azul-claro: #3264ee; 
        --cor-cinza-claro: #838383; 

        //Borders
        --borda-top: 1px solid #81818188;

        
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--font-family-principal);
        text-decoration: none;
    }

    html{
        font-size: 62.5%;
    }

    body{
        background-color: #ececec;
    }

// KEYFRAMES -----------------------------------

    @keyframes startedTop {
        from{
            bottom: 400px;
            opacity: 0;
        }
        to{
            bottom: 0px;
            opacity: 1;
        }
    }

    @keyframes startedRight {
        from{
            left: 400px;
            opacity: 0;
        }
        to{
            left: 0px;
            opacity: 1;
        }   
    }

    @keyframes startedBottom {
        from{
            top: 400px;
            opacity: 0;
        }
        to{
            top: 0px;
            opacity: 1;
        }   
    }
    @keyframes startedLeft{
        from{
            right: 400px;
            opacity: 0;
        }
        to{
            right: 0px;
            opacity: 1;
        }   
    }

    @keyframes showObject {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }   
    }

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

   @keyframes remixSlow{
      0%{
         transform: rotateZ(0deg) 
      }
      25%{
         transform: rotateZ(2deg) 
      }
      50%{
         transform: rotateZ(0deg) 
      }
      75%{
         transform: rotateZ(-2deg) 
      }
      100%{
         transform: rotateZ(0deg) 
      }

   }
// SWIPER CONFIG
   .swiper{
    padding: 32px;
    cursor:grab;
    }

    .swiper-slide{
        display: flex;
        justify-content: center;
    }

    .swiper-pagination-bullet-active {
        background-color: var(--cor-azul-claro);
        width: 10px;
        height: 10px;
        box-shadow: 0px 0px 8px var(--cor-azul-claro);
    }

`
