import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { Button } from "../../../components/Button"

const Contacts = styled.section`
    position: relative;
`

const Form = styled.form`
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

    ${Button} {         

        &:hover {
            background-image: linear-gradient( to right, ${theme.colors.accentFirst} 50%, ${theme.colors.accentSecond} 100%); 
            background-clip: text;

            span {
                color: transparent;
                background-clip: text;
            }
        }

    }
`

const Field = styled.input`
    width: 540px;
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

    @media ${theme.media.tablet} {
        width: calc(100vw - 100px)
    }
`

export const S = {
    Field,
    Form,
    Contacts
}