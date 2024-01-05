import { projetos } from "../../assets/Data/data"

import { SecondContainer } from "./styles"
import CardProjeto from "../../components/CardProjeto"
import ModalProjeto from "../../components/ModalProjeto"
import { useContext } from "react"
import { ModalContext } from "../../Context/ModalContext"


export default function Projects() {

    const modalContext = useContext(ModalContext)

    return (
        <SecondContainer>
            {modalContext?.isModal && <ModalProjeto />}
            <div className="card-projetos">
                <h2>
                    <span>Meus, </span>
                    <span className="span-about-two">Projetos</span>
                </h2>
                <div className="container-cards-projeto">
                    {projetos.map(({ id, description, image, linkGitHub, linkProject, tecnologies, title, challenge }) => (
                        <CardProjeto key={id}
                            id={id}
                            description={description}
                            image={image}
                            linkGitHub={linkGitHub}
                            linkProject={linkProject}
                            tecnologies={tecnologies}
                            title={title}
                            challenge={challenge}
                        />
                    ))}
                </div>
            </div>
        </SecondContainer>
    )
}

