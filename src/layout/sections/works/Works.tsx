import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { SectionText } from "../../../components/SectionText"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Work } from "./work/Work"
import project1 from "../../../assets/images/projects/project-1.jpg"
import project2 from "../../../assets/images/projects/project-2.jpg"
import project3 from "../../../assets/images/projects/project-3.jpg"
import project4 from "../../../assets/images/projects/project-4.jpg"
import project5 from "../../../assets/images/projects/project-5.jpg"
import project6 from "../../../assets/images/projects/project-6.jpg"
import { Container } from "../../../components/Container"

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <FlexWrapper wrap="wrap" justify="space-around">
                    <Work title="Project Tile goes here" text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" description="Tech stack : HTML , JavaScript, SASS, React" src={project1}/>
                    <Work title="Project Tile goes here" text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" description="Tech stack : HTML , JavaScript, SASS, React" src={project2}/>
                    <Work title="Project Tile goes here" text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" description="Tech stack : HTML , JavaScript, SASS, React" src={project3}/>
                    <Work title="Project Tile goes here" text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" description="Tech stack : HTML , JavaScript, SASS, React" src={project4}/>
                    <Work title="Project Tile goes here" text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" description="Tech stack : HTML , JavaScript, SASS, React" src={project5}/>
                    <Work title="Project Tile goes here" text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" description="Tech stack : HTML , JavaScript, SASS, React" src={project6}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
)
}

const StyledWorks = styled.section`

`