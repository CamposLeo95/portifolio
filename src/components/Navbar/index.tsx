import { HeaderContainer, SecondContainer} from './styles'

import NavBox from '../NavBox'

import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header(){
    
    const [showHideMenu, setShowHideMenu] = useState(false)

    const handleMenu = () => {
        setShowHideMenu(!showHideMenu)
        console.log(!showHideMenu);
    }

    return(
        <HeaderContainer showHideMenu={showHideMenu}>
            <button onClick={handleMenu} >
                {showHideMenu 
                    ? <i className="bi bi-x-circle"/>
                    :<i className="bi bi-list" />}                    
            </button>
            <SecondContainer showHideMenu={showHideMenu}>    
                <ul>
                    <Link to="/">
                        <NavBox 
                            link="Home" 
                            icon="bi bi-house" 
                            handleMenu={handleMenu}
                        />
                    </Link>
                    <Link to="/skills">
                        <NavBox 
                            link="Skills" 
                            icon="bi bi-journal-text" 
                            handleMenu={handleMenu}
                        />
                    </Link>
                    <Link to="/projects">
                        <NavBox 
                            link="Projetos" 
                            icon="bi bi-briefcase"
                            handleMenu={handleMenu}
                        />
                    </Link>
                    <Link to="/contacts">
                        <NavBox 
                            link="Contato" 
                            icon="bi bi-envelope"
                            handleMenu={handleMenu}
                        />
                    </Link>             
                </ul>
            </SecondContainer>
        </HeaderContainer>
    )
}