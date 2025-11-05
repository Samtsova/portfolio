import styled from "styled-components"
import { font } from "../../../styles/Common"
import { theme } from "../../../styles/Theme"
import { FlexWrapper } from "../../../components/FlexWrapper"

const Works = styled.section`
    position: relative;

    ${FlexWrapper}{
        gap: 10px
    }
`

const Work = styled.div`
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
    ${font({ weight: 500, Fmax: 28, Fmin: 20})}
    color: ${theme.colors.fontBlack};
    margin-bottom: 20px;
`

const Text = styled.p`
    ${font({ weight: 300, Fmax: 18, Fmin: 14})}
    margin-bottom: 20px;
`
const Description = styled.p`
    ${font({Fmax: 16, Fmin: 12})}
    margin-bottom: 20px;
`

export const S = {
    Description,
    Text,
    Title,
    TextWrapper,
    Image,
    Work,
    Works
}