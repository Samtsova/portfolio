import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle.tsx"
import { Icon } from "../../../components/icon/Icon"
import { SectionText } from "../../../components/SectionText.tsx"

export const Skills= () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionText> Technologies I’ve been working with recently</SectionText>
            <FlexWrapper wrap="wrap" justify="space-between">
                <Icon iconId = {'html'} width={'16%'} viewBox="0 0 120 120"/>
                <Icon iconId = {'css'}  width={'16%'} viewBox="0 0 120 120"/>
                <Icon iconId = {'js'}  width={'16%'} viewBox="0 0 120 120"/>
                <Icon iconId = {'ts'}  width={'16%'} viewBox="0 0 270 270"/>
                <Icon iconId = {'react'}  width={'16%'} viewBox="0 0 120 120"/>
                <Icon iconId = {'redux'}  width={'16%'} viewBox="0 0 120 120"/>
                <Icon iconId = {'angular'}  width={'16%'} viewBox="0 0 272 272"/>
                <Icon iconId = {'nodeJS'}  width={'16%'} viewBox="-16.5 0 289 289"/>
                <Icon iconId = {'git'}  width={'16%'} viewBox="0 0 105 105"/>
                <Icon iconId = {'sql'}  width={'16%'} viewBox="-8.78 0 70 70"/>
                <Icon iconId = {'docker'}  width={'16%'} viewBox="0 0 1024 1024"/>
                <Icon iconId = {'gitSkill'}  width={'16%'} viewBox="0 0 88 88"/>
            </FlexWrapper>
        </StyledSkills>
    )
}


const StyledSkills = styled.div`
    background-color: #caf7ca;
    min-height: 50vh;
`
