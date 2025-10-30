import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionText = styled.p`
    ${font({weight: 400, Fmax: 32, Fmin: 24})}
    color: ${theme.colors.fontDark};
    text-align: center;
    margin-bottom: 100px;
`