import React from 'react';
import styles from "./BluredTextBlock.module.scss";
import AnimatedStar from "../AnimatedStar/AnimatedStar";

interface BlurredTextBlockProps {
    title: string;
    star: boolean;
}

const BlurredTextBlock = (props:BlurredTextBlockProps) => {
    return (
        <div className={styles.titleBlock}>
            {props.star ? <AnimatedStar right={'-100px'} top={'-40px'}/> : <></>}
            <div className={styles.innerBlock}>
                <h3 className={styles.title}>{props.title}</h3>
            </div>
        </div>
    );
};

export default BlurredTextBlock;