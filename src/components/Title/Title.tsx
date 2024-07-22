import React from 'react';
import styles from './Title.module.scss'

interface TitleProps {
    title: string
}

const Title = (props: TitleProps) => {
    return (
        <h3 className={styles.title}>{props.title}</h3>
    );
};

export default Title;