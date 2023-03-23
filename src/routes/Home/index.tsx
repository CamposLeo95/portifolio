import { HomeContainer, SecondContainer, CardLeft } from './styles'

import CardText from '../../components/CardText'

export default function Home(){

    return(
        <HomeContainer>
            <SecondContainer>
                <CardLeft>
                    <div></div>  
                    <div></div> 
                </CardLeft>
                <CardText 
                    topText=" Olá, eu sou..."
                    title="Leonardo Campos"
                    subtitle="Front End Developer"
                    mainText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae ad nostrum nesciunt ex inventore est iusto aperiam repellendus suscipit. Ipsa vel at quos voluptas voluptatum dicta! Repudiandae, culpa dolor.Aliquam repudiandae ad nostrum nesciunt ex inventore est iusto aperiam repellendus suscipit. Ipsa vel at quos voluptas voluptatum dicta! Repudiandae, culpa dolor."
                    color="#06c6e7"
                    shadow={true}
                    secondWidth={90}
                    textColor={"#222222"}
                    bgColor={"transparent"}
                />             
            </SecondContainer>
        </HomeContainer>
    )
}