//Styled-components
import { Wrapper } from "./styles";

export interface  CardProjectProps {
    datas: { 
        id: number,
        nameImage:string,
        title: string,
        tecnologies: string[],
        linkProject: string, 
        linkGitHub:string,
        description: string  
       }
}

export default function CardProject ({ datas }:CardProjectProps) {

  return (
      <Wrapper>       
        
        <div className="content">
            <h1>{datas.title}</h1>
            <h3>Tecnologias</h3>
            <div className="wrapperImg">
                {datas.tecnologies.map((data, id) =>(
                    <img className="tecImg" src={data} key={id} />
                ))}
            </div>  
            
        </div>
        <div className="description">
            <div className="textDescription">
                <p>
                    {datas.description}
                </p>
            </div>
            <div className="wrapperLink">
                <button>
                    <a href={datas.linkProject} target="_blank">
                        Projeto
                    </a>
                </button>
                <a href={datas.linkGitHub} target="_blank">
                    <i className="bi bi-github" />
                </a> 
            </div>  
        </div>
      </Wrapper>

  );
}
