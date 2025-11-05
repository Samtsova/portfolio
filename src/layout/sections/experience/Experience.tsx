import { FlexWrapper } from "../../../components/FlexWrapper"
import { ExperienceItem } from "../../../components/experienceItem/ExperienceItem"
import { Container } from "../../../components/Container"
import { S } from "./Experience_Styles"

const experienceData = [
    {
        position: "Junior Web Developer",
        organisationName: "IBA IT Park",
        location: "Belarus",
        workDay: "Full Time",
        period: "Dec 2021 - Now" 
    },
    {
        position: "Junior Web Developer",
        organisationName: "BeFront",
        location: "Belarus",
        workDay: "Full Time",
        period: "May 2021 - Dec 2021" 
    },
    
]

const educationData = [
    {
        position: "Front-End Developer",
        organisationName: "It-Incubator",
        location: "Belarus",
        workDay: "Internship",
        period: "Dec 2020 - Jun 2021" 
    },
    {
        position: "Faculty of Construction, Economy and Organization of Production",
        organisationName: "Belarusian National Technical University",
        location: "Belarus",
        workDay: "Full Time",
        period: "Sept 2009 - Jun 2014" 
    },
    
]

export const Experience: React.FC = () => {
    return(       
        <S.Experience id={"about"}>
            <Container>
                    <FlexWrapper direction="column">
                        <S.Title>About Me</S.Title>
                        <S.Text>Front-End developer with experience in creating SPA using React, Redux, Typescript, JS, HTML, CSS. I am improving my skills in this direction and expanding them with new technologies. Ready to consider project work and full-time employment.</S.Text>
                        <S.Title>Work Experience</S.Title>

                            {experienceData.map((item, index) => {
                                return       <ExperienceItem 
                                position={item.position}
                                organisationName={item.organisationName}
                                location={item.location}
                                workDay={item.workDay}
                                period={item.period}
                                key={index}/>
                            })}
                        
                        <S.Title>Education</S.Title>

                            {educationData.map((item, index) => {
                                return       <ExperienceItem 
                                position={item.position}
                                organisationName={item.organisationName}
                                location={item.location}
                                workDay={item.workDay}
                                period={item.period}
                                key={index}/>
                            })}
                            
                    </FlexWrapper>                
            </Container>
        </S.Experience>
        
    )
}

