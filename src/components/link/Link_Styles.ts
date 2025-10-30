import styled from "styled-components"
import { theme } from "../../styles/Theme"
import { font } from "../../styles/Common"

const Link = styled.a`
    margin-left: 10px;
    color: ${theme.colors.fontLight};
    ${font({weight: 500, Fmax: 12, Fmin: 8 })}
    line-height: 26px;
    letter-spacing: 1px;
`

export const S = {
    Link 
}