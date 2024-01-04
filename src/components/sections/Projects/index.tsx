import { projetos } from "../../../assets/Data/data"

import { SecondContainer } from "./styles"
import CardProjeto from "../../CardProjeto"
import ModalProjeto from "../../ModalProjeto"

export default function Projects() {
    return (
        <SecondContainer>
            <ModalProjeto />
            <div className="card-projetos">
                <h2>
                    <span>Meus, </span>
                    <span className="span-about-two">Projetos</span>
                </h2>
                <div className="container-cards-projeto">
                    {projetos.map((projeto) => (
                        <CardProjeto dataProjeto={projeto} />
                    ))}
                </div>
            </div>
        </SecondContainer>
    )
}

