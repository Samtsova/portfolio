import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";

export const Logo:React.FC = () => {

    return (
        <LogoLink onClick={()=>{scroll.scrollToTop()}}>
            <Icon iconId = {'logo'} width="50px" height="50px" viewBox="0 0 20 20"/>
        </LogoLink> 
    );
}

const LogoLink = styled.a`
    margin-right: 20px;
`