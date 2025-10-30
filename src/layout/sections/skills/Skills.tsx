import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle.tsx"
import { Icon } from "../../../components/icon/Icon"
import { SectionText } from "../../../components/SectionText.tsx"
import { Container } from "../../../components/Container.tsx"

export const Skills= () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>               
                <SectionText> Technologies I’ve been working with recently </SectionText>
                <FlexWrapper wrap="wrap" justify="space-between" gap="60px">
                    <Icon iconId = "html" viewBox="0 0 120 120"/>
                    <Icon iconId = "css" viewBox="0 0 120 120"/>
                    <Icon iconId = "js" viewBox="0 0 120 120"/>
                    <Icon iconId = "ts" viewBox="0 0 270 270"/>
                    <Icon iconId = "react" viewBox="0 0 120 120"/>
                    <Icon iconId = "redux" viewBox="0 0 120 120"/>
                    <Icon iconId = "angular" viewBox="0 0 272 272"/>
                    <Icon iconId = "nodeJS" viewBox="-16.5 0 289 289"/>
                    <Icon iconId = "git" viewBox="0 0 105 105"/>
                    <Icon iconId = "sql" viewBox="-8.78 0 70 70"/>
                    <Icon iconId = "docker" viewBox="0 0 1024 1024"/>
                    <Icon iconId = "gitSkill"viewBox="0 0 88 88"/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    )
}


const StyledSkills = styled.section`
`
