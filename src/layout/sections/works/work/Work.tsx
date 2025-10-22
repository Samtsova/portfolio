import styled from "styled-components"
import { Link } from "../../../../components/link/Link"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { theme } from "../../../../styles/Theme"

type workPropsType = {
    title: string
    text: string
    description: string
    src: string
}

export const Work = (props: workPropsType) => {
    return (
        <StylledWork>
            <Image src ={props.src}/>
            <TextWrapper>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Description>{props.description}</Description>
                <FlexWrapper justify="space-between">
                    <Link iconId="link" textLink="Live Preview"/>
                    <Link iconId="gitLink" textLink="View Code"/>
                </FlexWrapper>
            </TextWrapper>
        </StylledWork>
    )
}

const StylledWork = styled.div`
    width: 375px;
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0px #00000033;
    margin-bottom: 60px
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;   
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

`
const TextWrapper = styled.div`
    padding: 20px;
`

const Title = styled.h3`
    color: ${theme.colors.fontBlack};
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 20px;
`

const Text = styled.p`
    font-weight: 300;
    font-size: 18px;    
    margin-bottom: 20px;
`
const Description = styled.p`
    
    margin-bottom: 20px;
`
    


