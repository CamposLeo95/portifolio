// Styled-Components
import { MainContainer } from './styles'
import Container from '../../Container'

export default function Home(){


    return(
            <MainContainer>

                    <div className='banner'>
                        <div className='texto-principal'>
                            <h1>
                                <span className='span-title-one'>Olá eu sou,</span> 
                                <span className='span-title-two'>Leonardo </span> 
                                <span className='span-title-three'>Campos</span>
                            </h1>
                        </div>
                            <div className='conteudo'>
                                <h2>Desenvolvedor React Front-End</h2>
                                <p>
                                    Sou um desenvolvedor front-end especializado em React, com uma paixão por criar interfaces dinâmicas e envolventes.
                                </p>  
                                <div className='contatos'>
                                    <a href="https://www.linkedin.com/in/leonardo-a-campos/" target="_blank">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                    <a href="https://wa.me/5511958639720" target="_blank">
                                        <i className="bi bi-whatsapp" />
                                    </a>
                                    <a href="https://github.com/CamposLeo95" target="_blank">
                                    <i className="bi bi-github" />
                                    </a> 
                                </div>  
                            </div>     
                    </div>
            </MainContainer>
    )
}