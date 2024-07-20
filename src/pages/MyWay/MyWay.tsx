import React from 'react';
import SpecificInformation from "../../components/SpecificInformation/SpecificInformation";
import MyPerformance from "../../components/MyPerformance/MyPerformance";
import MainPhoto from "../../assets/jpg/MyWay.jpg"
import ReviewSlider from "../../components/ReviewSlider/ReviewSlider";
import BlurredTextBlock from "../../components/BlurredTextBlock/BlurredTextBlock";
import ChatForm from "../../components/ChatForm/ChatForm";
import { motion } from "framer-motion";
import styles from "./MyWay.module.scss"
const MyWay = () => {
    return (
        <motion.div className={styles.container}
                    initial={{opacity:0}}
                    animate={{opacity: 1, transition:{duration:1}}}
                    exit={{opacity:0}}>
            <motion.div
                className={styles.mainPhoto}
                initial={{position:"fixed",opacity:1,top:"80px",left:"200px"}}
                animate={{x:"-200px",transition:{duration:0.5}}}
                exit={{x:"-150px",transition:{duration:0.2}}}
                style={{backgroundImage: `url(${MainPhoto})`}}>
                <BlurredTextBlock title={"Мой путь"} star={true}/>
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

export default MyWay;