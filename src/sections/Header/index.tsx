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
                        Profissional com mais de 2 anos de experiência na criação de projetos web, cursando<S.TextBold> MBA - Arquitetura e Engenharia de software</S.TextBold>. Destacado pelo desenvolvimento de soluções Front e Back end, comprometido na entrega de serviços com agilidade e qualidade. Vivência com tecnologias Front-end, utilizando <S.TextBold> React, TypeScript, HTML, CSS, JavaScript.</S.TextBold> E Back end com
                        <S.TextBold> NodeJs, postgresSQL, MongoDB.</S.TextBold> Versionamento com <S.TextBold> Git, GitHUB e GitFlow.</S.TextBold>
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