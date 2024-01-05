import { ModalContext } from "../../Context/ModalContext";
import CardImg from "../CardImg";
import { ContainerProjeto } from "./styles";

import { useContext } from "react";

interface CardProjetoProps {
    id: number,
    image: any,
    title: string,
    tecnologies: any[],
    linkProject?: string,
    linkGitHub: string,
    description: string,
    challenge: string[] | undefined
}

export default function CardProjeto({
    id,
    image,
    title,
    tecnologies,
    linkProject,
    linkGitHub,
    description,
    challenge

}: CardProjetoProps) {

    const modalContext = useContext(ModalContext)

    const handleModal = () => {
        modalContext?.setIsModal(!modalContext.isModal)

        modalContext?.setdataProjeto({ id, description, image, linkGitHub, linkProject, tecnologies, title, challenge })
    }

    return (
        <ContainerProjeto id={id}>
            <CardImg img={image[0]} />
            <div className="descricao">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="controles">
                    <button onClick={handleModal}> Ver Mais </button>
                </div>
            </div>
        </ContainerProjeto>
    )
}


