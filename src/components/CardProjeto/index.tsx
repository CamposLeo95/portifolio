import CardImg from "../CardImg";
import { ContainerProjeto } from "./styles";

interface CardProjetoProps {
    dataProjeto: {
        id: number,
        image: any,
        title: string,
        tecnologies: any[],
        linkProject: string,
        linkGitHub: string,
        description: string,
    }
}

export default function CardProjeto({ dataProjeto }: CardProjetoProps) {

    return (
        <ContainerProjeto id={dataProjeto.id}>
            <CardImg img={dataProjeto.image} />
            <div className="descricao">
                <h3>{dataProjeto.title}</h3>
                <p>{dataProjeto.description}</p>
                <div className="ferramentas">
                    {dataProjeto.tecnologies.map(tecnologie => (
                        <img src={tecnologie} alt={tecnologie} width={30} />
                    ))}
                </div>
                <div className="controles">
                    <a href={dataProjeto.linkProject} target="_blank">Projeto</a>
                    <a href={dataProjeto.linkGitHub} target="_blank">GitHub</a>
                </div>
            </div>
        </ContainerProjeto>
    )
}


