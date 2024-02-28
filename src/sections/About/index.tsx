// Styled-Components
import Container from "../../components/Container"
import * as S from "./styles"
import CardSkill from "../../components/CardSkill"
import { RiComputerLine, RiDatabase2Line, RiFileSettingsLine } from "react-icons/ri"

export default function About() {

    return (
        <S.MainContainer>
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
                        <div className="card-descricao-">
                            <p>
                                Profissional com experiência na criação de soluções e aplicações web. Comprometido em entregar qualidade e organização no desenvolvimento de projetos. Vivência na utilização de linguagens e frameworks Front-end, como
                                <span className="texto-distaque"> HTML, CSS, JavaScript, TypeScript, React e Angular. </span>
                            </p>
                            <p>
                                Com conhecimentos em tecnologias Back-end, utilizando <span className="texto-distaque"> Node, Postgres e MongoDB. </span> Versionamento de código com <span className="texto-distaque"> GIT e GitHub </span>e criação de imagens com <span className="texto-distaque"> Docker</span>. Boa comunicação, compreensão das necessidades do cliente e participação ativa, fornecendo ideias e feedbacks construtivos.
                            </p>
                        </div>
                    </div>
                    {/* <div className="container-skill">
                        <CardSkill title="dasdas" content="dasdasda" icon={<RiComputerLine />} />
                        <CardSkill title="dasdas" content="dasdasda" icon={<RiComputerLine />} />
                        <CardSkill title="dasdas" content="dasdasda" icon={<RiComputerLine />} />
                    </div> */}
                </div>
            </Container>
        </S.MainContainer>
    )
}