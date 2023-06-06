// Styled-Components
import Container from "../../Container"
import { MainContainer } from "./styles"

import imgPerfil from "../../../assets/img/perfil.png"
import CardImg from "../../CardImg"

export default function About(){

    return(
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
                            Olá, meu nome é Leonardo e estou em uma empolgante transição de carreira para me tornar um desenvolvedor. Desde 2022, tenho me dedicado aos estudos e aprimoramento de habilidades para me destacar nessa área em constante evolução.
                        </p>
                        <p>
                            Hoje conto com diversas experiências em projetos pessoais e de cursos que realizando nessa trajetória, trazendo um conjunto sólido de habilidades em <span className="texto-distaque">React, TypeScript, Node.js</span> e bancos de dados <span className="texto-distaque">Postgres</span> e <span className="texto-distaque">MongoDB.</span>
                        </p>
                        <p>
                            Estou ansioso para fazer parte de um time que compartilhe meu entusiasmo pela inovação e pelo desenvolvimento de software, onde juntos podemos impulsionar o futuro da tecnologia.
                        </p>                       
                        </div>
                    </div>
                </div>
            </Container>      
        </MainContainer>
    )
}