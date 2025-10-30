import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Headers = styled.header`
    background-color:${theme.colors.primaryBG};
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    
  z-index: 99999;
`

export const S = {
    Headers
}

