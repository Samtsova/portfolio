import { Logo } from "../../components/logo/Logo"
import { DesktopMenu } from "../../components/menu/DesktopMenu"
import { SocialList } from "../../components/socialList/SocialList"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Container } from "../../components/Container"
import { S } from "./Footer_Styles"
import React from "react"


const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]


export const Footer: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
        const breakpoint = 576;
    
        React.useEffect(() => {
            const handleWindowResize =() => setWidth(window.innerWidth)
            window.addEventListener("resize", handleWindowResize);
    
            return () => window.removeEventListener("resize", handleWindowResize);
        }, [])
        
    return(
        <S.Footer>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>
                    <FlexWrapper>
                        <S.Contacts>+375445810180</S.Contacts>
                        <S.Contacts>TSamtsova@ibagroup.eu</S.Contacts>
                        <SocialList />
                    </FlexWrapper>                
                </FlexWrapper>
                <FlexWrapper justify="space-between">
                    {width <breakpoint ? <></> : <DesktopMenu />}
                    <S.CopyrightWrapper>
                        <S.Copyright>Designed and built by  
                        <S.Gradient> Samtsova </S.Gradient>
                    with <S.Gradient>Love</S.Gradient> & <S.Gradient>Coffee</S.Gradient></S.Copyright>
                    </S.CopyrightWrapper>
                </FlexWrapper>
            </Container>
        </S.Footer>
    )
}

