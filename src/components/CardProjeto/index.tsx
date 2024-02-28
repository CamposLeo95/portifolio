import { ModalContext } from "../../Context/ModalContext";
import * as S from "./styles";

import { useContext } from "react";
import { ProjetosProps } from "../../interfaces/interfaces";

export default function CardProjeto({
    id,
    image,
    title,
    tecnologies,
    linkProject,
    linkGitHub,
    description,
    challenge,
    video
}: ProjetosProps) {

    const modalContext = useContext(ModalContext)

    const handleModal = () => {
        modalContext?.setIsModal(!modalContext.isModal)

        modalContext?.setdataProjeto({ id, description, image, linkGitHub, linkProject, tecnologies, title, challenge, video })
    }


    return (
        <S.ContainerProjeto id={id}>
            <S.CardImg onClick={handleModal}>
                <S.Img src={image[0]} />
            </S.CardImg>
            <S.CardDescription>
                <S.Controls>
                    <S.Tecnologies>
                        {tecnologies && tecnologies.map((itens) => (
                            <img src={itens} width={"30px"} />
                        ))}
                    </S.Tecnologies>
                    <S.Button
                        onClick={handleModal}>
                        Ver Mais
                    </S.Button>
                </S.Controls>
            </S.CardDescription>
        </S.ContainerProjeto>
    )
}


