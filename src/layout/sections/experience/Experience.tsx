import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { ExperienceItem } from "../../../components/experienceItem/ExperienceItem"
import { Container } from "../../../components/Container"
import abstraction from '../../../assets/images/drawing.svg'
import { theme } from "../../../styles/Theme"

export const Experience = () => {
    return(       
        <StyledExperience>
            <Container>
                    <FlexWrapper direction="column">
                        <Title>About Me</Title>
                        <Text>Front-End developer with experience in creating SPA using React, Redux, Typescript, JS, HTML, CSS. I am improving my skills in this direction and expanding them with new technologies. Ready to consider project work and full-time employment.</Text>
                        <Title>Work Experience</Title>
                            <ExperienceItem 
                                position="Junior Web Developer" 
                                organisationName="IBA IT Park"
                                location="Belarus"
                                workDay="Full Time"
                                period="Dec 2021 - Now"/>
                            <ExperienceItem 
                                position="Junior Web Developer" 
                                organisationName="BeFront"
                                location="Belarus"
                                workDay="Full Time"
                                period="May 2021 - Dec 2021"/>
                        <Title>Education</Title>
                            <ExperienceItem
                                position="Front-End Developer" 
                                organisationName="It-Incubator"
                                location="Belarus"
                                workDay="Internship"
                                period="Dec 2020 - Jun 2021"/>
                            <ExperienceItem
                                position="Faculty of Construction, Economy and Organization of Production " 
                                organisationName="Belarusian National Technical University"
                                location="Belarus"
                                workDay="Full Time"
                                period="Sept 2009 - Jun 2014"/>
                    </FlexWrapper>                
            </Container>
        </StyledExperience>
        
    )
}

const StyledExperience = styled.section`
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
            top: -15%;
            right: -20%;
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
    font-weight: 700;
    font-size: 42px;
    letter-spacing: -0.4px;
    color: ${theme.colors.fontTitle};
    margin-bottom: 30px;
`
const Text = styled.p`
    font-weight: 400;
    font-size: 18px; 
    margin-bottom: 20px;   
`
