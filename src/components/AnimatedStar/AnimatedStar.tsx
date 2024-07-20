import React from 'react';
import styles from "./AnimatedStar.module.scss"

interface AnimatedStarProps {
    top: string;
    right: string;
}

const AnimatedStar = (props: AnimatedStarProps) => {
    return (
        <div className={styles.container} style={{top: props.top, right:props.right}}/>
    );
};

export default AnimatedStar;