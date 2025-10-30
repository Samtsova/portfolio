import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    padding: 10px;
    color: ${theme.colors.fontDark};

    
    position: relative;
    z-index: 0;

    &:hover {
        &::after {
            content: " ";
                    position: absolute;
                    display: inline-block;
                    height: 4px;
                    width: 70%;
                    bottom: 5px;
                    left: 50%;
                    transform: translateX(-50%);
                    border-radius: 5px;
                    background-image: linear-gradient( to right, ${theme.colors.accentFirst} 50%, ${theme.colors.accentSecond} 100%);
                    z-index: -1;
        }
    }
`