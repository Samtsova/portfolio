import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { SocialList } from "../../components/socialList/SocialList"
import { FlexWrapper } from "../../components/FlexWrapper"

const contacts = ["+375445810180", "TSamtsova@ibagroup.eu"]
const icons = ["github", "twitter", "linkedin"]
const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]


export const Footer = () => {
    return(
        <StyledFooter>
            <FlexWrapper justify="space-between">
                <Logo/>
                <Menu menuItems={contacts}/>
                <SocialList linkItems={icons}/>                
            </FlexWrapper>
            <FlexWrapper justify="space-between">
                <Menu menuItems={items}/>
                <Copyright>Designed and built by Samtsova with Love & Coffee</Copyright>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #fcde84;   
    min-height: 30vh;  
`

const Copyright = styled.small`
    
`