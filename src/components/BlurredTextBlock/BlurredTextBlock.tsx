import React from 'react';
import styles from "./BluredTextBlock.module.scss";

interface BlurredTextBlockProps {
    title: string;
}

const BlurredTextBlock = (props:BlurredTextBlockProps) => {
    return (
        <div className={styles.titleBlock}>
            <div className={styles.innerBlock}>
                <h3 className={styles.title}>{props.title}</h3>
            </div>
        </div>
    );
};

export default BlurredTextBlock;