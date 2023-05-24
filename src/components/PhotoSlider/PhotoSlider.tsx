import React from 'react';
import { Carousel } from "antd";
import performance1 from '../../assets/jpg/performance-1.jpg'
import performance2 from '../../assets/jpg/performance-2.jpg'
import performance3 from '../../assets/jpg/performance-3.jpg'
import performance4 from '../../assets/jpg/performance-4.jpg'
import performance5 from '../../assets/jpg/performance-5.jpg'
import performance6 from '../../assets/jpg/performance-6.jpg'
import styles from './PhotoSlider.module.scss'
const PhotoSlider = () => {
    return (
        <div>
            <div className={styles.sliderContainer}>
                <Carousel autoplay dotPosition='top'>
                    <img src={performance1} alt={''} className={styles.photoItem}/>
                    <img src={performance2} alt={''} className={styles.photoItem}/>
                    <img src={performance3} alt={''} className={styles.photoItem}/>
                    <img src={performance4} alt={''} className={styles.photoItem}/>
                    <img src={performance5} alt={''} className={styles.photoItem}/>
                    <img src={performance6} alt={''} className={styles.photoItem}/>
                </Carousel>
            </div>
        </div>
    );
};

export default PhotoSlider;