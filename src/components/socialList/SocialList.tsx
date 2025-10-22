import { Key } from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";

export const SocialList = (props: {linkItems: any}) => {

    return (
        <StyleSocialList>
                {props.linkItems.map((item: { name: string; width: string; height: string; viewbox: string}, index: Key )=>{
                    return (
                        <SocialItem key={index}>
                            <SocialLink>
                                <Icon iconId = {item.name} width={item.width} height={item.height} viewBox={item.viewbox}/>
                            </SocialLink>
                        </SocialItem>
                    )
                })}        
        </StyleSocialList>
    );
}

const StyleSocialList = styled.ul`
    display: flex;
`

const SocialItem = styled.li`
    display: flex;
    align-items: center;
    margin: 0 10px;
`

const SocialLink = styled.a`
    
`

