import { useContext, useRef } from 'react'
import * as S from './styles'
import { ModalContext } from '../../Context/ModalContext'
import SliderProjectImg from '../SliderProjectImg'

export default function ModalProjeto() {

    const containerRef = useRef<HTMLDivElement | null>(null)

    const modalContext = useContext(ModalContext)

    const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        containerRef.current == event.target && modalContext?.setIsModal(!modalContext.isModal)

    }

    return (

        <S.Container onClick={(event) => closeModal(event)} ref={containerRef} >

            <S.CardModal>
                <S.FieldModal>
                    <S.Content>
                        <S.SubTitle>
                            {modalContext?.dataProjeto?.title}
                        </S.SubTitle>
                    </S.Content>
                </S.FieldModal>
                <S.FieldModal>
                    <S.Title>Descrição</S.Title>
                    <S.Content>{modalContext?.dataProjeto?.description}</S.Content>
                </S.FieldModal>
                <S.FieldModal>
                    <S.Title>Imagens</S.Title>
                    <S.ContainerSlider>
                        <SliderProjectImg
                            images={modalContext?.dataProjeto?.image}
                            key={modalContext?.dataProjeto?.id}
                        />
                    </S.ContainerSlider>
                </S.FieldModal>
                <S.FieldModal>
                    {modalContext?.dataProjeto?.challenge && <S.Title>Dificuldades</S.Title>}
                    {modalContext?.dataProjeto?.challenge
                        && modalContext?.dataProjeto?.challenge.map((challenge) => (
                            <S.Content key={challenge}> - {challenge}</S.Content>
                        ))}
                </S.FieldModal>
                <S.FieldModal>
                    <S.Title>Tecnologias </S.Title>
                    <S.ContentTech>
                        {modalContext?.dataProjeto?.tecnologies?.map((tech) => (
                            <S.Icon key={tech} src={tech} alt={tech} width={30} />
                        ))}
                    </S.ContentTech>
                </S.FieldModal>
                <S.FieldModal>
                    <S.ContentTech>
                        <S.Link href={modalContext?.dataProjeto?.linkGitHub} target='_blank'>GiHub</S.Link>
                        {modalContext?.dataProjeto?.linkProject
                            && <S.Link href={modalContext?.dataProjeto?.linkProject} target='_blank'>Projeto</S.Link>}
                    </S.ContentTech>
                </S.FieldModal>
            </S.CardModal>
        </S.Container>
    )
}