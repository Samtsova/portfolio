import { Logo } from '../../components/logo/Logo';
import { DesktopMenu} from '../../components/menu/DesktopMenu';
import { SocialList } from '../../components/socialList/SocialList';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { MobileMenu } from '../../components/menu/MobileMenu';
import { S } from './Header_styles'
import React from 'react';

export const Header :React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize =() => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])
    
    return (
        <S.Headers>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <Logo/>
                    <FlexWrapper align='center'>
                        
                        {width < breakpoint ? < MobileMenu /> : <DesktopMenu />}
                        
                        <SocialList />
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Headers>
    )
}


