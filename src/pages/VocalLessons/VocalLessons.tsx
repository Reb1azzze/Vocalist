import React from 'react';
import { motion } from 'framer-motion';
import styles from "../MyWay/MyWay.module.scss";
import SpecificInformation from "../../components/SpecificInformation/SpecificInformation";
import MyPerformance from "../../components/MyPerformance/MyPerformance";
import VocalLessonsJpg from "../../assets/jpg/VocalLessons.jpg"
import ChatForm from "../../components/ChatForm/ChatForm";
import ReviewSlider from "../../components/ReviewSlider/ReviewSlider";
import BlurredTextBlock from "../../components/BlurredTextBlock/BlurredTextBlock";
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
                <BlurredTextBlock title={"Уроки вокала"}/>
            </motion.div>
            <ChatForm minimize={true}/>
            <SpecificInformation/>
            <MyPerformance/>
            <SpecificInformation/>
            <ReviewSlider/>
        </motion.div>
    );
};

export default VocalLessons;