import styled from "styled-components"
import photo from "../../../assets/images/c4616525-3d65-4f15-a781-e40eb85dda15_Photo.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"

export const Main= () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align="center" justify="space-between">
                <TextWrapper>
                    <SmallText>Hi there,</SmallText>
                    <SmallText>My name is</SmallText>
                    <Name>Samtsova Tatsiana</Name>
                    <MainTitle>I'm a front-end developer</MainTitle>
                </TextWrapper>
                <FhotoWrapper>
                    <Photo src={photo} alt="photo"/>
                </FhotoWrapper>
            </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    display: flex;
    min-height: 100vh;
    background-color: #d0e7fe;
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
    
    width: 349px;
    height: 349px;
    object-fit: cover;    
    border-radius: 230px;
    `

const TextWrapper = styled.div`  
    text-align: start;
    background-image: linear-gradient( to right, ${theme.colors.accentFirst} 50%, ${theme.colors.accentSecond} 100%); 
    background-clip: text;
`

const Name = styled.span`
    font-weight: 700;
    font-size: 58px;
    letter-spacing: -1px;
    color: transparent;
    background-clip: text;
`

const MainTitle = styled.h1`
    font-weight: 700;
    font-size: 58px;
    letter-spacing: -1px;
    color: ${theme.colors.fontTitle}
`

const SmallText = styled.h2`
    font-weight: 700;
    font-size: 58px;
    letter-spacing: -1px;
    color: ${theme.colors.fontTitle}
`