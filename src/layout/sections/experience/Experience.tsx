import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Icon } from "../../../components/icon/Icon"
import { ExperienceItem } from "../../../components/experienceItem/ExperienceItem"

export const Experience = () => {
    return(       
        <StyledExperience>
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
            <Icon iconId="abstaction" width="621px" height="1019px" viewBox="0 0 621 1019"/>
        </StyledExperience>
        
    )
}

const StyledExperience = styled.section`
background-color: #f6d1f9;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Title = styled.h3`
    
`
const Text = styled.p`
    
`
