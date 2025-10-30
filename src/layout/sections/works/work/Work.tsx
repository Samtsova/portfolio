import { Link } from "../../../../components/link/Link"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { S } from "../Works_Styled"

type workPropsType = {
    title: string
    text: string
    description: string
    src: string
}

export const Work: React.FC<workPropsType> = (props: workPropsType) => {
    return (
        <S.Work>
            <S.Image src ={props.src}/>
            <S.TextWrapper>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.Description>{props.description}</S.Description>
                <FlexWrapper justify="space-between">
                    <Link iconId="link" textLink="Live Preview"/>
                    <Link iconId="gitLink" textLink="View Code"/>
                </FlexWrapper>
            </S.TextWrapper>
        </S.Work>
    )
}


    


