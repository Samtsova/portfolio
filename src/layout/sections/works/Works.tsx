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
import { S } from "./Works_Styled"

const workData = [
    {
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        description: "Tech stack : HTML , JavaScript, SASS, React",
        src: project1
    },
    {
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        description: "Tech stack : HTML , JavaScript, SASS, React",
        src: project2
    },
    {
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        description: "Tech stack : HTML , JavaScript, SASS, React",
        src: project3
    },
    {
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        description: "Tech stack : HTML , JavaScript, SASS, React",
        src: project4
    },
    {
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        description: "Tech stack : HTML , JavaScript, SASS, React",
        src: project5
    },
    {
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        description: "Tech stack : HTML , JavaScript, SASS, React",
        src: project6
    }
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <FlexWrapper wrap="wrap" justify="space-around">
                    {workData.map((item, index) => {
                        return  <Work title={item.title}
                            text={item.text}
                            description={item.description}
                            src={item.src}
                            key={index}/>
                    })}

                </FlexWrapper>
            </Container>
        </S.Works>
)
}

