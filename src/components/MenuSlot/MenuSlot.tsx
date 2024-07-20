import React from 'react';
import styles from './MenuSlot.module.scss';
import { useNavigate } from "react-router-dom";
import BlurredTextBlock from "../BlurredTextBlock/BlurredTextBlock";

interface MenuSlotProps {
    title: string;
    image: string;
    DarkBackground:() => void;
    LightBackground:() => void;
    navigate: string;
    toDark: boolean;
    isHovering: boolean;
}

const MenuSlot = (props:MenuSlotProps) => {
    let navigate = useNavigate();
    const image = `url(${props.image})`;
    return (
        <div className={props.toDark ?styles.container + ' ' + styles.darkBackground: styles.container}
             style={{backgroundImage: image}}
             onMouseEnter={props.DarkBackground}
             onMouseLeave={props.LightBackground}
             onClick={() => navigate(props.navigate)}>
            <BlurredTextBlock title={props.title} star={props.isHovering}/>
        </div>
    );
};

export default MenuSlot;