
import { Menu } from "./Menu";
import {S} from './Menu_Styles'

type mobileMenuItemPropsType = {
    menuItems: Array<string>,    
    fontSize?: string  
}



export const MobileMenu:React.FC<mobileMenuItemPropsType> = (props: mobileMenuItemPropsType) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <Menu menuItems={props.menuItems}/>      
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
}


