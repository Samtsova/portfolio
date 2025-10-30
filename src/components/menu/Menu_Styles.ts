import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";


const Link = styled.a`
    ${font({family: 'DM Sans' , weight: 500, Fmax: 20, Fmin: 16})}
    color: ${theme.colors.fontDark};
    text-align: center;
    color: transparent
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    /* outline: 1px solid red; */
    color: ${theme.colors.fontDark};

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const MenuItem =styled.li`
position: relative;

&::before {
    content: " ";
    display: inline-block;
    height: 1px;
    background-image: linear-gradient( to right, ${theme.colors.accentFirst} 50%, ${theme.colors.accentSecond} 100%);

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
}

&:hover {
    &::before {
        transform: scale(1);
    }

    ${Mask} {
    transform: skewX(12deg) translateX(-2px);
    color: ${theme.colors.fontTitle};

    & + ${Mask} {
    transform: skewX(12deg) translateX(-2px);
    }
}
} 
`


const MobileMenu = styled.nav<any>`
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: none;
    background-image:  linear-gradient( to right, ${theme.colors.accentFirst} 20%, ${theme.colors.accentSecond} 100%); 
    opacity: 0.9;

    ${props => props.isOpen && css<{isOpen:boolean}>`        
        display: flex;
        justify-content: center;
        align-items: center;
    `}


    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 40px;
    }

    ul:last-child {
        margin-right: 30px;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
        position: fixed;
        top: -70px;
        right: -40px;
        width: 150px;
        height: 150px;
        z-index: 999999;

        span {
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.fontDark};
            position: absolute;
            left: 40px;
            bottom: 50px;

            ${props => props.isOpen && css<{isOpen:boolean}>`        
                background-color: rgba(255,255,255,0);
                
            `}    

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.fontDark};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen:boolean}>`        
                transform: rotate(-45deg) translateY(0);                
                background-color: white;
            `}  
        }
        
        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.fontDark};
            position: absolute;
            transform: translateY(10px);


            ${props => props.isOpen && css<{isOpen:boolean}>`       
                width: 36px;
                transform: rotate(45deg) translateY(0);                
                background-color: white;
        `}  
        }
        }

            ${props => props.isOpen && css<{isOpen:boolean}>`        
                top: -100px;
                right: 0;
                width: 200px;
                height: 200px;
            `}   
        

`



const DesktopMenu = styled.nav<any>`
    ul {
        display: flex;
        gap: 55px;

        @media ${theme.media.bigTablet}{
            gap: 20px;
        }
    }

    ul:last-child {
        margin-right: 30px;
    }

`



export const S = {
    Link,
    MenuItem,
    Mask,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu
}

