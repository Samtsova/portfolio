
import { useState } from "react";
import { Menu } from "./Menu";
import {S} from './Menu_Styles'

export const MobileMenu:React.FC = () => {

    const [menuIsOpen, setMenuIsOpen] = useState<boolean>( false );
    const onBurgerBtnClick = () => {setMenuIsOpen( !menuIsOpen )}

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <Menu />      
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
}


