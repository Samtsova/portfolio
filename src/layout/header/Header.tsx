import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { SocialList } from '../../components/socialList/SocialList';

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
const icons = ["github", "twitter", "linkedin"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
            <SocialList linkItems={icons} />
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #f1d6e0;
    display: flex;
    justify-content: space-between;

`

