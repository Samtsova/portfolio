import iconsSprite from '../../assets/images/icon-sprite.svg'

type IconPropsType = {
    iconId: string;
    width?: string ;
    height?: string;
    viewBox?:string;
}

export const Icon:React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg width={props.width || "120px"} height={props.height|| "120px"} viewBox={props.viewBox||"0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    )
}

