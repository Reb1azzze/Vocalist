import React from 'react';
import styles from './MyPerformance.module.scss'
import { Carousel } from "antd";
import performance1 from "../../assets/jpg/performance-1.jpg";
import performance2 from "../../assets/jpg/performance-2.jpg";
import performance3 from "../../assets/jpg/performance-3.jpg";
import performance6 from "../../assets/jpg/performance-6.jpg";
const MyPerformance = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.performanceText}>My Performance</h3>
            <div className={styles.sliderContainer}>
                <Carousel arrows={true} draggable={true} autoplay={true} dotPosition='top'>
                    <img src={performance1} alt={''}/>
                    <img src={performance2} alt={''}/>
                    <img src={performance3} alt={''}/>
                    <img src={performance6} alt={''}/>
                </Carousel>
            </div>
        </div>
    );
};

export default MyPerformance;