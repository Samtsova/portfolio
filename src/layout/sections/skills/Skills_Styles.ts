import styled from "styled-components"
import { theme } from "../../../styles/Theme"

const Skills = styled.section`  
`

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
    width: 195px;

    @media ${theme.media.bigTablet} {
            width: 90px;
            margin: 30px 20px;
        }
        
        @media ${theme.media.mobile} {            
            flex-grow: 1;
            width: 70px;
        }
`


export const S = {
    Skills,
    IconWrapper
}