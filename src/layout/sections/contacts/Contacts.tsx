import { ElementRef, useRef } from "react"
import { Button } from "../../../components/Button"
import { Container } from "../../../components/Container"
import { SectionTitle } from "../../../components/SectionTitle"
import PlaceholderTypingEffect from "../../../components/usePlaceholderTypingEffect/PlaceholderTypingEffect"
import { S } from "./Contacts_Styles"
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: {
        target: any; preventDefault: () => void 
}) => {
    e.preventDefault();

    if (!form.current) return

    emailjs
        .sendForm('service_pxptlqh', 'template_2qjbv0z', form.current, {
        publicKey: 'w9Q5Y15gCwOE1CHPF',
        })
        .then(
        () => {
            console.log('SUCCESS!');
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
        );

        e.target.reset()
    };

    return (
            <S.Contacts id={"contact"}>
                <Container>
                    <SectionTitle>Contact</SectionTitle>
                    <S.Form ref={form} onSubmit={sendEmail}>   
                        <PlaceholderTypingEffect 
                            placeholderTexts={["name   "]} 
                            >
                                <S.Field required type="text" name="user_name"/>
                        </PlaceholderTypingEffect>
                        <PlaceholderTypingEffect 
                            placeholderTexts={["email  "]} 
                            >
                                <S.Field required type="text" name="user_email"/>
                        </PlaceholderTypingEffect> 
                        <PlaceholderTypingEffect 
                            placeholderTexts={["subject"]} 
                            >
                                <S.Field required type="text" name="subject"/>
                        </PlaceholderTypingEffect> 
                        <PlaceholderTypingEffect 
                            placeholderTexts={["message"]} 
                            >
                                <S.Field required as="textarea" name="message"/>
                        </PlaceholderTypingEffect>   

                        <Button type="submit"><span>Send message</span></Button>
                    </S.Form>  
                </Container>              
            </S.Contacts>        
    )
}
