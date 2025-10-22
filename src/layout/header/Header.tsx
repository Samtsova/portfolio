import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { SocialList } from '../../components/socialList/SocialList';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
const icons = [
        {name: "github", width: "30px", height: "30px", viewbox: "0 0 30 30"},  
        {name: "twitter", width: "32px", height: "32px", viewbox:"0 0 32 32"}, 
        {name: "linkedin", width: "30px", height: "30px", viewbox:"0 0 30 30"},
    ]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <Logo/>
                    <FlexWrapper align='center'>
                        <Menu menuItems={items}/>
                        <SocialList linkItems={icons} />
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color:${theme.colors.primaryBG};
    padding: 0 20px;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    z-index: 99999;
`

