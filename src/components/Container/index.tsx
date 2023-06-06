// Styled-Components
import { ReactNode } from "react"
import { MainContainer } from "./styles"

interface ContainerProps{
    children: ReactNode
}

export default function Container({ children }: ContainerProps){

    return(
        <MainContainer>
            {children}
        </MainContainer>
    )
}