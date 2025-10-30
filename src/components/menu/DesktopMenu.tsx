import { Menu } from "./Menu";
import { S } from './Menu_Styles'

type menuItemPropsType = {
    menuItems: Array<string>
}

export const DesktopMenu: React.FC<menuItemPropsType> = (props: menuItemPropsType) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={props.menuItems}/>           
        </S.DesktopMenu>
    );
}


