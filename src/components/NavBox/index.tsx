// Styled-Components
import { Box } from "./styles"

interface NavBoxPros{
    link: string
    icon: string
    handleMenu: () => void
        
    }

export default function MainContainer({ link, icon, handleMenu }:NavBoxPros){

    return(
        <Box>
            <li className={icon} onClick={handleMenu}>{link}</li>
        </Box>
    )
}