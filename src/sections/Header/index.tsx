import { useState } from "react"
import * as S from "./styles"

import imgPerfil from "../../assets/img/perfil.png"

export default function Header() {

    const [subtitle, setSubtitle] = useState<string>('Leonardo Campos')

    return (
        <S.MainContainer>
            <S.Banner>
                <div className='texto-principal'>
                    <h1>
                        <span className='span-title-one'>Desenvolvedor,</span>
                        <span className='span-title-two'> Full Stack</span>
                    </h1>
                </div>
                <div className='conteudo'>
                    <h2>{subtitle}</h2>
                    <p>
                        Profissional com experiência na criação de soluções e aplicações web. Comprometido em entregar qualidade e organização no desenvolvimento de projetos. Vivência na utilização de linguagens e frameworks Front-end, como
                        <span className="texto-distaque"> HTML, CSS, JavaScript, TypeScript, React e Angular. </span>
                    </p>
                    <div className='contatos'>
                        <a href="https://www.linkedin.com/in/leonardo-a-campos/" target="_blank">
                            <i className="bi bi-linkedin" />
                        </a>
                        <a href="https://wa.me/5511958639720" target="_blank">
                            <i className="bi bi-whatsapp" />
                        </a>
                        <a href="https://github.com/CamposLeo95" target="_blank">
                            <i className="bi bi-github" />
                        </a>
                    </div>
                </div>

            </S.Banner>
            <div className="quadrado"></div>
            <div className="quadrado-linha"></div>
            <div className="linha"></div>
            <div className="card-imagem">
                <img src={imgPerfil} />
            </div>

        </S.MainContainer>
    )
}