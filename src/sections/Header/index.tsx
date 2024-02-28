import { useState } from "react"
import * as S from "./styles"

import imgPerfil from "../../assets/img/perfil.png"

export default function Header() {

    const [subtitle, setSubtitle] = useState<string>('Leonardo Campos')

    return (
        <S.MainContainer>
            <S.ContainerText>
                <S.MainText>
                    <span className='main-text_first'>Desenvolvedor, </span>
                    <span className='main-text_second'>FullStack</span>
                </S.MainText>
                <S.ContainerInfo>
                    <S.Subtitle>{subtitle}</S.Subtitle>
                    <S.Content>
                        Profissional com experiência na criação de soluções e aplicações web. Comprometido em entregar qualidade e organização no desenvolvimento de projetos. Vivência na utilização de linguagens e frameworks Front-end, como
                        <S.TextBold>
                            HTML, CSS, JavaScript, TypeScript, React e Angular.
                        </S.TextBold>
                    </S.Content>
                    <S.CardIcons>
                        <a href="https://www.linkedin.com/in/leonardo-a-campos/" target="_blank">
                            <i className="bi bi-linkedin" />
                        </a>
                        <a href="https://wa.me/5511958639720" target="_blank">
                            <i className="bi bi-whatsapp" />
                        </a>
                        <a href="https://github.com/CamposLeo95" target="_blank">
                            <i className="bi bi-github" />
                        </a>
                    </S.CardIcons>
                </S.ContainerInfo>
            </S.ContainerText>

            <S.SquareDesign />
            <S.LineSquareDesign />
            <S.LineDownDesign />
            <S.CardPerfilImage>
                <img src={imgPerfil} />
            </S.CardPerfilImage>
        </S.MainContainer>
    )
}