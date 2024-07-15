import React from 'react';
import styles from "./BluredTextBlock.module.scss";

interface BlurredTextBlockProps {
    title: string;
}

const BlurredTextBlock = (props:BlurredTextBlockProps) => {
    return (
        <div className={styles.titleBlock}>
            <h3 className={styles.title}>{props.title}</h3>
        </div>
    );
};

export default BlurredTextBlock;