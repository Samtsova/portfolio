import styled from "styled-components"
import { Link } from "../link/Link"
import { Button } from "../Button"
import { FlexWrapper } from "../FlexWrapper";

type ExperienceItemPropsType = {
    position: string;
    organisationName: string;
    location: string;
    period: string;
    workDay: string
}

export const ExperienceItem = (props: ExperienceItemPropsType) => {
    return (
        <StyledExperienceItem>
            <FlexWrapper direction="column">
                <ExperienceDiscription>{props.position}</ExperienceDiscription>
                    <FlexWrapper >
                        <Link iconId="workPlace" textLink={props.organisationName} width="12px" height="12px" viewBox="0 0 12 12"/>
                        <Link iconId="location" textLink={props.location} width="12px" height="12px" viewBox="0 0 12 12"/> 
                    </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper  direction="column" justify="center">
                <Button>{props.workDay }</Button>    
                <Link iconId="calendar" textLink={props.period} />   
            </FlexWrapper>
        </StyledExperienceItem>
    )
}

const StyledExperienceItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between

`
const ExperienceDiscription = styled.h4`
    
`
