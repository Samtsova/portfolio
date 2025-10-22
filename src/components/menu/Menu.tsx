import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Menu = (props: {menuItems: Array<string>}) => {

    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index)=>{
                    return (
                        <ListItem key={index}>
                            <Link href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            </Link>
                        </ListItem>
                    )
                })}                
            </ul>
        </StyledMenu>
    );
}

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 60px;
    }

    ul:last-child {
        margin-right: 30px;
    }
`

const Link = styled.a`
    font-family: 'DM Sans';
    font-weight: 500;
    font-size: 20px;
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

const ListItem =styled.li`
position: relative;

&::before {
    content: " ";
    display: inline-block;
    height: 1px;
    background-color: ${theme.colors.accentSecond};

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