//Styled-components
import { Wrapper } from "./styles";

export interface  CardProjectProps {

}

export default function CardProject (props:CardProjectProps) {

  return (
      <Wrapper>       
        <div className="image">
            
        </div>
        <div className="content">
            <h1>Nome Projeto</h1>
            <h3>Tecnologias</h3>
            <div className="wrapperSpan">
                <button>TypeScript</button>
                <button>JavaScript</button>
                <button>React</button>
            </div>  
            <div className="wrapperLink">
                <button>Projeto</button>
                <a href="https://github.com/CamposLeo95" target="_blank">
                    <i className="bi bi-github" />
                </a> 
            </div>  
        </div>
      </Wrapper>

  );
}
