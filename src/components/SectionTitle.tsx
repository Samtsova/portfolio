import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
    ${font({weight: 700, Fmax: 48, Fmin: 32})}
    color: ${theme.colors.fontTitle};
    text-align: center;  
    letter-spacing: 0px;
    margin-bottom: 30px;

`