import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        text-decoration: none;
    }

    html{
        font-size: 62.5%;
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

`
