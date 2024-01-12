// Styled-Components
import Container from "../../components/Container"
import { MainContainer } from "./styles"

import imgPerfil from "../../assets/img/perfil.png"
import CardImg from "../../components/CardImg"

export default function About() {

    return (
        <MainContainer>
            <Container>
                <div className="about">
                    <h2>
                        <span>Sobre </span>
                        <span className="span-about-two">Mim</span>
                    </h2>
                    <p>
                        <span className="span-citacao-frase">
                            "Ser forte não significa nunca cair, mas sim levantar-se todas as vezes que você cai."
                        </span>
                        <span className="span-citacao-criador">
                            Nelson Mandela
                        </span>
                    </p>
                    <div className="card-about">
                        <CardImg img={imgPerfil} />
                        <div className="card-descricao">
                            <p>
                                Amante de tecnologia, desenvolvimento e resoluções de problemas estes foram os principais motivos que fizeram com que me torna-se um desenvolvedor Full Stack. Adquirindo conhecimentos tanto em desenvolvimento de aplicações web com
                                <span className="texto-distaque">
                                    React, Typescript e Node
                                </span>
                                quanto mobile com
                                <span className="texto-distaque">
                                    React-Native.
                                </span>

                            </p>
                            <p>
                                Porem não pretendo parar por ai!
                            </p>
                            <p>
                                Hoje procuro me manter sempre atualizado com as tendências de mercado, adquirindo cursos participando de workshops, lendo artigos, consumindo videos de novas tecnologias ou quaisquer conteudos que me permitam evoluir na carreira. Afinal para mim as linguagens são apenas ferramentas para construirmos algo maior.
                            </p>
                            <p>
                                Meu objetivo é me tornar um especialista em desenvolvimento, participando de grandes projetos que me tragam cada vez mais desafios afim de que possa evoluir e trazer cada vez mais resultados tanto para minha carreira quanto para empresas e pessoas.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </MainContainer>
    )
}