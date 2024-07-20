import React from 'react';
import { motion } from 'framer-motion';
import styles from "../MyWay/MyWay.module.scss";
import VocalLessonsJpg from "../../assets/jpg/VocalLessons.jpg"
import SpecificInformation from "../../components/SpecificInformation/SpecificInformation";
import MyPerformance from "../../components/MyPerformance/MyPerformance";
import ReviewSlider from "../../components/ReviewSlider/ReviewSlider";
import BlurredTextBlock from "../../components/BlurredTextBlock/BlurredTextBlock";
import ChatForm from "../../components/ChatForm/ChatForm";
const VocalLessons = () => {
    return (
        <motion.div
            className={styles.container}
            initial={{opacity: 0}}
            animate={{opacity: 1}} 
            exit={{opacity: 0,transition:{duration:0.2}}}>
            <motion.div
                className={styles.mainPhoto}
                initial={{position:"fixed",opacity:1,top:"80px",left:"450px"}}
                animate={{x:"-450px",transition:{duration:0.5}}}
                exit={{x:"10px",transition:{duration:0.2}}}
                style={{backgroundImage: `url(${VocalLessonsJpg})`}}>
                <BlurredTextBlock title={"Обучение"}/>
            </motion.div>
            <div className={styles.chatForm}>
                <ChatForm/>
            </div>
            <SpecificInformation/>
            <MyPerformance/>
            <SpecificInformation/>
            <ReviewSlider/>
        </motion.div>
    );
};

export default VocalLessons;