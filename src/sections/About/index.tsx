// Styled-Components
import Container from "../../components/Container"
import * as S from "./styles"
import CardSkill from "../../components/CardSkill"
import { DataSkill, Description } from "./data/Data"

export default function About() {

    return (
        <S.MainContainer>
            <Container>
                <div className="about">
                    <h2>
                        <span className="span-about-one">Sobre </span>
                        <span className="span-about-two">Mim</span>
                    </h2>
                    <p>
                        <span className="span-citacao-frase">
                            "O maior prazer na vida é fazer o que as pessoas dizem que você não é capaz de fazer."
                        </span>
                        <span className="span-citacao-criador">
                            Walter Bagehot
                        </span>
                    </p>
                    <div className="card-about">
                        {Description.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </div>
                    <ul className="container-skill">
                        {DataSkill.map((item, index) => (
                            <CardSkill
                                key={index}
                                title={item.title}
                                content={item.content}
                                icon={<item.icon />}
                                delay={Number(`0.${index}`)}
                            />
                        ))}
                    </ul>

                </div>
            </Container>
        </S.MainContainer>
    )
}