import styled from "styled-components"
import { Link } from "../../../../components/link/Link"
import { FlexWrapper } from "../../../../components/FlexWrapper"

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
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Description>{props.description}</Description>
            <FlexWrapper justify="space-around">
                <Link iconId="link" textLink="Live Preview"/>
                <Link iconId="gitLink" textLink="View Code"/>
            </FlexWrapper>
        </StylledWork>
    )
}

const StylledWork = styled.div`
    background-color: #99f1cb;
    max-width: 375px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;    
`

const Title = styled.h3`
`

const Text = styled.p`
    
`
const Description = styled.p`
    
`

