import React from 'react';
import PhotoSlider from "../PhotoSlider/PhotoSlider";
import styles from './Performance.module.scss'
const Performance = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.performanceText}>My Performance</h3>
            <PhotoSlider/>
        </div>
    );
};

export default Performance;