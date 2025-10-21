import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Icon } from "../icon/Icon";

type linkPropsType = {
    iconId: string
    textLink: string
    width?: string
    height?: string
    viewBox?: string

}

export const Link = (props: linkPropsType) => {

    return (
        <FlexWrapper>
            <Icon iconId = {props.iconId} width={props.width || "20px"} height={props.height|| "20px"} viewBox={props.viewBox||"0 0 20 20"}/>
            <StyledLink href="#">{props.textLink}</StyledLink> 
        </FlexWrapper>
    );
}


const StyledLink = styled.a`
    
`

