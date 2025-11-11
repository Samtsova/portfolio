import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Main = styled.section`
    display: flex;
    min-height: 50vh;
    background-color: #d0e7fe;

    ${FlexWrapper} {
        padding-top: 40px;
        @media ${theme.media.bigTablet} {
            justify-content: center;
        }
    }
`;


const FhotoWrapper = styled.div`
    position: relative;
    z-index: 0;


    &::before {
        content: " ";
        position: absolute;
        top: -9px;
        left: -9px;
        bottom: -3px;
        right: -9px;
        border-radius: 230px;  
        background-image: linear-gradient(to top,${theme.colors.accentFirst}, ${theme.colors.accentSecond});
        z-index: -1;
    }

`
const Photo = styled.img`
    
    width: 329px;
    height: 329px;
    object-fit: cover;    
    border-radius: 230px;

    @media ${theme.media.tablet} {
        width: 250px;
        height: 250px;
    }
    `

const TextWrapper = styled.div`  
    text-align: start;
    background-image: linear-gradient( to right, ${theme.colors.accentFirst} 50%, ${theme.colors.accentSecond} 100%); 
    background-clip: text;
`

const Name = styled.span`
    ${font({weight: 700, Fmax: 58, Fmin: 34})}
    letter-spacing: -1px;
    color: transparent;
    background-clip: text;
`

const MainTitle = styled.h1`
    ${font({weight: 700, Fmax: 54, Fmin: 36})}
    letter-spacing: -1px;
    color: ${theme.colors.fontTitle};
    margin-bottom: 50px;

    p {
        display: none;
    }
`

const SmallText = styled.h2`
    ${font({weight: 700, Fmax: 54, Fmin: 24})}
    letter-spacing: -1px;
    color: ${theme.colors.fontTitle}
`

export  const S = {
    Main,
    FhotoWrapper,
    Photo,
    SmallText,
    MainTitle,
    Name,
    TextWrapper
}