import styled from 'styled-components'

type CardSkillProps = {
    delay: number
    inView: boolean
}

export const CardSkill = styled.section<CardSkillProps>`
        position: relative;
        background-color: var(--cor-azul-claro);
        width: 90%;
        min-height: 300px;
        border-radius: 3px;
        padding: 20px;
        font-size: var(--font-texto-um);
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 8px;
        opacity: 0;
        text-align: start;
        box-shadow: 1px 1px 10px #000;
        animation: ${({ inView }) => inView ? "upComponente 1s ease-in-out forwards" : "none"} ;
        animation-delay: ${(props) => `${props.delay}s`};


        @keyframes upComponente {
            from{
                bottom: -200px;
            }

            to{
                bottom: 0px;
                opacity: 1;
            }
        }

        & h2{
            color:#fff;
        }

        @media (min-width: 768px) {
            min-width: 240px;
        }

        @media (min-width: 1024px) {
            min-width: 290px;
        }

`
