import { FlexWrapper } from "../FlexWrapper";
import { Icon } from "../icon/Icon";
import { S } from "./Link_Styles"

type linkPropsType = {
    iconId: string
    textLink: string
    width?: string
    height?: string
    viewBox?: string

}

export const Link:React.FC<linkPropsType> = (props: linkPropsType) => {

    return (
        <FlexWrapper justify="center" align="center">
            <Icon iconId = {props.iconId} width={props.width || "20px"} height={props.height|| "20px"} viewBox={props.viewBox||"0 0 20 20"}/>
            <S.Link href="#">{props.textLink}</S.Link> 
        </FlexWrapper>
    );
}



