

import { Box } from "./styles"

interface NavBoxPros{
    link: string
    icon: string
}

export default function NavBox({ link, icon }:NavBoxPros){

    return(
        <Box>
            <li className={icon}>{link}</li>
        </Box>
    )
}