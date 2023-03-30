// Styled-Components
import { SecondContainer, CardPhoto } from './styles'

// Components
import CardText from '../../components/CardText'
import MainContainer from '../../components/MainContainer'

//Images
import Self from '../../assets/img/self.jpg'

// Data
import { resumo } from '../../assets/Data/data'

export default function Home(){

    return(
        <MainContainer>
            <SecondContainer>
                <CardText 
                    topText={resumo[0].topText}
                    title={resumo[0].title}
                    subtitle={resumo[0].subtitle}
                    mainText={resumo[0].mainText}
                    color="#66fff2"
                    shadow={true}
                    secondWidth={90}
                    textColor={"#ffffff"}
                    bgColor={"#161616c0"}
                    boxShadow={false}
                    animation={"startedTop"}
                />       
                <CardPhoto>
                    <div>
                        <img src={Self} />
                    </div>
                </CardPhoto>      
            </SecondContainer>
        </MainContainer>
    )
}