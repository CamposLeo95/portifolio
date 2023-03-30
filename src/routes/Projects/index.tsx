// Styled- Components
import { SecondContainer } from "./styles"

// Components
import MainContainer from "../../components/MainContainer"
import CardProject from "../../components/CardProject"

export default function Projects(){

    return(
        <MainContainer>
            <SecondContainer>   
                <CardProject />  
            </SecondContainer>
        </MainContainer>
        
    )
}