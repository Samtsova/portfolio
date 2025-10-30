import photo from "../../../assets/images/c4616525-3d65-4f15-a781-e40eb85dda15_Photo.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"
import {S} from "./Main_Styles"


export const Main: React.FC= () => {
    return (
        <S.Main>
            <Container>
            <FlexWrapper align="center" justify="space-between" wrap="wrap">
                <S.TextWrapper>
                    <S.SmallText>Hi there,</S.SmallText>
                    <S.SmallText>My name is</S.SmallText>
                    <S.Name>Samtsova Tatsiana</S.Name>
                    <S.MainTitle>I'm a front-end developer</S.MainTitle>
                </S.TextWrapper>
                <S.FhotoWrapper>
                    <S.Photo src={photo} alt="photo"/>
                </S.FhotoWrapper>
            </FlexWrapper>
            </Container>
        </S.Main>
    )
}
