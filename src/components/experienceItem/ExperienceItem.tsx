import { Link } from "../link/Link"
import { FlexWrapper } from "../FlexWrapper";
import { S } from "./ExperienceItem_Styles"

type ExperienceItemPropsType = {
    position: string;
    organisationName: string;
    location: string;
    period: string;
    workDay: string
}

export const ExperienceItem: React.FC<ExperienceItemPropsType> = (props: ExperienceItemPropsType) => {
    return (
        <S.ExperienceItem>
            <FlexWrapper direction="column">
                <S.ExperienceDiscription>{props.position}</S.ExperienceDiscription>
                    <FlexWrapper >
                        <Link iconId="workPlace" textLink={props.organisationName} width="12px" height="12px" viewBox="0 0 12 12"/>
                        <Link iconId="location" textLink={props.location} width="12px" height="12px" viewBox="0 0 12 12"/> 
                    </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper  direction="column" justify="center"  >
                <span>{props.workDay }</span>    
                <Link iconId="calendar" width="16px" height="12px" viewBox="0 0 16 12" textLink={props.period} />   
            </FlexWrapper>
        </S.ExperienceItem>
    )
}


