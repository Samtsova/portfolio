import styled from "styled-components"
import photo from "../../../assets/images/c4616525-3d65-4f15-a781-e40eb85dda15_Photo.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper"

export const Main= () => {
    return (
        <StyledMain>
            <FlexWrapper align="center" justify="space-around">
                <div>
                    <h2>Hi,</h2>
                    <h2>My name is</h2>
                    <Name>Samtsova Tatsiana</Name>
                    <MainTitle>I'm a front-end developer</MainTitle>
                </div>

                <Photo src={photo} alt="photo"/>
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    min-height: 50vh;
    background-color: #d0e7fe;
`;

const Photo = styled.img`
    width: 349px;
    height: 349px;
    object-fit: cover;    
    border-radius: 230px;
`

const Name = styled.h2``

const MainTitle = styled.h1``