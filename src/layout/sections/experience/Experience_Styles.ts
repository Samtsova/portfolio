import styled from "styled-components"
import { font } from "../../../styles/Common"
import { theme } from "../../../styles/Theme"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"
import abstraction from '../../../assets/images/drawing.svg'

const Experience = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

${Container} {
    min-height: 815px;
    position: relative;

    &::after {
            content: "";     
            position: absolute;
            display: inline-block;
            right: 0;
            top: 45%;
            transform: translateY(-50%);
            width: 621px;
            height: 1019px;
            background-image: url(${abstraction});
            background-size: cover;  
    }    
};

${Container} > ${FlexWrapper} {
    max-width: 715px;
};

`

const Title = styled.h3`
    ${font({weight: 700, Fmax: 42, Fmin: 32})}
    letter-spacing: -0.4px;
    color: ${theme.colors.fontTitle};
    margin-bottom: 30px;


`
const Text = styled.p`    
    ${font({Fmax: 18, Fmin: 14})}
    margin-bottom: 20px;   
`

export const S = {
    Text,
    Title,
    Experience
}