import { Icon } from "../icon/Icon";
import styled from "styled-components";

export const SocialList = (props: {linkItems: Array<string>}) => {

    return (
        <StyleSocialList>
                {props.linkItems.map((item, index)=>{
                    return (
                        <SocialItem key={index}>
                            <SocialLink>
                                <Icon iconId = {item} viewBox="0 0 60 30"/>
                            </SocialLink>
                        </SocialItem>
                    )
                })}        
        </StyleSocialList>
    );
}

const StyleSocialList = styled.ul`
    display: flex;
    gap: 30px;

`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    
`