import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Button } from "../../../components/Button"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"

export const Contact = () => {
    return (
            <StyledContacts>
                <Container>
                    <SectionTitle>Contact</SectionTitle>
                    <StyledForm>
                        <Field placeholder="name"/>
                        <Field placeholder="subject"/>
                        <Field placeholder="message" as="textarea"/>
                        <Button type="submit">Send message</Button>
                    </StyledForm>  
                </Container>              
            </StyledContacts>        
    )
}

const StyledContacts = styled.section`
`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 155px;
    }
`

const Field = styled.input`
    width: 100%;
    border: 1px solid ${theme.colors.fontDark};
    padding: 7px 15px;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.fontBlack};

    &::placeholder {
        text-transform: capitalize;
    }
    
    &:focus-visible{
        outline: 1px solid ${theme.colors.accentFirst};
    }
`