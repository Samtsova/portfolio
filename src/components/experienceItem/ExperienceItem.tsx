import styled from "styled-components"
import { Link } from "../link/Link"
import { Button } from "../Button"
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";

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
    justify-content: space-between;
    margin-bottom: 40px;
    position: relative;
    
    &::before {
        content: " ";
        display: inline-block;
        height: 2px;
        background-color: ${theme.colors.fontLine};
    
        position: absolute;
        bottom: -20px;
        left: 10px;
        right: 10px;
        z-index: 1; 
    }

    & > ${FlexWrapper}:first-child {
        width: 60%;

        & > ${FlexWrapper} > ${FlexWrapper}:first-child {   
            width: 80% ;
            justify-content: flex-start;
        }
    }

    & > ${FlexWrapper}:last-child {
        width: 30%;
        & >${FlexWrapper} {
            justify-content: flex-start;
        }
    }
    

`
const ExperienceDiscription = styled.h4`
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 1px;
` 
