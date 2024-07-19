import React from 'react';
import {Carousel} from "antd";
import styles from "./ReviewSlider.module.scss";
import review1 from "../../assets/jpg/review1.png"
import review2 from "../../assets/jpg/review2.png"
import review3 from "../../assets/jpg/review3.png"
import review4 from "../../assets/jpg/review4.png"
import review5 from "../../assets/jpg/review5.png"


const ReviewSlider = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.performanceText}>Отзывы</h3>
            <div className={styles.sliderContainer}>
                <Carousel arrows={true} draggable={true} autoplay={true} dotPosition='top'>
                    <img src={review1} alt={''}/>
                    <img src={review2} alt={''}/>
                    <img src={review3} alt={''}/>
                    <img src={review4} alt={''}/>
                    <img src={review5} alt={''}/>
                </Carousel>
            </div>
        </div>
    );
};

export default ReviewSlider;