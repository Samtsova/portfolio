import photo from "../../../assets/images/c4616525-3d65-4f15-a781-e40eb85dda15_Photo.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"
import {S} from "./Main_Styles"
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main: React.FC= () => {
    return (
        <S.Main id={"main"}>
            <Container>
            <FlexWrapper align="center" justify="space-between" wrap="wrap">
                <S.TextWrapper>
                    <S.SmallText>Hi there,</S.SmallText>
                    <S.SmallText>My name is</S.SmallText>
                    <S.Name>Samtsova Tatsiana</S.Name>
                    <S.MainTitle>
                        <p>I'm a front-end developer</p>
                        <Typewriter
                                options={{
                                    strings: ["I'm a front-end developer"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                    </S.MainTitle>
                </S.TextWrapper>
                <Tilt
                    glareEnable={true} 
                    glareMaxOpacity={0.8} 
                    glareColor="#ffffff" 
                    glarePosition="bottom" 
                    glareBorderRadius="20px">
                    <S.FhotoWrapper>
                        <S.Photo src={photo} alt="photo"/>
                    </S.FhotoWrapper>
                </Tilt>
            </FlexWrapper>
            </Container>
        </S.Main>
    )
}
