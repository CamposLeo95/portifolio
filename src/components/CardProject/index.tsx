import { ModalContext } from "../../Context/ModalContext";
import * as S from "./styles";

import { useContext } from "react";
import { ProjetosProps } from "../../interfaces/interfaces";

import iconGithub from '../../assets/img/icons/github.png'

export default function CardProject({
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
                <S.MaskImage>
                    <S.MaskImageCardText>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </S.MaskImageCardText>
                </S.MaskImage>
                <S.Image src={image[0]} />
            </S.CardImg>
            <S.CardDescription>
                <S.Controls>
                    <S.Tecnologies>
                        {tecnologies && tecnologies.map((itens) => (
                            <S.TecnologiesIcons src={itens} />
                        ))}
                    </S.Tecnologies>
                    <S.Charge>
                        <div className="bolinha"></div>
                    </S.Charge>
                    <S.CardButtons>
                        <a href={linkGitHub} target="_blank">
                            <S.Button >
                                <img src={iconGithub} alt="github icon" />
                                GitHub
                            </S.Button>
                        </a>
                        <S.Button onClick={handleModal}>
                            Ver Mais
                        </S.Button>
                    </S.CardButtons>
                </S.Controls>
            </S.CardDescription>
        </S.ContainerProjeto>
    )
}


