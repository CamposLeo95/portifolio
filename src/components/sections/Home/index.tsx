import { useEffect, useState } from "react"
import { MainContainer } from "./styles"

export default function Home() {

    const [subtitle, setSubtitle] = useState<string>('')
    const originalSubtitle = "Desenvolvedor React Front-End"

    const write = () => {
        const arraySubtitle = originalSubtitle.split('')

        arraySubtitle.forEach((letter, i) => {
            setTimeout(() => {
                setSubtitle(prev => prev + letter)
            }, 100 * i)
        })
    }

    useEffect(() => {
        write()
    }, [])

    return (
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
                    <h2>{subtitle}</h2>
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