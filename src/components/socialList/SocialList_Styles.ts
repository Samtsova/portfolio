import styled from "styled-components"
import { theme } from "../../styles/Theme"

const SocialList = styled.ul`
    display: flex;
    
        @media ${theme.media.bigTablet} {
            display: none;
            
        }
    `

const SocialItem = styled.li`
    display: flex;
    align-items: center;
    margin: 0 10px;
`

const SocialLink = styled.a`
    
`

export const S = {
    SocialLink,
    SocialItem,
    SocialList
}