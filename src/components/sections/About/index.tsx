// Styled-Components
import Container from "../../Container"
import { MainContainer } from "./styles"

import imgPerfil from "../../../assets/img/perfil.png"

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
                        Em transição de carreira para me tornar um desenvolvedor, já desenvolvi diversos projetos quem sabe o seu possa ser o proximo.
                    </p>
                    <div className="card-about">
                       <div className="card-img">
                            <img src={imgPerfil} alt="Imagem Perfil"/>
                        </div>
                       <div className="card-descricao">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia debitis odit, eveniet amet magni itaque repellat nam, doloribus consequatur ipsa corrupti molestias! Facere repellat quidem molestiae quis libero provident magnam.
                        </div>
                    </div>
                </div>
            </Container>      
        </MainContainer>
    )
}