import { Key } from "react";
import { Icon } from "../icon/Icon";
import { S } from "./SocialList_Styles"

const icons = [
        {name: "github", width: "30px", height: "30px", viewbox: "0 0 30 30"},  
        {name: "twitter", width: "32px", height: "32px", viewbox:"0 0 32 32"}, 
        {name: "linkedin", width: "30px", height: "30px", viewbox:"0 0 30 30"},
    ]

export const SocialList:React.FC = () => {

    return (
        <S.SocialList>
                {icons.map((item: { name: string; width: string; height: string; viewbox: string}, index: Key )=>{
                    return (
                        <S.SocialItem key={index}>
                            <S.SocialLink>
                                <Icon iconId = {item.name} width={item.width} height={item.height} viewBox={item.viewbox}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    )
                })}        
        </S.SocialList>
    );
}



