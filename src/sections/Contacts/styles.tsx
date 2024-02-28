import styled from "styled-components";
import bgBlack from "../../assets/img/fundoblack.jpg"


export const Container = styled.div`
    background-image: url(${`${bgBlack}`});
    background-repeat: no-repeat;
    background-size: cover;
    /* transform: rotate(180deg); */
`

export const SecondContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`
export const CardForm = styled.div`
    width: 100%; 
    padding: 20px;
    display: flex;
    flex-direction:column-reverse;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    position: relative;
    gap: 20px;

    & h1{
        font-size: 4rem;
        color: #fff;
        text-shadow: 1px 1px 10px #ffffffb5;
    }

    & div{
        display: flex;
        justify-content: center;
        width: 85%;

        & i{
            font-size: 3rem;
            color: white;
            margin: 0px 20px;
            cursor: pointer;
        }
        & i:hover{
            text-shadow:1px 1px 25px #ffffff;
        }
    }

    & .descricao{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap: 20px;
        text-align:center;
        color: #fff;

        & h3{
            font-size:var(--font-header-um);
            font-family: var(--font-family-secundaria);
        }

        & p{
            font-size:var(--font-texto-um);
        }
    }



    @media (min-width: 815px) {

        flex-direction:row;

        & .descricao{
            width: 40%;
        }

        & .redes{
            display:flex;
            gap: 30px;
        }
    }

`
export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;

    & input{
        padding: 10px;
        width:100%;
        margin-bottom: 10px;
        outline: none;
        border: none;
        border-radius: 3px;
        font-size: 1.8rem;
        background: #faf6f6dd;
        color: #2c2c2c;
    }

    & textarea{
        height: 150px;
        width:100%;
        padding: 8px;
        margin-bottom: 20px;
        outline: none;
        border: none;
        border-radius: 3px;
        font-size: 1.8rem;
        background: #faf6f6dd;
        color: #2c2c2c;
    }

    & button{
        padding: 8px;
        width: 150px;
        cursor: pointer;
        background: transparent;
        border: 1.5px solid #fff;
        border-radius: 5px;
        color: #fff;
        font-size: var(--font-header-dois);  
        font-weight: 600;
        font-family: var(--font-family-secundaria)
    }

    & button:hover{
        border: 1px solid #fff;
        background-color:#fff;
        color:var(--cor-azul-claro);
        border: 1.5px solid var(--cor-azul-escuro);
    }

    @media (min-width: 815px) {
        width: 45%;
    }

`
