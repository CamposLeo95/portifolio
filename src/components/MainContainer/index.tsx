// Styled-Components
import { ReactNode } from "react"
import { Container, Nuvem } from "./styles"

import NuvemPng from '../../assets/img/nuvem.png'

interface MainContainerProps{
    children: ReactNode
}

export default function MainContainer({ children }: MainContainerProps){

    return(
        <Container>
            <Nuvem 
                src={NuvemPng} 
                width={150}
                top={5}
                sec={45}
                delay={0}
                animation={'moviment'}
            />
            <Nuvem 
                src={NuvemPng} 
                width={200}
                left={-300}
                top={50}
                sec={65}
                delay={2}
                animation={'moviment'}
            />
            <Nuvem 
                src={NuvemPng} 
                width={350}
                top={350}
                left={-460}
                sec={120}
                delay={5}
                animation={'moviment'}
            />
            <Nuvem 
                src={NuvemPng} 
                width={350}
                top={200}
                left={200}
                sec={60}
                delay={0}
                animation={''}
            />
            <Nuvem 
                src={NuvemPng} 
                width={250}
                top={100}
                left={900}
                sec={60}
                delay={0}
                animation={''}
            />
            <Nuvem 
                src={NuvemPng} 
                width={400}
                top={500}
                left={500}
                sec={60}
                delay={0}
                animation={''}
            />
            <Nuvem 
                src={NuvemPng} 
                width={500}
                top={400}
                left={1100}
                sec={60}
                delay={0}
                animation={''}
            />
            <Nuvem 
                src={NuvemPng} 
                width={200}
                top={-70}
                left={-30}
                sec={60}
                delay={0}
                animation={''}
            />
            {children}
        </Container>
    )
}