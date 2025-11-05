import { Button } from "../../../components/Button"
import { Container } from "../../../components/Container"
import { SectionTitle } from "../../../components/SectionTitle"
import PlaceholderTypingEffect from "../../../components/usePlaceholderTypingEffect/PlaceholderTypingEffect"
import { S } from "./Contacts_Styles"

export const Contact: React.FC = () => {
    return (
            <S.Contacts id={"contact"}>
                <Container>
                    <SectionTitle>Contact</SectionTitle>
                    <S.Form>   
                        <PlaceholderTypingEffect 
                            placeholderTexts={["name   "]} 
                            >
                                <S.Field type="text"/>
                        </PlaceholderTypingEffect> 
                        <PlaceholderTypingEffect 
                            placeholderTexts={["subject"]} 
                            >
                                <S.Field type="text"/>
                        </PlaceholderTypingEffect> 
                        <PlaceholderTypingEffect 
                            placeholderTexts={["message"]} 
                            >
                                <S.Field as="textarea"/>
                        </PlaceholderTypingEffect>                    
                        
                        {/* <S.Field placeholder="subject"/>
                        <S.Field placeholder="message" as="textarea"/> */}
                        <Button type="submit"><span>Send message</span></Button>
                    </S.Form>  
                </Container>              
            </S.Contacts>        
    )
}
