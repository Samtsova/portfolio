import styled from "styled-components"
import { theme } from "../../styles/Theme"
import { font } from "../../styles/Common"
import { FlexWrapper } from "../../components/FlexWrapper"

const Footer = styled.footer`
    padding: 50px 0;

    ${FlexWrapper}:first-child {
        position: relative;
        margin-bottom: 80px;

        @media ${theme.media.bigTablet} {
            margin-bottom: 40px;
            padding-right: 30px;
        }
        
        @media ${theme.media.mobile} {
            flex-wrap: wrap;
            justify-content: center;    
        }

        ${FlexWrapper}{
            gap: 70px;

            @media ${theme.media.mobile} {
                margin-top: 20px;
                flex-wrap: wrap-reverse;
                justify-content: center;
                gap: 30px
        }
        }

        
            &::before {
                content: " ";
                display: inline-block;
                height: 2px;
                background-color: ${theme.colors.fontLine};
            
                position: absolute;
                left: -10px;
                right: -10px;
                bottom: -40px;
                z-index: 1; 

                @media ${theme.media.bigTablet} {
                    bottom: -20px
        }
            }
    }    

    ${FlexWrapper}:last-child {
    
        @media ${theme.media.bigTablet} {
            flex-wrap: wrap;
            justify-content: center;      
            gap: 20px     
        }
    }
`

const Contacts = styled.span`
    ${font({family: 'DM Sans' , weight: 500, Fmax: 18, Fmin: 16})}
    color: ${theme.colors.fontDark};
    text-align: center;
    line-height: 40px;
`
const CopyrightWrapper = styled.div`
    background-image: linear-gradient( to right, ${theme.colors.accentFirst} 50%, ${theme.colors.accentSecond} 100%); 
    background-clip: text;

    @media ${theme.media.tablet} {
        margin: 0 auto;
    }
`
const Copyright = styled.small`
    
`
const Gradient = styled.span`
    color: transparent;
    background-clip: text;
`

export const S = {
    Gradient,
    Copyright,
    CopyrightWrapper,
    Contacts,
    Footer
}