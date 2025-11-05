import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle.tsx"
import { Icon } from "../../../components/icon/Icon"
import { SectionText } from "../../../components/SectionText.tsx"
import { Container } from "../../../components/Container.tsx"
import { S } from "./Skills_Styles.ts"
import { Fade } from "react-awesome-reveal"

const skillData =[
    {
        iconId: "html",
        viewBox: "0 0 120 120"
    },
    {
        iconId: "css",
        viewBox: "0 0 120 120"
    },
    {
        iconId: "js",
        viewBox: "0 0 120 120"
    },
    {
        iconId: "ts",
        viewBox: "0 0 270 270"
    },
    {
        iconId: "react",
        viewBox: "0 0 120 120"
    },
    {
        iconId: "redux",
        viewBox: "0 0 120 120"
    },{
        iconId: "angular",
        viewBox: "0 0 272 272"
    },
    {
        iconId: "nodeJS",
        viewBox: "-16.5 0 289 289"
    },
    {
        iconId: "git",
        viewBox: "0 0 105 105"
    },
    {
        iconId: "sql",
        viewBox: "-8.78 0 70 70"
    },
    {
        iconId: "docker",
        viewBox: "0 0 1024 1024"
    },
    {
        iconId: "gitSkill",
        viewBox: "0 0 88 88"
    }
]

export const Skills: React.FC= () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>               
                <SectionText> Technologies I’ve been working with recently </SectionText>
                <FlexWrapper wrap="wrap" justify="center" >
                    <Fade cascade={true} damping={0.1}>
                        {skillData.map((item, index) => {
                            return <S.IconWrapper>
                            <Icon iconId = {item.iconId} viewBox={item.viewBox} key={index}/>
                        </S.IconWrapper>                    
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    )
}


