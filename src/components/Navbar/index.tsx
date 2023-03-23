import { HeaderContainer, SecondContainer } from './styles'

import NavBox from '../NavBox'

import { Link } from 'react-router-dom'

export default function Header(){

    return(
        <HeaderContainer>
            <SecondContainer>
                <ul>
                    <Link to="/">
                        <NavBox link="Home" icon="bi bi-house"/>
                    </Link>
                    <Link to="/skills">
                        <NavBox link="Skills" icon="bi bi-journal-text"/>
                    </Link>
                    <Link to="/projects">
                        <NavBox link="Projetos" icon="bi bi-briefcase"/>
                    </Link>
                    <Link to="/contacts">
                        <NavBox link="Contato" icon="bi bi-envelope"/>
                    </Link>             
                </ul>
            </SecondContainer>
        </HeaderContainer>
    )
}