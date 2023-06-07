import { projetos } from "../../../assets/Data/data"

import { SecondContainer } from "./styles"
import CardProjeto from "../../CardProjeto"

export default function Projects() {
    return (
        <SecondContainer>
            <div className="card-projetos">
                <h2>
                    <span>Meus, </span>
                    <span className="span-about-two">Projetos</span>
                </h2>
                {projetos.map((projeto) => (
                    <CardProjeto dataProjeto={projeto} />
                ))}
            </div>
        </SecondContainer>
    )
}

